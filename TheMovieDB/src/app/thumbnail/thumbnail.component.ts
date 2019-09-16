import { Component, OnInit } from '@angular/core';
import { MovieThumbnail } from '../MovieThumbnail';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {

  moviethumb = [
    new MovieThumbnail("https://image.tmdb.org/t/p/w300_and_h450_bestv2/lRjOR4uclMQijUav4OjeZprlehu.jpg")
  ]

  constructor() { }

  ngOnInit() {
  }

}
