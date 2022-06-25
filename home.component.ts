import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrainService } from 'src/app/service/train.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  formData = {
    boarding: 'a',
    destination: 'a',
    date: '',
  };

  constructor(private router: Router, private trainService: TrainService) {}

  ngOnInit(): void {}

  search() {
    this.trainService
      .search(
        this.formData.boarding,
        this.formData.destination,
        this.formData.date
      )
      .subscribe({
        next: (res: any) => {
          console.log(res);
          this.trainService.updateTrainList(res);
          this.router.navigate(['/result']);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
