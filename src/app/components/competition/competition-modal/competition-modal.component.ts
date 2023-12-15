import {Component, Directive, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CompetitionService} from "../../../services/competitions/competition.service";
import {CompetitionModule} from "../../../entities/competition/competition.module";
import {  EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-competition-modal',
  templateUrl: './competition-modal.component.html',
  styleUrls: ['./competition-modal.component.css'],
})

export class CompetitionModalComponent implements OnInit{

  @Output() competitionAdded: EventEmitter<void> = new EventEmitter<void>();
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

  ngOnInit(): void { }
  onSubmit() {
    if (this.competitionForm.valid) {
      const competitionData: CompetitionModule = this.competitionForm.value;
      this.competitionService.save(competitionData).subscribe(
        {
          next : (data) =>{
            console.log('Competition Data:', data);
            this.competitionAdded.emit();
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
