import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sarthak-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  title: string = "Movie List hear..";
  movies:any[];

  constructor(private moviesService: MoviesService,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(
      qparms=> {
        let q =  qparms['q'];
          this.moviesService.searchMovies(q).subscribe(res =>{
            this.movies = res.Search;
          });
      }
    )

    
    
  }

}
