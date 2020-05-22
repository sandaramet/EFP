import { Component, OnInit } from '@angular/core';
import { WordCard } from 'src/app/models/WordCard.model';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  data:WordCard = {
    english:"er",
    englishMeaning:["erg"],
    native:"erg",
    nativeMeangin:["ergerg"]
  }
  constructor() { }

  ngOnInit() {}

}
