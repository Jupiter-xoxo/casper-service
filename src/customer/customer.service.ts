import { StatusEnum } from '../enums/status.enum';
import { CustomerUser } from './entities/customer-user.entity';
import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerRegisterDto } from './dto/customer-register.dto';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { CODE_BUSINESS_ERROR } from 'src/configs/constants.config';

@Injectable()
export class CustomerService {
    private readonly logger = new Logger(CustomerService.name);

    constructor(
        @InjectRepository(CustomerUser)
        private readonly customerUserRepository: Repository<CustomerUser>,
    ) { }

    async findCustomerUserLogin(username: string, password: string) {
        return this.customerUserRepository.findOne({ where: { username: username, password: password, status: StatusEnum.ACTIVE } });
    }

    async findCustomerUserById(userId: string) {
        const customerUser = this.customerUserRepository.findOne(userId);
        if (!customerUser) {
            this.logger.log(`Customer user id: ${userId} not found.`);
            throw new HttpException({ status: CODE_BUSINESS_ERROR }, HttpStatus.OK);
        }
        return customerUser;
    }

    public async register(request: CustomerRegisterDto) {
        const isExistUser = await this.customerUserRepository.count(
            {
                where: [
                    { username: request.username, status: StatusEnum.ACTIVE },
                    { username: request.username, status: StatusEnum.PENDING },
                    { username: request.username, status: StatusEnum.LOCKED },
                ]
            }
        ) > 0;
        if (isExistUser) {
            this.logger.log(`Customer user username: ${request.username} is existed.`);
            throw new HttpException({ status: CODE_BUSINESS_ERROR }, HttpStatus.OK);
        }

        const customerUser = await this.customerUserRepository.save({
            id: uuidv4(),
            firstName: request.firstName,
            lastName: request.lastName,
            username: request.username,
            password: request.password,
            bank: request.bank,
            bankAccount: request.bankAccount,
            lineId: request.lineId,
            whereYouKnow: request.whereYouKnow,
            status: StatusEnum.ACTIVE,
            createBy: 'GUEST_USER',
            createDate: new Date(),
            updateBy: 'GUEST_USER',
            updateDate: new Date()
        });

        return {
            username: customerUser.username,
        }
    }
}
