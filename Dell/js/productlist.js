define(['jquery'],function($){
    //商品列表
    function productlistadd(){
       $.ajax({
           url:"../js/productlist.json",
           success:function(obj){
         var prlistAll = obj.list;
        for(var i=0;i<prlistAll.length;i++){
        $(`<div id="productdiv-content-2-1">
            <div id="productdiv-content-2-1-img"><img src="../images/${prlistAll[i].img1}" alt=""></div>
            <div id="productdiv-content-2-1-2">
            <h3>${prlistAll[i].h3}</h3>
            <h2>${prlistAll[i].h2}</h2>
            <small>${prlistAll[i].small}</small>
            <p>${prlistAll[i].p1}</p>
            <ul class="content-2-1-2ul">
                <li>${prlistAll[i].li1}</li>
                <li>${prlistAll[i].li2}</li>
                <li>${prlistAll[i].li3}</li>
                <li class="li4">${prlistAll[i].li4}</li>
            </ul>
            <p class="p2">${prlistAll[i].p2}</p>
            </div>
            <div id="productdiv-content-2-1-3">
                <span>${prlistAll[i].span}</span>
                <a href="details.html"><img src="../images/${prlistAll[i].img2}" alt=""></a>
            </div>
        </div>`).appendTo("#productdiv-content-2");
            }
          }
       })
    }
    
    //商品列表边框
    function listBorder(){
        $("#productdiv-content").on("mouseenter","#productdiv-content-2-1",function(){
             $(this).css("border-color","#EEEEEE");
             $(this).css("box-shadow","0px  1px 3px rgba(0,0,0,0.5)");
        })
        $("#productdiv-content").on("mouseleave","#productdiv-content-2-1",function(){
          $(this).css("border-color","#FFF");
          $(this).css("box-shadow","0px  0px 0px rgba(0,0,0,0)");
       })
       
    }

   return{
     productlistadd:productlistadd,
     listBorder:listBorder
   }
})