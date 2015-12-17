function load_cart(){	
   // $('.mini-cart-products').html('');
    var url = $('.ajax-url').attr('href');
    var t   = 0;
    var bar   = document.getElementById("barcode").value;
	var data        = {'barcode':bar};
	
    $.ajax({
        url     : url,
		type: "POST",
		data: data,
        dataType:'json',
        success:function(result){
			//alert("success");
			
            if(result.length > 0)
			{
				var image       = $('.mini-cart-image a img');
                var prod_name   = $('.mini-cart-name a');
            //    var attribute   = $('.mini-cart-attributes');
            //    var pricing     = $('.mini-cart-pricing');
                var qty         = $('.mini-cart-quantity');
                var qty_val     = $('#mini-cart-quantity');
                var subtotal    = 0;
                var count       = parseInt(result.length);

                qty.html(count);
                qty_val.val(count);

                $.each(result, function(key, val){

					var bag_slider		= $("<div class='mini-bag-slider  mini-bag-lt4-slider'></div>");
					var imgdiv			= "<div class='mini-cart-image'><div data-pname='W-HERMES' class='remove-item button-text' data-pid='8059966250754'></div><a href='' title='W-HERMES'><img itemprop='image' class='primary-image' data-altimg='"+val.image+"' src='"+val.image+"' alt='W-HERMES, Army'></a></div>";
					var productDiv  	= $( "<div class='mini-cart-details clearfix'></div>" ); 		
                    //var nameDiv     	= '<div class="mini-cart-name font"><a href="''">'+val.name+'</a></div>'; edited by abhishek on 17/11/15.
					//var miniCartSize  	= $( "<div class='mini-cart-size'></div>" );
					var nameDiv     	= '<div class="mini-cart-name font"><h5><a href="">'+val.name+'</a></h5></div>';
					//var header6			= '<h6></h6>';
					//var value 			= '<div class="attribute"><span class="value">2</span></div>';
					//var label 			= '<div class="attribute"><span class="label"> x </span></div>';
					var miniattr		= $( "<div class='mini-cart-size'></div>" );
					//var attribute		= '<span class="attribute"></span>';
					var header6			= $("<h6></h6>");
					var value 			= '<span class="valueqty">1</span>';
					var label 			= '<span class="label"> x </span>';
					var cartattr		= $("<span class = 'mini-cart-attributes'></span> ");
					var attr1			= $("<span class = 'attribute'></span>");
					var attr1val		= "<span class = 'valuecol'>"+val.color+"</span>";
					var attr2			= $("<span class = 'attribute'></span>");
					var attr2val		= "<span class = 'valuesize'>"+val.size+" W</span>";
					var seperate		= ',';
					//var avalue			= '<span class="value">2 x Army , M W</span>';
					var price			= '<div class="mini-cart-pricing">$998.00</div>';
					var item_details	= '<div class="item-details"><span class="total-items">1 Item</span><span class="items-price">$998.00</span></div><hr>';
					var total			= '<div class="mini-bag-totals"><span class="label">Order Subtotal:</span><span class="value">$998.00</span></div>';
					var header			= '<h2 class="heading-txt">SHOPPING BAG</h2><hr>';
					var button_bag		= '<div class="mini-cartcheckout-button clearfix"><a class="primary-button red viewCart viewBag" href="#" title="Continue Shopping ">Continue Shopping </a></div>';			
					
					$(".mini-cart-totals").empty();
					
					attr1.append(attr1val);
					attr2.append(attr2val);
					cartattr.append(attr1);
					cartattr.append(seperate);
					cartattr.append(attr2);
					header6.append(value);
					header6.append(label);
					header6.append(cartattr);
					miniattr.append(header6);
					$(".mini-cart-totals").append(header);
					$(".mini-cart-totals").append(item_details);
					$(".mini-cart-totals").append(total);
					$(".mini-cart-totals").append(button_bag);
					productDiv.append(nameDiv);
					//miniattr.append(avalue);
					productDiv.append(miniattr);
					productDiv.append(price);
				
					bag_slider.append(imgdiv);
					bag_slider.append(productDiv);
                    $('.mini-bag-wrapper').append(bag_slider);
					
					
					$("html, body").animate({ scrollTop: 0 }, "fast");
					$('#mini-cart-icon-empty').attr('id', 'mini-cart-icon');	
					$('.bag-holder #mini-cart-icon.empty-black-bag').removeClass('empty-black-bag').addClass('empty-red-bag');
					$('.bag-holder #mini-cart-icon.empty-black-bag').removeClass('empty-black-bag').addClass('empty-red-bag');
					$('.bag-holder .empty-bag-count').removeClass('empty-bag-count').addClass('bag-count');
					var bag_count = $(".bag-count").text();
					if(bag_count == '')
					{
						$(".bag-count").html("1");
					}
					else
					{
						var fbc = parseInt(bag_count) + 1;
						$(".bag-count").text(fbc);
					}
					$(".bag-count").css({color: "rgb(208, 2, 27)"});
					$(".mini-bag-content").css({position: "absolute !important"});
					$(".mini-bag-content").slideDown("slow"); 
                });
                //subtotal = subtotal.toFixed(2);
                //$('.mini-cart-subtotals span.value').html('$'+subtotal);
            }
			else
			{
				document.write("Hello");
			}
            
        },
        error:function(){
            $(".mini-bag-content").hide('fast');
        }
        
        
    });

}

