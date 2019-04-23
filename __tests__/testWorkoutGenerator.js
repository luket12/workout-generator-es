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

describe('The workout generator', () => {
  let workoutSets = 30;
  let setTime = 60;
  const workoutGenerator = new WorkoutGenerator(workoutSets, setTime);


  test('can set the correct set total and set times', () => {
    expect(workoutGenerator.getWorkoutSetTime()).toEqual(60);
    expect(workoutGenerator.getWorkoutSets()).toEqual(30);
  });

  test('can set the expected workout start & end times', () => {
    // The start workout time should be at the next 10 minute interval and end 30 minutes later
    expect(workoutGenerator.startTime).toEqual(new Date(1546344600000));
    expect(workoutGenerator.endTime).toEqual(new Date(1546346400000));
  });

// Come dn

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

    // Get a collection of indexes to compare in both workouts
    let setCollection = getWorkoutSetComparisonIndexes(workoutSets);

    // Find the number of matching sets from both workouts, if every index matches then it's not being randomised
    let matches = setCollection.filter((item, index) => {
        return workoutA[index] === workoutB[index];
    });

    expect(matches.length).toBeLessThan(setCollection.length);

    // console.log("Set collection: ", setCollection.length);
    // console.log("matches: " + matches.length);
  });
});

function getRandomArbitrary(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

function getWorkoutSetComparisonIndexes(workoutSets) {
    return Array.apply(null, Array(getRandomArbitrary(3,6)))
        .map(() => {
            return getRandomArbitrary(1, workoutSets);
        });
}
