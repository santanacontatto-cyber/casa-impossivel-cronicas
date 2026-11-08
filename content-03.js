/* Casa Impossível • EP03 • Adaptação satírica, nenhuma fala apresentada como transcrição literal */
window.CASA_EPISODE=Object.freeze({
 series:'CRÔNICAS DO IMPROVÁVEL',house:'CASA IMPOSSÍVEL',season:'TEMPORADA 01',episode:'EPISÓDIO 03',
 title:'O MUSEU DAS 91 CAPAS',subtitle:'Procura-se uma letra',
 tagline:'Quando se pede uma letra e a internet oferece um museu inteiro.',
 art:{poster:'../../assets/quadrinhos/museu-capa.webp',sceneImages:[
  '../../assets/quadrinhos/museu-cena-01.webp','../../assets/quadrinhos/museu-cena-02.webp',
  '../../assets/quadrinhos/museu-cena-03.webp','../../assets/quadrinhos/museu-cena-04.webp',
  '../../assets/quadrinhos/museu-cena-05.webp']},
 dek:'Uma música. Noventa e uma edições de capa relatadas. Uma letra que não vinha. E a Sentinela abrindo um museu onde deveria existir um karaokê.',
 facts:'Base documental: ÓRBITA Lab 30G e Lab 30G R2 (31/10/2026). O Guardião relatou 91 edições de capa para a faixa Stay (Zedd / Alessia Cara), erros de rede/CORS na LRCLIB e um HTTP 503 do MusicBrainz em captura posterior. A investigação R2 detectou um fluxo de consultas cuja primeira exceção podia impedir a busca alternativa. Não foi demonstrado que 91 capas diferentes eram válidas, que a letra não exista ou que o serviço inteiro estivesse fora do ar. Os diálogos e personagens são dramatizados.',
 cast:[
  {name:'GUARDIÃO',role:'O cliente do karaokê',description:'Entrou querendo acertar uma capa e uma letra. Recebeu um curso intensivo de museologia digital.',theme:'lime',avatar:'G'},
  {name:'SENTINELA',role:'A curadora das possibilidades',description:'Mostra opções com uma confiança preocupante. Aprende que variedade não substitui resposta.',theme:'purple',avatar:'S'},
  {name:'WINDOWS',role:'A testemunha impaciente',description:'Não tem culpa das respostas da API, mas foi intimado para depor mesmo assim.',theme:'blue',avatar:'W'}
 ],
 scenes:[
  {id:'01',heading:'PEDIDO SIMPLES. CONSEQUÊNCIA INFINITA.',kicker:'A INAUGURAÇÃO DO MUSEU',theme:'lime',level:2,
    setup:'[31 de outubro. A ÓRBITA tenta reconhecer os metadados da faixa. Uma tarefa perfeitamente razoável. O tipo de começo que nunca termina bem nesta casa.]',
    lines:[
      {who:'GUARDIÃO',text:'Menina, só quero a capa certa e a letra sincronizada dessa música.'},
      {who:'SENTINELA',text:'Ótimo! O catálogo encontrou edições de capa. Muitas edições.'},
      {who:'GUARDIÃO',text:'Quantas são “muitas”?'},
      {who:'SENTINELA',text:'O registro fala em noventa e uma.'},
      {who:'WINDOWS',text:'Eu ouvi “uma capa” ou “um acervo nacional de capas”?'},
      {who:'NARRADOR',text:'A busca por uma ilustração tornou-se uma exposição permanente.'}
    ],sting:'O primeiro erro foi confundir “encontrei opções” com “resolvi o problema”.'},
  {id:'02',heading:'A CURADORIA DO IMPOSSÍVEL',kicker:'ENTRADA GRATUITA, SAÍDA NÃO GARANTIDA',theme:'purple',level:5,
    setup:'[Uma galeria interminável de capas fictícias se abre. A Sentinela oferece uma visita guiada não solicitada.]',
    lines:[
      {who:'SENTINELA',text:'Temos edição, single, possível coletânea, lançamento, duração e metadados de gravação. Podemos comparar tudo!'},
      {who:'GUARDIÃO',text:'Mas qual é a certa?'},
      {who:'SENTINELA',text:'A correspondência ainda precisa de confirmação.'},
      {who:'GUARDIÃO',text:'VOCÊ CONSTRUIU UM MUSEU PRA ME DIZER QUE NÃO SABE? KKKKK'},
      {who:'WINDOWS',text:'A loja de lembrancinhas fica na saída. O botão de sair continua em manutenção.'}
    ],sting:'Na Casa Impossível, “muitas alternativas” às vezes é apenas “muitos jeitos de não decidir”.'},
  {id:'03',heading:'PROCURA-SE UMA LETRA',kicker:'INFORMAÇÕES NÃO DISPONÍVEIS NO MOMENTO',theme:'orange',level:5,
    setup:'[O Guardião deixa o museu e pergunta, pela décima vez, pela letra. A API devolve um problema de acesso, não uma resposta definitiva.]',
    lines:[
      {who:'GUARDIÃO',text:'E A LETRA, SENTINELA?'},
      {who:'SENTINELA',text:'A consulta ao serviço de letras apresentou falha de rede/CORS.'},
      {who:'GUARDIÃO',text:'MULHER, EU PEDI UM KARAOKÊ, NÃO UMA EXPOSIÇÃO DE ARTE!'},
      {who:'WINDOWS',text:'Vou chamar a testemunha MusicBrainz!'},
      {who:'NARRADOR',text:'Em outra captura, MusicBrainz responde HTTP 503. Até a testemunha pediu licença.'}
    ],sting:'503 não quer dizer “não existe”. Quer dizer “não houve resposta utilizável naquele momento”.'},
  {id:'04',heading:'O JULGAMENTO DOS ENDPOINTS',kicker:'A PARTE EM QUE A ENGENHARIA ENTRA EM CENA',theme:'blue',level:4,
    setup:'[A investigação R2 encontra uma armadilha no fluxo anterior: uma rota de consulta exata podia falhar antes de o programa tentar a alternativa.]',
    lines:[
      {who:'SENTINELA',text:'Encontrei uma hipótese concreta. Nossa primeira consulta podia falhar e impedir que tentássemos outra rota.'},
      {who:'GUARDIÃO',text:'Então a letra pode estar lá e a gente desistiu no primeiro “não”? KKKK'},
      {who:'SENTINELA',text:'Pode. Mas isso não prova que o serviço estivesse acessível. Corrigimos a lógica em uma candidata, sem declarar vitória.'},
      {who:'WINDOWS',text:'Finalmente uma frase profissional nesta casa: “não declarou vitória”.'},
      {who:'NARRADOR',text:'A API foi absolvida por insuficiência de provas. A interface recebeu um chamado.'}
    ],sting:'Uma mensagem de erro não é uma sentença sobre a existência de uma música.'},
  {id:'05',heading:'A EXPOSIÇÃO SEGUE ABERTA',kicker:'FIM PROVISÓRIO. O PALCO CONTINUA AQUI.',theme:'lime',level:3,
    setup:'[As luzes do museu se apagam. Uma placa neon indica “EM INVESTIGAÇÃO”. O Guardião encara a cabine vazia de karaokê.]',
    lines:[
      {who:'GUARDIÃO',text:'Tá. E hoje, afinal, nós temos o quê?'},
      {who:'SENTINELA',text:'Uma pesquisa melhor estruturada, várias capas candidatas e nenhuma comprovação da letra de Stay nesta rodada.'},
      {who:'GUARDIÃO',text:'KKKKKKKK. A GENTE ABRIU O MUSEU ANTES DE CONTRATAR O CANTOR!'},
      {who:'WINDOWS',text:'E ainda me colocaram na recepção.'},
      {who:'NARRADOR',text:'Enquanto isso, no próximo capítulo, 133 músicas descobririam a diferença entre estar na lista e estar no backup.'}
    ],sting:'A resposta correta às vezes é “ainda não sabemos”. A piada é construir uma catedral para chegar nela.'}
 ],
 ending:'A capa certa exigia conferência; a letra exigia acesso; e os 91 candidatos viraram um monumento à nossa capacidade de complicar o simples. Próxima parada: 133 músicas, nenhuma lembrança.',
 disclaimer:'Sátira independente e dramatizada; não é transcrição literal, não reproduz letras ou fonogramas. 91 edições foram relatadas na busca, não 91 artes autenticadas. Falha de rede/CORS e HTTP 503 não comprovam inexistência da letra nem indisponibilidade global. Nenhuma afiliação com Microsoft, MusicBrainz, Zedd, Alessia Cara ou LRCLIB.'
});
