function setup(){
    video =createCapture(VIDEO);
    video.size(500,500);
    canvas=createCanvas(500,500);
    canvas.position(560,150);
}

poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);

function gotPoses(){
    if(result.lenght > 0)
    {
console.log(results);
    }
}

function draw(){
    background('#FFB6C1');
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}
