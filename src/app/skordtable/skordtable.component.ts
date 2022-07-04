 
import { Component, OnInit } from '@angular/core'; 
import { FormGroup, FormControl, Validators, FormBuilder,} from '@angular/forms';
 
export interface Patientskordinfo {
  Skorddatum : string;
  LPKfore: number;
  CD34fore: number;
  Volym : number; 
  LPKfrys: number;
  CD34frys: number;
  CD34kvar: number;
  A:number;
  B:number;
  C:number;
  D:number;
  E:number;
  F:number;
  G:number;
 }

@Component({
  selector: 'app-skordtable',
  templateUrl: './skordtable.component.html',
  styleUrls: ['./skordtable.component.css'] 
})

export class SkordtableComponent implements OnInit {
   today= new Date();

    

//    ------table ----------
displayedColumns: string[] = ['Skorddatum', 
                              'LPKfore',
                              'CD34fore',
                              'Volym', 
                              'LPKfrys' ,
                              'CD34frys' ,                                
                              'CD34kvar',
                              'A',
                              'B',
                              'C',
                              'D',
                              'E',
                              'F',
                              'G'];


patientskordinfos: Patientskordinfo[] = [
{ Skorddatum:'2222-02-02', LPKfore: 1.1, CD34fore: 4.77,Volym :443, LPKfrys: 3.0, CD34frys: 2.35, CD34kvar:  5.5,A:247895, B:457679, C:78698,D:789698,E:786998,F:786998,G:786988, },
{ Skorddatum:'2222-02-02', LPKfore: 1.1, CD34fore: 5.55,Volym : 222,LPKfrys: 3.3, CD34frys: 3.22, CD34kvar: 4.44 ,A: 0, B:457678, C:567999,D:786898,E:786898,F:786998,G:787698, }
];
   
   
 
  
  
   constructor(private fb:FormBuilder) {
   }   
     
  ngOnInit(): void {
  }
 
 
 
 
  
 

}

  
 
  