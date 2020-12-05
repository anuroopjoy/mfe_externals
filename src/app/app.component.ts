import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ng-elements-shared';
  ngOnInit(): void {
    const script = document.createElement('script');
    script.src = "http://localhost:8080/main.js";
    document.head.appendChild(script);
  }
}
