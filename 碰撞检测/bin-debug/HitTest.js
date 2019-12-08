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
var HitTest = (function (_super) {
    __extends(HitTest, _super);
    function HitTest() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    HitTest.prototype.onAddToStage = function (event) {
        this.drawText();
        var shp = new egret.Shape();
        shp.graphics.beginFill(0xff0000);
        shp.graphics.drawRect(0, 0, 100, 100);
        shp.graphics.endFill();
        shp.width = 100;
        shp.height = 100;
        this.addChild(shp);
        var isHit = shp.hitTestPoint(100, 100);
        this.infoText.text = "isHit: " + isHit;
    };
    HitTest.prototype.drawText = function () {
        this.infoText = new egret.TextField();
        this.infoText.y = 200;
        this.infoText.text = "isHit";
        this.addChild(this.infoText);
    };
    return HitTest;
}(egret.DisplayObjectContainer));
__reflect(HitTest.prototype, "HitTest");
//# sourceMappingURL=HitTest.js.map