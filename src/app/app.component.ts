import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  modelCard = {
    type: {
      Basic: 'Basic',
      Premium: 'Premium',
    },
    price: {
      Basic: 100,
      Premium: 200,
    },
  };

  onCardButtonClicked() {
    console.log('onCardButtonClicked');
    // Chamada HTTP
  }
}
