import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroProfessorPage } from './cadastro-professor';

@NgModule({
  declarations: [
    CadastroProfessorPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroProfessorPage),
  ],
})
export class CadastroProfessorPageModule {}
