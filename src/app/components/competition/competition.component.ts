import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CompetitionModule} from "../../entities/competition/competition.module";
import {CompetitionService} from "../../services/competitions/competition.service";

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent {

  competitionForm: FormGroup;

  constructor(private fb: FormBuilder,private competitionService:CompetitionService) {
    this.competitionForm = this.fb.group({
      id: [null],
      code: [null],
      date: [null, Validators.required],
      startTime: [null, Validators.required],
      endTime: [null, Validators.required],
      numberOfParticipants: [null, [Validators.required, Validators.min(3)]],
      location: [null, Validators.required],
      status: [null],
      amount: [null, [Validators.required,Validators.min(0)]]
    });
  }
  onSubmit() {
    if (this.competitionForm.valid) {
      const competitionData: CompetitionModule = this.competitionForm.value;
      this.competitionService.save(competitionData).subscribe(
        {
          next : (data) =>{
            console.log('Competition Data:', data);
          },
          error : (data) =>{
              console.log('Error '+data);
          }

        }
      );
    } else {
      console.log('all inputs fields required')
    }
  }
}
