/**
 * Created by Administrator on 2014/11/16 0016.
 */

var http = require('http');
var fs = require('fs');
var iconv = require('iconv-lite');
var url = "http://www.banyou.cn/html/201454/173199/"
getFromURL();
var env = require('jsdom').env;
function getFromURL(){
    var html='';
    var req = http.get(url,function(res){
        res.setEncoding('binary');
        res.on('data',function(data){
            html+=data;
        }).on('end',function(){
            var buf = new Buffer(html,'binary');
            var str = iconv.decode(buf,'gbk');
            env(str, function (errors, window) {
            var $ = require('jquery')(window);
            var table = $('.divleft').children();

            var info=$(table[1]).find('tbody tr');
            var type=$(info).find('table tbody tr td table tbody tr td :first').text();
            console.log(type);

            //类别
        });

        }).on('close',function(){
            console.log('Close recevied!');
        });
    });
    req.on('error',function(error){
        fs.appendFile('error.log',new Date().getTime()+' '
            +error+'\r\n','utf-8');
    });
};
//var request = require('request');
//var fs=require('fs');
//var StringDecoder=require('string_decoder').StringDecoder;
//var decoder=new StringDecoder('utf8');
//var iconv = require('iconv-lite');
//var env = require('jsdom').env;
//request('http://www.banyou.cn/html/201454/173199/', function (error, response, body) {
//    if (!error && response.statusCode == 200) {
//        var html =  iconv.decode(new Buffer(body,'utf8'),'utf8');
//        env(html, function (errors, window) {
//            var $ = require('jquery')(window);
//            var table = $('.divleft').children();
//
//            var info=$(table[1]).find('tbody tr');
//            var type=$(info).find('table tbody tr td table tbody tr td :first').text();
//            console.log(type);
//
//            //类别
//        });
//        //  console.log(body) // Print the google web page.
//    }
//});