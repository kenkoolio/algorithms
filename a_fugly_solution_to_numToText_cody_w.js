function numToText(num){
	var output = '';
	var ones = {
		'1': 'one',
		'2' : 'two',
		'3' : 'three',
		'4' : 'four',
		'5' : 'five',
		'6' : 'six',
		'7' : 'seven',
		'8' : 'eight',
		'9' : 'nine',
	};
	var tens = {
		'1': 'ten',
		'2' : 'twenty',
		'3' : 'thirty',
		'4' : 'fourty',
		'5' : 'fifty',
		'6' : 'sixty',
		'7' : 'seventy',
		'8' : 'eighty',
		'9' : 'ninety',
	};
	var hundreds = {
		'1': 'one hundred',
		'2' : 'two hundred',
		'3' : 'three hundred',
		'4' : 'four hundred',
		'5' : 'five hundred',
		'6' : 'six hundred',
		'7' : 'seven hundred',
		'8' : 'eight hundred',
		'9' : 'nine hundred',
	}
	var teens = {
		'1': 'eleven',
		'2' : 'twelve',
		'3' : 'thirteen',
		'4' : 'fourteen',
		'5' : 'fifteen',
		'6' : 'sixteen',
		'7' : 'seventeen',
		'8' : 'eighteen',
		'9' : 'nineteen',
	};
	var library = [ones, tens, hundreds];
	var places = ['', ' thousand ', ' million ', ' billion ',' trillion ']
	var num = breakIntoThrees(num);
	for(let i = 0; i < num.length; i++){
		output = threeToText(num[i], library, teens) + places[i] + output;
	}
	return output;
}

function breakIntoThrees(num){
	var output = [];
	num = num.toString();
	while(num.length > 3){
		output.push(num.slice(-3))
		num = num.slice(0, num.length - 3);
	}
	output.push(num);
	return output;
}

function threeToText(arr, library, teens){
	var output = ''
	var length = arr.length;
	let j = 0;
	for(let i = length - 1; i > -1; i--){
		if(i == length - 1 && arr[length - 2] == '1'){
			output = teens[arr[i]];
			j += 2;
			i -= 2;
		}
		if(arr[i] in library[j]){
			output = library[j][arr[i]] + ' ' + output;
		}
		j++;
	}
	return output;
}

console.log(numToText(1200216));