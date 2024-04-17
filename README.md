<div id="top"></div>


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/VulpeComunicacao/">
    <img src="https://vulpecomunicacao.com.br/clientes/senac/site4-0/vulpe@2x.png" alt="Logo" width="170" height="65.3">
  </a>

  <p align="center">
    <br />
    <strong>Cinterfor</strong><br />
    <small>por Vulpe Comunicação</small>
  </p>

  <p align="center">
    <a href="https://github.com/VulpeComunicacao/"><strong>Veja a Documentação »</strong></a>
    <br />
    <a href="https://senac.vulpecomunicacao.com.br/">Frontend</a>
    ·
    <a href="https://vulpecomunicacao.com.br/clientes/senac/senac4-backend/">Backend</a>
    <!-- ·
    <a href="https://github.com/VulpeComunicacao//issues">Request Feature</a> -->
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Índice de conteúdos</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o projeto</a>
      <ul>
        <li><a href="#built-with">Desenvolvido com</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Començando</a>
      <ul>
        <li><a href="#prerequisites">Pré-requisitos</a></li>
        <li><a href="#installation">Instalação</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contato</a></li>
    <li><a href="#acknowledgments">Documentação extra</a></li>
    <li><a href="#deploy">Deploy IIS</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## Sobre o projeto
<div id="sobre-o-projeto"></div>


<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

O projeto Cinterfor utiliza WordPress headless usando Next.js combinando a flexibilidade e a facilidade de uso do WordPress com os benefícios de um frontend moderno. Ao adotar a arquitetura headless, a separação do frontend e do backend permite que os desenvolvedores criem interfaces de usuário altamente personalizadas e otimizadas. O Next.js, um framework de React para renderização do lado do servidor, é uma escolha popular para construir o frontend do projeto. Ele oferece um fluxo de desenvolvimento eficiente e uma ampla gama de recursos para impulsionar a experiência do usuário.

Uma das características mais notáveis de um projeto WordPress headless usando Next.js é seu desempenho aprimorado. Com a renderização do lado do servidor fornecida pelo Next.js, as páginas são pré-renderizadas e enviadas para o cliente, resultando em tempos de carregamento mais rápidos. Além disso, a implementação dessa arquitetura permite o uso de recursos como code-splitting, prefetching e caching, que contribuem para uma experiência de usuário ágil e responsiva. A abordagem headless também possibilita a integração com tecnologias de cache e CDN (Content Delivery Network), melhorando ainda mais o desempenho geral do site.

Quanto à segurança e escalabilidade, um projeto WordPress headless usando Next.js oferece benefícios significativos. Ao separar o frontend do backend, os riscos de segurança são reduzidos, uma vez que a camada pública do site não está diretamente conectada ao sistema de gerenciamento de conteúdo (CMS). Isso permite que os desenvolvedores implementem medidas de segurança adicionais, como autenticação de API e validação de dados, protegendo assim o site contra vulnerabilidades comuns. Além disso, a arquitetura headless facilita a escalabilidade, pois o frontend pode ser implantado em servidores e serviços especializados, garantindo que o site possa lidar com picos de tráfego sem comprometer o desempenho.

Por esses motivos, a Vulpe Comunicação escolheu essa arquitetura para entrega do projeto. Agregando em modernidade, segurança e usabilidade.

<p align="right">(<a href="#top">voltar ao topo</a>)</p>



### Desenvolvido com
<div id="built-with"></div>

O projeto "cinterfor" utiliza Next.js, React Query e Sass para desenvolver um site moderno e performático. O Next.js é um framework de React para renderização do lado do servidor, enquanto o React Query facilita o gerenciamento de estado da aplicação. O Sass é utilizado para estilização avançada do CSS. Além disso, o projeto também utiliza Apollo Client, GraphQL, Lottie Web, Normalize.css, React e React DOM para recursos adicionais.

Essas tecnologias fornecem uma base sólida para criar um site seguro e escalável, atendendo aos requisitos do projeto "cinterfor".

