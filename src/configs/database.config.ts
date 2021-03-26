import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import {
    DATABASE_TYPE
} from './constants.config';

@Injectable()
export class DatabaseConfig implements TypeOrmOptionsFactory {
    private readonly logger = new Logger(DatabaseConfig.name);

    constructor(private config: ConfigService) {
        this.logger.debug('Init DatabaseConfig');
    }

    createTypeOrmOptions(): TypeOrmModuleOptions {
        const config: TypeOrmModuleOptions = {
            type: DATABASE_TYPE,
            host: this.config.get('DB_HOST'),
            port: this.config.get('DB_PORT'),
            username: this.config.get('DB_USERNAME'),
            password: this.config.get('DB_PASS'),
            database: this.config.get('DB_NAME'),
            autoLoadEntities: true,
            synchronize: false
        };

        return config;
    }
}