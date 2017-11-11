import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroProofessorPage } from './cadastro-proofessor';

@NgModule({
  declarations: [
    CadastroProofessorPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroProofessorPage),
  ],
})
export class CadastroProofessorPageModule {}
