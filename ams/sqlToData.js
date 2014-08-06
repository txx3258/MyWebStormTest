/**
 * Created by tangxx3 on 2014/7/24.
 */
var fs=require("fs");
var result=[];
var out;
fs.readFile("C:/Users/tangxx3/Desktop/Code/badwords.txt",'utf-8',function(err,data){
    if(err){
        console.log("error");
    }else{
      //  console.log(data);
        var words=data.split('\n');
       // console.log(words.join(";"))
        var sql;
        for(var word in words){
            sql="INSERT INTO AMS_COMMENT_SHIELD( id, KEYWORD,CREATE_DATE, AVAILABLE) VALUES(s_ams_comment_shield.nextval,'"+words[word]+"',sysdate,'1')";
            result.push(sql);
        }
        out=result.join("\n");
        fs.writeFile("C:/Users/tangxx3/Desktop/Code/badwords.sql",out,function(err){
            if(err){
                return console.log(err);
            }
            console.log('writing done');
        })
    }
});