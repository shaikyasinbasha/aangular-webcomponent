import { Component, OnInit } from '@angular/core';
import { FORM_CONFIGS } from '../configs/form_config';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  formfields = [];
  constructor(private data: DataService) {
    this.formfields = FORM_CONFIGS;
   }

  ngOnInit() {

  }

  receiveMessage($event) {
    this.data.updateFieldValues($event);
  }
}
