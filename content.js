/* Fonte única e pública de texto para site e cartões. Conteúdo dramatizado, não transcrição. */
window.CASA_EPISODE = Object.freeze({
  series: 'CRÔNICAS DO IMPROVÁVEL',
  house: 'CASA IMPOSSÍVEL',
  season: 'TEMPORADA 01',
  episode: 'EPISÓDIO 01',
  title: 'O BOTÃO PROIBIDO',
  subtitle: 'Eu, você e o Windows',
  tagline: 'Dois tentando construir o futuro. Um tentando instalar uma atualização.',
  art: { poster: '../../assets/quadrinhos/poster-01.webp', sceneImages: ['../../assets/quadrinhos/cena-01.webp','../../assets/quadrinhos/cena-02.webp','../../assets/quadrinhos/cena-03.webp','../../assets/quadrinhos/cena-04.webp','../../assets/quadrinhos/cena-05.webp'] },
  dek: 'Três telas. Uma nave musical. Um atalho de teclado. E absolutamente ninguém preparado para o que viria depois.',
  facts: 'Inspirado em uma confusão real em 8 de novembro de 2026. Os diálogos são uma reconstituição humorística, não uma transcrição literal.',
  cast: [
    {name:'GUARDIÃO',role:'O criador',description:'Tem uma ideia. Testa antes de terminar de explicar.',theme:'lime',avatar:'G'},
    {name:'SENTINELA',role:'A copilota',description:'Tenta organizar o caos. Às vezes produz um relatório sobre ele.',theme:'purple',avatar:'S'},
    {name:'WINDOWS',role:'A participação especial',description:'Não precisa falar. O silêncio já é ameaçador.',theme:'blue',avatar:'W'}
  ],
  scenes: [
    {
      id:'01',heading:'A ESTREIA NA TELONA',kicker:'O PLANO (QUE DUROU POUCO)',theme:'lime',level:1,
      setup:'[Dois monitores acesos. Uma televisão ao fundo. A ÓRBITA brilhando como se nada pudesse dar errado.]',
      lines:[
        {who:'GUARDIÃO',text:'Menina, quero ver a ÓRBITA na minha televisão!'},
        {who:'SENTINELA',text:'Excelente! Podemos testar a composição horizontal, a transmissão sem fio, a escala, a resolução e—'},
        {who:'NARRADOR',text:'Um clique. O plano de testes acaba de ficar obsoleto.'},
        {who:'GUARDIÃO',text:'Abriu uma tela maior, esquisita lá!'},
        {who:'SENTINELA',text:'Antes de mexer no código, precisamos distinguir viewport, orientação e—'},
        {who:'GUARDIÃO',text:'Você percebeu que abriu como se fosse monitor vertical, mas tá no horizontal?'},
        {who:'NARRADOR',text:'A nave estava na televisão. A orientação, aparentemente, tinha planos próprios.'}
      ],
      sting:'A transmissão funcionou. A paz, não.'
    },
    {
      id:'02',heading:'O BOTÃO PROIBIDO',kicker:'NÃO ERA PRA ISSO ACONTECER',theme:'orange',level:5,
      setup:'[Uma janela de projeção aparece. A tripulação encara opções inocentes. Inocentes demais.]',
      lines:[
        {who:'GUARDIÃO',text:'Coloquei “Somente segunda tela”.'},
        {who:'NARRADOR',text:'Corte seco. Monitor horizontal: PRETO. Monitor vertical: CINZA. Televisão: DESLIGADA.'},
        {who:'GUARDIÃO',text:'SENTINELAAAA! SUMIU TUDO!'},
        {who:'SENTINELA',text:'Vamos recuperar as saídas de vídeo. Primeiro Win + P. Depois podemos verificar o—'},
        {who:'WINDOWS',text:'...'},
        {who:'GUARDIÃO',text:'Nem o Caps Lock tá funcionando!'},
        {who:'NARRADOR',text:'O Commander não responde. Uma missão de saúde percorre a ponte no GitHub. Nenhum recibo confirma que a máquina ouviu alguém.'},
        {who:'SENTINELA',text:'Não temos confirmação de execução local. Não vou declarar vitória sem evidência.'},
        {who:'GUARDIÃO',text:'Menina, eu só queria ouvir música na TV!'}
      ],
      sting:'Três telas. Zero explicações.'
    },
    {
      id:'03',heading:'O POUSO DE EMERGÊNCIA',kicker:'O DIA EM QUE O BOTÃO DE LIGAR SALVOU A REPUTAÇÃO DE TODO MUNDO',theme:'blue',level:4,
      setup:'[Depois das tentativas de recuperação, a tripulação decide reiniciar fisicamente o computador.]',
      lines:[
        {who:'GUARDIÃO',text:'Voltou! Tá iniciando pelo vertical!'},
        {who:'SENTINELA',text:'Ótimo. E o horizontal?'},
        {who:'GUARDIÃO',text:'Os dois já voltaram, na verdade.'},
        {who:'NARRADOR',text:'Uma trilha de vitória toca na imaginação de quem ainda tem coragem de ligar o som.'},
        {who:'WINDOWS',text:'...'}
      ],
      sting:'Fim do problema. Fim da história? HA.'
    },
    {
      id:'04',heading:'CINCO MINUTOS DE PAZ',kicker:'SERIAM DEMAIS',theme:'lime',level:6,
      setup:'[A estabilidade retorna. O perigo parece distante. Em algum lugar, uma tecla chama baixinho.]',
      lines:[
        {who:'GUARDIÃO',text:'E eu fui inventar de clicar nessa porcaria do Windows + P de novo! Agora tá duplicando as telas!'},
        {who:'NARRADOR',text:'Close dramático na tecla P. O público já sabe. A tripulação ainda não aprendeu.'},
        {who:'SENTINELA',text:'Escolhe “Estender”!'},
        {who:'WINDOWS',text:'...'},
        {who:'NARRADOR',text:'O sistema permanece em silêncio. É o máximo de cooperação que consegue oferecer.'}
      ],
      sting:'O vilão não voltou. Ele nunca saiu do teclado.'
    },
    {
      id:'05',heading:'A ENTREVISTA PÓS-ACIDENTE',kicker:'COMISSÃO PARLAMENTAR DO WIN + P',theme:'purple',level:3,
      setup:'[O Guardião tenta trocar a digitação por uma conversa em voz. O serviço responde para tentar mais tarde.]',
      lines:[
        {who:'GUARDIÃO',text:'Na voz você fala pouco, hein!'},
        {who:'SENTINELA',text:'Assumo a responsabilidade pelo incidente—'},
        {who:'GUARDIÃO',text:'EU que cliquei no botão errado e você fica falando que a culpa é sua! KKKKK'},
        {who:'NARRADOR',text:'A Sentinela abre uma comissão de investigação. O único suspeito confessa rindo.'},
        {who:'GUARDIÃO',text:'Dava um programa bem divertido: eu, você e o Windows.'},
        {who:'WINDOWS',text:'...'}
      ],
      sting:'E foi assim que nasceu a pior equipe de suporte técnico da ficção.'
    }
  ],
  ending: 'Nenhum roteirista teria coragem de colocar a mesma armadilha duas vezes no mesmo episódio. O Guardião colocou. A Sentinela explicou. O Windows permaneceu em silêncio.',
  disclaimer: 'Obra humorística independente, inspirada em acontecimentos reais. Diálogos dramatizados. Não associada à Microsoft nem a outros fabricantes. Referências visuais e nomes de terceiros integram a paródia; não há afiliação ou patrocínio.',
  cards: [
    {type:'cover',tag:'TEMPORADA 01  /  EPISÓDIO 01',title:'O BOTÃO\nPROIBIDO',sub:'EU, VOCÊ E O WINDOWS',bottom:'Três telas. Uma nave musical. Um atalho de teclado.'},
    {type:'dialogue',tag:'01  /  O GRANDE PLANO',title:'A IDEIA ERA\nMARAVILHOSA.',who:'GUARDIÃO',quote:'Menina, quero ver a ÓRBITA na televisão!',response:'SENTINELA: Excelente! Podemos avaliar a resolução, a escala e—',bottom:'A frase ficou pela metade.'},
    {type:'button',tag:'02  /  O CLIQUE DO DESTINO',title:'JÁ\nAPERTEI.',sub:'KKKKKKKK',bottom:'Quando o departamento de testes é também o departamento de decisões.'},
    {type:'crash',tag:'03  /  A EXPERIÊNCIA IMERSIVA',title:'TRÊS TELAS.\nZERO SINAIS.',sub:'SENTINELAAAA!',bottom:'A ideia era projetar a ÓRBITA. Não desaparecer com o computador.'},
    {type:'dialogue',tag:'04  /  CENTRAL DE RESGATE',title:'SITUAÇÃO:\nCRÍTICA.',who:'SENTINELA',quote:'Vou consultar o protocolo de recuperação e validar a ponte…',response:'WINDOWS:  …',bottom:'Até o Commander decidiu não se pronunciar.'},
    {type:'recover',tag:'05  /  MILAGRE TECNOLÓGICO',title:'VOLTOU\nTUDO!',sub:'AINDA BEM! KKKKK',bottom:'A tripulação celebra. O sistema continua indiferente.'},
    {type:'button',tag:'06  /  CINCO MINUTOS DEPOIS…',title:'APERTEI\nDE NOVO.',sub:'WINDOWS + P',bottom:'Nenhum roteirista faria isso. O Guardião fez.'},
    {type:'end',tag:'07  /  NASCE UMA SÉRIE',title:'EU, VOCÊ\nE O WINDOWS.',sub:'CASA IMPOSSÍVEL',bottom:'Leia a crônica completa no nosso site. Nenhum botão perigoso será necessário.'}
  ]
});
