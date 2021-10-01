import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesComponent } from './directives/directives.component';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { PipesComponent } from './pipes/pipes.component';
import { VariablesComponent } from './variables/variables.component';
import { FormsComponent } from './forms/forms.component';
import { ObjFormsComponent } from './obj-forms/obj-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { ApisComponent } from './apis/apis.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'intro', component: IntroComponent},
  {path:'varrrrrrrr', component: VariablesComponent},
  {path:'dir', component: DirectivesComponent},
  {path:'pipes', component: PipesComponent},
  {path:'forms', component: FormsComponent},
  {path:'obj-forms', component: ObjFormsComponent},
  {path:'reactive-forms', component: ReactiveFormsComponent},
  {path:'life', component: LifeCycleComponent},
  {path:'apis', component: ApisComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
