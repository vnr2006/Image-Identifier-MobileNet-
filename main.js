Webcam.set({
    width: 300, 
    height: 300,
    image_format: 'PNG',
    png_quality: 90,
    constraints: {
        facingMode:"environment"
    }
});
camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function (data_URI){
        document.getElementById("result").innerHTML="<img id='captured_image' src='"+data_URI+"'>";
    });
}
console.log("ml5_version: ",ml5.version)
classifier= ml5.imageClassifier('MobileNet',modelloaded)
function modelloaded(){
    console.log("MobileNet model is loaded")
}
function check(){
    img= document.getElementById("captured_image");
    classifier.classify(img,gotresult)
}
function gotresult(error,result){
    if (error){
        console.log(error);
    }
    else{
        console.log(result);
        document.getElementById("object_name").innerHTML=result[0].label
    }
}
