import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { MesaPokemonDataSource } from './mesa-pokemon-datasource';

@Component({
  selector: 'app-mesa-pokemon',
  templateUrl: './mesa-pokemon.component.html',
  styleUrls: ['./mesa-pokemon.component.css'],
})
export class MesaPokemonComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MesaPokemonDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'image','imageshiny', 'name','species','type','height','weight','abilities','evolution'];

  ngOnInit() {
    this.dataSource = new MesaPokemonDataSource(this.paginator, this.sort);
  }
}
