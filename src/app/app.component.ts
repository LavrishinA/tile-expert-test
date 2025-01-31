import { Component } from '@angular/core'
import { SvgIconComponent } from '@shared/components/svg-icon/svg-icon.component'
import { NgOptimizedImage } from '@angular/common'
import { RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SvgIconComponent, NgOptimizedImage, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'tile-expert-test'
}
