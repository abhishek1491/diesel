<?php 
	foreach($prod_arr as $curr_prod) {
						
	$product_name 	=  $curr_prod->disp_name;			
	$ldesc			=  $curr_prod->long_desc;
	$sdesc			=  $curr_prod->short_desc;
	$style			=  $curr_prod->style;
	$avalue			=  $curr_prod->attr_value;
	$acode			=  $curr_prod->attr_code;
	$nameCode		=  $curr_prod->nameCode;
	$washCode		=  $curr_prod->washCode;
	}
	
	/*foreach($prod_attr as $codes)
	{
		if($codes->attr_id == 'nameCode')
		{
			$nc = $codes->attr_value;	
		}
		if($codes->attr_id == 'washCode')
		{
			$wc = $codes->attr_value;	
		}
		
	}*/
	
?>


<script type="text/javascript">
    //<!--
    /* <![CDATA[ */
    if (dw && dw.__ac) {
        dw.__ac.pv({
            id: '8057095991067'
        })
    };
    /* ]]> */
    // -->
</script>



<div id="article-overlay" class="web_dialog_overlay"></div>
<div id="article-dialog" class="web_dialog">
    <p class="article-close">
        <a href="#" class="btnCloseArticle"></a>
    </p>
    <p class="article-close-bottom">
        <a href="#" class="btnCloseArticle"></a>
    </p>
    <div class="article-content "></div>
</div>

