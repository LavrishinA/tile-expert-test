import { Component } from '@angular/core'
import { SvgIconComponent } from '@shared/components/svg-icon/svg-icon.component'

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [SvgIconComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {}
