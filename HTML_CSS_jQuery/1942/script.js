
$(document).ready(function(){

    var hero = {
        x: 500,
        y: 300
    }
    
    var enemy = [{x: 200, y: 100}, {x: 300, y: 100}, {x: 400, y: 100}, {x: 500, y: 100}, {x: 600, y: 100}, {x: 700, y: 100}, {x: 800, y: 100}];
    var enemy2 = [{x: 250, y: 75}, {x: 450, y: 75}, {x: 650, y: 75}, {x: 850, y: 75}];
    var bullets = [];
    var singleBullet = "";
    var score = 0;
    var sound = new Audio("Explosion.wav");

    function displayHero(){
        document.getElementById('hero').style['top'] = hero.y + "px";
        document.getElementById('hero').style.left = hero.x + "px";
    }

    function displayEnemies(){
        var output = "";
        for(var i = 0; i < enemy.length; i++){            
            output += `<div class='enemy' id='enemy${i}' style='top:${enemy[i].y}px; left:${enemy[i].x}px;'></div>`;
        }
        $("#enemies").html(output);

        output = "";        
        for(var j = 0; j < enemy2.length; j++){   
            output += `<div class='enemy2' id='enemy2-${j}' style='top:${enemy2[j].y}px; left:${enemy2[j].x}px;'></div>`;            
        }
        $("#enemies2").html(output);
    }

    function moveEnemies(){
        for(var i = 0; i < enemy.length; i++){
            enemy[i].y += 5;

            if(enemy[i].y > 525){
                enemy[i].y = 0;
                enemy[i].x = Math.random()*900;
            }
        }

        for(var i = 0; i < enemy2.length; i++){
            enemy2[i].y += 10;

            if(enemy2[i].y > 525){
                enemy2[i].y = 0;
                enemy2[i].x = Math.random()*900;
            }
        }
    }

    function displayBullets(){
        var output = "";
        for(var i = 0; i < bullets.length; i++){
            output += `<div class='bullet' style='top:${bullets[i].y}px; left:${bullets[i].x}px;'></div>`;
        }
        $("#bullets").html(output);
    }

    function moveBullets(){
        for(var i = 0; i < bullets.length; i++){
            bullets[i].y -=5;

            if(bullets[i].y < 0){
                bullets[i] = bullets[bullets.length - 1];
                bullets.pop();                  
            }
        }
    }

    function collisionDetection(){        
        for(var i = 0; i < bullets.length; i++){
            for(var j = 0; j < enemy.length; j++){
                if(Math.abs(bullets[i].x - enemy[j].x) < 5 && Math.abs(bullets[i].y - enemy[j].y) < 5){
                    score += 10;
                    // console.log("bullets of " + bullets[i] + " i: " + i + " collided with enemy " + enemy[j] + " j: " + j + " score: " + score);    
                    sound.play();   
                    enemy[j].y = 0;
                    enemy[j].x = Math.random()*900;                                         
                    // document.getElementById('enemy'+j).style.backgroundImage="url(explosion.gif)";                                                            
                }                
            }

            for(var z = 0; z < enemy2.length; z++){
                if(Math.abs(bullets[i].x - enemy2[z].x) < 10 && Math.abs(bullets[i].y - enemy2[z].y) < 10){
                    score += 20;
                    console.log("bullets of " + bullets[i] + " i: " + i + " collided with enemy " + enemy[j] + " j: " + j + " score: " + score);    
                    sound.play();   
                    enemy2[z].y = 0;
                    enemy2[z].x = Math.random()*900;                                          
                }                
            }
        }


        for(var j = 0; j < enemy.length; j++){
            if(Math.abs(hero.x - enemy[j].x) < 5 && Math.abs(hero.y - enemy[j].y) < 5){
                score -= 500;                
                sound.play();   
                hero.y = 0;
                hero.x = Math.random()*900;                                        
            }                
        }

        for(var z = 0; z < enemy2.length; z++){
            if(Math.abs(hero.x - enemy2[z].x) < 10 && Math.abs(hero.y - enemy2[z].y) < 10){
                score -= 10;                
                sound.play();   
                hero.y = 0;
                hero.x = Math.random()*900;                                       
            }                
        }       
    }

    function displayScore(){
        $("#score").html(score);
    }

    function gameLoop(){
        displayHero();        
        moveEnemies();
        displayEnemies();
        moveBullets();
        displayBullets();
        collisionDetection();
        displayScore();
    }

    setInterval(gameLoop, 30);

    document.onkeydown = function(e){
        if(e.keyCode === 37){
            hero.x -= 10;
            if(hero.x < 0){                
                hero.x = 975;
            }
        }else if(e.keyCode === 38){
            hero.y -= 10;
            if(hero.y < 0){
                hero.y = 525;
            }
        }else if(e.keyCode === 39){
            hero.x += 10;
            if(hero.x > 975){
                hero.x = 0;
            }
        }else if(e.keyCode === 40){
            hero.y += 10;
            if(hero.y > 525){
                hero.y = 0;
            }
        }else if(e.keyCode === 32){
            singleBullet = {x: hero.x+5.5, y: hero.y-13};
            bullets.push(singleBullet);             
        }        
    }
});

