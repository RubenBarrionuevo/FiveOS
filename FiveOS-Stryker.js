//BoxColor JavaScript by Ruben Barrionuevo
//@RubenStryker97
//Uso exclusivo para FiveOS

$(function(){
function loadcolortheme(){
		$(".icon").on("mouseover", function(){
			$( this ).css("background-color", localStorage.backgroundrcolora);
		});
		$(".icon").on("mouseout", function(){
			$( this ).css("background-color", "transparent");
		});
        $(".icontrash").on("mouseover", function(){
            $( this ).css("background-color", localStorage.backgroundrcolora);
            $($(this).children('.nameicontrash')).css("color", "white");
        });
        $(".icontrash").on("mouseout", function(){
            $( this ).css("background-color", "transparent");
            $($(this).children('.nameicontrash')).css("color", localStorage.backgroundrcolor);
        });
		$(".nameicon,.titlecolor,#fecha").css("color", localStorage.fontrcolor);
		$('.titlecolor,.rbuttonfive,#desktop-previ-img').css("background-color", localStorage.backgroundrcolor);
		$('#menu').css({"background-image": localStorage.navegadorw, "height": localStorage.navegadorw_height});
		$('#notificaciones a, #fecha').css("color", localStorage.fontrcolor);
		$('#notificaciones a, #fecha').on("mouseover", function(){
			$( this ).css("color", localStorage.backgroundrcolor);
		});
		$('#notificaciones a, #fecha').on("mouseout", function(){
			$( this ).css("color", localStorage.fontrcolor);
		});
		$('.separadorimg').attr("src", localStorage.separadorw);
		$("#calculadora .boton,.button5").css({"color": localStorage.fontrcolor,"background-color": localStorage.backgroundrcolora});
		$("#calculadora .boton,.button5").on("mouseover", function(){
			$( this ).css("background-color", localStorage.backgroundrcolor);
		});
		$("#calculadora .boton,.button5").on("mouseout", function(){
			$( this ).css("background-color", localStorage.backgroundrcolora);
		});
		$("#calculadora input[type='number']").css({"color": localStorage.fontrcolor, "background-color": localStorage.backgroundrcolor});
        $("#trash-top,#desktop-top").css({"background-color": localStorage.backgroundrcolor, "color": localStorage.fontrcolor});
        $(".nameicontrash").css({"color": localStorage.backgroundrcolor});
}
function defaultstyle5os(){
		localStorage.backfiverepeat = 1;
      	localStorage.backfive = 'i/back.png';
      	localStorage.backgroundrcolor = "orange";
      	localStorage.backgroundrcolora = "background:rgba(255,161,0,0.7)";
      	localStorage.fontrcolor = "white"; $(".nameicon").css("color", "white");
      	localStorage.navegadorw = "url(i/p/Barraofi.png)";
      	localStorage.separadorw = "i/p/Separadorofi.png";
      	location.reload();
}
	if(!localStorage.backgroundrcolor && !localStorage.fontrcolor && !localStorage.navegadorw && !localStorage.separadorw){
		defaultstyle5os();
	}
	else{loadcolortheme();$('.separador').attr("src", localStorage.separadorw);}
	//Colores predefinidos
	$(".white").on("click",function(){localStorage.backgroundrcolor = "white";localStorage.backgroundrcolora = "rgba(255,255,255,0.8)";loadcolortheme();});
	$(".black").on("click",function(){localStorage.backgroundrcolor = "black";localStorage.backgroundrcolora = "rgba(0,0,0,0.8)";loadcolortheme();});
	$(".pink").on("click",function(){localStorage.backgroundrcolor = "pink";localStorage.backgroundrcolora = "rgba(255, 192, 203,0.8)";loadcolortheme();});
	$(".red").on("click",function(){localStorage.backgroundrcolor = "red";localStorage.backgroundrcolora = "rgba(255,0,0,0.8)";loadcolortheme();});
	$(".orange").on("click",function(){localStorage.backgroundrcolor = "orange";localStorage.backgroundrcolora = "rgba(255,165,0,0.8)";loadcolortheme();});
	$(".yellow").on("click",function(){localStorage.backgroundrcolor = "yellow";localStorage.backgroundrcolora = "rgba(255,255,0,0.8)";loadcolortheme();});
	$(".purple").on("click",function(){localStorage.backgroundrcolor = "purple";localStorage.backgroundrcolora = "rgba(128,0,128,0.8)";loadcolortheme();});
	$(".lime").on("click",function(){localStorage.backgroundrcolor = "lime";localStorage.backgroundrcolora = "rgba(0,255,0,0.8)";loadcolortheme();});
	$(".whitef").on("click",function(){localStorage.fontrcolor = "white";loadcolortheme();});
	$(".blackf").on("click",function(){localStorage.fontrcolor = "black";loadcolortheme();});
	$(".orangef").on("click",function(){localStorage.fontrcolor = "orange";loadcolortheme();});
	$(".yellowf").on("click",function(){localStorage.fontrcolor = "yellow";loadcolortheme();});
	//Colores extras
	$("#lookcolor").on("click",function(){var colortheme = $("#colorbackchoose").val();hexToRgbback(colortheme);loadcolortheme();});
	$("#lookcolor2").on("click",function(){var colortheme2 = $("#colorfontchoose").val();hexToRgbfont(colortheme2);loadcolortheme();});
//Hex to RGB
function hexToRgbback(h)
{
    var r = parseInt((cutHex(h)).substring(0,2),16), g = parseInt((cutHex(h)).substring(2,4),16), b = parseInt((cutHex(h)).substring(4,6),16);
    localStorage.backgroundrcolor = "rgb("+r+","+g+","+b+")" //Save on localStore
    localStorage.backgroundrcolora = "rgba("+r+","+g+","+b+",0.8)" //Save on localStore - Alpha Channel
}
function hexToRgbfont(h)
{
    var r = parseInt((cutHex(h)).substring(0,2),16), g = parseInt((cutHex(h)).substring(2,4),16), b = parseInt((cutHex(h)).substring(4,6),16);
    localStorage.fontrcolor = "rgb("+r+","+g+","+b+")" //Save on localStore
}
function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h}
//End
//MenuContextual
    $("#defaultstyle").on("click", function(){
      defaultstyle5os();
    });
    $("#background-fiveos").on("click", function(){
        $("#desktop-config").css("display", "inline-block");
    });

    //ChangeNav WVersion
    $(".nav000").on("click", function(){localStorage.navegadorw = "url(i/p/Barraofi.png)";loadcolortheme();});
    $(".nav001").on("click", function(){localStorage.navegadorw = "url(i/p/Barra.png)";loadcolortheme();});
    $(".nav002").on("click", function(){localStorage.navegadorw = "url(i/p/BarraTransparencia.png)";loadcolortheme();});
    $(".nav003").on("click", function(){localStorage.navegadorw = "url(i/p/BarraBlack.png)";loadcolortheme();});
    $(".nav004").on("click", function(){localStorage.navegadorw = "url(i/p/BarraBlackTras.png)";loadcolortheme();});
    $(".nav005").on("click", function(){localStorage.navegadorw = "url(i/p/BarraBlue.png)";loadcolortheme();});
    $(".nav006").on("click", function(){localStorage.navegadorw = "url(i/p/BarraBlueTras.png)";loadcolortheme();});
    $(".nav007").on("click", function(){localStorage.navegadorw = "url(i/p/BarraGray.png)";loadcolortheme();});
    $(".nav008").on("click", function(){localStorage.navegadorw = "url(i/p/BarraGrayTras.png)";loadcolortheme();});
    $(".nav009").on("click", function(){localStorage.navegadorw = "url(i/p/BarraGreen.png)";loadcolortheme();});
    $(".nav010").on("click", function(){localStorage.navegadorw = "url(i/p/BarraGreenTras.png)";loadcolortheme();});
    $(".nav011").on("click", function(){localStorage.navegadorw = "url(i/p/BarraRed.png)";loadcolortheme();});
    $(".nav012").on("click", function(){localStorage.navegadorw = "url(i/p/BarraRedTras.png)";loadcolortheme();});
    $(".nav013").on("click", function(){localStorage.navegadorw = "url(i/p/BarraWhite.png)";loadcolortheme();});
    $(".nav014").on("click", function(){localStorage.navegadorw = "url(i/p/BarraWhiteTrans.png)";loadcolortheme();});
    //ChangeNavSeparatorsWVersion
    $(".sepa000").on("click", function(){localStorage.separadorw = "i/p/Separadorofi.png";loadcolortheme();closeguistyle();});
    $(".sepa001").on("click", function(){localStorage.separadorw = "i/p/Separador.png";loadcolortheme();closeguistyle();});

//TimeOS
function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
function timeos() {
    var d = new Date();
    document.getElementById("fechachild").innerHTML = addZero(d.getHours())+":"+addZero(d.getMinutes())+":"+addZero(d.getSeconds());
	document.getElementById("fechachild2").innerHTML = addZero(d.getDate())+"/"+addZero(d.getMonth())+"/"+d.getFullYear();
}
//Calculadora
	var encalculadora = $("#calculo")
	var primeraeleccion = 0
	var type_operation = "None"
	var memory = 0
	document.querySelector("input").addEventListener("keypress", function (evt) {
    if (evt.which < 48 || evt.which > 57){evt.preventDefault();}});
    //Calculadora
    $("#calc-reinicio").on("click", function(){$("#calculo").val("");});
    $("#calc-sqrt").on("click", function(){$("#calculo").val(Math.sqrt($("#calculo").val()))});
    $("#calc-fact").on("click",function(){
    	if (encalculadora.val() == 0){
    		encalculadora.val(1);
    	}
    	else if(encalculadora.val() < 0){
    		encalculadora.animate({backgroundColor: "red"}, 240, function(){
    			encalculadora.val("");
    			encalculadora.animate({backgroundColor: localStorage.backgroundrcolor}, 100);
    		});
    	}
    	else{
    	for(var i = encalculadora.val() - 1 ; i > 0; i--){
			encalculadora.val(encalculadora.val() * i);
		}
		}
    });
    $("#calc-memget").on("click", function(){
    	memory = encalculadora.val();
    	encalculadora.animate({backgroundColor: "lime"}, 240, function(){
    			encalculadora.val("");
    			encalculadora.animate({backgroundColor: localStorage.backgroundrcolor}, 100);
    });
    });
    $("#calc-memset").on("click", function(){
    	encalculadora.val(memory);
    });
    $("#calc-pow").on("click", function(){primeraeleccion = encalculadora.val();encalculadora.val("");type_operation = "Pow"});
    $("#calc-sum").on("click", function(){primeraeleccion = encalculadora.val();encalculadora.val("");type_operation = "Sum"});
    $("#calc-res").on("click", function(){primeraeleccion = encalculadora.val();encalculadora.val("");type_operation = "Res"});
    $("#calc-div").on("click", function(){primeraeleccion = encalculadora.val();encalculadora.val("");type_operation = "Div"});
    $("#calc-mul").on("click", function(){primeraeleccion = encalculadora.val();encalculadora.val("");type_operation = "Mul";});
    $("#calc-sen").on("click",function(){encalculadora.val(Math.sin(encalculadora.val()));})
    $("#calc-cos").on("click",function(){encalculadora.val(Math.cos(encalculadora.val()));})
    $("#calc-tan").on("click",function(){encalculadora.val(Math.tan(encalculadora.val()));})
    $("#calc-finish").on("click",function(){
    	if(type_operation === "Pow"){encalculadora.val(Math.pow(primeraeleccion, encalculadora.val()));}
    	else if(type_operation === "Sum"){encalculadora.val(parseFloat(primeraeleccion) + parseFloat(encalculadora.val()))}
    	else if(type_operation === "Res"){encalculadora.val(parseFloat(primeraeleccion) - parseFloat(encalculadora.val()))}
    	else if(type_operation === "Div"){encalculadora.val(parseFloat(primeraeleccion) / parseFloat(encalculadora.val()))}
    	else if(type_operation === "Mul"){encalculadora.val(parseFloat(primeraeleccion) * parseFloat(encalculadora.val()))}
    });
    $("#calc-0").click(function(){$("#calculo").val($("#calculo").val() + "0");});
    $("#calc-1").click(function(){$("#calculo").val($("#calculo").val() + "1");});
    $("#calc-2").click(function(){$("#calculo").val($("#calculo").val() + "2");});
    $("#calc-3").click(function(){$("#calculo").val($("#calculo").val() + "3");});
    $("#calc-4").click(function(){$("#calculo").val($("#calculo").val() + "4");});
    $("#calc-5").click(function(){$("#calculo").val($("#calculo").val() + "5");});
    $("#calc-6").click(function(){$("#calculo").val($("#calculo").val() + "6");});
    $("#calc-7").click(function(){$("#calculo").val($("#calculo").val() + "7");});
    $("#calc-8").click(function(){$("#calculo").val($("#calculo").val() + "8");});
    $("#calc-9").click(function(){$("#calculo").val($("#calculo").val() + "9");});

//Personalizar escritorio
var desktopstat = 0;
$( "#desk-view-mosaic" ).on("click", function(){
      desktopstat = 1;
      $('#desktop-previ-img').css('background-repeat', 'repeat');
      $('#desktop-previ-img').css('background-size', '25px');
});
$( "#desk-view-normal" ).on("click", function(){
      desktopstat = 0;
      $('#desktop-previ-img').css('background-repeat', 'no-repeat');
      $('#desktop-previ-img').css('background-size', 'cover');
});
$("#desk-view-test").on("click", function(){
    $('#desktop-previ-img').css('background-image', 'url('+$('#desk-input-value').val()+')');
});
$("#desk-submit").on("click", function(){
if(desktopstat == 1){
    localStorage.backfiverepeat = 1;
      $('body').css('background-repeat', 'repeat');
      $('body').css('background-size', 'initial');
}
else{
    localStorage.backfiverepeat = 0;
    $('body').css('background-size', 'cover');
    $('body').css('background-repeat', 'no-repeat');
}
localStorage.backfive = $('#desk-input-value').val();
$('body').css('background-image', 'url(' + localStorage.backfive + ')');
});
//Close Box
$("#close-calculator").on("click", function(){$("#calculadora").css("display", "none");});
$("#close-guistyle").on("click", function(){$("#gui-style").css("display", "none");});
$("#close-boxcolor").on("click", function(){$("#box-color").css("display", "none");});
$("#close-trash").on("click", function(){$("#trash").css("display", "none");});
$("#close-desktopconf").on("click", function(){$("#desktop-config").css("display", "none");});

//Pruebas
$("#pruebacalculadora").on("dblclick", function(){$("#calculadora").css("display","block")});

$(document).keyup(function(e) {    
  if (e.keyCode == 46) { $("#trash").fadeIn("swing") }   //Boton secreto
});

setInterval(timeos, 1000);
})