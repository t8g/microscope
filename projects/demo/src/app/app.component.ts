import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div style="width:300px;margin:200px;">
    <t8g-microscope src="assets/flowers.jpg"></t8g-microscope>
  </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'demo';
}
