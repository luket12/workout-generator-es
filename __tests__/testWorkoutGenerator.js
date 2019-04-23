import WorkoutGenerator from '../src/WorkoutGenerator';
import Workout from '../src/Workout';

const fixedDate = new Date('2019-01-01T12:01:00');

beforeAll(() => {
  Date = class extends Date {
    constructor() {
      super();

      return fixedDate;
    }
  };
});

test('The workout generator set the correct set total and set times', () => {
  // Create a workout generator object
  const workoutGenerator = new WorkoutGenerator(30, 60);

  expect(workoutGenerator.getWorkoutSetTime()).toEqual(60);
  expect(workoutGenerator.getWorkoutSets()).toEqual(30);
});

test('The workout generator has the expected workout start & end times', () => {

  // Create a workout generator object
  const workoutGenerator = new WorkoutGenerator(30, 60);

  // The start workout time should be at the next 10 minute interval and end 30 minutes later
  expect(workoutGenerator.startTime).toEqual(new Date(1546344600000));
  expect(workoutGenerator.endTime).toEqual(new Date(1546346400000));
});

// Come dn

test('The workout generator has the expected number of exercise sets for a user', () => {
  let users = [
    {
      'name': 'Jon',
      'type': 'beginner'
    }
  ];

  let exercises = [
    {
      "name": "Handstands"
    }
  ];

  // create a workout generator object and generate the workout
  const workoutGenerator = new WorkoutGenerator(30, 60);

  workoutGenerator.generate(users, exercises);
  let workouts = workoutGenerator.getWorkouts();

  // Check that exercise sets have been created
  expect(workouts).toBeDefined();
  expect(workouts.length).toBeGreaterThanOrEqual(1);
  expect(workouts[0]).toBeInstanceOf(Workout);

  // The generated workout should contain at least one user with a name and either beginner or advanced type
  expect(workouts[0]).toMatchObject({
    _user: 'Jon',
    _workoutSets: []
  });

  // Check there are 30 sets for the workout
  expect(workouts[0].workoutSets.length).toEqual(30);
});

