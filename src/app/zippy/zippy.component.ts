import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent{
 
  spielerListe = [{playerName: "Erling Haaland", position:"Stürmer"}, {playerName: "Robert Lewandowski", position: "Stürmer"}]

  spieler = {playerName: "", position: ""}


  positionList = ["Torwart", "Verteidiger", "Mittelfeld", "Stürmer"]

  addPlayer() {
    this.spielerListe.push(this.spieler);
    console.log(this.spielerListe)
  }

  name: any;
  positionOption: any;
  

 
}
