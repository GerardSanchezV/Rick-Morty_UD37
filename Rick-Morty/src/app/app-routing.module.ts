import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformacionComponent } from './Informacion/info.component';
import { HomeComponent } from './Home/home.component';
import { ListaComponent } from './Lista/lista.component';

const routes: Routes = [{
  path: 'lista',
  component:ListaComponent
},
{
  path: 'info',
  component:InformacionComponent
},
{
  path: 'home',
  component:HomeComponent
}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
