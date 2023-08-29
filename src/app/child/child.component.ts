import { Component,DoCheck,Input ,OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges{
@Input('msg')msg:string='';
constructor(){
console.log('---inside child constructor');
}
ngOnChanges():void{
console.log('--inside child ngonchanges method');
}

}
