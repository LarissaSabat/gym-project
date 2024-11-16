import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarContratosComponent } from './componentes/contratos/criar-contratos/criar-contratos.component';
import { MatriculaComponent } from './componentes/contratos/matricula/matricula.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'criarDocumento',
    pathMatch: 'full'
  },
  {
    path: 'criarDocumento',
    component: CriarContratosComponent
  },
  {
    path: 'matriculas',
    component:MatriculaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }