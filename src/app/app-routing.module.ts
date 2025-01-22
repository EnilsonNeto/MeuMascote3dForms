import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './components/meu-mascote/forms/forms.component';
import { MeuMascoteComponent } from './components/meu-mascote/meu-mascote.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'forms-mascot',
    pathMatch: 'full'
  },
  {
    path: 'forms-mascot',
    component: MeuMascoteComponent,
  },
  {
    path: '**',
    redirectTo: 'forms-mascot',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }