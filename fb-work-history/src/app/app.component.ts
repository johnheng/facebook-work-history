import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FacebookService, InitParams, LoginOptions, LoginResponse } from 'ng2-facebook-sdk';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  form: FormGroup;
  accessToken: string;
  workHistory: Work[];

  constructor(
    private _formBuilder: FormBuilder,
    private fb: FacebookService
  ) {
    let initParams: InitParams = {
      appId: '554273244972167',
      xfbml: true,
      version: 'v2.12'
    };

    fb.init(initParams);
  }
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

  getFbInfo() {
    const options: LoginOptions = {
      scope: 'user_birthday,user_work_history,user_location,user_posts,email',
      return_scopes: true,
      enable_profile_selector: true
    };

    this.fb.login(options).then(
      (response: LoginResponse) => {
        console.log('Logged in', response);
        this.accessToken = response.authResponse.accessToken;

        this.fb.api('/me?fields=id,name,work,birthday,location,address,email')
          .then((res: ApiResponse) => {
            console.log(res);
            this.form.controls['dateOfBirth'].setValue(res.birthday);
            this.form.controls['firstName'].setValue(res.name.split(' ')[0]);
            this.form.controls['lastName'].setValue(res.name.split(' ')[1]);
            this.form.controls['email'].setValue(res.email);
            this.form.controls['dateOfBirth'].setValue(res.birthday);
            this.form.controls['city'].setValue(res.location.name.split(',')[0]);
            this.form.controls['state'].setValue(res.location.name.split(',')[0]);

            this.workHistory = res.work;
          })
          .catch(e => console.log(e));
      }

    )
      .catch(e => console.error('Error logging in'));
  }

  logout() {
    this.fb.logout().then(() => console.log('Logged out!'));
  }
}

class ApiResponse {
  id: string;
  email: string;
  location: IdName;
  name: string;
  work: Work[];
  birthday: Date
}

class Work {
  employer: IdName;
  id: string;
  location: IdName;
  position: IdName;
  start_date: string;
  end_date: string;
}

class IdName {
  id: string;
  name: string;
}