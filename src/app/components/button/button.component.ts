import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input({ required: true, alias: 'buttonText' })
  buttonText: string = '';

  @Input({ required: true, alias: 'buttonStyle' })
  buttonStyle: 'white' | 'purple' = 'white';

  @Input('disabled')
  isDisabled: boolean = false;

  @Output('clicked') buttonClickedEmit = new EventEmitter<void>();

  onButtonClicked() {
    this.buttonClickedEmit.emit();
  }


}
