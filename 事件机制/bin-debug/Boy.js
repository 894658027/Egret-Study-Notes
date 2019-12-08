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
var Boy = (function (_super) {
    __extends(Boy, _super);
    function Boy() {
        return _super.call(this) || this;
    }
    Boy.prototype.order = function () {
        //生成约会事件对象
        var daterEvent = new DateEvent(DateEvent.DATE);
        //添加对应的约会信息
        daterEvent._year = 2014;
        daterEvent._month = 8;
        daterEvent._date = 2;
        daterEvent._where = "肯德基";
        daterEvent._todo = "共进晚餐";
        //发送要求事件
        this.dispatchEvent(daterEvent);
    };
    return Boy;
}(egret.Sprite));
__reflect(Boy.prototype, "Boy");
//# sourceMappingURL=Boy.js.map