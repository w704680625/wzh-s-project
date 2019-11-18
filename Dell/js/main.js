// console.log("配置成功")
require.config({
    paths: {
        "jquery": "jquery-1.11.3",
        "jquery-cookie": "jquery.cookie",
        "parabola": "parabola",
        "nav": "nav",
        "product":"product",
        
    },
    shim: {
        //设置依赖关系  先引入jquery.js  然后在隐去jquery-cookie
        "jquery-cookie": ["jquery"],
        //声明当前模块不遵从AMD
        "parabola": {
			exports: "_"
		}
    }
})

require(['nav'],function(nav){

        nav.download();
        nav.navTop();
        nav.banner();
        nav.bannerTab();
        nav.Allproduct();
})
require(['product'],function(product){

   product.productadd();
})