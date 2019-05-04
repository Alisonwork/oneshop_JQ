  var timer = null;
$('.tableText').on('click',function () {
    if(timer){
        clearInterval(timer);
    }
     var second = 60;
     timer=setInterval(function () {
        console.log(second);
        if(second<=0){
         $('.tableText').text('重获验证码');
         clearInterval(timer);
            $('.tableText').css('pointer-events','auto');

        }else {
            second--;
            $('.tableText').text(second+'秒之后重获验证码')
            $('.tableText').css('pointer-events','none');

        }
     },1000)
})