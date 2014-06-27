/**
 * Created by Administrator on 2014/6/16.
 */
function phoneTest() {
    console.log("hello world!!");
}
//phoneTest();
//问题打印出所有的数字组合  3  31  31231
//约定:1<===>a,b   2<===>c  3<===>d,e,f,g
var arr=[['a','b'],['c'],['d','e','f','g']];
var arrLen=[2,1,4];
//定义数据结构
function print(array){
    var numArray=array.split('');
    var len=numArray.length;
    var numOfArr=new Array(len);
    for(var i=0;i<len;i++){
        numOfArr[i]=arrLen[parseInt(numArray[i])-1];
    }
    var k=len-1;
    while(true){
        if(numOfArr[0]>=0){
            var result=[];
            for(var j=0;j<len;j++){
                result.push(arr[parseInt(numArray[j])-1][numOfArr[j]]);
            }
            console.log(result);
            if(numOfArr[k]>=0){
                numOfArr[k]--;
            }else{
                numOfArr[k]=arrLen[parseInt( numArray[k])-1];
                numOfArr[--k]--;
            }
        }else{
            break;
        }

    }
}
print("2133")
