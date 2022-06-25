import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  errorMessage: string = '';
  title = 'Payment Gateway';
  formData = {
    trainName: '',
    trainNumber: '',
    boardingPoint: '',
    destinationPoint: '',
    numberOfTickets: '',
    date: '',
  };

  constructor(private router: Router) {}

  ngOnInit(): void {}
  

  click() {
    this.router.navigate(['/display']);
  }
}
