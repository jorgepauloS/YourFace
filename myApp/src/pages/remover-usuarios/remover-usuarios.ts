import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';


@IonicPage()
@Component({
  selector: 'page-remover-usuarios',
  templateUrl: 'remover-usuarios.html',
})
export class RemoverUsuariosPage {

  items : any;
  lista=[{id:1, cpf:"12345"},
    { id: 2, cpf: "23452" },
    { id: 3, cpf: "452223" },
    { id: 4, cpf: "0111223" }];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
    this.acao()
  }
  acao() {
    this.navCtrl.push(LoginPage);

  }

  initializeItems() {
    this.items = this.lista
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.cpf.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
