import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor() {}
  visibleSidebar1: any;
  items: MenuItem[];
  ngOnInit(): void {
    this.items = [
      
      { label: 'Test',
        icon: 'pi pi-box',
        routerLink: '/test' },
      {
        label: 'test1',
        icon: 'pi pi-chevron-circle-down',
        routerLink: '/test1',
      },
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
        label: 'Object',
        icon: 'pi pi-bell',
        routerLink: '/object',
      },
    ];
  }
  
  onShowEvent() {
      this.visibleSidebar1 =false
  }
}
