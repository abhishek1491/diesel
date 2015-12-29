<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Productimage {

	private $ci;

    public function __construct()
    {
		$this->ci = & get_instance();        
    }


    public function get_product_img($style, $shoename, $color, $type="SHOW_IMAGE"){
    
        $sql="SELECT DISTINCT(`color_code`), width_code FROM `prod_barcode` WHERE `style`='$style' and color_code ='{$color}'";
        
        $query  = $this->ci->db->query($sql);
        
        if($query->num_rows() > 0):
            $res = $query->result_array();
        	// $base_url = base_url();
	        $base_url = path_product_image();

            foreach($res as $row){

                $color_code = $row["color_code"];
                
                if(strlen($color_code)==1) $img_color_code="00".$color_code;
                elseif(strlen($color_code)==2) $img_color_code="0".$color_code;
                else $img_color_code=$color_code;

                if($type=="SHOW_IMAGE"):
                    	
                    	$imgname = $style."_".$img_color_code;
                    
                        $output_color = '';
                        if(file_exists($base_url.$style."/".$imgname."_l_MD.jpg")){
                            $output_color.="<img src='".$base_url.$style."/".$imgname."_l_MD.jpg' class='thumb_img' alt='$shoename' title='$shoename'/>";
                        }else{
                            $output_color.="<img src='".$base_url.$style."/".$imgname."_l_MD.jpg' class='thumb_img' alt='$shoename' title='$shoename'/>";
                        }

                elseif($type=="IMAGE_LINK"):
                        
                        $imgname = $style."_".$img_color_code;
                    
                        $output_color = '';
                        if(file_exists($base_url.$style."/".$imgname."_l_MD.jpg")){
                            $output_color.= $base_url.$style."/".$imgname."_l_MD.jpg";
                        }else{
                            $output_color.= $base_url.$style."/".$imgname."_l_MD.jpg";
                        }
                    
                endif;
                
            }

            if($type=="SHOW_IMAGE"):
                
                echo $output_color;

            elseif($type=="IMAGE_LINK"):
                        
                return $output_color;
                    
            endif;

        endif;
    }


     /****** Apparel Image *****/

	public 	function get_apparel_img($prodID, $appname, $color, $type = "SHOW_IMAGE"){
			    
	        $sql = "SELECT * FROM `prod_barcode` where color_code = $color and `style`='$prodID'";
	        $query  = $this->ci->db->query($sql);
        
        	if($query->num_rows() > 0):

            	$res = $query->result_array();
		        // $base_url = base_url();
		        $base_url = path_product_image();

        		foreach($res as $data):

			        $color_name = $data['color_code'];
			        
			        
			        if($type=="SHOW_IMAGE"):
			            $imgname=$prodID."_".$color;
			            $output_color= '';
			                if(file_exists($base_url.$prodID."/".$imgname."_f_MD.jpg")){
			                    $output_color.="<img src='".$base_url.$prodID."/".$imgname."_f_MD.jpg' class='thumb_img ".$color."_thumb' alt='$appname' title='$appname'/>";
			                }elseif(file_exists($base_url.$prodID."/".$imgname."_b_MD.jpg")){
			                    $output_color.="<img src='".$base_url.$prodID."/".$imgname."_b_MD.jpg' class='thumb_img ".$color."_thumb' alt='$appname' title='$appname'/>";
			                }elseif(file_exists($base_url.$prodID."/".$imgname."_d_MD.jpg")){
			                    $output_color.="<img src='.$base_url.'prod_images/".$prodID."/".$imgname."_d_MD.jpg' class='thumb_img ".$color."_thumb' alt='$appname' title='$appname'/>";
			                }elseif(file_exists($base_url.$prodID."/".$imgname."_o_MD.jpg")){
			                    $output_color.="<img src='.$base_url.'prod_images/".$prodID."/".$imgname."_o_MD.jpg' class='thumb_img ".$color."_thumb' alt='$appname' title='$appname'/>";    
			                }elseif(file_exists($base_url.$prodID."/".$imgname."_d1_MD.jpg")){
			                    $output_color.="<img src='.$base_url.'prod_images/".$prodID."/".$imgname."_d1_MD.jpg' class='thumb_img ".$color."_thumb' alt='$appname' title='$appname'/>";
			                }elseif(file_exists($base_url.$prodID."/".$imgname."_d2_MD.jpg")){
			                    $output_color.="<img src='.$base_url.'prod_images/".$prodID."/".$imgname."_d2_MD.jpg' class='thumb_img ".$color."_thumb' alt='$appname' title='$appname'/>";
			                }else{
			                    $output_color.="<img src='.$base_url.'prod_images/".$prodID."/".$imgname."_f_MD.jpg' class='thumb_img ".$color."_thumb' alt='$appname' title='$appname'/>";
			                }
			                
			        elseif($type=="IMAGE_LINK"):
			                
			                $imgname=$prodID."_".$color;
			            
			                $output_color = '';
			                if(file_exists($base_url.$prodID."/".$imgname."_f_MD.jpg")){
			                    $output_color.=$base_url.$prodID."/".$imgname."_f_MD.jpg";
			                }elseif(file_exists($base_url.$prodID."/".$imgname."_b_MD.jpg")){
			                    $output_color.=$base_url.$prodID."/".$imgname."_b_MD.jpg";
			                }elseif(file_exists($base_url.$prodID."/".$imgname."_d_MD.jpg")){
			                    $output_color.=$base_url.$prodID."/".$imgname."_d_MD.jpg";
			                }elseif(file_exists($base_url.$prodID."/".$imgname."_o_MD.jpg")){
			                    $output_color.=$base_url.$prodID."/".$imgname."_o_MD.jpg";    
			                }elseif(file_exists($base_url.$prodID."/".$imgname."_d1_MD.jpg")){
			                    $output_color.=$base_url.$prodID."/".$imgname."_d1_MD.jpg";
			                }elseif(file_exists($base_url.$prodID."/".$imgname."_d2_MD.jpg")){
			                    $output_color.=$base_url.$prodID."/".$imgname."_d2_MD.jpg";
			                }else{
			                    $output_color.=$base_url.$prodID."/".$imgname."_f_MD.jpg";
			                }
			            
			        endif;
			            
			        
			        if($type=="SHOW_IMAGE"):

			            echo $output_color;

			        elseif($type=="IMAGE_LINK"):
			                    
			            return $output_color;
			                
			        endif;
			    endforeach;
			endif;
	}
}

?>