import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-acknowledge',
  templateUrl: './acknowledge.component.html',
  styleUrls: ['./acknowledge.component.css']
})
export class AcknowledgeComponent {
  @Input() name: string;
  @Input() mobile: string;
  @Input() email: string;
}
