/**
 * Created by Administrator on 2014/6/27.
 */
var root=function(m,rootPoint){
    return {
        m:m,
        rootPoint: rootPoint
    }
}
var node=function(nextPoint,val){
    return{
        val:val,
        nextPoint:nextPoint
    }
}
var nodeList=function(m){
    return new Array(m);
};
