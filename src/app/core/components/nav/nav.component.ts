import { Component } from '@angular/core'
import { SvgIconComponent } from '@shared/components/svg-icon/svg-icon.component'
import { SearchFormComponent } from '@features/search-form/components/search-form/search-form.component'

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [SvgIconComponent, SearchFormComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {}
