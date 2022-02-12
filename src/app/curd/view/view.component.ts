import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private route: ActivatedRoute, private _curd: CrudService) {
    this.onshow()
  }
  selectId
  mrf
  ngOnInit() {
  }
  onview(){
    // console.log(this.selectId)
    this._curd.viewcurd(this.selectId).subscribe(
      vel=>{
      this.mrf=vel.data
      }
    )
  }
  onshow(){
    this.route.paramMap.subscribe(
      params=>{
      this.selectId=params.get('id')
      console.log(params)
      this.onview()
  }) 
  }
} 
