import { HttpException, HttpStatus, Logger } from '@nestjs/common';
import { CODE_BUSINESS_ERROR } from '../configs/constants.config';

const logger = new Logger('validate.Util');
const Validate = {
  validateEqualsData(value1: string, value2: string): boolean {
    if (value1 && value2 && value1 != value2) {
      logger.log(`validate equals data is not match: ${value1} and ${value2}`);
      throw new HttpException({ status: CODE_BUSINESS_ERROR }, HttpStatus.OK);
    }
    return true;
  }
};

export default Validate;
