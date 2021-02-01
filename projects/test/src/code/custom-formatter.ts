import { TimeagoFormatter } from 'ngx-timeago';

export class CustomFormatter implements TimeagoFormatter {

  format(then: number): string {
    const now = Date.now();

    let totalUnits = Math.round(Math.abs(now - then) / 1000);

    const seconds = totalUnits % 60;
    totalUnits -= seconds;
    totalUnits /= 60;

    const minutes = totalUnits % 60;
    totalUnits -= minutes;
    totalUnits /= 60;

    let str = '';

    if (totalUnits > 0) {
      str += totalUnits + 'h ';
    }

    if (minutes > 0) {
      str += minutes + 'm ';
    }

    if (seconds > 0) {
      str += seconds + 's ';
    }

    return str;
  }

}
