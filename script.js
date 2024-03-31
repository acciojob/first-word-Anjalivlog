function firstWord(s) {
  // your code here
	let str = "";
	for (let i = 0; i < s.length; i++) {
		if (s[i] != " ") {
			str.push(s[i]);
		} else if (s[i] == " ") {
			return str;
		} 
	}
	return str;
}

// Do not change the code below

// const s = prompt("Enter String:");
// alert(firstWord(s));
