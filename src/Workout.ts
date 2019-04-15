'use strict';

import WorkoutSet from './WorkoutSet';
import User from './User';

export default class Workout {
		private _user: User;
		private _workoutSets: Array<WorkoutSet>;

		get user(): User {
			return this._user;
		}

		set user(value: User) {
			this._user = value;
		}

		get workoutSets(): Array<WorkoutSet> {
			return this._workoutSets;
		}

		set workoutSets(value: Array<WorkoutSet>) {
			this._workoutSets = value;
		}
}
