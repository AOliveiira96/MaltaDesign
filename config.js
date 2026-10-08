/* =====================================================================
   CONFIGURAÇÃO DO SITE
   Aqui ficam os dados que mudam de cliente para cliente.
   Troque os textos entre aspas, salve e atualize a página.
   ===================================================================== */

window.SITE = {

  /* Nome que aparece no topo, no rodapé e na aba do navegador.
     "Estúdio Alma" é só um nome de exemplo para a proposta. */
  nome: "Estúdio Alma",
  assinatura: "Design de Interiores",

  /* WhatsApp com 55 + DDD + número, só números. Ex.: "5521999998888".
     O formulário de contato monta a mensagem e abre o WhatsApp com ela. */
  whatsapp: "",
  email: "contato@seudominio.com.br",
  instagram: "https://www.instagram.com/",
  arroba: "@seuperfil",
  cidade: "Rio de Janeiro · RJ",

  /* Portfólio.
     categoria: precisa ser igual a um dos botões de filtro (sala, quarto, cozinha, comercial).
     foto: caminho da imagem dentro da pasta img/projetos/. Se ainda não existir,
           o site mostra uma amostra de material no lugar.
     tom: cor da amostra enquanto a foto não chega. */
  projetos: [
    { titulo: "Sala integrada",       local: "Projeto exemplo", categoria: "sala",      foto: "img/projetos/sala-integrada.jpg",  tom: "linho" },
    { titulo: "Suíte do casal",       local: "Projeto exemplo", categoria: "quarto",    foto: "img/projetos/suite-casal.jpg",     tom: "oliva" },
    { titulo: "Cozinha gourmet",      local: "Projeto exemplo", categoria: "cozinha",   foto: "img/projetos/cozinha-gourmet.jpg", tom: "carvalho" },
    { titulo: "Consultório",          local: "Projeto exemplo", categoria: "comercial", foto: "img/projetos/consultorio.jpg",     tom: "argila" },
    { titulo: "Home office",          local: "Projeto exemplo", categoria: "sala",      foto: "img/projetos/home-office.jpg",     tom: "grafite" },
    { titulo: "Quarto infantil",      local: "Projeto exemplo", categoria: "quarto",    foto: "img/projetos/quarto-infantil.jpg", tom: "linho" }
  ]
};
