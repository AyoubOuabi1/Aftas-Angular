// winners.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Observable} from "rxjs";
import {CompetitionModule} from "../../entities/competition/competition.module";
import {MemberModule} from "../../entities/member/member.module";
import {PodiumService} from "../../services/podium/podium.service";

@Component({
  selector: 'app-winners',
  templateUrl: './winners.component.html',
  styleUrls: ['./winners.component.css']
})
export class PodiumComponent implements OnInit {
  winnersForm: FormGroup;
  competitions!: Observable<Array<CompetitionModule>>;
  winners: MemberModule[] = [];

  constructor(private formBuilder: FormBuilder, private podiumService: PodiumService) {
    this.winnersForm = this.formBuilder.group({
      competitionId: [null, Validators.required],
    });
  }

  ngOnInit(): void {
  }

  onCompetitionChange() {
    // @ts-ignore
    const competitionId = this.winnersForm.get('competitionId').value;
    if (competitionId !== null) {
      this.podiumService.getWinners(competitionId).subscribe(
        (winners) => {
          this.winners = winners;
        },
        (error) => {
          // Handle error
          console.error('Error fetching winners', error);
        }
      );
    }
  }
}
