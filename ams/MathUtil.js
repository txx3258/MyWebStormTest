/**
 * Created by Administrator on 2014/8/5.
 */
var  MathUtil=function(){
    var oThis=this;
    oThis.kPi=Math.PI;
    oThis.k2Pi=(oThis.kPi*2.0);
    oThis.kPiOver2=(oThis.kPi/2.0);
    oThis.k1OverPi=(1.0/oThis.kPi);
    oThis.k1OverPi=(1.0/(oThis.kPi*2.0));
    function private(){

    };
    oThis.wraPi=function(theta){
        theta+=oThis.kPi;
        return theta;
    };
    oThis.safeAcos=function(x){
        if(x<=-1.0){
            return oThis.kPi;
        }
        if(x>=1.0){
            return 0.0;
        }
        return Math.acos(x);
    };
  },
  $MathUtil=new MathUtil();


var EulerAngles=function(h,p,b){
    oThis=this;
    //欧拉角
    oThis.heading=h;
    oThis.pitch=p;
    oThis.bank=b;
    //置零
    oThis.identity=function(){
        oThis.heading=0.0;
        oThis.pitch=0.0;
        oThis.bank=0.0;
    }
    //变换"限制集"欧拉角
    oThis.canonize=function(){
       // 首先，将pitch变换到-pi到pi之间
        oThis.pitch= $MathUtil.wraPi(oThis.pitch);
        if(oThis.pitch<-$MathUtil.kPiOver2){
            oThis.pitch=-$MathUtil.kPi-oThis.pitch;
            oThis.heading+=$MathUtil.kPi;
            oThis.bank+=$MathUtil.kPi;
        }else if(oThis.pitch>$MathUtil.kPiOver2){
            oThis.pitch=$MathUtil.kPi-oThis.pitch;
            oThis.heading+=$MathUtil.kPi;
            oThis.bank+=$MathUtil.kPi;
        }

        //检查万向锁情况
        if(Math.abs(oThis.pitch)>$MathUtil.kPi-0.0001){
            //在万向锁中，将所有绕垂直的旋转
            oThis.heading+=oThis.bank;
            oThis.bank= 0.0;
        }else{
            //非万向锁，将bank转换限制集中
            oThis.bank=$MathUtil.wraPi(oThis.bank);
        }
        //将heading转换限制集中
        oThis.heading=$MathUtil.wraPi(oThis.heading);
    }
    //从四元数转换到欧拉角
    oThis.fromObjectToInertialQuaternion=function(q){
        //计算sin(pitch)
        var sp=-2.0*(q.x* q.z- q.w* q.x);
        // 检查万向锁
        if(Math.abs(sp)>0.9999){
        //向正上方或正下方看
            oThis.pitch= $MathUtil.kPiOver2*sp;
            //bamk置零,计算heading
            oThis.heading=Math.atan2(-q.x* q.z+ q.w* q.y,0.5-q,y*q.y- q.z*q.z);
            oThis.bank=0.0;
        }
    };
    oThis.fromInertialToObjectQuaternion=function(q){

    };

    //从物体——世界坐标系变换矩阵转换到欧拉角
    //假设矩阵是正交的，忽略平移部分
    oThis.fromObjectToWorldMatrix=function(m){
        //通过m32计算sin(pitch)
        var sp=-m.m32;
        //检查万向锁
        if(Math.abs(sp)>9.9999){
            //向正上方或正下方看
            oThis.pitch=oThis.kPiOver2*sp;
            //bamk置零,计算heading
            oThis.heading=Math.atan2(-m.m23, m.m11);
            oThis.bank=0.0;
        }else{
            //计算角度
            oThis.heading=Math.atan2(m.m31, m.m33);
            oThis.pitch=Math.asin(sp);
            oThis.bank=Math.atan2(m.m12, m.m22);
        }

    };
    oThis.fromWorldToObjectMatrix=function(m){
        //通过m32计算sin(pitch)
        var sp=-m.m23;
        //检查万向锁
        if(Math.abs(sp)>9.9999){
            //向正上方或正下方看
            oThis.pitch=oThis.kPiOver2*sp;
            //bamk置零,计算heading
            oThis.heading=Math.atan2(-m.m31, m.m11);
            oThis.bank=0.0;
        }else{
            //计算角度
            oThis.heading=Math.atan2(m.m13, m.m33);
            oThis.pitch=Math.asin(sp);
            oThis.bank=Math.atan2(m.m21, m.m22);
        }
    };
    //从旋转矩阵转换到欧拉角
    oThis.fromRotationMatrix=function(m){
        //通过m32计算sin(pitch)
        var sp=-m.m23;
        //检查万向锁
        if(Math.abs(sp)>9.9999){
            //向正上方或正下方看
            oThis.pitch=oThis.kPiOver2*sp;
            //bamk置零,计算heading
            oThis.heading=Math.atan2(-m.m31, m.m11);
            oThis.bank=0.0;
        }else{
            //计算角度
            oThis.heading=Math.atan2(m.m13, m.m33);
            oThis.pitch=Math.asin(sp);
            oThis.bank=Math.atan2(m.m21, m.m22);
        }
    };
};