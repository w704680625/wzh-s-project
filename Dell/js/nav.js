define(['jquery'],function($){
     //顶部导航
     function download(){
        $.ajax({
            url:"../js/nav.json",
            success:function(obj){
                var navArr = obj.nav;
                // alert(navArr.length);
                var oUl = $(`<ul class="Frivolousul0">         
                </ul>`)
                oUl.appendTo("#columns1");
                var oUl2 = $(`<ul class="Frivolousul1">         
                </ul>`)
                oUl2.appendTo("#columns2");
                var oUl3 = $(`<ul class="Frivolousul2">         
                </ul>`)
                oUl3.appendTo("#columns3");
                var oUl4 = $(`<ul class="Frivolousul3">         
                </ul>`)
                oUl4.appendTo("#columns4");
                   for(var i=0;i<navArr.length;i++){
                    var fr = navArr[i].navchild;  
                    // console.log(fr);
                    for(var j=0;j<fr.length;j++){
                    $(` <li><a href="" class="${fr[j].class}">${fr[j].a}</a></li>`).appendTo($(`.Frivolousul${i}`))
                    
                    }   
                }   
               
            }
        })
     }
      //顶部导航
      function navTop(){
          $("#nav .navul").on("mouseenter","li",function(){
               $(this).find("ul").css("display","block");
          })
          $("#nav .navul").on("mouseleave","li",function(){
            $(this).find("ul").css("display","none");
         })
         
      }
       //顶部轮播
      function banner(){
        $.ajax({
          url:"../js/nav.json",
          success:function(obj){
           var bannerArr = obj.banner;
          //  alert(bannerArr.length);
          for(var i= 0 ;i<bannerArr.length;i++){
           $(`<a href="${bannerArr[i].url}" style="display: ${i==0?"block":"none"};">
           <img src="../images/${bannerArr[i].img}" alt="" style=" width: 100%;height: 500px;" >
       </a>`).appendTo("#banner-img");
           $(`<a href="" class="banner-a${i}  ${i==0?"banner-a-active":""}"></a>`).appendTo("#banner-a");
          }
          }
      })
      }
     //顶部轮播切换
      function bannerTab(){
         var timer = null;
         var iNow = 0;
         
        timer = setInterval(function(){
                iNow++;
                tab();
         },3000);

        //  aBtn.click(function(){
        //    iNow = $(this).index();
        //    tab();
        //  });
         $("#banner-a").on("click","a",function(){
          iNow = $(this).index();
          // alert(this);
          tab();
          return false;
         });
         function tab(){
            var aImg =$("#banner-img").find("a");
            var aBtn =$("#banner-a").find("a");
            
            if(iNow ==aBtn.size()){
              aBtn.eq(0).addClass("banner-a-active");
            }

           aImg.hide().eq(iNow).show();

             if(iNow == aBtn.size()-1){
               iNow=-1;
               
             }
           aBtn.removeClass("banner-a-active").eq(iNow).addClass("banner-a-active");
         }
      }

     //全部商品列表 <li><a href="">${product2[i].a}</a></li>
     function Allproduct(){
      $.ajax({
          url:"../js/nav.json",
          success:function(obj){
              var AllArr = obj.All;
              $(`<ul id="allproduct" style="display: none;">
                 <li id="productli1">
 
                  </li>
                  <li id="productli2">
 
                  </li>
                  </ul>`).appendTo("#nav .all"); 
              for(var i=0;i<AllArr.length;i++){
              var title = AllArr[i].title;  
              var title2 =AllArr[i].title2; 
              for(var j=0;j<title.length;j++){
               $(` <li id="${title[j].id}"><a href="">${title[j].a}</a>`).appendTo("#productli1");
               $(` <li id="${title2[j].id}"><a href="">${title2[j].a}</a>`).appendTo("#productli2");
                 }
                }
               
              var product = AllArr[i].product; 
              var product2 = AllArr[i].product2; 
              for(var m=0;m<product.length;m++){
               var oUl= $(`<ul id="${product[m].id}">
              
                </ul>`).appendTo("productli1");
                $(`<ul id="${product2[m].id}">
              
                </ul>`).appendTo("productli2");
                for(var n=0;n<product.length;n++){
                  $(` <li><a href="">${product[n].a+"n"}</a></li>`).appendTo(oUl);
                }
              }
              
                
           }
        })
     }
    //顶部商品列表
    // function Allproductshow(){
    //     $("#nav .navul").on("mouseenter","li",function(){
    //          $(this).find("ul").css("display","block");
    //     })
    //     $("#nav .navul").on("mouseleave","li",function(){
    //       $(this).find("ul").css("display","none");
    //    })
       
    // }

    return{
      download:download,
      navTop:navTop,
      banner:banner,
      bannerTab:bannerTab,
      Allproduct:Allproduct
    }
})