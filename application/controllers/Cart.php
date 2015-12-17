<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Cart extends CI_Controller {

	private $data;

	public function __construct()
	{
		parent::__construct();
		$this->load->library('cart');
		$this->load->model("Cart_model");
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
			if($prod == 0 || $prod == 1)
			{
				$updates = true;
			}
			else
			{
				$updates = $prod;
			}
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
		$barcode 	= $this->input->post('barcode');

		$carts = $this->Cart_model->show_cart($barcode,$user_id);
		

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
		
		if(!empty($cart)):
			$cart_arr = $cart;
		/*	$get_promo_code = $this->cart_model->get_promo_code($user_id);
			
			if(!empty($get_promo_code)){
				array_push($cart_arr,$get_promo_code);
			}
		*/
			$data = $this->get_showcart_details($cart_arr,$user_id,$user_type);
			
		else:
			$data = '';
		endif;

		echo "<pre>";
		print_r($data);
		exit;
		
		$view_file_name = 'cart_view';
        $data['currPage']="cart-page";
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
	

} // end of class

