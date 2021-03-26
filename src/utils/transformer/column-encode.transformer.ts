import base64 = require('base-64');

export class ColumnEncodeTransformer {
	to(data: string): string {
		return base64.encode(data);
	}

	from(data: string): string {
		if (data == null) {
			return null;
		}
		return base64.decode(data);
	}
}