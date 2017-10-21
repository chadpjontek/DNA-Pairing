function pairElement(str) {
	// declare vars
	var strArr = [];
	var dnaArr = [];
	// split str into array
	strArr = str.split('');
	// evaluate each character and return pair
	for (var i = 0; i < str.length; i++) {
		switch (str[i]) {
			case 'A':
				dnaArr.push(['A', 'T']);
				break;
			case 'T':
				dnaArr.push(['T', 'A']);
				break;
			case 'C':
				dnaArr.push(['C', 'G']);
				break;
			case 'G':
				dnaArr.push(['G', 'C']);
		}
	}
	return dnaArr;
}
// Examples
pairElement('GCG'); // returns [["G", "C"], ["C","G"],["G", "C"]]
pairElement("TTGAG"); // returns [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]
pairElement("CTCTA"); // returns [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]