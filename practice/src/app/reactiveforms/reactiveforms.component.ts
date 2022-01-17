import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.scss']
})
export class ReactiveformsComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  reactiveform:any=this.fb.group({
    name:[]
  });

  ngOnInit(): void {
  }

  submit()
  {
    console.log(this.reactiveform.value);
  }
}
