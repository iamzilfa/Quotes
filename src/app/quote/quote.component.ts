import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, 'When you learn, teach, when you get, give.','Maya Angelou','Zilfa',new Date(2020,3,14),5,2),
    new Quote(2,'Live as if you were to die tomorrow. Learn as if you were to live forever.','Mahatma Gandhi', 'Diane',new Date(1971,4,11),4,8),
    new Quote(3,'Nothing can dim the light shines which shines within.','Maya Angelou', 'Brendah',new Date(1965,9,6),5,4),
    new Quote(5,'Do one thing every day that scares you.','Eleanor Roosevelt', 'Tharcissie',new Date(1988,9,5),8,4),
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

  constructor() { }

  ngOnInit(): void {
  }

}
