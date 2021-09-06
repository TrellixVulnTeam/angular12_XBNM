import { Component, OnInit } from "@angular/core";
import { SearchService, List,Options } from "../search.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit {
  searchText: string = "";
  albumList: List[] = [];
  options: Options[] = [
    { value: "itunes", label: "Itunes" },
    { value: "deezer", label: "Deezer" },
  ];
  selectedOption: string = "";
  dataLoaded: boolean = true;
  showError: boolean = false;
  constructor(private searchService: SearchService) {}

  ngOnInit(): void {}

  search() {
    this.showError = false;
    this.albumList = [];
    if (this.searchText && this.selectedOption) {
      this.dataLoaded = false;
      this.searchService.search(this.searchText, this.selectedOption).subscribe(
        (res: any) => {
          this.albumList = res;
          this.dataLoaded = true;
        },
        (err: any) => {}
      );
    } else {
      this.showError = true;
    }
  }
}
