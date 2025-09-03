/* ===========
  GK Quiz — 100 Questions (50 World + 50 Nepal)
  - Filter: Both / World / Nepal
  - Modes: Practice (instant feedback) or Test (score at end)
  - Random selection & order
============= */

// ---------- Data: 100 Questions ----------
/**
 * Each item:
 * { id, category: 'world'|'nepal', q: 'Question?', opts: ['A','B','C','D'], a: 0..3 }
 */
const DATA = [
  // ===== World (50) =====
  {id:1,category:'world',q:'What is the largest ocean on Earth?',opts:['Indian Ocean','Atlantic Ocean','Pacific Ocean','Arctic Ocean'],a:2},
  {id:2,category:'world',q:'Which is the smallest country in the world by area?',opts:['Monaco','Vatican City','San Marino','Liechtenstein'],a:1},
  {id:3,category:'world',q:'The Suez Canal connects the Mediterranean Sea with which sea?',opts:['Black Sea','Red Sea','Arabian Sea','Caspian Sea'],a:1},
  {id:4,category:'world',q:'UN Headquarters is located in:',opts:['Geneva','New York City','Vienna','Paris'],a:1},
  {id:5,category:'world',q:'Which is the longest river (commonly accepted in exams)?',opts:['Amazon','Yangtze','Nile','Mississippi'],a:2},
  {id:6,category:'world',q:'“Land of the Rising Sun” refers to:',opts:['China','Japan','South Korea','Thailand'],a:1},
  {id:7,category:'world',q:'Which desert is the largest hot desert?',opts:['Gobi','Kalahari','Sahara','Arabian'],a:2},
  {id:8,category:'world',q:'NATO was founded in which year?',opts:['1945','1947','1949','1951'],a:2},
  {id:9,category:'world',q:'Which planet has the most moons (known to date)?',opts:['Jupiter','Saturn','Uranus','Neptune'],a:1},
  {id:10,category:'world',q:'The currency of Japan is:',opts:['Won','Yuan','Yen','Ringgit'],a:2},
  {id:11,category:'world',q:'Which country is known as the “Land Down Under”?',opts:['New Zealand','Australia','South Africa','Argentina'],a:1},
  {id:12,category:'world',q:'Which strait separates Europe and Asia at Turkey?',opts:['Bering Strait','Strait of Gibraltar','Bosporus','Dardanelles'],a:2},
  {id:13,category:'world',q:'Which mountain is the highest above sea level?',opts:['K2','Kangchenjunga','Lhotse','Mount Everest'],a:3},
  {id:14,category:'world',q:'The Great Barrier Reef lies off the coast of:',opts:['India','Australia','Mexico','South Africa'],a:1},
  {id:15,category:'world',q:'Which continent has the most countries?',opts:['Africa','Europe','Asia','South America'],a:0},
  {id:16,category:'world',q:'Which is the deepest oceanic trench?',opts:['Java Trench','Kermadec Trench','Mariana Trench','Puerto Rico Trench'],a:2},
  {id:17,category:'world',q:'The “Cold War” primarily involved which two superpowers?',opts:['USA & China','USA & USSR','UK & Germany','France & USSR'],a:1},
  {id:18,category:'world',q:'Which country gifted the Statue of Liberty to the USA?',opts:['Italy','France','Spain','Netherlands'],a:1},
  {id:19,category:'world',q:'The EU (post-Brexit) has how many member states?',opts:['26','27','28','29'],a:1},
  {id:20,category:'world',q:'Which is the largest island in the world?',opts:['Borneo','Greenland','New Guinea','Madagascar'],a:1},
  {id:21,category:'world',q:'Which sea is the saltiest large water body?',opts:['Baltic Sea','Dead Sea','Red Sea','Mediterranean Sea'],a:1},
  {id:22,category:'world',q:'Which country is both in Europe and Asia (transcontinental)?',opts:['Portugal','Turkey','Ireland','Iceland'],a:1},
  {id:23,category:'world',q:'The headquarters of the WHO is in:',opts:['Geneva','Rome','Brussels','New York'],a:0},
  {id:24,category:'world',q:'Which city hosted the first modern Olympics (1896)?',opts:['Athens','Paris','London','Rome'],a:0},
  {id:25,category:'world',q:'Which is the largest freshwater lake by area?',opts:['Lake Superior','Lake Victoria','Lake Baikal','Caspian Sea'],a:0},
  {id:26,category:'world',q:'Which canal connects the Atlantic and Pacific oceans?',opts:['Corinth Canal','Kiel Canal','Panama Canal','Suez Canal'],a:2},
  {id:27,category:'world',q:'“Silicon Valley” is primarily associated with:',opts:['Automobiles','IT & Startups','Textiles','Oil'],a:1},
  {id:28,category:'world',q:'Angel Falls, the highest waterfall, is in:',opts:['Argentina','Venezuela','Brazil','Peru'],a:1},
  {id:29,category:'world',q:'Which country has the maple leaf on its flag?',opts:['Canada','Denmark','Finland','Norway'],a:0},
  {id:30,category:'world',q:'Which line divides the Earth into Northern and Southern Hemispheres?',opts:['Tropic of Cancer','Tropic of Capricorn','Equator','Prime Meridian'],a:2},
  {id:31,category:'world',q:'Taj Mahal is primarily built of:',opts:['Red sandstone','White marble','Granite','Limestone'],a:1},
  {id:32,category:'world',q:'Which country is the “Land of a Thousand Lakes”?',opts:['Finland','Sweden','Norway','Iceland'],a:0},
  {id:33,category:'world',q:'Which gas is most abundant in Earth’s atmosphere?',opts:['Oxygen','Carbon dioxide','Nitrogen','Argon'],a:2},
  {id:34,category:'world',q:'Which strait separates Africa and Europe?',opts:['Bosphorus','Gibraltar','Hormuz','Malacca'],a:1},
  {id:35,category:'world',q:'Mount Kilimanjaro is in:',opts:['Kenya','Tanzania','Ethiopia','Uganda'],a:1},
  {id:36,category:'world',q:'The Great Wall is in:',opts:['China','Mongolia','Japan','Korea'],a:0},
  {id:37,category:'world',q:'Which country is famous for pyramids at Giza?',opts:['Mexico','Egypt','Peru','Iraq'],a:1},
  {id:38,category:'world',q:'Which city is also called the “Big Apple”?',opts:['Los Angeles','Chicago','New York City','San Francisco'],a:2},
  {id:39,category:'world',q:'“Aurora Borealis” is commonly seen in which region?',opts:['Tropics','Mid-latitudes','Polar regions','Deserts'],a:2},
  {id:40,category:'world',q:'The world’s largest rainforest is in:',opts:['Congo Basin','Amazon Basin','Southeast Asia','Australia'],a:1},
  {id:41,category:'world',q:'Which canal is in Germany?',opts:['Suez','Kiel','Panama','Corinth'],a:1},
  {id:42,category:'world',q:'Which country has the most time zones?',opts:['Russia','USA','France (incl. territories)','Australia'],a:2},
  {id:43,category:'world',q:'The currency of the UK is:',opts:['Euro','Pound Sterling','Krone','Franc'],a:1},
  {id:44,category:'world',q:'Which river flows through Paris?',opts:['Rhine','Seine','Danube','Thames'],a:1},
  {id:45,category:'world',q:'Machu Picchu is in:',opts:['Chile','Peru','Bolivia','Ecuador'],a:1},
  {id:46,category:'world',q:'The Strait of Malacca lies between:',opts:['India & Sri Lanka','Malay Peninsula & Sumatra','Australia & Indonesia','Japan & Korea'],a:1},
  {id:47,category:'world',q:'Which is the largest continent by area?',opts:['Africa','Asia','North America','Antarctica'],a:1},
  {id:48,category:'world',q:'Which country is known for the city of “Petra”?',opts:['Jordan','Morocco','Iran','Iraq'],a:0},
  {id:49,category:'world',q:'The Prime Meridian passes through:',opts:['Berlin','Paris','Greenwich','Rome'],a:2},
  {id:50,category:'world',q:'Which lake is the deepest in the world?',opts:['Tanganyika','Baikal','Vostok','Crater Lake'],a:1},

  // ===== Nepal (50) =====
  {id:51,category:'nepal',q:'What is the capital of Nepal?',opts:['Pokhara','Kathmandu','Lalitpur','Biratnagar'],a:1},
  {id:52,category:'nepal',q:'Which is the national flower of Nepal?',opts:['Lotus','Sunflower','Rhododendron (Lali Gurans)','Magnolia'],a:2},
  {id:53,category:'nepal',q:'Nepal’s currency is:',opts:['Rupee (NPR)','Taka','Rial','Rupee (INR)'],a:0},
  {id:54,category:'nepal',q:'Which is Nepal’s highest peak?',opts:['K2','Kangchenjunga','Mount Everest','Lhotse'],a:2},
  {id:55,category:'nepal',q:'Nepal’s flag is unique because it is:',opts:['Square','Triangular (double-pennon)','Circular','Rectangular'],a:1},
  {id:56,category:'nepal',q:'Who unified modern Nepal?',opts:['Prithvi Narayan Shah','Jung Bahadur Rana','B.P. Koirala','King Tribhuvan'],a:0},
  {id:57,category:'nepal',q:'The Sugauli Treaty was signed in:',opts:['1768','1816','1846','1951'],a:1},
  {id:58,category:'nepal',q:'Lumbini, a UNESCO site, is famous as the birthplace of:',opts:['Guru Nanak','Mahavira','Gautam Buddha','Adi Shankaracharya'],a:2},
  {id:59,category:'nepal',q:'Which is the largest lake in Nepal?',opts:['Rara Lake','Phewa Lake','Tilicho Lake','Begnas Lake'],a:0},
  {id:60,category:'nepal',q:'Which river forms the deepest gorge in Nepal?',opts:['Bagmati','Karnali','Kali Gandaki','Koshi'],a:2},
  {id:61,category:'nepal',q:'Official language of Nepal is:',opts:['Maithili','Nepali','Newari','Tharu'],a:1},
  {id:62,category:'nepal',q:'How many provinces are there in Nepal?',opts:['5','6','7','8'],a:2},
  {id:63,category:'nepal',q:'Rara Lake lies in which province (as per current division)?',opts:['Karnali Province','Gandaki Province','Lumbini Province','Sudurpashchim Province'],a:0},
  {id:64,category:'nepal',q:'The largest district by area in Nepal is:',opts:['Dolpa','Mustang','Humla','Gorkha'],a:0},
  {id:65,category:'nepal',q:'The smallest district by area in Nepal is often cited as:',opts:['Bhaktapur','Lalitpur','Tanahun','Kapilvastu'],a:0},
  {id:66,category:'nepal',q:'Which is the longest river system of Nepal?',opts:['Koshi','Gandaki','Karnali','Bagmati'],a:2},
  {id:67,category:'nepal',q:'Pashupatinath Temple is dedicated to:',opts:['Vishnu','Shiva','Buddha','Ganesha'],a:1},
  {id:68,category:'nepal',q:'The traditional Nepali calendar widely used is:',opts:['Gregorian','Hijri','Bikram Sambat (B.S.)','Thai Solar'],a:2},
  {id:69,category:'nepal',q:'Janakpur is famous for the:',opts:['Manakamana Temple','Janaki Temple','Muktinath Temple','Halesi Mahadev'],a:1},
  {id:70,category:'nepal',q:'Rani Mahal (built on Kali Gandaki) is in:',opts:['Palpa','Kaski','Chitwan','Jhapa'],a:0},
  {id:71,category:'nepal',q:'Which is the highest altitude lake often cited in Nepal?',opts:['Phewa','Rara','Tilicho','Shey Phoksundo'],a:2},
  {id:72,category:'nepal',q:'National bird of Nepal is:',opts:['Himalayan Monal (Danphe)','Sarus Crane','Kalij Pheasant','Crow'],a:0},
  {id:73,category:'nepal',q:'National animal of Nepal is:',opts:['Cow','Tiger','Snow Leopard','One-horned Rhino'],a:0},
  {id:74,category:'nepal',q:'The Terai region is primarily known for:',opts:['High Himalaya','Mid-hills','Fertile plains','Arid plateau'],a:2},
  {id:75,category:'nepal',q:'Which city is famous for lakes and tourism in Nepal?',opts:['Birgunj','Pokhara','Biratnagar','Nepalgunj'],a:1},
  {id:76,category:'nepal',q:'Which valley is the administrative hub of Nepal?',opts:['Kathmandu Valley','Terai Belt','Karnali Basin','Arun Valley'],a:0},
  {id:77,category:'nepal',q:'Which national park is famous for one-horned rhinoceros?',opts:['Bardia NP','Chitwan NP','Shivapuri N.P.','Langtang N.P.'],a:1},
  {id:78,category:'nepal',q:'Sagarmatha National Park is named after:',opts:['K2','Everest','Annapurna','Dhaulagiri'],a:1},
  {id:79,category:'nepal',q:'Halesi is a pilgrimage site in which province?',opts:['Province 1 (Koshi)','Gandaki','Lumbini','Madhesh'],a:0},
  {id:80,category:'nepal',q:'Which festival is known as the festival of lights in Nepal?',opts:['Dashain','Tihar (Deepawali)','Holi','Maghe Sankranti'],a:1},
  {id:81,category:'nepal',q:'Which is the second largest city by population after Kathmandu Valley region centers?',opts:['Pokhara','Biratnagar','Lalitpur','Birgunj'],a:1},
  {id:82,category:'nepal',q:'Which pass connects Nepal and China (Tibet) historically?',opts:['Khyber Pass','Nathu La','Kodari Highway (Arniko)','Bolān Pass'],a:2},
  {id:83,category:'nepal',q:'Which temple is on a hill known as “Monkey Temple”?',opts:['Swyambhunath','Bindhyabasini','Dakshinkali','Guhyeshwari'],a:0},
  {id:84,category:'nepal',q:'Which airport is the main international gateway to Nepal?',opts:['Pokhara Int’l','Gautam Buddha Int’l','Tribhuvan Int’l','Biratnagar'],a:2},
  {id:85,category:'nepal',q:'Kanyam (Ilam) is famous for:',opts:['Tea gardens','Oil fields','Salt mines','Gold'],a:0},
  {id:86,category:'nepal',q:'The Rana regime in Nepal began in:',opts:['1816','1846','1950','2008'],a:1},
  {id:87,category:'nepal',q:'Which city is known as the gateway to Mount Everest treks?',opts:['Lukla','Jomsom','Namche Bazaar','Dhunche'],a:0},
  {id:88,category:'nepal',q:'The “Naag Panchami” festival involves worship of:',opts:['Sun','Snakes','Trees','Rivers'],a:1},
  {id:89,category:'nepal',q:'Which place is known for the “Rara National Park”?',opts:['Mugu','Kanchanpur','Bara','Bhojpur'],a:0},
  {id:90,category:'nepal',q:'Karnali River originates in:',opts:['Nepal Himalaya','Tibetan Plateau','Aravalli Range','Western Ghats'],a:1},
  {id:91,category:'nepal',q:'Which site is famous for Shaligram stones?',opts:['Bagmati','Karnali','Kali Gandaki','Seti'],a:2},
  {id:92,category:'nepal',q:'Gurkha (Gorkha) soldiers historically are from:',opts:['Eastern Terai','Gandaki region hills','Karnali plains','Kathmandu Valley only'],a:1},
  {id:93,category:'nepal',q:'Which is the tallest peak entirely within Nepal after Everest’s border peak status?',opts:['Annapurna I','Dhaulagiri I','Manaslu','Makalu'],a:1},
  {id:94,category:'nepal',q:'Which city hosts the “World Peace Pagoda” overlooking a lake?',opts:['Pokhara','Butwal','Dharan','Hetauda'],a:0},
  {id:95,category:'nepal',q:'Which is a UNESCO World Heritage Site in Kathmandu Valley?',opts:['Janaki Temple','Lalitpur Durbar Square','Rara Lake','Shey Gompa'],a:1},
  {id:96,category:'nepal',q:'Which river flows through Kathmandu Valley?',opts:['Bagmati','Koshi','Karnali','Trishuli only'],a:0},
  {id:97,category:'nepal',q:'The administrative “Gaunpalika” refers to:',opts:['Province','Metropolitan city','Rural municipality','Federal ministry'],a:2},
  {id:98,category:'nepal',q:'Which festival is the biggest in Nepal (widely celebrated)?',opts:['Dashain','Teej','Chhath','Buddha Jayanti'],a:0},
  {id:99,category:'nepal',q:'Which is the industrial city near India’s border in Parsa?',opts:['Birgunj','Damak','Butwal','Dhangadhi'],a:0},
  {id:100,category:'nepal',q:'Which protected area is famous for blue sheep and snow leopard?',opts:['Langtang N.P.','Annapurna Conservation Area','Chitwan N.P.','Shivapuri N.P.'],a:1},
];

