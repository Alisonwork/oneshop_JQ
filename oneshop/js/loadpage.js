$('.tableBtn').on('click',function () {
    $user_name = $('.userHead').next('input').val();
    $user_psw = $('.userLock').next('input').val();
    var reg_user1=/^\s*$/;
    var reg_user2=/[a-zA-Z0-9]{1,10}@[a-zA-Z0-9]{1,5}\.[a-zA-Z0-9]{1,5}|^1[3578]\d{9}$|^[\u4e00-\u9fa5]{2,4}$/
    var reg_psw1 = /^\s*$/;
    var reg_psw2 =/^\w{6,10}$/
    // e.stopPropagation();
    if(reg_user1.test($user_name)){
        alert('用户名不能为空')
        // alert('邮箱、以13、15、18开头的电话或者是2~4个汉字')
    }else if(reg_user2.test($('.userHead').next('input').val())){
        // alert('用户名不能为空')
        alert('邮箱、以13、15、18开头的电话或者是2~4个汉字')
        console.log(null)
    }
    if(reg_psw1.test($user_psw)){
        alert('密码不能为空')
    }else if (reg_psw2.test($user_psw)){
        alert('密码为6-10位字符')
    }
    console.log($user_name)
})