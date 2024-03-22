import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sub-tittle',
  standalone: true,
  imports: [],
  templateUrl: './sub-title.component.html',
  styleUrl: './sub-title.component.css',
})
export class SubTitleComponent {
  @Input() subTitle: any;
}
