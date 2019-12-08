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
var TextTest = (function (_super) {
    __extends(TextTest, _super);
    function TextTest() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    TextTest.prototype.onAddToStage = function (event) {
        this.drawText();
        // this.drawInput()
        // this.inputType()
        // RES.getResByUrl("resource/cartoon-font.fnt", this.onLoadComplete, this, RES.ResourceItem.TYPE_FONT);
    };
    TextTest.prototype.drawText = function () {
        this.infoText = new egret.TextField();
        this.infoText.y = 400;
        this.infoText.text = "这是一条普通文本";
        this.infoText.textColor = 0x0000ff;
        this.infoText.fontFamily = 'Impact';
        this.infoText.width = 100;
        this.infoText.height = 100;
        this.infoText.size = 20;
        this.infoText.strokeColor = 0x000000;
        this.infoText.stroke = 2;
        this.infoText.bold = true;
        this.infoText.italic = true;
        //    this.infoText.textAlign = egret.HorizontalAlign.RIGHT;
        this.infoText.textAlign = egret.HorizontalAlign.LEFT;
        this.addChild(this.infoText);
    };
    TextTest.prototype.drawInput = function () {
        var textIput = new egret.TextField();
        textIput.type = egret.TextFieldType.INPUT;
        this.addChild(textIput);
        var button = new egret.Shape();
        button.graphics.beginFill(0x00cc00);
        button.graphics.drawRect(0, 0, 100, 40);
        button.graphics.endFill();
        button.y = 50;
        this.addChild(button);
        button.touchEnabled = true;
        button.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (e) {
            textIput.setFocus();
        }, this);
    };
    TextTest.prototype.inputType = function () {
        var text = new egret.TextField();
        text.type = egret.TextFieldType.INPUT;
        //设置输入文本的样式为文本
        text.inputType = egret.TextFieldInputType.TEXT;
        text.text = "Input text:";
        text.width = 300;
        this.addChild(text);
        var pass = new egret.TextField();
        pass.type = egret.TextFieldType.INPUT;
        //设置输入文本显示为密码
        pass.inputType = egret.TextFieldInputType.PASSWORD;
        //设置密码显示
        pass.displayAsPassword = true;
        pass.text = "Password";
        pass.y = 100;
        pass.width = 300;
        this.addChild(pass);
        var tel = new egret.TextField();
        tel.type = egret.TextFieldType.INPUT;
        //设置输入电话号样式
        tel.inputType = egret.TextFieldInputType.TEL;
        tel.text = "Telephone number:";
        tel.y = 200;
        tel.width = 300;
        this.addChild(tel);
    };
    TextTest.prototype.onLoadComplete = function (font) {
        this._bitmapText = new egret.BitmapText();
        this._bitmapText.font = font;
        this._bitmapText.x = 50;
        this._bitmapText.y = 300;
        this.addChild(this._bitmapText);
    };
    return TextTest;
}(egret.DisplayObjectContainer));
__reflect(TextTest.prototype, "TextTest");
//# sourceMappingURL=TextTest.js.map