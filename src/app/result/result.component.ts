import { Component, OnInit } from '@angular/core';
import { FORM_CONFIGS } from '../configs/form_config';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  formfields = [];
  signupdata = {};
  constructor(private data: DataService) {
    this.formfields = FORM_CONFIGS;
    this.signupdata = this.data.signupInfo;
  }

  ngOnInit() {
  }

}
