'use strict';

// This class generates a workout based on the number of sets and set time
export default class WorkoutGenerator {
    readonly workoutSets: number;
    readonly workoutSetTime: number;
    private startTime: Date;
    private endTime: Date;

    constructor(workoutSets: number, workoutSetTime: number) {
      this.workoutSets = workoutSets;
      this.workoutSetTime = workoutSetTime;
      this.setWorkoutTimes();
    }

    getWorkoutSets() {
      return this.workoutSets;
    }

    getWorkoutSetTime() {
      return this.workoutSetTime;
    }

    setWorkoutTimes() {
      let startTimestamp = this.roundTimeNearestTenMins(new Date()).getTime();

      let endTimestamp = startTimestamp + ((this.workoutSets * this.workoutSetTime) * 1000);

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
}
