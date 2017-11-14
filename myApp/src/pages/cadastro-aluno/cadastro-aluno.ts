import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-cadastro-aluno',
  templateUrl: 'cadastro-aluno.html',
})
export class CadastroAlunoPage {

  public dados = {
    nomeAluno : null,
    cpf : null,
    senhaConf : null,
    curso : null,
    email : null,
    emailConf: null,
    idade : null,

  };
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCadastroCtrl: AlertController ) {
  }

  public fazerCadastro(): void {
    // Pega as informações do usuário
    var nomeAluno = this.dados.nomeAluno;
    var cpf = this.dados.cpf;
    var email = this.dados.email;
    var emailConf = this.dados.emailConf;
    var curso = this.dados.curso;
    var idade = this.dados.idade;

    this.navCtrl.push(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroAlunoPage');
  }

  goToHomePage() {
    this.showAlert() 
    this.navCtrl.push(HomePage);
  }

  goToHomePage2() {
    this.navCtrl.push(HomePage);
  }
  showAlert() {
    let alert = this.alertCadastroCtrl.create({
      title: 'Cadastro realizado com sucesso!',
      subTitle: 'Parabéns por  cadastrar um membro importante!',
      buttons: ['OK']
    });
    alert.present();
  }
}
