import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent implements OnInit {
  constructor(private apiService: ApiService) {}
  value2: any;
  showmesage = false;
  results: any;
  resultSearch: any;
  resultSearchNhiPhan: any;
  keyword: any;
  number: Array<any>;
  sunshine: any;
  ngOnInit(): void {
    this.getPhepNam();
    this.sunshine = [
      {
        organizeId: 'ed59ed1c-6754-45a5-9f90-0748fd1a61c8',
        organizationCd: 'KSF-HCM',
        organizationName: 'Công ty Cổ phần Tập đoàn KSFinance',
      },
      {
        organizeId: '495a88b6-2287-402a-8374-465160e4120a',
        organizationCd: 'S-MART',
        organizationName: 'Công ty TNHH KDTM và DV Sunshine Mart',
      },
      {
        organizeId: 'ec46d5a6-a8f7-4bb7-a9b9-4f71dd59db77',
        organizationCd: 'SSG-HN',
        organizationName: 'Tập đoàn Sunshine HN',
      },
      {
        organizeId: 'a483fdfa-78a5-451c-a8a0-838826fde37d',
        organizationCd: 'SSHGROUP',
        organizationName: 'CÔNG TY PHÁT TRIỂN SUNSHINE HOMES',
      },
      {
        organizeId: '102b91da-f43f-4f4c-a4ce-868b2b9b059e',
        organizationCd: 'KLB',
        organizationName: 'Kiên Long Bank',
      },
      {
        organizeId: '6f62ae98-be22-49ff-990e-8fe8b6ea8dbb',
        organizationCd: 'KSG-HN',
        organizationName: 'Công ty KSS',
      },
      {
        organizeId: 'f9ba0ce7-0867-4ba2-8c3e-a3c8f90ad1e9',
        organizationCd: 'SSG-HCM',
        organizationName: 'Tập đoàn Sunshine HCM',
      },
      {
        organizeId: '08f2bca3-4444-46df-a4e6-a4cc58bff5e8',
        organizationCd: 'SCG-HN',
        organizationName: 'Tập đoàn SCG',
      },
      {
        organizeId: '54730d7d-6e06-4c73-85d8-c73e5b1237ec',
        organizationCd: 'S-PLUS',
        organizationName: "Công ty TNHH Cafe's Plus",
      },
      {
        organizeId: 'a25b2c89-64cc-4c81-81d1-c86486a79c76',
        organizationCd: 'KSF-Invest',
        organizationName: 'CÔNG TY CỔ PHẦN ĐẦU TƯ KSFINANCE',
      },
      {
        organizeId: '51f67c15-28e1-4a6d-abb0-cb58ce5dc0e0',
        organizationCd: 'UNIGROUP',
        organizationName: 'Tập đoàn Công nghệ UniCloud',
      },
      {
        organizeId: '7792553c-46c3-4169-aada-de3789fa7475',
        organizationCd: 'UMEE',
        organizationName: 'Công ty CP UMEE',
      },
      {
        organizeId: '9b2ab175-16fe-4a2e-88f4-f29974491ff5',
        organizationCd: 'S-SERVICE',
        organizationName: 'Công ty S-Service',
      },
      {
        organizeId: 'f4e3698f-f1dc-4196-9275-f426a2937bc5',
        organizationCd: 'ODEGROUP',
        organizationName: 'Công ty CP TĐ truyền thông và giải trí ODE',
      },
      {
        organizeId: 'b9290699-35ec-4066-8771-f7da9e5c6c3e',
        organizationCd: 'MAPLEBEAR',
        organizationName: 'Hệ thống trường học Sunshine Maple Bear',
      },
    ];
  }

  getPhepNam(): void {
    this.apiService.getPhepNam().subscribe((response) => {
      console.log('phép năm', response);
      this.results = response;
    });
  }

  show() {
    this.resultSearch = this.linearSearch(this.results, this.value2);
    console.log(this.resultSearch);
    this.showmesage = true;
  }

  linearSearch(arr: any, key: string) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].full_name === key) {
        return i;
      }
    }
    return -1;
  }
  /*  Thuật toán sắp sếp nhị phân */
  Sort() {
    this.sortItems(this.sunshine);
    console.log(this.sunshine);
  }

  binarySearch(nums: any, key: any) {
    let low = 0;
    let high = nums.length - 1;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      mid;
      if ((nums[mid].organizationName).localeCompare(key) == 0) {
        return mid;
      } 
       if ((nums[mid].organizationName).localeCompare(key) == -1) {
        low = mid + 1;
      } else {
        high = mid - 1;
      } 
    }
    return -1;
  }

  show2() {
    this.resultSearchNhiPhan = this.binarySearch(this.sunshine, this.keyword);
    console.log("Kết quả", this.resultSearchNhiPhan)
  }

  

  sortItems(a: any) {
    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < a.length; j++) {
        if (
          (a[j]?.organizationName).localeCompare(a[j + 1]?.organizationName) ==
          1
        ) {
          let temp = a[j];
          a[j] = a[j + 1];
          a[j + 1] = temp;
        }
      }
    }
    return a;
  }
}
