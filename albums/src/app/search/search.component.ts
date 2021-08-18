import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchText:string =  '';
  albumList:any = [];
  dataLoaded:boolean = true;
  constructor(private searchService:SearchService) {
  }

  ngOnInit(): void {
  }

  search(){
    this.dataLoaded = false;
    this.albumList = [];
    if(this.searchText){
      
      this.searchService.search(this.searchText).subscribe((res:any)=>{
        this.albumList = res;
        this.dataLoaded = true;
      },(err:any)=>{
  
      })
  
    }
  }

}
