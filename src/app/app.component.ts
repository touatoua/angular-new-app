import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sqaureWidth = 100
  sqaureHeight = 250
  appCounter = 20
  activate = false

  customerList: string[] = ["tao", "meen", 'biel', "fer"]

  testClick() {
    console.log('test even')
  }

  testNumberChange(value: number) {
    console.log('tes num form action bar ', value)
  }

  doMinChange(value: number) {
    console.log('value min', value)
    this.appCounter = value


  }

  doMaxChange(value: number) {
    console.log('value max', value)
    this.appCounter = value

  }

  pushCustomer() {
    this.customerList.push(`customer ${this.customerList.length + 1}`)
  }

  unshiftCustomer() {
    this.customerList.unshift(`customer ${this.customerList.length + 1}`)
  }

  removeCustomer(index: number) {
    this.customerList.splice(index, 1)
  }
}
