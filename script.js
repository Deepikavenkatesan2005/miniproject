const UI={
nHome:["Home","முகப்பு"],nSvc:["Services","சேவைகள்"],nSch:["Schemes","திட்டங்கள்"],nFaq:["Help & FAQ","உதவி & கேள்விகள்"],
h1:["Find government services without the confusion","அரசு சேவைகளை குழப்பமின்றி கண்டறியுங்கள்"],
hp:["Search a service, see the documents you need and follow clear steps.","சேவையைத் தேடுங்கள், தேவையான ஆவணங்களைப் பாருங்கள், எளிய படிகளைப் பின்பற்றுங்கள்."],
ph:["Search a service, e.g. income certificate","சேவையைத் தேடுங்கள், எ.கா. வருமானச் சான்றிதழ்"],
svSub:["Choose a service to see eligibility, documents and steps.","தகுதி, ஆவணங்கள், படிகளைக் காண ஒரு சேவையைத் தேர்ந்தெடுக்கவும்."],
scSub:["Welfare schemes you may be eligible for.","நீங்கள் தகுதி பெறக்கூடிய நலத்திட்டங்கள்."],
fqSub:["Quick answers to common questions.","பொதுவான கேள்விகளுக்கான விரைவான பதில்கள்."],
none:["No service found. Try another word.","சேவை எதுவும் கிடைக்கவில்லை. வேறு சொல்லில் தேடுங்கள்."],
view:["View guide →","வழிகாட்டி →"],elig:["Eligibility","தகுதி"],docs:["Documents checklist","ஆவணப் பட்டியல்"],
steps:["Step-by-step guide","படிப்படியான வழிகாட்டி"],ready:["ready","தயார்"],who:["Who can get it","யாருக்கு"],ben:["Benefit","பயன்"],
more:["More information: ask at your nearest e-Sevai centre or the scheme's official website.","மேலும் அறிய: அருகிலுள்ள இ-சேவை மையம் அல்லது திட்டத்தின் அதிகாரப்பூர்வ இணையதளத்தை அணுகவும்."],
apply:["Go to the official website to apply →","விண்ணப்பிக்க அதிகாரப்பூர்வ இணையதளம் →"],lock:["Tick all documents above to unlock the apply link.","மேலே உள்ள அனைத்து ஆவணங்களையும் டிக் செய்தால் விண்ணப்ப இணைப்பு திறக்கும்."],site:["Official website →","அதிகாரப்பூர்வ இணையதளம் →"],
official:["EasyGov does not process applications. Submit through the official government channel, such as the e-Sevai portal.","EasyGov விண்ணப்பங்களைப் பெறாது. இ-சேவை போன்ற அதிகாரப்பூர்வ அரசு வழியில் சமர்ப்பிக்கவும்."],
foot:["EasyGov is an information guide, not an official government site. Details may change, so please verify on the official portal. · Mini Project, M.Sc. Computer Science","EasyGov ஒரு தகவல் வழிகாட்டி, அதிகாரப்பூர்வ அரசு தளம் அல்ல. விவரங்கள் மாறலாம்; அதிகாரப்பூர்வ தளத்தில் சரிபார்க்கவும். · சிறு திட்டம், M.Sc. கணினி அறிவியல்"]};
const CATS=[["all","All","அனைத்தும்"],["cert","Certificates","சான்றிதழ்கள்"],["id","Identity","அடையாளம்"],["edu","Education","கல்வி"],["wel","Welfare","நலத்திட்டம்"]];
const STEPS=[["Select the service","சேவையைத் தேர்ந்தெடுக்கவும்"],["Check eligibility","தகுதியைச் சரிபார்க்கவும்"],["Prepare the documents","ஆவணங்களைத் தயார் செய்யவும்"],["Submit through the official channel","அதிகாரப்பூர்வ வழியில் சமர்ப்பிக்கவும்"]];
const D={aad:["Aadhaar","ஆதார்"],ration:["Ration card","குடும்ப அட்டை"],inc:["Income certificate","வருமானச் சான்றிதழ்"],age:["Age proof","வயதுச் சான்று"],addr:["Address proof","முகவரிச் சான்று"],photo:["Passport-size photo","பாஸ்போர்ட் அளவு புகைப்படம்"],bank:["Bank details","வங்கி விவரங்கள்"]};
const S=[
{c:"cert",i:"👶",n:["Birth Certificate","பிறப்புச் சான்றிதழ்"],d:["Official record of a birth.","பிறப்பின் அதிகாரப்பூர்வ பதிவு."],e:["Birth registered within the local body area.","உள்ளாட்சி எல்லைக்குள் பிறப்பு பதிவு செய்யப்பட்டிருக்க வேண்டும்."],k:[["Hospital discharge summary","மருத்துவமனை வெளியேற்றச் சான்று"],["Parents' ID proof","பெற்றோரின் அடையாளச் சான்று"],D.addr]},
{c:"cert",i:"📜",n:["Community Certificate","சமூகச் சான்றிதழ்"],d:["Proof of community for admissions and jobs.","கல்வி, வேலைக்கான சமூகச் சான்று."],e:["Resident of the state.","மாநிலத்தில் வசிப்பவர்."],k:[D.ration,D.aad,["Parent's community certificate","பெற்றோரின் சமூகச் சான்றிதழ்"]]},
{c:"cert",i:"💰",n:["Income Certificate","வருமானச் சான்றிதழ்"],d:["Proof of annual family income.","குடும்ப ஆண்டு வருமானச் சான்று."],e:["Any resident.","அனைத்து குடியிருப்பாளர்களும்."],k:[D.aad,D.ration,["Self-declaration of income","வருமானச் சுய உறுதிமொழி"]]},
{c:"id",i:"🪪",n:["Aadhaar Update","ஆதார் திருத்தம்"],d:["Update name, address or other details.","பெயர், முகவரி போன்ற விவரங்களைத் திருத்துதல்."],e:["Existing Aadhaar holder.","ஆதார் வைத்திருப்பவர்."],k:[["Aadhaar number","ஆதார் எண்"],["Proof of the detail to update","திருத்தத்திற்கான ஆதாரம்"],["Linked mobile number","இணைக்கப்பட்ட கைப்பேசி எண்"]]},
{c:"id",i:"🗳️",n:["Voter ID","வாக்காளர் அடையாள அட்டை"],d:["Register as a voter or correct details.","வாக்காளராகப் பதிவு செய்தல் அல்லது விவரங்களைத் திருத்துதல்."],e:["Indian citizen aged 18 or above.","18 வயது நிரம்பிய இந்தியக் குடிமகன்."],k:[D.age,D.addr,D.photo]},
{c:"id",i:"🚗",n:["Driving Licence","ஓட்டுநர் உரிமம்"],d:["Learner's or permanent licence.","கற்றுநர் அல்லது நிரந்தர உரிமம்."],e:["Minimum age as per vehicle type.","வாகன வகைக்கேற்ற குறைந்தபட்ச வயது."],k:[D.age,D.addr,D.photo]},
{c:"edu",i:"🎓",n:["Scholarship Support","கல்வி உதவித்தொகை"],d:["Financial help for students.","மாணவர்களுக்கான நிதி உதவி."],e:["Student with income within the scheme limit.","திட்ட வரம்பிற்குள் வருமானம் உள்ள மாணவர்."],k:[["Marksheet","மதிப்பெண் சான்று"],D.inc,["Bank passbook","வங்கிப் புத்தகம்"]]},
{c:"wel",i:"👵",n:["Old Age Pension","முதியோர் ஓய்வூதியம்"],d:["Monthly support for senior citizens.","மூத்த குடிமக்களுக்கான மாதாந்திர உதவி."],e:["Age 60+ with low income.","60+ வயது, குறைந்த வருமானம்."],k:[D.age,D.bank,D.inc]}];
const H=[
{n:["PM-KISAN","பிஎம்-கிசான்"],w:["Small and marginal farmer families","சிறு, குறு விவசாயக் குடும்பங்கள்"],b:["₹6,000 a year in 3 instalments","ஆண்டுக்கு ₹6,000, 3 தவணைகளில்"],i:"🌾"},
{n:["Ayushman Bharat PM-JAY","ஆயுஷ்மான் பாரத் PM-JAY"],w:["Eligible low-income families","தகுதியுள்ள குறைந்த வருமானக் குடும்பங்கள்"],b:["Health cover up to ₹5 lakh per family a year","குடும்பத்திற்கு ஆண்டுக்கு ₹5 லட்சம் வரை மருத்துவக் காப்பீடு"],i:"🏥"},
{n:["Sukanya Samriddhi","சுகன்யா சம்ரிதி"],w:["Girl child under 10 years","10 வயதுக்குட்பட்ட பெண் குழந்தை"],b:["Savings account with interest for her future","எதிர்காலத்திற்கான வட்டியுடன் கூடிய சேமிப்புக் கணக்கு"],i:"👧"},
{n:["National Old Age Pension","தேசிய முதியோர் ஓய்வூதியம்"],w:["Age 60+ below poverty line","60+ வயது, வறுமைக்கோட்டிற்குக் கீழ்"],b:["Monthly pension support","மாதாந்திர ஓய்வூதிய உதவி"],i:"🧓"},
{n:["PM Awas Yojana","பிரதம மந்திரி ஆவாஸ் யோஜனா"],w:["Eligible families without a pucca house","நிரந்தர வீடு இல்லாத தகுதியுள்ள குடும்பங்கள்"],b:["Support to build or buy a home","வீடு கட்ட அல்லது வாங்க உதவி"],i:"🏠"},
{n:["Post Matric Scholarship","மேற்படிப்பு உதவித்தொகை"],w:["Students from eligible categories","தகுதியுள்ள பிரிவு மாணவர்கள்"],b:["Help with course fees","படிப்புக் கட்டண உதவி"],i:"📚"}];
const F=[
[["How do I find a service?","சேவையை எப்படிக் கண்டறிவது?"],["Type its name in the search box or pick a category.","தேடல் பெட்டியில் பெயரை உள்ளிடவும் அல்லது ஒரு பிரிவைத் தேர்ந்தெடுக்கவும்."]],
[["Where can I see the documents needed?","தேவையான ஆவணங்களை எங்கே பார்க்கலாம்?"],["Open any service card. The checklist lists the documents, and you can tick each one as you prepare it.","ஏதேனும் சேவை அட்டையைத் திறக்கவும். ஆவணப் பட்டியலில் ஒவ்வொன்றையும் தயார் செய்தவுடன் டிக் செய்யலாம்."]],
[["Can I apply on EasyGov?","EasyGov மூலம் விண்ணப்பிக்கலாமா?"],["No. EasyGov only guides you. Submit your application through the official government portal or an e-Sevai centre.","இல்லை. EasyGov வழிகாட்டுதல் மட்டுமே தரும். அதிகாரப்பூர்வ அரசு தளம் அல்லது இ-சேவை மையத்தில் விண்ணப்பிக்கவும்."]],
[["Is Tamil available?","தமிழ் உள்ளதா?"],["Yes. Use the EN / தமிழ் switch at the top to change the language.","ஆம். மேலே உள்ள EN / தமிழ் பொத்தானை மாற்றி மொழியை மாற்றலாம்."]]];

