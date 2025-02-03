import { Component } from '@angular/core'
import { NgOptimizedImage } from '@angular/common'
import { NavComponent } from '@core/components/nav/nav.component'
import { SearchFormComponent } from '@features/search-form/components/search-form/search-form.component'

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [NgOptimizedImage, NavComponent, SearchFormComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {}
