## Projeto de Aplicação Redes 2

**UFF - Redes II**

Tema: Demonstração dos problemas do tráfego de vídeo de alta definição em redes sem fio

---

**Motivação**

Descrição do problema: Visualizar o tráfego multimídia sendo transmitido em um
serviço de streaming com uma simples aplicação cliente-servidor. No cliente,
definindo certas oscilações de rede e isso refletindo na qualidade que será
encaminhada os dados que serão transmitidos no sistema. A ideia é visualizar os
problemas de forma geral que estará presente no lado do cliente e por parte do
servidor também. A ideia é que todos no laboratório acessem uma pagina web,
dando interatividade no laboratório.

---

**Objetivo**

Uma aplicação simples que provê um sistema de comunicação que irá transmitir o
conteúdo em streaming e iremos analisar o tráfego dos clientes, com o grande
foco na diferença de tráfego em baixa e alta resolução.

---

**Estratégia de implementação**

Iremos utilizar Javascript no lado do cliente para renderizar os itens no browser,
irei utilizar uma linguagem de backend (a definir para realizar o stream dos
dados), utilizarei o protocolo HTTP com transmissão contínua dos dados.
Irei fazer uma tratativa lógica pela qualidade da transmissão com o cliente
modificando a qualidade para assim verificarmos como se comporta o fluxo dos
dados.

--- 

**Aluno: Wesley Ferreira**