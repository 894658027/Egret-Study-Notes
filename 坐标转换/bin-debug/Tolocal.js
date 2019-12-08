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
var Tolocal = (function (_super) {
    __extends(Tolocal, _super);
    function Tolocal() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.starGame, _this);
        return _this;
    }
    Tolocal.prototype.starGame = function () {
        this.container = new egret.DisplayObjectContainer();
        this.container.x = 200;
        this.container.y = 200;
        this.addChild(this.container);
        //画一个红色的圆，添加到 container 中
        this.circle = new egret.Shape();
        this.circle.graphics.beginFill(0xff0000);
        this.circle.graphics.drawCircle(25, 25, 25);
        this.circle.graphics.endFill();
        this.container.addChild(this.circle);
        //给圆增加点击事件
        this.circle.touchEnabled = true;
        this.circle.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
    };
    Tolocal.prototype.onClick = function () {
        //把舞台左上角的坐标(0,0)转换为 container 内部的坐标
        var targetPoint = this.container.globalToLocal(100, 150);
        console.log(targetPoint.x, targetPoint.y);
        //重新定位圆，可以看到圆形移到了屏幕的左上角
        this.circle.x = targetPoint.x;
        this.circle.y = targetPoint.y;
    };
    return Tolocal;
}(egret.DisplayObjectContainer));
__reflect(Tolocal.prototype, "Tolocal");
//# sourceMappingURL=Tolocal.js.map