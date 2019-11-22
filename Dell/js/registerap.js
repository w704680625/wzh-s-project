window.onload = function(){
    var oBtn = document.getElementById("btn-1");
    var aInputs = document.getElementsByTagName("input");
    oBtn.onclick = function(){
        $ajax({
            method:"post",
            url:"register.php",
            data:{
                username:aInputs[0].value,
                password:aInputs[4].value,
                email:aInputs[3].value
            },
            success:function(result){
                alert(result);
            },
            error:function(msg){
                alert(msg);
            }
        })
    }
}