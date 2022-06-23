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
      { label: 'Add', icon: 'pi pi-fw pi-plus', routerLink: '/add' },
      {
        label: 'Detail',
        icon: 'pi pi-fw pi-download',
        routerLink: '/detail/1',
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-refresh',
        routerLink: '/edit/1',
      },
      { label: 'Test', icon: 'pi pi-fw pi-refresh', routerLink: '/test' },
      {
        label: 'test1',
        icon: 'pi pi-fw pi-refresh',
        routerLink: '/test1',
      },
      {
        label: 'Reactive Form',
        icon: 'pi pi-fw pi-refresh',
        routerLink: '/reactive-form',
      },
      {
        label: 'Template Drien Form',
        icon: 'pi pi-fw pi-refresh',
        routerLink: '/template-driven-form',
      },
      {
        label: 'Template Drien Form Hai',
        icon: 'pi pi-fw pi-refresh',
        routerLink: '/tempalte-driven-form-hai',
      },
      {
        label: 'Reactive Form Hai',
        icon: 'pi pi-fw pi-refresh',
        routerLink: '/reactive-form-hai',
      },
      {
        label: 'Object',
        icon: 'pi pi-fw pi-refresh',
        routerLink: '/object',
      },
    ];
  }
}
