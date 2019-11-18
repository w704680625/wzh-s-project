define(['jquery'],function($){
    //商品列表
    function productadd(){
       $.ajax({
           url:"../js/product.json",
           success:function(obj){
               var explosive = obj.explosive;
               var New = obj.new;
               var frivolous = obj.frivolous;
               var exclusive = obj.exclusive;
               var alien = obj.alien;
               var monitor =obj.monitor;
               var game =obj.game;
               var parts =obj.parts;
                // alert(explosive.length);
                for(var i=0;i<explosive.length;i++){
                    $(` <div id="products_1_1">
                    <p><a href=""><img src="../images/${explosive[i].img}" alt=""></a></p>
                    <div id="products_1_1_1">
                        <p id="products_1_1_1_p1">${explosive[i].p1}</p>
                        <p id="products_1_1_1_p2">${explosive[i].p2}</p>
                        <small>${explosive[i].small}</small>
                    </div>
                     <p class="p1">${explosive[i].p3}</p>
                     <div id="products_1_1_2">
                         <p>${explosive[i].price}</p>
                         <a href=""><img src="../images/${explosive[i].imgbuy}" alt=""></a>
                     </div>
                    </div> `).appendTo("#products_explosive");
                    $(` <div id="products_1_1">
                    <p><a href=""><img src="../images/${New[i].img}" alt=""></a></p>
                    <div id="products_1_1_1">
                        <p id="products_1_1_1_p1">${New[i].p1}</p>
                        <p id="products_1_1_1_p2">${New[i].p2}</p>
                        <small>${New[i].small}</small>
                    </div>
                        <p class="p1">${New[i].p3}</p>
                        <div id="products_1_1_2">
                            <p>${New[i].price}</p>
                            <a href=""><img src="../images/${New[i].imgbuy}" alt=""></a>
                        </div>
                </div> `).appendTo("#products_new");

                $(` <div id="products_1_1">
                <p><a href=""><img src="../images/${frivolous[i].img}" alt=""></a></p>
                <div id="products_1_1_1">
                    <p id="products_1_1_1_p1">${frivolous[i].p1}</p>
                    <p id="products_1_1_1_p2">${frivolous[i].p2}</p>
                    <small>${frivolous[i].small}</small>
                </div>
                    <p class="p1">${frivolous[i].p3}</p>
                    <div id="products_1_1_2">
                        <p>${frivolous[i].price}</p>
                        <a href=""><img src="../images/${frivolous[i].imgbuy}" alt=""></a>
                    </div>
                 </div> `).appendTo("#products_frivolous");

                 $(` <div id="products_1_1">
                 <p><a href=""><img src="../images/${exclusive[i].img}" alt=""></a></p>
                 <div id="products_1_1_1">
                     <p id="products_1_1_1_p1">${exclusive[i].p1}</p>
                     <p id="products_1_1_1_p2">${exclusive[i].p2}</p>
                     <small>${exclusive[i].small}</small>
                 </div>
                     <p class="p1">${exclusive[i].p3}</p>
                     <div id="products_1_1_2">
                         <p>${exclusive[i].price}</p>
                         <a href=""><img src="../images/${exclusive[i].imgbuy}" alt=""></a>
                     </div>
                  </div> `).appendTo("#products_exclusive");

                  $(` <div id="products_1_1">
                  <p><a href=""><img src="../images/${alien[i].img}" alt=""></a></p>
                  <div id="products_1_1_1">
                      <p id="products_1_1_1_p1">${alien[i].p1}</p>
                      <p id="products_1_1_1_p2">${alien[i].p2}</p>
                      <small>${alien[i].small}</small>
                  </div>
                      <p class="p1">${alien[i].p3}</p>
                      <div id="products_1_1_2">
                          <p>${alien[i].price}</p>
                          <a href=""><img src="../images/${alien[i].imgbuy}" alt=""></a>
                      </div>
                   </div> `).appendTo("#products_alien");
 
                   $(` <div id="products_1_1">
                   <p><a href=""><img src="../images/${monitor[i].img}" alt=""></a></p>
                   <div id="products_1_1_1">
                       <p id="products_1_1_1_p1">${monitor[i].p1}</p>
                       <p id="products_1_1_1_p2">${monitor[i].p2}</p>
                       <small>${monitor[i].small}</small>
                   </div>
                       <p class="p1">${monitor[i].p3}</p>
                       <div id="products_1_1_2">
                           <p>${monitor[i].price}</p>
                           <a href=""><img src="../images/${monitor[i].imgbuy}" alt=""></a>
                       </div>
                    </div> `).appendTo("#products_monitor");
                    }
                for(var j=0;j<game.length;j++){
                    var game =obj.game;
                    var parts =obj.parts;
                    $(` <div id="products_1_1">
                    <p><a href=""><img src="../images/${game[i].img}" alt=""></a></p>
                    <div id="products_1_1_1">
                        <p id="products_1_1_1_p1">${game[i].p1}</p>
                        <p id="products_1_1_1_p2">${game[i].p2}</p>
                        <small>${game[i].small}</small>
                    </div>
                        <p class="p1">${game[i].p3}</p>
                        <div id="products_1_1_2">
                            <p>${game[i].price}</p>
                            <a href=""><img src="../images/${game[i].imgbuy}" alt=""></a>
                        </div>
                     </div> `).appendTo("#products_game");

                     $(` <div id="products_1_1">
                     <p><a href=""><img src="../images/${parts[i].img}" alt=""></a></p>
                     <div id="products_1_1_1">
                         <p id="products_1_1_1_p1">${parts[i].p1}</p>
                         <p id="products_1_1_1_p2">${parts[i].p2}</p>
                         <small>${parts[i].small}</small>
                     </div>
                         <p class="p1">${parts[i].p3}</p>
                         <div id="products_1_1_2">
                             <p>${parts[i].price}</p>
                             <a href=""><img src="../images/${parts[i].imgbuy}" alt=""></a>
                         </div>
                      </div> `).appendTo("#products_parts");
    
                }
               
           }
       })
    }

   return{
     productadd:productadd
   }
})