# Site de Design de Interiores (proposta)

Site de uma página, feito só com HTML, CSS e JavaScript. Não precisa de servidor nem de mensalidade.

## Arquivos
```
index.html      → estrutura e textos da página
css/style.css   → cores, fontes, layout (as cores ficam nas variáveis no topo)
js/config.js    → ⭐ nome, WhatsApp, e-mail, Instagram e lista de projetos
js/main.js      → menu do celular, portfólio com filtro, formulário para WhatsApp
img/projetos/   → fotos do portfólio
```

## Personalizar para a cliente
1. `js/config.js`: troque `nome` ("Estúdio Alma" é só exemplo), `whatsapp`, `email`, `instagram` e `arroba`.
2. Fotos: salve em `img/projetos/` com os nomes listados em `projetos` no `config.js`
   (ou mude os nomes lá). Sem foto, aparece uma amostra de cor no lugar.
3. Textos de "Sobre", "Serviços" e "Como trabalho": edite direto no `index.html`.
4. Cores: mude as variáveis no começo do `css/style.css` (`--oliva`, `--argila`...).

## Testar
Abra a pasta no VS Code e clique em **Go Live** (extensão Live Server).

## Publicar
Mesmo processo do site Refúgio: repositório público no GitHub com o `index.html` na raiz,
depois **Settings → Pages → main / (root)**.
