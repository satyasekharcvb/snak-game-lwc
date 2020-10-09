import { LightningElement, track } from 'lwc';
export default class Game extends LightningElement {
    blockSize = 20;
    @track gameBlocks = [];

    score = 0;
    renderComplete = false;
    xSpeed = 1;
    ySpeed = 0;

    xHead = 0;
    yHead = 0;

    xMax;
    yMax;

    tail = [];

    startGame() {
        setInterval(() => {
            this.move();
        }, 300);
    }

    move() {
        const currentHead = `${this.xHead}:${this.yHead}`;

        this.xHead += this.xSpeed;
        this.yHead += this.ySpeed;

        if (this.xHead >= this.xMax) {
            this.xHead = 0;
        }
        if (this.xHead < 0) {
            this.xHead = this.xMax - 1;
        }
        if (this.yHead >= this.yMax) {
            this.yHead = 0;
        }
        if (this.yHead < 0) {
            this.yHead = this.yMax - 1;
        }

        let newPosIndex = this.gameBlocks.findIndex(
            (x) => x.id === `${this.xHead}:${this.yHead}`
        );
        this.gameBlocks[newPosIndex].snake = true;
        this.gameBlocks[newPosIndex].class = 'snake';

        if (this.gameBlocks[newPosIndex].food) {
            this.score++;
            this.tail.unshift(currentHead);
            this.gameBlocks[newPosIndex].food = false;
            this.generateFood();
        } else {
            this.tail.unshift(currentHead);
            const removedElement = this.tail.pop();
            const curPosIndex = this.gameBlocks.findIndex(
                (x) => x.id === removedElement
            );
            this.gameBlocks[curPosIndex].snake = false;
            this.gameBlocks[curPosIndex].class = '';
        }

        if (this.tail.includes(`${this.xHead}:${this.yHead}`)) {
            alert('game over');
            this.score = 0;
            this.tail = [];
            this.xHead = 0;
            this.yHead = 0;
        }
    }

    addKeyboardControls() {
        window.addEventListener('keydown', (e) => {
            e.preventDefault();
            switch (e.key) {
                case 'ArrowUp':
                    this.xSpeed = 0;
                    this.ySpeed = -1;
                    break;
                case 'ArrowDown':
                    this.xSpeed = 0;
                    this.ySpeed = 1;
                    break;
                case 'ArrowLeft':
                    this.xSpeed = -1;
                    this.ySpeed = 0;
                    break;
                case 'ArrowRight':
                    this.xSpeed = 1;
                    this.ySpeed = 0;
                    break;
                default:
                    break;
            }
        });
    }

    generateFood() {
        const xFood = Math.floor(Math.random() * (this.xMax - 1));
        const yFood = Math.floor(Math.random() * (this.yMax - 1));

        const foodPosIndex = this.gameBlocks.findIndex(
            (x) => x.id === `${xFood}:${yFood}`
        );
        this.gameBlocks[foodPosIndex].food = true;
        this.gameBlocks[foodPosIndex].class = 'food';
    }

    renderedCallback() {
        if (!this.renderComplete) {
            let eWidth = this.template.querySelector('.game-container')
                .clientWidth;
            let eHeight = this.template.querySelector('.game-container')
                .clientHeight;

            this.xMax = Math.floor(eWidth / this.blockSize);
            this.yMax = Math.floor(eHeight / this.blockSize);

            let tmpBlocks = [];
            for (let y = 0; y < this.yMax; y++) {
                for (let x = 0; x < this.xMax; x++) {
                    let obj;
                    if (x === 0 && y === 0) {
                        obj = {
                            id: `${x}:${y}`,
                            snake: true,
                            food: false,
                            class: 'snake'
                        };
                    } else {
                        obj = {
                            id: `${x}:${y}`,
                            snake: false,
                            food: false,
                            class: ''
                        };
                    }
                    tmpBlocks.push(obj);
                }
            }
            this.gameBlocks = tmpBlocks;
            this.renderComplete = true;
            this.addKeyboardControls();
            this.generateFood();
            this.startGame();
        }
    }
}
