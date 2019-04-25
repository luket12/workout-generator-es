import Exercise from "./Exercise";
import WorkoutSet from "./WorkoutSet";

export default class ExercisePicker {
	private readonly _exercises: Array<any>;

	constructor(exercises: Array<any>) {
		this._exercises = exercises;
	}

	get exercises(): Array<any> {
		return this._exercises;
	}

	pickExercise(workoutSets: Array<WorkoutSet> = [], currentSet: Number = 0): Exercise {
		let randomExercise = this.getRandom();

		randomExercise = this.disallowDoubleHandstands(randomExercise, workoutSets, currentSet);

		return new Exercise(randomExercise.name);
	}
	
	getRandom() {
		let randomIndex = Math.floor(Math.random() * this.exercises.length);

		return this.exercises[randomIndex];
	}

	disallowDoubleHandstands(randomExercise: Exercise, workoutSets: Array<WorkoutSet> = [], currentSet: Number = 0) {
		// Check that it's a handstand exercise
		if (randomExercise.name === "Handstand") {

			// Check the previous workoutSet was not also a handstand
			// @ts-ignore
			let previousSet = workoutSets[currentSet-2];

			// Check the previous set was also a handstand
			if (previousSet.exercise.name === "Handstand") {
				// Change the random exercise until it's not a handstand
				while (randomExercise.name === "Handstand") {
					randomExercise = this.pickExercise(workoutSets, currentSet);
				}
			}
		}
		return randomExercise;
	}
}
