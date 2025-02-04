import { Component, Input } from '@angular/core'
import { SvgIconComponent } from '@shared/components/svg-icon/svg-icon.component'
import { NgOptimizedImage } from '@angular/common'
import ButtonComponent from '@shared/components/button/button.component'

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [SvgIconComponent, NgOptimizedImage, ButtonComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  @Input() notificationCount = 32
}
