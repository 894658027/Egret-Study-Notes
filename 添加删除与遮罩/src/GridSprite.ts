class GridSprite extends egret.Sprite {
    public constructor() {
        super();
        this.drawGrid();
    }
    private drawGrid() {
        var sprcon1: egret.Sprite = new egret.Sprite();
        sprcon1.graphics.beginFill(0x00ff00);
        sprcon1.graphics.drawRect(0, 0, 100, 100);
        sprcon1.graphics.endFill();
        this.addChild(sprcon1);
        sprcon1.x = 120;

        var sprcon2: egret.Sprite = new egret.Sprite();
        sprcon2.graphics.beginFill(0xff0000);
        sprcon2.graphics.drawRect(0, 0, 100, 100);
        sprcon2.graphics.endFill();
        this.addChild(sprcon2);
        sprcon2.y = 130;

        var rect:egret.Rectangle = new egret.Rectangle(0,0,90,90);  
            sprcon2.mask = rect;


        var spr: egret.Sprite = new egret.Sprite();
        spr.graphics.beginFill(0x0000ff);
        spr.graphics.drawRect(0, 0, 50, 50);
        spr.graphics.endFill();
        spr.x = 10;
        spr.y = 10
        this.addChild( spr );

        // this.removeChild( spr );
        sprcon1.addChild( spr );
        sprcon2.addChild( spr );
    }
}