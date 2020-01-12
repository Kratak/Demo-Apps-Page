import subDays from 'date-fns/subDays';
import format from 'date-fns/format';
import { ISO8601dateFormat } from '../constans/dateFormat';

const sevenDaysRangeISO8601 = (date: Date): string => {
  const startDate = format(subDays(date, 7), ISO8601dateFormat);
  const endDate = format(date, ISO8601dateFormat);

  return `${startDate}/${endDate}`;
};

export{ sevenDaysRangeISO8601};
