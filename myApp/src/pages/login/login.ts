import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';
import { HomePage } from '../home/home';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { HomeProfessorPage } from '../home-professor/home-professor';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public userCredenciais = {
    cpf: null,
    password: null
    
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertLoginCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public http: Http
  ) {
  }

  goToHomeProfessor(){
    this.http.post('http://localhost:3000/login/professor', this.userCredenciais).map(res => res.json())
      .subscribe(res => {
        console.log(res);
        if (res.token) {
          this.showAlert()
          this.navCtrl.push(HomeProfessorPage);
        } else {
          this.showAlertErro()
        }
      }, (error) => {
        console.log("erro " + error);
      });
  }  
  goToHomeCoordenador() {
    //console.log(this.userCredenciais)
    this.http.post('http://localhost:3000/login/coordenador', this.userCredenciais).map(res => res.json())
      .subscribe(res => {
        console.log(res);
        if (res.token) {
          this.showAlert()
          this.navCtrl.push(HomePage);
        }else{
          this.showAlertErro()
        }
      }, (error) => {
        console.log("erro " + error);
      });
  }

  showAlert() {
    let alert = this.alertLoginCtrl.create({
      title: 'Login realizado com sucesso!',
      subTitle: 'Parabéns por usar nosso software!',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlertErro() {
    let alert = this.alertLoginCtrl.create({
      title: 'Login não realizado.',
      subTitle: 'Senha e/ou login errado.',
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
