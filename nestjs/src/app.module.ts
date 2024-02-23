import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {User} from "./user.entity";
import {JwtModule} from "@nestjs/jwt";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'postgres', // Обратите внимание на это изменение
            port: 5432,
            username: 'user',
            password: 'password',
            database: 'db',
            autoLoadEntities: true,
            synchronize: true
        }),
        TypeOrmModule.forFeature([User]),
        JwtModule.register({
            secret: 'secret',
            signOptions: {expiresIn: '1d'}
        })
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}