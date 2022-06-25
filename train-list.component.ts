import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Train } from 'src/app/model/train';
import { TrainService } from 'src/app/service/train.service';

@Component({
  selector: 'app-train-list',
  templateUrl: './train-list.component.html',
  styleUrls: ['./train-list.component.css'],
})
export class TrainListComponent implements OnInit {
  trains: Train[] = [];
  constructor(private router: Router, private trainService: TrainService) {}

  ngOnInit(): void {
    this.trains = this.trainService.getTrainList();
  }
  selected() {
    this.router.navigate(['/payment']);
  }
}
