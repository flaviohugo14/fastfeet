import { format } from 'date-fns';

export function dateInBrazilUTC(date) {
  return format(date, "yyyy'-'MM'-'dd'T'HH':00:00-00:00'");
}
