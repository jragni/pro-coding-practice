function allDivisors(num) {
	if(!Number.isInteger(num) || num <= 0){
		return "Please provide a positive, whole number."
	}
	let divisors = [];
	for (let i = 1 ;i <= num; i++) {
		if (num % i === 0) { divisors.push(i) }
	}
	return divisors;
}