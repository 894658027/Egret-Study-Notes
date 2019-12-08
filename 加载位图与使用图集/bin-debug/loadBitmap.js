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
var loadBitmap = (function (_super) {
    __extends(loadBitmap, _super);
    function loadBitmap() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.loadPicSprite, _this);
        // this.loadBitMap();
        _this.ansyLoadPic();
        return _this;
    }
    loadBitmap.prototype.ansyLoadPic = function () {
        // RES.getResAsync(name:string,compFunc:Function,thisObject:any)
        var a = RES.getResAsync("pics_json#pic2");
        // var img: egret.Bitmap = new egret.Bitmap(a);
        console.log(a);
        // img.y = 450;
        // img.x = 300;
        // this.addChild(img);
    };
    loadBitmap.prototype.loadBitMap = function () {
        var imgLoader = new egret.ImageLoader;
        imgLoader.once(egret.Event.COMPLETE, this.imgLoadHandler, this);
        imgLoader.load("resource/assets/egret_icon.png");
    };
    loadBitmap.prototype.imgLoadHandler = function (evt) {
        var loader = evt.currentTarget;
        var bmd = loader.data;
        //创建纹理对象
        var texture = new egret.Texture();
        texture.bitmapData = bmd;
        var bmp = new egret.Bitmap(texture);
        var rect = new egret.Rectangle(30, 31, 40, 41);
        bmp.scale9Grid = rect;
        bmp.width *= 2;
        bmp.y = 150;
        this.addChild(bmp);
    };
    loadBitmap.prototype.loadPicSprite = function (event) {
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onGroupComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
        RES.loadGroup("preload");
    };
    loadBitmap.prototype.onGroupComplete = function () {
        //json图集文件名字，图集指定图片name
        var txtr = RES.getRes("pics_json#pic1");
        var img = new egret.Bitmap(txtr);
        console.log(txtr, img);
        img.y = 450;
        img.x = 300;
        this.addChild(img);
    };
    return loadBitmap;
}(egret.Sprite));
__reflect(loadBitmap.prototype, "loadBitmap");
