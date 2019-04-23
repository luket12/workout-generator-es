'use strict';

import Workout from './Workout';
import WorkoutSet from './WorkoutSet';
import Exercise from "./Exercise";

// This class generates a workout based on the number of sets and set time
export default class WorkoutGenerator {
    readonly totalSets: number;
    readonly workoutSetLength: number;
    private startTime: Date;
    private endTime: Date;
    workouts: Array<Workout>;

    constructor(totalSets: number, workoutSetLength: number) {
      this.totalSets = totalSets;
      this.workoutSetLength = workoutSetLength;
      this.setWorkoutTimes();
    }

    getWorkouts(): Array<Workout> {
      return this.workouts;
    }

    getWorkoutSets() {
      return this.totalSets;
    }

    getWorkoutSetTime() {
      return this.workoutSetLength;
    }

    setWorkoutTimes() {
      let startTimestamp = WorkoutGenerator.roundTimeNearestTenMins(new Date()).getTime();

      let endTimestamp = startTimestamp + ((this.totalSets * this.workoutSetLength) * 1000);

      this.startTime = new Date(startTimestamp);
      this.endTime = new Date(endTimestamp);
    }

    static roundTimeNearestTenMins(time: Date) {
      var timeToReturn = new Date(time);

      timeToReturn.setMilliseconds(Math.round(time.getMilliseconds() / 1000) * 1000);
      timeToReturn.setSeconds(Math.round(timeToReturn.getSeconds() / 60) * 60);
      timeToReturn.setMinutes(Math.round(timeToReturn.getMinutes() / 10) * 10);
      return timeToReturn;
    }

    generate(users: Array<any>, exercises: Array<any>): Workout {
      this.workouts = [];

      // for every user we need to create a workout
      for (let i = 0; i < users.length; i++) {
        let workoutSets = [];

        for (let setNumber = 0; setNumber < this.getWorkoutSets(); setNumber++) {
          workoutSets.push(new WorkoutSet(setNumber+1, new Exercise()));
        }

        let workout = this.workouts.push(new Workout(users[i].name, workoutSets));

        // Return the generated workout
        return this.workouts[workout-1];
      }
    }
}
