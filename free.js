/**
 * Created by tangxx3 on 2014/9/1. E:\\free\\ams-freetraffic-parms-01.log\\ams-freetraffic-parms.log
 */
var fs=require('fs');
var typeForInf={},types=[];
var typeForPhone={};

var DirPath='E:\\free\\tongji\\';

var downPath='E:\\free\\down\\';
//啟動接口
doBiz();

function doBiz(){
//读取目录
fs.readdir(DirPath,function(err,files){
    if(err)
        console.log("read dir error");
    for(var i=0;i<files.length;i++){
        readLog(DirPath+files[i]);
    }
    //打印统计信息
    showStat();
});

};

function readLog(path){
    //读取文件
    var data=fs.readFileSync(path);
    //获取换行信息
    var dataArray=data.toString().split("\n");

    //获取有效信息
    var len=dataArray.length;
    var parms=[];
    var index;
    for(var i=0;i<len;i++){
        index=dataArray[i].indexOf('WARN  - ')+8;
        parms.push(dataArray[i].substring(index));
    }
    //统计信息
    stat(parms);
}
//
function stat(parms){
    var len=parms.length;
    for(var i=0;i<len;i++){
        var infos=parms[i].split(",");
        var type=infos[0];
        if(type==''){
            break;
        }
        if(!typeForPhone[type]){
            types.push(type);
            typeForPhone[type]=new Array();
            typeForPhone[type].push(infos[5]);
        }else{
            typeForPhone[type].push(infos[5]);
        }
    }
}

function showStat(){
    console.log('统计开始:');
    var sum=0;
    var len=types.length;
    for(var i=0;i<len;i++) {
        var num= typeForPhone[types[i]].length;
        sum+=num;

        console.log(types[i]+":"+num+"人");
        if (types[i] == 'SUCCESS') {
            console.log("名单为:"+typeForPhone[types[i]].toString());
        }
    }
    console.log('进入免流量专区总人数:'+sum);
}


//统计成功数量、Phone、Activities


//统计失败的类别、次数
