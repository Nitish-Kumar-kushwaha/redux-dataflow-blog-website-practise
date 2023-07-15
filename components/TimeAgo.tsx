import { parseISO, formatDistanceToNow } from "date-fns";

const TimeAgo = ({ timestamp }: { timestamp: Date }) => {
  let timeAgo = " ";
  if (timestamp) {
    const date = timestamp;
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }
  return (
    <span>
      &nbsp;<i>{timeAgo}</i>
    </span>
  );
};

export default TimeAgo;
