import { Component, OnInit, VERSION } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // this.form = new FormGroup({
    //   biodata: new FormGroup({
    //     firstName: new FormControl(),
    //     lastName: new FormControl(),
    //   }),
    //   email: new FormControl(),
    //   skills: new FormGroup({
    //     skillName: new FormControl(),
    //     yearsOfExperience: new FormControl(),
    //     proficiency: new FormControl()
    //   })
    // });

    this.form = this.fb.group({
      biodata: this.fb.group({
        firstName: [''],
        lastName: ['']
      }),
      email: [''],
      skills: this.fb.group({
        skillName: [''],
        yearsOfExperience: [''],
        proficiency: ['']
      })
    })

  }

  onSubmit() {
      console.log(this.form.value)
  }
}
