class SoundTest extends egret.DisplayObjectContainer {
    public constructor() {
        super();
    }
    public loadSoundRES(url) {
        var sound: egret.Sound = RES.getRes(url);
        sound.play(0, 1);
    }
    public loadSound(url) {
        //创建 Sound 对象
        var sound = new egret.Sound();
        //添加加载完成侦听
        sound.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);
        //开始加载
        sound.load(url);
    }
    public onLoadComplete(event: egret.Event): void {
        //获取加载到的 Sound 对象
        var sound: egret.Sound = <egret.Sound>event.target;
        //播放音乐
        console.log(sound)
        var channel: egret.SoundChannel = sound.play(0, 1);
        channel.addEventListener(egret.Event.SOUND_COMPLETE, this.onSoundComplete, this);
    }

    public onSoundComplete(event: egret.Event): void {
        egret.log("onSoundComplete");
    }
}