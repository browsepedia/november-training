import {
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appHoverBackground]',
})
export class HoverBackgroundDirective {
  constructor(
    private _elementRef: ElementRef<HTMLDivElement>,
    private _renderer: Renderer2
  ) {}

  @Input() public appHoverBackground = 'cadetblue';

  @Output() public mouseEnter = new EventEmitter<MouseEvent>();

  @HostListener('mouseenter', ['$event'])
  private _onMouseEnter(event: MouseEvent): void {
    this._renderer.setStyle(
      this._elementRef.nativeElement,
      `background-color`,
      this.appHoverBackground
    );

    this.mouseEnter.emit(event);
  }

  @HostListener('mouseleave')
  private _onMousLeave(): void {
    this._renderer.setStyle(
      this._elementRef.nativeElement,
      `background-color`,
      'inherit'
    );
  }
}