// ---------- Helpers ----------
const $ = (s, root=document) => root.querySelector(s);
const $all = (s, root=document) => Array.from(root.querySelectorAll(s));
const shuffle = arr => arr.map(v=>[Math.random(),v]).sort((a,b)=>a[0]-b[0]).map(v=>v[1]);
const clamp = (n,min,max)=>Math.max(min,Math.min(max,n));

// ---------- State ----------
let state = {
  pool: [],
  quiz: [],
  answers: {}, // index -> selected option
  idx: 0,
  mode: 'practice', // 'practice' | 'test'
};

// ---------- UI Elements ----------
const catButtons = $all('.segmented .seg[data-cat]');
const modeButtons = $all('.segmented .seg[data-mode]');
const countSel = $('#questionCount');
const startBtn = $('#startBtn');
const restartBtn = $('#restartBtn');
const quizSec = $('#quiz');
const resultSec = $('#result');
const qText = $('#qText');
const optionsList = $('#options');
const progress = $('#progress');
const meta = $('#meta');
const prevBtn = $('#prevBtn');
const nextBtn = $('#nextBtn');
const submitBtn = $('#submitBtn');
const scoreLine = $('#scoreLine');
const review = $('#review');
const tryAgain = $('#tryAgain');

// ---------- Category & Mode selection ----------
let currentCategory = 'both';
catButtons.forEach(btn=>{
  btn.addEventListener('click', ()=>{
    catButtons.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    currentCategory = btn.dataset.cat;
  });
});

