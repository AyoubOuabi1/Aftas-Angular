import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {CompetitionModule} from "../../entities/competition/competition.module";
import {CompetitionService} from "../../services/competitions/competition.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent implements OnChanges,OnInit{

  competitions!:Observable<Array<CompetitionModule>>
  constructor(private competitionService:CompetitionService) {
  }
  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
    this.getCompetitions();
  }

  public getCompetitions():void {
      this.competitions=this.competitionService.getComps();
  }

  refreshTable(): void {
    this.getCompetitions();
  }



}
