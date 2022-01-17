import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateforms',
  templateUrl: './templateforms.component.html',
  styleUrls: ['./templateforms.component.scss']
})
export class TemplateformsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
value:any='venkat';
  submit(form:any){
    console.log(form);
    console.log(this.value);
    console.log(form.value)
  }
}
