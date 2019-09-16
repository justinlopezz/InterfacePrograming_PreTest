import { Component, OnInit } from '@angular/core';
import { MovieInfoComp } from '../MovieInfoComp';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {

  movieinfocomp = [
    new MovieInfoComp("How To Train Your Dragon 2", 7.7, "A Movie About Dragons", 102, "2014-06-14")
  ];

  constructor() { }

  ngOnInit() {
  }

}
