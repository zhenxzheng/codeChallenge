'use strict';
/*
 *
 *	Essential Variables
 *
 */
var h = $(window).height()
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
 *		Button Click Function
 *
 */
// check overlap
function overlapFunction(){
	checkOverlap($('#rectangle1'),$('#rectangle2'));
}
// reorder array
function ArrayFunction(){
	if (nA&&N){
		reorderArray(array);
	}
	else{
		$('#Q2newArray').text("[]");
	}
}
// find concatenation
function concatenationFunction(){
	findConcatenation(wordArray);
}

// helper function to set up Array content for Q2
function setupArray(nA,N){
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

/*
 *
 *		Setup Page and Listeners
 *
 */
function initializePage(){
	$('#main').css({"height":h, "opacity":"1"});
	$('svg').css({"width":"100%","height":"24vw","background":"#777"});
	$('#rectangle1').css({"fill":"red","opacity":"0.5"});
	$('#rectangle2').css({"fill":"green","opacity":"0.5"});

	// input for rectangles
	$('#x1 input').focusout(function(){
		$('#rectangle1').attr("x",$(this).val());
	});
	$('#y1 input').focusout(function(){
		$('#rectangle1').attr("y",$(this).val());
	});
	$('#x2 input').focusout(function(){
		$('#rectangle2').attr("x",$(this).val());
	});
	$('#y2 input').focusout(function(){
		$('#rectangle2').attr("y",$(this).val());
	});
	$('#width1 input').focusout(function(){
		$('#rectangle1').attr("width",$(this).val());
	});
	$('#height1 input').focusout(function(){
		$('#rectangle1').attr("height",$(this).val());
	});
	$('#width2 input').focusout(function(){
		$('#rectangle2').attr("width",$(this).val());
	});
	$('#height2 input').focusout(function(){
		$('#rectangle2').attr("height",$(this).val());
	});


	$('#nA').focusout(function(){
		nA = parseInt($(this).val());
		setupArray(nA,N);
	})
	$('#N').focusout(function(){
		N = parseInt($(this).val());
		setupArray(nA,N);
	})

	$('#newArray').attr("value", wordArray);
	$('#newArray').focusout(function(){
		var temp = $(this).val();
		var pattern = /[ "\.]+/g;
		temp = temp.replace(pattern,"");
		var pattern = /,/g;
		temp = temp.replace(pattern,", ")
		wordArray = temp.split(",");
		$('#Q3array').text("["+wordArray+"]");
	})
}

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