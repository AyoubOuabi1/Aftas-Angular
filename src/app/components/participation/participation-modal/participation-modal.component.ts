import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RankingService } from "../../../services/ranking/ranking.service";
import { RankingModule } from "../../../entities/ranking/ranking.module";
import { MemberService } from "../../../services/member/member.service";
import { CompetitionService } from "../../../services/competitions/competition.service";
import { Observable } from "rxjs";
import { MemberModule } from "../../../entities/member/member.module";
import { CompetitionModule } from "../../../entities/competition/competition.module";

@Component({
  selector: 'app-participation-modal',
  templateUrl: './participation-modal.component.html',
  styleUrls: ['./participation-modal.component.css']
})
export class ParticipationModalComponent implements OnInit {
  @Output() participantAdded: EventEmitter<void> = new EventEmitter<void>();
  pactcipantForm: FormGroup;

  membersList!: Observable<Array<MemberModule>>;
  competitionsList!: Observable<Array<CompetitionModule>>;

  constructor(
    private fb: FormBuilder,
    private rankingService: RankingService,
    private memberService: MemberService,
    private competitionService: CompetitionService
  ) {
    this.pactcipantForm = this.fb.group({
      competitionId: [null, Validators.required],
      memberId: [null, Validators.required]
    });
  }

  onSubmit() {
    if (this.pactcipantForm.valid) {
      const participantId: RankingModule = this.pactcipantForm.value;
      this.rankingService.save(participantId).subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (data) => {
          console.log(data);
        }
      });
    } else {
      console.log('All input fields are required');
    }
  }

  ngOnInit(): void {
    this.membersList = this.memberService.getMembers();
    this.competitionsList = this.competitionService.getAllComps();
  }
}