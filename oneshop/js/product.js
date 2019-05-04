
 var $divs = $('.checkbox')
$('.checkbox input').on('click',function () {
    var num=1;
    var sum_price  = $('.team_sum span').text()-0;
    var price = $(this).parent().next().text().slice(1)-0;
    console.log(price)

    // for(i=0;i<$divs.length;i++){
    if($(this).is(':checked')){
        sum_price+=price;
        num=$("input[type=checkbox]:checked").length

    }else{
        sum_price-=price;
        num=$("input[type=checkbox]:checked").length;

    }

    $('.team_sum span').text(sum_price);
    $('.sum_ipt').val(num);
})
$('.checkbox input').each(function () {
    $(this).attr('checked',false)
})

