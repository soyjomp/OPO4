const TEST_ID = "2026_c2_ubmodelc"; 
const questions = [
  {
    number: 1,
    question: "Quina és la finalitat principal del Portal de la Transparència?",
    answers: [
      { text: "Permetre la presentació de sol·licituds presencials", correct: false },
      { text: "Centralitzar la informació publicada per garantir la transparència de l’activitat pública", correct: true },
      { text: "Publicar únicament la normativa vigent", correct: false },
      { text: "Gestionar els expedients administratius interns", correct: false }
    ]
  },
  {
    number: 3,
    question: "La competència administrativa és, segons l’art. 8.1 de la Llei 40/2015 per norma general:",
    answers: [
      { text: "Renunciable en qualsevol moment.", correct: false },
      { text: "Irrenunciable i s'ha d'exercir pels òrgans que la tinguin atribuïda com a pròpia.", correct: true },
      { text: "Cedible mitjançant contracte privat.", correct: false },
      { text: "Opcional segons el criteri del titular de l'òrgan.", correct: false }
    ]
  },
  {
    number: 10,
    question: "Quin és el règim general del silenci administratiu en procediments iniciats a sol·licitud de l’interessat?",
    answers: [
      { text: "Silenci negatiu", correct: false },
      { text: "Silenci positiu", correct: true },
      { text: "No produeix efectes", correct: false },
      { text: "Depèn sempre de la voluntat de l’Administració", correct: false }
    ]
  },
  {
    number: 11,
    question: "Com s’han de formalitzar els actes administratius amb caràcter general?",
    answers: [
      { text: "Verbalment, llevat dels casos expressament previstos", correct: false },
      { text: "Per escrit", correct: true },
      { text: "Sempre mitjançant publicació oficial", correct: false },
      { text: "Mitjançant resolució oral ratificada posteriorment", correct: false }
    ]
  },
  {
    number: 14,
    question: "Segons l’article 16 del RGPD, què pot exigir l’interessat mitjançant el dret de rectificació?",
    answers: [
      { text: "Actualitzar les dades cada any.", correct: false },
      { text: "Rectificar dades inexactes sense demora.", correct: true },
      { text: "Canviar l’ordre del cognoms, sense el consentiment del pare.", correct: false },
      { text: "Limitar l’accés del responsable al tractament.", correct: false }
    ]
  },
  {
    number: 15,
    question: "D’acord amb l’art. 9 de la Llei 19/2014 de transparència, cal publicar informació relativa a:",
    answers: [
      { text: "Els procediments disciplinaris interns", correct: false },
      { text: "L’estructura organitzativa i les funcions dels òrgans", correct: true },
      { text: "Només els càrrecs electes", correct: false },
      { text: "Exclusivament els òrgans col·legiats", correct: false }
    ]
  },
  {
    number: 20,
    question: "Segons l’art. 31.2 de la Llei 39/2015, com es computen els terminis si es presenta un document en dia inhàbil?",
    answers: [
      { text: "Es considera presentat a la primera hora del primer dia hàbil següent.", correct: true },
      { text: "El document es rebutja automàticament.", correct: false },
      { text: "Es considera presentat el mateix dia inhàbil.", correct: false },
      { text: "El termini comença des del moment de la signatura.", correct: false }
    ]
  },
  {
    number: 21,
    question: "Segons l’art. 43.2 Llei 39/2015, què passa si l'interessat no accedeix a la notificació transcorreguts 10 dies naturals?",
    answers: [
      { text: "La notificació s'anul·la.", correct: false },
      { text: "S'entén que la notificació ha estat rebutjada i es continua el procediment.", correct: true },
      { text: "L'Administració ha d'enviar obligatòriament una carta en paper.", correct: false },
      { text: "Es prorroga el termini 10 dies més.", correct: false }
    ]
  },
  {
    number: 22,
    question: "Segons l’article 4 del Reglament (UE) 2016/679 del Parlament Europeu i del Consell, de 27 d’abril del 2016, què són les dades personals?",
    answers: [
      { text: "Informació que identifica o pot identificar una persona física.", correct: true },
      { text: "Només dades econòmiques que surten a la declaració d’hisenda.", correct: false },
      { text: "Informació sobre empreses i clients.", correct: false },
      { text: "Només identificadors en línia.", correct: false }
    ]
  },
  {
    number: 27,
    question: "D’acord amb l’EBEP, els empleats públics tenen dret a la promoció professional:",
    answers: [
      { text: "Sí, tots els empleats públics tenen dret a la promoció professional", correct: true },
      { text: "Sí, només els funcionaris de carrera i personal laboral fix.", correct: false },
      { text: "Sí, només els funcionaris.", correct: false },
      { text: "Sí, tots els funcionaris de carrera.", correct: false }
    ]
  },
  {
    number: 28,
    question: "D’acord el que preveu l’article 88 del Decret Legislatiu 1/1997, de 31 d’octubre, pel qual s’aprova la refosa en un Text únic dels preceptes de determinats textos legals vigents a Catalunya en matèria de funció pública, un funcionari es declarat en situació de serveis especials quan:",
    answers: [
      { text: "Quan sigui nomenat president d'una empresa amb capital públic.", correct: false },
      { text: "Sempre que ocupi un càrrec electiu en una administració local.", correct: false },
      { text: "Quan sigui nomenat per ocupar un càrrec polític a la Generalitat.", correct: true },
      { text: "Les respostes a, b i c són correctes.", correct: false }
    ]
  },
  {
    number: 29,
    question: "Segons la Llei de funció pública de Catalunya, els llocs reservats a funcionaris s’han de proveir per:",
    answers: [
      { text: "Concurs, concurs oposició o lliure designació.", correct: false },
      { text: "Concurs o lliure designació.", correct: true },
      { text: "Concurs, lliure designació o concurs eventual.", correct: false },
      { text: "Proves selectives, concurs o lliure designació.", correct: false }
    ]
  },
  {
    number: 30,
    question: "Quina afirmació descriu correctament què és una signatura electrònica?",
    answers: [
      { text: "Un codi numèric que només poden utilitzar les administracions públiques.", correct: false },
      { text: "Un conjunt de dades en paper que una persona utilitza per identificar-se.", correct: false },
      { text: "Dades en format digital annexes a altres dades electròniques que una persona utilitza per signar.", correct: true },
      { text: "Un sistema exclusiu per validar documents mitjançant empremta dactilar.", correct: false }
    ]
  },
  {
    number: 33,
    question: "Quina acció busca donar suport directe a col·lectius feministes i LGTBIQ+?",
    answers: [
      { text: "Revisió de biblioteques digitals.", correct: false },
      { text: "Creació del grup de treball d’estudiantat.", correct: false },
      { text: "Donar suport i recursos als col·lectius feministes i LGTBIQ+.", correct: true },
      { text: "Implantar lavabos unipersonals.", correct: false }
    ]
  },
  {
    number: 34,
    question: "D’acord amb l’article 38 de la llei 31/1995, de 8 de novembre, de prevenció de riscos laborals, el Comitè de seguretat i salut, com a òrgan de participació e l’empresa dels treballadors en matèria de prevenció de riscos laborals:",
    answers: [
      { text: "És un òrgan paritari entre empresa i treballadors.", correct: true },
      { text: "Ha d’estar format per un mínim de 10 treballadors.", correct: false },
      { text: "Ha d’estar format exclusivament pels delegats de prevenció.", correct: false },
      { text: "Ha d’estar format pels delegats sindicals.", correct: false }
    ]
  },
  {
    number: 36,
    question: "D’acord amb l’article 16 de la llei 31/1995, de 8 de novembre, de prevenció de riscos laborals, què ha d’incloure un pla de prevenció de riscos laborals?",
    answers: [
      { text: "L’estructura organitzativa, les responsabilitats, les funcions, les pràctiques, els procediments, els processos, el pressupost general de la institució i els recursos necessaris per realitzar l’acció de prevenció de riscos a la institució.", correct: false },
      { text: "L’estructura organitzativa, les responsabilitats, les funcions, les pràctiques, els procediments, els processos, els plànols dels edificis i els recursos necessaris per realitzar l’acció de prevenció de riscos a la institució.", correct: false },
      { text: "L’estructura organitzativa, les responsabilitats, les funcions, les pràctiques, els procediments, els processos d’accés als llocs de treball i els recursos necessaris per realitzar l’acció de prevenció de riscos a la institució.", correct: false },
      { text: "L’estructura organitzativa, les responsabilitats, les funcions, les pràctiques, els procediments, els processos i els recursos necessaris per realitzar l’acció de prevenció de riscos a la institució.", correct: true }
    ]
  },
  {
    number: 37,
    question: "D’acord el que preveu l’article 50 del Decret Legislatiu 1/1997, de 31 d’octubre, pel qual s’aprova la refosa en un Text únic dels preceptes de determinats textos legals vigents a Catalunya en matèria de funció pública, la selecció per concurs",
    answers: [
      { text: "És el sistema habitual per adquirir la condició de funcionari.", correct: false },
      { text: "És un sistema que només es pot utilitzar amb caràcter excepcional.", correct: true },
      { text: "És el sistema habitual per proveir places especials del Grup A1.", correct: false },
      { text: "És un sistema excepcional per a places del grup C2.", correct: false }
    ]
  },
  {
    number: 38,
    question: "Quin instrument internacional és especialment rellevant per abordar les violències masclistes i orientar els protocols universitaris de prevenció i reparació?",
    answers: [
      { text: "Convenció sobre l’Eliminació de Totes les Formes de Discriminació contra la Dona (CEDAW)", correct: false },
      { text: "Principis de Yogyakarta.", correct: false },
      { text: "Conveni d’Istanbul (2011).", correct: true },
      { text: "Directiva 2006/54/CE.", correct: false }
    ]
  },
  {
    number: 40,
    question: "L’adreça electrònica disponible per als ciutadans a través de les xarxes de telecomunicacions, la titularitat, gestió i administració de la qual correspon a una Administració pública es denomina:",
    answers: [
      { text: "Canal electrònic.", correct: false },
      { text: "Portal electrònic.", correct: false },
      { text: "Seu electrònica.", correct: true },
      { text: "Direcció electrònica.", correct: false }
    ]
  },
  {
    number: 42,
    question: "Segons la Llei 19/2014, el Portal de la Transparència ha de garantir que la informació sigui:",
    answers: [
      { text: "Només accessible al personal funcionari.", correct: false },
      { text: "Reservada i confidencial.", correct: false },
      { text: "Accessible de manera fàcil, clara i comprensible.", correct: true },
      { text: "Disponible exclusivament mitjançant sol·licitud prèvia.", correct: false }
    ]
  },
  {
    number: 43,
    question: "D’acord amb l’article 19 de la llei 31/1995, de 8 de novembre, de prevenció de riscos laborals",
    answers: [
      { text: "L’empresari ha de garantir que cada treballador rebi una formació teòrica i pràctica, en matèria preventiva, tant en el moment de la seva contractació com quan es produeixin canvis en les funcions que desenvolupi o s’introdueixin noves tecnologies o canvis en els equips de treball. Aquesta formació s’haurà d’impartir sempre fora de la jornada de treball.", correct: false },
      { text: "L’empresari ha de garantir que cada treballador rebi una formació teòrica i pràctica, en matèria preventiva, tant en el moment de la seva contractació com quan es produeixin canvis en les funcions que desenvolupi o s’introdueixin noves tecnologies o canvis en els equips de treball. Aquesta formació s’haurà d’impartir sempre que sigui possible, dintre de la jornada de treball", correct: false },
      { text: "L’empresari ha de garantir que cada treballador rebi una formació teòrica i pràctica, en matèria preventiva, en el moment de la seva contractació, si bé no és imprescindible quan s’introdueixin noves tecnologies o canvis en els equips de treball. Aquesta formació s’haurà d’impartir sempre fora de la jornada de treball.", correct: false },
      { text: "L’empresari ha de garantir que cada treballador rebi una formació teòrica i pràctica, en matèria preventiva, en el moment de la seva contractació, si bé no és imprescindible quan s’introdueixin noves tecnologies o canvis en els equips de treball. Aquesta formació s’haurà d’impartir, sempre que sigui possible, dintre de la jornada de treball.", correct: true }
    ]
  },
  {
    number: 45,
    question: "Segons la llei 39/2015, quin element de l'acte administratiu fa referència a l'òrgan que té la potestat legal per dictar-lo?",
    answers: [
      { text: "L'element objectiu.", correct: false },
      { text: "L'element subjectiu.", correct: true },
      { text: "L'element formal.", correct: false },
      { text: "L'element causal.", correct: false }
    ]
  },
];

