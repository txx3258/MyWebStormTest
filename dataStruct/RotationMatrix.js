/**
 * Created by Administrator on 2014/8/9.
 */
var RotationMatrix=function(){
    var oThis=this;
    //矩阵的9个值
    oThis.m11=;
    oThis.m12=;
    oThis.m13=;

    oThis.m21=;
    oThis.m22=;
    oThis.m23=;

    oThis.m31=;
    oThis.m32=;
    oThis.m33=;

    //置为单位矩阵
    oThis.identity=function(){

    };

    //根据指定方位构造矩阵
    oThis.setup=function(EulerAngles){

    };

    //根据四元数构造矩阵，假设该四元参数代表指定方向的变换
    oThis.fromInertialToObjectQuaternion=function(Quaternion){

    };

    oThis.fromObjectToInertialQuaternion=function(Quaternion){

    };

    //执行旋转
    oThis.inertialToObject=function(Vector3){

    };

    oThis.objectToInertial=function(Vector3){

    };
}