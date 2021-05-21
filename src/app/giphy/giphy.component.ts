import { Component, OnInit } from '@angular/core';
import { GiphyServiceService } from '../giphy-service.service';
@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css'],
})
export class GiphyComponent implements OnInit {
  gifs: any;
  searchQuery!: string;
  notFound = false;
  constructor(private service: GiphyServiceService) {}
  ngOnInit() {}
  searchGifs() {
    this.service.searchGifs(this.searchQuery);
    this.service.getGifs()
      .subscribe((results: { [x: string]: any; }) => {
        console.log(results['data']);
        this.gifs = results['data'];
      }, error => {
        alert('not found :(');
      });
    this.searchQuery = '';
  }
}