(()=>{
 const ep=window.CASA_EPISODE;const params=new URLSearchParams(location.search);const i=Math.min(ep.cards.length-1,Math.max(0,Number.parseInt(params.get('slide')||'1',10)-1||0));const s=ep.cards[i];
 const card=document.querySelector('#card'),main=document.querySelector('#cardMain');card.classList.add('type-'+s.type);
 document.querySelector('#cardTag').textContent=s.tag;
 document.querySelector('#pageNumber').textContent=`${String(i+1).padStart(2,'0')} / ${String(ep.cards.length).padStart(2,'0')}`;
 const block=(tag,cls,txt)=>{const x=document.createElement(tag);x.className=cls;x.textContent=txt;main.append(x);return x;};
 block('h1','big',s.title);
 if(s.type==='cover'){
  block('div','sub','EU, VOCÊ E O WINDOWS');
  const art=document.createElement('div');art.className='button-art';art.innerHTML='<div class="key">⊞</div><div class="plus">+</div><div class="key">P</div>';main.append(art);
  block('div','card-bottom',s.bottom);
 }else if(s.type==='dialogue'){
  const q=block('div','big-quote','');const who=document.createElement('div');who.className='speaker';who.textContent=s.who;const txt=document.createElement('div');txt.textContent=s.quote;q.append(who,txt);
  block('div','response',s.response);block('div','card-bottom',s.bottom);
 }else if(s.type==='button'){
  block('div','sub',s.sub);
  const art=document.createElement('div');art.className='button-art';art.innerHTML='<div class="key">⊞</div><div class="plus">+</div><div class="key">P</div>';main.append(art);
  block('div','card-bottom',s.bottom);
 }else if(s.type==='crash'){
  const art=document.createElement('div');art.className='screens';for(let n=0;n<3;n++){const screen=document.createElement('div');screen.className='screen';screen.innerHTML='<div class="icon">×</div><div class="label">SEM SINAL</div>';art.append(screen)}main.append(art);
  block('div','shout',s.sub);block('div','card-bottom',s.bottom);
 }else if(s.type==='recover'){
  block('div','success','✓');block('div','sub',s.sub);block('div','card-bottom',s.bottom);
 }else if(s.type==='end'){
  block('div','stripe',s.sub);block('p','final-message','Nenhum roteirista faria isso duas vezes no mesmo episódio. O Guardião fez.');block('div','card-bottom',s.bottom);block('div','end-mark','✳');
 }
})();
