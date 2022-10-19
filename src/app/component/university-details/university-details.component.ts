import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { University } from 'src/app/model/univ';
import { UnivsService } from 'src/app/service/univs.service';

@Component({
  selector: 'app-university-details',
  templateUrl: './university-details.component.html',
  styleUrls: ['./university-details.component.scss']
})
export class UniversityDetailsComponent implements OnInit {
  @Input() univ: University
  id: any
  data: any
  constructor(
    private univService: UnivsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.getClubDetailById(this.id)
  }

  getClubDetailById(id: number): void{
    this.univService.getById(this.id).subscribe(res=>{
      this.data = res
      this.univ = this.data
    })
  }

}
