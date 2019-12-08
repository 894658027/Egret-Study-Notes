class Timer extends egret.DisplayObjectContainer
{
    private static shared:Timer;
	public static getInstance(){
		if( !Timer.shared ){
			Timer.shared = new Timer();
		}
		return Timer.shared;
	}

    public constructor()
    {
        super();
        //创建一个计时器对象,每隔0.5秒执行一次，一共执行5次
        var timer:egret.Timer = new egret.Timer(500,5);
        //注册事件侦听器
        timer.addEventListener(egret.TimerEvent.TIMER,this.timerFunc,this);
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.timerComFunc,this);
        //开始计时
        timer.start();
    }
    private timerFunc()
    {
        console.log("计时");
    }
    private timerComFunc()
    {
        console.log("计时结束");
    }
}