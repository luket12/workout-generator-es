'use strict';

// This class generates a workout based on the number of sets and set time
export default class WorkoutGenerator {

    constructor(workoutSets, workoutSetTime) {
      this._workoutSets = workoutSets;
      this._workoutSetTime = workoutSetTime;
    }

    getWorkoutSets() {
      return this._workoutSets;
    }

    getWorkoutSetTime() {
      return this._workoutSetTime;
    }
}
