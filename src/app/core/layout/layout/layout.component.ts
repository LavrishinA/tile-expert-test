import { Component } from '@angular/core'
import { NgOptimizedImage } from '@angular/common'
import { NavComponent } from '@core/components/nav/nav.component'
import { SearchFormComponent } from '@features/expandable-form/components/search-form/search-form.component'
import ButtonComponent from '@shared/components/button/button.component'
import { SvgIconComponent } from '@shared/components/svg-icon/svg-icon.component'

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NavComponent,
    SearchFormComponent,
    SearchFormComponent,
    ButtonComponent,
    SvgIconComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {}
