import { Component } from '@angular/core'
import { SvgIconComponent } from '@shared/components/svg-icon/svg-icon.component'
import ButtonComponent from '@shared/components/button/button.component'

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [SvgIconComponent, ButtonComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {}
