# Casa Impossível — Guia editorial de continuidade

A **Casa Impossível — Crônicas do Improvável** é uma série independente de histórias em quadrinhos sobre tecnologia, criatividade e as pequenas catástrofes de tentar construir coisas demais ao mesmo tempo.

## Como o site está organizado

- `index.html`, `catalogo.js`, `catalogo-app.js`, `catalogo.css`: vitrine e catálogo.
- `episodios/o-botao-proibido/`: episódio 01, **O Botão Proibido**.
- `episodios/o-pendrive-do-apocalipse/`: episódio 02, **O Pendrive do Apocalipse**.
- Cada episódio tem página própria; os quadrinhos ficam em `assets/quadrinhos/`.
- No celular, usar artes legíveis e recortes quando o quadrinho inteiro deixar os balões pequenos.

## Receita para adicionar um episódio

1. Pesquisar o acontecimento original. Distinguir fatos observados, relatos, inferências e falas dramatizadas.
2. Escrever um roteiro com problema, escalada absurda e final cômico, sem reduzir o episódio a um relatório técnico.
3. Preparar quadrinho, versão acessível para celular e textos alternativos, com a identidade roxo/verde-lima/preto da série.
4. Criar diretório próprio em `episodios/<slug>/`, roteiro/estilo específicos e seus recursos; reutilizar componentes comuns sem modificar episódios antigos.
5. Incluir no `catalogo.js` apenas quando a página estiver pronta e validada. Ideias ainda não publicadas permanecem diferenciadas.
6. Conferir navegação, imagens, legibilidade, metadados de compartilhamento, URLs e acessibilidade; preservar páginas anteriores.
7. Enviar alterações de forma incremental e confirmar sucesso de implantação do GitHub Pages.
8. Divulgar separadamente nas redes; agendamento não equivale a publicação efetiva.

## Regras editoriais

- Os quadrinhos são **obras satíricas dramatizadas**, não transcrições fiéis de conversas ou registros de sistema.
- Não expor dados pessoais, credenciais, arquivos de trabalho privados, documentos operacionais ou material de terceiros sem autorização.
- Não afirmar sucesso técnico sem prova; o humor não depende de inventar feitos.
- O Windows é personagem de sátira, sem afiliação oficial com Microsoft. Outros nomes de produtos descrevem o contexto da história, não endossos comerciais.
- Arte, texto e publicação exigem revisão para legibilidade e direitos de terceiros.
- O histórico público de commits e episódios deve permanecer recuperável; evitar ações destrutivas.

O controle editorial privado, a pesquisa original e as decisões de produção permanecem fora deste repositório. Aqui estão somente as orientações públicas necessárias para manter a série coerente.
