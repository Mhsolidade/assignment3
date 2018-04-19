# GAMA Assigment 3

> **Padrão:** Angular

> **Framework:** Boostrap, Angular

> **Persistência:** Através do Firebase Database, seguindo a [documentação](https://github.com/angular/angularfire2).

> **Instalação** npm install 

> **Desenvolvedores:** Jessica Lopes, Matheus Santos

>  **Método de Desenvolvimento:**  Optamos por desenvolver todo o projeto com  acompanhamento em tempo real, através de hangouts, para melhor troca de experiência.

>  **Link da aplicação:** [mvp.designermatch.com.br](https://mvp.designermatch.com.br/).
 
### Upload do projeto

**Requisitos:**   Ter um conta Firebase e Nodejs instaldo.
No console do Firebase crie um novo projeto. https://console.firebase.google.com/u/1/


##### Passos

instalar o Firebase tools
>> npm install -g firebase-tools

Efetuar o login no Firebase no terminal
>> firebase login

No diretório do projeto. Iniciar as configurações do Firebase, para **hosting** e **FireDatabase**
>>  firebase init

Configure o arquivo database.rules.json, para permitir acesso de leitura e gravação no banco de dados.

Por fim, realizar o deploy
>> firebase deploy
