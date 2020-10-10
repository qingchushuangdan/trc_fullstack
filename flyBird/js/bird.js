var bird = {
    flyTime:null,//小鸟飞翔的定时器
    wingTimer:null,//小鸟翅膀摆动的定时器

    div:document.createElement('div'),
    showBird:function(parentObj){
        bird.div.style.width = '40px'
        bird.div.style.height = '28px'
        bird.div.style.backgroundImage = 'url(img/bird0.png)'
        bird.div.style.borderImageRepeat = 'no-repeat'
        bird.div.style.position = 'absolute'
        bird.div.style.left = '50px'
        bird.div.style.top = '200px'
        bird.div.style.zIndex = '1'
        parentObj.appendChild(bird.div)    
    },
    fallSpeed:0,//小鸟下落的速度
    flyBird:function(){//控制小鸟下落的函数
        bird.flyTime = setInterval(fly, 60)//不能用this,会影响作用域，现在只能用bird
        function fly(){
            bird.div.style.top = bird.div.offsetTop + bird.fallSpeed++ + 'px'
            if (bird.div.offsetTop >= 395){//掉到地面，就清除定时器
                bird.fallSpeed = 0
                clearInterval(bird.flyTime)
                clearInterval(bird.wingTimer)
            }
            //不让小鸟飞出界
            if(bird.div.offsetTop < 0){
                bird.div.style.top = '0px'
                bird.fallSpeed = 2

            }
            if(bird.fallSpeed > 12){
                bird.fallSpeed = 12

            }
        }
    },
    wingWave: function(){//控制小鸟翅膀扇动的函数
        var up = ['url(img/up_bird0.png', 'url(img/up_bird1.png)']
        var down = ['url(img/down_bird0.png)', 'url(img/down_bird1.png)']
        var i = 0, j = 0;
        bird.wingTimer = setInterval(wing, 120)
        function wing(){
            if(bird.fallSpeed > 0){
                bird.div.style.backgroundImage = down[i++]
                if(i == 2){
                    i = 0
                }
            }
            if(bird.fallSpeed < 0){
                bird.div.style.backgroundImage = up[j++]
                if(j == 2){
                    j = 0
                }
            }  
        }
    }
}