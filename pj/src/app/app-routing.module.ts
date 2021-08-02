import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesComponent } from './directives/directives.component';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { PipesComponent } from './pipes/pipes.component';
import { VariablesComponent } from './variables/variables.component';
import { FormsComponent } from './forms/forms.component';
import { ObjFormsComponent } from './obj-forms/obj-forms.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'intro', component: IntroComponent},
  {path:'var', component: VariablesComponent},
  {path:'dir', component: DirectivesComponent},
  {path:'pipes', component: PipesComponent},
  {path:'life-cycle', component: LifeCycleComponent},
  {path:'forms', component: FormsComponent},
  {path:'obj-forms', component: ObjFormsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
