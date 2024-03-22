import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  constructor(private el: ElementRef) { }

  @HostListener('blur') onBlur(){
    const inputValue: string = this.el.nativeElement.value;
    this.el.nativeElement.value = inputValue.toUpperCase()
  }

}
