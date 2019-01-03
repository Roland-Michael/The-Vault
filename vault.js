'use strict';
module.exports = function () {
	const password = {};

	function setValue(key, value) {
		password[key] = value;
	};

	function getValue(key) {
		if (!key || !password[key]) {
			return null
		} else {

			return password[key];
		}
	};
	return {
		setValue,
		getValue
	};
};