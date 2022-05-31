import { Module, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticlesModule } from './articles/articles.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from './articles/entities/article.entity';
import { config } from './orm.config';
import { UsersModule } from './users/users.module';
import { StockModule } from './stock/stock.module';
import { CategorieModule } from './categorie/categorie.module';
import { FournisseursModule } from './fournisseurs/fournisseurs.module';
import { DepotsModule } from './depots/depots.module';
import { AuthModule } from './auth/auth.module';
import { RoleService } from './users/role.service';
import { CommandesModule } from './commandes/commandes.module';
import { ApprovisionnementsModule } from './approvisionnements/approvisionnements.module';
import { UnitesModule } from './unites/unites.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    ArticlesModule,
    UsersModule,
    StockModule,
    CategorieModule,
    CommandesModule,
    FournisseursModule,
    DepotsModule,
    AuthModule,
    ApprovisionnementsModule,
    UnitesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnModuleInit {
  constructor(private readonly roleService: RoleService) {}
  onModuleInit() {
    console.log(`Initialization...`);
    this.roleService.createInit();
  }
}
