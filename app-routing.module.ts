import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTrainComponent } from './component/create-train/create-train.component';
import { DisplayComponent } from './component/display/display.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { PaymentComponent } from './component/payment/payment.component';
import { RegisterComponent } from './component/register/register.component';
import { TrainListComponent } from './component/train-list/train-list.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'result', component: TrainListComponent },
  { path: 'payment', component:PaymentComponent},
  { path: 'create', component:CreateTrainComponent},
  { path: 'navbar', component:NavbarComponent},
  { path: 'display', component:DisplayComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
