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

  public dados = {
    nomeUsuario : null,
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
    var nomeUsuario = this.dados.nomeUsuario;
    var cpf = this.dados.cpf;
    var email = this.dados.email;
    var emailConf = this.dados.emailConf;
    var senha = this.dados.senha;
    var SenhaConf = this.dados.senhaConf;
    var idade = this.dados.idade;


    // Compara se as senhas digitadas são correspondentes
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
    
    // Cria o objeto usuario e o cadastro no BD
    var usuario: object = {
      username: nomeUsuario,
      password: senha,
      email: email
    };
    //Falta integrarco o banco.
    //this.usuarioDAO.cadastrar(usuario);

    this.navCtrl.push(LoginPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }
  goToLoginPage(dados){
    console.log(dados)
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

