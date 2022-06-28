import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor(
    private router: Router
  ) {}
  visibleSidebar1: any;
  items: MenuItem[];
  ngOnInit(): void {
    this.items = [ 
      {
        label: 'Reactive Form',
        icon: 'pi pi-cog',
        routerLink: '/reactive-form',
      },
      {
        label: 'Template Drien Form',
        icon: 'pi pi-car',
        routerLink: '/template-driven-form',
      },
      {
        label: 'Template Drien Form Hai',
        icon: 'pi pi-chart-bar',
        routerLink: '/tempalte-driven-form-hai',
      },
      {
        label: 'Reactive Form Hai',
        icon: 'pi pi-calendar-minus',
        routerLink: '/reactive-form-hai',
      },
      {
        label: 'Form Thêm sản phẩm',
        icon: 'pi pi-bell',
        routerLink: '/them-san-pham',
      },
      {
        label: 'Thư viện',
        icon: 'pi pi-globe',
        routerLink: '/object',
      },
      { 
        label: 'Test',
        icon: 'pi pi-book',
        routerLink: '/test-component',
      },
      { 
        label: 'Chart.js',
        icon: 'pi pi-chart-bar',
        routerLink: '/chart',
      },
      { 
        label: 'Library',
        icon: 'pi pi-image',
        routerLink: '/thu-vien',
      },
    ];
  }
  
  logOut() {
    sessionStorage.removeItem('user')
    this.router.navigate(['login'])
    this.visibleSidebar1 =false
  }

  onShowEvent() {
      this.visibleSidebar1 =false
  }
}
