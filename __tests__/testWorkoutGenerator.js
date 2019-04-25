import WorkoutGenerator from '../src/WorkoutGenerator';
import Workout from '../src/Workout';

describe('The workout generator', () => {
  const mockedDate = new Date('2019-01-01T12:01:00');
  const originalDate = Date;
  global.Date = jest.fn(() => mockedDate);
  global.Date.setDate = originalDate.setDate;

  let workoutSets = 30;
  let setTime = 60;
  const workoutGenerator = new WorkoutGenerator(workoutSets, setTime);

  test('can set the correct set total and set times', () => {
    expect(workoutGenerator.getWorkoutSetTime()).toEqual(60);
    expect(workoutGenerator.getWorkoutSets()).toEqual(30);
  });

  test('can set the expected workout start & end times', () => {
    // The start workout time should be at the next 10 minute interval and end 30 minutes later
    expect(workoutGenerator.startTime).toEqual(new Date('2019-01-01T12:10:00'));
    expect(workoutGenerator.endTime).toEqual(new Date('2019-01-01T12:40:00'));
  });

  test('can set the expected number of exercise sets for a user', () => {
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

    workoutGenerator.generate(users, exercises);
    let workouts = workoutGenerator.getWorkouts();

    // Check that exercise sets have been created
    expect(workouts).toBeDefined();
    expect(workouts.length).toBeGreaterThanOrEqual(1);
    expect(workouts[0]).toBeInstanceOf(Workout);

    // The generated workout should contain at least one user with a name and either beginner or advanced type
    expect(workouts[0]).toMatchObject({
      _user: 'Jon',
    });

    // Check there are 30 sets for the workout
    expect(workouts[0].workoutSets.length).toEqual(30);
  });

  test('can generate workout sets with random exercises', () => {
    let users = [
      {
        'name': 'Jon',
        'type': 'beginner'
      }
    ];

    let exercises = [
      {
        "name": "Handstands"
      },
      {
        "name": "Push-ups"
      }
    ];

    // Generate two workouts
    let workoutA = workoutGenerator.generate(users, exercises);
    let workoutB = workoutGenerator.generate(users, exercises);

    // Get a random number of indexes between 0 and max sets to use for comparing each workout dataset
    let randomIndexes = getWorkoutSetComparisonIndexes(workoutSets);

    // Compare dataset A workout set name to workout dataset B name at every random index, if they are random they wont match
    let workoutIndexMatches = randomIndexes.filter((item) => {
      return workoutA.workoutSets[item].exercise.name === workoutB.workoutSets[item].exercise.name;
    });

    console.log("matches: " + workoutIndexMatches.length);
    expect(workoutIndexMatches.length).toBeLessThan(randomIndexes.length);
  });

  test('beginner have 4 breaks, any other user have 2', () => {
    // Create a lot of workout sets

    // Count the number of breaks are equal to 4 for beginners

    // Count the number of breaks for other are 2
  });
});

function getRandomArbitrary(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

function getWorkoutSetComparisonIndexes(workoutSets) {
  return Array.apply(null, Array(getRandomArbitrary(3,6)))
    .map(() => {
        return getRandomArbitrary(1, workoutSets - 1);
    });
}
