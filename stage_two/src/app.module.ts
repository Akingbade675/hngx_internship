import { Module } from '@nestjs/common';
import { PersonModule } from './person/person.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PersonModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
