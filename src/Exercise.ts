"use strict";

export default class Exercise {
	private _exerciseName: String;
	private _setNumber: Number;

		constructor(exerciseName: String, setNumber: Number = 0) {
			this._exerciseName = exerciseName;
			this._setNumber = setNumber;
		}

		get setNumber(): Number {
			return this._setNumber;
		}

		set setNumber(value: Number) {
			this._setNumber = value;
		}

		get exerciseName(): String {
			return this._exerciseName;
		}

		set exerciseName(value: String) {
			this._exerciseName = value;
		}
}
