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
    // this.title.setTitle('description about uniiversal server side rendering');
    this.meta.addTag({ name: 'description', content: 'When we use Angular Universal, we will render the initial HTML and CSS shown to the user ahead of time. We can do it for example at build time, or on-the-fly on the server when the user requests the page.' });
    // Discription metadata
    this.meta.addTag({ name: 'universal', content: 'Angular Universal is a Pre-Rendering solution for Angular' });
    this.meta.addTag({ name: 'universal:site', content: 'https://universal-ssr.netlify.app/' });
    this.meta.addTag({ name: 'universal:title', content: 'Angular Universal for SEO' });
    this.meta.addTag({ name: 'universal:description', content: 'When we use Angular Universal, we will render the initial HTML and CSS shown to the user ahead of time. We can do it for example at build time, or on-the-fly on the server when the user requests the page.' });
    this.meta.addTag({ name: 'universal:text:description', content: 'When we use Angular Universal, we will render the initial HTML and CSS shown to the user ahead of time. We can do it for example at build time, or on-the-fly on the server when the user requests the page.' });
    this.meta.addTag({ name: 'universal:image', content: 'Angular Universal Images for SEO' });

    const tags = this.meta.getTags('name=universal')
    console.log(tags);

    this.meta.addTag({ property: "og:title", content: "universal tittle according to update tags" });
    this.meta.addTag({ property: "og:type", content: "Angular Universal for SEO" });
    this.meta.addTag({ property: "og:image", content: "https://picsum.photos/200/300?random=2" });
    this.meta.addTag({ property: "og:image:alt", content: "Og Image" });
    this.meta.addTag({ property: "og:url", content: "https://universal-ssr.netlify.app/" });
    this.meta.addTag({ property: "og:description", content: "Open Graph meta tags are snippets of code that control how URLs are displayed when shared on social media. They're part of Facebook's Open Graph protocol and are also used by other social media sites, including LinkedIn and Twitter" });


    this.meta.addTag({ name: "twitter:card", content: "summary" });
    this.meta.addTag({ name: "twitter:site", content: "https://universal-ssr.netlify.app/" });
    this.meta.addTag({ name: "twitter:creator", content: "@nickbilton" });
    this.meta.addTag({ name: "twitter:title", content: "summary for angular universal twitter card" });
    this.meta.addTag({ name: "twitter:description", content: "When we use Angular Universal, we will render the initial HTML and CSS shown to the user ahead of time. We can do it for example at build time, or on-the-fly on the server when the user requests the page." });
    this.meta.addTag({ name: "twitter:image", content: "https://picsum.photos/200/300?random=2" });
    this.meta.addTag({ name: "twitter:image:alt", content: "Webdeveloper" });

    this.meta.addTag({
      name: 'keywords', content: 'angular universal, angular universal tutorial, angular universal vs angularangular, universal stackblitz, angular universal seo, angular universal deployment, angular universal vs next js, angular universal routing not working, angular universal prerender, angular universal api calls, angular universal api is available in which package, angular universal alternative, angular universal, app angular universal, api angular universal, aws angular universal, aws amplify, angular universal, angular 15 angular universal build, angular universal build production, angular universal benefits, angular universal base href, angular universal best practices, angular universal boilerplate, angular universal bundle, angular universal builders, angular universal caching, angular universal cookies, angular universal check if server, angular universal cors, angular universal course, angular universal compression, angular universal cdn, angular universal command, angular universal dynamic content, angular universal deploy, nginx angular universal document is not defined, angular universal demo, angular universal dynamic meta tags, angular universal dynamic routes, angular universal docker, angular universal example, angular universal existing project, angular universal example stackblitz, angular universal example github, angular universal environment variables, angular universal error networkerror, angular universal error network error at xmlhttprequest.send, angular universal elastic beanstalk'
  })
}

}

