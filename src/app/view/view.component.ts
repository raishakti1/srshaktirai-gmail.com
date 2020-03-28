import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import data from '../productdata.json';
import { filter, map } from 'rxjs/operators'


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  order
  product
  obj={
   
    puma:false,
    reebok:false,
    levis:false
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
this.order=   data[params.order].filter((x)=>x.type==params.type)
this.product=[...this.order];
  console.log("hello",this.order) 
})


}

filter()
{
  var x=[];
  for(var z in this.obj)
  {
    if(this.obj[z]==true)
    x.push(z);
  }
 this.product=this.order.filter((y)=>x.includes(y.brand)); 
 
}

}