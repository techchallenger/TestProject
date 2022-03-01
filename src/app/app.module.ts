import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TwoWayBindingsComponent } from './two-way-bindings/two-way-bindings.component';
import { HeaderComponent } from './header/header.component';
import { HomePageContentComponent } from './home-page-content/home-page-content.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [
    AppComponent,
    TwoWayBindingsComponent,
    HeaderComponent,
    HomePageContentComponent,
    HomePageComponent,
    ReactiveFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
