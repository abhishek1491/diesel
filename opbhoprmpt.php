<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<!-- saved from url=(0077)chrome-extension://fidikogfgleiaefnjbmnjaplmgknppkg/omnipassui/opbhoprmpt.htm -->
<html dir="ltr"><head><meta http-equiv="Content-Type" content="text/html; charset=windows-1252">
	<meta http-equiv="X-UA-Compatible" content="IE=8">
	<style type="text/css">
		@import url("<?=base_url()?>css/common.css");
	</style>
	<title>Verify Password</title>
	<meta content="Microsoft FrontPage 12.0" name="GENERATOR">
	<meta http-equiv="MSThemeCompatible" content="Yes">
	<script src="chrome-extension://fidikogfgleiaefnjbmnjaplmgknppkg/chromeevent.js"></script>
	<script src="chrome-extension://fidikogfgleiaefnjbmnjaplmgknppkg/omnipassui/commonjs/jquery-1.2.js"></script>
	<script src="chrome-extension://fidikogfgleiaefnjbmnjaplmgknppkg/omnipassui/commonjs/button.js"></script>
	<script src="chrome-extension://fidikogfgleiaefnjbmnjaplmgknppkg/omnipassui/commonjs/common.js"></script>
	<script src="chrome-extension://fidikogfgleiaefnjbmnjaplmgknppkg/omnipassui/commonjs/ReadXML.js"></script>
	<script src="chrome-extension://fidikogfgleiaefnjbmnjaplmgknppkg/omnipassui/commonjs/lang.js"></script>
    <script src="chrome-extension://fidikogfgleiaefnjbmnjaplmgknppkg/omnipassui/opbho.js"></script>
	<script src="chrome-extension://fidikogfgleiaefnjbmnjaplmgknppkg/omnipassui/opbhoeventhandler.js"></script>
	<script src="chrome-extension://fidikogfgleiaefnjbmnjaplmgknppkg/omnipassui/omnipassui.js"></script>
