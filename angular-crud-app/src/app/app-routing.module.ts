// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunoListComponent } from './aluno-list/aluno-list.component';
import { AlunoCreateComponent } from './aluno-create/aluno-create.component';
import { AlunoEditComponent } from './aluno-edit/aluno-edit.component';
import { AlunoDetailsComponent } from './aluno-details/aluno-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/alunos', pathMatch: 'full' },
  { path: 'alunos', component: AlunoListComponent },
  { path: 'aluno-create', component: AlunoCreateComponent },
  { path: 'aluno-edit/:id', component: AlunoEditComponent },
  { path: 'aluno-details/:id', component: AlunoDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
