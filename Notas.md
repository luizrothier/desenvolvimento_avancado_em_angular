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