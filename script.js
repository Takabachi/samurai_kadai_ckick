var canvas = document.getElementById('sample');
var ctx = canvas.getContext('2d');   

var img = new Image();
img.src = "shougi.png";

var x = 0;
var y = 0;
var w = canvas.clientWidth;
var h = canvas.clientHeight;


function onClick(e) {

    // 一度描画をクリア
    ctx.clearRect(0, 0, w, h);
    
    //描画位置(整数にて計算)
    var rect = e.target.getBoundingClientRect();
    x = e.clientX - Math.floor(rect.left);
    y = e.clientY - Math.floor(rect.top);
    
    //画像の表示位置を0ではなく画像の縦横半分の大きさを指定してクリックしたとき中央にする
    ctx.drawImage(img , x-img.width/2 , y-img.height/2);

}

canvas.addEventListener('click' , onClick , false);