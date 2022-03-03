import {  Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { CrudService } from '../../services/crud.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-creat',
  templateUrl: './creat.component.html',
  styleUrls: ['./creat.component.css']
})
export class CreatComponent implements OnInit {

  detailsForm: FormGroup;
  
  constructor(private _bala:CrudService, private router:Router, private route: ActivatedRoute) { 
    
    this.detailsForm= new FormGroup({
      'firstName': new FormControl(null),
      'lastName': new FormControl (null),
      'email': new FormControl(null),
      'Applicantcompanyname': new FormControl(null),
      'mobile': new FormControl(null),
      address: new FormGroup({
        'addressLine1': new FormControl(null),
        'addressLine2': new FormControl(null),
        'state': new FormControl(null),
        'city': new FormControl(null),
        'country': new FormControl(null),
      })
        })
        this.onshow()
  }
  selectId
  

  onsubmit(){
    // console.log(this.detailsForm.value)
    // this._bala.creatcurd(this.detailsForm.value).subscribe(repat=>{
    //   console.log(repat)
    //   this.router.navigate(['/view',repat.data._id])  
    // })
    console.log(this.selectId)
    if(this.selectId==null){
      this._bala.creatcurd(this.detailsForm.value).subscribe(repat=>{
          console.log(repat)
          this.router.navigate(['/view',repat.data._id])  
        })
    }
    else{
      this._bala.updatecurd(this.selectId,this.detailsForm.value).subscribe(repat=>{
        console.log(repat)
        this.router.navigate(['/view',this.selectId])  
      }) 
    }
  }

  onview(){
    console.log(this.selectId)
    this._bala.viewcurd(this.selectId).subscribe(
      vel=>{
      this.detailsForm.patchValue(vel.data)
      }
    )
  }

  onshow(){
    this.route.paramMap.subscribe(
      params=>{
      this.selectId=params.get('id')
      console.log(this.selectId!=='null')
      if(this.selectId!==null){
      this.onview()
      }
  }) 
  }

 ngOnInit() {}

}


