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

   test('does not allow any chosen exercise twice in a row', () => {
      let disallowedExercises = [['Handstand']];

      let workoutSetsA = [
         new WorkoutSet(1, new Exercise("Squats")),
         new WorkoutSet(2, new Exercise("Deadlift")),
         new WorkoutSet(3, new Exercise("Bench")),
         new WorkoutSet(4, new Exercise("Handstand")),
      ];

      let workoutSetsB = [
         new WorkoutSet(1, new Exercise("Squats")),
         new WorkoutSet(2, new Exercise("Deadlift")),
         new WorkoutSet(3, new Exercise("Bench")),
         new WorkoutSet(4, new Exercise("Squats")),
      ];

      let sameExerciseFoundInDatasetA = false;
      let sameExerciseFoundInDatasetB = false;

      // Ensure the disallowing works for multiple difference exercises
      disallowedExercises.forEach((disallowedExercise) => {
         // Keep getting random exercises up to 100 times, find expected random results from both use cases
         for (let i = 0; i < 100; i++) {
            let nextExerciseA = exercisePicker.pickExercise(workoutSetsA, 5, disallowedExercise, []);

            let previousExerciseA = workoutSetsA[workoutSetsA.length - 1].exercise;
            let previousExerciseB = workoutSetsB[workoutSetsA.length - 1].exercise;

            // Use case 1. Should not find the same exercise when it's disallowed
            if (nextExerciseA.name === previousExerciseA.name) {
               sameExerciseFoundInDatasetA = true;
               break;
            }

            // Use case 2. Should be able to find the same exercise if the previous set wasn't the same
            if (nextExerciseA.name === previousExerciseB.name) {
               sameExerciseFoundInDatasetB = true;
            }
         }

         expect(sameExerciseFoundInDatasetA).toBe(false);
         expect(sameExerciseFoundInDatasetB).toBe(true);
      });
   });

   test('does not allow exercises of the same type twice in a row',() => {
      let disallowedExerciseTypes = [['Cardio']];

      // Create some workout sets
      let workoutSetsA = [
         new WorkoutSet(1, new Exercise('Bench Press', 'Weight')),
         new WorkoutSet(2, new Exercise('Squat', 'Weight')),
         new WorkoutSet(3, new Exercise('Jogging', 'Cardio')),
      ];

      let workoutSetsB = [
         new WorkoutSet(2, new Exercise('Bench Press', 'Weight')),
         new WorkoutSet(3, new Exercise('Jogging', 'Cardio')),
         new WorkoutSet(4, new Exercise('Jumping Jacks', 'Fitness'))
      ];

      disallowedExerciseTypes.forEach((exerciseType) => {
         let duplicateExerciseTypeFoundDatasetA = false;
         let duplicateExerciseTypeFoundDatasetB = false;

         for (let i = 0; i < 100; i++) {
            // Pick new exercise 100 times, none of those should be the same type if it's working correctly
            let newExerciseDatasetA = exercisePicker.pickExercise(workoutSetsA, 4, [], exerciseType);

            // Get the latest workout set type
            let previousSetDatasetA = workoutSetsA[workoutSetsA.length - 1].exercise;
            let previousSetDatasetB = workoutSetsB[workoutSetsB.length - 1].exercise;

            if (newExerciseDatasetA.type === previousSetDatasetA.type) {
               duplicateExerciseTypeFoundDatasetA = true;
               break;
            }

            if (newExerciseDatasetA.type === previousSetDatasetB.type) {
               duplicateExerciseTypeFoundDatasetB = true;
               break;
            }
         }

         expect(duplicateExerciseTypeFoundDatasetA).toEqual(false);
         expect(duplicateExerciseTypeFoundDatasetB).toEqual(false);
      });
   });

   test('beginner have 4 breaks, any other user have 2', () => {
      // Create some exercises

      // Create a lot of workout sets

      // Count the number of breaks are equal to 4 for beginners

      // Count the number of breaks for other are 2
   });
});
