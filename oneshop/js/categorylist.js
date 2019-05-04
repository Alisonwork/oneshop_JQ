$(function () {
    var a=0;
    $('#sortPrice').on('click',function () {
        a++;
        var arr = new Array();
        $('.cate_list .price span').each(function (index, item) {
            arr[index]=$(item).text().substring(1)-0;
            // console.log(arr[index])
        })
        if(a%2!=0){
          //升序
          for(i=0;i<arr.length;i++){
              for(j=0;j<arr.length-1;j++){
                  var temp = 0;
                  if(arr[j]>arr[j+1]){
                     temp = arr[j];
                     arr[j]=arr[j+1];
                     arr[j+1]=temp;
                  }
              }
          }
        }
        else{
            //降序
            for(i=0;i<arr.length;i++){
                for(j=0;j<arr.length-1;j++){
                    var temp = 0;
                    if (arr[j]<arr[j+1]){
                        temp = arr[j];
                        arr[j]=arr[j+1];
                        arr[j+1]=temp;
                    }
                }
            }
        }
        //获取数组的长度
        var len = $('.cate_list .price span').size();
        //取到li下的数字值
        //把li与数组一一对应的顺序进行追加到ul
        for (i=0;i<arr.length;i++){
            for (j=0;j<len;j++){
                if(arr[i]==$('.cate_list .price span').eq(j).text().substring(1)){
                    $('.cate_list .price span').eq(j).parents('li').remove().appendTo($('.cate_list'))
                   console.log(i+''+j)
                }
            }
        }
    })
})