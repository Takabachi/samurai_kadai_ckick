var canvas = document.getElementById('sample');
var ctx = canvas.getContext('2d');   

function draw() {
	img = new Image();
    img.src = "shougi.png";
	ctx.drawImage (img , x , y);
}

let x = 0;
let y = 0;

function onClick(e) {
    
    let rect = e.target.getBoundingClientRect();
	x = e.clientX - rect.left;
    y = e.clientY - rect.top;
    
    //画像の表示位置を0ではなく画像の縦横半分の大きさを指定してクリックしたとき中央にする
    ctx.drawImage(img , x-img.width/2 , y-img.height/2);

}

canvas.addEventListener('click' , onClick , false);