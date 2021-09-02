# MeuProjeto

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.14.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Minhas Notas
## Procedimento usado para criar o repositório e o workspace local
... O que funcionou!
1) Criar o diretório, descompactar os arquivos, e rodar npm i (que cria o node_modules);
2) Criar o repositório desenvolvimento_avancado_em_angular no GitHub;
3) Em uma janela de comando, posicionada no diretório do projeto, rodar os comandos abaixo (Obs.: Não executar as partes específicas do procedimento criado automaticamente para gerar o README.md, pois o projeto já possui esse arquivo) 
	a) git init
	b) git add -A
	c) git commit -m "first commit"
	d) git branch -M main
	e) git remote add origin https://github.com/luizrothier/desenvolvimento_avancado_em_angular.git
	f) git push -u origin main
	
Para rodar ng g c (com o Angular instalado apenas localmente):
```
npm run-script ng g c demos\reactiveForms\cadastro
```

### Seção 2, Aula 4 ()
- A definição de class para um mdel deve ser usada qdo se deseja que esta classe tenha uma comportamente na classe. No entanto, se a classe for puramente um templste, deve-se preferencialente utilzar a Interface;

### Seção 2, Aula 6 ("Validações customizadas de formulário")
- Instalação do ng-brazil (npmjs.com/package/ng-brazil)
```
$ npm install ng-brazil
$ npm install --save ng-brazil angular2-text-mask
```
- Biblioteca utilsBr (para as máscaras)
- Instalação do ng2-validation (npmjs.com/package/ng2-validation)
```
$ npm install ng2-validation
```

Obs.: Esta aula, e a anterior TEM DE SER revistas!!!

### Seção 6, Aula 1 ("Providers - UseClass")
- Para compilar, tem que comentar o construtor no BarComponent;

### Seção 6, Aula 2 ("Providers UseValue - NgModules - Injection Token")
- Conceitos complexos. Rever!
- Qual é o propósito de se usar Injection Tokens no Angular?
- Apresentou erro, pois desfez o comentário da aula 1 da seção (verificar depois)

### Seção 6, Aula 3 ("Providers - UseFactory")
- Conceitos complexos. Rever!
- Design pattern: uselocator?
- Apresentou erro, pois desfez o comentário da aula 1 da seção (verificar depois)

### Seção 6, Aula 4 ("Providers - UseExisting")
- Conceitos complexos. Rever!
- Apresentou erro, pois desfez o comentário da aula 1 da seção (verificar depois)

### Seção 6, Aula 5 ("ngZones")
- Não foi possível verificar, pois os erros das aulas anteriores gerou erro que quebrou o exemplo;

### Seção 7, Aula 1 ("Introdução ao State Management")
- rxjs-dev.firebaseapp.com
- ngrx.io
- redux.js.org (há um repositório Git específico de Redux para o Angular)
- netbasal.gitbook.io/akita/

