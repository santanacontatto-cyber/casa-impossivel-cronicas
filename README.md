# CASA IMPOSSÍVEL — CRÔNICAS DO IMPROVÁVEL — v2.2 (episódios 01 e 02)

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

Site público: https://santanacontatto-cyber.github.io/casa-impossivel-cronicas/

Para testar localmente, abra `index.html`, entre no episódio pelo catálogo e verifique as imagens. O conteúdo usa HTML/CSS/JS locais sem dependências externas. Os quadrinhos em tamanho original abrem em aba nova. O GitHub Pages usa a branch `main`, pasta `/(root)`. Os repositórios operacionais privados permanecem separados.

## Integridade editorial

- Quadrinhos são **ilustrações dramatizadas**, com balões que não constituem transcrição. Algumas variantes ilustradas podem ter títulos ou falas diferentes dos registros originais.
- A falha exata do Windows não foi diagnosticada.
- O Windows aparece como personagem satírico, com referências gráficas ao sistema; não há qualquer vínculo ou patrocínio Microsoft.
- Nenhum conteúdo do Sentinela Transport, da ÓRBITA, dos registros pessoais, do Drive privado ou de credenciais foi copiado.
- Esta é a **primeira publicação pública** no GitHub Pages. Os episódios futuros serão adicionados com revisão editorial; a publicação não implica que o projeto está finalizado.

## Fontes e rastreabilidade

Fonte editorial: Cápsula 10 — O Botão Proibido, 2026-11-08, registrada no Google Drive. Base do site: primeira prévia Casa Impossível EP01; esta v2 foi criada de forma separada, sem alterar o pacote anterior. Cartões de Instagram v1 foram preservados.


## Episódio 02 — O Pendrive do Apocalipse (08/11/2026)

- `episodios/o-pendrive-do-apocalipse/index.html`: narrativa própria com quadrinho completo, leitura ampliada no celular, cinco cenas e bastidores.
- `content-02.js`: roteiro público dramatizado, independente do roteiro do episódio 01.
- `episodio-02.css`: apenas estilos específicos, sem alterar a página original.
- `assets/quadrinhos/pendrive-apocalipse.webp` e `pendrive-painel-01..04.webp`: quadrinho original convertido para WebP e quatro recortes de leitura.
- O catálogo lista dois episódios disponíveis; `133 Músicas. Nenhuma Lembrança` continua como ideia não publicada.

**Limites factuais:** o teste do Sentinela-X comprovou inicialização do instalador Windows e abertura do PhotoRec no WinPE; recuperação ponta a ponta não foi provada. O desenvolvimento musical da ÓRBITA ocorreu posteriormente e não deve ser confundido com o ambiente de emergência. As falas do quadrinho e roteiro são dramatizadas, não transcrições. Os registros históricos e dados privados continuam fora deste repositório.
