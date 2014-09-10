/**
 * Created by tangxx3 on 2014/9/1.
 */
var fs=require('fs');
var downPath='E:\\free\\down\\';

var activityIDs=[];  //活動下載了多少次
var activityInfo={};
var phoneN0s=[];    //用戶下了多少次
var phoneInfo={};

fs.readdir(downPath,function(err,files){
    if(err)
        console.log("read dir error");
    for(var i=0;i<files.length;i++){
        readLog(downPath+files[i]);
    }
    //打印统计信息
    showStat();
});
function readLog(path){
    var data=fs.readFileSync(path);
    var dataArray=data.toString().split("\n");
    var len=dataArray.length;
    var parms=[];
    var index;
    for(var i=0;i<len;i++){
        index=dataArray[i].indexOf('FreeTrafficValidateContext')+27;
        parms.push(dataArray[i].substring(index));
    }
    stat(parms);
}

function stat(parms){
    var len=parms.length;
    for(var i=0;i<len;i++){
        var infos=parms[i].split(",");
        var activityId=infos[0].split("=")[1];
        var phoneNo=infos[2].split("=")[1];

        //針對Activities
        if(!activityInfo[activityId]){
            activityIDs.push(activityId);
            activityInfo[activityId]=new Array();
            activityInfo[activityId].push(infos[4]);
        }else{
            activityInfo[activityId].push(infos[4]);
        }

        //針對phone
        if(!phoneInfo[phoneNo]){
            phoneN0s.push(phoneNo);
            phoneInfo[phoneNo]=new Array();
            phoneInfo[phoneNo].push(infos[4]);
        }else{
            phoneInfo[phoneNo].push(infos[4]);
        }
    }
}

function showStat(){
    //活動下載了哪些應用
    var len=activityIDs.length;
    for(var i=0;i<len;i++){
        var activityId=activityIDs[i];
        var lcaids=activityInfo[activityId];
        console.log("activityId:"+activityId+",下载总数:"+lcaids.length);
        console.log(lcaids.toString());
    }

    //用戶下載
    var len=phoneN0s.length;

    console.log("用戶數:"+len);
    for(var i=0;i<len;i++){
        var phone=phoneN0s[i];
        var lcaids=phoneInfo[phone];
        console.log("phone:"+phone+",下载总数:"+lcaids.length);
        console.log(lcaids.toString());
    }
}


