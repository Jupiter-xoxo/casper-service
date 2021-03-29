import { JwtAuthGuard } from '../auth/jwt.auth.guard';
import { Controller, Post, Get, UseGuards, Body, Param } from '@nestjs/common';
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
    @Get('profile/:id')
    async getProfile(@Param('id') userId: string) {
        return await this.customerService.findCustomerUserById(userId);
    }
}
