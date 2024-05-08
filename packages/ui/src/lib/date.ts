import { format, parse } from 'date-fns';
import { id } from 'date-fns/locale';

const DATE_FORMAT = {
  // Sabtu, 11 Februari 2022
  FULL_DATE_WITH_DAY: 'PPPP',
  /** 15 Agustus 2021 */
  FULL: 'dd MMMM yyyy',
  /** 11 Jan 2022 */
  DATE_WITH_SHORTENED_MONTH: 'd MMM yyyy',
  /** 15 Agustus 2021, 12:04:05 */
  FULL_WITH_TIME: 'dd MMMM yyyy, HH:mm:ss',
};

export function formatLocaleDate(
  date: Date,
  formatKey: keyof typeof DATE_FORMAT,
) {
  return format(date, DATE_FORMAT[formatKey], { locale: id });
}

/**
 * Convert Date object to API format
 * @returns date with format 'yyyy-MM-dd'
 */
export function formatDateForAPI(date: Date): string {
  return format(date, 'yyyy-MM-dd');
}

export function parseDateFromAPI(date: string): Date {
  return parse(date, 'yyyy-MM-dd', new Date());
}

export function parseDateTimeFromAPI(date: string): Date {
  return parse(date, 'yyyy-MM-dd HH:mm:ss', new Date());
}
