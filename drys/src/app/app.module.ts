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

@NgModule({
  declarations: [ // components, directives, pipes
    AppComponent,
    HomeComponent,
    IntroComponent,
    VariablesComponent,
    DirectivesComponent,
    PipesComponent
  ],
  imports: [ //modules
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [], // services
  bootstrap: [AppComponent]
})
export class AppModule { }
