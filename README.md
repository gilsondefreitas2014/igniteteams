# PROJETO igniteteams

## 0. Comando usado para a Criação do Projeto
npx create-expo-app igniteteams --template
Blank (TypeScript)

## 1. Configurar apelido para a pasta SRC (Path Mapping)
   Instalando a biblioteca babel-plugin-module-resolver
   acessar o link: https://github.com/tleunen/babel-plugin-module-resolver/blob/master/DOCS.md
   rodar o comando: npm install --save-dev babel-plugin-module-resolver
   No arquivo babel.config.js, configurar os alias
   No arquivo tsconfig.json, configurar os alias

## 2. Comandos do git hub para sincroniar o projeto
   git remote add origin https://github.com/gilsondefreitas2014/igniteteams.git
   git branch -M main
   git push -u origin main   

   git add .
   git commit -m "inicial"
   git push
