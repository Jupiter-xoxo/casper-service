import { DATE_TIMEZONE_ZULU_FORMAT } from '../../configs/constants.config';
import { TIME_ZONE_BANGKOK } from '../../configs/constants.config';
import * as momenttz from 'moment-timezone';

export class ColumnDatetimeTransformer {
	to(data: Date): Date {
		return data;
	}

	from(data: Date): Date {
		if (data == null) {
			return null;
		}
		const date = momenttz.tz(data, TIME_ZONE_BANGKOK).format(DATE_TIMEZONE_ZULU_FORMAT);
		return momenttz(date).toDate();
	}
}