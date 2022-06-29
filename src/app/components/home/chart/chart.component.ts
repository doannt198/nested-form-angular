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
} 
