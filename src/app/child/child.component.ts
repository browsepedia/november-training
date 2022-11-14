import {
  Component,
  Input,
  AfterViewInit,
  ViewChild,
  ElementRef,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
})
export class ChildComponent implements OnInit, AfterViewInit {
  constructor() {
    console.log(this._myDiv);
  }

  @Input() public title: string = '';

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this._myDiv?.nativeElement.classList.add('background-red');
  }

  @ViewChild('myDiv')
  private _myDiv: ElementRef<HTMLDivElement> | undefined;
}
