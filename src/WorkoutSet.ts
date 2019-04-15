"use strict";

import Exercise from './Exercise';

export default class WorkoutSet {
		private _setNumber: Number;
		private _exercise: Exercise;

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
