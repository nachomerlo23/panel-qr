const fs=require('fs');
let s=fs.readFileSync('app-ro/index.html','utf8');
const reps=[
["{id:'birth',label:'Fecha de nacimiento',type:'date',enabled:true,required:false,system:true,group:'Personal'},\n{id:'start'","{id:'birth',label:'Fecha de nacimiento',type:'date',enabled:true,required:false,system:true,group:'Personal'},\n{id:'age',label:'Edad',type:'calculated',enabled:true,required:false,system:true,group:'Personal'},\n{id:'start'"],
["let st=JSON.parse(localStorage.getItem(KEY)||'null')||migrate(JSON.parse(localStorage.getItem(OLD)||'null'))||seed();\nconst persist","let st=JSON.parse(localStorage.getItem(KEY)||'null')||migrate(JSON.parse(localStorage.getItem(OLD)||'null'))||seed();\nif(!st.fields.some(f=>f.id==='age')){let i=st.fields.findIndex(f=>f.id==='birth');st.fields.splice(i+1,0,{id:'age',label:'Edad',type:'calculated',enabled:true,required:false,system:true,group:'Personal'});localStorage.setItem(KEY,JSON.stringify(st))}\nconst persist"],
["const fmt=d=>visibleDate(d), seniority=start=>","const fmt=d=>visibleDate(d), age=birth=>{if(!birth)return'';let b=new Date(birth+'T12:00:00'),n=new Date(),y=n.getFullYear()-b.getFullYear();if(n.getMonth()<b.getMonth()||(n.getMonth()===b.getMonth()&&n.getDate()<b.getDate()))y--;return y>=0?`${y} ${y===1?'año':'años'}`:''}, seniority=start=>"],
["function profileValue(p,f){if(f.id==='seniority')return seniority(p.start);","function profileValue(p,f){if(f.id==='age')return age(p.birth);if(f.id==='seniority')return seniority(p.start);"],
["Los campos con * son obligatorios. La antigüedad se calcula automáticamente desde la fecha de ingreso.","Los campos con * son obligatorios. La edad y la antigüedad se calculan automáticamente desde sus respectivas fechas."]
];
for(const [a,b] of reps){if(s.includes(a))s=s.replace(a,b)}
fs.rmSync('dist',{recursive:true,force:true});
fs.mkdirSync('dist',{recursive:true});
fs.writeFileSync('dist/index.html',s);
