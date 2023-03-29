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
  productlist: any;
  data: any;

  constructor(
    // private route: ActivatedRoute,
    private http: HttpClient,
    private title: Title,
    private meta: Meta,
    private canservice: CanonicalService
  ) {
    this.http.get('https://fakestoreapi.com/products').subscribe((response:any) => {
      console.log(response)
      this.productlist = response; 
      console.log(this.productlist);
      
    // this.http.get('https://virvit.mydevpartner.website/vvapi/v1/jobs/').subscribe((response: any) => {
    //   console.log(response.results);
    //   this.jobsdata = response.results;
    });
  }
  ngOnInit(): void {

    // this.canservice.setCanonicalURL();
    // SEO metadata
    this.title.setTitle('Product List for Products');
    this.meta.addTag({ name: 'description', content: 'The product list is based on list of product which have many types of products like electronics items like mobile, laptop and more.', keywords: 'product list,product quantity list,product list of quest pharmaceuticals,qnet products list,woocommerce product list query,product list of quest,dokan_product_listing_query,amazon product listing quality,list.product power query,product list react,product list react native,product_list_random,product recalls list,product recall list uk,product rate list,product retailers list,cannatrek product list reddit,product list sample,product list sample data,product list smart value,product list sample api,product list synonyms,product list shortcode woocommerce,product list screen,product list schema,product list template,product list template html,product list template excel,product list template bootstrap,product list table,product list template free download,product list template html css,product list template with pictures excel,product list ui,product list ux,unilever products list,product listing upwork,product unit list,product list of unimed unihealth'});
    

    this.meta.updateTag({ property: "og:title", content: "List of products" });
    this.meta.updateTag({ property: "og:type", content: "products" });
    this.meta.updateTag({ property: "og:image", content: "https://picsum.photos/200/300?random=2" });
    this.meta.updateTag({ property: "og:image:alt", content: "Product Image" });
    this.meta.updateTag({ property: "og:url", content: "https://universal-ssr.netlify.app" });
    this.meta.updateTag({ property: "og:description", content: "Since some online shoppers only scan text on websites, it might be helpful to use bullet points that cover the most important product details. Bullet points should generally be used for specs (like dimensions) or short phrases (like features) so they are quick and easy to read." });

    this.meta.updateTag({ name: "twitter:title", content: "List of products" });
    this.meta.updateTag({ name: "twitter:type", content: "products" });
    this.meta.updateTag({ name: "twitter:site", content: "@getproducts" });
    this.meta.updateTag({ name: "twitter:image", content: "https://picsum.photos/200/300?random=2" });
    this.meta.updateTag({ name: "twitter:image:alt", content: "Product Images" });
    this.meta.updateTag({ name: "twitter:creator", content: "@productsh" });
    this.meta.updateTag({ name: "twitter:description", content: "Since some online shoppers only scan text on websites, it might be helpful to use bullet points that cover the most important product details. Bullet points should generally be used for specs (like dimensions) or short phrases (like features) so they are quick and easy to read." });

    this.meta.addTag({
      name: 'keywords', content: 'product details,product details page design,product details are not stamped on lead,product details page design html,product details example, perfume,products list type serum iphone,samsung,productmacaroni flavou,product details page,product details table,product details page design bootstrap,product details page design codepen,product details api,product details app,product details amazon,product details acer,product details an,product amount details hackerrank solution,product data analyst,product details by barcode,product details bootstrap,product details by hsn code,product details by serial number,product details bootstrap 5,product details by qr code online,product details by barcode online,product details by qr code,product details card,product details codepen,product details card codepen,product details component in angular,product details css,product details card design,product details c# cognizant,product description copywriting,product details design,product details dataset,product details database,product details design codepen,product information database,product description definition,product description design'
    });
  }

}

