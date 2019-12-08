class TextTest extends egret.DisplayObjectContainer {

    private static shared:TextTest;
    public static getInstace(){
        if(!TextTest.shared){
            TextTest.shared = new TextTest()
        }else{
           return TextTest.shared
        }
    }
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    private onAddToStage(event: egret.Event) {
        this.drawText();
        // this.drawInput()
        // this.inputType()
        // RES.getResByUrl("resource/cartoon-font.fnt", this.onLoadComplete, this, RES.ResourceItem.TYPE_FONT);
    }
    private infoText: egret.TextField;

    private drawText() {
        this.infoText = new egret.TextField();
        this.infoText.y = 400;
        this.infoText.text = "这是一条普通文本";
        this.infoText.textColor = 0x0000ff;
        this.infoText.fontFamily = 'Impact'
        this.infoText.width = 100;
        this.infoText.height = 100;
        this.infoText.size = 20
        this.infoText.strokeColor = 0x000000;
        this.infoText.stroke = 2;

        this.infoText.bold = true;
        this.infoText.italic = true;

        //    this.infoText.textAlign = egret.HorizontalAlign.RIGHT;
        // this.infoText.textAlign = egret.HorizontalAlign.LEFT;
        // this.infoText.textAlign = egret.HorizontalAlign.CENTER;
        // 纵列对齐
        // this.infoText.verticalAlign = egret.VerticalAlign.BOTTOM;
        //垂直居中对齐
        // this.infoText.verticalAlign = egret.VerticalAlign.MIDDLE;

        this.addChild(this.infoText);
    }
    private drawInput() {
        var textIput: egret.TextField = new egret.TextField();
        textIput.type = egret.TextFieldType.INPUT;
        this.addChild(textIput);

        var button: egret.Shape = new egret.Shape();
        button.graphics.beginFill(0x00cc00);
        button.graphics.drawRect(0, 0, 100, 40);
        button.graphics.endFill();
        button.y = 50;
        this.addChild(button);

        button.touchEnabled = true;
        button.addEventListener(egret.TouchEvent.TOUCH_BEGIN, (e) => {
            textIput.setFocus();
        }, this);
    }
    private inputType() {
        var text: egret.TextField = new egret.TextField();
        text.type = egret.TextFieldType.INPUT;
        //设置输入文本的样式为文本
        text.inputType = egret.TextFieldInputType.TEXT;
        text.text = "Input text:";
        text.width = 300;
        this.addChild(text);

        var pass: egret.TextField = new egret.TextField();
        pass.type = egret.TextFieldType.INPUT;
        //设置输入文本显示为密码
        pass.inputType = egret.TextFieldInputType.PASSWORD;
        //设置密码显示
        pass.displayAsPassword = true;
        pass.text = "Password";
        pass.y = 100;
        pass.width = 300;
        this.addChild(pass);

        var tel: egret.TextField = new egret.TextField();
        tel.type = egret.TextFieldType.INPUT;
        //设置输入电话号样式
        tel.inputType = egret.TextFieldInputType.TEL;
        tel.text = "Telephone number:"
        tel.y = 200;
        tel.width = 300;
        this.addChild(tel);
    }
    private _bitmapText: egret.BitmapText;
    private onLoadComplete(font: egret.BitmapFont): void {
        this._bitmapText = new egret.BitmapText();
        this._bitmapText.font = font;
        this._bitmapText.x = 50;
        this._bitmapText.y = 300;
        this.addChild(this._bitmapText);
    }
}