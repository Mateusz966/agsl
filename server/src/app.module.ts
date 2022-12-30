import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KnexModule } from 'nestjs-knex';

@Module({
  imports: [
    KnexModule.forRoot({
      config: {
        migrations: {
          tableName: 'knex_migrations',
        },
        client: 'pg',
        connection: {
          database: 'postgres',
          user: 'postgres',
          password: 'postgres',
          port: 5666,
        },
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
