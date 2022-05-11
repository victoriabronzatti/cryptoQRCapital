# CryptoQR

Projeto desenvolvido em Angular (version 13.3.5.) com o intuito de criar uma área logada com dashboard de pesquisa de criptomoedas, onde é possível pesquisar, selecionar quais moedas o usuário deseja acompanhar a cotação de preço.

## Servidor de desenvolvimento

Utilize o comando `ng serve`ou `npm start`, após compilação, o projeto estará disponível no endereço `http://localhost:4200`.

A aplicação deve ser realizada o reload automático ao alterar qualquer um dos arquivos do projetos.

## Funcionamento
A área logada com dashboard de pesquisa de criptomoedas, onde é possível pesquisar, selecionar quais moedas o usuário deseja acompanhar a cotação do preço.

`Buscador:` O componente de busca funciona no modelo autocomplete, ou seja, quando o usuário escreve os possíveis resultados começam a surgir. Além disso, uma vez que o usuário clica em um item do autocomplete, a moeda pesquisada é adicionada no dashboard.

`Dashboard:`O componente dashboard agrupa todas as moedas que serão acompanhadas pelo usuário. Cada item de dashboard deve apresentar as seguinte informações:

`Nome:` Exibe o nome da moeda.
`Símbolo:` Exibe o símbolo da moeda.
`Preço:` Exibe o preço da moeda.
`Sinalização:` Exibe a variação (em %) do preço da moeda nas últimas 24h. Caso tenha aumentado, a variação precisa estar com a cor verde, do contrário, vermelha.
Por último, o dashboard deve atualizar o preço a cada 5s.

## O que não funcionou

`Funcionalidades do sistema`como API, autocomplete e login. 
