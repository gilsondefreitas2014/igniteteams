# PROJETO igniteteams

## 0. Comando usado para a Criação do Projeto
npx create-expo-app igniteteams --template
Blank (TypeScript)

## 1. Configurar apelido para a pasta SRC (Path Mapping)
Instalando a biblioteca babel-plugin-module-resolver
acessar o link: https://github.com/tleunen/babel-plugin-module-resolver/blob/master/DOCS.md
Executar o comando: npm install --save-dev babel-plugin-module-resolver
No arquivo babel.config.js, configurar os alias
No arquivo tsconfig.json, configurar os alias

## 2. Comandos do git hub para sincroniar o projeto
git remote add origin https://github.com/gilsondefreitas2014/igniteteams.git

git branch -M main

git push -u origin main   


git add .

git commit -m "inicial"

git push

## 3. Configurar o styled-components
Executar o comando: npm install styled-components
Caso não dê certo, olhe as mensagens dos erros relatando para usar "--force" no fim do comando, desta forma: npm install styled-components --force

### 3.1 Instalar a extensão vscode-styled-components
clicar no botão extensões e instalar styled components (ícone unhas com esmalte)

### 3.2 Configurando o Tema
No arquivo App.tsx, importar o ThemeProvider
Criar arquivo index.ts em: src\theme
Criar arquivo styled.d.ts em: src\@types

### 3.3 Configurando fontes do Expo
Executar o comando: npx expo install expo-font @expo-google-fonts/roboto

No arquivo App.tsx: import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';