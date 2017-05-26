const teams = [
  { name: 'Team 1', members: 36 },
  { name: 'Team 2', members: 24 },
  { name: 'Team 3', members: 44 },
];

export default () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(teams);
    }, 3000);
  });
};