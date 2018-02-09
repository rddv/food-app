import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer, Input} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  @HostBinding('class.show') isOpen = false;
  @HostListener('click') toggleOpen(eventData: Event) {
    this.isOpen = !this.isOpen;
  }
  ngOnInit() { }
}

