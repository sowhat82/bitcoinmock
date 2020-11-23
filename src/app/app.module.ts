import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { httpservice } from './httpservice.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderpageComponent } from './orderpage/orderpage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmationpageComponent } from './confirmationpage/confirmationpage.component';
import { RouterModule, Routes } from '@angular/router';
import { Data } from './datastorage.service';

const appRoutes: Routes = [
    { path: '', component: OrderpageComponent },
    { path: 'confirmationpage', component: ConfirmationpageComponent },
    { path: "**", redirectTo: '/', pathMatch: 'full' },
    ];

@NgModule({
  declarations: [
    AppComponent,
    OrderpageComponent,
    ConfirmationpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSelectModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [httpservice, Data],
  bootstrap: [AppComponent]
})
export class AppModule { }
