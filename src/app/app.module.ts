import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

// Material design.
import {MatCardModule, MatToolbarModule, MatButtonModule, MatIconModule, MatIconRegistry} from '@angular/material';

import {AppComponent} from './app.component';
import {FeedCardComponent} from './feed-card/feed-card.component';
import {FeedService} from './feed.service';
import {StripHtmlTagsPipe} from './pipe/strip-html-tags.pipe';
import {SpinnerComponent} from './spinner/spinner.component';

@NgModule({
    declarations: [
        AppComponent,
        FeedCardComponent,
        StripHtmlTagsPipe,
        SpinnerComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        MatCardModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule
    ],
    providers: [FeedService, MatIconRegistry],
    bootstrap: [AppComponent]
})
export class AppModule {
}
