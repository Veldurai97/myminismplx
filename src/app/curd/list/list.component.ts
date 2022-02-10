import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private _crud: CrudService) { }

  ngOnInit() {
    this.onGet()
  }
   address=[]
   
   ondelete(ded){
     console.log(ded)
     this._crud.deletecurd(ded)
     .subscribe(
       (mrf)=>{
         console.log(mrf)
         this.onGet()
       }
     )
   }
  onGet(){
    this._crud.getcurd()
    .subscribe(
      (sub)=>{
        this.address=sub.data
        console.log(sub)
      },
      (error)=>{
        console.log(error)
      }
      );
  }
}
