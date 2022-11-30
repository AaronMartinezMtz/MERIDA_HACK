import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-paginador',
  templateUrl: './paginador.component.html',
  styleUrls: ['./paginador.component.css']
})
export class PaginadorComponent implements OnInit {

  @Input() totalResults: number = 0;
  @Input() currentPage: number = 0;
  @Input() limit: number = 0;

  @Output() chageCurrentPage: EventEmitter<number> = new EventEmitter();


  public totalPages: number = 0;
  public lastPage: number = 0;
  public pages: number[] = [];


  constructor() { }


  ngOnInit(): void {
    // console.log('totalResults',this.totalResults)
    // console.log('currentPage',this.currentPage)
    // console.log('limit',this.limit)
    
      this.totalPages = Math.trunc( this.totalResults / this.limit )
      if ( (this.totalResults % this.limit) != 0 ) {
        this.totalPages = this.totalPages + 1;
      }
      this.lastPage = this.totalPages;

      // console.log('resto', this.totalResults % this.limit)
      // console.log('totalPages', this.totalPages)

      for (let i = 1; i <= this.totalPages; i++) {
        this.pages.push(i)

      }

      console.log(this.totalPages);
      
  }


  changePage( page: number ):void {
    this.currentPage = page;
    this.chageCurrentPage.emit( page );
  }


}