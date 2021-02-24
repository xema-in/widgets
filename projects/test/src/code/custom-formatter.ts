import { TimeagoFormatter } from 'ngx-timeago';

export class CustomFormatter implements TimeagoFormatter {

  format(then: number): string {
    const now = Date.now();

    let totalUnits = Math.round(Math.abs(now - then) / 1000); // units in seconds
    // totalUnits = 50;

    const seconds = totalUnits % 60;
    totalUnits -= seconds;

    totalUnits /= 60; // units in minutes
    const minutes = totalUnits % 60;
    totalUnits -= minutes;

    totalUnits /= 60;  // units in hours
    const hours = totalUnits;

    let str = '';

    if (hours > 0) {
      str += hours + 'h ';
    }

    if (minutes > 0 || hours > 0) {
      str += minutes + 'm ';
    }

    if (hours < 1 && seconds > 0) {
      str += seconds + 's';
    }

    return str;
  }

}
