
$(document).ready(function(){
    
    var world = [
        [2,2,2,2,2,2,2,2,2,2],
        [2,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,2],
        [2,1,1,2,1,1,2,1,1,2],
        [2,1,1,1,1,1,2,1,1,2],
        [2,1,1,2,1,1,1,3,1,2],
        [2,1,1,1,1,1,2,1,1,2],
        [2,1,1,2,1,2,2,1,1,2],
        [2,1,1,1,1,1,1,1,1,2],
        [2,2,2,2,2,2,2,2,2,2]
    ];

    var score = 0;

    var pacman = {
        x: 1,
        y: 1
    }

    var xCoord = 0;
    var yCoord = 0;
    var ghostCount = 0;
    var userLose = false;

    function displayWorld(){
        
        var worldBuilder = "";
        for(var i = 0; i < world.length; i++){
            worldBuilder += "<div class='row'>\n";
            for(var j = 0; j < world[i].length; j++){
                if(world[i][j] === 2){
                    worldBuilder += "<div class='brick'></div>\n";
                }else if(world[i][j] === 1){
                    worldBuilder += "<div class='coin'></div>\n";
                }else if(world[i][j] === 0){
                    worldBuilder += "<div class='empty'></div>\n";
                }else if(world[i][j] === 3){
                    worldBuilder += "<div class='cherries'></div>\n";
                }else if(world[i][j] === 4){
                    worldBuilder += "<div class='ghost'></div>\n";
                }
            }   
            worldBuilder += "</div>\n";    
        }
        $("#world").html(worldBuilder);
                
    }    

    function displayPacman(){
        document.getElementById("pacman").style.top = pacman.y*50 + "px";
        document.getElementById("pacman").style.left = pacman.x*50 + "px";
    }

    function displayScore(){
        $("span").html(score);
    }    

    function eatCoin(){
        world[pacman.y][pacman.x] = 0;
        displayWorld();        
        displayScore();
    }

    displayWorld();
    displayPacman();

    var ghostAppear = Math.floor((Math.random() * 151) + 1);
    
    document.onkeydown = function(e){
        // console.log(e);
        if(e.keyCode === 37 && world[pacman.y][pacman.x-1] != 2){            
            pacman.x--;
            document.getElementById("pacman").style.transform = "rotate("+180+"deg)";
        }else if(e.keyCode === 38 && world[pacman.y-1][pacman.x] != 2){
            pacman.y--;
            document.getElementById("pacman").style.transform = "rotate("+270+"deg)";
        }else if(e.keyCode === 39 && world[pacman.y][pacman.x+1] != 2){
            pacman.x++;
            document.getElementById("pacman").style.transform = "rotate("+0+"deg)";
        }else if(e.keyCode === 40 && world[pacman.y+1][pacman.x] != 2){
            pacman.y++;
            document.getElementById("pacman").style.transform = "rotate("+90+"deg)";
        }

        if(world[pacman.y][pacman.x] === 1){           
            score += 10;
            eatCoin();
        }else if(world[pacman.y][pacman.x] === 3){           
            score += 50;
            eatCoin();
        }else if(world[pacman.y][pacman.x] === 4){
            document.getElementById("pacman").style.display = "none";
            $("span").html("You lost");
        }

        if(score >= ghostAppear && ghostCount < 1){
            xCoord = Math.floor((Math.random() * (world.length - 2)) + 1);
            yCoord = Math.floor((Math.random() * (world[0].length-2)) + 1);             
            world[yCoord][xCoord] = 4; 
            ghostCount++;            
            displayWorld();
        }else if(ghostCount === 1){    
            for(var i = 0; i < world.length; i++)       {
                for(var j = 0; j < world[i].length; j++){
                    if(world[i][j] === 4){
                        world[i][j] = 1;
                    }
                }
            }
            xCoord = Math.floor((Math.random() * (world.length - 2)) + 1);
            yCoord = Math.floor((Math.random() * (world[0].length-2)) + 1);             
            world[yCoord][xCoord] = 4;   
            if(world[pacman.y][pacman.x] === 4){
                document.getElementById("pacman").style.display = "none";
                $("span").html("You lost");
            }          
            displayWorld();
        }
        displayPacman();                
    }
    // console.dir(document);
});
