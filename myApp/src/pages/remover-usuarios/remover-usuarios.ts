import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AlertController } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { List } from 'ionic-angular/components/list/list';


@IonicPage()
@Component({
  selector: 'page-remover-usuarios',
  templateUrl: 'remover-usuarios.html',
})
export class RemoverUsuariosPage {
  items: any;
  lista: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public http: Http) {
    this.inicializaLista()
  }

  inicializaLista() {
    this.http.get('http://localhost:3000/coordenador').map(res => res.json())
      .subscribe(res => {
        console.log(res)
        this.lista = res;
      }, (error) => {
        console.error("erro " + error);
      });

    this.http.get('http://localhost:3000/professor').map(response => response.json())
      .subscribe(response => {
        for (const key in response) {
          if (response.hasOwnProperty(key)) {
            this.lista.push(response[key]);
          }
        }
        this.initializeItems();
      }, (error) => {
        console.error("erro " + error);
      });

  }

  initializeItems() {
    this.items = this.lista;
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.cpf.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  editarUser(user) {
    let prompt = this.alertCtrl.create({
      title: 'Edita Perfil',
      inputs: [
        {
          name: 'nome',
          placeholder: 'nome',
          value: user.name
        },
        {
          name: 'cpf',
          placeholder: 'cpf',
          value: user.cpf
        },
        {
          name: 'email',
          placeholder: 'email',
          value: user.email
        },
        {
          name: 'password',
          placeholder: 'password',
          value: user.password
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }

        },
        {
          text: 'Salvar',
          handler: data => {
            console.log('Saved clicked');
            let params: any = {
              name: data.name,
              cpf: data.cpf,
              email: data.email,
              password: data.password
            }
            console.log(data);
            /*this.service.updateData(params)
              .subscribe(
              data => {
                console.log(data.mensage);
                this.getDados();
              },
              err => console.log(err)
              );*/
          }
        }
      ]
    });
    prompt.present();
  }
}
