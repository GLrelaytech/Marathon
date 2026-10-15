/* Holidays data. Shared by holidays/index.html and the life hub home page.
   Dates are inclusive. Edit here when a plan changes. */
const H_TRIPS=[
 {id:'t1',kind:'long',n:'Trip 1: early December',from:'2026-11-30',to:'2026-12-06',tbc:true,
  phase:'Base, lighter week (training week 6)',train:'Easy runs only. Hotel upper body and circuit. No gym needed.',
  why:'Moved from late October. Base phase, so it costs nothing.'},
 {id:'t2',kind:'long',n:'Trip 2: New Year',from:'2026-12-27',to:'2027-01-03',
  phase:'Base, lighter week (training week 10)',train:'Easy runs, hills if there are any. Hotel circuit.',
  why:'Includes 1 January, a double-pay day you would miss. Watch for family plans you do not control.'},
 {id:'t3',kind:'long',n:'Trip 3: active',from:'2027-01-27',to:'2027-01-31',moved:'was 19–23 Feb',
  phase:'Build 1, lighter week (training week 14)',train:'Keep it active: hills, hiking, vert. Do the retests the week after.',
  why:'19–23 Feb now falls in the marathon block (800s and 24 km long run). End of January is the lighter week before it.'},
 {id:'t4',kind:'long',n:'Trip 4: recovery',from:'2027-05-10',to:'2027-05-16',moved:'was 23 Apr–1 May',
  phase:'Recovery after Bairi (training week 29)',train:'Walks and swims. Easy runs from Friday if nothing hurts.',
  why:'23 Apr–1 May now sits between Plovdiv and Bairi, in the trail-reminder week. Right after Bairi is the real recovery window. Flat, warm, no ambition.'},
 {id:'t5',kind:'long',n:'Trip 5: reward',from:'2027-07-02',to:'2027-07-11',
  phase:'After Vitosha, reset month',train:'Nothing planned. Move for fun.',
  why:'Plan it before June. You will not have the energy after Vitosha.'},
 {id:'t6',kind:'long',n:'Trip 6: pre-autumn',from:'2027-09-03',to:'2027-09-12',
  phase:'5k project',train:'Easy runs and strides. Keep the strength routine.',
  why:'Includes 6 September, a double-pay day you would miss. Option: start the trip on Tue 7 Sep. Last window before the autumn build.'},
 {id:'s1',kind:'short',n:'Weekend away',from:'2026-11-21',to:'2026-11-22',phase:'Base',train:'Friday long run done. Saturday is rest anyway.'},
 {id:'s2',kind:'short',n:'Weekend away',from:'2027-02-13',to:'2027-02-14',phase:'Build 1',train:'Friday long run done. Sunday: hybrid session or skip.'},
 {id:'s3',kind:'short',n:'Weekend away',from:'2027-03-06',to:'2027-03-07',phase:'Marathon block',train:'Right after the 10k test. Sunday: 30 min recovery run.'},
 {id:'s4',kind:'short',n:'Easter weekend',from:'2027-05-01',to:'2027-05-02',phase:'Between Plovdiv and Bairi',train:'Friday 30 Apr: trail long run on the Bairi hills, then work (Good Friday is a double-pay day). Weekend: family Easter.'},
 {id:'s5',kind:'short',n:'Vitosha recon weekend',from:'2027-06-04',to:'2027-06-06',phase:'Vitosha build',train:'Friday: course recon 4:30. Saturday: back-to-back 2:30. Sunday: rest.'},
 {id:'s6',kind:'short',n:'Weekend away',from:'2027-08-21',to:'2027-08-22',phase:'5k project',train:'Long run on Friday before you go.'},
 {id:'s7',kind:'short',n:'Weekend away',from:'2027-10-16',to:'2027-10-17',phase:'Autumn',train:'Long run on Friday before you go.'}
];
const H_RACES=[
 {n:'Plovdiv Marathon',d:'2027-04-18'},{n:'Asenovgradski Bairi 50 km',d:'2027-05-09'},{n:'Vitosha 100 (date to confirm)',d:'2027-06-26'}
];
const H_BLACKOUT=[
 {n:'Plovdiv taper and race',from:'2027-03-29',to:'2027-04-18',rule:'No trips.'},
 {n:'Bairi race week',from:'2027-05-03',to:'2027-05-09',rule:'No trips.'},
 {n:'Vitosha taper and race',from:'2027-06-14',to:'2027-06-27',rule:'No trips.'},
 {n:'Marathon block',from:'2027-02-15',to:'2027-03-28',rule:'Weekends only. No long trips.'},
 {n:'Vitosha build',from:'2027-05-17',to:'2027-06-13',rule:'Only trail weekends that fit the back-to-backs.'}
];
const H_PUBLIC=[
 ['2026-12-24','Christmas Eve'],['2026-12-25','Christmas'],['2026-12-26','Second day of Christmas'],
 ['2027-01-01','New Year'],['2027-03-03','Liberation Day'],['2027-04-30','Good Friday'],['2027-05-01','Labour Day, Holy Saturday'],
 ['2027-05-02','Easter Sunday'],['2027-05-03','Easter Monday'],['2027-05-06','St George\'s Day'],['2027-05-24','Culture and Literacy Day'],
 ['2027-09-06','Unification Day'],['2027-09-22','Independence Day']
];

