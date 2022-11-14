import {
  Component,
  Input,
  AfterViewInit,
  ViewChild,
  ElementRef,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
})
export class ChildComponent {
  private _defaultTitle = 'Default Title';

  @Input() public title: string = this._defaultTitle;

  protected title2: string = 'test';

  public resetTitle(): void {
    this.title = this._defaultTitle;
  }
}
