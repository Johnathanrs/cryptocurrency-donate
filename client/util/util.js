
import moment from 'moment';

export function getDurationInDays(duration) {
    const a = moment(duration, 'YYYY-MM-DD');
    const b = moment().format('YYYY-MM-DD');
    return a.diff(b, 'days');
}

export function toReadableDate(date) {
    return moment(date).format('MMM DD, YYYY');
}