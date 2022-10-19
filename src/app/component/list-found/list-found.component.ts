import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Foundation } from 'src/app/model/found';
import { FoundService } from 'src/app/service/found.service';

@Component({
  selector: 'app-list-found',
  templateUrl: './list-found.component.html',
  styleUrls: ['./list-found.component.scss']
})
export class ListFoundComponent implements OnInit {
  term = ''
  found$!: Observable<Foundation[]>
  constructor(private foundService: FoundService) { }

  ngOnInit(): void {
    this.found$ = this.foundService.getAll()
  }

}
