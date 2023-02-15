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
    ){
    this.http.get('https://virvit.mydevpartner.website/vvapi/v1/jobs/').subscribe((response: any) => {
      console.log(response.results);
      this.jobsdata = response.results;
  });
  }
  ngOnInit(): void {

    // this.canservice.setCanonicalURL();
      // SEO metadata
      this.title.setTitle('description about uniiversal server side rendering');
      this.meta.addTag({name: 'description', content: 'longDescription'});

      // Discription metadata
      this.meta.addTag({name: 'universal', content: 'summary'});
      this.meta.addTag({name: 'universal:site', content: '@AngularUniv'});
      this.meta.addTag({name: 'universal:title', content: 'description'});
      this.meta.addTag({name: 'universal:description', content: 'description'});
      this.meta.addTag({name: 'universal:text:description', content: 'description'});
      this.meta.addTag({name: 'universal:image', content: 'https://avatars3.githubusercontent.com/u/16628445?v=3&s=200'});

      const tags=this.meta.getTags('name=universal')
        console.log(tags);

        this.meta.updateTag({property:"og:title", content:"universal tittle according to update tags"});
        this.meta.updateTag({property:"og:type", content:"website"});
        this.meta.updateTag({property:"og:image", content:"show image here"});
        this.meta.updateTag({property:"og:url", content:"http//:localhost:4200"});


        this.meta.updateTag({name:"twitter:card", content:"summary for twitter card"});
        this.meta.updateTag({name:"twitter:site", content:"@nytimesbits"});
        this.meta.updateTag({name:"twitter:creator", content:"@nickbilton"});
        this.meta.updateTag({name:"twitter:title", content:"summary for angular universal twitter card"});
        this.meta.updateTag({name:"twitter:description", content:"Hi there! 👋 Thank you for visiting my website!"});
        this.meta.updateTag({name:"twitter:image", content:"https:///samvloeberghs.be/assets/share/home.png"});
        this.meta.updateTag({name:"twitter:image:alt", content:"Webdeveloper"});
        
  }

  }

