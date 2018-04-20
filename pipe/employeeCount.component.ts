import { Component} from '@angular/core';

@Component({
    selector: 'app-pipe',
    templateUrl: '.app/pipe/employeeCount.component.html',
    styleUrls: ['.app/pipe/employeeCount.component.css']
  })
export class employeeCountComponent{
    all : number = 10;
    male: number = 5;
    female: number = 5;
}