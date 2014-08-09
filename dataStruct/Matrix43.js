/**
 * Created by Administrator on 2014/8/9.
 */
var Matrix=function(){
    var oThis=this;

    //矩阵值
    oThis.m11="";
    oThis.m12="";
    oThis.m13="";

    oThis.m21="";
    oThis.m22="";
    oThis.m23="";

    oThis.m31="";
    oThis.m32="";
    oThis.m33="";

    oThis.tx="";
    oThis.ty="";
    oThis.tz="";


    //置为单位矩阵操作
    oThis.identity=function(){

    };

    //直接访问平移部分
    oThis.zeroTranslation=function(){

    };

    oThis.setTranslation=function(){

    };

    oThis.setupTranslation=function(vector3){

    };

    //构造执行父空间<-->局部空间变换的矩阵
    oThis.setupLocalToParent=function(vector3,eulerAngles){

    };
    oThis.setupLocalToParent=function(vector3,rotationMatrix){

    };
    oThis.setupParentToLocal=function(vector3,eulerAngles){

    };
    oThis.setupParentToLocal=function(vector3,rotationMatrix){

    };

    //构造绕坐标轴旋转的矩阵
    oThis.setupRotateByPart=function(axis,theta){

    };
    //构造绕任意轴旋转的矩阵
    oThis.setupRotateByAll=function(axis,theta){

    };
    //构造旋转矩阵，角位移由四元数形式给出
    oThis.formQuaternion=function(Quaternion){

    };
    //构造沿坐标缩放的矩阵
    oThis.setupScale=function(Vector3){

    };
    //构造沿任意缩放的矩阵
    oThis.setupScaleAlongAxis=function(Vector3){

    };
    //构造切变矩阵
    oThis.setupShear=function(axis,s,t){

    };
    //构造投影矩阵，投影平面过原点
    oThis.setupProject=function(Vector3){

    };
    //构造反射矩阵
    oThis.setupReflect=function(axis,k){

    };
    oThis.setupReflect=function(Vector3){

    };
};
//运算符*
function VectorPlusMatrix43(Vector3,Matrix43){

};
function Matrix43PlusMatrix43(Vector3,Matrix43){

};

//运算符*=
function VectorPlusAndMatrix43(Vector3,Matrix43){

};
function Matrix43PlusAndMatrix43(Vector3,Matrix43){

};

//计算3*3部分的行列式值
function determinant(Matrix43){

};
// 计算矩阵的逆
function inverse(Matrix43){

};
//提取矩阵的平移部分
function getTranslation(Matrix43){

};

//从局部举证——父矩阵或父矩阵——局部矩阵取位置/方位
function getPositionFromParentIoLocalMatrix(Matrix43){

};

function getPositionFromLocalIoParentMatrix(Matrix43){

};