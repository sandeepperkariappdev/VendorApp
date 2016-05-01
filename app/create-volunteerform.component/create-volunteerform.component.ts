import {Component} from 'angular2/core';
import {Volunteer} from '../../app/Volunteer/volunteer';
import * as Rx from "rxjs/Rx";
import {Validators, Control, FormBuilder, ControlGroup} from 'angular2/common';

@Component({
    selector:'volunteer-form',
    templateUrl:'app/create-volunteerform.component/create-volunteerform.component.html'
})

export class VolunteerFormComponent{
    form:ControlGroup;
    name:Control = new Control("",Validators.required);
    hours:Control = new Control("",Validators.required);
    notes:Control = new Control("");
    
    constructor(fb:FormBuilder){
        this.form=fb.group({
            "name":this.name,
            "hours":this.hours,
            "notes":this.notes        
        });
        
        // this.form.valueChanges.map((value) => {
        //     value.name= value.name.toUpperCase();
        //     return value;
        // }).filter((value) => this.form.valid).subscribe((value) => {
        //     alert("Form Value"+JSON.stringify(value));
        // });
        
        //Observe only one value changes
        
        // this.form.controls.name.valueChanges.subscribe(value=>{            
        // });
    }
 
 onSubmit(){
     alert(this.form);
     
 }   
}