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

class Main extends egret.DisplayObjectContainer {

    private _mcData: any;
    private _mcTexture: egret.Texture;
    private idTimeout:number

    constructor() {
        super();

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {
        this.load(this.initMovieClip);
        
    }
    private setEgretTimer(node) {
        this.idTimeout = egret.setTimeout(function (arg) {
            console.log("timeout:", arg);
        }, this, 3000, "egret"
        );
        console.log("start setTimeout");

        node.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
    }
    private onTouch() {
        egret.clearTimeout( this.idTimeout );
    }

    private initMovieClip(): void {
        console.log('-=-=-=-=-=-=-222222222')
        /*** 本示例关键代码段开始 ***/
        var mcDataFactory = new egret.MovieClipDataFactory(this._mcData, this._mcTexture);
        var role: egret.MovieClip = new egret.MovieClip(mcDataFactory.generateMovieClipData("attack"));
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

        this.setEgretTimer(role)


        role.addEventListener(egret.Event.COMPLETE, function (e: egret.Event): void {
            egret.log("play over!")
            this.removeChild(e.target);
        }, this);

        var count: number = 0;

        role.addEventListener(egret.Event.LOOP_COMPLETE, function (e: egret.Event): void {
            egret.log("play times:" + ++count);
        }, this);

        role.addEventListener(egret.MovieClipEvent.FRAME_LABEL, function (e: egret.MovieClipEvent): void {
            egret.log("frameLabel:" + e.frameLabel);
        }, this);

        this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e: egret.TouchEvent): void {
            count = 0;
            role.gotoAndPlay(1, 1);
        }, this);
        /*** 本示例关键代码段结束 ***/



    }

    protected load(callback: Function): void {
        var count: number = 0;
        var self = this;

        var check = function () {
            count++;
            if (count == 2) {
                callback.call(self);
                console.log('-=-=-=-=-=-=-111111111')
            }
        }

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
    }
}