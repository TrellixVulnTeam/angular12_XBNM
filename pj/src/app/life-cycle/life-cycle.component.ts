import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.scss']
})
export class LifeCycleComponent implements OnInit,DoCheck,AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  fname:string = "";
  urlParams:any = {}
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.route.params.subscribe((res)=>{
      this.urlParams = res;
    })
  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit')
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit')
  }
  ngOnDestroy(){
    console.log('ngOnDestroy')
  }

  // dont use the below methods
  ngDoCheck(){
    console.log('ngDoCheck')
  }
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked')
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked')
  }


}
