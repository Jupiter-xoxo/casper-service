import { Response } from 'express';
import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import {
    CODE_BUSINESS_ERROR, 
    CODE_TECHNICAL_ERROR
} from '../configs/constants.config';
import { MESSAGES } from '../configs/messages.constants.config';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const http = host.switchToHttp();
        const response = http.getResponse<Response>();
        const exceptionResponse = JSON.parse(JSON.stringify(exception.getResponse()));
        let status: JSON;
        if (exception.getStatus() === HttpStatus.OK) {
            status = MESSAGES[exceptionResponse.status];
        } else if (exception.getStatus() === HttpStatus.BAD_REQUEST) {
            status = MESSAGES[CODE_BUSINESS_ERROR];
        } else if (exception.getStatus() === HttpStatus.NOT_FOUND || exception.getStatus() === HttpStatus.UNAUTHORIZED) {
            response.status(HttpStatus.OK).send(exception.getResponse());
            return;
        } else {
            status = status = MESSAGES[CODE_TECHNICAL_ERROR];
        }
        const data = exceptionResponse.data ? exceptionResponse.data : null;
        response.status(HttpStatus.OK).send({ status, data });
    }
}
