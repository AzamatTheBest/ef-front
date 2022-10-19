import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regstraion',
  templateUrl: './regstraion.component.html',
  styleUrls: ['./regstraion.component.scss']
})
export class RegstraionComponent implements OnInit {
  form!: FormGroup
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    })
  }


  submit(): void{
    this.http.post('http://localhost:8000/api/register', this.form.getRawValue())
    .subscribe(() => this.router.navigate(["/excellent"]));
  }


}
