//购物车部分
// $('.car_t,.last').hover(function () {
//     $('.last').toggle();
// })
$('.car_t,.last').on('mouseover', function () {
    $('.last').show()
})
$('.car_t,.last').on('mouseout', function () {
    $('.last').hide()
})
var shopcar = {
    totalnum: 3,
    totalprice: 300.8,
    shoplist: []
}
var $divs = $('.plush');

$divs.each(function (index, item) {
    // console.log(index,item);
    var n = $(item).find('.J_inputCount').val() - 0
    var p = $(item).next('.J_smallTotalPrice').text().slice(1) - 0
    shopcar.shoplist.push({
        num: n,
        count:n,
        price: p,
        tprice: n * p
    })

})
//加
$('.J_btnAddCount').on('click', function () {
    //获取到同一类名在不同父元素下的索引值
    var c_index = $('.J_btnAddCount').index(this);
    console.log(c_index)
    var new_num = ++shopcar.shoplist[c_index].num;
    change_data(c_index, new_num)
    change_html(c_index)
    console.log(shopcar.shoplist)

})
//减
$('.J_btnDelCount').on('click', function () {
    //获取到同一类名在不同父元素下的索引值
    var c_index = $('.J_btnDelCount').index(this);
    console.log(c_index)
    var new_num = shopcar.shoplist[c_index].num;
    if (new_num <= 1) {
        alert('最少为一件');
    }
    --new_num;
    change_data(c_index, new_num)
    change_html(c_index)
    // console.log(shopcar.shoplist)

})
$('.J_btnDelete').on('click', function () {
    var c_index = $('.J_btnDelete').index(this);
    console.log(c_index)
    $(this).parents('.clear').remove();
    // console.log($('.clear').prev('h4'))
    $('.clear').prev('h4').remove()
    //删除数据
    shopcar.shoplist.splice(c_index,1)
    // console.log(shopcar.shoplist);
    change_data(-1,0);
    change_html(-1)
    console.log(shopcar.totalnum)

   

})
// $('.noshop').show();
console.log($('.J_totalCount').text())
//修改数据
function change_data(index, num) {
    //每一次执行代码前，是总的价格总的数量为零
    shopcar.totalnum = 0;
    shopcar.totalprice = 0;
    //修改单个商品数量 价格
    if (index>-1){
    shopcar.shoplist[index].tprice = shopcar.shoplist[index].price * num;
    shopcar.shoplist[index].num = num;
    shopcar.shoplist[index].count=shopcar.shoplist[index].num
    }
    //修改总的商品价格和数量
    $.each(shopcar.shoplist, function (index, item) {
        shopcar.totalnum += item.num;
        shopcar.totalprice += item.tprice;
    })
}

function change_html(index) {
    if (index>-1) {
        $divs.eq(index).find('.J_inputCount').val(shopcar.shoplist[index].num);
        $divs.eq(index).next('.J_smallTotalPrice').text('￥' + shopcar.shoplist[index].tprice.toFixed(1));
    }
    $('.J_totalPrice').text('￥' + shopcar.totalprice);
    $('.J_totalCount').text('(' + shopcar.totalnum + ')');
     // $('.J_count').text('共' + shopcar.shoplist[index].count + '件商品')
    if(shopcar.totalnum==0){
        $('.noshop').show();
    }
}


//客户服务
$('.ss_listBg').hover(function () {
    $('.ss_list_bg').slideToggle()
})
//左边导航栏部分
$lis = $('.leftNav li')
console.log($lis);
$('.leftNav li').on('mouseover', function () {
    var l_index = $(this).index();
    // console.log(l_index)
    $lis.eq(l_index).find('.zj').show()
})
$('.leftNav li').on('mouseout', function () {
    var l_index = $(this).index();
    // console.log(l_index)
    $lis.eq(l_index).find('.zj').hide()
})
//快讯部分
var time = null;
var li_h = $('#express li').innerHeight();
$("#express li").hover(
    function () {
        clearInterval(time);
    },
    function () {
         info()
    })

function info() {
    time = setInterval(function () {
        var li = $('#express li:eq(0)').clone();
        $('#express li:first').animate({
            'marginTop': -li_h

        }, 2000, function () {
            $('#express li:eq(0)').remove()
            $('#express').append(li);
            // console.log($('#express'))
        })
    })
}
info();
 //轮播图部分
var timer = null;
var i=0;
var $lis = $('.slide_box li')
$('.slide_box li').eq(0).show().siblings().hide();
function autoplay() {
    timer = setInterval(function () {
        i++;
        if(i>$lis.length-1){
            i=0
        }
        show()
    },1000)
}
autoplay()
function show() {
    $('.slide_box li').eq(i).show().siblings().hide();
    $('.slide_box li').eq(i).addClass('active').siblings().removeClass('active')
    $('.num li').eq(i).addClass('active').siblings().removeClass('active')
}
$('.num li').hover(function () {
    clearInterval(timer);
    i = $(this).index();
    show();
},function () {
    autoplay();
})
