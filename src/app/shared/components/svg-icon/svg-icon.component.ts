import { HttpClient } from '@angular/common/http'
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core'
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'
import { map, shareReplay } from 'rxjs/operators'
import { SvgIconService } from '@shared/services/svg-icon.service'

type Icons = 'link' | 'setting'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-svg-icon',
  styleUrls: ['./svg-icon.component.scss'],
  // *1
  templateUrl: './svg-icon.component.html',
  standalone: true,
})
export class SvgIconComponent implements OnInit {
  @Input() public iconName!: Icons

  public sanitizedSvgContent!: SafeHtml

  constructor(
    private cdr: ChangeDetectorRef,
    private sanitizer: DomSanitizer,
    private http: HttpClient,
    private svgIconService: SvgIconService
  ) {}

  // *2
  public ngOnInit(): void {
    this.loadSvg()
  }

  // *3
  private loadSvg(): void {
    // Exit from the method in case of icon absence
    if (!this.iconName) return
    // Construct your path to an icon
    const svgPath = `/assets/icons/${this.iconName}.svg`

    // Check if the icon is already cached
    if (!this.svgIconService.svgIconMap.has(svgPath)) {
      // *4
      const svg$ = this.http.get(svgPath, { responseType: 'text' }).pipe(
        map(svg => this.sanitizer.bypassSecurityTrustHtml(svg)),
        shareReplay(1)
      )
      // Cache the result: iconName as a key and Observable as a value
      this.svgIconService.svgIconMap.set(svgPath, svg$)
    }

    // Get an Observable with sanitized SVG from the Map
    const cachedSvg$ = this.svgIconService.svgIconMap.get(svgPath)
    // Subscribe to the Observable to get the content
    cachedSvg$?.subscribe({
      next: svg => {
        // Set it to the property
        this.sanitizedSvgContent = svg
        // Trigger the 'detectChanges' method for UI updating
        this.cdr.detectChanges()
      },
      error: error => console.error(`Error loading SVG`, error),
    })
  }
}
