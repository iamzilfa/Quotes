import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detailed',
  templateUrl: './quote-detailed.component.html',
  styleUrls: ['./quote-detailed.component.css']
})
export class QuoteDetailedComponent implements OnInit {

  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }


upVote = 0;
downVote = 0;

    upvote(){
    
      this.upVote = this.upVote+1;
  
    }
   downvote(){
      
      this.downVote = this.downVote+1;
    }
  
  constructor() {}

  ngOnInit(): void {
  }

}
