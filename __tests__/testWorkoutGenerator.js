import WorkoutGenerator from '../src/WorkoutGenerator';

test('The workout generator set the correct set total and set times', () => {
  // Create a workout generator object
  const workoutGenerator = new WorkoutGenerator(30, 60);

  expect(workoutGenerator.getWorkoutSetTime() === 60);
  expect(workoutGenerator.getWorkoutSets() === 30);
});

test('The workout generator has the expected workout start time', () => {
  // Create a workout generator object

  // The start workout time should be at the next 10 minute interval
});

test('The workout generator has the expected workout end time', () => {
  // Create a workout generator object

  // The workout end time should be the number of sets * set time, after the workout start time
});

// The workout generator is prefilled with users from json
test('The workout generator is pre-filled with users from the users json file', () => {
  // create a workout generator object

  // generate the workout

  // The generated workout should contain a non empty users array

  // The generated workout should contain at least one user with a name and either beginner or advanced type
});

// The workout generator is prefilled with exercises from json
test('The workout generator is pre-filled with users from the users json file', () => {
  // create a workout generator object

  // generate the workout

  // assert the generated workout object contains the expected values
});

test('The workout generator has the expected number of exercise sets for a user', () => {
  // Create a workout generator object with 30 sets

  // The object should have 30 sets
});

