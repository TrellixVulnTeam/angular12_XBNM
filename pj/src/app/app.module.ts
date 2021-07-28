import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { VariablesComponent } from './variables/variables.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormsModule } from '@angular/forms';
import { PipesComponent } from './pipes/pipes.component';
import { HexaPipe } from './hexa.pipe';
import { ParamsPipe, SquarePipe } from './params.pipe';
import { DebitMaskPipe } from './debit-mask.pipe';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
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
    LifeCycleComponent
  ],
  imports: [ // modules
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [], // services
  bootstrap: [AppComponent] //first component
})
export class AppModule { }
