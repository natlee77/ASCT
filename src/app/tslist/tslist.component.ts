import {DataSource} from '@angular/cdk/collections';

// import {BehaviorSubject, Observable} from 'rxjs';
import { Component, OnInit } from '@angular/core'; 
import { FormGroup, FormControl, Validators, FormBuilder,} from '@angular/forms';
// import { MatTableDataSource } from '@angular/material/table';

 
 
 export interface TSlist {

   PersonNr: string;
   Namn:string;
   Diagnos: string;
   Region: string;
   Skord : string;
   tx1 : string;
   tx2 : string;
   tx3 : string;
   Avliden : string;
   CD34: number;
  }
 


@Component({
  selector: 'app-TSlist',
  templateUrl: './tslist.component.html',
  styleUrls:  ['./tslist.component.css'] 
})

export class TSlistComponent   {
//    ------table ----------
   displayedColumns: string[] = ['PersonNr',
                                'Namn',
                                'Diagnos',
                                'Region',
                                'Skord', 
                                'tx1',
                                'tx2',
                                'tx3',
                                'Avliden',
                                'CD34'];
  
   
   TSlista: TSlist[] = [
    { PersonNr: '440404-4444', Namn: 'aaa aaa', Diagnos:'lymfom', Region:'tyghfgf', Skord:'2222-02-02', tx1 :'2222-02-02', tx2 : '2222-02-02', tx3 : '2222-02-02', Avliden: 'jjhjkh', CD34: 4.77},
    { PersonNr: '550505-5555', Namn : 'bbdasasdsd bbasdd ', Diagnos:'myelom', Region:'tdcsdgf', Skord:' ', tx1 :'2222-02-02', tx2 : '2222-02-02', tx3 : '2222-02-02', Avliden: 'jhgjhg', CD34: 5.55},
    { PersonNr: '660606-6666', Namn: 'Frisbee', Diagnos:'4564657', Region:'sasaf', Skord:'2222-02-02', tx1 :'2222-02-02', tx2 : '2222-02-02', tx3 : '2222-02-02', Avliden: 'fhf',    CD34: 2.54},
     
  ];
}