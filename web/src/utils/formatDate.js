import { format, parseISO } from 'date-fns';

export default function formatDate(date) {
  if (date) {
    return format(parseISO(date), 'dd/MM/yyyy');
  }

  return null;
}
