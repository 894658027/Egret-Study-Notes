var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Timer = (function (_super) {
    __extends(Timer, _super);
    function Timer() {
        var _this = _super.call(this) || this;
        //创建一个计时器对象,每隔0.5秒执行一次，一共执行5次
        var timer = new egret.Timer(500, 5);
        //注册事件侦听器
        timer.addEventListener(egret.TimerEvent.TIMER, _this.timerFunc, _this);
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, _this.timerComFunc, _this);
        //开始计时
        timer.start();
        return _this;
    }
    Timer.getInstance = function () {
        if (!Timer.shared) {
            Timer.shared = new Timer();
        }
        return Timer.shared;
    };
    Timer.prototype.timerFunc = function () {
        console.log("计时");
    };
    Timer.prototype.timerComFunc = function () {
        console.log("计时结束");
    };
    return Timer;
}(egret.DisplayObjectContainer));
__reflect(Timer.prototype, "Timer");
//# sourceMappingURL=Timer.js.map