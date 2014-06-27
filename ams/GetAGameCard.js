/**
 * Created by Administrator on 2014/6/16.
 */
//引入包文件
var async = require('async'), request = require('request'), xmlreader = require("xmlreader");
//基础数据
var clientId='1-2-2-12-1-1-1_240_i863664000004555t19700102000000001_c1705d1p1';
//处理流程
async.waterfall([
    function (callback) {//获取lpustgt
        var urls = getUlrs();
        var count= 0, rtn=[];
        async.each(urls,function(url,callback){
            var form = {form: {'source': 'android:com.lenovo.leos.appstore-6.5.18.88_VIBE', 'deviceidtype': 'imei', 'deviceid': '357071051584357', 'devicecategory': 'unknown', 'devicevendor': 'samsung', 'devicefamily': 'unknown', 'devicemodel': 'GT-I9308', 'lang': 'zh-CN', 'osname': 'Android', 'osversion': '4.1.2', 'imsi': '460000023874197', 'password': 'abcd1234'}};
            request.post(url, form, function(error, response, body){
                if (!error && response.statusCode == 200) {
                    xmlreader.read(body, function (errors, response) {
                     //   console.log(response.LoginResponse.TicketInfo.Value.text());
                        count++;
                       // console.log(count);
                        rtn.push(response.LoginResponse.TicketInfo.Value.text());
                        if(count==55){
                            callback(rtn);
                        }
                    });
                }
            });
        },function(results){
           console.log("lpsutgt:success");
            count=0;
            callback(null,results);
        })

    },function(lpsutgts,callback){//获取lpgust
        var lpusts=[],count=0;
        async.each(lpsutgts,function(url_gt,callback){
            var url_lpsust='http://uss.lenovomm.cn/authen/1.2/st/getbycredential?lpsutgt='+url_gt+'&realm=appstore.lps.lenovo.com&packagename=com.lenovo.leos.appstore&packagesign=e4f148e188d80813&appname=%E4%B9%90%E5%95%86%E5%BA%97&source=android:com.lenovo.leos.appstore-6.5.18.88_VIBE&lang=zh-CN';
            request(url_lpsust,function(error, response, body) {
                if (!error && response.statusCode == 200) {
                    xmlreader.read(body, function (errors, response) {
                        lpusts.push(response.TicketInfos.TicketInfo.Value.text());
                        console.log(response.TicketInfos.TicketInfo.Value.text());
                        count++;
                        if(count==55){
                            console.log("lpusts success!");
                            callback(lpusts);
                        }
                    });
                }
            });
        },function(lpusts){
            callback(null,lpusts);
        });
    },function(lpusts,callback){//获取礼包cardId
//        var url_CardIdList='http://localhost:8080/ams/api/gameapplist?si=1&c=10&clientid='+clientId;
//        request(url_CardIdList,function(error,response,body){
//            if (!error && response.statusCode == 200) {
//                var expReg=/\"available\":1,\"button_text\":\"领取\",\"start_date\":\d+,\"card_id\":(\d+)/g;
//                var cardIdList=body.match(expReg);
//                var cardIds=[];
//                for(var i=0;i<cardIdList.length;i++){
//                    var index=cardIdList[i].indexOf('"card_id":');
//                    cardIds.push(cardIdList[i].substring(index+10));
//                    console.log(cardIds[i]);
//                }
//                callback(null,lpusts,cardIds);
//            }
//        })
    }, function(lpusts,cardIds,callback){//获取礼包key
        var url_getAGameCards=[];
        for(var id in cardIds){
            url_getAGameCards.push("http://localhost:8080/ams/api/getgamekeycard?cid="+id +"&clientid="+clientId);
        }
        async.each(url_getAGameCards,function(url_getAGameCard,callback){
            var j = request.jar();
            var cookie = request.cookie('lpsust='+lpusts[5]);//设置cookie值
            j.setCookie(cookie, url_getAGameCard, function (err, cookie){});
            request({url:url_getAGameCard,jar:j},function(error, response, body) {
                if (!error && response.statusCode == 200) {
                    console.log(body);
                  //  callback(null,"success");
                }
            })
        });

       // callback(null,"success");
    }
],function(err,result){
    console.log("finally "+result);
});

function getUlrs(){
    var urls=[];
    for(var i=0;i<60;i++){
        urls.push('http://uss.lenovomm.com/authen/1.2/tgt/user/get?email=mdwmdw'+i+'@gmail.com')
    }
    return urls;
}


function getLpsustGt() {
    var url = 'http://uss.lenovomm.com/authen/1.2/tgt/user/get?email=mdwmdw22@gmail.com';
    var form = {form: {'source': 'android:com.lenovo.leos.appstore-6.5.18.88_VIBE', 'deviceidtype': 'imei', 'deviceid': '357071051584357', 'devicecategory': 'unknown', 'devicevendor': 'samsung', 'devicefamily': 'unknown', 'devicemodel': 'GT-I9308', 'lang': 'zh-CN', 'osname': 'Android', 'osversion': '4.1.2', 'imsi': '460000023874197', 'password': 'abcd1234'}};
    var r = request.post(url, form, callbackLpsustGt);
    console.log("qqqqqqqqqqqqqqqqqqqqqqqqqqqqq");
}
function callbackLpsustGt(error, response, body) {
    if (!error && response.statusCode == 200) {
        xmlreader.read(body, function (errors, response) {
            if (null !== errors) {
                console.log(errors)
                return;
            }
            console.log(response.LoginResponse.TicketInfo.Value.text());
            return "12343";
        });
    }
}