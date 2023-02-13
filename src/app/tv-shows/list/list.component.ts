import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { displayEntity } from 'src/app/model/tv-show.model';
import { TmdbInvokerService } from 'src/app/tmdb.invoker.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  trendingShows$!: Observable<Array<displayEntity>>
  constructor(private tmdbService:TmdbInvokerService){}

  ngOnInit(): void {
    this.trendingShows$=this.tmdbService.fetchPopular()
  }

}
