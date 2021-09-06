import { Injectable } from "@angular/core";
import { forkJoin, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
export interface List {
  title: string;
  link: string;
  img: string;
};
export interface Options {
  value: string;
  label: string;
};
@Injectable({
  providedIn: "root",
})
export class SearchService {
  constructor(private http: HttpClient) {}

  searchDeezer(searchText: string) {
    var url = '/deezer/search/autocomplete?q=' + searchText;
    return this.http.get(url);
  }
  searchItunes(searchText: string) {
    var url = "/itunes/search?term=" + searchText;
    return this.http.get(url);
  }
  search(searchText: string, option:string) {
    return new Observable((observer: any) => {
      var ob = (option === 'itunes')? this.searchItunes(searchText) : this.searchDeezer(searchText);
      ob.subscribe(
        (res: any) => {
          let results: List[] = [];
          if (option === 'itunes' && res.results.length) {
            res.results.forEach((item: any) => {
              results.push({
                title: item.trackName,
                img: item.artworkUrl60,
                link: item.trackViewUrl,
              });
            });
          } else if (option === 'deezer' && res.playlists.data.length) {
            res.playlists.data.forEach((item: any) => {
              results.push({
                title: item.title,
                img: item.picture_medium,
                link: item.link,
              });
            });
          }
          observer.next(results);
          observer.complete();
        },
        (err: any) => {
          observer.error("asdf");
        }
      );
    });
  }
}
