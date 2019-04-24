"use strict";

export default class Exercise {
		constructor(exerciseName: String) {
			this._exerciseName = exerciseName;
		}

		private _exerciseName: String;

		get exerciseName(): String {
			return this._exerciseName;
		}

		set exerciseName(value: String) {
			this._exerciseName = value;
		}
}
