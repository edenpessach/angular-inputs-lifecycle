import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-container',
  templateUrl: './container.component.html',
  styleUrls: [ './container.component.css' ]
})
export class ContainerComponent  {
  name: string;

  constructor() {
    setTimeout(() => {
      this.name = 'eden'
    },0)
  }
  
}
