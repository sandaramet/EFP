import { Component, OnInit, Input } from "@angular/core";
import { WordCard } from "src/app/models/WordCard.model";

@Component({
  selector: "app-word-card",
  templateUrl: "./word-card.component.html",
  styleUrls: ["./word-card.component.scss"],
})
export class WordCardComponent implements OnInit {
  @Input() cardData: WordCard;
  constructor() {}

  ngOnInit() {
  }
}
