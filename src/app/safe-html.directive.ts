import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSafeHtml]',
})
export class SafeHtmlDirective {
  @Input() set appSafeHtml(content: string | undefined) {
    if (content) {
      this.renderer.setProperty(this.el.nativeElement, 'innerHTML', content);
    }
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}
}
