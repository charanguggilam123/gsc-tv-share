import { Component,Input } from '@angular/core';
import { displayEntity } from 'src/app/model/tv-show.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  @Input('show')show!: displayEntity
  @Input('footerText')footerText!: string


}