### Seção 7, Aula 2 ("Setup da estrutura")
- JSON Server (https://www.npmjs.com/package/json-server)
- Obs.: Instalação LOCAL (npm i json-server). Para rodar ==> npx json-server (vide https://stackoverflow.com/questions/55547572/json-server-is-not-recognized-as-an-internal-or-external-command , a partir da pesquisa "how to install json server locally")
- Json-server no GitHub: https://github.com/typicode/json-server

### Seção 7, Aula 3 ("Utilizando um serviço")
- Referência à documentação do Angular: "Naming conventions for observables"
- Em quais casos é possível, e em quais não, usar uma propriedade Observable ao invés de se fazer o Subscribe?

### Seção 7, Aula 4 ("Configuração de State e Store")
- Conceitos complexos: Subject e BehaviorSubject
- Uso do TypeScript 1: operador Spread
```
set(name: string, state: any) {
	this.subject.next({
		...this.value, [name]: state
	})
}
```
- Uso do TypeScript 2: operador Pipe

- Uso do TypeScript 3: operador Map

- Uso do TypeScript 4: operador Tap
```
getToDoList$: Observable<Task[]> = this.http
	.get<Task[]>('http://localhost:3000/todolist')
	.pipe(
		tap(next => this.store.set('todolist',next)));
```

### Seção 7, Aula 5 ("Gerenciando eventos de mudança de estado")
- Obs.: Conceitos complexos. Reassistir essa e a aula anterior;

### Seção 8 ("Testes de Unidade"), Aula 1 ("Introdução")
- Karma: Test runner;
- Jasmine: Framework de teste;

### Seção 8 ("Testes de Unidade"), Aula 2 ("Configurações de testes")
- Obs.: "code ." faz o VS Code já abrir na pasta selecionada;
- Provavelmente, o comando para rodasr os testes de comportamento (spec), com o npm, é:
```
npm test
```
- ng test --code-coverage
- Estudar depois as melhores formas de fazer testes de code-coverage, pois os testes do Angular testam apenas o que foi especificado para teste, e não aquilo que não foi especificado;
- Rodar novamente esta aula, criando um novo projeto eventualmente em um outro repositório GitHub, pois o projeto criado nesta aula não faz parte da aplicação em curos nas instruções;

### Seção 8 ("Testes de Unidade"), Aula 3 ("Testes em Pipes")
- Rever a aula;
- Após a conclusão da aula, fazer o seguinte:
1 - Incluir import { RouterTestingModule } from '@angular/router/testing'; em app.component.spec.ts
2 - Sobrescrever os seguintes arquivos json do projeto por aqueles fornecidos como recurso do treinamento: angular.json, package-lock.json, e package.json;
3 - Incluir os seguintes arquivos fornecidos como recurso (diretório raiz): karma.conf.js, todo.db.json, tsconfig.spec.json, tslint.json;
4 - Incluir o arquivo test.ts, fornecido como recursos, no mesmo nível do siretório src;
5 - Remover a pasta node_modules;
6 - Rodar npm i;
7 - Rodar npm test

### Seção 8 ("Testes de Unidade"), Aula 4 ("Testes em Componentes")
- Rever a aula;

### Seção 8 ("Testes de Unidade"), Aula 5 ("Testes em Serviços")
- Conceitos complexos. Rever a aula;
- Fornece diretrizes para a determinação do escopo dos testes na aplicação;

### Seção 8 ("Testes de Unidade"), Aula 6 ("Analisando o code coverage")
- Rever a aula;
- Juntamente com a aula anterior, fornece diretrizes para a determinação do escopo dos testes na aplicação;
```
npm test --code-coverage
```

### Seção 8 ("Testes de Unidade"), Aula 7 ("Testes de integração e2e - Parte 1")
- Instalação LOCAL do [Protractor](https://www.protractortest.org/#/):
```
npm install protractor
```
- Para rodar os testes ponta-a-ponta do Protractor
```
npm run-script e2e
```
- O Protractor usa o Selenium por baixo;
- Testes do Protractor utiliza a estrutura POM (Page Object Model);
- Rever;

### Seção 8 ("Testes de Unidade"), Aula 8 ("Testes de integração e2e - Parte 2")
- Rever a aula;

### Seção 8 ("Testes de Unidade"), Aula 9 ("Testes de integração e2e - Parte 3")
- Rever a aula;
- Permite a separação dos testes da aplicação (usando a entrada "suites" do protractor.conf.js);
```
npm run-script e2e --suite home

ou

npm run-script e2e --suite cadastro

etc.
```
- Última aula da trilha de "Desenvolvimento Avançado em Angular" que foi gravada neste repositório. A seção seguinte, "Projeto Final", foi para o repositório de mesmo nome no GitHub.
- Retificação do comando para invocar os testes e2e, em 02set21
```
	npm run e2e --suite=cadastro ==> ESTE FUNCIONA!!!

ao invés de
	
	npm run-script e2e --suite=cadastro ==> NÃO FUNCIONA!
```



### Procedimento exibido pelo próprio GitHub quando da criação do repositório
…or create a new repository on the command line
echo "# desenvolvedorIO-desenvolvimento_avancado_em_angular" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/luizrothier/desenvolvimento_avancado_em_angular.git
git push -u origin main

…or push an existing repository from the command line
git remote add origin https://github.com/luizrothier/desenvolvimento_avancado_em_angular.git
git branch -M main
git push -u origin main
