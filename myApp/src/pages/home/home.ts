import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user:any [];

  constructor(
    public navCtrl: NavController,
    public alertHomeCtrl:AlertController,
    
  ) {

  }
  showAlert() {
    let alert = this.alertHomeCtrl.create({
      title: 'Falta implementar função de SAIR!',
      subTitle: 'Quem pode fazer isso?',
      buttons: ['OK']
    });
    alert.present();
  }
}