const ES="https://www.tnesevai.tn.gov.in";
const SU=[ES,ES,ES,"https://myaadhaar.uidai.gov.in","https://voters.eci.gov.in","https://parivahan.gov.in","https://scholarships.gov.in","https://nsap.nic.in"];
const HU=["https://pmkisan.gov.in","https://pmjay.gov.in","https://www.indiapost.gov.in","https://nsap.nic.in","https://pmaymis.gov.in","https://scholarships.gov.in"];
let L=0,cat="all";
try{L=+localStorage.getItem("eg-lang")||0}catch(e){}
const $=id=>document.getElementById(id);
function setL(n){L=n;try{localStorage.setItem("eg-lang",n)}catch(e){}render()}
function render(){
document.documentElement.lang=L?"ta":"en";
$("b0").classList.toggle("on",!L);$("b1").classList.toggle("on",!!L);
document.querySelectorAll("[data-t]").forEach(e=>e.textContent=UI[e.dataset.t][L]);
$("q").placeholder=UI.ph[L];
$("chips").innerHTML=CATS.map(c=>`<button class="chip ${c[0]==cat?"on":""}" onclick="cat='${c[0]}';render()">${c[L+1]}</button>`).join("");
const q=$("q").value.trim().toLowerCase();
const list=S.map((s,i)=>[s,i]).filter(([s])=>(cat=="all"||s.c==cat)&&(s.n.concat(s.d).join(" ").toLowerCase().includes(q)));
$("svc").innerHTML=list.map(([s,i])=>`<button class="card" onclick="openS(${i})"><div class="ic">${s.i}</div><h3>${s.n[L]}</h3><p>${s.d[L]}</p><span class="tag">${UI.view[L]}</span></button>`).join("");
$("empty").style.display=list.length?"none":"block";
$("sch").innerHTML=H.map((h,i)=>`<div class="card"><div class="ic">${h.i}</div><h3>${h.n[L]}</h3><div class="row"><b>${UI.who[L]}:</b> ${h.w[L]}</div><div class="row"><b>${UI.ben[L]}:</b> ${h.b[L]}</div><div class="note">${UI.more[L]}</div><a class="apply" href="${HU[i]}" target="_blank" rel="noopener noreferrer">${UI.site[L]}</a></div>`).join("");
$("faqs").innerHTML=F.map(f=>`<details><summary>${f[0][L]}</summary><p>${f[1][L]}</p></details>`).join("");
if($("dlg").open)openS(cur);
}
let cur=0;
function openS(i){
cur=i;const s=S[i];
$("dc").innerHTML=`<div class="dh"><div class="ic">${s.i}</div><div><h3>${s.n[L]}</h3><p>${s.d[L]}</p></div><button class="x" aria-label="Close" onclick="$('dlg').close()">✕</button></div>
<div class="db"><h4>${UI.elig[L]}</h4><p style="margin:0">${s.e[L]}</p>
<h4>${UI.docs[L]} · <span id="cnt">0/${s.k.length}</span> ${UI.ready[L]}</h4>
${s.k.map((k,j)=>`<label class="chk"><input type="checkbox" onchange="tick()"> ${k[L]}</label>`).join("")}
<div class="bar2"><i id="pg"></i></div>
<h4>${UI.steps[L]}</h4><ol class="st">${STEPS.map(t=>`<li>${t[L]}</li>`).join("")}</ol>
<a id="ap" class="apply off" aria-disabled="true" href="${SU[i]}" target="_blank" rel="noopener noreferrer">${UI.apply[L]}</a><div class="hint" id="hn">${UI.lock[L]}</div><div class="note">${UI.official[L]}</div></div>`;
if(!$("dlg").open)$("dlg").showModal();
}
function tick(){
const a=[...document.querySelectorAll("#dc .chk input")],n=a.filter(x=>x.checked).length;
$("cnt").textContent=n+"/"+a.length;$("pg").style.width=(n/a.length*100)+"%";
const ok=n==a.length;$("ap").classList.toggle("off",!ok);$("ap").setAttribute("aria-disabled",!ok);$("hn").style.display=ok?"none":"block";
}
$("q").addEventListener("input",render);
$("dlg").addEventListener("click",e=>{if(e.target===$("dlg"))$("dlg").close()});
render();
