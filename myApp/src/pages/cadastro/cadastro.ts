import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCadastroCtrl: AlertController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }
  goToLoginPage(){
    this.showAlert()
    this.navCtrl.push(LoginPage);
  }
  goToLoginPage2(){
    this.navCtrl.push(LoginPage);
  }

  showAlert() {
    let alert = this.alertCadastroCtrl.create({
      title: 'Casdastro realizado com sucesso!',
      subTitle: 'Parabéns por se cadastrar em nossa base de dados!',
      buttons: ['OK']
    });
    alert.present();
  }
}

