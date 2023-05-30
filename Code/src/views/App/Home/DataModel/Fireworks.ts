import Tools from "@/utils/tools";

let burstPlayer = new Audio(
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/329180/burst2.mp3"
);
let liftPlayer = new Audio(
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/329180/lift2.mp3"
);
let createPlayer = function (url: string) {
    let player = new Audio(url);
    player.play();
    return player;
};
let hitTest = function (
    x1: number,
    y1: number,
    w1: any,
    h1: any,
    x2: number,
    y2: number,
    w2: number,
    h2: number
) {
    return !(x1 + w1 < x2 || x2 + w2 < x1 || y1 + h1 < y2 || y2 + h2 < y1);
};

const Firework: any = {
    // 初始化参数 及 canvas
    init: function () {
        Firework.canvas = document.createElement("canvas");
        Firework.canvas.width = Firework.cw = window.innerWidth;
        Firework.canvas.height = Firework.ch = window.innerHeight;
        Firework.particles = [];
        Firework.partCount = 600; // 烟花数量
        Firework.fireworks = [];
        Firework.mx = Firework.cw / 5;
        Firework.my = Firework.ch / 5;
        Firework.currentHue = 30;
        Firework.partSpeed = 4; // 烟花大小
        Firework.partSpeedVariance = 8; // 烟花大小
        Firework.partWind = 120; // 烟花绽放后的曲度
        Firework.partFriction = 6; // 烟花大小
        Firework.partGravity = 1; // 绽放方向
        Firework.hueMin = 0;
        Firework.hueMax = 360;
        Firework.fworkSpeed = 3; // 发射速度
        Firework.fworkAccel = 0.3;
        Firework.hueVariance = 20; // 烟花颜色数量
        Firework.flickerDensity = 20; // 闪烁密度
        Firework.showShockwave = true;
        Firework.showTarget = false;
        Firework.clearAlpha = 15; // 尾焰长度，发射及烟花
        Firework.stop = "";

        (document.querySelector(".fireworkOverlay") as HTMLElement).appendChild(
            Firework.canvas
        );
        Firework.ctx = Firework.canvas.getContext("2d");
        Firework.ctx.lineCap = "round";
        Firework.ctx.lineJoin = "round";
        Firework.lineWidth = 1;
        Firework.bindEvents();
        Firework.canvasLoop();
        Firework.canvas.onselectstart = function () {
            return false;
        };
        window.requestAnimationFrame = (function () {
            return (
                window.requestAnimationFrame ||
                (window as any).webkitRequestAnimationFrame ||
                (window as any).mozRequestAnimationFrame ||
                (window as any).oRequestAnimationFrame ||
                (window as any).msRequestAnimationFrame ||
                function (a) {
                    window.setTimeout(a, 1e3 / 60);
                }
            );
        })();
    },

    /**
     * 创建颗粒
     * @param x
     * @param y
     * @param hue
     */
    createParticles: function (x: any, y: any, hue: number) {
        burstPlayer.play();
        // createPlayer('https://s3-us-west-2.amazonaws.com/s.cdpn.io/329180/burst2.mp3')
        var countdown = Firework.partCount;
        while (countdown--) {
            var newParticle = {
                x,
                y,
                coordLast: [
                    { x, y },
                    { x, y },
                    { x, y },
                ],
                angle: Tools.getRandom(0, 360),
                speed: Tools.getRandom(
                    Firework.partSpeed - Firework.partSpeedVariance <= 0
                        ? 1
                        : Firework.partSpeed - Firework.partSpeedVariance,
                    Firework.partSpeed + Firework.partSpeedVariance
                ),
                friction: 1 - Firework.partFriction / 100,
                gravity: Firework.partGravity / 2,
                hue: Tools.getRandom(hue - Firework.hueVariance, hue + Firework.hueVariance),
                brightness: Tools.getRandom(50, 80),
                alpha: Tools.getRandom(40, 100) / 50,
                decay: Tools.getRandom(10, 50) / 1000,
                wind: (Tools.getRandom(0, Firework.partWind) - Firework.partWind / 2) / 20,
                lineWidth: Firework.lineWidth,
            };
            Firework.particles.push(newParticle);
        }
    },
    /**
     * 更新
     */
    updateParticles: function () {
        var i = Firework.particles.length;
        while (i--) {
            var p = Firework.particles[i];
            var radians = (p.angle * Math.PI) / 180;
            var vx = Math.cos(radians) * p.speed;
            var vy = Math.sin(radians) * p.speed;
            p.speed *= p.friction;
            p.coordLast[2].x = p.coordLast[1].x;
            p.coordLast[2].y = p.coordLast[1].y;
            p.coordLast[1].x = p.coordLast[0].x;
            p.coordLast[1].y = p.coordLast[0].y;
            p.coordLast[0].x = p.x;
            p.coordLast[0].y = p.y;
            p.x += vx;
            p.y += vy;
            p.y += p.gravity;
            p.angle += p.wind;
            p.alpha -= p.decay;

            if (
                !hitTest(
                    0,
                    0,
                    Firework.cw,
                    Firework.ch,
                    p.x - p.radius,
                    p.y - p.radius,
                    p.radius * 2,
                    p.radius * 2
                ) ||
                p.alpha < 0.05
            ) {
                Firework.particles.splice(i, 1);
            }
        }
    },

    drawParticles: function () {
        var i = Firework.particles.length;
        while (i--) {
            var p = Firework.particles[i];
            var coordRand = Tools.getRandom(1, 3) - 1;
            Firework.ctx.beginPath();
            Firework.ctx.moveTo(
                Math.round(p.coordLast[coordRand].x),
                Math.round(p.coordLast[coordRand].y)
            );
            Firework.ctx.lineTo(Math.round(p.x), Math.round(p.y));
            Firework.ctx.closePath();
            Firework.ctx.strokeStyle =
                "hsla(" + p.hue + ", 100%, " + p.brightness + "%, " + p.alpha + ")";
            Firework.ctx.stroke();

            if (Firework.flickerDensity > 0) {
                var inverseDensity = 50 - Firework.flickerDensity;
                if (Tools.getRandom(0, inverseDensity) === inverseDensity) {
                    Firework.ctx.beginPath();
                    Firework.ctx.arc(
                        Math.round(p.x),
                        Math.round(p.y),
                        Tools.getRandom(p.lineWidth, p.lineWidth + 3) / 2,
                        0,
                        Math.PI * 2,
                        false
                    );
                    Firework.ctx.closePath();
                    var randAlpha = Tools.getRandom(50, 100) / 100;
                    Firework.ctx.fillStyle =
                        "hsla(" + p.hue + ", 100%, " + p.brightness + "%, " + randAlpha + ")";
                    Firework.ctx.fill();
                }
            }
        }
    },
    /**
     * 创建烟花
     * @param startX
     * @param startY
     * @param targetX
     * @param targetY
     */
    createFireworks: function (
        startX: number,
        startY: number,
        targetX: number,
        targetY: number
    ) {
        liftPlayer.play();
        // createPlayer('https://s3-us-west-2.amazonaws.com/s.cdpn.io/329180/lift2.mp3')
        var newFirework = {
            x: startX,
            y: startY,
            startX: startX,
            startY: startY,
            hitX: false,
            hitY: false,
            coordLast: [
                { x: startX, y: startY },
                { x: startX, y: startY },
                { x: startX, y: startY },
            ],
            targetX: targetX,
            targetY: targetY,
            speed: Firework.fworkSpeed,
            angle: Math.atan2(targetY - startY, targetX - startX),
            shockwaveAngle:
                Math.atan2(targetY - startY, targetX - startX) + 90 * (Math.PI / 180),
            acceleration: Firework.fworkAccel / 100,
            hue: Firework.currentHue,
            brightness: Tools.getRandom(50, 80),
            alpha: Tools.getRandom(50, 100) / 100,
            lineWidth: Firework.lineWidth,
        };
        Firework.fireworks.push(newFirework);
    },

    updateFireworks: function () {
        var i = Firework.fireworks.length;
        while (i--) {
            var f = Firework.fireworks[i];
            Firework.ctx.lineWidth = f.lineWidth;
            const vx = Math.cos(f.angle) * f.speed;
            const vy = Math.sin(f.angle) * f.speed;
            f.speed *= 1 + f.acceleration;
            f.coordLast[2].x = f.coordLast[1].x;
            f.coordLast[2].y = f.coordLast[1].y;
            f.coordLast[1].x = f.coordLast[0].x;
            f.coordLast[1].y = f.coordLast[0].y;
            f.coordLast[0].x = f.x;
            f.coordLast[0].y = f.y;

            if (f.startX >= f.targetX) {
                if (f.x + vx <= f.targetX) {
                    f.x = f.targetX;
                    f.hitX = true;
                } else {
                    f.x += vx;
                }
            } else {
                if (f.x + vx >= f.targetX) {
                    f.x = f.targetX;
                    f.hitX = true;
                } else {
                    f.x += vx;
                }
            }

            if (f.startY >= f.targetY) {
                if (f.y + vy <= f.targetY) {
                    f.y = f.targetY;
                    f.hitY = true;
                } else {
                    f.y += vy;
                }
            } else {
                if (f.y + vy >= f.targetY) {
                    f.y = f.targetY;
                    f.hitY = true;
                } else {
                    f.y += vy;
                }
            }

            if (f.hitX && f.hitY) {
                Firework.createParticles(f.targetX, f.targetY, f.hue);
                Firework.fireworks.splice(i, 1);
            }
        }
    },

    drawFireworks: function () {
        var i = Firework.fireworks.length;
        Firework.ctx.globalCompositeOperation = "lighter";
        while (i--) {
            var f = Firework.fireworks[i];
            Firework.ctx.lineWidth = f.lineWidth;
            var coordRand = Tools.getRandom(1, 3) - 1;
            Firework.ctx.beginPath();
            Firework.ctx.moveTo(
                Math.round(f.coordLast[coordRand].x),
                Math.round(f.coordLast[coordRand].y)
            );
            Firework.ctx.lineTo(Math.round(f.x), Math.round(f.y));
            Firework.ctx.closePath();
            Firework.ctx.strokeStyle =
                "hsla(" + f.hue + ", 100%, " + f.brightness + "%, " + f.alpha + ")";
            Firework.ctx.stroke();

            if (Firework.showTarget) {
                Firework.ctx.save();
                Firework.ctx.beginPath();
                Firework.ctx.arc(
                    Math.round(f.targetX),
                    Math.round(f.targetY),
                    Tools.getRandom(1, 8),
                    0,
                    Math.PI * 2,
                    false
                );
                Firework.ctx.closePath();
                Firework.ctx.lineWidth = 1;
                Firework.ctx.stroke();
                Firework.ctx.restore();
            }

            if (Firework.showShockwave) {
                Firework.ctx.save();
                Firework.ctx.translate(Math.round(f.x), Math.round(f.y));
                Firework.ctx.rotate(f.shockwaveAngle);
                Firework.ctx.beginPath();
                Firework.ctx.arc(0, 0, 1 * (f.speed / 5), 0, Math.PI, true);
                Firework.ctx.strokeStyle =
                    "hsla(" +
                    f.hue +
                    ", 100%, " +
                    f.brightness +
                    "%, " +
                    Tools.getRandom(25, 60) / 100 +
                    ")";
                Firework.ctx.lineWidth = f.lineWidth;
                Firework.ctx.stroke();
                Firework.ctx.restore();
            }
        }
    },

    bindEvents: function () {
        window.onresize = function () {
            clearTimeout(Firework.timeout);
            Firework.timeout = setTimeout(function () {
                Firework.canvas.width = Firework.cw = window.innerWidth;
                Firework.canvas.height = Firework.ch = window.innerHeight;
                Firework.ctx.lineCap = "round";
                Firework.ctx.lineJoin = "round";
            }, 100);
        };

        // 点击 canvas 生成烟花
        // Firework.canvas.onmousedown = function (e: { pageX: number; pageY: number; }) {
        //     Firework.mx = e.pageX - Firework.canvas.offsetLeft;
        //     Firework.my = e.pageY - Firework.canvas.offsetTop;
        //     Firework.currentHue = Tools.getRandom(Firework.hueMin, Firework.hueMax);
        //     Firework.createFireworks(Firework.cw / 2, Firework.ch, Firework.mx, Firework.my);

        //     Firework.canvas.onmousemove.fireworks = function (e: { pageX: number; pageY: number; }) {
        //         Firework.mx = e.pageX - Firework.canvas.offsetLeft;
        //         Firework.my = e.pageY - Firework.canvas.offsetTop;
        //         Firework.currentHue = Tools.getRandom(Firework.hueMin, Firework.hueMax);
        //         Firework.createFireworks(Firework.cw / 2, Firework.ch, Firework.mx, Firework.my);
        //     };
        // };

        // Firework.canvas.onmouseup, function (e: any) {
        //     Firework.canvas.mousemove.fireworks = null
        // };
    },
    /**
     * 重置canvas
     */
    clear: function () {
        Firework.particles = [];
        Firework.fireworks = [];
        Firework.ctx.clearRect(0, 0, Firework.cw, Firework.ch);
    },

    canvasLoop: function () {
        Firework.stop = requestAnimationFrame(Firework.canvasLoop);
        Firework.ctx.globalCompositeOperation = "destination-out";
        Firework.ctx.fillStyle = "rgba(100,0,0," + Firework.clearAlpha / 100 + ")";
        Firework.ctx.fillRect(0, 0, Firework.cw, Firework.ch);
        Firework.updateFireworks();
        Firework.updateParticles();
        Firework.drawFireworks();
        Firework.drawParticles();
    },
};

export default Firework;
