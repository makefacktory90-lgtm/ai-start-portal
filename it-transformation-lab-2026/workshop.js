'use strict';
(()=>{
 const setup=document.getElementById('group-form'),result=document.getElementById('group-result'),status=document.getElementById('group-status'),copy=document.getElementById('copy-group'),key='pr01-group-field-v1';
 const fields=[...document.querySelectorAll('[name]')];const correct={capacity:'Использовать 120 из A',tense:'Сохранить планируемое открытие',job:'Исключить неподтверждённое обещание',leader:'Исключить без доказательств',quote:'Запросить, не придумывать',link:'Запросить, не придумывать'};
 const labels={capacity:'вместимость',tense:'статус события',job:'обещание работы',leader:'лидерство',quote:'цитата',link:'ссылка'};
 const values=()=>Object.fromEntries(fields.map(f=>[f.name,f.value]));
 const restore=data=>fields.forEach(f=>{if(typeof data?.[f.name]==='string')f.value=data[f.name];});
 try{restore(JSON.parse(localStorage.getItem(key)));}catch{}
 function check(show=false){
  const v=values(),missing=Object.keys(correct).filter(k=>!v[k]||v[k]==='Не решили'),wrong=Object.keys(correct).filter(k=>v[k]&&v[k]!=='Не решили'&&v[k]!==correct[k]);
  const ready=!missing.length&&!wrong.length&&v.angle.trim()&&v.criteria.trim();copy.disabled=!ready;
  const prompt='Реестр фактов проверен человеком. Используй 120 участников в месяц из A; событие только планируется. Исключи гарантию трудоустройства и неподтверждённое лидерство. Цитату, контакт и ссылку не придумывай.\n\nАдресат, выбранный группой: '+(v.audience||'не выбран')+'.\nГлавный акцент: '+(v.angle||'ещё не выбран')+'.\nКритерии группы: '+(v.criteria||'ещё не заданы')+'.\n\nПодготовь три учебных материала: справку руководителю до 1800 знаков, комментарий для согласования до 700 знаков без приписывания спикеру и внутреннюю новость до 1200 знаков. Сохрани единое ядро фактов и разные назначения. После проверки собери их вместе с таблицей фактов и вопросами согласующим в редактируемый документ, если создание файла доступно. Если нет — выдай структурированный текст. Ничего не отправляй и не публикуй.';
  document.getElementById('group-next').textContent=prompt;
  if(show){if(missing.length)status.textContent='Ещё нет решений: '+missing.map(k=>labels[k]).join(', ')+'.';else if(wrong.length)status.textContent='Нужно вернуться к источникам и проверить: '+wrong.map(k=>labels[k]).join(', ')+'. Выпуск пока остановлен.';else if(!v.angle.trim()||!v.criteria.trim())status.textContent='Шесть решений приняты. Добавьте акцент аудитории и критерии готовности.';else status.textContent='Шесть решений приняты, акцент и критерии заданы. Можно продолжить запуск.';}
  return ready;
 }
 fields.forEach(f=>f.addEventListener('input',()=>{check();try{localStorage.setItem(key,JSON.stringify(values()));document.getElementById('group-save-status').textContent='Черновик сохранён в этом браузере.';}catch{document.getElementById('group-save-status').textContent='Сохранение в браузере недоступно. Скачайте файл решений.';}}));
 document.getElementById('check-group').addEventListener('click',()=>check(true));
 copy.removeAttribute('data-copy');copy.addEventListener('click',async()=>{if(!check(true))return;const ok=await copyText(document.getElementById('group-next').textContent);status.textContent=ok?'Продолжение с выбором группы скопировано. Вставьте его в чат после таблицы фактов.':'Не удалось скопировать. Выделите текст продолжения ниже.';});
 setup.addEventListener('submit',e=>e.preventDefault());result.addEventListener('submit',e=>e.preventDefault());
 document.getElementById('save-group').addEventListener('click',()=>{if(!setup.reportValidity()||!result.reportValidity())return;const v=values();let text='# PR-01 — решения группы\n\nУчебная синтетика. Версия 1.1.\n\n';for(const [k,val] of Object.entries(v))text+='## '+(labels[k]||({task:'Задача',audience:'Адресат',angle:'Акцент',criteria:'Критерии',draft:'Черновик, мин',review:'Проверка и правки, мин',fixes:'Исправления',result:'Решение'})[k]||k)+'\n\n'+(val||'Не указано')+'\n\n';text+='Учебное время не доказывает экономию рабочего процесса.\n';const url=URL.createObjectURL(new Blob([text],{type:'text/markdown;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='PR-01-решения-группы.md';document.body.append(a);a.click();a.remove();document.getElementById('save-group').focus({preventScroll:true});setTimeout(()=>URL.revokeObjectURL(url),1000);document.getElementById('group-save-status').textContent='Решения подготовлены для скачивания.';});
 check();
})();
