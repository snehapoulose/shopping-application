import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-body',
  templateUrl: './shopping-body.component.html',
  styleUrls: ['./shopping-body.component.css']
})
export class ShoppingBodyComponent implements OnInit {
  shopbodyLogo = '../assets/images/shop-body.jpg'
  shopItem="";
  selectedItem ="Item selectd is:"
  serverCreated = "true";
  onUpdateItem(event:any){
    this.shopItem = (<HTMLInputElement>event.target).value;
  }
  onSelectedItem(){
    return this.selectedItem
  }

  constructor() { }

  ngOnInit(): void {
  }

}
