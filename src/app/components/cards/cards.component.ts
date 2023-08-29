import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
	@Input()
	gameDesc:string = ""
	@Input()
	gameCover:string = ""
	@Input()
	gameLabel:string=""
	@Input()
	gameType:string ="XPTO | PS4"
	@Input()
	gamePrice:string = "R$ 399,90"

  constructor() { }

  ngOnInit(): void {
  }

}
