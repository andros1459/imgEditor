/*!
 * imgEditor.js v1.1
 * autor: Andres Espinosa
 * (c) 2019 imgEditor.js Contributors
 * Released under the MIT License
 */
 
corX_imgEditor=0;
corY_imgEditor=0;
margin_left_imgEditor=0;
margin_top_imgEditor=0;
posX_imgEditor=0;
posY_imgEditor=0;
imgwidth_imgEditor=0;
imgheight_imgEditor=0;

max_width=200;
max_height=200;

scala=100;

img_editorwidth=0;
img_editorheight=0;
img_editorleft=0;
img_editortop=0;

function load_imgEditor(data){
	if(data.obj){
		if(data.obj==''){
			console.error("Debe colocar el id o la clase del objeto");
			return;
		}
	}else{
		console.error("Debe colocar el id o la clase del objeto");
		return;
	}
	if(data.file){
		if(data.file==''){
			console.error("Debe colcar el id del input file");
			return;
		}
	}else{
		console.error("Debe colcar el id del input file");
		return;
	}
	if(data.circular){
		if(data.circular==1){
			$("#imgs_imgEditor").css('border-radius',"50%");
		}
	}
	if(data.scala){
		if(data.scala>1){
			scala=data.scala;
		}else{
			console.error("La escala debe ser mayor a 1");
			return;
		}
	}
	if(data.tamano){
		if(data.tamano['width']){
			if(data.tamano['width']>150){
				max_width=data.tamano['width'];
			}else{
				console.error("El width debe ser mayor a 150px");
				return;
			}
		}

		if(data.tamano['height']){
			if(data.tamano['height']>150){
				max_height=data.tamano['height'];
			}else{
				console.error("El height debe ser mayor a 150px");
				return;
			}
		}
	}
	$("#imgs_imgEditor").css("width",((max_width)*(parseInt(scala)/100))+"px");
	$("#imgs_imgEditor").css("height",((max_height)*(parseInt(scala)/100))+"px");
	if(max_width>max_height){
		$("#imgEditor_preview img").css("height",((max_height)*(parseInt(scala)/100))+"px");
		$("#imgEditor_preview img").css("width","auto");
	}else{
		$("#imgEditor_preview img").css("width",((max_width)*(parseInt(scala)/100))+"px");
		$("#imgEditor_preview img").css("height","auto");
	}
	html='';
    html+='<div id="preview_list">';
    html+='<div id="imgEditor_preview" ondragstart="dragStart_imgEditor(event)" ondrag="arras_imgEditor(event)">';
    html+='<img id="img_imgEditor"/>';
    html+='<div id="imgs_imgEditor"></div>';
    html+='<div id="imgEditor_mascara" class="imgEditor_mascara"></div>';
    html+='</div>';
    html+='</div>';
    html+='<hr>';
  	html+='<input id="range" type="text" name="range" value="" onchange="tamano_imgEditor(this.value);">';
  	html+='<div>'
    html+='<i class="fas fa-image"></i>';
    html+='<i class="fas fa-image" style="font-size: 40px;float:right;"></i>';
  	html+='</div>';
	$(data.obj).html(html);
	$('#range').ionRangeSlider({
      type: "single",
      min: 0,
      max: 100,
      from: 0,
      postfix: " %",
      skin: "big"
    });
    document.getElementById(data.file).onchange = function(e) {
    	let reader = new FileReader();
	    reader.readAsDataURL(e.target.files[0]);
	    reader.onload = function(){
		    images=reader.result;
	    	document.getElementById('img_imgEditor').src=images;
	    	document.getElementById('imgs_imgEditor').style.backgroundImage="url("+images+')';
	    };
    }
}
function loadimg_imgEditor(imagen){
    document.getElementById('img_imgEditor').src=imagen;
    document.getElementById('imgEditor_mascara').style.backgroungImagen=imagen;
}
function dragStart_imgEditor(event){
	corX_imgEditor=event['screenX'];
	corY_imgEditor=event['screenY'];
	margin_left_imgEditor=$("#imgEditor_preview img").css("margin-left").replace("px","");
	margin_top_imgEditor=$("#imgEditor_preview img").css("margin-top").replace("px","");

	width=$("#imgEditor_preview img").width();
	height=$("#imgEditor_preview img").height();
	posX_imgEditor=$("#imgEditor_preview #imgs_imgEditor").css("background-position-x").replace("px","");
	posY_imgEditor=$("#imgEditor_preview #imgs_imgEditor").css("background-position-y").replace("px","");
	if(posX_imgEditor=='50%'){
		posX_imgEditor=-parseInt((width-max_width)/2);
	}
	if(posY_imgEditor=='50%'){
		posY_imgEditor=-parseInt((height-max_height)/2);
	}
}
function arras_imgEditor(event){
	event.preventDefault();
	if(event['screenX']!=0 && event['screenY']!=0){
		$("#imgEditor_preview img").css("margin-left",(parseInt(margin_left_imgEditor)+(event['screenX']-corX_imgEditor))+"px");
		$("#imgEditor_preview #imgs_imgEditor").css("background-position-x",(parseInt(posX_imgEditor)+(event['screenX']-corX_imgEditor))+'px');
		$("#imgEditor_preview img").css("margin-top",(parseInt(margin_top_imgEditor)+(event['screenY']-corY_imgEditor))+"px");
		$("#imgEditor_preview #imgs_imgEditor").css("background-position-y",(parseInt(posY_imgEditor)+(event['screenY']-corY_imgEditor))+'px');
		img_editorleft=(parseInt(posX_imgEditor)+(event['screenX']-corX_imgEditor));
		img_editortop=(parseInt(posY_imgEditor)+(event['screenY']-corY_imgEditor));
	}
}
function tamano_imgEditor(val){
	if(imgwidth_imgEditor==0 || imgheight_imgEditor==0){
		imgwidth_imgEditor=$("#imgEditor_preview img").width();
    	imgheight_imgEditor=$("#imgEditor_preview img").height();
	}
	if(posX_imgEditor==0 && posY_imgEditor==0){
		width=$("#imgEditor_preview img").width();
		height=$("#imgEditor_preview img").height();
		posX_imgEditor=$("#imgEditor_preview #imgs_imgEditor").css("background-position-x").replace("px","");
		posY_imgEditor=$("#imgEditor_preview #imgs_imgEditor").css("background-position-y").replace("px","");
		if(posX_imgEditor=='50%'){
			posX_imgEditor=-parseInt((width-max_width)/2);
		}
		if(posY_imgEditor=='50%'){
			posY_imgEditor=-parseInt((height-max_height)/2);
		}
		$("#imgEditor_preview #imgs_imgEditor").css("background-position-x",(parseInt(posX_imgEditor)+'px'));
		$("#imgEditor_preview #imgs_imgEditor").css("background-position-y",(parseInt(posY_imgEditor)+'px'));
	}
	left=document.getElementById('imgs_imgEditor').offsetLeft;
	mar_left=$("#imgEditor_preview img").css("margin-left").replace("px","");
	posX_imgEditor=(parseFloat(left)-parseFloat(mar_left));

	top=document.getElementById('imgs_imgEditor').offsetTop;
	mar_top=$("#imgEditor_preview img").css("margin-top").replace("px","");
	posY_imgEditor=(parseFloat(top)-parseFloat(mar_top));

	width=(parseFloat(imgwidth_imgEditor)*((100+parseInt(val))/100));
	height=(parseFloat(imgheight_imgEditor)*((100+parseInt(val))/100));
	$("#imgEditor_preview img").width(width);
	$("#imgEditor_preview img").height(height);
	$("#imgEditor_preview #imgs_imgEditor").css("background-size",width+"px "+height+"px");
	$("#imgEditor_preview #imgs_imgEditor").css("background-position-x",-posX_imgEditor+'px');
	$("#imgEditor_preview #imgs_imgEditor").css("background-position-y",-posY_imgEditor+'px');
	img_editorleft=posX_imgEditor;
	img_editortop=posY_imgEditor;
	img_editorwidth=width;
	img_editorheight=height;

}
function imgEditor_getData(){
	data={
		width: img_editorwidth,
		height:img_editorheight,
		left: img_editorleft,
		top: img_editortop
	}
	return data;
}