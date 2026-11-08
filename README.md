# CASA IMPOSSÍVEL — CRÔNICAS DO IMPROVÁVEL — v2 (prévia)

## Organização (nenhum material privado incluído)

- `index.html`: **catálogo**. O público sempre começa aqui.
- `catalogo.js`: **índice das histórias disponíveis** e ideias ainda não publicadas. `catalogo-app.js` lê o índice; `catalogo.css` define a estética da vitrine.
- `episodios/o-botao-proibido/index.html`: página exclusiva da primeira história, com texto, cenas, quadrinhos e galeria de estudos artísticos.
- `content.js`: roteiro público do episódio 01 e fonte dos oito cartões de Instagram.
- `app.js`, `style.css`: renderização e visual do episódio. **Compartilhados** entre futuros episódios.
- `assets/quadrinhos/poster-01.webp`, `poster-02.webp`, `poster-03.webp`: **os três quadrinhos já apresentados ao Guardião**, inseridos no site.
- `assets/quadrinhos/cena-01.webp`…`cena-05.webp`: quadros recortados do primeiro quadrinho, presentes **dentro das cinco cenas**.
- `social.html`, `social.css`, `social.js`, `instagram/*.png`: carrossel de oito cartões, mantido da edição anterior.
- `.nojekyll`: opcional para publicação estática no GitHub Pages.

## Como adicionar a próxima história SEM redesenhar o site

1. Revisar os fatos e preparar versão **pública e dramatizada** da nova história (não subir transcrições privadas).
2. Criar `content-02.js` com a mesma estrutura de `content.js` e o roteiro do novo episódio.
3. Copiar `episodios/o-botao-proibido/index.html` para `episodios/novo-slug/index.html`; trocar apenas o título, metadados, referência a `content-02.js`, imagem de abertura e a seleção das artes. O HTML é molde comum; CSS/JS continuam compartilhados.
4. Em `content-02.js`, declarar `art.poster` e `art.sceneImages` para informar os arquivos do novo episódio; `app.js` já usa esses campos, sem caminhos de artes fixos.
5. Cadastrar o novo episódio em `catalogo.js` com `status:'disponivel'`; a página principal o apresentará automaticamente.
6. Gerar os cartões do Instagram pela mesma fonte de texto e validar publicação no celular.

**Observação técnica**: Esta v2 implementa catálogo e uma página própria. Não promete editor automático de episódios nem um sistema CMS. As futuras histórias reutilizam os estilos, mas precisam de seus arquivos e revisão editorial.

## Testar

Abrir `index.html` localmente para ver o catálogo; entrar no episódio clicando no destaque. O conteúdo usa HTML/CSS/JS locais sem dependências externas. Links das imagens em tamanho original abrem em aba nova. No GitHub Pages, publicar `index.html` na raiz do repositório (branch `main` → root). Não colocar em repositórios privados operacionais.

## Integridade editorial

- Quadrinhos são **ilustrações dramatizadas**, com balões que não constituem transcrição. Algumas variantes ilustradas podem ter títulos ou falas diferentes dos registros originais.
- A falha exata do Windows não foi diagnosticada.
- O Windows aparece como personagem satírico, com referências gráficas ao sistema; não há qualquer vínculo ou patrocínio Microsoft.
- Nenhum conteúdo do Sentinela Transport, da ÓRBITA, dos registros pessoais, do Drive privado ou de credenciais foi copiado.
- Esta entrega é **PRÉVIA**; nada foi publicado em GitHub Pages.

## Fontes e rastreabilidade

Fonte editorial: Cápsula 10 — O Botão Proibido, 2026-11-08, registrada no Google Drive. Base do site: primeira prévia Casa Impossível EP01; esta v2 foi criada de forma separada, sem alterar o pacote anterior. Cartões de Instagram v1 foram preservados.
