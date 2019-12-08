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
var SampleDate = (function (_super) {
    __extends(SampleDate, _super);
    function SampleDate() {
        var _this = _super.call(this) || this;
        //创建一个男朋友
        var boy = new Boy();
        boy.name = "男朋友";
        //创建一个女朋友
        var girl = new Girl();
        girl.name = "女朋友";
        //注册侦听器
        boy.addEventListener(DateEvent.DATE, girl.getDate, girl);
        //男朋友发送要求
        boy.order();
        //约会邀请完成后，移除侦听器
        boy.removeEventListener(DateEvent.DATE, girl.getDate, girl);
        return _this;
    }
    return SampleDate;
}(egret.DisplayObjectContainer));
__reflect(SampleDate.prototype, "SampleDate");
//# sourceMappingURL=SampleDate.js.map