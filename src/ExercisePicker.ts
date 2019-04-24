import Exercise from "./Exercise";

export default class ExercisePicker {
	private _exercises: Array<any>;

	constructor(exercises: Array<any>) {
		this._exercises = exercises;
	}

	get exercises(): Array<any> {
		return this._exercises;
	}

	getRandom(): Exercise {
		let randomIndex = Math.floor(Math.random() * this.exercises.length);

		let theExercise = this.exercises[randomIndex];

		return new Exercise(theExercise.name);
	}
}
