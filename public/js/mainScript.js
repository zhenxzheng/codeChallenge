'use strict';
/*
 *
 *	Essential Variables
 *
 */
var h = $(window).height();
var w = $(window).width();
var nA,N;
var array=[];
var wordArray=["hell", "hello", "foo", "hellobarfoo", "world", "foobar", "bar"];


/*
 *
 *		Functions for Page Ready 
 *
 */
$(document).ready(function(){
	initializePage();
});


/*
 *
 *		Main Calling Functions
 *
 */
//	Q1-check overlap
function overlapFunction(){
	if(Q1input()){
		checkOverlap($('#rectangle1'),$('#rectangle2'));
	}
}
//	Q2-reorder array
function arrayFunction(){
	if (nA&&N){
		reorderArray(array);
	}
	else{
		$('#Q2newArray').text("[]");
	}
}
//	Q3-find concatenation
function concatenationFunction(){
	findConcatenation(wordArray);
}


/*
 *
 *		Helper Functions
 *
 */
function Q1input(){
	if ($('#x1 input').val()==0 ||
		$('#x2 input').val()==0 ||
		$('#y1 input').val()==0 ||
		$('#y2 input').val()==0 ||
		$('#width1 input').val()==0 ||
		$('#width2 input').val()==0 ||
		$('#height1 input').val()==0 ||
		$('#height2 input').val()==0){
		return false;
	}
	else{
		return true
	}
}
// helper function to set up Array content for Q2
function setupArray(){
	nA = parseInt($('#nA').val());
	N = parseInt($('#N').val());
	var data="";
	var letter = "a";
	array = [];
	for(var i=0;i<nA;i++){
		for(var j=0;j<N;j++){
			data=" "+letter+"_"+(j*1+1);
			array.push(data);
		}
		letter = String.fromCharCode(letter.charCodeAt(0)+1);
	}
	$('#Q2array').text("["+array+"]");
}
// helper function to set up word array for Q3
function setupWordArray(){
	var temp = $('#newArray').val();
	var pattern = /[ "\.]+/g;
	temp = temp.replace(pattern,"");
	wordArray = temp.split(",");
	$('#Q3array').text("["+wordArray.join(", ")+"]");
}


/*
 *
 *		Setup Page and Listeners
 *
 */
function initializePage(){
	var h = $(window).height();
	var w = $(window).width();
  	$('#main').css("top",0);
	$('#main').css("height",h);
	$(window).resize(function(){
			w =$(window).width();
			h =$(window).height();
		  	$('#main').css("top",0);
			$('#main').css("height",h);
	});
	$('#main').css("opacity","1");
	$('svg').css({"width":"100%","height":"24vw","background":"#777"});
	$('#rectangle1').css({"fill":"red","opacity":"0.5"});
	$('#rectangle2').css({"fill":"green","opacity":"0.5"});

	//	Q1
	$('#x1 input').focusout(function(){
		$('#rectangle1').attr("x",$(this).val());
	});
	$('#y1 input').focusout(function(){
		$('#rectangle1').attr("y",$(this).val());
	});
	$('#width1 input').focusout(function(){
		$('#rectangle1').attr("width",$(this).val());
	});
	$('#height1 input').focusout(function(){
		$('#rectangle1').attr("height",$(this).val());
	});
	$('#x2 input').focusout(function(){
		$('#rectangle2').attr("x",$(this).val());
	});
	$('#y2 input').focusout(function(){
		$('#rectangle2').attr("y",$(this).val());
	});
	$('#width2 input').focusout(function(){
		$('#rectangle2').attr("width",$(this).val());
	});
	$('#height2 input').focusout(function(){
		$('#rectangle2').attr("height",$(this).val());
	});

	//	Q2
	$('#nA').focusout(function(){
		setupArray();
	})
	$('#N').focusout(function(){
		setupArray();
	})

	//	Q3
	$('#newArray').attr("value", wordArray);
	$('#newArray').change(function(){
		$('#concatenation').text("[]");
		setupWordArray();
	});
}


/*
 *
 *		Enter Press Listeners
 *
 */
//	Q1
$("#x1 input,#y1 input,#x2 input,#y2 input,#width1 input,#width2 input,#height1 input,#height2 input").keydown(function (e) {
    if (e.keyCode == 13) {
    	e.preventDefault();
    	$(this).focusout();
    	if (Q1input()){
    		overlapFunction();
    	}
    	else{
    		$('#overlap').empty();
    	}
    }
});
//	Q2
$("#nA, #N").keydown(function (e) {
    if (e.keyCode == 13) {
    	e.preventDefault();
		$(this).focusout();
	    arrayFunction();
    }
});
//	Q3
$("#newArray").keydown(function (e) {
    if (e.keyCode == 13) {
    	e.preventDefault();
    	$(this).blur();
        concatenationFunction();
        $(this).focus();
    }
});

// function canvasSetup(nA, N){
// 	$("#canvas").empty();
// 	var svgW = $("#canvas").width();
// 	var svgH = $("#canvas").height();
// 	var space = 5;
// 	var x = space;
// 	var total=nA*N;
// 	var dataWidth = (svgW-space)/total;

// 	var svg = d3.select("#canvas");
// 	for (var i=0;i<nA;i++){
// 		var color = getRandomColor();
// 		for (var j=0;j<N;j++){
// 			console.log(x)
// 			svg.append("rect")
// 				.attr("x",x)
// 				.attr("y",0)
// 				.attr("width", dataWidth-space)
// 				.attr("height",svgH/3)
// 				.attr("fill", color);
// 			svg.append("text")
// 				.text(j+1)
// 				.attr("x",x)
// 				.attr("y", svgH/3)
// 				.attr("fill","white")
// 				.attr("font-size",dataWidth);
// 			x = x+dataWidth;
// 		}
// 	}
// }
// function getRandomColor() {
//     var letters = '0123456789ABCDEF'.split('');
//     var color = '#';
//     for (var i = 0; i < 6; i++ ) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }