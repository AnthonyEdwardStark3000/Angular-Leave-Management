import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  headers:any=[ "Id","Name","Remarks","Date","Attendance"];

  rows=[
    {
      "Id":"20Y001",
      "Name":"Arun",
      "Remarks":"Need Improvement",
      "Date":21,
      "Attendance":"Present"
    },
    {
      "Id":"20Y002",
      "Name":"Balaji",
      "Remarks":"Good",
      "Date":21,
      "Attendance":"Present"
    },
    {
      "Id":"20Y003",
      "Name":"Charan",
      "Remarks":"Bad",
      "Date":21,
      "Attendance":"Absent"
    },
  ]



}
