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
        label: 'Reactive-Form-Dynamic',
        icon: 'pi pi-cog',
        routerLink: '/home/reactive-form',
      },
      {
        label: 'Template-Drien-Form-Dynamic',
        icon: 'pi pi-car',
        routerLink: '/home/template-driven-form',
      },
      {
        label: 'Template-Drien-Form-2',
        icon: 'pi pi-chart-bar',
        routerLink: '/home/tempalte-driven-form-hai',
      },
      {
        label: 'Reactive-Form-Hai',
        icon: 'pi pi-calendar-minus',
        routerLink: '/home/reactive-form-hai',
      },
      {
        label: 'Thêm sản phẩm',
        icon: 'pi pi-bell',
        routerLink: '/home/them-san-pham',
      },
      {
        label: 'Thư viện',
        icon: 'pi pi-globe',
        routerLink: '/home/object',
      },
      { 
        label: 'Test',
        icon: 'pi pi-book',
        routerLink: '/home/test-component',
      },
      { 
        label: 'Chart.js',
        icon: 'pi pi-chart-bar',
        routerLink: '/home/chart',
      },
      { 
        label: 'Library',
        icon: 'pi pi-image',
        routerLink: '/home/thu-vien',
      },
    ];
  }
  
  logOut() {
    localStorage.removeItem('user')
    this.router.navigate(['login'])
    this.visibleSidebar1 =false
  }

  onShowEvent() {
      this.visibleSidebar1 =false
  }
}
