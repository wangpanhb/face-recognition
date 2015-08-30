var tencentyoutuyun = require('..');
var conf  = tencentyoutuyun.conf;
var youtu = tencentyoutuyun.youtu;

// 设置开发者和应用信息, 请填写你在开放平台
var appid = '10004463';
var secretId = 'AKIDHYCsmnmB81OCIvolbCQ2yoX3N11xMQWI';
var secretKey = 'qRGiKL8XDEYRmW84ws4YobAzygMr8O9J';
var userid = '270239006';

conf.setAppInfo(appid, secretId, secretKey, userid);
var newdata;
// 人脸检测 测试
youtu.detectface('a.jpg',0, function aa(data){
    console.log("detectface:" + data.data.face[0].face_id);
	newdata=JSON.stringify(data);
});
console.log(newdata);
// 人脸比对 测试

/*youtu.facecompare('a.jpg', 'b.jpg', function(data){
    //console.log("detectface:" + JSON.stringify(data));
	newdata=data;
});
*/
// 其他接口 类似
