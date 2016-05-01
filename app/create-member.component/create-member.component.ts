import {Component} from 'angular2/core';
import {Validators,FormBuilder,Control,NgForm,ControlGroup} from 'angular2/common'; 
import {Member} from '../../app/Member/member';
import {Contact} from '../../app/Member/member';
import * as Rx from "rxjs/Rx";

@Component({
    selector:'create-member',
    styleUrls:['app/create-member.component/create-member.component.css'],
    templateUrl:'app/create-member.component/create-member.component.html'
})

export class CreateMemberComponent{
    public newMember = new Member('','','','','','','',''); 
    public newContact = new Contact('','','','','','','','','','');        
    public submitted = false;
    form:ControlGroup;
    
    constructor(fb:FormBuilder){
        this.form=fb.group(this.newMember);
    
}
    onSubmit(){
        this.submitted = true;
        
        alert(this.newMember.FirstName + this.newMember.LastName);
    }
    
    
}
