import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListarProfessorPage } from './listar-professor';

@NgModule({
  declarations: [
    ListarProfessorPage,
  ],
  imports: [
    IonicPageModule.forChild(ListarProfessorPage),
  ],
})
export class ListarProfessorPageModule {}
