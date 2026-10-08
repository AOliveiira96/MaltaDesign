/* =====================================================================
   FUNCIONALIDADES DO SITE
   1. Preenche nome, e-mail e Instagram a partir do config.js
   2. Menu do celular
   3. Linha no cabeçalho ao rolar a página
   4. Monta o portfólio e faz o filtro por categoria
   5. Formulário que abre o WhatsApp com a mensagem pronta
   6. Página sempre abre no topo
   7. Foto da Suéllen e depoimentos
   ===================================================================== */

// Atalhos para encontrar elementos na página
const $ = (seletor) => document.querySelector(seletor);
const $$ = (seletor) => document.querySelectorAll(seletor);
const SITE = window.SITE;


/* ---------- 1. DADOS DO CONFIG ---------- */
$$("[data-email]").forEach(el => el.textContent = SITE.email);
$$("[data-cidade]").forEach(el => el.textContent = SITE.cidade);
$$("[data-instagram]").forEach(el => {
  el.href = SITE.instagram;
  if (el.textContent.startsWith("@")) el.textContent = SITE.arroba;
});
$$("[data-ano]").forEach(el => el.textContent = new Date().getFullYear());
document.title = `${SITE.nome} · ${SITE.assinatura}`;


/* ---------- 2. MENU DO CELULAR ---------- */
const botaoMenu = $(".menu-toggle");
const menu = $("#menu");

botaoMenu.addEventListener("click", () => {
  const aberto = menu.classList.toggle("aberto");       // liga/desliga a classe
  botaoMenu.setAttribute("aria-expanded", aberto);      // avisa leitores de tela
});
// Fecha o menu quando a pessoa clica em um link
menu.querySelectorAll("a").forEach(link =>
  link.addEventListener("click", () => {
    menu.classList.remove("aberto");
    botaoMenu.setAttribute("aria-expanded", false);
  })
);


/* ---------- 3. CABEÇALHO AO ROLAR ---------- */
const cabecalho = $(".cabecalho");
window.addEventListener("scroll", () => {
  cabecalho.classList.toggle("rolou", window.scrollY > 10);
}, { passive: true });


/* ---------- 4. PORTFÓLIO ---------- */
const grade = $("[data-grade]");

// Cria o HTML de um cartão de projeto
function criarCartao(projeto) {
  const fig = document.createElement("figure");
  fig.className = "projeto";
  fig.dataset.categoria = projeto.categoria;
  fig.innerHTML = `
    <div class="foto tom-${projeto.tom}">
      <img src="${projeto.foto}" alt="${projeto.titulo}" loading="lazy">
    </div>
    <figcaption>
      <h3>${projeto.titulo}</h3>
      <small>${projeto.tipo}</small>
    </figcaption>`;

  // Se a foto não existir, troca por uma amostra de cor da paleta
  fig.querySelector("img").addEventListener("error", (evento) => {
    const amostra = document.createElement("span");
    amostra.className = "amostra";
    amostra.textContent = "Foto do projeto";
    evento.target.replaceWith(amostra);
  });
  return fig;
}

SITE.projetos.forEach(projeto => grade.append(criarCartao(projeto)));

// Filtro: mostra só os projetos da categoria clicada
$$("[data-filtro]").forEach(botao => {
  botao.addEventListener("click", () => {
    const filtro = botao.dataset.filtro;

    // marca só o botão clicado como ativo
    $$("[data-filtro]").forEach(b => b.setAttribute("aria-pressed", b === botao));

    $$(".projeto").forEach(cartao => {
      const mostrar = filtro === "todos" || cartao.dataset.categoria === filtro;
      cartao.hidden = !mostrar;
    });
  });
});


/* ---------- 5. FORMULÁRIO → WHATSAPP ---------- */
const form = $("#form-contato");
const aviso = $("[data-aviso]");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();               // impede o envio padrão (não temos servidor)

  const dados = new FormData(form);      // lê todos os campos de uma vez
  const nome = dados.get("nome").trim();

  if (!nome) {
    aviso.textContent = "Preencha o seu nome para continuar.";
    aviso.hidden = false;
    $("#f-nome").focus();
    return;
  }
  if (!SITE.whatsapp) {
    aviso.textContent = "O número de WhatsApp ainda não foi configurado (js/config.js).";
    aviso.hidden = false;
    return;
  }
  aviso.hidden = true;

  // Monta a mensagem, uma informação por linha
  const linhas = [
    `Olá! Meu nome é ${nome}.`,
    `Tenho interesse em: ${dados.get("tipo")}.`,
    dados.get("bairro") ? `Local: ${dados.get("bairro")}.` : "",
    dados.get("mensagem") ? `Sobre o espaço: ${dados.get("mensagem")}` : ""
  ].filter(Boolean);                     // remove as linhas vazias

  const texto = encodeURIComponent(linhas.join("\n"));   // converte para formato de link
  const numero = SITE.whatsapp.replace(/\D/g, "");       // deixa só os números
  window.location.href = `https://wa.me/${numero}?text=${texto}`;
});


/* ---------- 6. ABRIR SEMPRE NO TOPO ----------
   Se o endereço tiver #algo (ex.: #contato), o navegador pula direto para essa seção,
   inclusive ao recarregar a página. Aqui o site rola até a seção uma vez e depois
   tira o #algo do endereço, para a próxima abertura começar no topo. */
if ("scrollRestoration" in history) history.scrollRestoration = "manual"; // não lembrar a rolagem antiga
function limparHash() { history.replaceState(null, "", location.pathname + location.search); }
window.addEventListener("load", () => {
  if (location.hash) {
    const alvo = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (alvo) alvo.scrollIntoView();
    limparHash();
  } else {
    window.scrollTo(0, 0);
  }
});
document.addEventListener("click", (e) => {
  const link = e.target.closest('a[href*="#"]');
  if (!link) return;
  const url = new URL(link.href);
  if (url.pathname !== location.pathname || !url.hash) return; // link para outra página: deixa normal
  const alvo = document.getElementById(decodeURIComponent(url.hash.slice(1)));
  if (!alvo) return;
  e.preventDefault();
  alvo.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  limparHash();
});


/* ---------- 7. FOTO DA SUÉLLEN E DEPOIMENTOS ---------- */
// Foto do "Sobre": só entra se o arquivo existir; senão fica o arco bege
const molduraPerfil = $("[data-foto-perfil]");
if (molduraPerfil && SITE.fotoPerfil) {
  const foto = new Image();
  foto.alt = SITE.nome;
  foto.onload = () => { molduraPerfil.querySelector("span")?.remove(); molduraPerfil.append(foto); };
  foto.src = SITE.fotoPerfil;
}

// Depoimentos: a seção só aparece se houver pelo menos um na lista do config.js
if (SITE.depoimentos && SITE.depoimentos.length) {
  const lista = $("[data-depoimentos]");
  SITE.depoimentos.forEach(d => {
    const fig = document.createElement("figure");
    fig.className = "depoimento";
    const citacao = document.createElement("blockquote");
    citacao.textContent = `“${d.texto}”`;           // textContent: mostra o texto como texto, nunca como código
    const autor = document.createElement("figcaption");
    const nome = document.createElement("b");
    nome.textContent = d.nome;
    autor.append(nome, d.projeto || "");
    fig.append(citacao, autor);
    lista.append(fig);
  });
  $("#depoimentos").hidden = false;
}
