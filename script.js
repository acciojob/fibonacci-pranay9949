function fibonacci(num) {
// your code here
	let n1=0;
	let n2=1;
	let i=3;
	let n3;
	if(num==1){
		return 0;
	}
	if(num==2){
		return 1;
		
	}
	while(i<=num){
		n3=n1+n2;
		n1=n2;
		n2=n3;
		i++;
	}
	return n3;
	
}

module.exports = fibonacci;
