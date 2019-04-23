"use strict";

import Exercise from './Exercise';

export default class WorkoutSet {
		private _setNumber: Number;
		private _exercise: Exercise;

		constructor(setNumber: Number, exercise: Exercise) {
			this._setNumber = setNumber;
			this._exercise = exercise;
		}

		get setNumber(): Number {
			return this._setNumber;
		}

		set setNumber(value: Number) {
			this._setNumber = value;
		}

		get exercise(): Exercise {
			return this._exercise;
		}

		set exercise(value: Exercise) {
			this._exercise = value;
		}
}
