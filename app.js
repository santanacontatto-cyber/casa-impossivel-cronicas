(() => {
  'use strict';
  const e = window.CASA_EPISODE;
  if (!e) return;
  const $ = (s) => document.querySelector(s);
  const div = (cls, txt, tag='div') => { const n=document.createElement(tag); if(cls)n.className=cls; if(txt!==undefined)n.textContent=txt; return n;};
  $('#heroDek').textContent=e.dek;
  $('#endingText').textContent=e.ending;
  $('#factText').textContent=e.facts;
  $('#legalText').textContent=e.disclaimer;
  $('#castGrid').replaceChildren(...e.cast.map((person,i)=>{
    const card=div(`cast-card cast-${person.theme}`);
    const top=div('cast-top');top.append(div('cast-number',`0${i+1}`),div('cast-symbol',person.avatar));
    const name=div('cast-name',person.name,'h3');
    const role=div('cast-role',person.role);const desc=div('cast-desc',person.description);
    card.append(top,name,role,desc);return card;
  }));
  const container=$('#scenes'), nav=$('#sceneNav');
  e.scenes.forEach((scene,i)=>{
    const a=div('chapter-link');const link=document.createElement('a');link.href=`#cena-${scene.id}`;link.innerHTML=`<span>${scene.id}</span>`;link.append(document.createTextNode(scene.heading));a.append(link);nav.append(a);
    const section=div(`scene-card scene-${scene.theme}`,'','article');section.id=`cena-${scene.id}`;
    const line=div('scene-rail');line.append(div('scene-big-number',scene.id),div('scene-warning',`CAOS ${'▰'.repeat(scene.level)}${'▱'.repeat(6-scene.level)}`));
    const body=div('scene-body');body.append(div('scene-eyebrow',scene.kicker),div('scene-title',scene.heading,'h3'),div('scene-setup',scene.setup));
    const lines=div('dialogues');
    scene.lines.forEach((x)=>{
      if(x.who==='NARRADOR') {lines.append(div('narrator',x.text));return;}
      const box=div(`speech speech-${x.who.toLowerCase()}`);
      box.append(div('speaker',x.who),div('speech-text',x.text));lines.append(box);
    });
    const sceneImage=e.art?.sceneImages?.[i];
    if(sceneImage){
      const art=div('scene-art');
      const artLink=document.createElement('a');artLink.href=e.art.poster||sceneImage;artLink.target='_blank';artLink.rel='noopener noreferrer';artLink.setAttribute('aria-label',`Ampliar o quadrinho da cena ${scene.id}`);
      const artImg=document.createElement('img');artImg.src=sceneImage;artImg.loading='lazy';artImg.alt=`Quadrinho ilustrado da cena ${scene.id}: ${scene.heading.toLocaleLowerCase('pt-BR')}`;
      artLink.append(artImg,div('scene-art-label','✦ QUADRO ILUSTRADO · TOQUE PARA AMPLIAR'));art.append(artLink);
      body.append(art);
    }
    body.append(lines,div('scene-sting',`↳ ${scene.sting}`));
    section.append(line,body);container.append(section);
  });
  const toast=$('#toast');let timer;
  const showToast=(m)=>{clearTimeout(timer);toast.textContent=m;toast.classList.add('show');timer=setTimeout(()=>toast.classList.remove('show'),3200)};
  $('#shareBtn').addEventListener('click',async()=>{
    const url=window.location.href.split('#')[0];
    if(!/^https?:/.test(url)){showToast('Prévia local: o link público estará disponível no GitHub Pages.');return;}
    try{
      if(navigator.share && /^https?:/.test(url)){await navigator.share({title:document.title,text:e.dek,url});showToast('Compartilhado!');return;}
      if(navigator.clipboard && window.isSecureContext){await navigator.clipboard.writeText(url);showToast('Link copiado!');return;}
      const temp=document.createElement('textarea');temp.value=url;temp.style.position='fixed';temp.style.left='-9999px';document.body.append(temp);temp.select();const ok=document.execCommand('copy');temp.remove();showToast(ok?'Link copiado!':'Abra esta página pelo GitHub Pages para compartilhar o link.');
    }catch(err){if(err?.name!=='AbortError')showToast('Não foi possível copiar automaticamente. Use a URL do navegador.');}
  });
  if('IntersectionObserver' in window){
    const obs=new IntersectionObserver((entries)=>entries.forEach(x=>{if(x.isIntersecting)x.target.classList.add('is-visible')}),{threshold:.08});
    document.querySelectorAll('.scene-card,.cast-card').forEach(x=>obs.observe(x));
  }else document.querySelectorAll('.scene-card,.cast-card').forEach(x=>x.classList.add('is-visible'));
})();
