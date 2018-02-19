import {Component, OnInit} from '@angular/core';
import {FeedService} from './feed.service';
import {FeedEntry} from './model/feed-entry';
import './rxjs-operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    private feedUrl = 'http://www.cabq.gov/news/news/RSS';
    feeds: Array<FeedEntry> = [];

    constructor(private feedService: FeedService) {
    }

    ngOnInit() {
        this.refreshFeed();
    }

    refreshFeed() {
        this.feeds.length = 0;
        // Adds 1s of delay to provide user's feedback.
        this.feedService.getFeedContent(this.feedUrl).delay(1000)
            .subscribe(
                feed => this.feeds = feed.items,
                error => console.log(error));
    }

}
