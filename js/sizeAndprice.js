/*衣服尺寸选择*/
$(function(){
	$(".pro_size li").click(function(){
		$(this).addClass("selectedBg").siblings().removeClass("selectedBg")
	})
})
/*数量和价格联动*/
$(function(){
	var num=0,
		numVal=$(".pro_num").find("#numVal"),
	    del=$(".pro_num").find("#del"),
	    add=$(".pro_num").find("#add"),
		price = $(".pro_price span").text(),
		span = $(".pro_price span")
		function change(){
			numVal.text(num);
			var amount = num * price;
			span.text( amount );
		}
	del.click(function(){
		num--;
		if(num<=1){
			alert("数量不能小于1");
			num=1;
		}
		change();
	})
	add.click(function(){
		num++;
		change();
	}).click();
})
