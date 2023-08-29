import { Component,OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  msg:string='welcome';
  constructor(){
this.title='life cycle hooks';
console.log('----inside the constructor');

  }
someChange(){
  this.msg='Ashok It';
}
  ngOnChanges(change:SimpleChanges):void{
  console.log('--inside onchanges method');
  }
  ngOnInit(): void {
    console.log('-------inside child ngoninit');
  }
  ngDoCheck(): void {
    console.log('---inside do check');
  }

}
