import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  testClick() {
    console.log('test even')
  }

  testNumberChange(value: number) {
    console.log('tes num form action bar ', value)
  }

  doMinChange(value: number) {
    console.log('value min', value)

  }

  doMaxChange(value: number) {
    console.log('value max', value)
  }
}
