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
var SoundExample = (function (_super) {
    __extends(SoundExample, _super);
    function SoundExample() {
        var _this = _super.call(this) || this;
        _this.once(egret.Event.ADDED_TO_STAGE, _this.onAddtoStage, _this);
        return _this;
    }
    SoundExample.prototype.onAddtoStage = function () {
        this.startLoad();
    };
    SoundExample.prototype.startLoad = function () {
        var sound = new egret.Sound();
        sound.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);
        sound.load("resource/assets/sound/sound_bg.mp3");
    };
    SoundExample.prototype.onLoadComplete = function (event) {
        //获取加载到的 Sound 对象
        var sound = event.target;
        this.sound = sound;
        //一个简单的播放按钮
        var btn = new egret.Sprite();
        btn.graphics.beginFill(0x18f7ff);
        btn.graphics.drawRoundRect(0, 0, 80, 40, 5, 5);
        btn.graphics.endFill();
        btn.touchEnabled = true;
        btn.anchorOffsetX = btn.width / 2;
        btn.x = this.stage.stageWidth / 2;
        btn.anchorOffsetY = btn.height / 2;
        btn.y = this.stage.stageHeight / 2;
        //监听按钮的触摸事件
        btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.addChild(btn);
    };
    SoundExample.prototype.onTouch = function (event) {
        var sound = this.sound;
        var channel = this.soundChannel;
        if (channel) {
            //调用soundChannel对象的stop方法停止播放音频
            console.log(channel);
            channel.stop();
            this.soundChannel = null;
            return;
        }
        //使用SoundChannel播放音频
        channel = sound.play(0, -1);
        //Egret 3.0.4 新增获取音频长度 length 属性。
        console.log(sound.length);
        channel.addEventListener(egret.Event.SOUND_COMPLETE, this.onSoundComplete, this);
        //保存soundChannel对象
        this.soundChannel = channel;
    };
    SoundExample.prototype.onSoundComplete = function (event) {
        console.log("onSoundComplete");
    };
    return SoundExample;
}(egret.DisplayObjectContainer));
__reflect(SoundExample.prototype, "SoundExample");
//# sourceMappingURL=SoundExample.js.map