// -------------------------
// UTIL: SHUFFLE
// -------------------------
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// -------------------------
// ESTADO GLOBAL
// -------------------------
let activeQuestions = [];
let currentIndex = 0;
let correctCount = 0;
let incorrectCount = 0;
let hasAnswered = false;
let originalTotal = 0; // 🔥 NUEVO: Guarda el total real del test al empezar

const REAPEAR_OFFSET = 3;

// -------------------------
// DOM
// -------------------------
const quizCard = document.getElementById('quiz-card');
const themeHeaderContainer = document.getElementById('theme-header-container');
const globalThemeTitle = document.getElementById('global-theme-title');
const resultsCard = document.getElementById('results-card');
const scoreboard = document.getElementById('scoreboard');

const displayTestId = document.getElementById('display-test-id');
const currentIdxTxt = document.getElementById('current-index');
const totalQuestionsTxt = document.getElementById('total-questions');
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const topRestartBtn = document.getElementById('top-restart-btn');

const liveCorrect = document.getElementById('live-correct');
const liveIncorrect = document.getElementById('live-incorrect');
const liveRemaining = document.getElementById('live-remaining');

// -------------------------
// INIT
// -------------------------
function initTest(forceRestart = false) {

  const saved = loadProgress();

  // 🔥 CONTINUAR TEST
  if (!forceRestart && saved) {
    showUI();
    showQuestion();
    return;
  }

  // 🔥 REINICIO TOTAL
  currentIndex = 0;
  correctCount = 0;
  incorrectCount = 0;

  activeQuestions = shuffleArray(questions).map(q => ({
    ...q,
    answers: shuffleArray(q.answers)
  }));
  
  // 🔥 NUEVO: Guardamos cuántas preguntas tiene el test original antes de cualquier fallo
  originalTotal = activeQuestions.length;

  saveProgress();

  showUI();
  showQuestion();
}

