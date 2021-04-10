import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap, NavigationExtras } from '@angular/router';

@Component({
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  type = 0;

  ngOnInit(): void {
    this.type = +this.route.snapshot.paramMap.get('type');

    console.log(this.type);

    this.route.paramMap.subscribe(params => { this.type = +params.get('type') })
    console.log(this.type);
  }

  readData(): void {
    let seoTitle = this.route.data["seotitle"];
  }

  addTypeNumber(): void {
    // this.router.navigate(['utilities/colors', this.type++]);
    // this.router.navigate(['../', this.type++], { relativeTo: this.route });

    /*
      preserve => 網址轉向時, 保留當前的查詢字串
      EX: 網址上的 page = 99時, 按下 addTypeNumber()時, URL 上的 page=99 不會被更改
    */
    let navigationExtras: NavigationExtras = {
      queryParamsHandling: 'preserve',
      preserveFragment: true,
      queryParams: {
        page: 1
      }
    };
    this.router.navigate(['utilities/colors', this.type++], navigationExtras);

    /*
      merge => 網址轉向時, 合併當前的查詢字串, 有重複 key Name 查詢字串會被取代
      EX: 網址上的 page = 99時, 按下 addTypeNumber()時,
      URL 上的 page=99 會被 navigationExtras2.queryParams 內設定的 page 欄位修改
    */
    // let navigationExtras2: NavigationExtras = {
    //   queryParamsHandling: 'merge',
    //   preserveFragment: true,
    //   queryParams: {
    //     page: 1
    //   }
    // };
    // this.router.navigate(['utilities/colors', this.type++], navigationExtras2);

    console.log(this.type);
  }

  subTypeNumber(): void {
    this.router.navigate(['utilities/colors', this.type--]);
    console.log(this.type);
  }
}
