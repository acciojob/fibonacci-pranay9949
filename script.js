function fibonacci(num) {
// your code here
	let n1=0;
	let n2=1;
	let i=1;
	let n3;
	while(i<=num){
		n3=n1+n2;
		n1=n2;
		n2=n3;
	}
	return n3
	
}

module.exports = fibonacci;
