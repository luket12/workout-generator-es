import ExercisePicker from "../src/ExercisePicker";
import WorkoutSet from "../src/WorkoutSet";

describe('The exercise picker', () => {
   const exercises = [
      {
         "name": "Handstand",
         "type": "Normal"
      },
      {
         "name": "Jogging",
         "type": "Cardio"
      },
      {
         "name": "Sprints",
         "type": "Cardio"
      },
      {
         "name": "Squats",
         "type": "Weight"
      }
   ];
   const exercisePicker = new ExercisePicker(exercises);


   test('can pick a random exercise', () => {
      // Create a set of 4 workout sets
      let workoutSetsA = Array.apply(null, Array(4)).map(() => {
         return ExercisePicker.getRandom();
      });

      // Create another set of 4 workout sets
      let workoutSetsB = Array.apply(null, Array(4)).map(() => {
         return ExercisePicker.getRandom();
      });

      // Verify they dont all match, must be randomising them
      let matches = workoutSetsA.filter((item, index) => {
         return workoutSetsA[index].exerciseName === workoutSetsB[index].exerciseName;
      });

      expect(matches.length).toBeLessThan(workoutSetsA.length);
      expect(matches.length).toBeLessThan(workoutSetsB.length);
   });

   test('does not allow handstands twice in a row', () => {
      // Create exercises

      // Create some workout sets

      // Find each workout set which has handstands

      // Check the next workout set is definitely not a handstand also
   });

   test('does not allow cardio exercises twice in a row',() => {
      // Create exercises

      // Create some workout sets

      // Find each workout set which has handstands

      // Check the next workout set is definitely not cardio also
   });

   test('beginner have 4 breaks, any other user have 2', () => {
      // Create some exercises

      // Create a lot of workout sets

      // Count the number of breaks are equal to 4 for beginners

      // Count the number of breaks for other are 2
   });
});
