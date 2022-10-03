var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
fabric.Image.fromURL("BirthdayImage.jpg", function(Img){
    Image_object = Img 
    Image_object.scaleToWidth(700); 
    Image_object.scaleToHeight(510);
    Image_object.set({
        top:0, 
        left:0
    })
    canvas.add( Image_object);
});

	
}

function playSound(){
	x.play()
}