// -------------------------
// UI BASE
// -------------------------
function showUI() {
  displayTestId.textContent = TEST_ID;

  quizCard.style.display = 'block';
  themeHeaderContainer.style.display = 'block';
  scoreboard.style.display = 'flex';
  resultsCard.style.display = 'none';

  updateScoreboard();
}

// -------------------------
// SCOREBOARD
// -------------------------
function updateScoreboard() {
  // 🔥 FIJADO: Ahora muestra siempre el total inicial fijo
  totalQuestionsTxt.textContent = originalTotal; 
  liveCorrect.textContent = correctCount;
  liveIncorrect.textContent = incorrectCount;

  // 🔥 FIJADO: Calculamos el progreso real sobre el total original.
  // "currentIndex" representa cuántas preguntas del flujo principal ha ido superando.
  let answered = currentIndex + (hasAnswered ? 1 : 0);
  
  // Las restantes bajan de manera estricta basándose en el total original.
  let remaining = originalTotal - answered;

  liveRemaining.textContent = Math.max(0, remaining);
}

// -------------------------
// PREGUNTA
// -------------------------
function showQuestion() {
  hasAnswered = false;
  nextBtn.style.display = 'none';
  answersContainer.innerHTML = '';

  const q = activeQuestions[currentIndex];

  currentIdxTxt.textContent = currentIndex + 1;
  questionText.textContent = q.question;
  globalThemeTitle.textContent = q.theme || "TEMA GENERAL";

  q.answers.forEach(ans => {
    const btn = document.createElement('button');
    btn.classList.add('answer-btn');
    btn.textContent = ans.text;
    btn.dataset.correct = ans.correct;
    btn.onclick = selectAnswer;
    answersContainer.appendChild(btn);
  });

  updateScoreboard();
}

