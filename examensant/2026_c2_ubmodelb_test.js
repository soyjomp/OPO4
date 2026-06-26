const TEST_ID = "2026_c2_ubmodelb_test"; 
const questions = [
  {
    number: 1,
    question: "Segons l’art. 5 de la Llei 19/2014, de 29 de desembre, de transparència, accés a la informació pública i bon govern, els subjectes obligats han de garantir la transparència de la informació pública per mitjà de:",
    answers: [
      { text: "El règim sancionador.", correct: false },
      { text: "Un sistema integral de informació i coneixement en format electrònic.", correct: true },
      { text: "La participació ciutadana directa.", correct: false },
      { text: "L’auditoria interna de les administracions.", correct: false }
    ]
  },
  {
    number: 2,
    question: "D’acord el que preveu l’art. 51 del Decret Legislatiu 1/1997, de 31 d’octubre, pel qual s’aprova la refosa en un Text únic dels preceptes de determinats textos legals vigents a Catalunya en matèria de funció pública, en els processos selectius per adquirir la condició de funcionari:",
    answers: [
      { text: "En la convocatòria respectiva es pot establir una fase de prova, que no tindrà caràcter selectiu.", correct: false },
      { text: "En la convocatòria respectiva es pot establir una fase de prova, que podrà tenir caràcter selectiu.", correct: true },
      { text: "En la convocatòria respectiva es pot establir una fase de prova que, necessàriament, haurà d’anar precedida d’un curs de formació.", correct: false },
      { text: "En la convocatòria respectiva no es pot establir una fase de prova.", correct: false }
    ]
  },
  {
    number: 3,
    question: "El termini de notificació d’un acte administratiu, segons la Llei 39/2015, del procediment administratiu comú de les administracions públiques, és de:",
    answers: [
      { text: "5 dies hàbils des que l’acte s’ha dictat.", correct: false },
      { text: "10 dies hàbils des que l’acte s’ha dictat.", correct: true },
      { text: "15 dies naturals des que l’acte s’ha dictat.", correct: false },
      { text: "Un mes des que l’acte s’ha dictat.", correct: false }
    ]
  },
  {
    number: 7,
    question: "En la delegació de competències, segons l’art. 9 de la Llei 40/2015, del règim jurídic del sector públic, quina de les següents afirmacions és correcta:",
    answers: [
      { text: "La titularitat de la competència passa a l'òrgan delegat.", correct: false },
      { text: "Les resolucions dictades s'entenen dictades per l'òrgan delegant.", correct: true },
      { text: "No és necessari que es publiqui en la UB web ni en cap diari oficial.", correct: false },
      { text: "Es pot delegar la competència per dictar disposicions de caràcter general", correct: false }
    ]
  },
  {
    number: 13,
    question: "La substitució, segons l’art. 13 de la Llei 40/2015, del règim jurídic del sector públic:",
    answers: [
      { text: "Es produeix en casos de vacant, absència o malaltia del titular.", correct: true },
      { text: "Implica un trasllat definitiu de la titularitat.", correct: false },
      { text: "Només es pot fer entre òrgans de diferents universitats.", correct: false },
      { text: "Requereix l'aprovació del Claustre.", correct: false }
    ]
  },
  {
    number: 16,
    question: "L’acte pel qual un òrgan superior assumeix un assumpte d’un inferior, segons l’art. 10 de la Llei 40/2015, del règim jurídic del sector públic, s’anomena:",
    answers: [
      { text: "Delegació.", correct: false },
      { text: "Avocació.", correct: true },
      { text: "Substitució.", correct: false },
      { text: "Encomana de gestió.", correct: false }
    ]
  },
  {
    number: 17,
    question: "D’acord amb l’art. 45 de la Llei 39/2015, del procediment administratiu comú de les administracions públiques, en tot cas els actes administratius seran objecte de publicació:",
    answers: [
      { text: "Sempre que ho decideixi l’Administració.", correct: false },
      { text: "Quan l’acte sigui desfavorable.", correct: false },
      { text: "Quan l’acte tingui una pluralitat indeterminada de destinataris.", correct: true },
      { text: "Només en procediments sancionadors.", correct: false }
    ]
  },
  {
    number: 18,
    question: "Quina és la finalitat principal del Portal de la Transparència d’acord amb la Llei 19/2014, de 29 de desembre, de transparència, accés a la informació pública i bon govern?",
    answers: [
      { text: "Permetre la presentació de sol·licituds presencials.", correct: false },
      { text: "Centralitzar la informació publicada per garantir la transparència de l’activitat pública.", correct: true },
      { text: "Publicar únicament la normativa vigent.", correct: false },
      { text: "Gestionar els expedients administratius interns.", correct: false }
    ]
  },
  {
    number: 19,
    question: "Quan es consideren vàlids els actes administratius, amb caràcter general, d’acord amb l’art. 39 de la Llei 39/2015, del procediment administratiu comú de les administracions públiques?",
    answers: [
      { text: "Quan es publiquen al BOE.", correct: false },
      { text: "Quan es notifiquen als interessats.", correct: false },
      { text: "Des del moment en què es dicten.", correct: true },
      { text: "Quan finalitza el procediment.", correct: false }
    ]
  },
  {
    number: 20,
    question: "Segons l’art. 41, de la Llei 39/2015, del procediment administratiu comú de les administracions públiques, quin és el mitjà preferent per a la notificació dels actes administratius?",
    answers: [
      { text: "El correu postal certificat.", correct: false },
      { text: "La publicació al diari oficial.", correct: false },
      { text: "Els mitjans electrònics.", correct: true },
      { text: "El tauler d’anuncis administratiu.", correct: false }
    ]
  },
  {
    number: 21,
    question: "D’acord amb l’art. 22 del Reial Decret 5/2015, de 30 d’octubre, pel qual s’aprova el text refós de la Llei de l’Estatut Bàsic de l’Empleat públic, les retribucions dels funcionaris es classifiquen en:",
    answers: [
      { text: "Retribucions bàsiques i complementàries.", correct: true },
      { text: "Retribucions assignades a cada Grup o Subgrup i triennis.", correct: false },
      { text: "Retribucions assignades a cada Grup o Subgrup, triennis i complements especificats per cada administració.", correct: false },
      { text: "Retribucions bàsiques, complementàries i serveis extraordinaris", correct: false }
    ]
  },
  {
    number: 22,
    question: "Els defectes de forma, segons l’art. 48 Llei 39/2015, del procediment administratiu comú de les administracions públiques, determinaran l'anul·labilitat de l'acte quan:",
    answers: [
      { text: "El signi un funcionari en pràctiques.", correct: false },
      { text: "Manqui de firma electrònica.", correct: false },
      { text: "Manqui dels requisits formals indispensables per assolir la seva fi o produeixi indefensió.", correct: true },
      { text: "Sempre, qualsevol error formal invalida l'acte", correct: false }
    ]
  },
  {
    number: 24,
    question: "D’acord amb l’art. 8 del Reial Decret 5/2015, de 30 d’octubre, pel qual s’aprova el text refós de la Llei de l’Estatut Bàsic de l’Empleat públic, com es classifiquen els empleats públics:",
    answers: [
      { text: "Funcionaris de carrera, funcionaris interins, personal laboral fix i personal eventual", correct: false },
      { text: "Funcionaris de carrera, funcionaris interins, personal laboral fix, per temps indefinit o temporal i personal eventual", correct: true },
      { text: "Funcionaris de carrera, funcionaris interins i personal laboral fix.", correct: false },
      { text: "Funcionaris de carrera, funcionaris interins i personal eventual.", correct: false }
    ]
  },
  {
    number: 25,
    question: "Què és el CSV en la signatura electrònica",
    answers: [
      { text: "Codi Segur de Verificació.", correct: true },
      { text: "Codi Sintàctic de Vigilància.", correct: false },
      { text: "Codi Segur Vigent.", correct: false },
      { text: "Codi Simple de Verificació.", correct: false }
    ]
  },
  {
    number: 26,
    question: "D’acord el que preveu l’art. 62 del Decret Legislatiu 1/1997, de 31 d’octubre, pel qual s’aprova la refosa en un Text únic dels preceptes de determinats textos legals vigents a Catalunya en matèria de funció pública, els concursos de provisió poden ser:",
    answers: [
      { text: "Generals o específics.", correct: true },
      { text: "Genèrics o específics.", correct: false },
      { text: "Generals o especials.", correct: false },
      { text: "Genèrics o especials.", correct: false }
    ]
  },
  {
    number: 27,
    question: "El Registre Electrònic General, d’acord amb l’art. 31 Llei 39/2015, del procediment administratiu comú de les administracions públiques, ha de permetre presentar documents:",
    answers: [
      { text: "De dilluns a divendres en horari de 9h a 14h.", correct: false },
      { text: "Tots els dies de l'any durant les 24 hores.", correct: true },
      { text: "Només els dies que siguin hàbils a la seu de l'òrgan competent.", correct: false },
      { text: "Únicament si no pesen més de 1 MB.", correct: false }
    ]
  },
  {
    number: 28,
    question: "D’acord amb l’art. 35 de la llei 31/1995, de 8 de novembre, de prevenció de riscos laborals, en cas d’una institució amb més de 4.001 treballadors, quants delegats de prevenció ha de tenir?",
    answers: [
      { text: "6", correct: false },
      { text: "7", correct: false },
      { text: "8", correct: true },
      { text: "9", correct: false }
    ]
  },
  {
    number: 30,
    question: "Segons la Llei 19/2014, de 29 de desembre, de transparència, accés a la informació pública i bon govern el Portal de la Transparència ha de garantir que la informació sigui:",
    answers: [
      { text: "Només accessible al personal funcionari.", correct: false },
      { text: "Reservada i confidencial.", correct: false },
      { text: "Accessible de manera fàcil i gratuïta.", correct: true },
      { text: "Disponible exclusivament mitjançant sol·licitud prèvia.", correct: false }
    ]
  },
  {
    number: 31,
    question: "D’acord amb l’art. 16 de la Llei 39/2015, del procediment administratiu comú de les administracions públiques, el rebut que emet automàticament el registre electrònic, ha de contenir, entre d’altres:",
    answers: [
      { text: "La fotografia del sol·licitant.", correct: false },
      { text: "El número de registre, la data i l'hora de presentació i una còpia de l'escrit.", correct: true },
      { text: "L'adreça física de l'òrgan que ha de resoldre.", correct: false },
      { text: "La identificació de la persona funcionària que ha validat l'entrada.", correct: false }
    ]
  },
  {
    number: 32,
    question: "Segons l’art. 9 de la Llei 19/2014, de 29 de desembre, de transparència, accés a la informació pública i bon govern quina informació, s’ha de fer pública mitjançant el règim de transparència?",
    answers: [
      { text: "Només la informació pressupostària.", correct: false },
      { text: "La informació sobre l’organització institucional i l’estructura administrativa.", correct: true },
      { text: "Exclusivament la normativa amb rang de llei.", correct: false },
      { text: "Només els contractes menors.", correct: false }
    ]
  },
  {
    number: 33,
    question: "Segons l’art. 14 Llei 39/2015, del procediment administratiu comú de les administracions públiques, qui dels següents està obligat a relacionar-se a través de mitjans electrònics amb les Administracions Públiques?",
    answers: [
      { text: "Totes les persones físiques majors d'edat.", correct: false },
      { text: "Les persones jurídiques i les entitats sense personalitat jurídica.", correct: true },
      { text: "Només els funcionaris públics en la seva vida privada.", correct: false },
      { text: "Únicament les grans empreses amb més de 50 treballadors.", correct: false }
    ]
  },
  {
    number: 34,
    question: " Quin principi permet dirigir i controlar òrgans inferiors, segons l’art. 3.1 de la Llei 40/2015, del règim jurídic del sector públic?",
    answers: [
      { text: "Coordinació.", correct: false },
      { text: "Descentralització.", correct: false },
      { text: "Jerarquia.", correct: true },
      { text: "Desconcentració.", correct: false }
    ]
  },
  {
    number: 35,
    question: "Quina funció ha de complir un prestador o prestadora de serveis de confiança per poder expedir un certificat qualificat?",
    answers: [
      { text: "Enviar automàticament el certificat per correu postal a la persona sol·licitant.", correct: false },
      { text: "Verificar la identitat de la persona a qui s’expedeix el certificat qualificat.", correct: true },
      { text: "Emmagatzemar totes les signatures electròniques durant pocs dies.", correct: false },
      { text: "Autoritzar l’ús de la signatura manual només en tràmits administratius.", correct: false }
    ]
  },
  {
    number: 36,
    question: "Quina condició fa lícit el tractament de dades personals segons l’art. 6 del Reglament (UE) 2016/679 de 27 d’abril de 2016?",
    answers: [
      { text: "Que l’interessat hagi donat el seu consentiment.", correct: true },
      { text: "Que el tractament sigui voluntari per part del responsable.", correct: false },
      { text: "Que les dades no es considerin sensibles ni interoperables.", correct: false },
      { text: "Que el tractament tingui finalitats comercials.", correct: false }
    ]
  },
  {
    number: 37,
    question: "Segons l’art. 1 del Reglament (UE) 2016/679 del Parlament Europeu i del Consell, de 27 d’abril del 2016, què s’hi estableix principalment?",
    answers: [
      { text: "La prohibició de la circulació de dades personals dins la Unió Europea i els països afins.", correct: false },
      { text: "Les normes relatives a la protecció de les persones físiques pel que fa al tractament de les dades personals i a la lliure circulació d’aquestes dades.", correct: true },
      { text: "Les normes sobre el tractament exclusiu de dades de les administracions públiques catalanes i estatals.", correct: false },
      { text: "La regulació del tractament de dades únicament per motius de seguretat nacional.", correct: false }
    ]
  },
  {
    number: 38,
    question: "D’acord amb l’art. 1 del Reial Decret 5/2015, de 30 d’octubre, pel qual s’aprova el text refós de la Llei de l’Estatut Bàsic de l’Empleat públic, aquesta norma:",
    answers: [
      { text: "S'aplica exclusivament al personal subjecte al règim funcionarial que presta serveis a qualsevol administració inclosa en el seu àmbit d’aplicació.", correct: false },
      { text: "S'aplica exclusivament al personal laboral que presta serveis a qualsevol administració inclosa en el seu àmbit d’aplicació.", correct: false },
      { text: "Estableix les bases del règim estatutari, tant dels funcionaris públics com del personal laboral que presta serveis a qualsevol administració inclosa en el seu àmbit d’aplicació.", correct: false },
      { text: "Estableix les bases del règim estatutari dels funcionaris públics i determina les normes aplicable del personal laboral que presta serveis a qualsevol administració inclosa en el seu àmbit d’aplicació.", correct: true }
    ]
  },
  {
    number: 39,
    question: "Un acte dictat per un òrgan manifestament incompetent per raó de la matèria és, segons allò estipulat a l’art. 47 Llei 39/2015, del procediment administratiu comú de les administracions públiques:",
    answers: [
      { text: "Anul·lable.", correct: false },
      { text: "Nul de ple dret.", correct: true },
      { text: "Vàlid, però objecte de revisió d'ofici.", correct: false },
      { text: "Irrellevant per al dret administratiu.", correct: false }
    ]
  },
  {
    number: 40,
    question: "D’acord el que preveu l’art. 46 del Decret Legislatiu 1/1997, de 31 d’octubre, pel qual s’aprova la refosa en un Text únic dels preceptes de determinats textos legals vigents a Catalunya en matèria de funció pública, per a l’accés a les escales de funcionaris es poden fer servir els següents procediments:",
    answers: [
      { text: "Oposició, concurs oposició i concurs", correct: true },
      { text: "Oposició, lliure designació i concurs", correct: false },
      { text: "Oposició, concurs oposició, concurs i lliure designació", correct: false },
      { text: "Oposició, concurs oposició i lliure designació", correct: false }
    ]
  },
  {
    number: 42,
    question: "D’acord amb l’art. 15 de la llei 31/1995, de 8 de novembre, de prevenció de riscos laborals, quins dels següents principis no s’haurà d’aplicar a les mesures que integren el deure general de prevenció:",
    answers: [
      { text: "Evitar riscos.", correct: false },
      { text: "Avaluar riscos que no es puguin evitar.", correct: false },
      { text: "Adoptar mesures que anteposin la protecció individual a la col·lectiva.", correct: true },
      { text: "Donar les corresponents instruccions als treballadors.", correct: false }
    ]
  },
  {
    number: 44,
    question: "Quina directiva europea estableix el principi d’igualtat de retribució entre dones i homes?",
    answers: [
      { text: "Directiva 2006/54/CE.", correct: false },
      { text: "Directiva (UE) 2019/1158.", correct: false },
      { text: "Directiva 2000/78/CE.", correct: false },
      { text: "Directiva (UE) 2023/970.", correct: true }
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