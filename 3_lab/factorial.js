self.onmessage = factorial;

function factorial(event) {
	var num = parseInt(event.data)
	var fact = 1;

	while (num > 1) {
		fact = fact * num;
		num -= 1;
	}
	postMessage(fact);
}
