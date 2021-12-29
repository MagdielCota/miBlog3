import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'articles', loadChildren: () => import('./articles/articles.module').then(m => m.ArticlesModule)
  },
  {
    path: '', pathMatch: 'full', redirectTo: 'articles'
  },
  { path: 'publicaciones', loadChildren: () => import('./publicaciones/publicaciones.module').then(m => m.PublicacionesModule) },
  {
    path: '**', redirectTo: 'articles'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
