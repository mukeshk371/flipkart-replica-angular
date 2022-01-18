import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  toolbarOptions = [
    { title: 'Top Offer', imgUrl: 'https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100', category: [] },
    { title: 'Grocery', imgUrl: 'https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100', category: [] },
    { title: 'Mobiles', imgUrl: 'https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100', category: [] },
    { title: 'Fashion', imgUrl: 'https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100', category: ["Men's Top Wear", "Men's Bottom Wear"] },
    { title: 'Electronics', imgUrl: 'https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100', category: [] },
    { title: 'Home', imgUrl: 'https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100', category: [] },
    { title: 'Appliances', imgUrl: 'https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100', category: [] },
    { title: 'Travel', imgUrl: 'https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100', category: [] },
    { title: 'Beauty, Toys & More', imgUrl: 'https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100', category: [] }
  ]

  show = true;
}
