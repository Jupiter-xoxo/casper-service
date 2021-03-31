import { CustomerModule } from '../customer/customer.module';
import { JwtStrategy } from './jwt.strategy';
import { jwtConstants } from '../configs/constants.config';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';

@Module({
    imports: [
        CustomerModule,
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '30s' }
        })
    ],
    providers: [
        AuthService,
        JwtStrategy
    ],
    controllers: [
        AuthController
    ],
    exports: [AuthService, JwtModule],
})
export class AuthModule { }
