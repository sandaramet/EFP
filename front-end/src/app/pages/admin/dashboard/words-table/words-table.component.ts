import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  DoCheck,
  OnChanges,
  SimpleChange,
} from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { Router } from "@angular/router";
export interface PeriodicElement {
  position: number;
  english: string;
  native: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, english: "Hydrogen", native: "Hydrogen" },
  { position: 2, english: "Hydrogen", native: "Hydrogen" },
  { position: 3, english: "Hydrogen", native: "Hydrogen" },
  { position: 4, english: "Hydrogen", native: "Hydrogen" },
  { position: 5, english: "Hydrogen", native: "Hydrogen" },
  { position: 6, english: "Hydrogen", native: "Hydrogen" },
  { position: 7, english: "Hydrogen", native: "Hydrogen" },
  { position: 8, english: "Hydrogen", native: "Hydrogen" },
  { position: 9, english: "Hydrogen", native: "Hydrogen" },
];
@Component({
  selector: "app-words-table",
  templateUrl: "./words-table.component.html",
  styleUrls: ["./words-table.component.scss"],
})
export class WordsTableComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  displayedColumns: string[] = [
    "position",
    "english",
    "native",
    "update",
    "delete",
  ];
  constructor(private router: Router) {}
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  remove(id: number) {
    console.log(`Word with id:${id} deleted`);
  }
  update(id: number) {
    console.log(id);
    this.router.navigateByUrl(`admin/dashboard/edit-word-card/${id}`)
  }
}
