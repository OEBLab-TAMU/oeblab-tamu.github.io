const newsItems = [
  {
    date:"May 2026", tag:"New Member",
    title:"Dr. Yinong Chen will be joining as as a postdoctoral researcher!",
    desc:"Yinong successfully defended his disseration and will continue working with us as a postdoctural researcher. Looking forward to our continued collaboration.",
    img:"images/Yinong_Professional.jpeg",
  },
  {
    date:"March 2026", tag:"Grant",
    title:"OERC grant led by Mina",
    desc:"Mina will lead this project that systematically evaluates how variations in HMD mass and center-of-mass location affect neck muscle loading and cervical spine forces across different static and dynamic head conditions. Congratulations, Mina!",
    img:"images/OERC2025.jpg",
  },
  {
    date:"February 2026", tag:"Award",
    title:"David M. Rempel Award for Best Experimental Paper in Occupational Ergonomics!",
    desc:"Our team recieved the Best Experimental Paper Award by the Occupational Ergonomics Technical Group at HFES. The work was supported by a research grant from U.S. Economic Development Administration. Congratulations to you all!",
    img:"images/HFESAward.jpg",
  },
  {
    date:"November 2025", tag:"Webinar",
    title:"AnyBody Webinar Series by OEB Lab!",
    desc:"Mina and Jay will be presenting their recent study, titled Biomechanical Simulation of Passive Back-Support Exoskeletons: Effects of Actuator Strength on Musculoskeletal Load and Contact Stress at Anybody Webinar series.",
    img:"images/AnybodyExo.jpg",
    link:"https://www.anybodytech.com/webcasts/biomechanical-simulation-of-passive-back-support-exoskeletons-effects-of-actuator-strength-on-musculoskeletal-load-and-contact-stress/",
    linkText:"Watch Webcast →"
  },
  { date:" August 2025", tag:"Relocation", title:"OEB Lab Joins Texas A&M School of Public Health",
    desc:"The OEB Laboratory has relocated from Oregon State University to Texas A&M University School of Public Health in College Station, TX. We look forward to new collaborations and partnerships at Texas A&M." },
  { date:"2025", tag:"Grant", title:"OEB Lab Receives Smart Forestry Research Grant",
    desc:"Funding awarded to investigate exoskeleton technology and wearable robotics for forestry and logging workers.", img:"images/forestry.jpg" },
  { date:"2025", tag:"Publication", title:"New Paper Published in Applied Ergonomics",
    desc:"Choi et al. published a study on back-support exoskeletons during simulated manual timber felling.", img:"images/news-publication.jpg" },
  { date:"2025", tag:"Conference", title:"Presentations at HFES Annual Meeting",
    desc:"OEB Lab members presented research findings at the Human Factors and Ergonomics Society Annual Meeting.", img:"images/news-conference.jpg" },
  { date:"2024", tag:"Collaboration", title:"New Industry Collaboration with SAIF Corporation",
    desc:"The OEB Lab partners with SAIF Corporation to analyze workers' compensation claims data for Oregon's logging industry.", img:"images/news-collaboration.jpg" },
  { date:"2023", tag:"Grant", title:"NIOSH Grant to Study Exoskeletons Among Commercial Fishermen",
    desc:"Jay Kim and team received a new NIOSH grant ($950K) to study exoskeletons among commercial fishermen.", img:"images/news-fishing-grant.jpg" },
  { date:"2023", tag:"Media", title:"Banger Bar Study Finds Reduced Injury Risk on Crab Boats",
    desc:"Applied ergonomics study finds fishermen-developed banger bar helps reduce injury risk on Dungeness crab boats.", img:"images/news-banger.jpg" },
  { date:"2022", tag:"Grant", title:"OSU Team Receives $5.5M Build Back Better Grant",
    desc:"Jay Kim, as Co-PI, will evaluate efficacy of wearable exoskeletons for next-generation forestry operations.", img:"images/news-bbb-grant.jpg" },
  { date:"2021", tag:"Media", title:"OSU Researchers to Help Make the 'Deadliest Catch' Less Deadly",
    desc:"A federal grant aims to make Oregon's most dangerous fishing market safer.", img:"images/news-fishing.jpg" },
  { date:"2021", tag:"Grant", title:"Grant to Help Prevent Injury in Dungeness Crab Industry",
    desc:"Jay Kim and Laurel Kincl will build on existing research with the Dungeness crab fishing industry.", img:"images/news-crab.jpg" },
];

const PER_PAGE = 10;
let page = 1;

function renderNews(p) {
  const start = (p-1)*PER_PAGE, end = start+PER_PAGE;
  document.getElementById('news-list').innerHTML = newsItems.slice(start,end).map(n=>`
    <div style="display:flex;align-items:stretch;background:#fff;border-radius:8px;
                overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.08);margin-bottom:0.8rem;">
      <div style="width:4px;background:var(--maroon);flex-shrink:0;"></div>
      <div style="width:140px;flex-shrink:0;overflow:hidden;background:#fff;
                  display:flex;align-items:center;justify-content:center;">
        <img src="${n.img}" alt="${n.title}"
             style="width:100%;height:100%;object-fit:contain;object-position:center;
                    background:#fff;display:block;"
             onerror="this.parentElement.style.background='linear-gradient(135deg,#500000,#7a1010)'"/>
      </div>
      <div style="padding:1rem 1.2rem;flex:1;">
        <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.35rem;">
          <span style="font-size:0.68rem;font-weight:600;color:var(--gold);
                       text-transform:uppercase;letter-spacing:0.08em;">${n.date}</span>
          <span style="font-size:0.62rem;font-weight:600;background:#f0ece6;
                       color:var(--maroon);padding:0.1rem 0.45rem;border-radius:20px;">${n.tag}</span>
        </div>
        <h3 style="font-size:0.92rem;font-weight:600;color:var(--maroon);
                   line-height:1.4;margin-bottom:0.3rem;">${n.title}</h3>
        <p style="font-size:0.8rem;color:var(--gray-text);line-height:1.55;">${n.desc}</p>
        ${n.link?`<a href="${n.link}" target="_blank"
          style="display:inline-block;margin-top:0.5rem;font-size:0.74rem;font-weight:600;
                 color:var(--maroon);text-decoration:none;border-bottom:1px solid var(--maroon);">
          ${n.linkText||'Read More →'}</a>`:''}
      </div>
    </div>`).join('');
}

function renderPager() {
  const total = Math.ceil(newsItems.length/PER_PAGE);
  if(total<=1){document.getElementById('pagination').innerHTML='';return;}
  let h=`<button class="page-btn" onclick="go(${page-1})" ${page===1?'disabled':''}>‹</button>`;
  for(let i=1;i<=total;i++)
    h+=`<button class="page-btn ${i===page?'active':''}" onclick="go(${i})">${i}</button>`;
  h+=`<button class="page-btn" onclick="go(${page+1})" ${page===total?'disabled':''}>›</button>`;
  document.getElementById('pagination').innerHTML=h;
}

function go(p){
  const total=Math.ceil(newsItems.length/PER_PAGE);
  if(p<1||p>total)return;
  page=p; renderNews(page); renderPager();
  document.getElementById('news-list').scrollIntoView({behavior:'smooth',block:'start'});
}
document.addEventListener("DOMContentLoaded", () => {
renderNews(1); renderPager();}
