/**
 * Created by Administrator on 2014/6/27.
 */
var fs=require('fs'),path=require('path'),out=process.stdout;
var filePath='sourceDest';
var readStream=fs.createReadStream(filePath);
var writeStream=fs.createWriteStream('file.mkv');

var stat=fs.statSync(filePath);

var totalSize=stat.size;
var passedLength=0;
var lastSize=0;
var startTime=Date.now();

readStream.on('data',function(chunck){
    passedLength+=chunck.length;

    if(writeStream.write(chunck)===false){
        readStream.pasue();
    }
});

readStream.on('end',function(){
    writeStream.end();
})

writeStream.on('drain',function(){
    readStream.resume();
})

setTimeout(function(){
    var percent=Math.ceil((passedLength/totalSize));
    var size=Math.ceil(passedLength/10000000);
    var diff=size-lastSize;
    lastSize=size;
    out.clearLine();
    out.cursorTo(0);
    out.write('已完成'+size+"MB,"+percent+"%,速度");
    if(passedLength<totalSize){
        setTimeout(show,500);
    }else{
        var endTime=Date.now();
        console.log('');
    }
},500)