/* Trips with your own date changes from the Holidays page applied. */
function H_load(){try{return JSON.parse(localStorage.getItem('lifehub-holidays')||'{}')||{}}catch(e){return {}}}
function H_list(st){
  const tr=((st||H_load()).trips)||{};
  return H_TRIPS.map(t=>{const o=tr[t.id]||{};
    return Object.assign({},t,{from:o.from||t.from,to:(o.to&&o.to>=(o.from||t.from))?o.to:(o.from&&o.from>t.to?o.from:t.to),dest:o.dest||'',status:o.status||'Idea',orig:{from:t.from,to:t.to}})})
    .sort((a,b)=>a.from.localeCompare(b.from));
}

/* ============ social rhythm ============
   Default rules: date nights on the 2nd and 4th Saturday; best man and maid of honour
   on the 1st and 3rd Wednesday (the second robotics evening); Sammy's godparents on the
   last Sunday afternoon. Defaults are rules, not promises: move any of them. */
const H_SOCIAL_TYPES={
  date:{n:'Date night',who:'with your wife',per:2,c:'#B5486A'},
  friends:{n:'Evening with the best man and maid of honour',who:'',per:2,c:'#7A5BA6'},
  god:{n:'Evening with Sammy\'s godparents',who:'',per:1,c:'#2F8A8A'}
};
function H_social(st){
  st=st||H_load(); const ov=(st.social)||{};
  const trips=H_list(st), races=H_RACES.map(r=>r.d);
  const iso=d=>d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
  const nth=(y,m,wd,n)=>{const d=new Date(y,m,1);while(d.getDay()!==wd)d.setDate(d.getDate()+1);d.setDate(d.getDate()+7*(n-1));return d.getMonth()===m?d:null};
  const last=(y,m,wd)=>{const d=new Date(y,m+1,0);while(d.getDay()!==wd)d.setDate(d.getDate()-1);return d};
  const trip=s=>trips.find(t=>s>=t.from&&s<=t.to);
  const bad=s=>{const d=new Date(+s.slice(0,4),+s.slice(5,7)-1,+s.slice(8,10));d.setDate(d.getDate()+1);return races.includes(s)||races.includes(iso(d))};
  const out=[];
  for(let i=0;i<12;i++){const y=2026+Math.floor((10+i)/12),m=(10+i)%12,ym=y+'-'+String(m+1).padStart(2,'0');
    const plan=[['date',nth(y,m,6,2),1],['date',nth(y,m,6,4),2],['friends',nth(y,m,3,1),1],['friends',nth(y,m,3,3),2],['god',last(y,m,0),1]];
    plan.forEach(([type,d,k])=>{if(!d)return;let s=iso(d),note='';
      const shift=step=>{for(let j=0;j<3;j++){const x=new Date(+s.slice(0,4),+s.slice(5,7)-1,+s.slice(8,10));x.setDate(x.getDate()+step);const xs=iso(x);if(x.getMonth()!==m)return false;s=xs;if(!trip(s)&&!bad(s))return true}return false};
      if(bad(s)){if(!shift(-7))shift(7);note='Moved: race weekend.'}
      const tr=trip(s);
      if(tr){if(type==='date'){note='On '+tr.n+': make one evening of the trip the date.'}else{if(!shift(7))shift(-7);note=trip(s)?'Clashes with a trip: move it.':'Moved: you are away.'}}
      if(out.some(e=>e.type===type&&e.auto===s)){if(!shift(7))shift(-7);note='Moved: two on one day.'}
      const id=`${type}-${ym}-${k}`, o=ov[id]||{};
      out.push({id,type,ym,date:o.date||s,auto:s,moved:!!o.date&&o.date!==s,status:o.status||'',note:o.date?'':note,...H_SOCIAL_TYPES[type]});
    });
  }
  return out.sort((a,b)=>a.date.localeCompare(b.date));
}
/* First fully free weekend of each month: no trip, no social plan, no race. Keep it open. */
function H_openWeekends(st){
  const ev=H_social(st), trips=H_list(st), out={};
  const iso=d=>d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
  for(let i=0;i<12;i++){const y=2026+Math.floor((10+i)/12),m=(10+i)%12;const d=new Date(y,m,1);while(d.getDay()!==6)d.setDate(d.getDate()+1);
    for(;d.getMonth()===m;d.setDate(d.getDate()+7)){const sa=iso(d),su=new Date(d);su.setDate(su.getDate()+1);const sus=iso(su);const fr=new Date(d);fr.setDate(fr.getDate()-1);const frs=iso(fr);
      const busy=[frs,sa,sus].some(s=>ev.some(e=>e.date===s&&e.status!=='skip')||trips.some(t=>s>=t.from&&s<=t.to)||H_RACES.some(r=>r.d===s));
      if(!busy){out[y+'-'+String(m+1).padStart(2,'0')]={from:sa,to:sus};break}}}
  return out;
}
