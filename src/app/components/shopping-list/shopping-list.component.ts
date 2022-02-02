import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { shoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  shopList: any;
  shopListSubscription: Subscription = new Subscription;
  private editShopping: boolean = true;

  constructor(private shoppingService: shoppingService) { }

  ngOnInit(): void {
    this.shopListSubscription = this.shoppingService.shopListSubject.subscribe(
      (shopList: any[]) => {
        this.shopList = shopList;
      }
    );
    this.shoppingService.emitShopListSubject();
  }

  getEditShopping() {
    return this.editShopping;
  }

  editShoppingList() {
    this.editShopping = !this.editShopping;
    console.log(this.shopList);
  }

  addItem() {
    this.shoppingService.addShoppingItem("", "");
  }


}
