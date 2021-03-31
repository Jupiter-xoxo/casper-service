import { HttpModuleOptions, HttpModuleOptionsFactory, Injectable } from '@nestjs/common';
import { HTTP_MAX_REDIRECTS, HTTP_TIMEOUT } from './constants.config';

@Injectable()
export class HttpConfig implements HttpModuleOptionsFactory {

    createHttpOptions(): HttpModuleOptions {
        return {
            timeout: HTTP_TIMEOUT,
            maxRedirects: HTTP_MAX_REDIRECTS,
        };
    }
}