// -------------------------
// RESPUESTA
// -------------------------
function selectAnswer(e) {
  if (hasAnswered) return;
  hasAnswered = true;

  const btn = e.target;
  const correct = btn.dataset.correct === 'true';

  if (correct) {
    btn.classList.add('correct');
    correctCount++;
  } else {
    btn.classList.add('incorrect');
    incorrectCount++;

    Array.from(answersContainer.children).forEach(b => {
      if (b.dataset.correct === 'true') b.classList.add('correct');
    });

    // 🔥 REPASO ERROR (Se sigue insertando al final para repasar, pero ya no rompe los contadores)
    const duplicated = {
      ...activeQuestions[currentIndex],
      answers: shuffleArray(activeQuestions[currentIndex].answers)
    };

    const target = currentIndex + REAPEAR_OFFSET + 1;

    if (target >= activeQuestions.length) {
      activeQuestions.push(duplicated);
    } else {
      activeQuestions.splice(target, 0, duplicated);
    }
  }

  Array.from(answersContainer.children).forEach(b => b.disabled = true);

  updateScoreboard();
  nextBtn.style.display = 'block';

  saveProgress();
}

// -------------------------
// SIGUIENTE
// -------------------------
nextBtn.onclick = () => {
  currentIndex++;

  if (currentIndex >= activeQuestions.length) {
    showResults();
    return;
  }

  saveProgress();
  showQuestion();
};

