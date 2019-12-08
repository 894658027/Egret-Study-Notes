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
var startTickerTest = (function (_super) {
    __extends(startTickerTest, _super);
    function startTickerTest() {
        var _this = _super.call(this) || this;
        _this.speed = 0.05;
        _this.time = 0;
        _this.once(egret.Event.ADDED_TO_STAGE, _this.onLoad, _this);
        return _this;
    }
    startTickerTest.prototype.onLoad = function (event) {
        var star = new egret.Bitmap(RES.getRes("egret_icon_png"));
        this.addChild(star);
        this.star = star;
        this.time = egret.getTimer();
        egret.startTick(this.moveStar, this);
    };
    startTickerTest.prototype.moveStar = function (timeStamp) {
        var now = timeStamp;
        var time = this.time;
        var pass = now - time;
        console.log("moveStar: ", (1000 / pass).toFixed(5));
        this.star.x += this.speed * pass;
        if (this.star.x > 300)
            egret.stopTick(this.moveStar, this);
        this.time = now;
        return false;
    };
    return startTickerTest;
}(egret.DisplayObjectContainer));
__reflect(startTickerTest.prototype, "startTickerTest");
//# sourceMappingURL=startTickerTest.js.map