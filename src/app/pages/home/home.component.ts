import { Component, OnInit } from '@angular/core';
import { UIHelper } from 'src/app/shared/helpers/ui.helper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private UIHelper: UIHelper
  ) { }

  ngOnInit() {
  }

  doAction(action: string){
    this.UIHelper.showSnackBar(`You ${action}d the dog!`);
  }

}
