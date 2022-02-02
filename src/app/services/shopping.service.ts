import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";

@Injectable()
export class shoppingService {

    private shopList = [{
        id: 0,
        name: "key",
        description: "sqdqf"
    },
    {
        id: 1,
        name: "piece",
        description: "qskdnqs"
    },
    {
        id: 2,
        name: "phone",
        description: "qlksndflq"
    }];
    shopListSubject = new Subject<any[]>();

    constructor() {

    }

    emitShopListSubject() {
        this.shopListSubject.next(this.shopList.slice());
    }

    addShoppingItem(name: string, description: string) {
        let id = 0;
        if (this.shopList.length != 0){
            id = this.shopList[(this.shopList.length - 1)].id + 1;
        }
        let newItem = {
            id: id,
            name: name,
            description: description
        };
        this.shopList.push(newItem);
        this.emitShopListSubject();
    }

    removeItem(id: number) {
        const item = this.shopList.find(
            (s) => {
                return s.id === id;
            }
        )
        if (item != null) {
            this.shopList.splice(this.shopList.indexOf(item), 1);
        }
        console.log(this.shopList)
        this.emitShopListSubject();
    }

    getItemById(id: number) {
        const item = this.shopList.find(
          (s) => {
            return s.id === id;
          }
        );
        return item;
    }

}