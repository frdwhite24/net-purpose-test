# Net Purpose coding challenge

## Setup

- Ensure node.js is installed
- Run `npm install` to install dependencies
- Run `npm test` to run the unit tests

## The task

**Given a number , _n_, find the _n_ highest and lowest scores in the given array.**
_This task should take you no longer than 15-30 minutes._

The Net Purpose Hockey League (NPHL) is now in season! At the end of the season, the top _n_ teams get promoted to the division above and the bottom _n_ teams get relegated to the division below.

The division results are provided as an array of teams, as follows:

```
[
  {
    "name": "Rockets",
    "points": 64,
  },
  {
    "name": "Cardinals",
    "points": 77,
  },
  {
    "name": "Bruisers",
    "points": 51,
  },
  {
    "name": "Renegades",
    "points": 37,
  },
  {
    "name": "Porpoises",
    "points": 52,
  }
]

```

Write a function that returns a multi-line string showing the teams that will be promoted and relegated using the format below.

For an _n_ value of 2, the results must be:

```
Promote:
[Highest scoring team]
[Second highest scoring team]

Relegate:
[Second lowest scoring team]
[Lowest scoring team]
```

For an _n_ value of 3, the results must be:

```
Promote:
[Highest scoring team]
[Second highest scoring team]
[Third highest scoring team]

Relegate:
[Third lowest scoring team]
[Second lowest scoring team]
[Lowest scoring team]
```

There are some finished unit tests in `src/index.spec.ts` to get you started.
There is an empty function in `src/index.ts` where you can write the implementation.

## Constraints

- There could be between 2 and 16 teams in a given division.
- A team always consists of a `name` string and a `points` integer, which is always positive or 0.
- If teams both in the top `n` and bottom `n` for the division, the promotion and relegation process will not work and the user must be notified of the problem.

## Tips

- We are interested in your implementation of the solution, not the unit test code. Please feel free to add unit tests to help with development though.
- We are looking for clean code, which is easy to read and free of code smells.

## Submitting the task

When you have completed the challenge, please upload your solution to GitHub, GitLab or similar. When you have done this, please share a link with us at dev-team@netpurpose.com.
If you have any problems, we can also accept the solution attached to an email.
