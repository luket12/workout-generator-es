"use strict";

export default class Exercise {
	private _name: String;
	private _setNumber: Number;

	constructor(name: String) {
		this._name = name;
	}

	get setNumber(): Number {
		return this._setNumber;
	}

	set setNumber(value: Number) {
		this._setNumber = value;
	}

	get name(): String {
		return this._name;
	}

	set name(value: String) {
		this._name = value;
	}
}
