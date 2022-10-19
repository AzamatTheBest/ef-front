import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import { University } from 'src/app/model/univ';
import { UnivsService } from 'src/app/service/univs.service';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  term = ''
  univs$!: Observable<University[]>

  constructor(private univsService: UnivsService) {
  }


  ngOnInit(): void {
    this.univs$ = this.univsService.getAll()
  }
}
