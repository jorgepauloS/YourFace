import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';
import { HomePage } from '../home/home';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public userCredenciais = {
    login: null,
    passwd: null
  };


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertLoginCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public http: Http
  ) {
  }
  fazerLogin() {
    //Falta implementar por causa do banco de dados.
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  //teste do login, depois não servirá mais.
  goToHome() {
    console.log(this.userCredenciais)
    /*this.http.post('http://localhost:3000/login', this.userCredenciais).map(res => res.json())
      .subscribe(res => {
        console.log(res);
        
        if (res.token) {this.navCtrl.push(HomePage);}

      }, (error) => {
        console.log("erro " + error);
      });
      */
    this.navCtrl.setRoot(HomePage)
    this.showAlert()
  }
  showAlert() {
    let alert = this.alertLoginCtrl.create({
      title: 'Login realizado com sucesso!',
      subTitle: 'Parabéns por usar nosso software!',
      buttons: ['OK']
    });
    alert.present();
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Aguarde por favor...",
      duration: 2000
      
    });
    loader.present();


  }
}
