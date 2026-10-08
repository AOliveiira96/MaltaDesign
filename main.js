/* =====================================================================
   FUNCIONALIDADES DO SITE
   1. Preenche nome, e-mail e Instagram a partir do config.js
   2. Menu do celular
   3. Linha no cabeçalho ao rolar a página
   4. Monta o portfólio e faz o filtro por ambiente
   5. Formulário que abre o WhatsApp com a mensagem pronta
   ===================================================================== */

// Atalhos para encontrar elementos na página
const $ = (seletor) => document.querySelector(seletor);
const $$ = (seletor) => document.querySelectorAll(seletor);
const SITE = window.SITE;


/* ---------- 1. DADOS DO CONFIG ---------- */
$$("[data-nome]").forEach(el => el.textContent = SITE.nome);
$$("[data-assinatura]").forEach(el => el.textContent = SITE.assinatura);
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
      <small>${projeto.local}</small>
    </figcaption>`;

  // Se a foto não existir, troca por uma amostra de material
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
