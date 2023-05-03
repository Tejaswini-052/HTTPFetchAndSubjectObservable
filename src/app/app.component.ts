import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'SubjectObservable';
  subject = new Subject<string>();
  ngOnInit(): void {
     
this.subject.subscribe({
  next: (v) => console.log("This is Obervable one:"+v),
});
this.subject.subscribe({
  next: (v) => console.log("This is Observable two:"+v),
});
 
this.subject.next("Tejaswini");
this.subject.next("Riya");
  }
   
}
