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
var Frame = (function (_super) {
    __extends(Frame, _super);
    function Frame() {
        var _this = _super.call(this) || this;
        //设置动画的移动速度
        _this.speed = 0.05;
        _this.timeOnEnterFrame = 0;
        _this.once(egret.Event.ADDED_TO_STAGE, _this.onLoad, _this);
        return _this;
    }
    Frame.prototype.onLoad = function (event) {
        var star = new egret.Bitmap(RES.getRes("star_png"));
        this.addChild(star);
        this.star = star;
        console.log(star);
        this.star.y = 100;
        this.star.x = 0;
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        this.timeOnEnterFrame = egret.getTimer();
    };
    Frame.prototype.onEnterFrame = function (e) {
        var now = egret.getTimer();
        var time = this.timeOnEnterFrame;
        var pass = now - time;
        //console.log("onEnterFrame: ", (1000 / pass).toFixed(5),pass);
        this.star.x += this.speed * pass;
        this.timeOnEnterFrame = egret.getTimer();
        if (this.star.x > 300)
            this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    return Frame;
}(egret.DisplayObjectContainer));
__reflect(Frame.prototype, "Frame");
//# sourceMappingURL=Frame.js.map