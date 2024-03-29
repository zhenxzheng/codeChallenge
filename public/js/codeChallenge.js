'use strict'; //process.hrtime() node.js high resolution timer in nanoseconds
/*
 *
 *	Q1 Check for Overlapping bewteen 2 Rectangles
 *
 */
function checkOverlap(rect1, rect2){
	var start = new Date().getTime();
	console.time("overlap");

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
	
	console.timeEnd("overlap");
	var end = new Date().getTime();
	var time = end - start;
	if (time==0) time="< 0";
	$('#overlapTime').text(time);
}


/*
 *
 *	Q2 Reorder Array 
 *
 */
function reorderArray(array){
	var start = new Date().getTime();
	console.time("reorderArray");
		
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

	console.timeEnd("reorderArray");
	var end = new Date().getTime();
	var time = end - start;
	if (time==0) time="< 0";
	$('#reorderTime').text(time);
}


/*
 *
 *	Q3 Find Concatenation Word
 *
 */
function findConcatenation(wordArray){
	var start = new Date().getTime();
	console.time("concatenation");

		//sort from longest String to shortest
		wordArray.sort(function(a, b){
		  return b.length - a.length;
		});

		var highest=0;
		var concatenation=[];

		//make all the words RegEx pattern and find the highest match count
		for(var i=0;i<wordArray.length;i++){
			var counter=0;	//keep track of number of matches
			for (var j=i;j<wordArray.length-1;j++){
				var word = new RegExp(wordArray[j+1],"g");
				var match = wordArray[i].match(word);
				if (match) counter=counter+1;
			}
			//update higher count and longest concatenation word
			if(counter>highest){
				highest=counter;
				concatenation=[wordArray[i]];
			}
			//handle duplicates and save them as well
			else if(counter==highest){
				concatenation.push(wordArray[i]);
			}
		}
		$('#concatenation').text("["+concatenation.join(", ")+"]");

	console.timeEnd("concatenation");
	var end = new Date().getTime();
	var time = end - start;
	if (time==0) time="< 0";
	$('#concatenationTime').text(time);
}