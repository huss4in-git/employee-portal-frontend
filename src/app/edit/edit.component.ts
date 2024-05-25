import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ApiServiceService } from '../services/api-service.service';
import { EmployeeModel } from '../employee.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  Employee:EmployeeModel={}

  constructor(private route: ActivatedRoute, private api:ApiServiceService, private router:Router) { }
  // activated route class is used to access id from the url

  ngOnInit(): void {
    this.route.params.subscribe((res)=>{
      const {id} = res
      console.log(id); 
      this.getExistingUser(id)
    })
  }

  getExistingUser(id:any){
    this.api.getAEmployeeApi(id).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.Employee=res
        
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }

  updateEmployee(id:any){
    this.api.updateEmployeeDetailsApi(id, this.Employee).subscribe({
      next:(res:any)=>{
        console.log(res);
        alert('Employee Details updated successfully')

        this.router.navigateByUrl('/employee')
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }

  cancelEdit(id:any){
    this.getExistingUser(id)
  }
  
}
