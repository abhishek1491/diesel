<?php

class Cart_model extends CI_Model{

	public function __construct()
    {
        // Call the Model constructor
        parent::__construct();

        //$this->load->library('productimage');
    }
	
	public function check_product($colors, $barcode, $qty = '', $style='', $cart_id = '', $usr_id = '', $user_type = '')
	{
			
			$returnVal = false;
			
			if(!empty($colors) && !empty($barcode)):

			$sql = "SELECT *
					FROM prod_mast fm 
					join prod_variation fv on fm.style = fv.style 
					join prod_barcode fb on fb.style = fv.style AND fb.color = fv.attr_code
					WHERE barcode = $barcode AND fb.color = '$colors'";
					
			$query  = $this->db->query($sql);
			
			if($query->num_rows() != 1):
				exit;
			endif;
			
			$rec        = $query->result_array();
			$rec        = $rec[0];
			
			//$subtotal   = $rec['price'];
			$subtotal   = '1298';
			$user_id    = $usr_id;
			$product_id	= $rec['style'];
			$prod_type	= 'jacket';	
			$barcode	= $rec['barcode'];
			$color		= $colors;
			$price		= '1298';
			$qty 		= 1;
			$size		= $rec['size'];
			$prodname	= $rec['disp_name'];
			
			$cart_data = array(
							'user_id'    		=> $user_id,
							'user_type'			=> $user_type,	
							'product_id' 		=> $product_id,
							'prod_type'  		=> $prod_type,
							'code'    	 		=> $barcode,
							'prod_name'			=> $prodname,
							'color'      		=> $color,
							'price_sale'      	=> $price,
							'original_price'    => $price,
							'qty'        		=> $qty,
							'size'		 		=> $size,
							'created_dt' 		=> date('Y-m-d H:i:s')
						);
						
			//$barcode = $rec['barcode'];
			//$user_id = $this->session->userdata('session_id');
	
			if(!empty($cart_id))
			{		

				$sql     = "SELECT cart_id FROM cart_detail WHERE cart_id = '{$cart_id}' AND user_id = '{$user_id}'";
			
				$query  = $this->db->query($sql);
				
				$table = 'cart_detail';

				if($query->num_rows() == 0)
				{
					$this->db->insert($table, $cart_data);
					$returnVal = true;
				}
				
				else
				{
					$this->db->where("cart_id", $cart_id);
					$this->db->where("user_id", $user_id);
					$this->db->update($table, $cart_data);
					$returnVal = true;
				}

			}
			
			else
			{

				$sql     = "SELECT cart_id FROM cart_detail WHERE code = '{$barcode}' AND user_id = '{$user_id}'";
			
				$query  = $this->db->query($sql);
				
				$table = 'cart_detail';

				if($query->num_rows() == 0)
				{
					$this->db->insert($table, $cart_data);
					$returnVal = true;
				}
				
				else
				{
					$sql     = "SELECT qty FROM cart_detail WHERE code = '{$barcode}' AND user_id = '{$user_id}'";
					$query   = $this->db->query($sql);
					$quantity = $query->result();
					//var_dump($quantity);
					//die();
					$update_quantity = (int)$quantity[0]->qty + 1;
					//var_dump($update_quantity);
					//die();
					$up_data = array(
							'qty'    => $update_quantity,
					);
					
					$this->db->where("product_id", $style);
					$this->db->where("code", $barcode);
					$this->db->where("user_id", $user_id);
					$this->db->update($table, $up_data);/**/
					
					$returnVal = $update_quantity;
					
				}

			}
		
		endif;
		
		return $returnVal;
	}
	
	
	public function show_cart($barcode = '', $user_id = '')
	{
        $sql        = "SELECT * FROM cart_detail WHERE user_id = '{$user_id}' and code = '{$barcode}' limit 1";
        $query      = $this->db->query($sql);
        
        
        if($query->num_rows() != 0)
		{
			
			
            $carts = $query->result_array();
				
			
            foreach ($carts as $cart_details) 
			{
                
					$barcode = $cart_details['code'];
					$color   = $cart_details['color'];
					$qty     = $cart_details['qty'];

					$sql = "SELECT *
							FROM prod_mast fm 
							join prod_variation fv on fm.style = fv.style 
							join prod_barcode fb on fb.style = fv.style AND fb.color = fv.attr_code
							WHERE barcode = $barcode GROUP BY barcode";
                        //WHERE barcode = $barcode and price > 0 GROUP BY barcode";

						//echo "$sql";exit;
                        
					$query  = $this->db->query($sql);
							
					if($query->num_rows() == 0):
						exit;
					endif;
					$result     = $query->result_array();
					
					//echo "<pre>";
					//var_dump($result);
					//die();	
					
					foreach ($result as $rec):

						$name       = $rec['disp_name'];
						$style      = $rec['style'];
						$gender     = 'M';
						//$width_code = $rec['width_name'];
						$color_code = $rec['attr_value'];
						//$prod_type  = $rec['prod_type'];
						
						$price 		= '1298';
						
					
						$sql = "SELECT variation_code,image_path	 
								FROM prod_images
								WHERE style='$style'
								AND variation_code = '$color'
								AND variation_code != '' limit 1";
                        //WHERE barcode = $barcode and price > 0 GROUP BY barcode";

						//echo "$sql";exit;
                        
					$query  = $this->db->query($sql);
							
					if($query->num_rows() == 0):
						exit;
					endif;
					$image_path     = $query->result_array();
					
					
					/*
						if($rec['prod_type'] == 'Footwear'){
							$link  = product_link($prod_type, $gender, $name, $style, $color_code);
							$image = $this->productimage->get_product_img($style, $name, $color_code, $type="IMAGE_LINK");
						}else{
							$link  = product_link($prod_type, $gender, $name, $style, $color_code);
							$image = $this->productimage->get_apparel_img($style, $name, $color_code, $type="IMAGE_LINK");
						}

						if($rec['price_sale'] > 0){
							$price = $rec['price_sale'];
						}else{
							$price = $rec['price'];
						}

						$total = $price * $qty;
						$discount = 0;
						if(isset($cart_details['discount']) && $cart_details['discount'] != 0){

							if($cart_details['discount_type'] == "flat"){

								$subtotal = $total - $cart_details['discount'];
								$discount = $cart_details['discount'];

							}else{

								$subtotal = $total - (($cart_details['discount'] / 100) * $total);
								$discount = (($cart_details['discount'] / 100) * $total);

							}

						}else{
							$subtotal = $total;
						}
						
						//$discount = number_format($discount, 2);
						//$subtotal = number_format($subtotal, 2);
						*/
						
						$product[] = array(
									   // 'cart_id'       => $cart_details['cart_id'],
										'name'          => $name,
										'style'         => $style,
										'gender'        => $gender,
										//'description'   => $rec['prod_desc'],
										'image'         => base_url().'images/'.$image_path[0]['image_path'],
										//'link'          => $link,
										//'prodcode'      => $rec['style'],
										'size'          => $rec['size'],	
										//'sku'           => $rec['sku'],
										//'barcode'       => $rec['barcode'],
										'price_sale'    => $price,
										//'price'         => $rec['price'],
										//'promo_code'    => $cart_details['promo_code'],
										//'promo_string'  => $cart_details['promo_string'],
										//'coup_discount' => $discount,
										//'discount_type' => (!empty($cart_details['discount_type']))? $cart_details['discount_type']:'',
									   // 'width'         => $width_code,
										'color'         => $color_code,
										//'subtotal'      => $subtotal,
										//'discount_amt'  => $discount,
										//'type'          => $rec['prod_type'],
										'qty'           => $qty
									);
						
						endforeach;
	                 
            }
            return $product;

        }
		else
		{
            return false;
        }
    }
	
	//get data for cart page..
	public function get_cart_items($user_id=''){
		$guest_id = $this->session->userdata('__ci_last_regenerate');

		if(isset($user_id) && $user_id != ''){
			$user_id = $user_id;
		}else{
			$user_id = $this->session->userdata('s_uid');	
		}
		
		$this->db->select('*');
		$this->db->from('cart_detail');
		$this->db->where('user_id',$user_id);
		$query = $this->db->get();
			
		 if($query->num_rows() > 0):
			return $query->result_array();
		 endif;
	
	}
}