import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { StudentService } from 'src/app/student.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-student-reg',
  templateUrl: './student-reg.html',
  styleUrls: ['./student-reg.css']
})
export class StudentRegComponent implements OnInit {
   title = 'Angular 4 Project!';
   //todaydate: Date;
    //myDate: Date;
    loading:boolean=false;
    errorMessage:string="";
    //resp:object;

  constructor(private studentService: StudentService) {
    //this.resp=respo;
   }

  ngOnInit(): void {
   
  }
  
  /*onSubmit(form: NgForm) {
    let name = form.value.fullName;
    let email = form.value.email;
    let message = form.value.message;
    let myDate = this.studentService.showTodayDate(name,email,message);
    alert(myDate);
}*/

onSubmit(form:NgForm){
  this.loading = true;
  this.errorMessage = "";
  this.studentService.getServiceResponse('Abhishek')
  .subscribe(
    (response)=>{
      console.log('response recived')
      //this.resp=response;
      //const blob = new Blob([JSON.stringify(response)], {type : 'application/json'});
      
  
    },
    
    (resp)=>{
      console.log("Request completed"+JSON.stringify(resp.error.text));
     const blob = new Blob([resp.error.text], { type: 'text/csv'});
     saveAs(blob, 'abc.csv');
     // saveAs(resp, 'abc.csv');
    //  this.loading = false;
    }
  )
  //console.log(this.resp)
  
}



}
