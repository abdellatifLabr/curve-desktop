import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { docs } from '../../store/docs';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit {
  docs: any = {};

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.docs = docs;
  }

}
