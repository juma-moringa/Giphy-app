import { Component, OnInit } from '@angular/core';
import { GiphyServiceService } from '../giphy-service.service';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css'],
})
export class TrendsComponent implements OnInit {
  trendingGifs: any;
  constructor(private service: GiphyServiceService) {}

  ngOnInit(): void {
    this.service.trendingGifs().subscribe((response: { [x: string]: any }) => {
      // tslint:disable-next-line: no-string-literal
      this.trendingGifs = response['data'];
    });
  }
}