//Add product to cart 
$(function(){
	
	$(".add-to-cart-button").click(function(e) {
	
	var sv_value = $("span.selectedVal").text();	
	
	if(sv_value == 'Size')
	{
		e.preventDefault();
		$(".product-tool-tip").css({display:"block"});
		$(".product-tool-tip .msg").text("Please Select Size"); 
		setTimeout(function()
		{ 
			$(".product-tool-tip").hide();
		}, 3000);
		
	}
	
	else
	{
		$(".add-to-cart-button").unbind('click');
		$(".product-tool-tip").css({display:"none"});
		$(".product-bottom-wrap").css({display: "none"});
		$(".customSelectBox").css({display: "none"});
		$("#product-content-detail.feedback-show .feedback-panel").css({display: "block"});
		$("#product-content-detail .feedback-panel").css({display: "block", margintop: "10px",padding: "0 24px 0 24px",position: "relative"});

		$(".pdpForm").submit(function(e){
						
						var color = document.getElementById("color").value;
						var style = document.getElementById("style").value;
						var quan  =	document.getElementById("qty").value;
						var bar   = document.getElementById("barcode").value;
						console.log(bar);
						var url         = $(this).attr("action")+'/ajax/';
						console.log(url);
						var data        = {'color': color,'style': style,'qty':quan,'barcode':bar};
						
						$.ajax({
						  type: "POST",
						  url: url,
						  cache     : false,
						  dataType: 'json',
						  data: data,
						  success: function( data ) {
							if(data){
								// $('#add-to-cart').hide();
								console.log(data);
								if(data == 0 || data == 1)
								{
									load_cart();
								}
								else
								{
									$(".mini-bag-slider").each(function()
									{
										var color_cmp = $("li.selected span.colorname").text();
										var cmp_color = $(this).find('span.valuecol').text();
										var color1 = color_cmp.toLowerCase();
										var color2 = cmp_color.toLowerCase();
										console.log(color1);
										console.log(color2);
										if(color1 == color2)
										{
											$(this).find('span.valueqty').text(data);
										}
									});
									var bag_count = $(".bag-count").text();
									if(bag_count == '')
									{
										$(".bag-count").html("1");
									}
									else
									{
										var fbc = parseInt(bag_count) + 1;
										$(".bag-count").text(fbc);
									}
								}
								
								
								
								//$(".mini-bag-content").css({ position : "absolute", width: "1349px",left: "-1194.73px",top: "50px",overflow: "hidden"});
								// $( "#add-to-cart" ).replaceWith( "<p>New heading</p>" );
			
								//$("#backToTop").trigger('click');
			
							}
							
						}
						});
				e.preventDefault();		
					
			
            
        });
		
	}
	
	//$( ".rows .mini-cart-totals" ).children().last().removeClass("mini-cart-button");
    //$( ".rows .mini-cart-totals" ).children().last().addClass("mini-cartcheckout-button"); 
	//$('.mini-cart-button').removeClass('mini-cart-button').addClass('mini-cartcheckout-button');
	//$( "div.mini-cart-button" ).replaceWith( $( ".mini-cartcheckout-button" ) );
	//$('.bag-holder #mini-cart-icon.empty-black-bag').removeClass('empty-black-bag').addClass('empty-red-bag');
    /*if(isMobile.any()) {
        console.log('mobile');
    }else{*/
	    
    // }
	
	});

});
