class Move extends egret.Sprite {
    public constructor() {
        super();
        this.drawGrid();
    }
    private offsetX: number;
    private offsetY: number;
    private circle: egret.Shape;
    private areaPic: egret.Bitmap;
    
    private drawGrid() {

        this.addPicArea()

        //画一个红色的圆
        this.circle = new egret.Shape();
        this.circle.graphics.beginFill(0xff0000);
        this.circle.graphics.drawCircle(25, 25, 25);
        this.circle.graphics.endFill();
        this.addChild(this.circle);
        //手指按到屏幕，触发 startMove 方法
        this.circle.touchEnabled = true;
        this.circle.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.startMove, this);
        //手指离开屏幕，触发 stopMove 方法
        this.circle.addEventListener(egret.TouchEvent.TOUCH_END, this.stopMove, this);
    }

    private startMove(e: egret.TouchEvent): void {
        //计算手指和圆形的距离
        this.offsetX = e.stageX - this.circle.x;
        this.offsetY = e.stageY - this.circle.y;
        //手指在屏幕上移动，会触发 onMove 方法
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMove, this);
    }
    private stopMove(e: egret.TouchEvent) {
        console.log(e,e.target,222);
        let ax1 = this.areaPic.x;
        let ax2 = this.areaPic.x + this.areaPic.width;

        let ay1 = this.areaPic.y;
        let ay2 = this.areaPic.y + this.areaPic.height;

        if(e.target.x > ax1 && e.target.x < ax2 && e.target.y > ay1 && e.target.y < ay2){
           console.log('在容器内')
        }else{
             console.log('不在容器')
        }
        //手指离开屏幕，移除手指移动的监听
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMove, this);
    }
    private onMove(e: egret.TouchEvent): void {
        //通过计算手指在屏幕上的位置，计算当前对象的坐标，达到跟随手指移动的效果
        this.circle.x = e.stageX - this.offsetX;
        this.circle.y = e.stageY - this.offsetY;
    }
    private addPicArea() {
        this.areaPic = this.createBitmapByName('egret_icon_png');
        this.areaPic.x = 300; this.areaPic.y = 400
        console.log(this.areaPic)
        this.addChild(this.areaPic);
    }
    private createBitmapByName(name: string): egret.Bitmap {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
}