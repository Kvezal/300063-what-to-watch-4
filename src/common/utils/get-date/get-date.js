const Months = [
  `January`,
  `February`,
  `March`,
  `April`,
  `May`,
  `June`,
  `Jule`,
  `August`,
  `September`,
  `October`,
  `November`,
  `December`
];

const getDate = (timeStamp) => {
  const date = new Date(timeStamp);
  const day = date.getDate();
  const month = Months[date.getMonth()];
  const year = date.getFullYear();
  return `${month} ${day}, ${year}`;
};

export default getDate;
