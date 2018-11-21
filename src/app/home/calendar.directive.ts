import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCalendarDirective]'
})
export class CalendarDirective {

  constructor(private el: ElementRef) { 
    el.nativeElement.style.color = "orange";
  }

}
