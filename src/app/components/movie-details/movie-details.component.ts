import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sarthak-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie: any;

  constructor(private movieService: MoviesService,
    private activedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activedRoute.params.subscribe(params=>{
      let id = params['imdbID'];
      this.movieService.getMovieDetails(id).subscribe(res=> this.movie = res);
    })
  }

  goback(){
    window.history.back();
  }

}
