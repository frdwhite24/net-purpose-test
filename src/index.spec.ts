import {getResults} from ".";

const givenDivision = [
  {
    name: "Rockets",
    points: 64,
  },
  {
    name: "Cardinals",
    points: 77,
  },
  {
    name: "Bruisers",
    points: 51,
  },
  {
    name: "Renegades",
    points: 37,
  },
  {
    name: "Porpoises",
    points: 52,
  },
];

test("returns one team to promote and one team to relegate", () => {
  const resultString = `Promote:
Cardinals

Relegate:
Renegades`;

  expect(getResults(givenDivision, 1)).toBe(resultString);
});

test("returns two teams to promote and two teams to relegate", () => {
  const resultString = `Promote:
Cardinals
Rockets

Relegate:
Bruisers
Renegades`;

  expect(getResults(givenDivision, 2)).toBe(resultString);
});
