/**
 * 单例模式，提供计数
 * Created by tangxx3 on 2014/11/17.
 */
var CountNum=(function(){
    //参数：传递给单例的一个参数集合
    function Singleton(args) {
        //设置args变量为接收的参数或者为空（如果没有提供的话）
        var args = args || {};
        //设置name参数
        this.name = '单例模式';
        //设置pointX的值
        this.count = args.count || 0; //从接收的参数里获取，或者设置为默认值
    }

    Singleton.prototype.incr=function(){
        return this.count++;
    }

    //实例容器
    var instance;

    var _static = {
        name: '计数器',
        //获取实例的方法
        //返回Singleton的实例
        getInstance: function (args) {
            if (instance === undefined) {
                instance = new Singleton(args);
            }
            return instance;
        }
    };
    return _static;
})();

module.exports=CountNum;
