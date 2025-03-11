export default function Date({ dateString, className }) {
  const splitDate = dateString.split("/");
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = months[splitDate[0] - 1];
  const day = splitDate[1];
  const year = 20 + splitDate[2];
  const date = `${month} ${day}, ${year}`;
  return <span className={className}>{date}</span>;
}
