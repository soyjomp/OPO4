const TEST_ID = "2026_c2_ubmodelc_test"; 
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


// Lògica del Test (Funcions iguals a les teves però adaptades)
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function renderTest() {
  const form = document.getElementById("test-form");
  form.innerHTML = "";
  let currentQuestions;
  const savedOrder = localStorage.getItem(`questions-${TEST_ID}`);
  
  if (savedOrder) {
    currentQuestions = JSON.parse(savedOrder);
  } else {
    currentQuestions = questions.map(q => ({
      ...q,
      answers: shuffleArray([...q.answers])
    }));
    currentQuestions = shuffleArray(currentQuestions);
    localStorage.setItem(`questions-${TEST_ID}`, JSON.stringify(currentQuestions));
  }

  const savedProgress = JSON.parse(localStorage.getItem(`progress-${TEST_ID}`)) || { respuestas: {} };

  currentQuestions.forEach((q, index) => {
    const questionWrapper = document.createElement("div");
    questionWrapper.className = "question";
    questionWrapper.id = `q-container-${index}`;

    const title = document.createElement("h3");
    title.textContent = `${index + 1}. ${q.question}`;
    questionWrapper.appendChild(title);

    const answersWrapper = document.createElement("div");
    answersWrapper.className = "answers";

    q.answers.forEach((a) => {
      const label = document.createElement("label");
      label.className = "answer";
      const input = document.createElement("input");
      input.type = "radio";
      input.name = `q${index}`;
      input.value = a.text;
      input.dataset.correct = a.correct;
      
      if (savedProgress.respuestas[`q${index}`] === a.text) {
        input.checked = true;
      }

      label.appendChild(input);
      label.appendChild(document.createTextNode(a.text));
      answersWrapper.appendChild(label);
    });

    questionWrapper.appendChild(answersWrapper);
    form.appendChild(questionWrapper);

    if (savedProgress.respuestas[`q${index}`]) {
        autoCheckAnswer(questionWrapper);
    }
  });

  updateResponseCounter();
}

function autoCheckAnswer(questionEl) {
  const labels = questionEl.querySelectorAll("label");
  labels.forEach(label => {
    const input = label.querySelector("input");
    if (input.checked) {
      label.classList.add(input.dataset.correct === "true" ? "correct" : "incorrect");
    } else {
      label.classList.remove("correct", "incorrect");
    }
  });
}

function updateResponseCounter() {
  const currentQuestions = JSON.parse(localStorage.getItem(`questions-${TEST_ID}`));
  if (!currentQuestions) return;
  const total = currentQuestions.length;
  
  const selectedInputs = document.querySelectorAll("input[type=radio]:checked");
  const selectedCount = selectedInputs.length;

  let correctCount = 0;
  let incorrectCount = 0;

  selectedInputs.forEach(input => {
    if (input.dataset.correct === "true") {
      correctCount++;
    } else {
      incorrectCount++;
    }
  });

  document.getElementById("response-counter").textContent = `📄 Respostes: ${selectedCount}/${total}`;
  document.getElementById("correct-counter").textContent = `✅ Encerts: ${correctCount}`;
  document.getElementById("incorrect-counter").textContent = `❌ Errors: ${incorrectCount}`;
  
  document.getElementById("progress").style.width = `${(selectedCount / total) * 100}%`;

  const respuestas = {};
  selectedInputs.forEach(input => { respuestas[input.name] = input.value; });
  localStorage.setItem(`progress-${TEST_ID}`, JSON.stringify({ total: total, respuestas: respuestas }));
}

function evaluateTest() {
  const questionsDOM = document.querySelectorAll(".question");
  let correctCount = 0;
  let total = questionsDOM.length;

  questionsDOM.forEach((questionEl) => {
    const inputCorrecto = questionEl.querySelector('input[data-correct="true"]');
    const inputMarcado = questionEl.querySelector('input:checked');
    questionEl.querySelectorAll("label").forEach(l => l.classList.remove("correct", "incorrect"));
    inputCorrecto.parentElement.classList.add("correct");

    if (inputMarcado) {
      if (inputMarcado.dataset.correct === "true") correctCount++;
      else inputMarcado.parentElement.classList.add("incorrect");
    }
  });

  const fallos = total - correctCount;
  const nota = ((correctCount / total) * 10).toFixed(2);
  const aprobado = fallos <= 5;

  const scoreDiv = document.getElementById("score");
  scoreDiv.style.display = "block";
  if (aprobado) {
    scoreDiv.innerHTML = `<h2>✅ MISSIÓ COMPLERTA</h2> Nota: ${nota}/10 <br> Errors: ${fallos}`;
    scoreDiv.style.background = "#dcfce7";
    scoreDiv.style.color = "#166534";
  } else {
    scoreDiv.innerHTML = `<h2>❌ GAME OVER</h2> Nota: ${nota}/10 <br> Errors: ${fallos} <br> (Màxim permès: 5)`;
    scoreDiv.style.background = "#fee2e2";
    scoreDiv.style.color = "#991b1b";
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function reiniciarTest() {
    if (confirm("Vols reiniciar la missió? L'ordre de les preguntes canviarà.")) {
        localStorage.removeItem(`questions-${TEST_ID}`);
        localStorage.removeItem(`progress-${TEST_ID}`);
        location.reload();
    }
}

document.addEventListener("change", (e) => {
  if (e.target.matches("input[type=radio]")) {
    updateResponseCounter();
    autoCheckAnswer(e.target.closest(".question"));
  }
});

document.getElementById("submit").addEventListener("click", evaluateTest);
window.addEventListener("DOMContentLoaded", renderTest);