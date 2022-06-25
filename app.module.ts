import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { FormsModule } from '@angular/forms';
import { TrainListComponent } from './component/train-list/train-list.component';
import { PaymentComponent } from './component/payment/payment.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './component/footer/footer.component';
import { CreateTrainComponent } from './component/create-train/create-train.component';
import { BookingHistoryComponent } from './component/booking-history/booking-history.component';
import { DisplayComponent } from './component/display/display.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateTrainComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    TrainListComponent,
    PaymentComponent,
    NavbarComponent,
    FooterComponent,
    BookingHistoryComponent,
    DisplayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
