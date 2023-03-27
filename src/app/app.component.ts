import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'universalssr';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private title: Title,
    private meta: Meta
  ) { }
  ngOnInit(): void {

    // this.router.events.pipe(
    //   filter(event => event instanceof NavigationEnd),
    // )
    //   .subscribe(() => {

    //     var rt = this.getChild(this.activatedRoute)

    //     rt.data.subscribe((data: any) => {
    //       console.log(data);
    //       this.title.setTitle(data.title)

    //     });

    //   });

    // }
    // getChild(activatedRoute: ActivatedRoute): any {
    //   if (activatedRoute.firstChild) {
    //     return this.getChild(activatedRoute.firstChild);
    //   } else {
    //     return activatedRoute;
    //   }

  }
}