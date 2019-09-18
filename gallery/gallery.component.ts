import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { PagerService, PagerService1 } from '../pagenation.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
public getData;  
pagedItems: any[];    // pagination total
pager: any = {};    // pagination page

  constructor(
    private http : HttpClient,
    private pageservice : PagerService1)
     { }

  ngOnInit() {
    this.getImages();
  }

  getImages(){  
    var bas = this.http.get('https://picsum.photos/v2/list?page=1', {
                headers: { 'Content-Type': 'application/json' }
            })
            bas.subscribe((res: any) => {
              this.getData = res;
              console.log(this.getData);
              this.setPage(1);
            });
  }
   // pagination setting here
   setPage(page: number) {
    this.pager = this.pageservice.getPager(this.getData.length, page);
    this.pagedItems = this.getData.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

//    data={
//       siva:"somedata"
//   }
    // i = 1;

    // pageChange() {
    //     this.i++;
    //     console.log(this.i);
    //     var bas = this.http.get('https://picsum.photos/v2/list?page=' + this.i, {
    //         headers: { 'Content-Type': 'application/json' }
    //     })
    //     bas.subscribe((res: any) => {
    //         this.getData = res;
    //         console.log(this.getData);
    //         this.setPage(1);
    //     });

    // }

    // pageChangeprev() {
    //     this.i--;
    //     console.log(this.i);
    //     var bas = this.http.get('https://picsum.photos/v2/list?page=' + this.i, {
    //         headers: { 'Content-Type': 'application/json' }
    //     })
    //     bas.subscribe((res: any) => {
    //         this.getData = res;
    //         console.log(this.getData);
    //         this.setPage(1);
    //     });


    // }

    goToSpecificUrl(url): void {
        window.location.href = url;
    }

}

