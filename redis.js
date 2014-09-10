/**
 * Created by tangxx3 on 2014/9/9.
 */
var redis = require("redis"),
client=redis.createClient(6379, '172.17.50.116', {});
/*
//添加键值
client.set("tangxx3_test","1234567");
//获取键值
client.get("tangxx3_test",function(err,reply){
   console.log(reply.toString())
});
//获取所有键值
client.keys('*',function(err,reply){
    console.log(reply);
});

//判断是否存在
client.exists("tangxx3_test",function(err,reply){
    console.log(reply);
})

//重命名
client.rename("tangxx3_test","tangxx3",function(err,reply){
    console.log('rename:'+reply);
});

//获取键值
client.get("tangxx3",function(err,reply){
    console.log("get again:"+reply)
});

client.set("tangxx3_expire","1234567",function(err,reply){
    console.log("set tangxx3_expire:"+reply)
});
//设置过期
client.expire("tangxx3_expire",30,function(err,reply){
    console.log("get again:"+reply)
});
client.get("tangxx3_expire",function(err,reply){
    console.log("get tangxx3_expire:"+reply);
});
//设置过期
client.expire("tangxx3_expire",30,function(err,reply){
    console.log("get again:"+reply)
});
client.ttl("tangxx3_expire",function(err,reply){
    console.log("ttl again:"+reply)
});

//查询时间
client.type("tangxx3_expire",function(err,reply){
    console.log("type:"+reply)
});
//添加SortZort
client.zadd("tangxx3_zadd",0,'zero',function(err,reply){
    console.log("type:"+reply)
});


client.zadd("tangxx3_zadd",2,'two',function(err,reply){
    console.log("type:"+reply)
});
client.zrem("tangxx3_zadd",'zero',function(err,reply){
    console.log("zrem:"+reply)
});
client.zrank("tangxx3_zadd",'two',function(err,reply){
    console.log("zrange:"+reply)
});
client.zrange("tangxx3_zadd",0,-1,'WITHSCORES',function(err,reply){
    console.log("type:"+reply)
});

client.zcount("tangxx3_zadd",1,5,function(err,reply){
    console.log("zrange:"+reply)
});


client.sadd("mysadd",'a','b','c','a',function(err,reply){
    console.log(reply);
});
client.smembers("mysadd",function(err,reply){
    console.log(reply);
});

client.srandmember("mysadd",function(err,reply){
    console.log(reply);
});

client.spop("mysadd",function(err,reply){
    console.log(reply);
});

client.sadd("mysadd",'a','b','m','n',function(err,reply){
    console.log(reply);
});
client.smove("mysadd",'mysadd1','b',function(err,reply){
    console.log(reply);
});

client.srem("mysadd",'m','n',function(err,reply){
    console.log(reply);
});

client.sadd("mysadd",'b','d',function(err,reply){
    console.log(reply);
});
client.sadd("mysadd2",'c',function(err,reply){
    console.log(reply);
});
client.sadd("mysadd3",'a','c','e',function(err,reply){
    console.log(reply);
});

client.sdiff("mysadd","mysadd2","mysadd3",function(err,reply){
    console.log(reply);
});

client.sinter("mysadd","mysadd2","mysadd3",function(err,reply){
    console.log(reply);
});
client.sunion("mysadd","mysadd2","mysadd3",function(err,reply){
    console.log(reply);
});

client.hset('myhash','field1','stephen',function(err,reply){
    console.log(reply);
});
client.hget('myhash','field1',function(err,reply){
    console.log(reply);
});
client.hexists('myhash','field1',function(err,reply){
    console.log(reply);
});
client.hexists('myhash','field5',function(err,reply){
    console.log(reply);
});

client.hsetnx('myhash','num',6,function(err,reply){
    console.log(reply);
})
client.hincrby('myhash','num',-11,function(err,reply){
    console.log(reply);
})

client.hgetall('myhash',function(err,reply){
    console.log(reply);
});


client.hkeys('myhash',function(err,reply){
    console.log(reply);
});
client.hkeys('myhash',function(err,reply){
    console.log(reply);
});

client.lpush('mylish','a','b','c','d',function(err,reply){
    console.log(reply);
});

client.lrange('mylish',0,1,function(err,reply){
    console.log(reply);
});

client.lrange('mylish',0,-1,function(err,reply){
    console.log(reply);
});
client.lindex('mylish',3,function(err,reply){
    console.log(reply);
});

client.linsert('mylish','before','c','c1',function(err,reply){
    console.log(reply);
});
client.lrange('mylish',0,-1,function(err,reply){
    console.log(reply);
});
//client.rpoplpush('mylish','mylish',function(err,reply){
//    console.log(reply);
//});

client.exists('mylish',function(err,reply){
    console.log(reply);
});

client.append("mystring",'hello',function(err,reply){
    console.log(reply);
});
client.append("mystring",'world',function(err,reply){
    console.log(reply);
});

client.get("mystring",function(err,reply){
    console.log(reply);
});

client.del("mystring",function(err,reply){
    console.log(reply);
})


client.incr("mycounter",function(err,reply){
    console.log(reply);
});
//设置过期时间
client.setex("mykey",10,'hello',function(err,reply){
    console.log(reply);
});

client.ttl("mykey",function(err,reply){
    console.log(reply);
});
client.setbit("mykey",8,1,function(err,reply){
    console.log(reply);
});
client.get("mykey",function(err,reply){
    console.log("%o",reply);
});
 */
client.multi();

client.incr('t1',function(err,reply){
    console.log(reply);
});

client.incr('t2',function(err,reply){
    console.log(reply);
});

client.exec();

console.log("hello world");

