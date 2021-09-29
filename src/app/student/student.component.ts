import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
headers:any=[ "Id","Name","Remarks","Total Working days","Attended Days"];
rows=[
  {
    "Id":"20Y001",
    "Name":"Arun",
    "Remarks":"Need Improvement",
    "Total Working days":21,
    "Attended Days":15
  },
  {
    "Id":"20Y002",
    "Name":"Balaji",
    "Remarks":"Good",
    "Total Working days":21,
    "Attended Days":20
  },
  {
    "Id":"20Y003",
    "Name":"Charan",
    "Remarks":"Bad",
    "Total Working days":21,
    "Attended Days":10
  },
]



}
