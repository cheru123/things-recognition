Webcam.set({
    width:300,
    height:300,
    image_format:"png",
    png_quality: 100
})
camera=document.getElementById("d1");
Webcam.attach(camera);

function take_snapshot(){
    Webcam.snap(function (data_uri){ 
        document.getElementById("d2").innerHTML = '<img id="captured_image" src=" ' +data_uri+' "> ';
    })
}
https://teachablemachine.withgoogle.com/models/-iNGC41Fm/

classiffier=ml5.imageClassiffier("https://teachablemachine.withgoogle.com/models/-iNGC41Fm/model.json",modelLoaded)

function modelLoaded(){
    console.log("modelLoaded successfuly")

}

function check(){

    img=document.getElementById("captured_image");
    classiffier.classify(img,gotresult);
}