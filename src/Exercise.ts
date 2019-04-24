"use strict";

export default class Exercise {
	private _exerciseName: String;
	private _setNumber: Number;

		constructor(exerciseName: String) {
			this._exerciseName = exerciseName;
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
