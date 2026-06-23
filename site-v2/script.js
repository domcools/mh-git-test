// Marshall Harrison v2 — shared scripts.
document.addEventListener('DOMContentLoaded',function(){
  var burger=document.querySelector('.burger');
  if(burger)burger.addEventListener('click',function(){document.querySelector('.nav ul').classList.toggle('open');});
  var hdr=document.querySelector('header[data-watch]');
  if(hdr)addEventListener('scroll',function(){hdr.classList.toggle('solid',scrollY>40);});
  var bar=document.querySelector('.filters');
  if(bar)bar.addEventListener('click',function(e){
    if(e.target.tagName!=='BUTTON')return;
    bar.querySelectorAll('button').forEach(function(b){b.classList.remove('on');});
    e.target.classList.add('on');
    var want=e.target.dataset.filter;
    document.querySelectorAll('[data-interest]').forEach(function(c){
      c.style.display=(want==='all'||c.dataset.interest.split('|').indexOf(want)>-1)?'':'none';
    });
  });
  // click-to-play video tiles (YouTube)
  document.querySelectorAll('[data-yt]').forEach(function(el){
    el.addEventListener('click',function(){
      var id=el.dataset.yt;
      var s=el.dataset.start;
      el.innerHTML='<iframe referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube-nocookie.com/embed/'+id+'?autoplay=1&rel=0'+(s?'&start='+s:'')+'" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
    },{once:true});
  });
  var sel=document.querySelector('select[name="experience"]');
  if(sel){var want=new URLSearchParams(location.search).get('experience');
    if(want)for(var i=0;i<sel.options.length;i++)if(sel.options[i].value===want){sel.selectedIndex=i;break;}}
});
