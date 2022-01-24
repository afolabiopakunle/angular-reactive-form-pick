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
    this.form = this.fb.group({
      biodata: this.fb.group({
        firstName: ['Jide'],
        lastName: ['']
      }),
      email: [''],
      skills: this.fb.group({
        skillName: [''],
        yearsOfExperience: [''],
        proficiency: ['beginner']
      })
    })

  }

  onSubmit() {
      console.log(this.form.value)
  }
}
