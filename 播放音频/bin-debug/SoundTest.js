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
var SoundTest = (function (_super) {
    __extends(SoundTest, _super);
    function SoundTest() {
        return _super.call(this) || this;
        // this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    SoundTest.prototype.loadSoundRES = function (url) {
        var sound = RES.getRes(url);
        sound.play(0, 1);
    };
    SoundTest.prototype.loadSound = function (url) {
        //创建 Sound 对象
        var sound = new egret.Sound();
        //添加加载完成侦听
        sound.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);
        //开始加载
        sound.load(url);
    };
    SoundTest.prototype.urlLoaderSound = function () {
        // var loader: egret.URLLoader = new egret.URLLoader();
        // loader.addEventListener(egret.Event.COMPLETE, function loadOver(event: egret.Event) {
        //     var sound: egret.Sound = loader.data;
        //     sound.play();
        // }, this);
        // loader.dataFormat = egret.URLLoaderDataFormat.SOUND;
        // loader.load(new egret.URLRequest("resource/sound/sound.mp3"));
    };
    SoundTest.prototype.onLoadComplete = function (event) {
        console.log(12312312312);
        //获取加载到的 Sound 对象
        var sound = event.target;
        //播放音乐
        console.log(sound);
        var channel = sound.play(0, 1);
        channel.addEventListener(egret.Event.SOUND_COMPLETE, this.onSoundComplete, this);
    };
    SoundTest.prototype.onSoundComplete = function (event) {
        egret.log("onSoundComplete");
    };
    return SoundTest;
}(egret.DisplayObjectContainer));
__reflect(SoundTest.prototype, "SoundTest");
//# sourceMappingURL=SoundTest.js.map