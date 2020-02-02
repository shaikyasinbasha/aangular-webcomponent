import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

interface IField{
  name: string,
  label: string,
  type: string
}


@Component({
  selector: 'app-input-wrapper',
  templateUrl: './input-wrapper.component.html',
  styleUrls: ['./input-wrapper.component.css']
})
export class InputWrapperComponent implements OnInit {

  @Input() field: IField;
  @ViewChild("inputfield", {static: true}) inputRefs;
  @Output() messageEvent = new EventEmitter<object>();

  constructor() {
    this.updateFieldValue = this.updateFieldValue.bind(this);
  }

  ngOnInit() {
    this.inputRefs.nativeElement.addEventListener('cwc-keyup', this.updateFieldValue);

    this.inputRefs.nativeElement.setAttribute('type', this.field.type);
    this.inputRefs.nativeElement.setAttribute('name', this.field.name);
  }

  updateFieldValue(event: CustomEvent) {
    this.messageEvent.emit({
      name: this.field.name,
      value:event.detail.value
    })
  }

}
