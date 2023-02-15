import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { CanonicalService } from 'src/app/services/canonical.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  jobsdata: any;

  constructor(
    // private route: ActivatedRoute,
    private http: HttpClient,
    private title: Title,
    private meta: Meta,
    private canservice: CanonicalService
  ) {
    this.http.get('https://virvit.mydevpartner.website/vvapi/v1/jobs/').subscribe((response: any) => {
      console.log(response.results);
      this.jobsdata = response.results;
    });
  }
  ngOnInit(): void {

    // this.canservice.setCanonicalURL();
    // SEO metadata
    this.title.setTitle('description about uniiversal server side rendering');
    this.meta.addTag({ name: 'description', content: 'longDescription' });
    this.meta.addTag({name:"google-site-verification",content:"IPByWYTtr2DdNdfBxSw-ONrm2wkK2jzC8b8_bijIlgY"})
    // Discription metadata
    this.meta.addTag({ name: 'universal', content: 'summary' });
    this.meta.addTag({ name: 'universal:site', content: '@AngularUniv' });
    this.meta.addTag({ name: 'universal:title', content: 'description' });
    this.meta.addTag({ name: 'universal:description', content: 'description' });
    this.meta.addTag({ name: 'universal:text:description', content: 'description' });
    this.meta.addTag({ name: 'universal:image', content: 'https://avatars3.githubusercontent.com/u/16628445?v=3&s=200' });

    const tags = this.meta.getTags('name=universal')
    console.log(tags);

    this.meta.updateTag({ property: "og:title", content: "universal tittle according to update tags" });
    this.meta.updateTag({ property: "og:type", content: "website" });
    this.meta.updateTag({ property: "og:image", content: "show image here" });
    this.meta.updateTag({ property: "og:url", content: "http//:localhost:4200" });


    this.meta.updateTag({ name: "twitter:card", content: "summary for twitter card" });
    this.meta.updateTag({ name: "twitter:site", content: "@nytimesbits" });
    this.meta.updateTag({ name: "twitter:creator", content: "@nickbilton" });
    this.meta.updateTag({ name: "twitter:title", content: "summary for angular universal twitter card" });
    this.meta.updateTag({ name: "twitter:description", content: "Hi there! 👋 Thank you for visiting my website!" });
    this.meta.updateTag({ name: "twitter:image", content: "https:///samvloeberghs.be/assets/share/home.png" });
    this.meta.updateTag({ name: "twitter:image:alt", content: "Webdeveloper" });

    this.meta.addTag({
      name: 'keywords', content: 'angular universal, angular universal tutorial, angular universal vs angularangular, universal stackblitz, angular universal seo, angular universal deployment, angular universal vs next js, angular universal routing not working, angular universal prerender, angular universal api calls, angular universal api is available in which package, angular universal alternative, angular universal, app angular universal, api angular universal, aws angular universal, aws amplify, angular universal, angular 15 angular universal build, angular universal build production, angular universal benefits, angular universal base href, angular universal best practices, angular universal boilerplate, angular universal bundle, angular universal builders, angular universal caching, angular universal cookies, angular universal check if server, angular universal cors, angular universal course, angular universal compression, angular universal cdn, angular universal command, angular universal dynamic content, angular universal deploy, nginx angular universal document is not defined, angular universal demo, angular universal dynamic meta tags, angular universal dynamic routes, angular universal docker, angular universal example, angular universal existing project, angular universal example stackblitz, angular universal example github, angular universal environment variables, angular universal error networkerror, angular universal error network error at xmlhttprequest.send, angular universal elastic beanstalk'
  })
}

}

