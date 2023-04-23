import Tools from '@/utils/tools'

var self: any = {};
var burstPlayer = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/329180/burst2.mp3')
var liftPlayer = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/329180/lift2.mp3')
var createPlayer = function (url: string) {
    let player = new Audio(url)
    player.play()
    return player
}
var hitTest = function (x1: number, y1: number, w1: any, h1: any, x2: number, y2: number, w2: number, h2: number) {
    return !(x1 + w1 < x2 || x2 + w2 < x1 || y1 + h1 < y2 || y2 + h2 < y1); 
};
var Fireworks = function () {
    window.requestAnimationFrame = function () {
        return window.requestAnimationFrame || 
        (window as any).webkitRequestAnimationFrame || 
        (window as any).mozRequestAnimationFrame || 
        (window as any).oRequestAnimationFrame || 
        (window as any).msRequestAnimationFrame || function (a) { window.setTimeout(a, 1E3 / 60) } 
    }();

    // 初始化参数 及 canvas
    self.init = function () {
        self.canvas = document.createElement('canvas');
        self.canvas.width = self.cw = window.innerWidth;
        self.canvas.height = self.ch = window.innerHeight;
        self.particles = [];
        self.partCount = 600;                   // 烟花数量
        self.fireworks = [];
        self.mx = self.cw / 5;
        self.my = self.ch / 5;
        self.currentHue = 30;
        self.partSpeed = 4;                     // 烟花大小
        self.partSpeedVariance = 8;             // 烟花大小
        self.partWind = 120;                    // 烟花绽放后的曲度
        self.partFriction = 6;                  // 烟花大小
        self.partGravity = 1;                   // 绽放方向
        self.hueMin = 0;
        self.hueMax = 360;
        self.fworkSpeed = 3;                    // 发射速度
        self.fworkAccel = .3;
        self.hueVariance = 20;                  // 烟花颜色数量
        self.flickerDensity = 20;               // 闪烁密度
        self.showShockwave = true;
        self.showTarget = false;
        self.clearAlpha = 15;                   // 尾焰长度，发射及烟花
        self.stop = '';

        (document.querySelector('.fireworkOverlay') as HTMLElement).appendChild(self.canvas);
        self.ctx = self.canvas.getContext('2d');
        self.ctx.lineCap = 'round';
        self.ctx.lineJoin = 'round';
        self.lineWidth = 1;
        self.bindEvents();
        self.canvasLoop();
        self.canvas.onselectstart = function () {
            return false;
        };
    };

    /**
     * 创建颗粒
     * @param x 
     * @param y 
     * @param hue 
     */
    self.createParticles = function (x: any, y: any, hue: number) {
        burstPlayer.play()
        // createPlayer('https://s3-us-west-2.amazonaws.com/s.cdpn.io/329180/burst2.mp3')
        var countdown = self.partCount;
        while (countdown--) {
            var newParticle = {
                x,
                y,
                coordLast: [
                    { x, y },
                    { x, y },
                    { x, y }
                ],
                angle: Tools.getRandom(0, 360),
                speed: Tools.getRandom(((self.partSpeed - self.partSpeedVariance) <= 0) ? 1 : self.partSpeed - self.partSpeedVariance, (self.partSpeed + self.partSpeedVariance)),
                friction: 1 - self.partFriction / 100,
                gravity: self.partGravity / 2,
                hue: Tools.getRandom(hue - self.hueVariance, hue + self.hueVariance),
                brightness: Tools.getRandom(50, 80),
                alpha: Tools.getRandom(40, 100) / 50,
                decay: Tools.getRandom(10, 50) / 1000,
                wind: (Tools.getRandom(0, self.partWind) - (self.partWind / 2)) / 20,
                lineWidth: self.lineWidth
            };
            self.particles.push(newParticle);
        }
    };
    /**
     * 更新
     */
    self.updateParticles = function () {
        var i = self.particles.length;
        while (i--) {
            var p = self.particles[i];
            var radians = p.angle * Math.PI / 180;
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

            if (!hitTest(0, 0, self.cw, self.ch, p.x - p.radius, p.y - p.radius, p.radius * 2, p.radius * 2) || p.alpha < .05) {
                self.particles.splice(i, 1);
            }
        };
    };
    
    self.drawParticles = function () {
        var i = self.particles.length;
        while (i--) {
            var p = self.particles[i];
            var coordRand = (Tools.getRandom(1, 3) - 1);
            self.ctx.beginPath();
            self.ctx.moveTo(Math.round(p.coordLast[coordRand].x), Math.round(p.coordLast[coordRand].y));
            self.ctx.lineTo(Math.round(p.x), Math.round(p.y));
            self.ctx.closePath();
            self.ctx.strokeStyle = 'hsla(' + p.hue + ', 100%, ' + p.brightness + '%, ' + p.alpha + ')';
            self.ctx.stroke();

            if (self.flickerDensity > 0) {
                var inverseDensity = 50 - self.flickerDensity;
                if (Tools.getRandom(0, inverseDensity) === inverseDensity) {
                    self.ctx.beginPath();
                    self.ctx.arc(Math.round(p.x), Math.round(p.y), Tools.getRandom(p.lineWidth, p.lineWidth + 3) / 2, 0, Math.PI * 2, false)
                    self.ctx.closePath();
                    var randAlpha = Tools.getRandom(50, 100) / 100;
                    self.ctx.fillStyle = 'hsla(' + p.hue + ', 100%, ' + p.brightness + '%, ' + randAlpha + ')';
                    self.ctx.fill();
                }
            }
        };
    };
    /**
     * 创建烟花
     * @param startX 
     * @param startY 
     * @param targetX 
     * @param targetY 
     */
    self.createFireworks = function (startX: number, startY: number, targetX: number, targetY: number) {
        liftPlayer.play()
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
                { x: startX, y: startY }
            ],
            targetX: targetX,
            targetY: targetY,
            speed: self.fworkSpeed,
            angle: Math.atan2(targetY - startY, targetX - startX),
            shockwaveAngle: Math.atan2(targetY - startY, targetX - startX) + (90 * (Math.PI / 180)),
            acceleration: self.fworkAccel / 100,
            hue: self.currentHue,
            brightness: Tools.getRandom(50, 80),
            alpha: Tools.getRandom(50, 100) / 100,
            lineWidth: self.lineWidth
        };
        self.fireworks.push(newFirework);
    };

    self.updateFireworks = function () {
        var i = self.fireworks.length;
        while (i--) {
            var f = self.fireworks[i];
            self.ctx.lineWidth = f.lineWidth;
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
                self.createParticles(f.targetX, f.targetY, f.hue);
                self.fireworks.splice(i, 1);
            }
        };
    };

    self.drawFireworks = function () {
        var i = self.fireworks.length;
        self.ctx.globalCompositeOperation = 'lighter';
        while (i--) {
            var f = self.fireworks[i];
            self.ctx.lineWidth = f.lineWidth;
            var coordRand = (Tools.getRandom(1, 3) - 1);
            self.ctx.beginPath();
            self.ctx.moveTo(Math.round(f.coordLast[coordRand].x), Math.round(f.coordLast[coordRand].y));
            self.ctx.lineTo(Math.round(f.x), Math.round(f.y));
            self.ctx.closePath();
            self.ctx.strokeStyle = 'hsla(' + f.hue + ', 100%, ' + f.brightness + '%, ' + f.alpha + ')';
            self.ctx.stroke();

            if (self.showTarget) {
                self.ctx.save();
                self.ctx.beginPath();
                self.ctx.arc(Math.round(f.targetX), Math.round(f.targetY), Tools.getRandom(1, 8), 0, Math.PI * 2, false)
                self.ctx.closePath();
                self.ctx.lineWidth = 1;
                self.ctx.stroke();
                self.ctx.restore();
            }

            if (self.showShockwave) {
                self.ctx.save();
                self.ctx.translate(Math.round(f.x), Math.round(f.y));
                self.ctx.rotate(f.shockwaveAngle);
                self.ctx.beginPath();
                self.ctx.arc(0, 0, 1 * (f.speed / 5), 0, Math.PI, true);
                self.ctx.strokeStyle = 'hsla(' + f.hue + ', 100%, ' + f.brightness + '%, ' + Tools.getRandom(25, 60) / 100 + ')';
                self.ctx.lineWidth = f.lineWidth;
                self.ctx.stroke();
                self.ctx.restore();
            }
        };
    };

    self.bindEvents = function () {
        window.onresize = function () {
            clearTimeout(self.timeout);
            self.timeout = setTimeout(function () {
                self.canvas.width = self.cw = window.innerWidth;
                self.canvas.height = self.ch = window.innerHeight;
                self.ctx.lineCap = 'round';
                self.ctx.lineJoin = 'round';
            }, 100);
        };

        // 点击 canvas 生成烟花
        // self.canvas.onmousedown = function (e: { pageX: number; pageY: number; }) {
        //     self.mx = e.pageX - self.canvas.offsetLeft;
        //     self.my = e.pageY - self.canvas.offsetTop;
        //     self.currentHue = Tools.getRandom(self.hueMin, self.hueMax);
        //     self.createFireworks(self.cw / 2, self.ch, self.mx, self.my);

        //     self.canvas.onmousemove.fireworks = function (e: { pageX: number; pageY: number; }) {
        //         self.mx = e.pageX - self.canvas.offsetLeft;
        //         self.my = e.pageY - self.canvas.offsetTop;
        //         self.currentHue = Tools.getRandom(self.hueMin, self.hueMax);
        //         self.createFireworks(self.cw / 2, self.ch, self.mx, self.my);
        //     };
        // };

        // self.canvas.onmouseup, function (e: any) {
        //     self.canvas.mousemove.fireworks = null
        // };
    }
    /**
     * 重置canvas
     */
    self.clear = function () {
        self.particles = [];
        self.fireworks = [];
        self.ctx.clearRect(0, 0, self.cw, self.ch);
    };

    self.canvasLoop = function () {
        self.stop = requestAnimationFrame(self.canvasLoop);
        self.ctx.globalCompositeOperation = 'destination-out';
        self.ctx.fillStyle = 'rgba(100,0,0,' + self.clearAlpha / 100 + ')';
        self.ctx.fillRect(0, 0, self.cw, self.ch);
        self.updateFireworks();
        self.updateParticles();
        self.drawFireworks();
        self.drawParticles();
    };
    self.init();
}

export default {
    self,
    Fireworks
}
