import { Groups } from '@screens/Groups';

export default function App() {
  return (
    <Groups />
  );
}

/*
0. npx create-expo-app igniteteams --template
   Blank (TypeScript)

1. Apelido para a pasta SRC (Path Mapping)
   Instalando a biblioteca babel-plugin-module-resolver
   acessar o link: https://github.com/tleunen/babel-plugin-module-resolver/blob/master/DOCS.md
   rodar o comando: npm install --save-dev babel-plugin-module-resolver
   No arquivo babel.config.js, configurar os alias
   No arquivo tsconfig.json, configurar os alias


2. git hub
   git remote add origin https://github.com/gilsondefreitas2014/igniteteams.git
   git branch -M main
   git push -u origin main   

*/