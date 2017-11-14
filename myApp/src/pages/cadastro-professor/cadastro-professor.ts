import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-cadastro-professor',
  templateUrl: 'cadastro-professor.html',
})
export class CadastroProfessorPage {

  public dados = {
    nomeProfessor : null,
    cpf : null,
    senha : null,
    senhaConf : null,
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
    var nomeProfessor = this.dados.nomeProfessor;
    var cpf = this.dados.cpf;
    var email = this.dados.email;
    var emailConf = this.dados.emailConf;
    var senha = this.dados.senha;
    var SenhaConf = this.dados.senhaConf;
    var idade = this.dados.idade;

    if (senha !== SenhaConf) {
      senha.innerText = '';
      SenhaConf.innerText = '';
      senha.focus();
      alert('As senhas não são iguais.')
      return;
    }

    // Compara se os e-mails digitados são correspondentes
    if (email !== emailConf) {
      email.innerText = '';
      emailConf.innerText = '';
      email.focus();
      alert('E-mails não são iguais.');
      return;
    }

    var usuario: object = {
      username: nomeProfessor,
      password: senha,
      email: email
    };

    this.navCtrl.push(HomePage);
  }
  goToHomePage(dados){
    console.log(dados)
    this.showAlert()
    this.navCtrl.push(HomePage);
  }
  goToHomePage2(){
    this.navCtrl.push(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroProfessorPage');
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