<div id="pdpMain" class="pdp-main clearfix ">
    <div class="pdp-main-1 pdp-redesign col-lg-9 col-md-9 col-sm-12 left-pdp-sec" itemscope itemtype="http://schema.org/Product">




        <div class="pdp-main-wrapper">




            <!-- dwMarker="product" dwContentID="bcHWQiaaiMCm6aaade3I35PacK" -->
            <div class="pdp-explore-main">





                <div class="product-image-sec product-image-container zoom-image-container col-lg-7 col-md-12">





                    <div id="pdpThumbnails">
                        <div class="zoom-image">
                            <a class="zoom pdp-controls" id="zoom-hook" href="" data-src="http://shop.diesel.com/on/demandware.store/Sites-DieselUS-Site/default/Link-LoadZoom?viewtype=zoom" data-imageid="https://sits-pod26.demandware.net/dw/image/v2/AAPK_PRD/on/demandware.static/-/Sites-diesel-master-catalog/default/dwb89d839e/images/large/00SESK_00JVL_81E_F.jpg?sw=320&amp;sh=426">
                    Zoom
                </a>
                        </div>
                        <ul id="product-view" class="product-slides">

							<?php 
								for($i = 0;$i<sizeof($prod_image_arr);$i++)
								{
								
							?>
                            <li>
                                <a data-href="<?=base_url().'images/'.$prod_image_arr[$i]->image_path?>" title="<?php echo $product_name;?>">
                                    <img class="primary-image" src="<?=base_url().'images/'.$prod_image_arr[$i]->image_path?>" alt="<?php echo $product_name;?>,<?php echo $avalue;?>" />
                                </a>
                                <div class="selected-overlay">Overlay Background</div>
                            </li>
                            <?php } ?>

                        </ul>
                    </div>
                    <div class="product-slides-wrapper">
                        <div class="product-slides-wrapper-inner">
                            <ul class='my-bag-product-list'>


							<?php 
								for($i = 0;$i<sizeof($prod_image_arr);$i++)
								{
								
							?>
                                <li class="product-view">
                                    <a data-href="<?=base_url().'images/'.$prod_image_arr[$i]->image_path?>" class="product-image main-image cursor-normal" title="<?php echo $product_name;?>">
                                        <img class="primary-image" src="<?=base_url().'images/'.$prod_image_arr[$i]->image_path?>" alt="<?php echo $product_name;?>,<?php echo $avalue;?>" title="<?php echo $product_name;?>,<?php echo $avalue;?>" />
                                    </a>
                                </li>
							<?php } ?>

                            </ul>
                            <div class="zoom-image-sbl">
                                <a class="zoom pdp-controls" id="zoom-hook" href="" data-src="http://shop.diesel.com/on/demandware.store/Sites-DieselUS-Site/default/Link-LoadZoom?viewtype=zoom" data-imageid="https://sits-pod26.demandware.net/dw/image/v2/AAPK_PRD/on/demandware.static/-/Sites-diesel-master-catalog/default/dwb89d839e/images/large/00SESK_00JVL_81E_F.jpg?sw=320&amp;sh=426">
                Zoom
            </a>
                            </div>
                        </div>




                        <div class="pdpslide-control col-lg-6 col-md-4 col-sm-12">
                            <div class="slider-prev1"></div>
                            <div class="slider-next1"></div>
                            <div class="slide-number1"><span class="remaining"></span> / <span class="total"></span>
                            </div>
                        </div>


                    </div>





                </div>
            </div>

        </div>





    </div>
    <!--/pdpMain -->
    <div class="product-col-2  product-detail col-lg-3 col-md-3 styleit-hide featuredin-hide">



        <div id="product-content">





            <h4 class="info-sec-heading">SELECT YOUR SIZE<span class="info-sec-heading-close">close</span></h4>
            <div class="product-content-header">





                <h2 class="product-name" itemprop="name"><?=$product_name?></h2>
                <?php foreach($prod_attr as $row) { if($row->attr_id == 'season' && $row->attr_value != '') { ?>
					<p class="product-id">
						<!-- LEATHER JACKETS /  -->
						<?php echo $row->attr_value; ?>
					</p> 
				<?php } } ?>



                <ul class="product-desc">




				<?php foreach($prod_attr as $row) { if($row->attr_id == 'editorialComposition' && $row->attr_value != '') { ?>
                    <li>
						<span>
							<?php $str1 = $row->attr_value; $arr1 = explode('+',$str1); for($i = 0;$i<sizeof($arr1);$i++) { echo $arr1[$i]; echo "<br>";} ?>
		                </span>
                    </li>
				<?php } } ?>
                
				</ul>
                <div class="product-desc-btn">
                    <a class="middle-text primary-button" href="http://shop.diesel.com/winter-jackets/w-kirton/8057095991067.html">VIEW FULL PRODUCT DETAILS</a>
                </div>


            </div>





            <div id="product-content-detail">





                <div class='product-variations ' data-current="{&quot;color&quot;:{&quot;displayName&quot;:&quot;Color&quot;,&quot;value&quot;:&quot;81E&quot;,&quot;displayValue&quot;:&quot;Blue&quot;},&quot;size&quot;:{&quot;displayName&quot;:&quot;Size&quot;,&quot;value&quot;:&quot;L&quot;,&quot;displayValue&quot;:&quot;L&quot;}}">


                    <ul class="clearfix">





                        <li class="attribute color clearfix" data-variation-type="color">



                            <div class="label">
                                <h5><span>Choose Color (2)</span></h5>
                            </div>



                            <div class="value">

                                <div class="swatch-wrapper" data-sliderwidth="65">
                                    <div class="swatch-Slider">
										<ul class="swatches Color color-slides jcarousel-skin-tango" <?php if($count_color == 1) { ?>style="height: 96px;position: relative;width: 84px;" <?php } ?> <?php if($count_color == 2) { ?>style="height: 96px;position: relative;width: 168px;" <?php } ?> <?php if($count_color == 3) { ?>style="height: 96px;position: relative;width: 252px;" <?php } ?> <?php if($count_color == 4) { ?>style="height: 96px;position: relative;width: 336px;" <?php } ?> >
										<?php for($i = 0; $i < $count_color; $i++) 
										{ 
											if($color[$i]->color == $color_code)
											{
										?>	
											<li class='selected swatch-ele'>
												<?php $img = $color[$i]->color; $imgname = str_replace(' ', '', $img);?>
												<a href="<?php echo base_url();?>product/<?php echo $prod_attr[0]['productMainGroup'];?>/<?php echo $product_name;?>/<?php echo $style;?>/<?php echo $color_code;?>">
													<img class = "<?=$imgname?>" itemprop="image" src="<?=base_url();?>images/<?=$nameCode?>_<?=$washCode?>_<?=$imgname?>_F.jpg?sw=65&amp;sh=87" alt="W-NICK, Green" data-thumb='{"src":"<?=base_url();?>images/00SJT2_0CAKE_51F_F.jpg?sw=30&amp;sh=40","altimg":"<?=base_url();?>images/00SJT2_0CAKE_51F_R.jpg?sw=320&amp;sh=427","alt":"W-NICK, Green","title":"W-NICK, Green"}' />
												</a>
												
												<div title="<?php echo $color[$i]->color; ?>" class="selected-color-overlay">
													<h5><span class="colorname"><?php echo $color[$i]->microcolor; ?></span></h5>
												</div>
												
										
											</li>
										<?php } else { ?>
											<li class='emptyswatch swatch-ele'>
												<?php $img = $color[$i]->color; $imgname = str_replace(' ', '', $img);?>
													<img class = "<?=$imgname?>" itemprop="image" src="<?=base_url();?>images/<?=$nameCode?>_<?=$washCode?>_<?=$imgname?>_F.jpg?sw=65&amp;sh=87" alt="W-NICK, Green" data-thumb='{"src":"<?=base_url();?>images/00SJT2_0CAKE_51F_F.jpg?sw=30&amp;sh=40","altimg":"<?=base_url();?>images/00SJT2_0CAKE_51F_R.jpg?sw=320&amp;sh=427","alt":"W-NICK, Green","title":"W-NICK, Green"}' />

												
												<div title="<?php echo $color[$i]->color; ?>" class="selected-color-overlay">
													<h5><span class="colorname"><?php echo $color[$i]->microcolor; ?></span></h5>
												</div>
												
												
											</li>
										<?php } } ?>
										</ul>
									</div>
                                </div>
								
							<script type="text/javascript">
				
				
								$("li.selected.swatch-ele > img").hover(function(){
									$(this).css({cursor:"pointer"});
								}); 
								$("li.emptyswatch.swatch-ele").hover(function(){
									$(this).css({cursor:"pointer"});
								});
								
								
								$("ul.color-slides").on("click",'li > img',function()
								{
									var overlay = jQuery('<div class="bx-loading" style="visibility:visible;"></div>');
									overlay.appendTo(document.body);
									//$(this).each(function(){
										//var classname = $(this).parent().attr("class");
										//console.log(classname);
										//if(classname == 'emptyswatch')
										//{
											//console.log("hello");
											var unsel = $('li.selected').removeClass("selected").addClass("emptyswatch");
											var nsel = $(this).parent().removeClass("emptyswatch").addClass("selected");
											//console.log(unsel);
											//console.log(nsel);
										//}	
									//});
									//$("ul.product-slides-list1").empty();
									var prod_slides = $("ul.product-slides-list1");
									
									var color = $(this).attr("class");
									document.getElementById('color').setAttribute('value', color);
									var style = "<?=$style?>";
									var size  = $(".selectedVal").text();
									var data = {'color': color,'style': style};
									
									$.ajax({
										url     : '<?=base_url()?>Product/get_images',
										data: data,
										dataType:'json',
										success:function(result){
											//alert("success");
												if(result.length > 0)
												{
													var i = 0;
													var j = result.length;
													
													var i = 0;
													$("ul.product-slides").html('');
													$("ul.product-slides-list1").html('');
													
													$.each(result, function(key, val){	
														
														var img_div = "<li id='product-thumbview-"+i+"' style='float: none; list-style: none; position: relative; width: 41px;'><a data-href='<?=base_url();?>' class='product-image main-image' title='<?php echo $product_name;?>'><img class='primary-image' src='<?=base_url().'images/'?>"+val.image_path+"' alt='<?php echo $product_name;?>,<?php echo $avalue;?>' title='<?php echo $product_name;?>,<?php echo $avalue;?>' /></a></li>";
														$("ul.product-slides").append(img_div);
														
														var prod_thumb = "<li id='product-thumbview-"+i+"' style='float: none; list-style: none; position: relative; width: 450px; visibility: visible;'><a data-href='<?=base_url();?>' class='product-image main-image' title='<?php echo $product_name;?>'><img class='primary-image' src='<?=base_url().'images/'?>"+val.image_path+"' alt='<?php echo $product_name;?>,<?php echo $avalue;?>' title='<?php echo $product_name;?>,<?php echo $avalue;?>' /></a></li>";
														$("ul.product-slides-list1").append(prod_thumb);
														
														i++;
														
													
													});	
												}	
											}		
										});
									
									//console.log(size);
									if(size == 'Size')
									{
										console.log("this is to get list of sizes");
										var all = {'color': color,'style': style};
										var url = '<?=base_url()?>Product/prod_var';
										
										$.ajax({
										url     : url,
										data: all,
										dataType:'json',
										success:function(result){
											//alert("success");
											//console.log(result);
												if(result.length > 0)
												{
													$('.swatches.swatch-variation.size').empty();
													$.each(result, function(key, val){	
														//$('.customSelectBoxScroll .viewport').attr('style','height:150px;overflow : hidden');
														
														var size = '<li class="emptyswatch"><a href="" class="swatchanchor">'+val.size+'</a></li>';
														$('.swatches.swatch-variation.size').append(size);
														
												
													});	
												}	
											}		
										});
										
									}
									else
									{
										console.log("this is to get barcode");
										var all = {'color': color,'style': style,'size':size};
										var url = '<?=base_url()?>Product/get_bar';
										
										$.ajax({
										url     : url,
										data: all,
										dataType:'json',
										success:function(result){
											//alert("success");
											//console.log(result);
												if(result.length > 0)
												{
													$.each(result, function(key, val){
														
														document.getElementById('code').setAttribute('value', val.barcode);
														
													});
												}	
											}		
										});
										
									}
									//console.log(all);
									$("#overlay").remove();
								});
								
								
							</script>

                            </div>
                        </li>





                        <li class="size-info">





                        </li>
                        <li class="attribute size clearfix" data-variation-type="size">

                            <div class="value">

                                <div class="customSelectBox">
                                    <h5><span class="selectedVal"> <?php if(isset($prod_data[0]['size'])) { echo $prod_data[0]['size']; } else { ?>Size <?php } ?></span></h5>
                                    <span class="arrows"></span>
                                    <div class="customSelectBoxScroll">
                                        <div class="viewport">
                                            <div class="overview">
                                                <ul class="swatches swatch-variation size" id="sizes">
																
													<?php 
														$i = 0;
														foreach($size as $row1)
														{
															/*echo '<li class="emptyswatch">';
															echo '<a title="'.$row1->size.'" class="swatchanchor" href=""'.base_url().'"product-variation.html?pid="'.$prod_arr[0]->style.'"&amp;dwvar_"'.$prod_arr[0]->style.'"_color="'.$prod_arr[0]->attr_code.'"&amp;dwvar_"'.$prod_arr[0]->style.'"_size="'.$row1->size.'"" data-productdetailsurl=""'.base_url().'"product-variation.html?pid="'.$prod_arr[0]->style.'"&amp;dwvar_"'.$prod_arr[0]->style.'"_color="'.$prod_arr[0]->attr_code.'"&amp;dwvar_"'.$prod_arr[0]->style.'"_size="'.$row1->size.'"">';
															echo $row1->size;
															echo '</a>';
															echo '</li>';*/
															$size = $row1->size;
															$lsize = ltrim($size); 
															$fsize = rtrim($lsize);
															
															if($i == 0)
															{
															if($prod_data[0]['size'] != '')
															{
														?>
														<li class="emptyswatch is-active">
															<a class="swatchanchor" href="">
																<?php echo $prod_data[0]['size']; ?>
															</a>
														</li>
													<?php	
														}
														}
														else
														{
													?>
													<li class="emptyswatch">
														<a class="swatchanchor" href="">
															<?php echo $fsize; ?>
														</a>
													</li>
													<?php	
														}
														$i++;
														}
													?>
												

												</ul>
                                            </div>
                                        </div>
										
										<script type="text/javascript">
															
											//var $bdy=$(document.body);
											
											$("ul.swatch-variation").on('click','a.swatchanchor',function(e){
												e.stopPropagation();
												
												var overlay = jQuery('<div class="bx-loading"></div>');
												overlay.appendTo(document.body);
												$("li.emptyswatch.is-active").removeClass("is-active");
												$(this).parent().addClass("is-active");
												
												var sv = $(this).text();
												$("span.selectedVal").text(sv);
												
												//document.write("hello");
												// check if width is selected or not
												var size1 = $("span.selectedVal").text();
												
												var color = $("ul.color-slides li.selected > img").attr("class");
												var style = "<?=$style?>";
												console.log(color);
												$.ajax({
												url     : '<?=base_url()?>Product/get_bar',
												data: {'color': color,'style': style,'size':size1},
												dataType:'json',
												success:function(result){
													//alert("success");
													console.log(result);
														if(result.length > 0)
														{
															//$('.customSelectBoxScroll .viewport').attr('style','height:150px;overflow : hidden');
															
															$.each(result, function(key, val){
																
																document.getElementById('code').setAttribute('value', val.barcode);
																
															});
													
															/*$('.swatches.swatch-variation.size').empty();
															$.each(result, function(key, val){	
																//$('.customSelectBoxScroll .viewport').attr('style','height:150px;overflow : hidden');
																
																var size = '<li class="emptyswatch"><a href="" class="swatchanchor">'+val.size+'</a></li>';
																$('.swatches.swatch-variation.size').append(size);
																
															 });*/
														}	
													}		
												});
												
												var size = $("li.emptyswatch.is-active a.swatchanchor").text();
												document.getElementById('size_value').setAttribute('value', size);
												e.preventDefault();
												$("#overlay").remove();
												
											});
											
										/*$(function(){
											
											$("ul.swatch-variation li").click(function() {
											document.write("hello");
											// check if width is selected or not
											var size = $(this).text();
											var color = $("ul.color-slides li.selected span.colorname").text();
											var style = "<?=$style?>";
											
											$.ajax({
											url     : '<?=base_url()?>Product/prod_var',
											data: {'color': color,'style': style,'size':size},
											dataType:'json',
											success:function(result){
												//alert("success");
												//console.log(result);
													if(result.length > 0)
													{
														console.log(result);
														return false;
														$('.swatches.swatch-variation.size').empty();
														$.each(result, function(key, val){	
															//$('.customSelectBoxScroll .viewport').attr('style','height:150px;overflow : hidden');
															
															var size = '<li class="emptyswatch"><a href="" class="swatchanchor">'+val.size+'</a></li>';
															$('.swatches.swatch-variation.size').append(size);
															
														 });
													}	
												}		
											});*/
											/*document.getElementById("errorattr").style.display = "none";
											var overlay = jQuery('<div id="overlay"> </div>');
											overlay.appendTo(document.body);

											var width_value = $( "#va-width" ).val();
											//console.log("width value" + width_value);
											width_value 	= (width_value !== '')? width_value:'';

											var size_value = $(this).val();
											
													$( "select#va-size option:selected" ).each(function() {
												
													  var size 		= $(this).val();
													  var style 	= $('input[name=prd_style]').val();
													  var width_name= (width_value !== '') ? $("#va-width option[value="+ width_value +"]").text() : '';
													  width_name 	= (width_name !== 'Select Width')? width_name:'';

													  // console.log("width name: " + width_name);
													  // return;
													  
													  if(size != ''){
														var url = "<? echo site_url('product/ajax_width').'/'.$gender.'/'.$prod_name.'/'.$product_style.'_'.$product_color.'/'; ?>" +size+ "/" +width_name;
													  }else{
														var url = "<? echo site_url('product/ajax_width').'/'.$gender.'/'.$prod_name.'/'.$product_style.'_'.$product_color.'/'; ?>"+ "no-size/" +width_name;
													  }

														$.ajax({
															url 	: url,
															dataType:'json',
															success:function(result){
																// console.log(result);
																var colorcode_arr = result.color_code;
																$('.swatches li').each(function(){
																	$(this).removeClass('unselectable');
																	$(this).find('a').attr('href','');
																});
																//console.log('color code', result.color_code);
																if (!(colorcode_arr.length < 1)){
																	// array is not empty
																	// check for list element have color code														    
																	
																		$('.swatches li').each(function(){
																			var curr_code = $(this).find('a').attr('title');
																			if(jQuery.inArray(curr_code, colorcode_arr) === -1){
																				$(this).addClass('unselectable');
																				$(this).find('a').removeAttr('href');
																			}
																		}); 
																   

																}


																$("#va-width").removeAttr('disabled');
																$("#va-width").html(result.options);
																//$("#va-width").show();
																//alert($('#va-width').find('option[text="'+width_name+'"]').val());
																//console.log($('#va-width option:contains('+width_name+')'));
																//console.log("width name: " + width_name);

																if(width_name !== ''){
																	//console.log("width name in if: " + width_name);
																	$('input[name=prd_barcode]').val($('#va-width option[data-width-name='+width_name+']').val());
																	$('#va-width option[data-width-name='+width_name+']').attr('selected','selected');
																}

																$('input[name=prd_barcode]').val($('#va-width option:contains('+width_name+')').val());
																$('#va-width option:contains('+width_name+')').attr('selected','selected');
																$("#overlay").remove();
															},
															error:function(){
																$("#va-width").hide();
															}
															
															
														});

													});
											//} // end of if 

												
			
											});
										});*/
										</script>
										
                                        <div class="scrollbar">
                                            <div class="track">
                                                <div class="thumb">
                                                    <div class="end"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </li>


                    </ul>
                </div>


                <div class="product-add-to-cart">
                    <div class="product-bottom-wrap">
                        <div class="product-add-cart">
                            <div class="product-tool-tip">
                                <span class="arrow"></span>
                                <div class="msg"></div>
                            </div>
                            <form action="<?php echo base_url();?>Cart/update_product" method="post" id="dwfrm_product_addtocart_d0mpgddihyjx" class="pdpForm">
                                <fieldset>





                                    <div class="availability-msg">


                                    </div>



                                    <script type="text/javascript">
                                        window.google_trackConversion({
                                            google_conversion_id: 984403838,
                                            google_custom_params: {
                                                'ecomm_pageType': 'product',
                                                'ecomm_prodid': '8057095991067',
                                                'ecomm_totalvalue': 278.6,
                                            },
                                            google_remarketing_only: true
                                        });
                                    </script>


                                    <input type="hidden" name="color" id="color" value="<?=$acode?>" />
									<input type="hidden" name="style" id="style" value="<?=$style?>" />
									<input type="hidden" name="qty" id="qty" value="1" />
									<input type="hidden" name="code" id="code" value="" />
									<input type="hidden" name="size_value" id="size_value" value="" />
									<input type="hidden" name="barcode_check" id="barcode_check" value="<?php echo $prod_data[0]['code'];?>" />

                                    <div id="pdp-actions" class="pdp-actions">
                                        <h3><button id="add-to-cart" type="submit" value="Update"  class="btn-oswald red  add-to-cart-botton">Update</button>
	                        	
	                        </h3>

                                        <a class='mobile-wishlist-button' title="Add to Wishlist">Add to Wishlist</a>

                                    </div>




                                </fieldset>
                            </form>
                        </div>

					<script type = "text/javascript">
						$(".add-to-cart-button").click(function(e) {
							e.stopPropagation();
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
							
							
							e.preventDefault();
						});	
					</script>


                    </div>
                    <div class='feedback-panel product-id-8057095991067'>
                        <span class="close-icon-b"></span>
                        <h3>1 item added to bag</h3>
                        <h4><a href="https://shop.diesel.com/cart" class="goto-mybag" title="Go to My Bag">Go to My Bag</a></h4>
                        <h4 class="button_1"><a class="continue_shopping" title="Continue Shopping ">Continue Shopping </a></h4>
                    </div>

                    <div class="pdp-share-link clearfix">



                        <a class='favorite color col-md-4 col-lg-6 wl-action ' title="Add to Wishlist" href="https://shop.diesel.com/wishlist-add?pid=8057095991067&amp;source=productdetail"><span class="fav-link pdp-sprite-icon">Add to Wishlist</span></a>


                        <a class="social-media-link col-md-4 col-lg-6 share color" id="social-media-bottom" title="Share" href=""><span class="share-link pdp-sprite-icon">Share</span></a>


                    </div>
                    <div class="social-media-dialog share-media-bottom hide ">
                        <div class="social-media">
                            <div class="ui-popup-close">
                                <span class="sprite-icon popup-close">Closeclose</span>
                            </div>
                            <div class="share-icon">
                                <div class=" addthis_toolbox addthis_default_style addthis_32x32_style" addthis:url="http://shop.diesel.com/winter-jackets/w-kirton/8057095991067.html" id="global-popup">


                                    <div class="share-icon">
                                        <div class="addthis_toolbox addthis_default_style addthis_32x32_style">
                                            <a class="addthis_button_preferred_1"></a>
                                            <a class="addthis_button_preferred_2"></a>
                                            <a class="addthis_button_preferred_3"></a>
                                            <a class="addthis_button_preferred_4"></a>
                                            <a class="addthis_button_compact"></a>
                                            <a class="addthis_counter addthis_bubble_style"></a>
                                        </div>
                                    </div>

                                    <script type="text/javascript">
                                        var addthis_config = {
                                            "data_track_addressbar": false
                                        };
                                    </script>

                                    <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=" +addThisID></script>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>





            </div>

            <script>
                var elms = jQuery('#product-content-detail ul.product-description-list').find('li');
                elms.each(function() {
                    if (jQuery.trim($(this).html()) == '') $(this).remove();
                });
            </script>
        </div>

        <div class="mobile-strip-product">

            <div class="info-icon-link col-sm-2 info-btn"><span>+INFO</span>
            </div>
            <div class="col-sm-3 icon-link color-btn">
                <h5>Color (2)</h6></div>
		
		<div class="col-sm-3 icon-link price-btn have-cut-price">
		





	













		














	
	<div class="product-price discounted">
			
			
				<span class="price-standard">$398.00</span>
			
			
			
			<span class='price-sales discounted'>
			
				-30.00%</span><span class="price-final-value">
			
			$278.60</span>
					
		
		 
	
	

	</div>
	



		
		</div>
		
		
		<div class="col-sm-4 icon-link add-btn"><h3>Add</h3></div>
		
		
		 
		
	</div>
	</div>
	 
	
	
	</div>



	<script type="text/javascript">
		if (typeof sr_refreshSRDOM == 'function') {
			sr_refreshSRDOM();
		}
	</script>





















	
		
	
	














	<div id="igdRTA-quickview" data-rtaproductsku="00SESK00JVL" data-rtaSpecial="" data-rtaTags=""></div>





<script type="text/javascript">
jQuery(document).ready(function(e){
	   $(".close-button").click(function(e){
		   e.preventDefault();
			app.dialog.close();
	   });
	 });
</script>