// -------------------------
// RESULTADOS
// -------------------------
function showResults() {
  clearProgress();

  quizCard.style.display = 'none';
  themeHeaderContainer.style.display = 'none';
  scoreboard.style.display = 'none';
  resultsCard.style.display = 'block';

  document.getElementById('final-correct').textContent = correctCount;
  document.getElementById('final-incorrect').textContent = incorrectCount;
}

// -------------------------
// REINICIO
// -------------------------
restartBtn.onclick = () => {
  clearProgress();
  initTest(true);
};

topRestartBtn.onclick = () => {
  clearProgress();
  initTest(true);
};

// -------------------------
// STORAGE
// -------------------------
function saveProgress() {
  localStorage.setItem(
    `test_progress_${TEST_ID}`,
    JSON.stringify({
      currentIndex,
      correctCount,
      incorrectCount,
      activeQuestions,
      originalTotal // 🔥 NUEVO: Guardamos el total original en LocalStorage
    })
  );
}

function loadProgress() {
  const saved = localStorage.getItem(`test_progress_${TEST_ID}`);
  if (!saved) return false;

  const data = JSON.parse(saved);

  currentIndex = data.currentIndex;
  correctCount = data.correctCount;
  incorrectCount = data.incorrectCount;
  activeQuestions = data.activeQuestions;
  originalTotal = data.originalTotal || data.activeQuestions.length; // 🔥 NUEVO: Recuperamos el total original

  return true;
}

function clearProgress() {
  localStorage.removeItem(`test_progress_${TEST_ID}`);
}

// -------------------------
// START (IMPORTANTE)
// -------------------------
document.addEventListener("DOMContentLoaded", () => {
  initTest();
});