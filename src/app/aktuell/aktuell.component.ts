import {DataSource} from '@angular/cdk/collections';

import {BehaviorSubject, Observable} from 'rxjs';
import { Component, OnInit } from '@angular/core'; 
import { FormGroup, FormControl, Validators, FormBuilder,} from '@angular/forms';
// import { MatTableDataSource } from '@angular/material/table';

 
 
 export interface Aktuell {

   PersonNr: string;
   Namn:string;
   Diagnos: string;
   Stamcellsskord : string;
   Skorddatum : string;
   Transplantation : string;
   CD34: number;
  }
 


@Component({
  selector: 'app-aktuell',
  templateUrl: './aktuell.component.html',
  styleUrls:  ['./aktuell.component.css'] 
})

export class AktuellComponent   {
//    ------table ----------
   displayedColumns: string[] = ['PersonNr',
                                'Namn',
                                'Diagnos',
                                'Stamcellsskord', 
                                'Skorddatum',               
                                'Transplantation',
                                'CD34'];
  
   
   aktuella: Aktuell[] = [
    { PersonNr: '440404-4444', Namn: 'aaa aaa', Diagnos:'lymfom', Stamcellsskord:'2222-02-02',        Skorddatum:'2222-02-02',  Transplantation: '2222-02-02', CD34: 4.77},
    { PersonNr: '550505-5555', Namn : 'bbdasasdsd bbasdd ',Diagnos: 'gfjhg',Stamcellsskord:'tdcsdgf', Skorddatum:'2222-02-02', Transplantation: '2222-02-02',  CD34: 5.55},
    { PersonNr: '660606-6666', Namn: 'Frisbee', Diagnos:'4564657', Stamcellsskord:'2222-02-02',       Skorddatum:'2222-02-02', Transplantation : '2222-02-02',    CD34: 2.54},
     
  ];
}