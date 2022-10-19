import { Component, Input, OnInit } from '@angular/core';
import { University } from 'src/app/model/univ';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.scss']
})
export class UniversityComponent {
  @Input() university: University

  details = false

}
