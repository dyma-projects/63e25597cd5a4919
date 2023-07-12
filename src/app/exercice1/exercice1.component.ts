import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css'],
})
export class Exercice1Component {
  public nom: string = '';

  public changeInput: string = 'password';

  public nomButton: string = 'VISIBLE';

  public ChangeType(): void {
    if (this.changeInput == 'password') {
      this.changeInput = 'text';
      this.nomButton = 'NON VISIBLE';
    } else {
      this.changeInput = 'password';
      this.nomButton = 'VISIBLE';
    }
  }
}
