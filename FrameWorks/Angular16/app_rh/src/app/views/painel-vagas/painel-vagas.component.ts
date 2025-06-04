import { Component, OnInit } from '@angular/core';
import { Vaga } from 'src/app/models/vaga.model';
import { VagaService } from 'src/app/services/vaga.service';

@Component({
  selector: 'app-painel-vagas',
  templateUrl: './painel-vagas.component.html',
  styleUrls: ['./painel-vagas.component.scss'],
})
export class PainelVagasComponent implements OnInit {
  //fazer os controller para Vagas
  public vagas: Vaga[] = []; //armazena os dados da API
  public vaga: Vaga = new Vaga(0, '', '', '', 0); //manipular no Formulário(inserir, modificar, deletar)

  constructor(private _vagaService: VagaService) {}

  // método para rodar no inicio da tela
  ngOnInit(): void {
    this.listarVagas();
  }

  //método para carregar todas as vagas do BD
  listarVagas() {
    this._vagaService.getVagas().subscribe(
      //preencher um Map com as informações do backEnd
      (e) => {
        this.vagas = e.map((atributo) => {
          return new Vaga(
            atributo.id,
            atributo.nome,
            atributo.foto,
            atributo.descricao,
            atributo.salario
          );
        });
      }
    );
  }

  //listarVaga unica
listarVagaUnica(vaga:Vaga){
  //função para listar no formulario a vaga clicada na tabela
  this.vaga=vaga;
}
  //cadastrar Vaga
  cadastrarVaga(){
    this._vagaService.postVaga(this.vaga).subscribe(
      ()=>{
        this.vaga = new Vaga(0,"","","",0);
        this.listarVagas(); //atualizar a tabela com a nova Vaga
        alert("Vaga Cadastrada com Sucesso!!!");
      },(erro) => {console.error("Exception: ",erro);}
      //em caso de erro mpostra uma mensagem no console
    );
  }

  //Atualizar vaga
  atualizarVaga(id:any){
    this._vagaService.putVaga(id,this.vaga).subscribe(
      ()=>{
        this.vaga = new Vaga(0,"","","",0);
        this.listarVagas(); //atualizar a tabela
        alert("Vaga Atualizada com Sucesso!!!");
      },(erro)=>{console.error("Exception: ",erro);}
    )
  }

  //Deletar vaga
  excluirvaga(id:any){
    this._vagaService.deleteVaga(id).subscribe(
      ()=>{
        this.vaga = new Vaga(0,"","","",0);
        this.listarVagas(); //atualizar a tabela
        alert("Vaga Excluida com Sucesso!!!");
      }, (erro) => {console.error("Exception: ",erro);}
    )
  }


}
