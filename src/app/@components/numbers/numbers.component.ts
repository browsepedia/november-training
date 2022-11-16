import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnChanges,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BehaviorSubject, interval } from 'rxjs';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NumbersComponent {
  constructor(private _detector: ChangeDetectorRef) {
    this._detector.detach();
    interval(1000).subscribe((value) => this.number$.next(value));

    setTimeout(() => this._detector.reattach(), 10000);
  }

  @Input() public set numbers(numbers: number[]) {
    this._numbers = numbers;
    this._detector.detectChanges();
  }

  public get numbers(): number[] {
    return this._numbers;
  }

  private _numbers: number[] = [];

  protected number$ = new BehaviorSubject(0);

  onButtonClick(): void {
    console.log('test');
  }
}
