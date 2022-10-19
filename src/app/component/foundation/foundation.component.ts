import { Component, Input, OnInit } from '@angular/core';
import { Foundation } from 'src/app/model/found';

@Component({
  selector: 'app-foundation',
  templateUrl: './foundation.component.html',
  styleUrls: ['./foundation.component.scss']
})
export class FoundationComponent{
  @Input() foundation: Foundation

  details = false


}
