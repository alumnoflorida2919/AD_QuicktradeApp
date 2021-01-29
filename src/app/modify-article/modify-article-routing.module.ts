import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifyArticlePage } from './modify-article.page';

const routes: Routes = [
  {
    path: '',
    component: ModifyArticlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifyArticlePageRoutingModule {}
