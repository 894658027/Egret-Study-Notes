/**
 * @copyright www.egret.com
 * @author yjtx
 * @desc 帧动画示例。
 *      触摸舞台会重新播放。
 *      播放过程中如果有帧事件，会触发egret.MovieClipEvent
 *      .FRAME_LABEL事件。
 *      在播放结束一次后会触发egret.Event.LOOP_COMPLETE
 *      事件。全部播放完全后，会触发egret.Event.COMPLETE事件
 *      。
 */
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
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Main.prototype.onAddToStage = function (event) {
        this.load(this.initMovieClip);
    };
    Main.prototype.setEgretTimer = function (node) {
        this.idTimeout = egret.setTimeout(function (arg) {
            console.log("timeout:", arg);
        }, this, 3000, "egret");
        console.log("start setTimeout");
        node.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
    };
    Main.prototype.onTouch = function () {
        egret.clearTimeout(this.idTimeout);
    };
    Main.prototype.initMovieClip = function () {
        console.log('-=-=-=-=-=-=-222222222');
        /*** 本示例关键代码段开始 ***/
        var mcDataFactory = new egret.MovieClipDataFactory(this._mcData, this._mcTexture);
        var role = new egret.MovieClip(mcDataFactory.generateMovieClipData("attack"));
        this.addChild(role);
        role.touchEnabled = true;
        //播放3次数
        role.gotoAndPlay(1, 3);
        // role.gotoAndPlay('atc',1);
        role.x = 300;
        role.y = 600;
        //  role.addEventListener(egret.MovieClipEvent.FRAME_LABEL,(e:egret.MovieClipEvent)=>{
        //     console.log(e.type,e.frameLabel, role.currentFrame);
        //frame_label @attack 14
        //  },this)
        this.setEgretTimer(role);
        role.addEventListener(egret.Event.COMPLETE, function (e) {
            egret.log("play over!");
        }, this);
        var count = 0;
        role.addEventListener(egret.Event.LOOP_COMPLETE, function (e) {
            egret.log("play times:" + ++count);
        }, this);
        role.addEventListener(egret.MovieClipEvent.FRAME_LABEL, function (e) {
            egret.log("frameLabel:" + e.frameLabel);
        }, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            count = 0;
            role.gotoAndPlay(1, 1);
        }, this);
        /*** 本示例关键代码段结束 ***/
    };
    Main.prototype.load = function (callback) {
        var count = 0;
        var self = this;
        var check = function () {
            count++;
            if (count == 2) {
                callback.call(self);
                console.log('-=-=-=-=-=-=-111111111');
            }
        };
        //load png图片
        var loader = new egret.URLLoader();
        loader.addEventListener(egret.Event.COMPLETE, function loadOver(e) {
            var loader = e.currentTarget;
            this._mcTexture = loader.data;
            check();
        }, this);
        loader.dataFormat = egret.URLLoaderDataFormat.TEXTURE;
        var request = new egret.URLRequest("resource/assets/mc/animation.png");
        loader.load(request);
        //load json文件信息
        var loader = new egret.URLLoader();
        loader.addEventListener(egret.Event.COMPLETE, function loadOver(e) {
            var loader = e.currentTarget;
            this._mcData = JSON.parse(loader.data);
            check();
        }, this);
        // loader.dataFormat = egret.URLLoaderDataFormat.TEXT;
        var request = new egret.URLRequest("resource/assets/mc/animation.json");
        loader.load(request);
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
//# sourceMappingURL=Main.js.map