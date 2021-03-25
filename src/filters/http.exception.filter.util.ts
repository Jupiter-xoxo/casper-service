import { Response } from 'express';
import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import {
    ACCEPT_LANGUAGE_HEADER, CODE_BUSINESS_ERROR, CODE_TECHNICAL_ERROR
} from '../configs/constants.config';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {

        const http = host.switchToHttp();
        const request = http.getRequest();
        const response = http.getResponse<Response>();
        const exceptionResponse = JSON.parse(JSON.stringify(exception.getResponse()));
        const acceptLanguage = request.headers[ACCEPT_LANGUAGE_HEADER];
        let status: JSON;
        // if (exception.getStatus() === HttpStatus.OK) {
        //     status = new LookupReadFile().read(exceptionResponse.status as number, acceptLanguage);
        // } else if (exception.getStatus() === HttpStatus.BAD_REQUEST) {
        //     status = new LookupReadFile().read(CODE_BUSINESS_ERROR, acceptLanguage);
        // } else if (exception.getStatus() === HttpStatus.NOT_FOUND) {
        //     const notFoundResponse = exception.getResponse();
        //     logAppRequest(http, notFoundResponse);
        //     response.status(HttpStatus.OK).send(notFoundResponse);
        //     return;
        // } else {
        //     status = new LookupReadFile().read(CODE_TECHNICAL_ERROR, acceptLanguage);
        // }

        const data = exceptionResponse.data ? exceptionResponse.data : null;
        response.status(HttpStatus.OK).send({ status, data });
    }
}
