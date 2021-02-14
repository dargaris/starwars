import moment from 'moment';

export const dateFormat = (date) => {
	if (date) {
		date = moment(date, 'YYYY/MM/DD').format('MMM DD, YYYY');
	}
	return date;
};
