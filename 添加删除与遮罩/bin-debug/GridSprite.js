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
var GridSprite = (function (_super) {
    __extends(GridSprite, _super);
    function GridSprite() {
        var _this = _super.call(this) || this;
        _this.drawGrid();
        return _this;
    }
    GridSprite.prototype.drawGrid = function () {
        var sprcon1 = new egret.Sprite();
        sprcon1.graphics.beginFill(0x00ff00);
        sprcon1.graphics.drawRect(0, 0, 100, 100);
        sprcon1.graphics.endFill();
        this.addChild(sprcon1);
        sprcon1.x = 120;
        var sprcon2 = new egret.Sprite();
        sprcon2.graphics.beginFill(0xff0000);
        sprcon2.graphics.drawRect(0, 0, 100, 100);
        sprcon2.graphics.endFill();
        this.addChild(sprcon2);
        sprcon2.y = 130;
        var rect = new egret.Rectangle(0, 0, 90, 90);
        sprcon2.mask = rect;
        var spr = new egret.Sprite();
        spr.graphics.beginFill(0x0000ff);
        spr.graphics.drawRect(0, 0, 50, 50);
        spr.graphics.endFill();
        spr.x = 10;
        spr.y = 10;
        this.addChild(spr);
        // this.removeChild( spr );
        sprcon1.addChild(spr);
        sprcon2.addChild(spr);
    };
    return GridSprite;
}(egret.Sprite));
__reflect(GridSprite.prototype, "GridSprite");
//# sourceMappingURL=GridSprite.js.map