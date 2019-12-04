canvas = document.getElementById ('sample');
ctx = canvas.getContext ('2d');   

img = new Image();
img.src = "shougi.png";

let x = 0;
let y = 0;

function onClick(e) {

    // 一度描画をクリア
    ctx.clearRect(0, 0, 600, 600);
    
    //描画位置(整数にて計算)
    let rect = e.target.getBoundingClientRect();
	x = e.clientX - Math.floor(rect.left);
    y = e.clientY - Math.floor(rect.top);
    
    //画像の表示位置を0ではなく画像の縦横半分の大きさを指定してクリックしたとき中央にする
    ctx.drawImage (img , x-64 , y-64);

}

canvas.addEventListener ('click' , onClick , false);