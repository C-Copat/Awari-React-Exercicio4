# Awari - Introdução a FrontEnd - Exercício 4

O objetivo deste exercício é transformar uma outra tela que havia sido desenvolvida em Javascript vanilla e transformar o projeto em React.

Não foi seguido qualquer estrutura de pasta e/ou componentização. A ideia era apresentar 

## Exercício:

Continuando nossa imersão no React, o objetivo dessa tarefa é você criar uma nova aplicação React e fazer novamente sua tela de Login feita na Tarefa 2 com as mesmas funcionalidades e requisitos, mas utilizando, desta vez, o React. 

Dicas:

Utilize a ferramenta de create-react-app criada da tarefa 3 para criar uma nova aplicação
Lembre-se das mudanças de sintaxe que o react precisa
Se desejar utilize dos poderes (states, events, etc..) do React para facilitar algo
Exemplo já realizado: 

[https://codesandbox.io/s/04-exercise-awari-frontend-i3271s](Ambiente de Desenvolvimento)
[https://i3271s.csb.app/](Exemplo Rodando)

## Problemas conhecidos (Porém ainda não resolvidos)

A função login roda ao clicar no botão Entrar, porém ela roda antes do estado ser atualizado (setState). 
Portanto, a primeira vez que o login for realizado, ele retorna um erro de que não está autorizado. 
Porém ao clicar an segunda vez, ele utiliza o novo estado 'credentials' já  atualizado e então retorna o aviso de acordo com o que foi preenchido.

Pensei em corrigir com useEffect, porém não funcionou, pois o useEffect roda também ao montar estes componentes (e portanto retorna aviso 1 ou 2 vezes na primeira renderização da tela)