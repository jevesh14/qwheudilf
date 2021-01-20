
var canvas = new fabric.Canvas("myCanvas");

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object = "";

var block_image = "";

function playerupdate()
{
    fabric.Image.fromURL("player.png",function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
                  
        });
        canvas.add(player_object);
    })
   
}


function newimage(get_image)
{
    fabric.Image.fromURL(get_image,function(Img){
       block_image = Img;
        block_image.scaleToWidth(block_image_width);
        block_image.scaleToHeight(block_image_height);
        block_image.set({
            top:player_y,
            left:player_x
                  
        });
        canvas.add(block_image);
    })
   
}

window.addEventListener("keydown",down);

function down(e){
    keyPressed = e.keyCode;
    console.log (keyPressed);
    if(e.shiftKey == true && keyPressed == '80'){
         console.log ("shift and key p are pressed");
         block_image_width = block_image_width+10;
         block_image_height = block_image_height+10;
         document.getElementById("current_width").innerHTML=block_image_width;
         document.getElementById("current_height").innerHTML=block_image_height;
       
         


        
    }





    if(e.shiftKey == true && keyPressed == '77'){
        console.log ("shift and key m are pressed");
        block_image_width = block_image_width-10;
        block_image_height = block_image_height-10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }


    if(keyPressed == '38'){
        up();
        console.log ('up');
    }
    if(keyPressed == '40'){
        down();
        console.log ('down');
    }
    
    if(keyPressed == '37'){
        left();
        console.log ('left');
    }
    if(keyPressed == '39'){
        right();
        console.log ('right');
    }

    if(keyPressed == '87'){
        newimage('wall.jpg');
        console.log ('w');
    }

    if(keyPressed == '71'){
        newimage('ground.png');
        console.log ('g');
    }
    if(keyPressed == '76'){
        newimage('light_green.png');
        console.log ('l');
    }
    if(keyPressed == '84'){
        newimage('trunk.jpg');
        console.log ('t');
    }
    if(keyPressed == '82'){
        newimage('roof.jpg');
        console.log ('r');
    }
    if(keyPressed == '89'){
        newimage('yellow_wall.png');
        console.log ('y');
    }
    if(keyPressed == '68'){
        newimage('dark_green.png');
        console.log ('d');
    }
    if(keyPressed == '67'){
        newimage('cloud.jpg');
        console.log ('c');
    }
    if(keyPressed == '85'){
        newimage('unique.png');
        console.log ('u');
    }
   }
