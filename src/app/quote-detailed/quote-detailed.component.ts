import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detailed',
  templateUrl: './quote-detailed.component.html',
  styleUrls: ['./quote-detailed.component.css']
})
export class QuoteDetailedComponent implements OnInit {

  numberOfVotes: number = 0;

  upvoteButtonClick() {
    this.numberOfVotes++;
  }

  downvoteButtonClick() {
    this.numberOfVotes--;
  }

  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
