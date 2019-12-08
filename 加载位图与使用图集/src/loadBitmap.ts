class loadBitmap extends egret.Sprite {
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.loadPicSprite, this);
        this.loadBitMap();
    }
    private loadBitMap() {
        var imgLoader: egret.ImageLoader = new egret.ImageLoader;
        imgLoader.once(egret.Event.COMPLETE, this.imgLoadHandler, this);
        imgLoader.load("resource/assets/egret_icon.png");
    }
    private imgLoadHandler(evt: egret.Event): void {
        let loader: egret.ImageLoader = evt.currentTarget;
        let bmd: egret.BitmapData = loader.data;
        //创建纹理对象
        let texture = new egret.Texture();
        texture.bitmapData = bmd;
        let bmp: egret.Bitmap = new egret.Bitmap(texture);

        var rect: egret.Rectangle = new egret.Rectangle(30, 31, 40, 41);
        bmp.scale9Grid = rect;
        bmp.width *= 2;
        bmp.y = 150;

        this.addChild(bmp);
    }
    private loadPicSprite(event: egret.Event) {
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onGroupComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
        RES.loadGroup("preload");
    }
    private onGroupComplete() {
        //json图集文件名字，图集指定图片name
        var txtr: egret.Texture = RES.getRes("pics_json#pic1");
        var img: egret.Bitmap = new egret.Bitmap(txtr);
        console.log(txtr,img)
        img.y = 450;
        img.x = 300;
        this.addChild(img);
    }
}