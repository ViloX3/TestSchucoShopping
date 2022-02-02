import { Component, OnInit, Input } from '@angular/core';
import { shoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css']
})
export class ShoppingItemComponent implements OnInit {

  @Input() name: string = "";
  @Input() description: string = "";
  @Input() editBool: boolean = true;
  @Input() id: number = 0;

  constructor(private shoppingService: shoppingService) { }

  ngOnInit(): void {
  }

  getEditBool() {
    return this.editBool;
  }

  edit() {
    this.editBool = !this.editBool;
  }

  supprItem() {
    this.shoppingService.removeItem(this.id);
  }
}
