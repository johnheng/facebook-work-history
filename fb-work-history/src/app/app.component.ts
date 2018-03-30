import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  form: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
  ) {}
  ngOnInit() {
    this.form = this._formBuilder.group({
      firstName: ['', Validators.compose(
        [
          Validators.required,
        ]
      )],
      middleName: [''],
      lastName: ['', Validators.compose(
        [
          Validators.required
        ]
      )],
      dateOfBirth: ['', Validators.compose(
        [
          Validators.required
        ]
      )],
      ssn: ['', Validators.compose(
        [
          Validators.required
        ])],
      email: ['', Validators.compose(
        [
          Validators.required
        ]
      )],
      phone: ['', Validators.compose(
        [
          Validators.required
        ])],
      street1: ['', 
          Validators.required
        ],
      street2: [''],
      city: ['', 
          Validators.required
        ],
      state: ['', 
          Validators.required
        ],
      zip: ['', Validators.compose(
        [
          Validators.required
        ])],
      country: ['', 
          Validators.required
        ]
    });
  }
}
