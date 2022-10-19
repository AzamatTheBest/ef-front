import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Foundation } from 'src/app/model/found';
import { FoundService } from 'src/app/service/found.service';

@Component({
  selector: 'app-foundation-details',
  templateUrl: './foundation-details.component.html',
  styleUrls: ['./foundation-details.component.scss']
})
export class FoundationDetailsComponent implements OnInit {
  @Input() found: Foundation
  id: any
  data: any
  constructor(
    private foundService: FoundService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.getFoundDetailById(this.id)
  }

  getFoundDetailById(id: number): void{
    this.foundService.getById(this.id).subscribe(res=>{
      this.data = res
      this.found = this.data
    })
  }
}
