import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CallHandler, ExecutionContext, HttpStatus, Injectable, Logger, NestInterceptor } from '@nestjs/common';

import {
    ACCEPT_LANGUAGE_HEADER,
    CODE_SUCCESS,
} from '../configs/constants.config';

export interface Response<T> {
    data: T;
}

@Injectable()
export class HttpHeaderInterceptor<T> implements NestInterceptor<T, Response<T>> {
    private readonly logger = new Logger(HttpHeaderInterceptor.name);

    intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
        const http = context.switchToHttp();
        const request = http.getRequest();
        const response = http.getResponse();

        // const status = new LookupReadFile().read(CODE_SUCCESS, request.headers[ACCEPT_LANGUAGE_HEADER]);
        response.status(HttpStatus.OK);
        return next.handle().pipe(map(data => {
            // if (!data) {
            //     return { status, data: null };
            // } else {
            //     if (data.status && data.status.code) {
            //         return { status: data.status, data: data.data };
            //     } else {
            //         return { status, data };
            //     }
            // }
            return data;
        }));
    }
}