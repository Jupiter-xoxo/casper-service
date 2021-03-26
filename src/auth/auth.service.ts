import { CODE_BUSINESS_ERROR } from '../configs/constants.config';
import { CustomerService } from '../customer/customer.service';
import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    private readonly logger = new Logger(AuthService.name);

    constructor(
        private customerService: CustomerService,
        private jwtService: JwtService
    ) { }

    async validateCustomerUser(username: string, password: string): Promise<any> {
        const user = await this.customerService.findCustomerUserActive(username);
        if (user && user.password === password) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async adminlogin(user: any) {
        const payload = { username: user.username, sub: user.userId };
        return {
            accessToken: this.jwtService.sign(payload),
        };
    }

    async customerUserlogin(user: any) {
        const { username, password } = user;
        const customerUser = await this.customerService.findCustomerUserLogin(username, password);
        if (!customerUser) {
            this.logger.log(`Customer user username: ${username} or password is invalid.`);
            throw new HttpException({ status: CODE_BUSINESS_ERROR }, HttpStatus.OK);
        }
        const payload = { username: customerUser.username, sub: customerUser.id };
        return {
            accessToken: this.jwtService.sign(payload),
        };
    }
}
