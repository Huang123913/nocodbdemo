import { Module } from '@nestjs/common';
import { Connection } from './connection/connection';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MetaService } from './meta/meta.service';
import { LocalStrategy } from './local.strategy/local.strategy';
import { UtilsModule } from './utils/utils.module';
import { ProjectsModule } from './projects/projects.module';
import { JwtStrategy } from './strategies/jwt.strategy/jwt.strategy';

@Module({
  imports: [AuthModule, UsersModule, UtilsModule, ProjectsModule],
  controllers: [],
  providers: [Connection, MetaService, JwtStrategy],
  exports: [Connection, MetaService],
})
export class AppModule {}