modeButtons.forEach(btn=>{
  btn.addEventListener('click', ()=>{
    modeButtons.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    state.mode = btn.dataset.mode;
  });
});

// ---------- Start / Restart ----------
startBtn.addEventListener('click', ()=>{
  const n = parseInt(countSel.value,10);
  startQuiz(currentCategory, n, state.mode);
});

restartBtn.addEventListener('click', ()=>{
  const n = parseInt(countSel.value,10);
  startQuiz(currentCategory, n, state.mode);
});

tryAgain.addEventListener('click', ()=>{
  resultSec.classList.add('hidden');
  quizSec.classList.add('hidden');
  restartBtn.disabled = false;
  window.scrollTo({top:0, behavior:'smooth'});
});

// ---------- Core ----------
function startQuiz(category, n, mode){
  // build pool
  let pool = DATA;
  if(category === 'world') pool = DATA.filter(d=>d.category==='world');
  else if(category === 'nepal') pool = DATA.filter(d=>d.category==='nepal');

  // sample n
  const sampled = shuffle(pool).slice(0, Math.min(n, pool.length));
  state = {
    pool,
    quiz: sampled.map((q,i)=>({...q, order:i})),
    answers: {},
    idx: 0,
    mode
  };

  // UI reset
  quizSec.classList.remove('hidden');
  resultSec.classList.add('hidden');
  restartBtn.disabled = false;
  submitBtn.disabled = false;
  prevBtn.disabled = true;
  nextBtn.disabled = state.quiz.length <= 1;

  renderQuestion();
  updateProgress();
}

