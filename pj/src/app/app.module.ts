import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { VariablesComponent } from './variables/variables.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesComponent } from './pipes/pipes.component';
import { HexaPipe } from './hexa.pipe';
import { ParamsPipe, SquarePipe } from './params.pipe';
import { DebitMaskPipe } from './debit-mask.pipe';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { FormsComponent } from './forms/forms.component';
import { ObjFormsComponent } from './obj-forms/obj-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ApisComponent } from './apis/apis.component';
import { UsersService } from './users.service';
import {HttpClientModule} from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BasicComponent } from './basic/basic.component';
import { InputComponent } from './input/input.component';
import { UsersListComponent } from './users-list/users-list.component';
import { HighliterDirective } from './highliter.directive';
import { HighlightEventDirective } from './highlight-event.directive'
/*
Components -- page / block of a page
Directives -- block
Pipes -- fomatting the data
Serivices -- api calling
Modules -- configuration of all above
*/
@NgModule({
  declarations: [ // comp, directives, pipe
    AppComponent,
    HomeComponent,
    IntroComponent,
    VariablesComponent,
    DirectivesComponent,
    PipesComponent,
    HexaPipe,
    ParamsPipe,
    SquarePipe,
    DebitMaskPipe,
    LifeCycleComponent,
    FormsComponent,
    ObjFormsComponent,
    ReactiveFormsComponent,
    ApisComponent,
    NotFoundComponent,
    BasicComponent,
    InputComponent,
    UsersListComponent,
    HighliterDirective,
    HighlightEventDirective
  ],
  imports: [ // modules
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [UsersService], // services
  bootstrap: [AppComponent], //first component
  exports: [] // modules, components, directive,pies, services
})
export class AppModule { }
