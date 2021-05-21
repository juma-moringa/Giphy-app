import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GiphyServiceService {
  private api_Key = environment.api_key;
  private query: string | undefined;

  constructor(private http: HttpClient) {}

  getGifs() {
    return this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=${this.api_Key}&q=${this.query}&limit=50&offset=0&rating=G&lang=en`);
  }

  trendingGifs() {
    return this.http.get(
      `https://api.giphy.com/v1/gifs/trending?api_key=${this.api_Key}&limit=50&rating=G`
    );
  }

  randomGif() {
    return this.http.get(
      `https://api.giphy.com/v1/gifs/random?api_key=${this.api_Key}&tag=&rating=R`
    );
  }

  searchGifs(query: string) {
    this.query = query;
  }
}
