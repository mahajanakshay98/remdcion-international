import {AfterViewInit, Component, ViewChild } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'remdcion-international';
  displayedColumns: string[] = ['position', 'name', 'strength', 'symbol'];
  // General Data source
  generalDataSource = new MatTableDataSource<PeriodicElement>(GENERAL_ELEMENT_DATA);
  //lactum data source
  betalactumDataSource = new MatTableDataSource<PeriodicElement>(BETALACTUM_ELEMENT_DATA);

  sephalasporinsDataSource = new MatTableDataSource<PeriodicElement>(sephalasporins_ELEMENT_DATA);

  steroidsDataSource = new MatTableDataSource<PeriodicElement>(steroids_ELEMENT_DATA);

  @ViewChild("generalPaginator")
  paginator!: MatPaginator;
  
  @ViewChild("betalactumPaginator")
  betalactumpaginator!: MatPaginator;

  @ViewChild("sephalasporinsPaginator")
  sephalasporinspaginator!: MatPaginator;

  @ViewChild("steroidsPaginator")
  steroidspaginator!: MatPaginator;

  backgroundColor: ThemePalette = undefined;
  isActiveBetaLactum!: boolean;

  tabIndex:number= 0;


  ngAfterViewInit() {
    this.generalDataSource.paginator = this.paginator;
    this.betalactumDataSource.paginator = this.betalactumpaginator;
    this.sephalasporinsDataSource.paginator = this.sephalasporinspaginator;
    this.steroidsDataSource.paginator = this.steroidspaginator;
  }

  onClickGeneral() {
    this.tabIndex = 0;
  }

  onClickBetaLactum() {
    this.tabIndex = 1;
  }

  onClickSephalasporins() {
    this.tabIndex = 2;
  }

  onClickSteriods() {
    this.tabIndex = 3;
  }

  
}

export interface PeriodicElement {
  name: string;
  position: number;
  strength: number;
  symbol: string;
}

const GENERAL_ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'BETALACTUM_ELEMENT_DATA', strength: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', strength: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', strength: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', strength: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', strength: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', strength: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', strength: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', strength: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', strength: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', strength: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', strength: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', strength: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', strength: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', strength: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', strength: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', strength: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', strength: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', strength: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', strength: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', strength: 40.078, symbol: 'Ca'},
];

const BETALACTUM_ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'BETALACTUM_ELEMENT_DATA1', strength: 1.0079, symbol: 'H'},
  {position: 2, name: 'BETALACTUM_ELEMENT_DATA2', strength: 4.0026, symbol: 'He'},
  {position: 3, name: 'BETALACTUM_ELEMENT_DATA3', strength: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', strength: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', strength: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', strength: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', strength: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', strength: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', strength: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', strength: 20.1797, symbol: 'Ne'},

];

const sephalasporins_ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Sephalasporins_ELEMENT_DATA1', strength: 1.0079, symbol: 'H'},
  {position: 2, name: 'Sephalasporins_ELEMENT_DATA2', strength: 4.0026, symbol: 'He'},
  {position: 3, name: 'Sephalasporins_ELEMENT_DATA3', strength: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', strength: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', strength: 10.811, symbol: 'B'},
  {position: 6, name: 'Sephalasporins', strength: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', strength: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', strength: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', strength: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', strength: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sephalasporins', strength: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', strength: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Sephalasporins', strength: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Sephalasporins', strength: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', strength: 30.9738, symbol: 'P'},

];

const steroids_ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'steroids_ELEMENT_DATA1', strength: 1.0079, symbol: 'H'},
  {position: 2, name: 'steroids_ELEMENT_DATA2', strength: 4.0026, symbol: 'He'},
  {position: 3, name: 'steroids_ELEMENT_DATA3', strength: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', strength: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', strength: 10.811, symbol: 'B'},
  {position: 6, name: 'steroids', strength: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', strength: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', strength: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', strength: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', strength: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'steroids', strength: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', strength: 24.305, symbol: 'Mg'},
  {position: 13, name: 'steroids', strength: 26.9815, symbol: 'Al'},
  {position: 14, name: 'steroids', strength: 28.0855, symbol: 'Si'},


];

