import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
  	trigger('goals', [
  		transition('* => *', [
  			query(':enter', style({ opacity: 0 }), { optional: true }),
  							// delay
  			query(':enter', stagger('300ms', [
  				animate('.6s ease-in', keyframes([
  					style({opacity: 0, transform: 'transalteY(-75%)', offset: 0}),
  					style({opacity: .5, transform: 'transalteY(35px)', offset: .3}),
  					style({opacity: 1, transform: 'transalteY(0)', offset: 1})
				]))]), {optional: true})
		])
	])
  ]
})
export class HomeComponent implements OnInit {

// When we want to communicate with home componenent put the code down here

	// Properties:
	itemCount: number;
	btnText: string = "Add an item"
	goalText: string = "My first life goal";
	goals = [];

  constructor( private _data: DataService) { }

  // Life cycle hook, Initizated when the app load or the component itself load
  // Which mean it will run whenever the page load
  ngOnInit() {
  	this._data.goal.subscribe(res => this.goals = res);
  	this._data.changeGoal(this.goals);
  	this.itemCount = this.goals.length;
  }

  addItem() {
  	this.goals.push(this.goalText);
  	this.goalText = '';
  	this.itemCount = this.goals.length;
  	this._data.changeGoal(this.goals);
  }

  removeItem(i) {
  	this.goals.splice(i, 1);
  	this.itemCount = this.goals.length;
  	this._data.changeGoal(this.goals);
  }
}
