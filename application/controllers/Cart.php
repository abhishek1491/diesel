<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Cart extends CI_Controller {

	private $data;

	public function __construct()
	{
		parent::__construct();
		$this->load->library('cart');
		$this->load->model("Cart_model");
		$this->load->model("product_model");
		//$this->load->library('user_agent');

		//$this->load->model("product_model");
		
		//$this->data['page_info'] = $this->product_model->get_page_info();
	}

	public function index()
	{	
		
		redirect('Cart/show_cart');

	}


	public function addCart($arg)
	{
		//retrieve all the post data.
		
		$color 		= $arg['prd_color'];
		$style 		= $arg['prd_style'];
		$prod_qty 	= $arg['Quantity'];
		$barcode 	= $arg['prd_barcode'];
		$cart_id 	= (!empty($arg['cart_id']))? $arg['cart_id']:'';
		

		// check if the products exists in database

		$prod 		= $this->cart_model->check_product($color, $barcode, $prod_qty, $style, $cart_id);

		if($prod){
			return true;
		}else{
			return false;
		}

	} // end of add method


	public function add($type = '')
	{
		
		//retrieve all the post data.
		$color 		= $this->input->post('color');
		$style 		= $this->input->post('style');
		$prod_qty 	= $this->input->post('qty');
		$barcode 	= $this->input->post('barcode');
		$cart_id 	= $this->input->post('cart_id');
		
		if(!$this->session->userdata('s_uid') || $this->session->userdata('s_uid')==''){
			$user_type = 'Guest';
			$user_id   = $this->session->userdata('__ci_last_regenerate');
			
		}else{
			$user_type = 'Member';
			$user_id = $this->session->userdata('s_uid');
		}
		
		$prod 		= $this->Cart_model->check_product($color, $barcode, $prod_qty, $style, $cart_id, $user_id, $user_type);
		
		if(!empty($prod))
		{
			
			$updates = true;
			
		}
		
		else
		{
			$updates = false;
		}

		if(!empty($type) && $type == 'ajax')
		{
			echo $updates;
		}
		
		else
		{
			//echo 'inside redirect cart';exit;
			redirect('cart');
		}

	 // end of add method
	
	}	
	
	
	/**
 * show the cart page with the product present in the cart array
 * param: none
 * return: none
 */

	public function ajax_cart()
	{
		
		ini_set('max_execution_time', 3600);

		header('Content-Type: application/json');
		
		if(!$this->session->userdata('s_uid') || $this->session->userdata('s_uid')==''){
			$user_type = 'Guest';
			$user_id   = $this->session->userdata('__ci_last_regenerate');
			
		}else{
			$user_type = 'Member';
			$user_id = $this->session->userdata('s_uid');
		}
		
		//$this->data['title']="Cart Page";
		//$this->data['main_content'] = 'ajax_cart_view';
		//$barcode 	= $this->input->post('barcode');

		$carts = $this->Cart_model->show_cart($user_id);
		
		echo json_encode($carts);
		
	} // end of show cart method

	function show_cart(){

		$cart_arr = array();
	  	if(!$this->session->userdata('s_uid') || $this->session->userdata('s_uid')==''){
			$user_type = 'Guest';
			$user_id   = $this->session->userdata('__ci_last_regenerate');
			
		}else{
			$user_type = 'Member';
			$user_id = $this->session->userdata('s_uid');
		}
		
		$cart = $this->Cart_model->get_cart_items($user_id);
		
		//$style = $cart[0]['product_id'];
		//$color = $cart[0]['color'];	
		
		$i = 0;
		
		if(isset($cart))
		{
			foreach($cart as $row)
			{
		
				$image_path = $this->Cart_model->get_prod_images($row['product_id'],$row['color']);
				$microcolor = $this->Cart_model->get_color($row['product_id'],$row['code']);
			
				$cart_all[$i] = array(
				
					'code'				=>$row['code'],
					'prod_type'			=>$row['prod_type'],
					'prod_name'			=>$row['prod_name'],
					'color'				=>$row['color'],
					'size'				=>$row['size'],
					'qty'				=>$row['qty'],
					'original_price'	=>$row['original_price'],
					'product_id'		=>$row['product_id'],
					'image_pathname'	=>$image_path,	
					'mc'				=>$microcolor,
					'cart_id'			=>$row['cart_id']
				);
				$i++;
			};	
			
		}
		
		else
		{
			$cart_all = '';
		}
		
		
		/*if(!empty($cart)):
			$cart_arr = $cart;
			$get_promo_code = $this->cart_model->get_promo_code($user_id);
			
			if(!empty($get_promo_code)){
				array_push($cart_arr,$get_promo_code);
			}
		
			$data = $this->get_showcart_details($cart_arr,$user_id,$user_type);
			
		else:
			$data = '';
		endif;
		*/
		$view_file_name = 'cart_view';
        $data['currPage']="cart-page";
		$data['cart_data']=$cart_all;
		$data['count'] = sizeof($data['cart_data']);	
		$data['view_file_name'] = $view_file_name;
		$this->template->load_cart_view($view_file_name , $data);

	}
	
	public function get_showcart_details($cart,$user_id,$user_type){
		if(!empty($cart)){

			$data = $this->cart_api($cart,$user_id);
			
			if(!empty($data)){
				//echo "When connect to API";
				$cart_total = $data['cart_total'];

				if($cart_total <= 100):
	               $freight_charges = FREIGHT_CHARGES;
	            else:
	                $freight_charges = 0;
	            endif;

				$cart_mast_arr = array(
					'cart_total' => $cart_total,
					'freight_charges' => $freight_charges
				);

				//Insert or update cart_mast
				$insert_total = $this->cart_model->insert_cart_total($user_id,$cart_mast_arr);

				$cart_details = $data['cart_detail'];
				if(!empty($cart_details)){
			        foreach ($cart_details as $item):
			        	if(!empty($item['Price']) && $item['Price']!= 0){
				        	$data = array(
				        			'user_id'       => $user_id,
									'user_type'     => $user_type,
				        			'cart_id'       => $item['cart_id'],	
									'product_id'    => $item['ProductId'],
									'code' 			=> $item['ProductCode'],
					                'qty'     		=> $item['Quantity'],
					                'sku' 			=> $item['SkuId'],
									'size'			=> $item['SizeCode'],
									'unit_price'	=> $item['Price'],
									'price_sale'	=>'',
									'discount_price'=> $item['Value'],
									'original_price'=> $item['original_price'],
									'prod_type'     => $item['prod_type'], 
									'prod_name'     => $item['ProductName'],
			                        'color_code'    => $item['ColourCode'],
			                        //'color'         => $item['ColourCode']
			                        'operation'	=> 'update'
					        );
				        	//Update value from xml into cart_detail
				            $returnVal = $this->cart_model->insert_into_cart_details($data);
			            }else{
			            	$data['url'] = base_url().'sale/';
			            }  
			        endforeach;
			    }//if(!empty($cart_details)):
			
				$cart_mast =$this->cart_model->get_cart_total($user_id);

				$data['cart_total'] = $cart_total;
			}else{
				//When API call not get connected directaly call from table
				//echo "When does not connect to API";
				$cart_mast = $this->cart_model->get_cart_total($user_id);
				if (!empty($cart_mast)) {
					$data['cart_total'] = $cart_mast['cart_total'];
				} else {
					$data['cart_total'] = 0;
				}
			}
			$get_gift_data = $this->cart_model->getgiftvoucher($user_id);
			$gift_discount = $get_gift_data['gift_discount'];
			$gift_id = $get_gift_data['gift_id'];
			$pin = $get_gift_data['pin'];
			$cart_total = (float)$data['cart_total'];
			
			if(!empty($cart_mast)){
				if($cart_total == 0){
		            $data['subtotal']  = "n/a";
		            $data['ship_chrg'] = "n/a";
		            $data['gst_chrg'] = "n/a";
		            $data['nettotal'] = "n/a";
		        }else{
		         	$data['subtotal']  = number_format($cart_total,2);
		            $data['ship_chrg'] = number_format($cart_mast['freight_charges'],2);
		            $data['gst_chrg'] = number_format($cart_mast['cart_total']/11,2);
		            if(!empty($gift_discount) && $gift_discount != 0){
		            	$gv_valid   = $this->cart_model->check_gv_valid($gift_id,$pin,$user_id,$cart_total);
		            	//$get_gift_data = $this->cart_model->getgiftvoucher($user_id);
	            		$data['gift_voucher_number']=$get_gift_data['gift_id'];
	            		$data['gift_voucher_pin']=$get_gift_data['pin'];
		            	$data['nettotal'] = number_format($get_gift_data['gift_cart_total']+$cart_mast['freight_charges'],2);
	            		$data['gift_discount']=number_format($get_gift_data['gift_discount'],2);
		            }else{

		            	$data['nettotal'] = number_format($cart_total+$cart_mast['freight_charges'],2);
		            }
		            
		         }
	        }else{
	        	$data['subtotal']  = "n/a";
	            $data['ship_chrg'] = "n/a";
	            $data['gst_chrg'] = "n/a";
	            $data['nettotal'] = "n/a";
	        }

	        $get_promo_code = $this->cart_model->get_promo_code($user_id);
	        if(!empty($get_promo_code)):
	        	$data['promo_code'] = $get_promo_code['promo_code'];
	        	$data['promotion'] = $get_promo_code['promotion'];
	        	$data['school'] = $get_promo_code['school_name'];
	        endif;

			$data['cart'] = $cart;
			$data['cart_detail']	= $this->cart_model->get_cart_items($user_id);
			
			}else{//if(!empty($cart)):
				$data = '';
			}
			

			foreach($data['cart_detail'] as $curr_prod):
				if($curr_prod['price_sale'] != 0 && $curr_prod['price_sale'] != $curr_prod['unit_price']){
					$data['url'][$curr_prod['code']] = base_url().'sale/';
	 			}else{

	 				// url functionality
					$level_result = $this->product_model->get_levels($curr_prod['code']);
			        $prod_result = $this->product_model->get_prod_name_url($curr_prod['code']);
			        $curr_color_code = (!empty($curr_prod['color']) ? $curr_prod['color'] : '');

			        if($level_result){
			          extract($level_result);  
			        }else{
			           $level_1 = '';
			           $level_2 = '';
			           $level_3 = ''; 
			           $level_4 = ''; 
			        }
	 				$data['url'][$curr_prod['code']] = strtolower($this->get_url($level_2,$level_3, $level_4,$prod_result['prod_name_url'],$curr_prod['code'],$curr_color_code,$curr_prod['prod_type']));
	 			}
				
			endforeach;
			/*echo "<pre>";
			print_r($data);exit;*/
			return $data;
	}
	
	
	public function cart_api($cart,$user_id){
		$data='';
		
		if(!empty($cart)){
			
			$cart_xml="<Cart>
						<PersonId>115414</PersonId>
						<Contacts>
						</Contacts>
							<CartDetails>\n\t";
							foreach ($cart as $item) {
								$sku        = $item['sku'];
					            $qty        = $item['qty'];
								$cart_xml.="<CartDetail>		
											<SkuId>$sku</SkuId>
											<Quantity>$qty</Quantity>
											</CartDetail>\n\t";
							}
			$cart_xml.="</CartDetails>
						</Cart>";
			$data['cart_xml']=$cart_xml;
			

			$URL = /*APP21_URL.*/ "localhost:8080/Carts/1234?countryCode=AU"/*.COUNTRY_CODE*/;
			//echo"<br><b> XML Request :</b> <br><span style='line-height:30px;'>URL :$URL </span><br><textarea rows='10' cols='60' style='text-align: left;line-height:100%;'>".$cart_xml."</textarea><br><br>";
			//echo $URL;exit;
			$result = $cart_xml;
			
			$ch = curl_init($URL);
		    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
		    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
			curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");
			curl_setopt($ch, CURLOPT_HEADER, false);
		    curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: text/xml,Accept: version_2.0'));
		    curl_setopt($ch, CURLOPT_POSTFIELDS, "$cart_xml");
		    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		    curl_setopt($ch, CURLOPT_HEADER, 0);
		    $output = curl_exec($ch);
		    curl_close($ch);
			//echo"<br><b> XML Response :</b><br><textarea rows='30' cols='100' style='text-align: left;line-height:100%;'>".$output."</textarea><br><br>";
			//exit;
			$xml = simplexml_load_string($output); 
			
			echo "<pre>";
			print_r($xml);exit;
			$cartdetail_arr=array();
			if(!empty($xml) && !isset($xml->ErrorCode)){
				
				$data['cart_total'] = $xml->TotalDue;

				foreach ($xml->CartDetails->CartDetail as $curr_detail) {

	   				$temp = (array) $curr_detail;
				    $style = $curr_detail->ProductCode;
				    $sku_id = $curr_detail->SkuId;
				    if(!empty($curr_detail->Price)){
					    $result = $this->cart_model->get_prod_type($style,$user_id);
					    $temp['prod_type']= $result->prod_type;
					    $temp['cart_id']= $result->cart_id;
					    $temp['original_price']= $result->original_price;
					    /*$school_name = $this->cart_model->get_school($style,$sku_id);
					    if (!empty($school_name)) {
					    	$temp['school_name'] = $school_name;
					    }*/
					    
					   
					}
				    $cartdetail_arr[] = $temp;
				}
			}
				
				$data['cart_detail']= $cartdetail_arr;
				/*echo "<pre>";
				print_r($data['cart_detail']);
				exit;*/
		}
		return $data;
	}
	
	
	public function show_product($prod_type="",$prod_name="", $barcode="")
	{
		
		if(!$this->session->userdata('s_uid') || $this->session->userdata('s_uid')==''){
			$user_type = 'Guest';
			$user_id   = $this->session->userdata('__ci_last_regenerate');
			
		}else{
			$user_type = 'Member';
			$user_id = $this->session->userdata('s_uid');
		}
		
		$prod_data = $this->Cart_model->get_cart_items($user_id,$prod_name,$barcode);
		
		$this->data['prod_type'] = $prod_type;
		$this->data['prod_name'] = $prod_name;
		$this->data['barcode'] = $barcode;
		$prod_id = $prod_data[0]['product_id'];
		$color_code = $prod_data[0]['color'];
		$this->data['color_code'] = $color_code;
		$this->data['prod_data'] = $prod_data;
		$this->data['gender'] = 'M';
		$this->data['prod_arr'] = $this->product_model->get_product_detail($prod_id);
		$this->data['size'] 	= $this->product_model->get_size($prod_id, $color_code);
		$this->data['prod_image_arr'] = $this->product_model->get_prod_images($prod_id,$color_code);
		$this->data['prod_attr'] = $this->product_model->get_prod_attributes($prod_id);
		$this->data['color'] = $this->product_model->get_color($prod_id);
		$count = sizeof($this->data['color']);
		$this->data['count_color'] = $count;
		$view_file_name = 'quickview_product';
		$this->data['view_file_name'] = $view_file_name;
		$this->load->view('quickview_product',$this->data);
		/*$this->data['page_info'] = $this->product_model->get_page_info();

		$this->data['prod_type'] = $prod_type;
		$this->data['prod_name'] = $prod_name;
		$prod = explode("_", $prod_code);
		$prod_id = $prod[0];
		$color_code = $prod[1];

		$this->data['gender'] = $gender;

		$this->load->library('Synkproduct');
    	$this->synkproduct->sync_ap21_product($prod_id,$color_code,$gender);
    	//After synnk with Ap21 call product detail
    	$this->data['prod_arr'] = $this->product_model->get_product_detail($prod_id,$color_code,$gender);

    	if(empty($this->data['prod_arr'])){
			redirect('errorpage');
			exit;
		}else{
			foreach($this->data['prod_arr'] as $curr_prod){
				$sku = $curr_prod->sku;
				$cat = $curr_prod->tag;
			}
			
			$this->data['related_prod_arr'] = $this->product_model->get_related_products($prod_id,$color_code,$sku="");
			$this->data['cart_id'] 			= $cart_id;
			$this->data['type'] 			= "Edit Cart";
			$this->data['qty'] 				= (!empty($qty))? $qty:'1';
			$this->data['sel_size'] 		= (!empty($sel_size))? $sel_size:0;
			$this->data['barcode'] 			= (!empty($barcode))? $barcode:0;

			$this->data['view_detail'] 		= base_url().$prod_type.'/'.$gender.'/'.$prod_name.'/'.$prod_code.'/';
			$this->data['size'] 			= $this->product_model->get_size($prod_id, $color_code);
			$this->data['width'] 			= $this->product_model->get_width($prod_id,$color_code,$gender);
			$this->data['specs'] 			= $this->product_model->get_specs($prod_id);
			$this->data['swatches'] 		= $this->product_model->get_swatches($prod_id);
			
			$this->load->view('quickview_product',$this->data);
		}		
	}//End of show_product
	
	*/
	}
	public function update_quantity()
	{
		$style = $_GET['style'];
		$barcode = $_GET['barcode'];
		$quantity = $_GET['quantity'];
		
		$item_update = $this->Cart_model->update_qty($style,$barcode,$quantity);
		
		$return_div = '<div class="product-details-template row" data-enableCheckout="false">
  <div class=" item-quantity col-sm-6 col-md-4 equal-width-two">
    <h3 class="section-header">Quantity</h3> <span class="decrease-quantity icons" data-product-name="W-KIRTON"></span>
    <input type="text" name="dwfrm_cart_shipments_i0_items_i0_quantity" size="2" maxlength="2" value="'.$item_update[0]->qty.'" class="input-text" disabled/> 
	<input type="hidden" name="barcode" id="barcode" value="'.$barcode.'" />
	<input type="hidden" name="style" id="style" value="'.$style.'" />
	<span href="" class="increase-quantity icons" data-product-name="W-KIRTON"></span> </div>
  <div class="item-price col-sm-6 col-md-4 equal-width-four">
    <h3 class="section-header">Price</h3>
    <div class="price-promotion">
      <p class="price-standard">$398.00</p>
      <p class="price-sales">$278.60</p>
    </div>
  </div>
  <div class="item-total col-sm-12 col-md-4 equal-width-four-sec">
    <h3 class="section-header">Total Price</h3>
    <p class="price-total">$557.20</p>
  </div>
</div>
<div class="order-totals-table">
  <div class="order-subtotal"> <span class="label">Order Subtotal</span> <span class="value">$557.20</span> </div>
  <div class="order-shipping"> <span class="label">
						<!-- Display Shipping Method -->
						
					   
						
							  Shipping
						
					</span> <span class="value">
						
							N/A
						
					</span> </div>
  <div class="order-sales-tax"> <span class="label">Sales Tax</span> <span class="value">
					
						N/A
					
				</span> </div>
  <div class="cart-secondary cart-coupon-code"> <span class="promotional-code">Have a promotional code?</span>
    <form class="cart-coupon hidden" action="https://shop.diesel.com/cart?dwcont=C841647051" method="post" name="dwfrm_cart_d0tviwqhjaom" id="apply-coupon">
      <fieldset>
        <label for="dwfrm_cart_couponCode"> Enter Coupon Code </label>
        <input type="text" class="coupon-code" name="dwfrm_cart_couponCode" id="dwfrm_cart_couponCode" />
        <button type="submit" value="dwfrm_cart_addCoupon" name="dwfrm_cart_addCoupon" id="add-coupon"> Apply </button>
      </fieldset>
    </form>
  </div>
  <hr>
  <div class="order-total"> <span class="label">Total</span> <span class="value">$557.20</span> </div>
  </tbody>
</div>
<ul class="product-availability-list">
  <li class="not-available">The remaining items are currently not available. Please adjust the quantity.</li>
</ul>
<div class="mini-cart-details">
  <!-- Report any requested source code -->
  <!-- Report the active source code -->
  <div class="bag-holder">
    <a href="https://shop.diesel.com/cart" title="Go to My Bag" class="mini-cart-link"> <span id="mini-cart-icon" class="header-mini-cart empty-red-bag">Bag</span> <span class="bag-count">2</span> </a>
    <div class="minicart-tool-tip"> <span class="arrow"></span>
      <div class="msg">Be quick and Im yours</div>
    </div>
  </div>
  <div class="mini-bag-content container-fluid  pageName" data-pagename="Mini Cart">
    <div class="row">
      <div class="col-lg-8 col-md-6 mini-cart-products">
        <div class="mini-bag-wrapper">
          <div class="mini-bag-slider">
            <div class="mini-cart-image">
              <div data-pname="W-KIRTON" class="remove-item button-text" data-pid="8057095991067"> </div>
              <a href="http://shop.diesel.com/winter-jackets/w-kirton/8057095991067.html" title="W-KIRTON"> <img itemprop="image" class="primary-image" data-altimg="https://sits-pod26.demandware.net/dw/image/v2/AAPK_PRD/on/demandware.static/-/Sites-diesel-master-catalog/default/dw825698cf/images/large/00SESK_00JVL_81E_R.jpg?sw=170&amp;sh=226" src="https://sits-pod26.demandware.net/dw/image/v2/AAPK_PRD/on/demandware.static/-/Sites-diesel-master-catalog/default/dwb89d839e/images/large/00SESK_00JVL_81E_F.jpg?sw=170&amp;sh=226" alt="W-KIRTON, Blue" /> </a>
            </div>
            <div class="mini-cart-details clearfix">
              <div class="mini-cart-name">
                <h5><a href="http://shop.diesel.com/winter-jackets/w-kirton/8057095991067.html">W-KIRTON</a></h5> </div>
              <div class="mini-cart-size">
                <h6>
				  	 	<span class="value">2</span>
						<span class="label"> x </span>
						<span class="mini-cart-attributes">
									
									
									<span class="attribute">
										<span class="value">
											
												Blue
												
											
										</span>
									</span>
									
									
										,
										
									
									
									<span class="attribute">
										<span class="value">
											
												L
												W
												 
												
											
										</span>
									</span>
								
							
						</span>
					</div>	
		
					<div class="mini-cart-pricing">
					
						
					    	<div class="diesel-sr-eligible" name="sr_cartProductDiv"></div>
					    
						<div class="mini-cart-price">
						    
						    	
						    	
							    $557.20
						    
					    </div>
					    
					</div>
					</div>
					
					
			</div>
			
	
	    		</div>
	    	</div>
	    	<div class="col-lg-4 col-md-6 mini-cart-totals">
	    		<h2 class="heading-txt">SHOPPING BAG</h2>
	    		<hr/>
	    		<div class="item-details">
	    		<span class="total-items">
		    		
			    		2 
		    		
		    			 
			    		Item
		    		
	    		</span>
	    				
	    		
    				<span class="items-price">
		    			$557.20
					</span>
					</div>
					<!-- Display Shipping Method -->
					
		    		
                
	    				
		    	<hr/>
		    		
		                <div class="mini-bag-totals">
		                    <span class="label">Order Subtotal:</span>
		                    <span class="value">
		                    		$557.20
		                    </span>
		                </div>
	             
            
                <div class="mini-cartcheckout-button clearfix">
					<a class="primary-button red viewCart viewBag" href="https://shop.diesel.com/cart" title="Go To My Bag">Go To My Bag</a>
					

	
                </div>
                
                
                
            </div>
		</div>
		<div class="row"><span class="ipad_cross_icon"></span></div>
	</div>
 
    
   

    	<div class="rtaminicart" data-rtaCart="00SESK00JVL" data-rtaCartSku="8057095991067" data-rtaCartAmounts="278.60" data-rtaCartQuantities="2" data-rtaSpecial="" data-rtaTags=""></div>
	


    </div>



<script type="text/javascript">
jQuery(document).ready(function(e){
	   $(".close-button").click(function(e){
		   e.preventDefault();
			app.dialog.close();
	   });
	 });
</script>';
		
		
			echo $return_div;
			//redirect('Cart/show_cart');
		
	}
	
	public function remove_product()
	{
		if(!$this->session->userdata('s_uid') || $this->session->userdata('s_uid')==''){
			$user_type = 'Guest';
			$user_id   = $this->session->userdata('__ci_last_regenerate');
			
		}else{
			$user_type = 'Member';
			$user_id = $this->session->userdata('s_uid');
		}
		
		$barcode = $this->input->post('barcode');
		$style	 = $this->input->post('style');
		
		$removed_prod = $this->Cart_model->remove_prod($user_id,$style,$barcode);
		
		redirect('Cart/show_cart');
	}
	
	public function update_product()
	{
		if(!$this->session->userdata('s_uid') || $this->session->userdata('s_uid')==''){
			$user_type = 'Guest';
			$user_id   = $this->session->userdata('__ci_last_regenerate');
			
		}else{
			$user_type = 'Member';
			$user_id = $this->session->userdata('s_uid');
		}
		
		$barcode = $this->input->post('code');
		$bar = $this->input->post('barcode_check');
		$style	 = $this->input->post('style');
		$size	 = $this->input->post('size_value');
		$color	 = $this->input->post('color');
		
		
		$size_rep = ltrim($size);
		$fsize = rtrim($size_rep);
		
		$updated_prod = $this->Cart_model->update_prod($user_id,$style,$barcode,$fsize,$color,$bar);
		
		redirect('Cart/show_cart');
	}
	
	public function remove_item()
	{
		$barcode = $_GET['barcode'];
		$user_id = $_GET['user_id'];
		
		$this->Cart_model->delete_cart_item($barcode,$user_id);
	}

} // end of class

