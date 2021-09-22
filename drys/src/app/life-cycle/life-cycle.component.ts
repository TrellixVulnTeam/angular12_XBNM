import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.scss']
})
export class LifeCycleComponent implements OnInit, DoCheck, AfterContentInit,AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  fname:string = 'mahesh'

  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit');
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit');
  }
  ngOnDestroy(){
    console.log('ngOnDestroy');
  }

// donot use the below methods, it might impact performance.
  ngDoCheck(){ // it will trigger if any thing gets changed in the compoenent (view or content)
    console.log('ngDoCheck');
  }

  ngAfterContentChecked(){ // it will trigger if any thing gets changed in the content (variables)
    console.log('ngAfterContentChecked');
  }

  ngAfterViewChecked(){  // it will trigger if any thing gets changed in the view (html)
    console.log('ngAfterViewChecked');
  }
}
