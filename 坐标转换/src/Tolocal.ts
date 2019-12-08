class Tolocal extends egret.DisplayObjectContainer {

    private static shared:Tolocal;
	public static getInstance(){
		if( !Tolocal.shared ){
			Tolocal.shared = new Tolocal();
		}
		return Tolocal.shared;
	}


    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.starGame, this)
    }
    private container: egret.DisplayObjectContainer
    private circle: egret.Shape
    private starGame(): void {
        this.container = new egret.DisplayObjectContainer();
        this.container.x = 200;
        this.container.y = 200;
        this.addChild(this.container);
        //画一个红色的圆，添加到 container 中
        this.circle = new egret.Shape();
        this.circle.graphics.beginFill(0xff0000);
        this.circle.graphics.drawCircle(25, 25, 25);
        this.circle.graphics.endFill();
        this.container.addChild(this.circle);
        //给圆增加点击事件
        this.circle.touchEnabled = true;
        this.circle.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
    }
    private onClick(): void {
        //把舞台左上角的坐标(0,0)转换为 container 内部的坐标
        var targetPoint: egret.Point = this.container.globalToLocal(100, 150);
        //将局部的circle坐标转换为全局的坐标
        console.log(targetPoint.x,targetPoint.y)
        //重新定位圆，可以看到圆形移到了屏幕的左上角
        this.circle.x = targetPoint.x;
        this.circle.y = targetPoint.y;
    }
}