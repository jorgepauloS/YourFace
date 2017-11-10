import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';
import { LoginPage } from '../login/login';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public alertHomeCtrl:AlertController,
    
  ) {
  }

  abrirCadastroAluno(){
    this.navCtrl.push(LoginPage)
  }
  abrirCadastroProfessor(){}
  abrirRelatorio(){}
  sair(){
    this.navCtrl.push(LoginPage)
  }

}
