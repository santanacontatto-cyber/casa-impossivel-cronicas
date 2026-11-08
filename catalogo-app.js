(()=>{'use strict';const c=window.CASA_CATALOGO;if(!c)return;
const grid=document.getElementById('episodeGrid'), ideas=document.getElementById('ideaGrid');
const make=(tag,cl,text)=>{const n=document.createElement(tag);if(cl)n.className=cl;if(text)n.textContent=text;return n};
for(const x of c.episodes.filter(x=>x.status==='disponivel')){
 const art=make('article','episode-card');if(grid.children.length===0)art.classList.add('is-featured');const a=make('a','episode-cover');a.href='episodios/'+encodeURIComponent(x.slug)+'/';
 const img=document.createElement('img');img.src=x.image;img.alt=`Quadrinhos de ${x.title}`;img.loading='lazy';img.width=1536;img.height=1024;a.append(img);
 const cap=make('span','cover-label',`${x.season} · EPISÓDIO ${x.id}`);a.append(cap);
 const detail=make('div','episode-detail');detail.append(make('div','episode-date',`${x.date}  /  ~${x.readMinutes} MIN DE LEITURA`),make('h3','',x.title),make('p','',x.description));
 const link=make('a','read-episode','LER A HISTÓRIA ↗');link.href=a.href;detail.append(link);art.append(a,detail);grid.append(art)
}
for(const x of c.ideas){const art=make('article','idea-card');art.append(make('span','',x.tag),make('h3','',x.title),make('p','',x.description));ideas.append(art)}
document.getElementById('episodeCount').textContent=String(c.episodes.filter(x=>x.status==='disponivel').length).padStart(2,'0');
})();