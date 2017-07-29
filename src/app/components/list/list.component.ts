import { Component, OnInit,  } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
list : any[] = [{
                  id: 1,
               quote: "Strive not to be a success, but rather to be of value.",
              author: "Albert Einstein"
},
{
                  id: 2,
               quote: "I attribute my success to this: I never gave or took any excuse.",
              author: "Florence Nightingale"
},
{
                  id: 3,
               quote: "You miss 100% of the shots you don’t take.",
              author: "Wayne Gretzky"
},
{
                  id: 4,
               quote: "Life isn't about getting and having, it's about giving and being.",
              author: "Kevin Kruse"
},
{
                  id: 5,
               quote: "Life is what happens to you while you’re busy making other plans.",
              author: "John Lennon"
},
{
                  id: 6,
               quote: "You can never cross the ocean until you have the courage to lose sight of the shore. ",
              author: "Christopher Columbus"
}];

  constructor() {}

  ngOnInit() {}

  removeFromList(emittedId){
    //console.log(emittedId);
    this.list = this.list.filter((everyListItemThatIts) => {
      //console.log(everyListItemThatIts);
       return everyListItemThatIts.id !== emittedId; })
    }
}

