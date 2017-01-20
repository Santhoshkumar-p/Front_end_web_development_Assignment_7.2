function findSum(){
	 sum=0;
	for(var i=0;i<arguments.length;i++){
		sum+=parseInt(arguments[i]);
		}
	return sum;
	}
var sum;

console.log("the sum is = "+findSum("1","2","3"));
console.log("the sum is = "+findSum("1","2","3","4","5","6","7","8","9","10"));
