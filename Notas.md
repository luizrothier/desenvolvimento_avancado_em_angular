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
	
Para rodar ng g c
npm run-script ng g c demos\reactiveForms\cadastro

### Aula 4, Seção 2:
- A definição de class para um mdel deve ser usada qdo se deseja que esta classe tenha uma comportamente na classe. No entanto, se a classe for puramente um templste, deve-se preferencialente utilzar a Interface;

### Aula 6 ("Validações customizadas de formulário"), Seção 2:
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