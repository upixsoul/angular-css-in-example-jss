import { Component, OnInit } from '@angular/core';
import jss from 'jss';
import { myStyles, red, green, blue } from './app.component.styles';
interface sheet {
  readonly classes: Object
  readonly update: Function
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public classes: any;
  
  public ngOnInit(): void {
    const sheet: any = jss.createStyleSheet(myStyles as any, { link: true }).attach()
    this.classes = sheet.classes
    sheet.update({
      area: { backgroundColor: red }
    })
  }
}
