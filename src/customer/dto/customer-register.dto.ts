import { BankEnum } from '../../enums/bank.enum';
import { IsEnum, IsNotEmpty, IsString, ValidateIf } from "class-validator";
import Validate from "../../utils/validate.util";

export class CustomerRegisterDto {
    @IsNotEmpty()
    @IsString()
    firstName: string;

    @IsNotEmpty()
    @IsString()
    lastName: string;

    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsEnum(BankEnum)
    bank: BankEnum;

    @IsNotEmpty()
    @IsString()
    bankAccount: string;

    @IsNotEmpty()
    @IsString()
    lineId: string;

    @IsNotEmpty()
    @IsString()
    @ValidateIf((data) => {
        return Validate.validateEqualsData(data.password, data.confirmPassword);
    })
    password: string;

    @IsNotEmpty()
    @IsString()
    confirmPassword: string;

    @IsNotEmpty()
    @IsString()
    whereYouKnow: string;
}