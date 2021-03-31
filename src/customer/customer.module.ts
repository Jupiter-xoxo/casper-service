import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerService } from './customer.service';
import { CustomerUser } from './entities/customer-user.entity';
import { CustomerController } from './customer.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            CustomerUser,
        ])
    ],
    providers: [
        CustomerService
    ],
    controllers: [
        CustomerController
    ],
    exports: [
        CustomerService
    ]
})
export class CustomerModule { }
