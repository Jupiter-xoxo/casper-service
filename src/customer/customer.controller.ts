import { JwtAuthGuard } from '../auth/jwt.auth.guard';
import { Controller, Post, Get, Request, UseGuards, Body, Param } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerRegisterDto } from './dto/customer-register.dto';

@Controller('customer')
export class CustomerController {
    constructor(private customerService: CustomerService) { }

    @Post('register')
    async register(@Body() request: CustomerRegisterDto) {
        return await this.customerService.register(request);
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile/:username')
    async getProfile(@Param('username') username: string) {
        return await this.customerService.findCustomerUserActive(username);
    }
}
