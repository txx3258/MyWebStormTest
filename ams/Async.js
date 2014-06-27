/**
 * Created by Administrator on 2014/6/16.
 */
var async=require('async');

var cargo = async.cargo(function (tasks, callback) {
//    for(var i=0; i<tasks.length; i++){
//        console.log('hello ' + tasks[i].name);
//    }
    callback();
}, 2);


// add some items

cargo.push({name: 'foo'}, function (err) {
    console.log('finished processing foo');
});
cargo.push({name: 'bar'}, function (err) {
    console.log('finished processing bar');
});
cargo.push({name: 'baz'}, function (err) {
    console.log('finished processing baz');
});