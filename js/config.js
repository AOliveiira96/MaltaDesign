/* =====================================================================
   CONFIGURAÇÃO DO SITE · SUÉLLEN MALTA DESIGNER DE INTERIORES
   Aqui ficam os dados que mudam com frequência.
   Troque os textos entre aspas, salve e atualize a página.
   ===================================================================== */

window.SITE = {

  nome: "Suéllen Malta",
  assinatura: "Designer de Interiores",

  /* WhatsApp com 55 + DDD + número, só números. Ex.: "5521999998888".
     O formulário de contato monta a mensagem e abre o WhatsApp com ela. */
  whatsapp: "",
  email: "contato@suellenmalta.com.br",
  instagram: "https://www.instagram.com/suellenmalta.designer/",
  arroba: "@suellenmalta.designer",
  cidade: "Rio de Janeiro · RJ",

  /* Foto da Suéllen para a seção "Sobre". Enquanto não existir, aparece um arco bege. */
  fotoPerfil: "img/suellen.jpg",

  /* Portfólio. A ordem aqui é a ordem no site; o primeiro aparece em destaque.
     titulo / tipo: nome do projeto e etiqueta que aparece no cartão.
     categoria: igual a um dos botões de filtro (residencial, quarto, cozinha, hospedagem).
     foto: imagem de capa do cartão.
     fotos: tudo o que abre ao clicar no cartão. Para vídeo, use
            { video: "caminho.mp4", capa: "imagem.jpg", legenda: "..." } */
  projetos: [
    {
      titulo: "Sala de estar", tipo: "Residencial", categoria: "residencial",
      foto: "img/projetos/sala-de-estar/01-vista-geral.jpg",
      fotos: [
        { arquivo: "img/projetos/sala-de-estar/01-vista-geral.jpg", legenda: "Vista geral da sala" },
        { arquivo: "img/projetos/sala-de-estar/02-painel-tv.jpg", legenda: "Parede azul com rack em madeira" },
        { arquivo: "img/projetos/sala-de-estar/03-parede-terracota.jpg", legenda: "Parede terracota com boiseries" },
        { arquivo: "img/projetos/sala-de-estar/04-detalhe-rack.jpg", legenda: "Detalhe do rack e da luminária" },
        { arquivo: "img/projetos/sala-de-estar/05-moodboard.jpg", legenda: "Moodboard do projeto" }
      ]
    },
    {
      titulo: "Quarto infantil", tipo: "Quarto", categoria: "quarto",
      foto: "img/projetos/quarto-infantil/01-cabana.jpg",
      fotos: [
        { arquivo: "img/projetos/quarto-infantil/01-cabana.jpg", legenda: "Cabana e papel de parede floral" },
        { arquivo: "img/projetos/quarto-infantil/02-cama-e-nichos.jpg", legenda: "Cama com nichos iluminados" },
        { arquivo: "img/projetos/quarto-infantil/03-escrivaninha.jpg", legenda: "Cantinho de estudos" },
        { arquivo: "img/projetos/quarto-infantil/04-detalhe-escrivaninha.jpg", legenda: "Escrivaninha ripada e cadeira coelho" },
        { arquivo: "img/projetos/quarto-infantil/05-cama-e-janela.jpg", legenda: "Cama e janela" },
        { arquivo: "img/projetos/quarto-infantil/06-moodboard.jpg", legenda: "Moodboard do projeto" }
      ]
    },
    {
      titulo: "Cozinha integrada", tipo: "Cozinha", categoria: "cozinha",
      foto: "img/projetos/cozinha-integrada/01-cozinha-frontal.jpg",
      fotos: [
        { arquivo: "img/projetos/cozinha-integrada/01-cozinha-frontal.jpg", legenda: "Cozinha com prateleiras em ferro e madeira" },
        { arquivo: "img/projetos/cozinha-integrada/02-cozinha-e-lavanderia.jpg", legenda: "Cozinha e lavanderia" },
        { arquivo: "img/projetos/cozinha-integrada/03-integracao-com-sala.jpg", legenda: "Integração com a sala de jantar" },
        { arquivo: "img/projetos/cozinha-integrada/04-prancha-1.jpg", legenda: "Prancha do projeto" },
        { arquivo: "img/projetos/cozinha-integrada/05-prancha-2.jpg", legenda: "Prancha do projeto" },
        { arquivo: "img/projetos/cozinha-integrada/06-prancha-3.jpg", legenda: "Prancha do projeto" }
      ]
    },
    {
      titulo: "Quarto 2 · Refúgio Carioca", tipo: "Hospedagem", categoria: "hospedagem",
      foto: "img/projetos/quarto2-carioca/03-projeto-3d-luz-natural.jpg",
      fotos: [
        { arquivo: "img/projetos/quarto2-carioca/03-projeto-3d-luz-natural.jpg", legenda: "Projeto 3D com luz natural" },
        { arquivo: "img/projetos/quarto2-carioca/01-projeto-3d-vista-geral.jpg", legenda: "Projeto 3D, vista geral" },
        { arquivo: "img/projetos/quarto2-carioca/02-projeto-3d-cama.jpg", legenda: "Projeto 3D, cabeceira e quadros" },
        { video: "img/projetos/quarto2-carioca/obra-e-projeto.mp4", capa: "img/projetos/quarto2-carioca/01-projeto-3d-vista-geral.jpg", legenda: "Da obra ao projeto, em vídeo" }
      ]
    },
    {
      titulo: "Quarto casal", tipo: "Quarto", categoria: "quarto",
      foto: "img/projetos/quarto-casal/01-cabeceira-ripada.jpg",
      fotos: [
        { arquivo: "img/projetos/quarto-casal/01-cabeceira-ripada.jpg", legenda: "Cabeceira estofada com painéis ripados" },
        { arquivo: "img/projetos/quarto-casal/02-armario-e-home-office.jpg", legenda: "Armário em L e home office" },
        { arquivo: "img/projetos/quarto-casal/03-armario-frontal.jpg", legenda: "Armário e bancada de estudos" },
        { arquivo: "img/projetos/quarto-casal/04-prancha-1.jpg", legenda: "Prancha do projeto" },
        { arquivo: "img/projetos/quarto-casal/05-prancha-2.jpg", legenda: "Prancha do projeto" },
        { arquivo: "img/projetos/quarto-casal/06-prancha-3.jpg", legenda: "Prancha do projeto" }
      ]
    },
    {
      titulo: "Quarto Duo Copa", tipo: "Hospedagem", categoria: "hospedagem",
      foto: "img/projetos/quarto-duocopa/01-projeto-3d-cama.jpg",
      fotos: [
        { arquivo: "img/projetos/quarto-duocopa/01-projeto-3d-cama.jpg", legenda: "Projeto 3D: parede terracota com o Rio em traço" },
        { arquivo: "img/projetos/quarto-duocopa/02-projeto-3d-detalhe.jpg", legenda: "Detalhe da cabeceira ripada" },
        { arquivo: "img/projetos/quarto-duocopa/03-arte-projeto.jpg", legenda: "Pequenos espaços, grandes experiências" },
        { video: "img/projetos/quarto-duocopa/antes-e-depois.mp4", capa: "img/projetos/quarto-duocopa/00-antes.jpg", legenda: "Antes e depois, em vídeo" }
      ]
    },
    {
      titulo: "Quarto jovem", tipo: "Quarto", categoria: "quarto",
      foto: "img/projetos/quarto-jovem/01-cama-e-cortinas.jpg",
      fotos: [
        { arquivo: "img/projetos/quarto-jovem/01-cama-e-cortinas.jpg", legenda: "Cama e cortinas em linho" },
        { arquivo: "img/projetos/quarto-jovem/02-home-office.jpg", legenda: "Bancada de estudos com parede de galáxia" },
        { arquivo: "img/projetos/quarto-jovem/03-armario.jpg", legenda: "Armário planejado" },
        { arquivo: "img/projetos/quarto-jovem/04-moodboard.jpg", legenda: "Moodboard do projeto" }
      ]
    },
    {
      titulo: "Banheiro", tipo: "Residencial", categoria: "residencial",
      foto: "img/projetos/banheiro/02-vista-geral.jpg",
      fotos: [
        { arquivo: "img/projetos/banheiro/02-vista-geral.jpg", legenda: "Revestimento natural e marcenaria verde" },
        { arquivo: "img/projetos/banheiro/01-moodboard.jpg", legenda: "Moodboard do projeto" }
      ]
    },
    {
      titulo: "Quarto Refúgio Carioca", tipo: "Hospedagem", categoria: "hospedagem",
      foto: "img/projetos/quarto-refugio/01-projeto-3d-vista-geral.jpg",
      fotos: [
        { arquivo: "img/projetos/quarto-refugio/01-projeto-3d-vista-geral.jpg", legenda: "Projeto 3D, vista geral" },
        { arquivo: "img/projetos/quarto-refugio/02-projeto-3d-camas.jpg", legenda: "Projeto 3D, camas e home office" },
        { arquivo: "img/projetos/quarto-refugio/03-detalhe-quadros.jpg", legenda: "Painel ripado e quadros" },
        { arquivo: "img/projetos/quarto-refugio/04-tv-e-porta.jpg", legenda: "TV e porta em azul" },
        { arquivo: "img/projetos/quarto-refugio/05-antes-durante-depois.jpg", legenda: "Antes, durante e projeto 3D" },
        { video: "img/projetos/quarto-refugio/antes-video.mp4", capa: "img/projetos/quarto-refugio/antes-video-capa.jpg", legenda: "Como era o quarto antes, em vídeo" }
      ]
    }
  ],

  /* Depoimentos de clientes REAIS. Enquanto a lista estiver vazia, a seção não aparece.
     Exemplo de como preencher:
     { texto: "O que a cliente escreveu...", nome: "Nome da cliente", projeto: "Apartamento em Botafogo" } */
  depoimentos: []
};
