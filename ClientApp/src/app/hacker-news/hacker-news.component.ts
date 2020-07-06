import { Component, OnInit  } from '@angular/core';
import { HackerNewsService } from '../services/hacker-news.service';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { IStory } from '../models/IStory';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hacker-news',
  templateUrl: './hacker-news.component.html',
  styleUrls: ['./hacker-news.component.css'],
})
export class HackerNewsComponent implements OnInit {
  // newStories$: IStory[];
  items: IStory[];
  pageOfItems: Array<any>;

  constructor(private hackerNewsService: HackerNewsService) {
  }

  ngOnInit() {
    this.loadStories();
   // this.get('');
  }
  // todo: remove loadStories???
  loadStories() {
    console.log('load stories ');
    // this.newStories$ = this.hackerNewsService.getNewStories();
    this.hackerNewsService.getNewStories().subscribe(
      result => {
        // this.newStories$ = result;
        this.items = result;
      },
      error => console.error(error)
    );
  }

  search(event: KeyboardEvent) {
       console.log((event.target as HTMLTextAreaElement).value);
   // this.get((event.target as HTMLTextAreaElement).value);
  }

  get(searchTerm: string) {
    // console.log(searchTerm);
      this.hackerNewsService.getStories(searchTerm).subscribe(
        result => {
          // this.newStories$ = result;
          this.items = result;
        },
        error => console.error(error)
      );
  }

  open(url: string) {
    window.open(url, '_blank');
  }

  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }
}
