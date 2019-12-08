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
var Move = (function (_super) {
    __extends(Move, _super);
    function Move() {
        var _this = _super.call(this) || this;
        _this.drawGrid();
        return _this;
    }
    Move.prototype.drawGrid = function () {
        this.addPicArea();
        //画一个红色的圆
        this.circle = new egret.Shape();
        this.circle.graphics.beginFill(0xff0000);
        this.circle.graphics.drawCircle(25, 25, 25);
        this.circle.graphics.endFill();
        this.addChild(this.circle);
        //手指按到屏幕，触发 startMove 方法
        this.circle.touchEnabled = true;
        this.circle.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.startMove, this);
        //手指离开屏幕，触发 stopMove 方法
        this.circle.addEventListener(egret.TouchEvent.TOUCH_END, this.stopMove, this);
    };
    Move.prototype.startMove = function (e) {
        //计算手指和圆形的距离
        this.offsetX = e.stageX - this.circle.x;
        this.offsetY = e.stageY - this.circle.y;
        //手指在屏幕上移动，会触发 onMove 方法
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMove, this);
    };
    Move.prototype.stopMove = function (e) {
        console.log(e, e.target, 222);
        var ax1 = this.areaPic.x;
        var ax2 = this.areaPic.x + this.areaPic.width;
        var ay1 = this.areaPic.y;
        var ay2 = this.areaPic.y + this.areaPic.height;
        if (e.target.x > ax1 && e.target.x < ax2 && e.target.y > ay1 && e.target.y < ay2) {
            console.log('在容器内');
        }
        else {
            console.log('不在容器');
        }
        //手指离开屏幕，移除手指移动的监听
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMove, this);
    };
    Move.prototype.onMove = function (e) {
        //通过计算手指在屏幕上的位置，计算当前对象的坐标，达到跟随手指移动的效果
        this.circle.x = e.stageX - this.offsetX;
        this.circle.y = e.stageY - this.offsetY;
    };
    Move.prototype.addPicArea = function () {
        this.areaPic = this.createBitmapByName('egret_icon_png');
        this.areaPic.x = 300;
        this.areaPic.y = 400;
        console.log(this.areaPic);
        this.addChild(this.areaPic);
    };
    Move.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    return Move;
}(egret.Sprite));
__reflect(Move.prototype, "Move");
//# sourceMappingURL=Move.js.map