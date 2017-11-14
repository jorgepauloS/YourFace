import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IntroPageModule } from '../pages/intro/intro.module';
import { IntroPage } from '../pages/intro/intro';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { LoginPage } from '../pages/login/login';
import { CadastroAlunoPage } from '../pages/cadastro-aluno/cadastro-aluno';
import { CadastroProofessorPage } from '../pages/cadastro-proofessor/cadastro-proofessor';
import { RelatorioPage } from '../pages/relatorio/relatorio';
import { InfomacaoDiretorPage } from '../pages/infomacao-diretor/infomacao-diretor';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    IntroPage,
    CadastroPage,
    CadastroAlunoPage,
    CadastroProofessorPage,
    InfomacaoDiretorPage,
    RelatorioPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    IntroPage,
    CadastroPage,
    CadastroAlunoPage,
    CadastroProofessorPage,
    InfomacaoDiretorPage,
    RelatorioPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    
  ]
})
export class AppModule {}
