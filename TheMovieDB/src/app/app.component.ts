import { Component } from '@angular/core';
import {MovieInfoComp} from './MovieInfoComp';
import { MovieThumbnail } from './MovieThumbnail';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TheMovieDB';

  movieinfocomp = [
    new MovieInfoComp("How To Train Your Dragon 2", 7.7, "A Movie About Dragons", 102, "2014-06-14")
  ];

  moviethumb = [
    new MovieThumbnail("https://image.tmdb.org/t/p/w300_and_h450_bestv2/lRjOR4uclMQijUav4OjeZprlehu.jpg")
  ]
}