function renderQuestion(){
  const item = state.quiz[state.idx];
  if(!item) return;

  qText.textContent = `${state.idx+1}. ${item.q}`;
  optionsList.innerHTML = '';
  item.opts.forEach((opt, i)=>{
    const li = document.createElement('li');
    li.textContent = opt;
    if(state.answers[state.idx] === i) li.classList.add('selected');

    li.addEventListener('click', ()=>{
      // select
      state.answers[state.idx] = i;
      // practice feedback
      if(state.mode === 'practice'){
        $all('li', optionsList).forEach(li2=>li2.className='');
        if(i === item.a){
          li.classList.add('correct');
        }else{
          li.classList.add('incorrect');
          // also highlight correct
          const correct = $all('li', optionsList)[item.a];
          if(correct) correct.classList.add('correct');
        }
      }else{
        // test mode — just mark selection
        $all('li', optionsList).forEach(li2=>li2.classList.remove('selected'));
        li.classList.add('selected');
      }
      updateNavButtons();
    });

    optionsList.appendChild(li);
  });

  meta.textContent = `Category: ${capitalize(item.category)} • Mode: ${capitalize(state.mode)}`;
  updateNavButtons();
}

function updateNavButtons(){
  prevBtn.disabled = state.idx === 0;
  nextBtn.disabled = state.idx >= state.quiz.length-1;
  submitBtn.disabled = Object.keys(state.answers).length < state.quiz.length;
}

