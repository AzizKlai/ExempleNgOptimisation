import { ApplicationRef, ChangeDetectionStrategy, Component, ElementRef, Input, NgZone, OnInit, Renderer2, SimpleChanges, ViewChild, inject } from '@angular/core';
import { Chart } from 'chart.js/auto';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartComponent implements OnInit {
  
  chart: any;

  @Input() oddCnt: number = 0;
  @Input() evenCnt: number = 0;
  
  private zone=inject(NgZone)
  ngOnInit(): void {
    this.zone.runOutsideAngular(()=>{
      this.createChart();})
    }
    ngOnChanges(changes: SimpleChanges) {
      if(this.chart)
      {this.chart.data.datasets[0].data= [this.oddCnt,this.evenCnt] 
      this.chart.update()}

  }
  createChart(){
 
    const data = [
      { users: 'Workers', count: this.oddCnt },
      { users: 'Boss', count: this.evenCnt },
    ];
    this.chart = new Chart("MyChart",
    {
      type: 'bar',
        data: {
          labels: data.map(row => row.users),
        datasets: [
        {
          label: 'Entreprise stats',
          data: data.map(row => row.count)
        }
      ]
    }
    });
  }
}

