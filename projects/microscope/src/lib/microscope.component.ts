import { Component, Input, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

interface ImageInfo {
  x: number;
  y: number;
  width: number;
  height: number;
  ratio: number;
};

@Component({
  selector: 't8g-microscope',
  template: `
    <img #thumb [src]="src" (load)="loaded()">
    <div #magnifier [class.hidden]="hidden"></div>
  `,
  styles: [`
    :host {
      position: relative;
      display: block;
    }
    img {
      max-width: 100%;
    }
    div {
      display: block;
      position: absolute;
      width: 100px;
      height: 100px;
      border: 2px solid red;
      border-radius: 2px;
      top: 0;
      left: 0;
      background-repeat: 'no-repeat';
      background-color: #fff;
    }
    div.hidden {
      display: none;
    }
  `]
})
export class MicroscopeComponent {
  @Input() src: string;
  hidden = true;

  @ViewChild('magnifier', {static: false, read: ElementRef}) magnifier: ElementRef;
  @ViewChild('thumb', {static: false, read: ElementRef}) thumb: ElementRef;

  constructor(private element: ElementRef) {}

  loaded() {

    this.magnifier.nativeElement.style.backgroundImage = `url(${this.src})`;
    this.magnifier.nativeElement.style.backgroundRepeat = 'no-repeat';

    const { x, y, width, height } = this.element.nativeElement.getBoundingClientRect();
    const { naturalWidth, naturalHeight } = this.thumb.nativeElement;
    const ratio = naturalWidth / width;
    const image: ImageInfo = { x, y, width, height, ratio };
    this.magnifier.nativeElement.style.backgroundSize = naturalWidth + 'px ' + naturalHeight + 'px';
    
    fromEvent(this.element.nativeElement, 'mousemove').subscribe((e: MouseEvent) => {
      const { width, height } = this.magnifier.nativeElement.getBoundingClientRect();
      const div = this.magnifier.nativeElement;
      const { offsetX, offsetY } = e;
      div.style.left = `${offsetX + 20}px`;
      div.style.top = `${offsetY + 20}px`;
      this.magnifier.nativeElement.style.backgroundPosition = `${width / 2 - offsetX * image.ratio}px ${height / 2 - offsetY * image.ratio}px`;
    });

    fromEvent(this.element.nativeElement, 'mouseenter').subscribe(() => {
      this.hidden = false;
    });
    fromEvent(this.element.nativeElement, 'mouseleave').subscribe((e: MouseEvent) => {
      this.hidden = true;
    });

  } 
}