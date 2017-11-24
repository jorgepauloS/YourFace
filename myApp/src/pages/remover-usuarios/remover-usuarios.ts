import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AlertController } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';



@IonicPage()
@Component({
  selector: 'page-remover-usuarios',
  templateUrl: 'remover-usuarios.html',
})
export class RemoverUsuariosPage {

  items : any;
  lista:any;
  /*lista=[
    { name: "string", cpf: "12345", email: "string", password: "string" },
    { name: "string", cpf: "23452",email: "string", password: "string" },
    { name: "string", cpf: "452223",email: "string", password: "string" },
    { name: "string", cpf: "0111223", email: "string", password: "string" }
  ];*/
  
  //'/coordenador/';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public http: Http) {
    this.initializeItems();
  }


  initializeItems() { 
    
    this.http.get('http://localhost:3000/coordenador').map(res => res.json())
      .subscribe(res => {
        this.items = res;
      }, (error) => {
        console.error("erro " + error);
      });

      var prof:any;

    this.http.get('http://localhost:3000/professor').map(response => response.json())
      .subscribe(response => {
        for (const key in response) {
          if (response.hasOwnProperty(key)) {
            this.items.push(response[key]);
          }
        }
        
      }, (error) => {
        console.error("erro " + error);
      });

    


    
  
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

  editarUser(req) {
    let prompt = this.alertCtrl.create({
      title: 'Edita Perfil',
      inputs: [
        {
          name: 'nome',
          placeholder: 'nome',
          value: req.name
        },
        {
          name: 'cpf',
          placeholder: 'cpf',
          value: req.cpf
        },
        {
          name: 'email',
          placeholder: 'email',
          value: req.email
        },
        {
          name: 'password',
          placeholder: 'password',
          value: req.password
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => { }
        },
        {
          text: 'Salvar',
          handler: data => {

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
