/* Life hub cross-device sync.
   Saves each page's data to your Google Drive through your Apps Script (Code.gs).
   Uses the same Apps Script URL and token as the Intervals.icu sync.
   Rule: the newest save wins, per page (training, meals). */
const HubSync=(()=>{
  const CFG='season-2027-sync';
  const cfg=()=>{try{return JSON.parse(localStorage.getItem(CFG)||'{}')}catch(e){return {}}};
  const setCfg=c=>{try{localStorage.setItem(CFG,JSON.stringify(c))}catch(e){}};
  const on=()=>{const c=cfg();return !!(c.url&&c.tok)};
  const AT=k=>k+'@at';
  const localAt=k=>+(localStorage.getItem(AT(k))||0);
  const setAt=(k,v)=>{try{localStorage.setItem(AT(k),String(v))}catch(e){}};
  const url=(c,q)=>c.url+(c.url.includes('?')?'&':'?')+'t='+encodeURIComponent(c.tok)+q;
  let status='';
  const listeners=[];
  const say=s=>{status=s;listeners.forEach(f=>{try{f(s)}catch(e){}})};
  async function pull(key){
    if(!on())return null;
    try{const r=await fetch(url(cfg(),'&action=get&key='+encodeURIComponent(key)));return await r.json()}
    catch(e){return {error:'offline'}}
  }
  const timers={};
  function push(key,data){
    const at=Date.now(); setAt(key,at);
    if(!on())return;
    clearTimeout(timers[key]);
    timers[key]=setTimeout(async()=>{
      const c=cfg();
      try{
        const r=await fetch(c.url,{method:'POST',headers:{'Content-Type':'text/plain;charset=utf-8'},
          body:JSON.stringify({t:c.tok,action:'put',key,at,data})});
        const j=await r.json(); say(j&&j.ok?'Synced':'Sync error: '+((j&&j.error)||'unknown'));
      }catch(e){say('Offline: saved on this device, syncs next time')}
    },1200);
  }
  /* Call once on page load. apply(data) replaces local data when the cloud copy is newer. */
  async function sync(key,localData,apply){
    const r=await pull(key);
    if(!r){return 'off'}
    if(r.error){say(r.error==='offline'?'Offline: using this device':'Sync error: '+r.error);return 'error'}
    const la=localAt(key);
    if(r.data&&r.at>la){apply(r.data);setAt(key,r.at);say('Synced');return 'remote'}
    if(localData&&(!r.data||la>r.at)){push(key,localData);return 'local'}
    say('Synced');return 'same';
  }
  return {on,cfg,setCfg,pull,push,sync,onStatus:f=>listeners.push(f),status:()=>status};
})();
window.HubSync=HubSync;
