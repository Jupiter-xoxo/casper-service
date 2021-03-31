import { ColumnEncodeTransformer } from '../../utils/transformer/column-encode.transformer';
import { BankEnum } from '../../enums/bank.enum';
import { Column, Entity, PrimaryColumn } from "typeorm";
import { StatusEnum } from 'src/enums/status.enum';
import { ColumnDatetimeTransformer } from '../../utils/transformer/column-datetime.transformer';

@Entity('customer_user')
export class CustomerUser {
    @PrimaryColumn({ name: 'id', type: 'varchar', length: 45, nullable: false })
    id: string;

    @Column({ name: 'first_name', type: 'varchar', length: 100, nullable: false })
    firstName: string;

    @Column({ name: 'last_name', type: 'varchar', length: 100, nullable: false })
    lastName: string;

    @Column({ name: 'username', type: 'varchar', length: 10, nullable: false })
    username: string;

    @Column({ name: 'password', type: 'varchar', length: 50, nullable: false, transformer: new ColumnEncodeTransformer() })
    password: string;

    @Column({ name: 'bank', type: 'varchar', enum: BankEnum, length: 10, nullable: false })
    bank: BankEnum;

    @Column({ name: 'bank_account', type: 'varchar', length: 20, nullable: false })
    bankAccount: string;

    @Column({ name: 'line_id', type: 'varchar', length: 50, nullable: false })
    lineId: string;

    @Column({ name: 'where_you_know', type: 'varchar', length: 50, nullable: false })
    whereYouKnow: string;

    @Column({ name: 'status', type: 'varchar', enum: StatusEnum, length: 10, nullable: false })
    status: StatusEnum;

    @Column({ name: 'create_by', type: 'varchar', length: 50, nullable: false })
    createBy: string;

    @Column({ name: 'create_date', type: 'datetime', nullable: false, transformer: new ColumnDatetimeTransformer() })
    createDate: Date;

    @Column({ name: 'update_by', type: 'varchar', length: 50, nullable: true })
    updateBy: string;

    @Column({ name: 'update_date', type: 'datetime', nullable: false, transformer: new ColumnDatetimeTransformer() })
    updateDate: Date;
}