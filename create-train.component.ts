import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Train } from 'src/app/model/train';
import { TrainService } from 'src/app/service/train.service';


@Component({
  selector: 'app-create-train',
  templateUrl: './create-train.component.html',
  styleUrls: ['./create-train.component.css']
})
export class CreateTrainComponent implements OnInit {

  title="Add A Train"
  train:Train={
    id:0,
    trainName:'',
    trainNumber:'',
    boardingPoint:'',
    destinationPoint:'',
    boardingTime:'',
    destinationTime:'',
    date:'',
    numberOfTickets:0,
    numberOfSeats:0,
    price:0
  }


  constructor(private router:Router, private trainService: TrainService) { }

  ngOnInit(): void {}

  addTrain(){
    console.log(this.train);
    this.trainService.addTrain(this.train).subscribe({
      next: (response: any) => {
        console.log();
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

}
