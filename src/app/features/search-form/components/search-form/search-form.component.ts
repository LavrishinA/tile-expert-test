import { Component, ElementRef, HostListener, inject } from '@angular/core'
import ButtonComponent from '@shared/components/button/button.component'
import { SvgIconComponent } from '@shared/components/svg-icon/svg-icon.component'
import { animate, state, style, transition, trigger } from '@angular/animations'

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [ButtonComponent, SvgIconComponent],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.scss',
  animations: [
    trigger('slideInOut', [
      state(
        'in',
        style({
          width: '650px',
          opacity: 1,
        })
      ),
      state(
        'out',
        style({
          width: '0',
          opacity: 0,
        })
      ),
      transition('out => in', [
        animate(
          '0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)',
          style({ width: '650px', opacity: 1 })
        ),
      ]),
      transition('in => out', [
        animate('0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530)', style({ width: '0', opacity: 0 })),
      ]),
    ]),
  ],
})
export class SearchFormComponent {
  isOpen = false
  isFormHidden: string | null = ''
  elementRef = inject(ElementRef)

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen = false
    }
  }

  toggleInput(): void {
    this.isOpen = !this.isOpen
  }

  get animationState() {
    return this.isOpen ? 'in' : 'out'
  }

  onAnimationDone() {
    if (!this.isOpen) {
      this.isFormHidden = ''
    }
  }

  onAnimationStart() {
    if (this.isOpen) {
      this.isFormHidden = null
    }
  }
}
