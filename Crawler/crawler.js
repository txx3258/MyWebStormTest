/**
 * Created by Administrator on 2014/11/16 0016.
 */

var request = require('request');
var fs=require('fs');
var total=1393;
var env = require('jsdom').env;
var async=require('async');

var index=parseInt(process.argv[2]);
var len=parseInt(process.argv[3]);
var count=1;
for(var i=index;i<len;i++){
    (function(i) {
        request('http://www.banyou.cn/banyou/index.asp?Page=' + i, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                env(body, function (errors, window) {
                    var $ = require('jquery')(window);
                    var table = $('.divleft').children();
                    var len = table.length - 2;
                    for (var j = 2; j < len; j++) {
                        var content = $(table[j]).children().children()[1];
                        var imgInfo = $(content).find('table tbody tr td span').children();
                        fs.appendFileSync('I:\\data\\detail.txt', count + ':' + $(imgInfo).attr('href') + '\n');
                        fs.appendFileSync('I:\\data\\img.txt', count + ':' + 'http://www.banyou.cn' + ($($(imgInfo).children()[0]).attr('src') + '\n'));
                        console.log(count++);
                    }
                });
                //  console.log(body) // Print the google web page.
            }
        });
    })(i);
};
