function updateProgress(){
  const pct = ((state.idx+1) / state.quiz.length) * 100;
  progress.style.setProperty('--pct', `${pct}%`);
  // animate via width on ::after
  progress.style.setProperty('--pw', `${pct}%`);
  progress.style.backgroundSize = `${pct}% 100%`;
  progress.style.position = 'relative';
  progress.style.setProperty('--w', `${pct}%`);
  progress.style.setProperty('--v', 1);
  // direct set on ::after
  progress.style.setProperty('counter-reset', pct); // dummy
  progress.style.setProperty('--progress', pct);
  progress.style.setProperty('--prog', pct);
  progress.style.setProperty('--p', pct);
  progress.style.setProperty('--n', pct);
  progress.setAttribute('data-progress', `${Math.round(pct)}%`);
  progress.style.setProperty('--width', `${pct}%`);
  // Hack: update pseudo via inline style by changing width on overlay
  progress.style.setProperty('--after-width', `${pct}%`);
  progress.style.setProperty('--bar', `${pct}%`);
  progress.style.setProperty('--done', `${pct}%`);
  // Instead: manipulate ::after width via CSS variable not supported; fallback: set a child?
  // We'll just set an inner div:
  if(!progress.firstElementChild){
    const inner = document.createElement('div');
    inner.style.height='100%';
    inner.style.width = `${pct}%`;
    inner.style.background='linear-gradient(90deg, var(--accent), var(--accent-2))';
    inner.style.transition='width .25s ease';
    progress.appendChild(inner);
  }else{
    progress.firstElementChild.style.width = `${pct}%`;
  }
}

