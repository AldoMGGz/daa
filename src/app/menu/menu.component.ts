import { Component } from '@angular/core';
import { Menu } from '../_models/menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menuList: Menu[] = [
    {
      title:"Avocado Burguer",
      imaage:"../../assets/menu/Avocado.jpg",
      desription: "Carne angus, queso manchego y americano, aguacate, jalapeño y aderezos"
    },
    {
      title:"Brisket Burguer",
      imaage:"../../assets/menu/brisket.jpg",
      desription: "Brisket de la casa, queso manchego, cebolla y salsa BBQ"
    },
    {
      title:"Cheese Burguer",
      imaage:"../../assets/menu/cheese.jpg",
      desription: "Carne angus, queso manchego y americano, lechuga, tomate y aderezos"
    },
    {
      title:"Hot Chicken Burguer",
      imaage:"../../assets/menu/Avocado.jpg",
      desription: "Pechuga de pollo empanizada, bañada en nuestra salsa buffalo, queso manchego, y pepinillos"
    },
    {
      title:"Chilli Dog",
      imaage:"../../assets/menu/hdchili.jpg",
      desription: "Salchicha de res, chili con carne y salsa de queso"
    },
    {
      title:"Cheese Dog",
      imaage:"../../assets/menu/hdcheese.jpg",
      desription: "Salchicha de res, salsa de queso, y cebolla caramelizada"
    },
    {
      title:"Bacon Dog",
      imaage:"../../assets/menu/hdbacon.jpg",
      desription: "Salchicha de res, salsa de queso, tocino y aros de cebolla"
    },
  ]
}
