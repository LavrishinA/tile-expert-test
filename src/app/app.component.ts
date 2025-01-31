import { Component } from '@angular/core'
import { SvgIconComponent } from '@shared/components/svg-icon/svg-icon.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SvgIconComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'tile-expert-test'
}
