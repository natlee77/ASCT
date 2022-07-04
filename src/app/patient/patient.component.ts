import { DatePipe, DATE_PIPE_DEFAULT_TIMEZONE, WeekDay } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SkordtableComponent } from '../skordtable/skordtable.component';
 
import { FormGroup, FormControl, Validators, FormBuilder,} from '@angular/forms';
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})

export class PatientComponent implements OnInit {
   today: number = Date.now();
   svar= false;
   aktuell = false;
 
   contactForm = new FormGroup({

   })
 
   weekDays = [
     { id: 1, name: "Mån" },
     { id: 2, name: "Tis" },
     { id: 2, name: "Ons" },
     { id: 2, name: "Tos" },
     { id: 2, name: "Fre" },
     { id: 2, name: "Lör" },
     { id: 2, name: "Son" },
     
   ];
  
   constructor(private fb:FormBuilder) {
   }
   
   
     
      ngOnInit()  {
          this.contactForm=this.fb.group({
            weekDay:[this.today]
          });
      }

   addpreliminäråterinfusion() {   }

  //  submit() {
  //   console.log("Form Submitted")
  //   console.log(this.contactForm.value)
  // }

  //kan välja vilken vecka dag 
  dateFilter: (date: Date | null) => boolean =
  (date: Date | null) => {
    if (!date) {
      return false;
    }
    const day = date.getDay();
    return day == 1; // 1 means monday, 0 means sunday, etc.
  };
}
