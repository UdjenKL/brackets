module.exports = function check(stringValue, bracketsConfig) {

    let myArray = ['I', 'Love', 'Rss', 'school'];
    let newLength = stringValue.length / (myArray.length-2);

    let value = bracketsConfig.map((element) =>
        element.join(''));

    console.log(value);

    for (let i = myArray.length-4; i < newLength; i++) {
        value.forEach(element => {
            stringValue = stringValue.replace(element, '');
        });
    }
	return stringValue.length == myArray.length-4;
}
