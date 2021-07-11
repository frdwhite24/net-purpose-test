type Constraints = {
  max: number,
  min: number,
}

type Team = {
  name: string;
  points: number;
}

type Results = {
  promote: Team[],
  relegate: Team[]
}

const divisionConstraints: Constraints = {
  max: 16,
  min: 2
}

const checkDivisionSize = (division: Team[]) => {
  if (
    division.length < divisionConstraints.min ||
    division.length > divisionConstraints.max
  ) {
    console.error(`Division size falls outside the limit of ${divisionConstraints.min} to ${divisionConstraints.max}.`)
  }
}

const checkNSize = (length: number, n: number) => {
  if (n > length / 2) {
    console.error(`Top ${n} and bottom ${n} teams will cause overlap for a division of ${length} teams, try again with a smaller value for n.`)
  }
}

const checkTeamPoints = (division: Team[]) => {
  const invalidPoints: Team[] = []
  division.forEach(team => {
    if (team.points < 0) {
      console.error
      invalidPoints.push(team)
    }
  })

  if (invalidPoints.length > 0) {
    console.error(`The following teams have invalid negative scores: ${invalidPoints.map(team => team.name)}`)
  }
}

const getTeamNames = (teams: Team[]): string => {
  // I would use the new replaceAll method but the current setup doesn't
  // allow it, so i'm going with what works here
  return `${teams.map(team => team.name)}`.split(',').join('\n')
}

const sortDescending = (division: Team[]) => {
  division.sort((a, b) => {
    return b.points - a.points
  })
}

const getMovingTeams = (division: Team[], n: number): Results => {
  return {
    promote: division.slice(0, n),
    relegate: division.slice(-n)
  }
}

const formatResults = (results: Results): string => {
  return `Promote:
${getTeamNames(results.promote)}

Relegate:
${getTeamNames(results.relegate)}`
}

export const getResults = (division: Team[], n: number) => {
  // I'd definitely add tests to check all these validation steps but in the
  // interest of time i've left them out.
  checkDivisionSize(division)
  checkNSize(division.length, n)
  checkTeamPoints(division)

  sortDescending(division)
  const results: Results = getMovingTeams(division, n)
  return formatResults(results)
};

