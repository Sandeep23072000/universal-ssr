import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CanonicalService } from 'src/app/services/canonical.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  productlist: any;
  images: any;

  constructor(private meta: Meta, private title: Title, private route: ActivatedRoute, private http: HttpClient, private canService: CanonicalService) {
    const iddata = this.route.snapshot.params['id'];
    this.http.get('https://dummyjson.com/products/' + iddata).subscribe((response: any) => {
      console.log(response)
      this.productlist = response;
    })
  }

  ngOnInit(): void {

    // this.canService.setCanonicalURL();
    this.title.setTitle('Product Details List for selected Product');
    
    this.meta.updateTag({ property: "og:title", content: "Product Details page is here" });
    this.meta.updateTag({ property: "og:type", content: "website" });
    this.meta.updateTag({ property: "og:image", content: "https://picsum.photos/200/300?random=2" });
    this.meta.updateTag({ property: "og:image:alt", content: "Og Image" });
    this.meta.updateTag({ property: "og:url", content: "http//:localhost:4200/details" });
    this.meta.updateTag({ property: "og:description", content: "Since some online shoppers only scan text on websites, it might be helpful to use bullet points that cover the most important product details. Bullet points should generally be used for specs or short phrases  so they are quick and easy to read." });


    this.meta.updateTag({ name: "twitter:card", content: "summary" });
    this.meta.updateTag({ name: "twitter:site", content: "@getproducts" });
    this.meta.updateTag({ name: "twitter:creator", content: "@productsh" });
    this.meta.addTag({ name: "twitter:image", content: "https://picsum.photos/200/300?random=2" });
    this.meta.addTag({ name: "twitter:image:alt", content: "Images" });
    this.meta.updateTag({ name: "twitter:title", content: "Details of Products" });
    this.meta.updateTag({ name: "twitter:description", content: "Here, We will discribe the list of related products as Mobile phones, laptops and other type of electronic products and some more." });

    this.meta.addTag({
      name: 'keywords', content: 'product details,product details page design,product details are not stamped on lead,product details page design html,product details example,product details page,product details table,product details page design bootstrap,product details page design codepen,product details api,product details app,product details amazon,product details acer,product details an,product amount details hackerrank solution,product data analyst,product details by barcode,product details bootstrap,product details by hsn code,product details by serial number,product details bootstrap 5,product details by qr code online,product details by barcode online,product details by qr code,product details card,product details codepen,product details card codepen,product details component in angular,product details css,product details card design,product details c# cognizant,product description copywriting,product details design,product details dataset,product details database,product details design codepen,product information database,product description definition,product description design'
    });

  }
}
