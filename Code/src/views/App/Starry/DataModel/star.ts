export const initStar = function (dom: HTMLElement) {
    // 创建canvas
    let width = dom.offsetWidth;
    let height = dom.offsetHeight;
    let canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    dom.appendChild(canvas)
    let context = canvas.getContext("2d") as CanvasRenderingContext2D;
    
    // start 配置参数
    let numStars = 600;
    let stars:Array<any> = [];
    let twinkleFactor = .5;
    let maxStarRadius = 1;

    let Star = function (this: any) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.r = Math.random() * maxStarRadius;
        this.b = ~~(Math.random() * 100) / 100;
    };

    Star.prototype.draw = function () {
        this.b += twinkleFactor * (Math.random() - 0.5);
        context.fillStyle = "rgba(255,255,255," + this.b + ")";
        context.beginPath();
        context.arc(~~this.x, ~~this.y, this.r, 10, Math.PI * 3);
        context.fill();
        context.closePath();
    };

    function createStars() {
        for (let i = numStars; i--;) stars.push(new (Star as any)());
    }

    function main() {
        context.fillStyle = "#000";
        context.fillRect(0, 0, width, height);
        for (let i = numStars; i--;) stars[i].draw();
        window.requestAnimationFrame(main);
    }

    function init() {
        createStars();
        main();
    }
    init();
}

