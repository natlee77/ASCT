 
import { Component, OnInit } from '@angular/core'; 
import { FormGroup, FormControl, Validators, FormBuilder,} from '@angular/forms';
 
export interface Patientskord {
  Skorddatum : string;
  LPKfore: number;
  CD34fore: number;
  Volym : number; 
  LPKfrys: number;
  CD34frys: number;
  CD34kvar: number;
 }

@Component({
  selector: 'app-skord',
  templateUrl: './skord.component.html',
  styleUrls: ['./skord.component.css'] 
})

export class SkordComponent implements OnInit {
   today: number = Date.now();

   contactForm = new FormGroup({
   })


//    ------table ----------
displayedColumns: string[] = ['Skorddatum', 
                              'LPKfore',
                              'CD34fore',
                              'Volym', 
                              'LPKfrys' ,
                              'CD34frys' ,                                
                              'CD34kvar'];


patientskords: Patientskord[] = [
{ Skorddatum:'2222-02-02', LPKfore: 1.1, CD34fore: 4.77,Volym :443, LPKfrys: 3.0, CD34frys: 2.35, CD34kvar:  5.5 },
{ Skorddatum:'2222-02-02', LPKfore: 1.1, CD34fore: 5.55,Volym : 222,LPKfrys: 3.3, CD34frys: 3.22, CD34kvar: 4.44}
];
   
   
 
  
  
   constructor(private fb:FormBuilder) {
   }   
     
  ngOnInit(): void {
  }
 
 
 
 
  
 

}

  
 
  