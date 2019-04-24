import Exercise from "./Exercise";

export default class ExercisePicker {
	private _exercises: Array<any>;

	constructor(exercises: Array<any>) {
		this._exercises = exercises;
	}

	getRandom(): Exercise {
		return new Exercise("Test");
	}
}
