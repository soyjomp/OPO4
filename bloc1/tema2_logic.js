const TEST_ID = "tema2"; 
const questions = [
  {
    question: "Segons l'Estatut d'Autonomia de Catalunya, quin és el principi rector que defineix Catalunya?",
    number: 1,
    answers: [
      { text: "Catalunya és una nació sense Estat.", correct: false },
      { text: "Catalunya, com a nacionalitat, exerceix el seu autogovern constituït en Comunitat Autònoma.", correct: true },
      { text: "Catalunya és un Estat independent.", correct: false },
      { text: "Catalunya és una regió administrativa.", correct: false }
    ]
  },
  {
    question: "Quin és l'òrgan que representa el poble de Catalunya?",
    number: 2,
    answers: [
      { text: "El Govern.", correct: false },
      { text: "El Parlament.", correct: true },
      { text: "El Síndic de Greuges.", correct: false },
      { text: "El Tribunal Superior de Justícia.", correct: false }
    ]
  },
  {
    question: "Quina és la seu de la Generalitat de Catalunya?",
    number: 3,
    answers: [
      { text: "Es pot establir per llei en qualsevol municipi.", correct: false },
      { text: "La ciutat de Barcelona.", correct: true },
      { text: "La ciutat de Girona.", correct: false },
      { text: "No en té una de fixa segons l'EAC.", correct: false }
    ]
  },
  {
    question: "Quina de les següents no és una competència exclusiva de la Generalitat?",
    number: 4,
    answers: [
      { text: "Organització de les seves institucions d'autogovern.", correct: false },
      { text: "Cultura i patrimoni cultural.", correct: false },
      { text: "Defensa i Forces Armades.", correct: true },
      { text: "Ordenació del territori.", correct: false }
    ]
  },
  {
    question: "Quina majoria és necessària al Parlament per elegir el President/a de la Generalitat?",
    number: 5,
    answers: [
      { text: "Majoria simple en primera votació.", correct: false },
      { text: "Majoria absoluta en primera votació.", correct: true },
      { text: "Majoria de dos terços sempre.", correct: false },
      { text: "Majoria simple sempre.", correct: false }
    ]
  },
  {
    question: "En quina sessió, i amb quina majoria, es pot elegir el President/a si no s'obté la majoria absoluta?",
    number: 6,
    answers: [
      { text: "En la següent sessió, per majoria simple.", correct: true },
      { text: "En la mateixa sessió, per majoria absoluta.", correct: false },
      { text: "En la següent sessió, per majoria de tres cinquens.", correct: false },
      { text: "No es pot tornar a votar.", correct: false }
    ]
  },
  {
    question: "Com es compon el Govern de la Generalitat?",
    number: 7,
    answers: [
      { text: "Pel President, el Parlament i els Consellers.", correct: false },
      { text: "Pel President, el Vicepresident i els Consellers.", correct: true },
      { text: "Pel President i els Secretaris Generals.", correct: false },
      { text: "Pel President i els delegats territorials.", correct: false }
    ]
  },
  {
    question: "Qui té la potestat de dissoldre el Parlament i convocar eleccions anticipades?",
    number: 8,
    answers: [
      { text: "El Govern en ple.", correct: false },
      { text: "El President/a de la Generalitat.", correct: true },
      { text: "El President/a del Parlament.", correct: false },
      { text: "El Rei, a proposta del Parlament.", correct: false }
    ]
  },
  {
    question: "Quin article de l'Estatut estableix la llengua pròpia de Catalunya?",
    number: 9,
    answers: [
      { text: "Article 6.", correct: true },
      { text: "Article 1.", correct: false },
      { text: "Article 10.", correct: false },
      { text: "Article 3.", correct: false }
    ]
  },
  {
    question: "Quina és la llengua oficial de Catalunya juntament amb el català?",
    number: 10,
    answers: [
      { text: "L'occità (aranès).", correct: false },
      { text: "El castellà.", correct: true },
      { text: "Totes les llengües europees.", correct: false },
      { text: "Cap altra.", correct: false }
    ]
  },
  {
    question: "Quina és la durada de la legislatura del Parlament?",
    number: 11,
    answers: [
      { text: "3 anys.", correct: false },
      { text: "4 anys.", correct: true },
      { text: "5 anys.", correct: false },
      { text: "Fins que el President vulgui.", correct: false }
    ]
  },
  {
    question: "Qui nomena els consellers de la Generalitat?",
    number: 12,
    answers: [
      { text: "El Parlament.", correct: false },
      { text: "El President/a de la Generalitat.", correct: true },
      { text: "Els partits polítics de la coalició.", correct: false },
      { text: "El Govern central.", correct: false }
    ]
  },
  {
    question: "En quina situació el President/a de la Generalitat perd la confiança del Parlament?",
    number: 13,
    answers: [
      { text: "Per l'aprovació d'una moció de censura.", correct: true },
      { text: "Per una pregunta parlamentària.", correct: false },
      { text: "Per un canvi de partit del President.", correct: false },
      { text: "Per la dimissió dels secretaris.", correct: false }
    ]
  },
  {
    question: "Quina de les següents és una competència compartida?",
    number: 14,
    answers: [
      { text: "Relacions internacionals.", correct: false },
      { text: "Sistema de seguretat pública (Mossos).", correct: false },
      { text: "Ensenyament universitari.", correct: true },
      { text: "Dret civil català.", correct: false }
    ]
  },
  {
    question: "El Síndic de Greuges és elegit pel:",
    number: 15,
    answers: [
      { text: "Govern.", correct: false },
      { text: "Parlament, per majoria qualificada.", correct: true },
      { text: "President/a.", correct: false },
      { text: "Poble mitjançant referèndum.", correct: false }
    ]
  },
  {
    question: "Quina és la funció principal de la Sindicatura de Comptes?",
    number: 16,
    answers: [
      { text: "Controlar el pressupost del Parlament.", correct: false },
      { text: "Fiscalitzar els comptes del sector públic de Catalunya.", correct: true },
      { text: "Defensar els drets dels ciutadans.", correct: false },
      { text: "Controlar la legalitat dels actes del Govern.", correct: false }
    ]
  },
  {
    question: "El Consell de Garanties Estatutàries té la funció de:",
    number: 17,
    answers: [
      { text: "Elegir el President.", correct: false },
      { text: "Vetllar per l'adequació de les disposicions al bloc de la constitucionalitat.", correct: true },
      { text: "Controlar les finances de la Generalitat.", correct: false },
      { text: "Aprovar els estatuts de les entitats privades.", correct: false }
    ]
  },
  {
    question: "Quina d'aquestes institucions no forma part de la Generalitat?",
    number: 18,
    answers: [
      { text: "El Parlament.", correct: false },
      { text: "El Govern.", correct: false },
      { text: "El Consell Consultiu (abans de l'actual CGE).", correct: false },
      { text: "El Tribunal Suprem.", correct: true }
    ]
  },
  {
    question: "Com s'anomena la norma institucional bàsica de Catalunya?",
    number: 19,
    answers: [
      { text: "Llei de la Generalitat.", correct: false },
      { text: "L'Estatut d'Autonomia.", correct: true },
      { text: "La Constitució Catalana.", correct: false },
      { text: "El Decret Legislatiu.", correct: false }
    ]
  },
  {
    question: "Quina és la funció del Consell de Treball, Econòmic i Social?",
    number: 20,
    answers: [
      { text: "Assessorar el Govern en matèria socioeconòmica i laboral.", correct: true },
      { text: "Elegir el conseller de Treball.", correct: false },
      { text: "Sancionar les empreses que no compleixen la llei.", correct: false },
      { text: "Organitzar vagues.", correct: false }
    ]
  },
  {
    question: "Els drets dels ciutadans de Catalunya estan reconeguts a:",
    number: 21,
    answers: [
      { text: "Títol I de l'Estatut.", correct: true },
      { text: "Títol II de l'Estatut.", correct: false },
      { text: "Títol III de l'Estatut.", correct: false },
      { text: "Només en les lleis sectorials.", correct: false }
    ]
  },
  {
    question: "Qui representa el President de la Generalitat en l'àmbit estatal?",
    number: 22,
    answers: [
      { text: "El delegat del Govern central.", correct: false },
      { text: "El President de la Generalitat és el representant ordinari de l'Estat a Catalunya.", correct: true },
      { text: "No representa ningú.", correct: false },
      { text: "El cap dels Mossos d'Esquadra.", correct: false }
    ]
  },
  {
    question: "Les lleis de Catalunya són promulgades en nom del Rei pel:",
    number: 23,
    answers: [
      { text: "President/a de la Generalitat.", correct: true },
      { text: "President/a del Parlament.", correct: false },
      { text: "President/a del TSJC.", correct: false },
      { text: "Conseller/a de Justícia.", correct: false }
    ]
  },
  {
    question: "Quina és la majoria per modificar l'Estatut?",
    number: 24,
    answers: [
      { text: "Majoria absoluta del Parlament i referèndum.", correct: true },
      { text: "Majoria simple del Parlament.", correct: false },
      { text: "Majoria de dos terços del Parlament únicament.", correct: false },
      { text: "Majoria absoluta del Govern.", correct: false }
    ]
  },
  {
    question: "La funció executiva i l'exercici de la potestat reglamentària corresponen al:",
    number: 25,
    answers: [
      { text: "Parlament.", correct: false },
      { text: "President.", correct: false },
      { text: "Govern.", correct: true },
      { text: "Consell de Garanties.", correct: false }
    ]
  },
  {
    question: "La iniciativa legislativa popular a Catalunya exigeix un mínim de:",
    number: 26,
    answers: [
      { text: "50.000 signatures.", correct: true },
      { text: "100.000 signatures.", correct: false },
      { text: "25.000 signatures.", correct: false },
      { text: "3% del cens electoral.", correct: false }
    ]
  },
  {
    question: "Els membres del Govern són cessats pel President/a en cas de:",
    number: 27,
    answers: [
      { text: "Dimitir el President.", correct: true },
      { text: "Per moció de censura al Conseller.", correct: false },
      { text: "Només quan el Parlament ho decideix.", correct: false },
      { text: "Per decret del Parlament.", correct: false }
    ]
  },
  {
    question: "El Parlament de Catalunya s'elegeix mitjançant sufragi:",
    number: 28,
    answers: [
      { text: "Indirecte.", correct: false },
      { text: "Universal, lliure, igual, directe i secret.", correct: true },
      { text: "Censatari.", correct: false },
      { text: "Proporcional a la riquesa.", correct: false }
    ]
  },
  {
    question: "La Generalitat té competències exclusives en matèria de:",
    number: 29,
    answers: [
      { text: "Dret civil, tret de les matèries reservades a l'Estat.", correct: true },
      { text: "Nacionalitat espanyola.", correct: false },
      { text: "Comerç exterior total.", correct: false },
      { text: "Legislació laboral penal.", correct: false }
    ]
  },
  {
    question: "Els drets socials inclouen, segons l'Estatut:",
    number: 30,
    answers: [
      { text: "El dret a la renda garantida de ciutadania.", correct: true },
      { text: "El dret a la propietat privada sense límits.", correct: false },
      { text: "El dret a l'accés a càrrecs de l'Estat.", correct: false },
      { text: "El dret a portar armes.", correct: false }
    ]
  },
  {
    question: "La Generalitat exerceix la seva acció exterior:",
    number: 31,
    answers: [
      { text: "En col·laboració amb l'Estat.", correct: true },
      { text: "Sense cap relació amb l'Estat.", correct: false },
      { text: "Únicament mitjançant les ambaixades espanyoles.", correct: false },
      { text: "No té acció exterior.", correct: false }
    ]
  },
  {
    question: "El Consell Executiu és:",
    number: 32,
    answers: [
      { text: "Un altre nom per al Parlament.", correct: false },
      { text: "El Govern de la Generalitat.", correct: true },
      { text: "L'òrgan consultiu del President.", correct: false },
      { text: "La comissió de delegats.", correct: false }
    ]
  },
  {
    question: "La durada màxima dels debats sobre la investidura es regula per:",
    number: 33,
    answers: [
      { text: "El Reglament del Parlament.", correct: true },
      { text: "L'Estatut d'Autonomia directament.", correct: false },
      { text: "Decret del President.", correct: false },
      { text: "Llei orgànica estatal.", correct: false }
    ]
  },
  {
    question: "Quina és la funció del President/a en relació amb els consellers?",
    number: 34,
    answers: [
      { text: "Direcció i coordinació de la seva acció.", correct: true },
      { text: "Substituir-los en les seves funcions diàries.", correct: false },
      { text: "Elegir-los mitjançant concurs oposició.", correct: false },
      { text: "Controlar la seva vida privada.", correct: false }
    ]
  },
  {
    question: "Les competències de l'Estatut s'entenen sense perjudici de:",
    number: 35,
    answers: [
      { text: "Les competències de l'Estat.", correct: true },
      { text: "Els ajuntaments.", correct: false },
      { text: "La Unió Europea.", correct: false },
      { text: "Les entitats privades.", correct: false }
    ]
  },
  {
    question: "El territori de Catalunya comprèn:",
    number: 36,
    answers: [
      { text: "El que estableix l'Estatut en el moment de la seva aprovació.", correct: true },
      { text: "El que dicti el govern d'Aragó.", correct: false },
      { text: "Sempre el que va ser el Comtat de Barcelona.", correct: false },
      { text: "El que decideixi l'Estat en cada moment.", correct: false }
    ]
  },
  {
    question: "Les funcions del Govern són:",
    number: 37,
    answers: [
      { text: "Funció executiva i política.", correct: true },
      { text: "Funció judicial exclusivament.", correct: false },
      { text: "Funció legislativa principal.", correct: false },
      { text: "Funció consultiva només.", correct: false }
    ]
  },
  {
    question: "Els ex-presidents de la Generalitat tenen el tractament de:",
    number: 38,
    answers: [
      { text: "Molt Honorable.", correct: true },
      { text: "Excel·lentíssim.", correct: false },
      { text: "Il·lustríssim.", correct: false },
      { text: "Senyor.", correct: false }
    ]
  },
  {
    question: "La llengua aranesa a l'Aran és:",
    number: 39,
    answers: [
      { text: "Oficial.", correct: true },
      { text: "D'ús restringit.", correct: false },
      { text: "Només administrativa.", correct: false },
      { text: "No és oficial.", correct: false }
    ]
  },
  {
    question: "Quina llei regula el procediment administratiu de la Generalitat?",
    number: 40,
    answers: [
      { text: "Llei del procediment administratiu comú.", correct: true },
      { text: "El Reglament del Parlament.", correct: false },
      { text: "L'Estatut no entra en detalls de procediment.", correct: false },
      { text: "Llei de contractes públics.", correct: false }
    ]
  },
  {
    question: "El President/a és elegit pel:",
    number: 41,
    answers: [
      { text: "Parlament de Catalunya.", correct: true },
      { text: "Govern en ple.", correct: false },
      { text: "Poble directament.", correct: false },
      { text: "Consell de Garanties.", correct: false }
    ]
  },
  {
    question: "La responsabilitat penal del President/a de la Generalitat s'exigeix davant:",
    number: 42,
    answers: [
      { text: "El Tribunal Superior de Justícia de Catalunya (per a certs delictes).", correct: true },
      { text: "El Tribunal Suprem.", correct: false },
      { text: "El Tribunal Constitucional.", correct: false },
      { text: "El Parlament.", correct: false }
    ]
  },
  {
    question: "Quina és la composició mínima del Consell de Garanties Estatutàries?",
    number: 43,
    answers: [
      { text: "Un nombre de membres fixat per llei.", correct: true },
      { text: "3 membres.", correct: false },
      { text: "15 membres.", correct: false },
      { text: "Depèn del pressupost.", correct: false }
    ]
  },
  {
    question: "L'Estatut és una llei:",
    number: 44,
    answers: [
      { text: "Orgànica.", correct: true },
      { text: "Ordinària.", correct: false },
      { text: "Decret llei.", correct: false },
      { text: "Reial decret.", correct: false }
    ]
  },
  {
    question: "Quina és una funció del President?",
    number: 45,
    answers: [
      { text: "Dirigir l'acció del Govern.", correct: true },
      { text: "Dirigir el Parlament.", correct: false },
      { text: "Redactar sentències.", correct: false },
      { text: "Ser jutge de pau.", correct: false }
    ]
  },
  {
    question: "Els ciutadans de Catalunya tenen dret a:",
    number: 46,
    answers: [
      { text: "Participar en els afers públics.", correct: true },
      { text: "Exigir la independència per via estatutària.", correct: false },
      { text: "No pagar impostos.", correct: false },
      { text: "Portar passaport català.", correct: false }
    ]
  },
  {
    question: "El Parlament de Catalunya s'estructura en:",
    number: 47,
    answers: [
      { text: "Grups parlamentaris.", correct: true },
      { text: "Seccions sindicals.", correct: false },
      { text: "Delegacions de govern.", correct: false },
      { text: "Comissions de veïns.", correct: false }
    ]
  },
  {
    question: "L'Estatut reconeix la validesa de les consultes populars locals?",
    number: 48,
    answers: [
      { text: "Sí, segons el procediment establert.", correct: true },
      { text: "No, en cap cas.", correct: false },
      { text: "Només si l'Estat ho autoritza.", correct: false },
      { text: "Només a Barcelona ciutat.", correct: false }
    ]
  },
  {
    question: "La Generalitat té competència en matèria de:",
    number: 49,
    answers: [
      { text: "Seguretat ciutadana i policia (Mossos).", correct: true },
      { text: "Defensa militar.", correct: false },
      { text: "Control de fronteres exteriors de la UE.", correct: false },
      { text: "Dret penal general.", correct: false }
    ]
  },
  {
    question: "Els drets de l'Estatut vinculen:",
    number: 50,
    answers: [
      { text: "Tots els poders públics de Catalunya.", correct: true },
      { text: "Només als funcionaris.", correct: false },
      { text: "Només al President.", correct: false },
      { text: "No són vinculants.", correct: false }
    ]
  },
  {
    question: "Quina és una funció dels grups parlamentaris?",
    number: 51,
    answers: [
      { text: "Intervenir en les tasques del Parlament.", correct: true },
      { text: "Govern la Generalitat.", correct: false },
      { text: "Jutjar els ciutadans.", correct: false },
      { text: "Organitzar els ministeris.", correct: false }
    ]
  },
  {
    question: "Com es modifica el Reglament del Parlament?",
    number: 52,
    answers: [
      { text: "Pel propi Parlament, segons el seu procediment.", correct: true },
      { text: "Per decret del President.", correct: false },
      { text: "Per llei orgànica estatal.", correct: false },
      { text: "Pel Consell de Garanties.", correct: false }
    ]
  },
  {
    question: "El President del Parlament de Catalunya és elegit pel:",
    number: 53,
    answers: [
      { text: "Ple del Parlament.", correct: true },
      { text: "President de la Generalitat.", correct: false },
      { text: "Govern.", correct: false },
      { text: "Poble.", correct: false }
    ]
  },
  {
    question: "La Generalitat té la competència en la gestió de quines beques?",
    number: 54,
    answers: [
      { text: "Les que li delegui l'Estat o siguin pròpies.", correct: true },
      { text: "Cap beca.", correct: false },
      { text: "Només les estrangeres.", correct: false },
      { text: "Totes les beques internacionals.", correct: false }
    ]
  },
  {
    question: "Quina és la funció de la Comissió Bilateral Generalitat-Estat?",
    number: 55,
    answers: [
      { text: "El diàleg i cooperació entre ambdues administracions.", correct: true },
      { text: "L'elecció del President de la Generalitat.", correct: false },
      { text: "La redacció del Codi Penal.", correct: false },
      { text: "El control del Parlament.", correct: false }
    ]
  },
  {
    question: "Quin dret de participació reconeix l'Estatut?",
    number: 56,
    answers: [
      { text: "El dret a la iniciativa legislativa popular.", correct: true },
      { text: "El dret a ser funcionari vitalici.", correct: false },
      { text: "El dret a formar part del govern espanyol.", correct: false },
      { text: "El dret a la doble nacionalitat.", correct: false }
    ]
  },
  {
    question: "La Generalitat té competència exclusiva sobre:",
    number: 57,
    answers: [
      { text: "L'ordenació del territori i urbanisme.", correct: true },
      { text: "La política monetària.", correct: false },
      { text: "Les forces armades.", correct: false },
      { text: "Els grans ports d'interès general.", correct: false }
    ]
  },
  {
    question: "L'Estatut pot ser recorregut davant:",
    number: 58,
    answers: [
      { text: "El Tribunal Constitucional.", correct: true },
      { text: "El Tribunal Suprem.", correct: false },
      { text: "La Sala de govern del TSJC.", correct: false },
      { text: "Cap tribunal.", correct: false }
    ]
  },
  {
    question: "Els reglaments del Govern han de ser respectuosos amb:",
    number: 59,
    answers: [
      { text: "L'Estatut i les lleis del Parlament.", correct: true },
      { text: "Només amb la voluntat del President.", correct: false },
      { text: "Amb les directrius de la UE.", correct: false },
      { text: "Amb els usos i costums catalans.", correct: false }
    ]
  },
  {
    question: "Quin és l'òrgan que garanteix la independència dels jutges a Catalunya?",
    number: 60,
    answers: [
      { text: "El Consell General del Poder Judicial (estatal).", correct: true },
      { text: "El Govern de la Generalitat.", correct: false },
      { text: "El President de la Generalitat.", correct: false },
      { text: "El Síndic de Greuges.", correct: false }
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
  
  document.getElementById("response-counter").textContent = `Respostes: ${selectedCount}/${total}`;
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