* [WordPress](https://br.wordpress.org/)
* [GraphQL](https://graphql.org/)
* [Next.js](https://nextjs.org/)
* [Apollo](https://www.apollographql.com/docs/react/)
* [SASS](https://sass-lang.com/)

<p align="right">(<a href="#top">voltar ao topo</a>)</p>



<!-- GETTING STARTED -->
## Començando
<div id="getting-started"></div>


### Pré-requisitos
<div id="prerequisites"></div>

Certifique-se de atender aos seguintes requisitos antes de iniciar o projeto Next.js "cinterfor".

- Node.js: versão 18 ou superior
- npm: versão 9 ou superior
- Git: versão 2 ou superior
- Next.js: 13.4.6
- React: 18.2.0
- React Dom": 18.2.0


### Instalação
<div id="installation"></div>

Siga as etapas abaixo para instalar e configurar o ambiente necessário para o projeto.

1. Faça o clone do repositório do projeto:

```git clone <url_do_repositório>```

2. Navegue até o diretório do projeto:

```cd senac_4-0```

3. Instale as dependências do projeto usando o npm:

```npm install```

### Variáveis de ambiente

As variáveis de ambiente permitem uma configuração simples para build entre ambientes. Nos arquivos que encontram-se na raiz do projeto, percebemos os seguintes arquivos:

- .env.local;
- .env.production;

Esses arquivos possuem as chamadas:

- WP_GRAPHQL_URL (Caminho que fará a conexão com o backend em WordPress)
- NEXT_PUBLIC_GOOGLE_ANALYTICS_4 (ID de acompanhamento do Google Analytics 4)
- NEXT_PUBLIC_WEBSITE_URL (Endereço do website para o Frontend)
- NEXT_PUBLIC_WEBSITE_NAME (Nome do site / Título)

Essas variáveis precisam ser alteradas antes do build em produção ou homologação. Os ambientes do SENAC respeitarão as regras para o ambiente de desenvolvimento/manutenção e Produção.

---
***Observação:*** Vale lembrar que o projeto não disponibiliza essas variáveis em produção. Evitando assim, um git exposed para o ambiente externo.

---


<p align="right">(<a href="#top">voltar ao topo</a>)</p>



<!-- USAGE EXAMPLES -->
## Executando o projeto
<div id="getting-started"></div>

Após a conclusão da instalação, você pode executar o projeto Next.js usando os seguintes comandos:

Para iniciar o servidor de desenvolvimento:

```npm run dev```

Este comando iniciará o servidor de desenvolvimento do Next.js. Acesse http://localhost:3000 em seu navegador para visualizar o projeto em tempo real durante o desenvolvimento. O servidor de desenvolvimento também recarrega automaticamente as alterações feitas nos arquivos.

Para criar uma versão otimizada para produção:

```npm run build```

Este comando criará uma versão otimizada do projeto para produção. Os arquivos resultantes serão armazenados no diretório .next.

Para iniciar o servidor de produção:
```npm start```

Este comando iniciará o servidor de produção do Next.js. Acesse http://localhost:3000 em seu navegador para visualizar o projeto otimizado para produção.


<!-- Dá para colocar no Notion -->
<!-- _For more examples, please refer to the [Documentation](https://vini.digital/wp-boilerplate)_ -->

<p align="right">(<a href="#top">voltar ao topo</a>)</p>



<!-- CONTACT -->
## Contato
<div id="contact"></div>

Vulpe Comunicação: [https://vulpecomunicacao.com.br/](https://vulpecomunicacao.com.br/)
Email: [contato@vulpecomunicacao.com.br](contato@vulpecomunicacao.com.br)
<!-- Github - [https://github.com/VulpeComunicacao/](https://github.com/VulpeComunicacao/) -->
Project Link: [https://github.com/VulpeComunicacao/cinterfor](https://github.com/VulpeComunicacao/cinterfor)

<p align="right">(<a href="#top">voltar ao topo</a>)</p>


<!-- ACKNOWLEDGMENTS
## Documentação extra
<div id="acknowledgments"></div>

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [Choose an Open Source License](https://choosealicense.com)
* [Awesome README](https://github.com/matiassingers/awesome-readme)
* [Best-README-Template](https://github.com/othneildrew/Best-README-Template)
* [Underscores](https://underscores.me/)

* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
<p align="right">(<a href="#top">voltar ao topo</a>)</p> -->



‌
### Referências:


<p align="right">(<a href="#top">voltar ao topo</a>)</p>
