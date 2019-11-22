define(['jquery'],function($){
    //购物车列表
    function shoplistadd(){
       $.ajax({
           url:"../js/shop.json",
           success:function(obj){
         var shopAll = obj.shop;
        for(var i=0;i<shopAll.length;i++){
        $(`<ul>
            <li id="listimg"><img src="../images/${shopAll[i].img}" alt=""></li>
            <li id="lista"><a href="details.html">${shopAll[i].a}</a></li>
            <li id="listxh">${shopAll[i].xh}</li>
            <li id="listnum">
                <a href="" class="listsub">-</a>
                <input type="text" value="1" class="number">
                <a href="" class="listadd">+</a>
            </li>
            <li id="UnitPrice">${shopAll[i].UnitPrice}</li>
            <li id="Totalprice">￥<span id="Totalpricespan">${shopAll[i].Totalprice}</span></li>
            <li id="listdel"><a href="">${shopAll[i].del}</a></li>
            </ul>`).appendTo("#shopping-list-content");
        $(`<span class="span2">${shopAll[i].zj}</span>`).appendTo("#shopping-list-bottom");

            }
          }
       })
    }
    function shoplistdel(){
     $("#shopdel").click(function(ev){
         ev.preventDefault();
         $("#shopping-list-content").empty();
         $("#shopping-list-bottom").empty();
         $("#shopnum").text("0");
     })
     $("#shopping-list-content").on("click","#listdel a",function(ev){
        ev.preventDefault();
        $("#shopping-list-content").empty();
        $("#shopping-list-bottom").empty();
        $("#shopnum").text("0");
    })
    }
   
    function shopNum(){
        $("#shopping-list-content").on("click","#listnum .listadd",function(ev){
            ev.preventDefault();
            // alert(1);
            var a= $("#shopping-list-content").find(".number").val();
            a++;
            $("#shopping-list-content").find(".number").val(a);
            var b = $("#shopnum").text();
            b++;
            $("#shopnum").text(b);
            var c = $("#shopping-list-content").find("#Totalpricespan").text();
            c = 6999 *a;
            $("#shopping-list-content").find("#Totalpricespan").text(c);
            var d = $("#shopping-list-bottom").find(".span2").text();
            d = 6999 *a;
            $("#shopping-list-bottom").find(".span2").text(d);
        })

        $("#shopping-list-content").on("click","#listnum .listsub",function(ev){
            ev.preventDefault();
            // alert(1);
            var a= $("#shopping-list-content").find(".number").val();
            a--;
            if(a<=1){
                a=1;
                $("#shopnum").text(a);
            }
            $("#shopping-list-content").find(".number").val(a);
            var b = $("#shopnum").text() ;
            b--;
            if(b<=1){
                b=1;
                $("#shopnum").text(b);
            }
            var c = $("#shopping-list-content").find("#Totalpricespan").text();
            c = 6999 *a;
           $("#shopping-list-content").find("#Totalpricespan").text(c);
           var d = $("#shopping-list-bottom").find(".span2").text();
            d = 6999 *a;
            $("#shopping-list-bottom").find(".span2").text(d);
        })
    }
     

   return{
    shoplistadd:shoplistadd,
    shoplistdel:shoplistdel,
    shopNum:shopNum,
   }
})

