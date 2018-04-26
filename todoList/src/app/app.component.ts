//3 different sections

import { Component } from '@angular/core'; //Import

@Component({ //Component decorator
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


// All the logics
export class AppComponent {
  title = 'ToDo List';
}
