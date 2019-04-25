"use strict";

export default class Exercise {
	private _name: String;
	private _type: String;

	constructor(name: String, type: String) {
		this._name = name;
		this._type = type;
	}

	get type(): String {
		return this._type;
	}

	set type(value: String) {
		this._type = value;
	}

	get name(): String {
		return this._name;
	}

	set name(value: String) {
		this._name = value;
	}
}
