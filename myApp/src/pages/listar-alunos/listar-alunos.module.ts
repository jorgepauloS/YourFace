import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListarAlunosPage } from './listar-alunos';

@NgModule({
  declarations: [
    ListarAlunosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListarAlunosPage),
  ],
})
export class ListarAlunosPageModule {}
