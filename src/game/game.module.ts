import { GameService } from './game.service';
import { GameController } from './game.controller';
import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [
        GameController,
    ],
    providers: [
        GameService,
    ],
})
export class GameModule { }
