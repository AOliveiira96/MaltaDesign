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

  /* Portfólio.
     categoria: igual a um dos botões de filtro (residencial, cozinha, quarto, comercial, marcenaria).
     foto: caminho da imagem dentro de img/projetos/. Sem foto, aparece uma amostra de cor.
     tom: cor da amostra enquanto a foto não chega (areia, azul, oliva, mostarda, caramelo). */
  projetos: [
    { titulo: "Sala integrada",   tipo: "Residencial", categoria: "residencial", foto: "img/projetos/sala-integrada.jpg",  tom: "areia" },
    { titulo: "Cozinha gourmet",  tipo: "Cozinha",     categoria: "cozinha",     foto: "img/projetos/cozinha-gourmet.jpg", tom: "oliva" },
    { titulo: "Suíte do casal",   tipo: "Quarto",      categoria: "quarto",      foto: "img/projetos/suite-casal.jpg",     tom: "azul" },
    { titulo: "Painel de TV",     tipo: "Marcenaria",  categoria: "marcenaria",  foto: "img/projetos/painel-tv.jpg",       tom: "caramelo" },
    { titulo: "Consultório",      tipo: "Comercial",   categoria: "comercial",   foto: "img/projetos/consultorio.jpg",     tom: "mostarda" },
    { titulo: "Sala de jantar",   tipo: "Residencial", categoria: "residencial", foto: "img/projetos/sala-jantar.jpg",     tom: "areia" }
  ],

  /* Depoimentos de clientes REAIS. Enquanto a lista estiver vazia, a seção não aparece.
     Exemplo de como preencher:
     { texto: "O que a cliente escreveu...", nome: "Nome da cliente", projeto: "Apartamento em Botafogo" } */
  depoimentos: []
};
