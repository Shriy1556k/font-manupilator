leftWristX = 0;
rightWristY = 0;
difference = 0;
function setup()
{
    canvas = createCanvas(550,550);
    canvas.position(560,150);

    video = createCapture(VIDEO);
    video.size(550,500);
    
    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on("pose",gotPoses);
}

function modelLoaded(){
    console.log("posenet is initialized");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results)
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX-rightWristX)
    }
}
function draw(){
    background('yellow');
    fill('red');
    text('Shriyansh',0,100);
    textSize(difference);
}