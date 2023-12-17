import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CompetitionModule } from "../../entities/competition/competition.module";
import { CompetitionService } from "../../services/competitions/competition.service";
import { Observable } from "rxjs";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent implements OnInit {

  competitions!: Array<CompetitionModule>
  selectedCompetition: CompetitionModule | null = null;
  currentPageSelected:number =0;
  currentPage: number = 0;
  pageSize: number = 5;
  totalPages: number = 0;

  constructor(private competitionService: CompetitionService) {
  }


  ngOnInit(): void {
    this.getCompetitions();

  }

  getCompetitions(): void {
    this.competitionService.getComps(this.currentPage, this.pageSize)
      .subscribe(response => {
        this.competitions = response.content;
        this.totalPages = response.totalPages;
      });
  }
  refreshTable(): void {
    this.getCompetitions();
  }

  editComp(competition: CompetitionModule): void {
    this.selectedCompetition = competition;
  }

  getCurretPageSelected(currentPageSelected:number):void{
    this.currentPageSelected=currentPageSelected;
  }
  resetForm() :void{
    this.selectedCompetition=null;
  }
  public deleteComp(comp: CompetitionModule): void {
    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {

        this.competitionService.delete(comp).subscribe(
          () => {
            console.log('Competition deleted successfully');
            this.getCompetitions();
          },
          (error) => {
            console.error('Error deleting competition:', error);
          }
        )
        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        )

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }

  changePage(page: number): void {
    this.currentPage = page;
    this.getCompetitions();
  }


  getPages(): number[] {
    return Array.from({ length: this.totalPages }, (_, index) => index);
  }
}
