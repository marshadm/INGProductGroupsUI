import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { DetailsComponent } from './details/details.component';



const appRoutes:Routes = [
  {
    path:'details',
    component: DetailsComponent
  
  }

]


@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent
    ],

  imports: [
  RouterModule.forRoot(appRoutes),
  BrowserModule,
  HttpClientModule,
  FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
