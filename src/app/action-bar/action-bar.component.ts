import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent implements OnInit {
  @Input() step: number = 1
  @Output() numberChange = new EventEmitter()
  num = 0

  constructor() { }

  ngOnInit(): void {
  }

  decrease() {
    if (this.num - this.step >= 0) {
      this.num -= this.step
      this.numberChange.emit(this.num)

    }
  }

  increase() {
    if (this.num + this.step <= 100) {
      this.num += this.step
      this.numberChange.emit(this.num)

    }
  }

}
