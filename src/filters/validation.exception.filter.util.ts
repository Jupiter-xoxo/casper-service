import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import { ValidationException } from '../exceptions/validation.exception';
import { CODE_BUSINESS_ERROR } from '../configs/constants.config';

@Catch(ValidationException)
export class ValidationExceptionFilter implements ExceptionFilter {
    catch(exception: ValidationException, host: ArgumentsHost) {
        throw new HttpException({ status: CODE_BUSINESS_ERROR }, HttpStatus.OK);
    }
}