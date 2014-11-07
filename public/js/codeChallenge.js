'use strict';
/*
 *
 *	Q1 Check for Overlapping bewteen 2 Rectangles
 *
 */
function checkOverlap(rect1, rect2){
	var A1x,A1y,A3x,A3y;	//the two essential points of Rectangle 1
	var B1x,B1y,B3x,B3y;	//the two essential points of Rectangle 2

	A1x = parseInt($(rect1).attr("x"));
	A1y = parseInt($(rect1).attr("y"));
	A3x = parseInt($(rect1).attr("x")) + parseInt($(rect1).attr("width"));
	A3y = parseInt($(rect1).attr("y")) + parseInt($(rect1).attr("height"));

	B1x = parseInt($(rect2).attr("x"));
	B1y = parseInt($(rect2).attr("y"));
	B3x = parseInt($(rect2).attr("x")) + parseInt($(rect2).attr("width"));
	B3y = parseInt($(rect2).attr("y")) + parseInt($(rect2).attr("height"));

	if(!(A1x>B3x||A3x<B1x||A3y<B1y||A1y>B3y)) $('#overlap').removeClass().addClass("red large").text("Overlapping");
	else {$('#overlap').removeClass().addClass("green large").text("No overlapping");}
}

/*
 *
 *	Q2 Reorder Array 
 *
 */
function reorderArray(array){
	var newArr = [];
	// var N = array[array.length-1].split("_");
	// N = parseInt(N[1]);
	// var nA = array.length/N;

	for (var i=0; i<N; i++){
		for (var j=0; j<nA;j++){
			var index = j*N+i;
			newArr.push(array[index])
		}
	}
	$('#Q2newArray').text("["+newArr+"]");
}

/*
 *
 *	Q3 Find Concatenation Word
 *
 */
function findConcatenation(wordArray){
	console.log(wordArray);
	var match;
	var highest=0;
	var concatenation=[];

	wordArray.forEach(function(a){
		var counter=0;
		wordArray.forEach(function(b){
			var word = new RegExp(b,"g");
			match = a.match(b)
			console.log(match);
			if (match) counter=counter+1;
		})
		if(counter>highest){
			highest=counter;
			concatenation.push(a);
		}
	})
	$('#concatenation').text("["+concatenation[concatenation.length-1]+"]");
}