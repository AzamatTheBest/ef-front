import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/model/found';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  @Input() order: Order
  id: any
  data: any
  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.getOrderDetailById(this.id)
  }

  getOrderDetailById(id: number): void{
    this.orderService.getById(this.id).subscribe(res=>{
      this.data = res
      this.order = this.data
    })
  }
}
