import { Component,OnDestroy,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TmdbInvokerService } from 'src/app/tmdb.invoker.service';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import { displayEntity, TVShow } from 'src/app/model/tv-show.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit,OnDestroy {

id!: number
detailsEntity$!: Observable<TVShow>
similarShows!: displayEntity[]
showMoreFlag: boolean = true
  constructor(private route: ActivatedRoute,private tmdbService: TmdbInvokerService){}

  ngOnDestroy(): void {
    this.showMoreFlag=true
  }

  ngOnInit(): void {
    // this.showMoreFlag=true
    // console.log('changed flag::'+this.showMoreFlag);

    this.route.params.subscribe(params=>{
      this.showMoreFlag=true
      this.detailsEntity$=(this.tmdbService.fetchDetails(+params['id'],"TV") as Observable<TVShow>)

      this.tmdbService.fetchSimilar(+params['id'],"TV").subscribe(data=>{
        if(data.length>0){
          this.similarShows=data
        }
      })
    })

  }


}
