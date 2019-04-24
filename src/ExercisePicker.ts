import Exercise from "./Exercise";

export default class ExercisePicker {
	constructor(exercises: Array<any>) {

	}

	static getRandom(): Exercise {
		return new Exercise("Test");
	}
}
