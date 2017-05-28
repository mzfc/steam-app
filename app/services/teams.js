const teams = [
  { name: 'Team 1', members: 36 },
  { name: 'Team 2', members: 24 },
  { name: 'Team 3', members: 44 },
];

export const getTeams = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(teams);
    }, 1000);
  });
};

export const getTeamDetail = (teamId: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(teams[2]);
    }, 1000);
  });
};