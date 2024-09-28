function Xor (key)
{
	this.key = key;
}

Xor.prototype.encode = function (input)
{
	let output = '';

	for (let i = 0; i < input.length; ++i) {
		const hexInput = input.charCodeAt(i);
		const hexOutput = hexInput ^ this.key;

		output += this.fromHex(hexOutput);
	}

	return output;
}

Xor.prototype.decode = function (input)
{
	let output = ''; 

	for (let i = 0; i < input.length; i += 2) {
		const hexInput = this.toHex(input, i);
		const hexOutput = hexInput ^ this.key;

		output += String.fromCharCode(hexOutput);
    }

	return output;
}

Xor.prototype.fromHex = function (hex)
{
	let text = hex.toString(16);

	if (hex < 16) {
		text = '0' + text;
	}

	return text;
}

Xor.prototype.toHex = function (text, i)
{
	const sequence = text.substr(i, 2);

	return parseInt(sequence, 16);
}
