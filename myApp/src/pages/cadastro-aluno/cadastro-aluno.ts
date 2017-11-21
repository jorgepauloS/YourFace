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
    nomeUsuario : null,
    cpf : null,
    email : null,
    emailConf: null,
    curso: null,
    idade : null,
  };
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCadastroCtrl: AlertController ) {
  }

  TestaCPF(strCPF) {
    let Soma;
    let Resto;
    Soma = 0;
    if (strCPF == "00000000000") return false;

    for (let i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10))) return false;

    Soma = 0;
    for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11))) return false;
    return true;
  }

  fazerCadastroAluno(): boolean {
    var nomeUsuario = this.dados.nomeUsuario;
    var cpf = this.dados.cpf;
    var email = this.dados.email;
    var emailConf = this.dados.emailConf;
    var curso = this.dados.curso;
    var idade = this.dados.idade;

    if (nomeUsuario == undefined) {
      alert('O login é um campo obrigatório.');
      return;
    }
    if (cpf == undefined) {
      alert('O CPF é um campo obrigatório.');
      return;
    }
    if (email == undefined) {
      alert('O e-mail é um campo obrigatório.');
      return;
    }
    if (emailConf == undefined) {
      alert('O e-mail de confimação é um campo obrigatório.');
      return;
    }
    if (email !== emailConf) {
      alert('E-mails não são iguais.');
      return;
    }
    if (this.TestaCPF(cpf) == false) {
      alert('Cpf inválido.');
      return;
    }
    if (curso == undefined) {
      alert('O campo curso/série é um campo obrigatório.');
      return;
    }
    if (idade == undefined) {
      alert('O campo idade é um campo obrigatório.');
      return;
    }

    // Cria o objeto usuario e o cadastro no BD
    var usuarioAluno: object = {
      nomeUsuario: nomeUsuario,
      cpf: cpf,
      email: email,
      emailConf: emailConf,
      curso: curso,
    };
    //Falta integrarco o banco.
    /*if (this.usuarioDAO.getUser()){
      this.usuarioDAO.cadastrar(usuarioAluno);
      return true;
    }*/

    return true;
  }
  goToHomePage(dados) {
    if (this.fazerCadastroAluno()) {
      console.log(dados)
      this.showAlert()
      this.navCtrl.push(HomePage);
    } else {
      console.log("Algun campo no cadastro está errado!")
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroAlunoPage');
  }
  getPhoto(){
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
