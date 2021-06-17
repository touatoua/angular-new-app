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
  @Input() counter = 20
  @Input() inputDisplay = true

  constructor() { }

  ngOnInit(): void {
  }

  decrease() {
    if (this.counter - this.step >= 0) {
      this.counter -= this.step
      this.numberChange.emit(this.counter)

    }
  }

  increase() {
    if (this.counter + this.step <= 100) {
      this.counter += this.step
      this.numberChange.emit(this.counter)

    }
  }

}
