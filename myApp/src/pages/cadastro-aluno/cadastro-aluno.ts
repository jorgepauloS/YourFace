import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Camera, CameraOptions } from "@ionic-native/camera";


@IonicPage()
@Component({
  selector: 'page-cadastro-aluno',
  templateUrl: 'cadastro-aluno.html',
})
export class CadastroAlunoPage {
  foto: any;
  public dados = {
    name: null,
    cpf: null,
    email: null,
    emailConf: null,
    curso: null,
    dataNascimento: null,
  };
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCadastroCtrl: AlertController,
    public camera: Camera,
    public http: Http) {
  }
  getPhoto(type) {
    const options: CameraOptions = {
      quality: 50,

      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: type == "picture" ? this.camera.PictureSourceType.CAMERA : this.camera.PictureSourceType.SAVEDPHOTOALBUM,
      correctOrientation: true,
      targetHeight: 400,
      targetWidth: 400
    };

    this.camera.getPicture(options).then((imageData) => {

      this.foto = 'data:image/jpeg;base64,' + imageData;

    }, (err) => {
      // Handle error
    });
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

  cadastrarEstudante() {
    console.log(this.foto);
    var name = this.dados.name;
    var cpf = this.dados.cpf;
    var email = this.dados.email;
    var emailConf = this.dados.emailConf;
    var curso = this.dados.curso;
    var dataNascimento = this.dados.dataNascimento;

    if (name == undefined) {
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
    if (dataNascimento == undefined) {
      alert('O campo idade é um campo obrigatório.');
      return;
    }

    // Cria o objeto usuario e o cadastro no BD
    var usuarioEstudante: object = {
      name: name,
      cpf: cpf,
      email: email,
      curso: curso,
      dataNascimento: dataNascimento

    };
    this.http.post('http://localhost:3000/alunos/create', usuarioEstudante).map(res => res.json())
      .subscribe(res => {
        console.log(res);
        if (res.error) {
          console.log(usuarioEstudante)
          this.showAlertErro()
        } else {
          this.showAlert()
          this.navCtrl.setRoot(HomePage);;
        }
      }, (error) => {
        console.log("erro " + error);
      });
  }

  goToHomePage2() {
    this.navCtrl.setRoot(HomePage);
  }

  showAlert() {
    let alert = this.alertCadastroCtrl.create({
      title: 'Cadastro realizado com sucesso!',
      subTitle: 'Parabéns por cadastra um ESTUDANTE muito importante para sua instituiçao!',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlertErro() {
    let alert = this.alertCadastroCtrl.create({
      title: 'Cadastro não realizado !',
      subTitle: 'Algun campo no cadastro está errado e/ou cpf já cadastrado.',
      buttons: ['OK']
    });
    alert.present();
  }

}
