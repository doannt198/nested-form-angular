import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  data: TreeNode[];
  selectOrganze: any;
  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.feathData()
    
  }
  filterArray:any[]
  user:any ={ 
    name: 'A',
    age: 19,
    address: 'HN',
    children: [
      { name: 'B', age: 20, address: 'HCM'},
      { name: 'c', age: 21, address: 'DN'},
      { name: 'c', age: 22, address: 'MN'},
      { name: 'c', age: 25, address: 'HP'},
      { name: 'c', age: 22, address: 'LK'},
    ]
  }
  feathData() {
    this.getOrganzeChar()
  }

  getOrganzeChar(): void {
    this.apiService.getOrganizeChar()
    .pipe()
    .subscribe((response)=>{
        this.data = response.data
    })
  }

  onNodeSelect(event: any): void {
      console.log("event", event.node)
  }

  handleShow(): void {
      this.filterArray = this.user.children.filter((element: any)=> element.age == 22)
  }   
} 
