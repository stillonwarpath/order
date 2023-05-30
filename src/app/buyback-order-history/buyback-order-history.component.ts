import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MockApiService } from './services/mock-api.service';

@Component({
  selector: 'app-buyback-order-history',
  templateUrl: './buyback-order-history.component.html',
  styleUrls: ['./buyback-order-history.component.scss']
})
export class BuybackOrderHistoryComponent implements OnInit {

  @Input() companyName = '';
  @Output() selectOrder: EventEmitter<string> = new EventEmitter<string>();
  categories: any[] = [];


  constructor(private mockApiService: MockApiService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.mockApiService.getCategories().subscribe(res => {
      this.categories = res;
    });
  }

  onSelect(category: any) {
     this.selectOrder.emit(category);
  }

}