</head>
<body>
    <div class="maincontainer no-selection" id="lyrMain">
        <div class="lyrcontainer" id="lyrAuthentication">
            <table class="bhotbl">
                <tbody><tr>
                    <td style="width: 50px" id="Td1">
                        <img src="chrome-extension://fidikogfgleiaefnjbmnjaplmgknppkg/omnipassui/2110/icon-wbf.png" class="imglogo" alt="">
                    </td>
                    <td style="width: 150px;">
                        <label class="normalFont" id="enrwiz_LblPassword" style="margin-left: 10px; width: 145px">Password</label>
                    </td>
                    <td style="width: 390px;">
                        <input type="password" id="enrwiz_EditPassword" class="EditNormal" tabindex="1">
                    </td>
                    <td style="width: 514px;">
                        <label class="normalFont" id="enrwiz_LblStatus"></label>
                    </td>
                </tr>
            </tbody></table>
        </div>
        <div class="lyrcontainer" id="lyrRemember">
            <table class="bhotbl">
                <tbody><tr>
                    <td style="width: 50px" id="bhotbltd1">
                        <img src="chrome-extension://fidikogfgleiaefnjbmnjaplmgknppkg/omnipassui/2110/icon-wbf.png" class="imglogo" alt="">
                    </td>
                    <td style="width: 740px" id="bhotbltd2">
                        <label style="display: none; width: 480px;" class="normalFont" id="enrwiz_LblRememberPassword">Do you want HP SimplePass to remember your password for this site?</label>
                        <label style="display: none; width: 720px;" class="normalFont" id="enrwiz_LblStatus1"></label>
                    </td>
                    <td style="width: 20px" id="bhotbltd3">
                        <input type="checkbox" id="enrwiz_CheckBoxAlwaysRemember" tabindex="3">
                    </td>
                    <td style="width: 204px" id="bhotbltd4">
                        <label class="normalFont" id="enrwiz_LblAlwaysRemember" for="enrwiz_CheckBoxAlwaysRemember" style="width: 200px;">Always remember my websites</label>
                    </td>
                </tr>
            </tbody></table>
        </div>
        <div style="width: 106px; z-index: 2; height: 30px; position: absolute; top: 0px;" id="lyrButton"><input style="position: absolute; padding: 0px; margin: 0px; line-height: normal; border: none; left: 400px; top: 27px; height: 26px; width: 100px; z-index: 100; display: none; background-color: transparent;" type="image" id="enrwiz_btnSubmit_imgButton_BlankBtn" tabindex="2" src="chrome-extension://fidikogfgleiaefnjbmnjaplmgknppkg/omnipassui/2110/spacer.gif"><table class="opbuttontbl" style="position: absolute; border-collapse: collapse; line-height: normal; left: 400px; top: 27px; height: 26px; width: 100px; z-index: 99; opacity: 1; display: none;" id="enrwiz_btnSubmit_tbl" border="0" cellspacing="0" cellpadding="0">	<tbody><tr>		<td width="15px" style="background-image: url(&#39;chrome-extension://fidikogfgleiaefnjbmnjaplmgknppkg/omnipassui/2110/btnLeftColBackNormalImg.png&#39;); background-repeat:no-repeat;background-size:cover"><img src="chrome-extension://fidikogfgleiaefnjbmnjaplmgknppkg/omnipassui/2110/spacer.gif" border="0" width="15px"></td>		<td width="70px" style="background-image: url(&#39;chrome-extension://fidikogfgleiaefnjbmnjaplmgknppkg/omnipassui/2110/btnCenterColBackNormalImg.png&#39;); background-repeat:repeat-x;background-size:cover;" align="center" height="26px" valign="middle">			<table class="opbuttontbl" border="0" cellpadding="0" cellspacing="0" height="100%" align="center">				<tbody><tr>					<td width="100%" align="center" style="vertical-align:middle"><label class="BtnFontNormal" id="enrwiz_btnSubmit_Lbl" style="vertical-align:middle">Submit</label></td>				</tr>			</tbody></table>		</td>		<td width="15px" style="background-image: url(&#39;chrome-extension://fidikogfgleiaefnjbmnjaplmgknppkg/omnipassui/2110/btnRightColBackNormalImg.png&#39;); background-repeat:no-repeat;background-size:cover;"><img src="chrome-extension://fidikogfgleiaefnjbmnjaplmgknppkg/omnipassui/2110/spacer.gif" border="0" width="15px"></td>	</tr></tbody></table><input style="position: absolute; padding: 0px; margin: 0px; line-height: normal; border: none; left: 550px; top: 27px; height: 26px; width: 100px; z-index: 100; display: none; background-color: transparent;" type="image" id="OmniPass_BtnYes_imgButton_BlankBtn" tabindex="1" src="chrome-extension://fidikogfgleiaefnjbmnjaplmgknppkg/omnipassui/2110/spacer.gif"><table class="opbuttontbl" style="position: absolute; border-collapse: collapse; line-height: normal; left: 550px; top: 27px; height: 26px; width: 100px; z-index: 99; opacity: 1; display: none;" id="OmniPass_BtnYes_tbl" border="0" cellspacing="0" cellpadding="0">	<tbody><tr>		<td width="15px" style="background-image: url(&#39;chrome-extension://fidikogfgleiaefnjbmnjaplmgknppkg/omnipassui/2110/btnLeftColBackNormalImg.png&#39;); background-repeat:no-repeat;background-size:cover"><img src="chrome-extension://fidikogfgleiaefnjbmnjaplmgknppkg/omnipassui/2110/spacer.gif" border="0" width="15px"></td>		<td width="70px" style="background-image: url(&#39;chrome-extension://fidikogfgleiaefnjbmnjaplmgknppkg/omnipassui/2110/btnCenterColBackNormalImg.png&#39;); background-repeat:repeat-x;background-size:cover;" align="center" height="26px" valign="middle">			<table class="opbuttontbl" border="0" cellpadding="0" cellspacing="0" height="100%" align="center">				<tbody><tr>					<td width="100%" align="center" style="vertical-align:middle"><label class="BtnFontNormal" id="OmniPass_BtnYes_Lbl" style="vertical-align:middle">Yes</label></td>				</tr>			</tbody></table>		</td>		<td width="15px" style="background-image: url(&#39;chrome-extension://fidikogfgleiaefnjbmnjaplmgknppkg/omnipassui/2110/btnRightColBackNormalImg.png&#39;); background-repeat:no-repeat;background-size:cover;"><img src="chrome-extension://fidikogfgleiaefnjbmnjaplmgknppkg/omnipassui/2110/spacer.gif" border="0" width="15px"></td>	</tr></tbody></table><input style="position: absolute; padding: 0px; margin: 0px; line-height: normal; border: none; left: 670px; top: 27px; height: 26px; width: 110px; z-index: 100; display: none; background-color: transparent;" type="image" id="OmniPass_BtnNo_imgButton_BlankBtn" tabindex="2" src="chrome-extension://fidikogfgleiaefnjbmnjaplmgknppkg/omnipassui/2110/spacer.gif"><table class="opbuttontbl" style="position: absolute; border-collapse: collapse; line-height: normal; left: 670px; top: 27px; height: 26px; width: 110px; z-index: 99; opacity: 1; display: none;" id="OmniPass_BtnNo_tbl" border="0" cellspacing="0" cellpadding="0">	<tbody><tr>		<td width="15px" style="background-image: url(&#39;chrome-extension://fidikogfgleiaefnjbmnjaplmgknppkg/omnipassui/2110/btnLeftColBackNormalImg.png&#39;); background-repeat:no-repeat;background-size:cover"><img src="chrome-extension://fidikogfgleiaefnjbmnjaplmgknppkg/omnipassui/2110/spacer.gif" border="0" width="15px"></td>		<td width="80px" style="background-image: url(&#39;chrome-extension://fidikogfgleiaefnjbmnjaplmgknppkg/omnipassui/2110/btnCenterColBackNormalImg.png&#39;); background-repeat:repeat-x;background-size:cover;" align="center" height="26px" valign="middle">			<table class="opbuttontbl" border="0" cellpadding="0" cellspacing="0" height="100%" align="center">				<tbody><tr>					<td width="100%" align="center" style="vertical-align:middle"><label class="BtnFontNormal" id="OmniPass_BtnNo_Lbl" style="vertical-align:middle">No</label></td>				</tr>			</tbody></table>		</td>		<td width="15px" style="background-image: url(&#39;chrome-extension://fidikogfgleiaefnjbmnjaplmgknppkg/omnipassui/2110/btnRightColBackNormalImg.png&#39;); background-repeat:no-repeat;background-size:cover;"><img src="chrome-extension://fidikogfgleiaefnjbmnjaplmgknppkg/omnipassui/2110/spacer.gif" border="0" width="15px"></td>	</tr></tbody></table></div>
    </div>
	<div style="display: none" id="layer5">
		<input type="button" id="enrwiz_btnSubmit" style="visibility: hidden">
		<input type="button" id="OmniPass_BtnYes" style="visibility: hidden">
		<input type="button" id="OmniPass_BtnNo" style="visibility: hidden">
		<input id="page_loadcomplete" type="button" style="visibility: hidden">	
	</div>	


</body></html>