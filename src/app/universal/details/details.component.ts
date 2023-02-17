import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
    productlist: any;
  constructor(private meta: Meta, private tittle: Title, private route: ActivatedRoute, private http: HttpClient) {
     const iddata = this.route.snapshot.params['id'];
     this.http.get('https://dummyjson.com/products/'+iddata).subscribe((response:any) => {
      console.log(response)
      this.productlist = response;
  })
}

  ngOnInit(): void {

    this.meta.updateTag({ property: "og:title", content: "details page is here" });
    this.meta.updateTag({ property: "og:type", content: "website" });
    this.meta.updateTag({ property: "og:image", content: "https://picsum.photos/200/300?random=2" });
    this.meta.updateTag({ property: "og:url", content: "http//:localhost:4200/details" });

    // this.meta.updateTag({ name: "twitter:card", content: "summary for twitter card on details page" });
    // this.meta.updateTag({ name: "twitter:site", content: "herre iis a twitter site for use the details page" });
    // this.meta.updateTag({ name: "twitter:creator", content: "elone musk" });
    // this.meta.updateTag({ name: "twitter:title", content: "summary for angular universal twitter card on details page" });
    // this.meta.updateTag({ name: "twitter:description", content: "Hi there! 👋 Thank you for visiting my website's details page!" });
    // this.meta.updateTag({ name: "twitter:image", content: "here are images for using the details page" });
    // this.meta.updateTag({ name: "twitter:image:alt", content: "Webdeveloper details image" });


    this.meta.addTag({ name: "twitter:card", content: "summary" });
    this.meta.addTag({ name: "twitter:site", content: "@getblogs" });
    this.meta.addTag({ name: "twitter:creator", content: "@rahulsh" });
    this.meta.addTag({ name: "twitter:title", content: "Contactus=>Getblogs :A Place for coders to read and write a blog." });
    this.meta.addTag({ name: "twitter:description", content: "Contactus- getblog" });
  }

}
