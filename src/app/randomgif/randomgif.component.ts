import { Component, OnInit } from '@angular/core';
import { GiphyServiceService } from '../giphy-service.service';

@Component({
  selector: 'app-randomgif',
  templateUrl: './randomgif.component.html',
  styleUrls: ['./randomgif.component.css']
})
export class RandomgifComponent implements OnInit {

  randomGif: any;

  constructor(private servive:GiphyServiceService) { }

  ngOnInit() {
    this.servive.randomGif()
    .subscribe((response: { [x: string]: any; }) => {
      // tslint:disable-next-line: no-string-literal
      this.randomGif = response['data'];
    });

}
}