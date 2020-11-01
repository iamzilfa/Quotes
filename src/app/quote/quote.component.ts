import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, "When you learn, teach, when you get, give." ,'Maya Angelou','Zilfa',new Date(2020, 3, 6),),
    new Quote(2,'Live as if you were to die tomorrow. Learn as if you were to live forever.','Mahatma Gandhi', 'Brendah',new Date(2020, 4, 9)),
    new Quote(3,"Happiness is not a station you arrive at, but a manner of traveling.",'Margaret Lee Runbeck', 'Diane',new Date(2020, 9, 6)),
    // new Quote(5,'When you learn, teach, when you get, give.','Maya Angelou', 'Tharcise',new Date(2020, 8, 12)),
  ];

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
