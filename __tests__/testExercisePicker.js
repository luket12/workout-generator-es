import ExercisePicker from "../src/ExercisePicker";
import Exercise from "../src/Exercise";
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
      },
      {
         "name": "Bench",
         "type": "Weight"
      },
      {
         "name": "Dumbell",
         "type": "Weight"
      }
   ];
   const exercisePicker = new ExercisePicker(exercises);


   test('can pick a random exercise', () => {
      // Create a set of 4 workout sets
      let workoutSetsA = Array.apply(null, Array(4)).map(() => {
         return new Exercise(exercisePicker.pickExercise().name);
      });

      // Create another set of 4 workout sets
      let workoutSetsB = Array.apply(null, Array(4)).map(() => {
         return new Exercise(exercisePicker.pickExercise().name);
      });

      // Verify they dont all match, must be randomising them
      let matches = workoutSetsA.filter((item, index) => {
         return workoutSetsA[index].name === workoutSetsB[index].name;
      });

      expect(matches.length).toBeLessThan(workoutSetsA.length);
      expect(matches.length).toBeLessThan(workoutSetsB.length);
   });

   test('does not allow handstands twice in a row', () => {
      // Create some workout sets
      let workoutSetsA = [
         new WorkoutSet(1, new Exercise("Squats")),
         new WorkoutSet(2, new Exercise("Deadlift")),
         new WorkoutSet(3, new Exercise("Bench")),
         new WorkoutSet(4, new Exercise("Handstand")),
      ];

      let workoutSetsB = [
         new WorkoutSet(1, new Exercise("Handstand")),
         new WorkoutSet(2, new Exercise("Bench Press")),
         new WorkoutSet(3, new Exercise("Squats")),
         new WorkoutSet(4, new Exercise("Deadlift"))
      ];

      // Keep getting random exercises up to 100 times, break the loop returning false when the exercise is ever handstand
      let handstandFoundA = false;
      let handstandFoundB = false;

      for (let i = 0; i < 100; i++) {
         let nextExerciseA = exercisePicker.getRandom(5, workoutSetsA);
         let nextExerciseB = exercisePicker.getRandom(5, workoutSetsB);

         console.log(`Exercise: ${nextExerciseA.name} iteration: ${i}`);

         if (nextExerciseA.name === "Handstand") {
            handstandFoundA = true;
            break;
         }

         if (nextExerciseB.name === "Handstand") {
            handstandFoundB = true;
         }
      }

      expect(handstandFoundA).toBe(false);
      expect(handstandFoundB).toBe(true);
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
