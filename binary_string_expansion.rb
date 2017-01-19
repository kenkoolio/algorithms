function wrapper(str){
	var out = []
	rec2(str,out)
	return out
}

function rec2(str,output){
	var i = str.indexOf("?");
	if (i === -1){
		output.push(str)
		return
	}
	rec2(str.substring(0,i) + "0" + str.substring(i+1),output);
	rec2(str.slice(0,i) + "1" + str.slice(i+1),output);
}
console.log(wrapper("????"))