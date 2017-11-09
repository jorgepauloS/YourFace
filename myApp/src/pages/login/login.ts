import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     public alertLoginCtrl: AlertController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  goToCadastroPage(){
    this.navCtrl.push(CadastroPage);
  }
  goToHome(){
    this.showAlert()
    this.navCtrl.push(HomePage);
  }
  showAlert() {
    let alert = this.alertLoginCtrl.create({
      title: 'Login realizado com sucesso!',
      subTitle: 'Parabéns por usar nosso software!',
      buttons: ['OK']
    });
    alert.present();
  }
}
