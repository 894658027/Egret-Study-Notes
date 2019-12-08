class Frame extends egret.DisplayObjectContainer {
	private static shared: Frame;
	public static getInstance() {
		if (!Frame.shared) {
			Frame.shared = new Frame();
		}
		return Frame.shared;
	}
	public constructor() {
		super();
		this.once(egret.Event.ADDED_TO_STAGE, this.onLoad, this);
	}
	private star: egret.Bitmap;
	//设置动画的移动速度
	private speed: number = 0.05;
	private timeOnEnterFrame = 0;
	private onLoad(event: egret.Event) {
		var star: egret.Bitmap = new egret.Bitmap(RES.getRes("star_png"));
		this.addChild(star);
		this.star = star;
		console.log(star)
		this.star.y = 100;
		this.star.x = 0;
		this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
		this.timeOnEnterFrame = egret.getTimer();
	}
	private onEnterFrame(e: egret.Event) {
		var now = egret.getTimer();
		var time = this.timeOnEnterFrame;
		var pass = now - time;
		//console.log("onEnterFrame: ", (1000 / pass).toFixed(5),pass);
		this.star.x += this.speed * pass;
		this.timeOnEnterFrame = egret.getTimer();
		if (this.star.x > 300)
			this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
	}
}