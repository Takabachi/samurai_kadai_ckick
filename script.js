canvas = document.getElementById ('sample');
ctx = canvas.getContext ('2d');   

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
    
    draw();

}

canvas.addEventListener ('click' , onClick , false);