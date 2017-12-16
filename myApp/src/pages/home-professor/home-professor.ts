
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-home-professor',
  templateUrl: 'home-professor.html',
})
export class HomeProfessorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
 
 /* abrirRelatorio() {
    this.navCtrl.push()
  } */

  sair() {
    this.navCtrl.setRoot(LoginPage)
  }

 /* listarAlunos() {
    this.navCtrl.push(ListarTurmaPage)
  }
*/
}

