import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  searchDeezer(searchText: string) {
    var url = '/deezer/search/autocomplete?q=' + searchText;
    return this.http.get(url);
  }
  searchItunes(searchText: string) {
    var url = '/itunes/search?term=' + searchText;
    return this.http.get(url);
  }
  search(searchText: string) {
    return new Observable((observer: any) => {
      let res1 = this.searchDeezer(searchText);
      let res2 = this.searchItunes(searchText);
      forkJoin([res1, res2]).subscribe(
        ([deezer, itunes]: any) => {
          let results: any = [];
          if (deezer.playlists.data.length) {
            deezer.playlists.data.forEach((item: any) => {
              results.push({
                title: item.title,
                img: item.picture_medium,
                link: item.link,
              });
            });
          }
          if (itunes.results.length) {
            itunes.results.forEach((item: any) => {
              results.push({
                title: item.trackName,
                img: item.artworkUrl60,
                link: item.trackViewUrl,
              });
            });
          }
          observer.next(results);
          observer.complete();
        },
        (err:any  ) => {
          observer.error('asdf');
        }
      );
    });
  }
}
