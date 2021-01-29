import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifyArticlePageRoutingModule } from './modify-article-routing.module';

import { ModifyArticlePage } from './modify-article.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifyArticlePageRoutingModule
  ],
  declarations: [ModifyArticlePage]
})
export class ModifyArticlePageModule {}
