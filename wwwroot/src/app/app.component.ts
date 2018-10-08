import { Component } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'CoC-angular';
  public persons: Array<any> = [
    {id:1, name: 'Martin Andersson', description:'Coolest guy ever'},
    {id:2, name: 'June', description: 'Stone hearted killer'},
    {id:3, name: 'Cat', description: "You will proffess your love whilst she is ripping your heart out"},
    {id:4, name: 'Frank Hammer', description:"Eyes that have seen to much"},
    {id:5, name: 'Card 5', description:"test"},
    {id:6, name: 'Card 6', description:"test"},
    {id:7, name: 'Card 7', description:"test"},
    {id:8, name: 'Card 8', description:"test"},
    {id:9, name: 'Card 9', description:"test"},
    {id:10, name: 'Card 10', description:"test"},
  ];
}
