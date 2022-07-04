import { Component, OnInit } from '@angular/core';
import { WeekDay } from '@angular/common'
import { Validators, FormBuilder, FormGroup } from '@angular/forms'

// import { FormGroup, FormControl, Validators, FormBuilder,} from '@angular/forms';
export interface Place{
  item:string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  today: number = Date.now();
  places  : Place[]=[
    { item: 'Blodcentral'},
    {item: 'Hematologen M-huset vån-3'}
  ]



  public weekDays: WeekDay[] = [WeekDay.Monday, WeekDay.Tuesday, WeekDay.Wednesday, WeekDay.Thursday,
                              WeekDay.Friday, WeekDay.Saturday, WeekDay.Sunday];
                              "weekday": {
                                "1": "Måndag",
                                "2": "Tirsdag",
                                "3": "Onsdag",
                                "4": "Torsdag",
                                "5": "Fredag",
                                "6": "Lördag",
                                "0": "Söndag"
                            }


  // public selectedWeekDay: WeekDay;

  imgUrl=`./assets/logo.png`
  public ssn: FormGroup;

  constructor(private fb: FormBuilder) {
    this.ssn = fb.group({
      url: ['', [Validators.required, Validators.pattern('^(19|20)?\d{2}((02[0-2][0-9])|((([0](1|[3-9]))|([1]([0-2])))(([0-2]\d)|(3[01])))|((0\d)|(1[0-2])6[1-9]|[78]\d|9[01]))-?(T\d{3}|\d{4})$')]]
    })
  }

  get getUrl(){
    return this.ssn.controls;
  }
  onFormSubmit(){
    alert(this.ssn.value);
  }
  ngOnInit(): void {
    // this.contactForm=this.fb.group({
    //   places:[ null]
    // });

  }

  actuellaPatienter(){

  }


  //validate
  isValidSwedishSSN() {




};

}
