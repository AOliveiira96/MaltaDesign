/* =====================================================================
   FUNCIONALIDADES DO SITE
   1. Preenche nome, e-mail e Instagram a partir do config.js
   2. Menu do celular
   3. Linha no cabeçalho ao rolar a página
   4. Monta o portfólio e faz o filtro por categoria
   5. Formulário que abre o WhatsApp com a mensagem pronta
   6. Página sempre abre no topo
   7. Foto da Suéllen e depoimentos
   8. Planta da capa: comparador técnica x humanizada
   9. Visualizador de fotos dos projetos
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
      <img src="${projeto.foto}" alt="${projeto.titulo}: projeto de interiores de Suéllen Malta" loading="lazy">
    </div>
    <figcaption>
      <h3>${projeto.titulo}</h3>
      <small>${projeto.tipo}</small>
    </figcaption>`;

  // Projeto com várias imagens: mostra a quantidade e abre o visualizador ao clicar
  if (projeto.fotos && projeto.fotos.length) {
    const temVideo = projeto.fotos.some(f => f.video);
    const qtdImagens = projeto.fotos.filter(f => !f.video).length;
    const selo = document.createElement("span");
    selo.className = "qtd-fotos";
    selo.textContent = qtdImagens + (qtdImagens === 1 ? " imagem" : " imagens") + (temVideo ? " + vídeo" : "");
    fig.append(selo);
    fig.classList.add("clicavel");
    fig.tabIndex = 0;
    fig.setAttribute("role", "button");
    fig.setAttribute("aria-label", `Ver imagens do projeto ${projeto.titulo}`);
    const abrir = () => abrirVisualizador(projeto.fotos, 0);
    fig.addEventListener("click", abrir);
    fig.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); abrir(); } });
  }

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


/* ---------- 8. PLANTA DA CAPA: COMPARADOR ----------
   O controle deslizante (input range, invisível por cima da planta) muda
   uma variável CSS. O CSS usa essa variável para recortar a planta humanizada. */
const comparador = $("[data-comparador]");
if (comparador) {
  const controle = comparador.querySelector("[data-corte]");
  const atualizar = () => {
    const valor = Number(controle.value);                       // 0 a 100
    comparador.style.setProperty("--corte", valor + "%");       // onde o recorte começa
    comparador.style.setProperty("--corte-num", valor / 100);   // posição da linha azul
  };
  controle.addEventListener("input", atualizar);
  atualizar();
}


/* ---------- 9. VISUALIZADOR DE FOTOS DOS PROJETOS ----------
   Uma janela escura por cima da página, com setas, legenda e contador.
   Funciona com o teclado (setas e Esc) e deslizando o dedo no celular. */
const vis = document.createElement("div");
vis.className = "visualizador";
vis.hidden = true;
vis.setAttribute("role", "dialog");
vis.setAttribute("aria-modal", "true");
vis.innerHTML = `
  <button class="vis-fechar" aria-label="Fechar">×</button>
  <button class="vis-seta vis-ant" aria-label="Imagem anterior">‹</button>
  <figure><img alt=""><video controls muted playsinline preload="none" hidden></video><figcaption><span class="vis-legenda"></span><span class="vis-contador"></span></figcaption></figure>
  <button class="vis-seta vis-prox" aria-label="Próxima imagem">›</button>`;
document.body.append(vis);

let listaAtual = [], posicao = 0, ultimoFoco = null;
const visImg = vis.querySelector("img");
const visVideo = vis.querySelector("video");

function mostrarFoto(i) {
  posicao = (i + listaAtual.length) % listaAtual.length;   // volta ao início depois da última
  const foto = listaAtual[posicao];
  visVideo.pause();
  if (foto.video) {
    // Item de vídeo: esconde a imagem, mostra o player e começa a tocar sem som
    visImg.hidden = true;
    visVideo.hidden = false;
    visVideo.poster = foto.capa || "";
    visVideo.src = foto.video;
    visVideo.play().catch(() => {});   // se o navegador bloquear, a pessoa aperta o play
  } else {
    visVideo.hidden = true;
    visVideo.removeAttribute("src");
    visImg.hidden = false;
    visImg.src = foto.arquivo;
    visImg.alt = foto.legenda;
  }
  vis.querySelector(".vis-legenda").textContent = foto.legenda;
  vis.querySelector(".vis-contador").textContent = `${posicao + 1} / ${listaAtual.length}`;
}
function abrirVisualizador(fotos, inicio) {
  listaAtual = fotos;
  ultimoFoco = document.activeElement;
  mostrarFoto(inicio);
  vis.hidden = false;
  document.body.style.overflow = "hidden";
  vis.querySelector(".vis-fechar").focus();
}
function fecharVisualizador() {
  visVideo.pause();
  vis.hidden = true;
  document.body.style.overflow = "";
  if (ultimoFoco) ultimoFoco.focus();
}
vis.querySelector(".vis-fechar").addEventListener("click", fecharVisualizador);
vis.querySelector(".vis-ant").addEventListener("click", () => mostrarFoto(posicao - 1));
vis.querySelector(".vis-prox").addEventListener("click", () => mostrarFoto(posicao + 1));
vis.addEventListener("click", e => { if (e.target === vis) fecharVisualizador(); });
document.addEventListener("keydown", e => {
  if (vis.hidden) return;
  if (e.key === "Escape") fecharVisualizador();
  if (e.key === "ArrowLeft") mostrarFoto(posicao - 1);
  if (e.key === "ArrowRight") mostrarFoto(posicao + 1);
});
let inicioToque = null;
vis.addEventListener("touchstart", e => { inicioToque = e.touches[0].clientX; }, { passive: true });
vis.addEventListener("touchend", e => {
  if (inicioToque === null) return;
  const distancia = e.changedTouches[0].clientX - inicioToque;
  if (Math.abs(distancia) > 50) mostrarFoto(posicao + (distancia < 0 ? 1 : -1));
  inicioToque = null;
});