// Nav events
prevBtn.addEventListener('click', ()=>{
  state.idx = clamp(state.idx-1, 0, state.quiz.length-1);
  renderQuestion();
  updateProgress();
  window.scrollTo({top:0, behavior:'smooth'});
});
nextBtn.addEventListener('click', ()=>{
  state.idx = clamp(state.idx+1, 0, state.quiz.length-1);
  renderQuestion();
  updateProgress();
  window.scrollTo({top:0, behavior:'smooth'});
});

submitBtn.addEventListener('click', ()=>{
  // compute score
  const score = state.quiz.reduce((acc, q, i)=>{
    return acc + (state.answers[i] === q.a ? 1 : 0);
  }, 0);
  const total = state.quiz.length;
  const pct = Math.round((score/total)*100);

  quizSec.classList.add('hidden');
  resultSec.classList.remove('hidden');
  scoreLine.textContent = `You scored ${score} / ${total} (${pct}%).`;

  // build review
  review.innerHTML = '';
  state.quiz.forEach((q, i)=>{
    const div = document.createElement('div');
    div.className = 'review-item';
    const correct = state.answers[i] === q.a;
    div.innerHTML = `
      <div>
        <span class="badge ${correct?'ok':'no'}">${correct?'Correct':'Incorrect'}</span>
        <strong>Q${i+1}.</strong> ${q.q}
      </div>
      <div style="margin-top:6px;">
        <em>Your answer:</em> ${q.opts[state.answers[i]] ?? '—'}
      </div>
      <div>
        <em>Correct answer:</em> ${q.opts[q.a]}
      </div>
      <div style="color:var(--muted); font-size:13px; margin-top:4px;">
        Category: ${capitalize(q.category)}
      </div>
    `;
    review.appendChild(div);
  });

  window.scrollTo({top:0, behavior:'smooth'});
});

// ---------- Utils ----------
function capitalize(s){ return s.charAt(0).toUpperCase()+s.slice(1); }

// Initialize landing state
(function init(){
  // nothing else for now
})();
