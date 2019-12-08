class HitTest extends egret.DisplayObjectContainer
{
   public constructor()
   {
       super();
       this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
   }
   private onAddToStage(event:egret.Event)
   {
       this.drawText();
       var shp:egret.Shape = new egret.Shape();
       shp.graphics.beginFill( 0xff0000 );
       shp.graphics.drawRect( 0,0,100,100);
       shp.graphics.endFill();
       shp.width = 100;
       shp.height = 100;
       this.addChild( shp );
       var isHit:boolean = shp.hitTestPoint( 100, 100 );
       this.infoText.text = "isHit: " + isHit;
   }
   private infoText:egret.TextField;

   private drawText()
   {
       this.infoText = new egret.TextField();
       this.infoText.y = 200;
       this.infoText.text = "isHit";
       this.addChild( this.infoText );
   }
}