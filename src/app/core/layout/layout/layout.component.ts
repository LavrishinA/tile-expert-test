import { Component } from '@angular/core'
import { NgOptimizedImage } from '@angular/common'
import { NavComponent } from '@core/components/nav/nav.component'

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [NgOptimizedImage, NavComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {}
