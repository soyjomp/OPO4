const TEST_ID = "pat_160pi_test"; 
const questions = [
  {
    "theme": "PAT; QUEST MODEL A - 160-PI",
    "question": "Que són les cartes de serveis?",
    "number": 1,
    "answers": [
      { "text": "Documents que informen al ciutadà sobre els serveis i la unitat que els presta, a més d'incloure els compromisos adquirits pel que fa a la prestació d'aquests i els mecanismes de participació de la ciutadania per a la seva millora.", "correct": true },
      { "text": "Documents que recullen les actuacions dutes a terme per una unitat administrativa.", "correct": false },
      { "text": "Cartes que l'Administració envia al ciutadà per informar-li de l'estat de la seva tramitació, que es trameten en un termini màxim d'un mes des que es va presentar la sol·licitud.", "correct": false },
      { "text": "Cartes que l'Administració dirigeix a la ciutadania en què informa dels serveis que són del seu interès, així com els requisits per poder accedir i l'òrgan que els presta.", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-PI",
    "question": "Tenen la consideració de contractes administratius, segons la vigent Llei 9/2017, de 8 de novembre, de contractes del sector públic (LCSP):",
    "number": 2,
    "answers": [
      { "text": "Els contractes d'obres, concessió d'obres, concessió de serveis, subministraments i serveis que se celebrin per una Administració Pública.", "correct": true },
      { "text": "Tots els contractes de serveis, independentment de si l'entitat contractant és o no una Administració Pública.", "correct": false },
      { "text": "Tots els contractes subscrits per qualsevol ens, organisme o entitat del sector públic.", "correct": false },
      { "text": "Només els contractes adjudicats per una administració pública després d'un procediment de concurrència competitiva de caràcter harmonitzat.", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-PI",
    "question": "D'acord amb el Text Refós de l'Estatut Bàsic de l'Empleat Públic (TREBEP), i sens perjudici de les millores de la Generalitat, el dret a dies addicionals de lliure disposició (assumptes propis) per antiguitat s'estructura de la següent manera al complir el sisè trienni (18 anys de serveis):",
    "number": 3,
    "answers": [
      { "text": "Dos dies addicionals de lliure disposició (un al complir el sisè trienni, ja que el primer dia addicional s'obté al complir el sisè trienni segons el TREBEP però la normativa general de la Generalitat afegeix dies progressius).", "correct": false },
      { "text": "Dos dies addicionals de lliure disposició (segons l'article 48.k del TREBEP s'afegeix un dia a partir del sisè trienni, sumant-se al primer que s'obté al tercer trienni).", "correct": true },
      { "text": "Un dia addicional de lliure disposició.", "correct": false },
      { "text": "Quatre dies addicionals de lliure disposició.", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-PI",
    "question": "La Relació de Llocs de Treball (RLT) de l'Administració de la Generalitat de Catalunya:",
    "number": 4,
    "answers": [
      { "text": "És el mateix que la plantilla de personal.", "correct": false },
      { "text": "Ha de ser aprovada exclusivament pel titular de la Direcció General de la Funció Pública sense passar pel Govern.", "correct": false },
      { "text": "El seu contingut només inclou la denominació i característiques essencials dels llocs i els requisits per ocupar-los.", "correct": false },
      { "text": "És pública i és l'instrument tècnic a través del qual s'organitzen els llocs de treball de funcionaris, laborals i eventuals.", "correct": true }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-PI",
    "question": "D'acord amb l'article 42.2 de la Llei 39/2015, de 1 d'octubre, en els procediments iniciats a sol·licitud de l'interessat, quan ningú no es pot fer càrrec de la notificació en paper, s'ha de repetir l'intent una sola vegada en una hora diferent dins dels:",
    "number": 5,
    "answers": [
      { "text": "5 dies següents.", "correct": false },
      { "text": "3 dies següents.", "correct": true },
      { "text": "2 dies següents.", "correct": false },
      { "text": "7 dies següents.", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-PI",
    "question": "Segons el règim disciplinari del Text Refós de l'Estatut Bàsic de l'Empleat Públic (TREBEP), les infraccions lleus comeses pels funcionaris prescriuen:",
    "number": 6,
    "answers": [
      { "text": "Als 12 mesos.", "correct": false },
      { "text": "Als 3 mesos.", "correct": false },
      { "text": "Als 6 mesos.", "correct": true },
      { "text": "Als 2 mesos.", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-PI",
    "question": "D'acord amb l'article 21 de la Llei 39/2015, de 1 d'octubre, constitueix un supòsit d'excepció a l'obligació de dictar resolució expressa:",
    "number": 7,
    "answers": [
      { "text": "La prescripció.", "correct": false },
      { "text": "La renúncia del dret.", "correct": false },
      { "text": "La caducitat.", "correct": false },
      { "text": "Els supòsits de terminació del procediment per pacte o conveni.", "correct": true }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-PI",
    "question": "Les subvencions que concedeix l'Administració de la Generalitat de Catalunya:",
    "number": 8,
    "answers": [
      { "text": "Consisteixen en una disposició de fons públics a favor de persones públiques o privades sense contraprestació directa.", "correct": true },
      { "text": "Han de tenir una contraprestació directa de les persones físiques o jurídiques que en són beneficiàries.", "correct": false },
      { "text": "Poden ser atorgades sense assignar recursos públics prèvis ni crèdit pressupostari.", "correct": false },
      { "text": "Han de tenir una finalitat que respongui exclusivament al foment d'activitats de caràcter mercantil i lucratiu privat.", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-PI",
    "question": "D'acord amb l'article 114 de la Llei 39/2015, de 1 d'octubre, posen fi a la via administrativa:",
    "number": 9,
    "answers": [
      { "text": "Les resolucions dels recursos extraordinaris de revisió.", "correct": false },
      { "text": "Les resolucions dels recursos de reposició.", "correct": true },
      { "text": "Les resolucions dels recursos contenciosos administratius.", "correct": false },
      { "text": "Les resolucions dels recursos d'alçada.", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-PI",
    "question": "Les inscripcions fetes al Registre Electrònic d'Empreses Licitadores (RELI) de la Generalitat de Catalunya, en consonància amb el caràcter indefinit de les dades si no canvien les circumstàncies, tenen una validesa:",
    "number": 10,
    "answers": [
      { "text": "D'un any.", "correct": false },
      { "text": "De dos anys.", "correct": false },
      { "text": "De quatre anys.", "correct": false },
      { "text": "Indefinida, sens perjudici de l'obligació de l'empresa d'actualitzar les dades si varien.", "correct": true }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-PI",
    "question": "Segons l'article 131 de la Llei 9/2017 (LCSP), té la consideració de procediment ordinari d'adjudicació de contractes sectorials:",
    "number": 11,
    "answers": [
      { "text": "El procediment negociat sense publicitat.", "correct": false },
      { "text": "El diàleg competitiu.", "correct": false },
      { "text": "El procediment restringit (a més de l'obert).", "correct": true },
      { "text": "El concurs de projectes.", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-PI",
    "question": "Els béns patrimonials de l'Administració de la Generalitat:",
    "number": 12,
    "answers": [
      { "text": "Són inembargables de forma absoluta segons la doctrina actual del Tribunal Constitucional.", "correct": false },
      { "text": "Estan afectats directament a un ús o servei públic.", "correct": false },
      { "text": "Són adquiribles per qualsevol títol jurídic vàlid en dret públic o privat.", "correct": true },
      { "text": "Són inalienables i imprescriptibles.", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-PI",
    "question": "La part de la despesa corresponent als exercicis futurs, en despeses d'abast plurianual de la Generalitat, ha de ser determinada i autoritzada pel:",
    "number": 13,
    "answers": [
      { "text": "Govern, a proposta del conseller o consellera del departament competent en matèria de finances.", "correct": true },
      { "text": "Secretari o secretària general del departament afectat.", "correct": false },
      { "text": "Conseller o consellera del departament sectorial exclusivament.", "correct": false },
      { "text": "Parlament de Catalunya de forma individualitzada per a cada expedient.", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-PI",
    "question": "A quines tres àrees d'aplicació dóna suport la Plataforma d'Integració i Col·laboració Administrativa (PICA)?",
    "number": 14,
    "answers": [
      { "text": "A la interoperabilitat, a la tramitació en línia i a la integració dels sistemes de gestió dels departaments de la Generalitat.", "correct": true },
      { "text": "A la tramitació en línia, a la interoperabilitat i a la validació de la documentació signada electrònicament.", "correct": false },
      { "text": "A la tramitació en línia, a la validació de documentació signada electrònicament i a l'arxiu d'aquesta.", "correct": false },
      { "text": "A la interoperabilitat, a la validació de la documentació signada electrònicament i a l'arxiu d'aquesta.", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-PI",
    "question": "En el cas que la Intervenció Delegada discrepi amb el fons o amb la forma dels actes, expedients o documents examinats (funció fiscalitzadora), quina actuació ha de dur a terme?",
    "number": 15,
    "answers": [
      { "text": "Formular les seves objeccions per escrit (reparament).", "correct": true },
      { "text": "Dictar una instrucció d'obligat compliment a l'òrgan afectat.", "correct": false },
      { "text": "Emetre una resolució denegatòria ferma en via administrativa.", "correct": false },
      { "text": "Elevar l'expedient directament al conseller/a de Justícia.", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-PI",
    "question": "D'acord amb l'article 124 de la Llei 39/2015, de 1 d'octubre, el termini per interposar el recurs potestatiu de reposició si l'acte és exprés és de:",
    "number": 16,
    "answers": [
      { "text": "Un mes.", "correct": true },
      { "text": "Dos mesos.", "correct": false },
      { "text": "Tres mesos.", "correct": false },
      { "text": "Quinze dies.", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-PI",
    "question": "El termini general de prescripció per exigir el reintegrament (revocació per incompliment) d'una subvenció atorgada per la Generalitat de Catalunya, d'acord amb la Llei General de Subvencions, és de:",
    "number": 17,
    "answers": [
      { "text": "Cinc anys.", "correct": false },
      { "text": "Deu anys.", "correct": false },
      { "text": "Quatre anys.", "correct": true },
      { "text": "Dos anys.", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-PI",
    "question": "L'article 32 de la Llei 40/2015, de 1 d'octubre, estableix que els particulars tindran dret a ser indemnitzats de tota lesió que pateixin en els seus béns i drets per l'operar públic, llevat dels casos de:",
    "number": 18,
    "answers": [
      { "text": "Interès nacional.", "correct": false },
      { "text": "Urgència manifesta.", "correct": false },
      { "text": "Necessitat pública.", "correct": false },
      { "text": "Força major.", "correct": true }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-PI",
    "question": "D'acord amb la classificació econòmica dels ingressos de la Generalitat de Catalunya, el capítol VII correspon a:",
    "number": 19,
    "answers": [
      { "text": "Alienació d'inversions reals.", "correct": false },
      { "text": "Transferències de capital.", "correct": true },
      { "text": "Ingressos patrimonials.", "correct": false },
      { "text": "Transferències corrents.", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-PI",
    "question": "D'acord amb l'article 47.1 de la Llei 39/2015, de 1 d'octubre, si un òrgan manifestament incompetent per raó de la matèria o del territori dicta un acte administratiu:",
    "number": 20,
    "answers": [
      { "text": "L'acte és nul de ple dret.", "correct": true },
      { "text": "L'acte és anul·lable.", "correct": false },
      { "text": "L'acte és vàlid si s'ha publicat en el Diari Oficial corresponent.", "correct": false },
      { "text": "L'acte és convalidable per l'òrgan superior jeràrquic.", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-PI",
    "question": "Actualment, amb la implantació total del registre electrònic regulat a la Llei 39/2015, l'assentament de tot document presentat ha de garantir de forma automatitzada de conformitat amb l'article 16:",
    "number": 21,
    "answers": [
      { "text": "Un número d'ordre, data i hora de presentació, identificació de l'interessat i òrgan destinatari.", "correct": true },
      { "text": "Que s'identifiqui amb claredat exclusivament l'assumpte del document sense importar la signatura.", "correct": false },
      { "text": "Un termini màxim de validació manual per part de l'oficial de registre de 48 hores.", "correct": false },
      { "text": "Que s'identifiquin el destinatari, el lloc físic i la data manuscrita.", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-PI",
    "question": "Quin termini general preveu l'article 83 de la Llei 39/2015, de 1 d'octubre, en relació amb el tràmit d'informació pública?",
    "number": 22,
    "answers": [
      { "text": "Un termini no inferior a 15 dies hàbils.", "correct": false },
      { "text": "Un termini no inferior a 20 dies hàbils.", "correct": true },
      { "text": "Un termini no inferior a 30 dies hàbils.", "correct": false },
      { "text": "Un termini no inferior a 10 dies hàbils.", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-PI",
    "question": "El document comptable que reflecteix el compromís o disposició de despesa és el document:",
    "number": 23,
    "answers": [
      { "text": "A (Autorització).", "correct": false },
      { "text": "D (Disposició o Compromís).", "correct": true },
      { "text": "O (Obligació).", "correct": false },
      { "text": "P (Proposta de pagament).", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-PI",
    "question": "La Sindicatura de Comptes depèn orgànicament:",
    "number": 24,
    "answers": [
      { "text": "Del Govern de la Generalitat de Catalunya.", "correct": false },
      { "text": "De la Intervenció General.", "correct": false },
      { "text": "Del Parlament de Catalunya.", "correct": true },
      { "text": "Del Departament de la Presidència.", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-PI",
    "question": "Quines són les activitats que constitueixen l'anomenat 'Cicle de millora' o 'Cicle de Deming' (PDCA)?",
    "number": 25,
    "answers": [
      { "text": "Planificar, comunicar, realitzar i controlar.", "correct": false },
      { "text": "Planificar, comunicar, implicar i actuar.", "correct": false },
      { "text": "Planificar (Plan), realitzar (Do), controlar/verificar (Check) i actuar (Act).", "correct": true },
      { "text": "Planificar, realitzar, actuar i corregir.", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-PI",
    "question": "D'acord amb l'article 48 de la Llei 39/2015, de 1 d'octubre, són anul·lables:",
    "number": 26,
    "answers": [
      { "text": "Els actes de l'Administració que tinguin un contingut impossible.", "correct": false },
      { "text": "Els actes de l'Administració que incorrin en qualsevol infracció de l'ordenament jurídic, fins i tot la desviació de poder.", "correct": true },
      { "text": "Els actes de l'Administració que lesionin drets i llibertats susceptibles d'empara constitucional.", "correct": false },
      { "text": "Els actes de l'Administració que siguin constitutius d'infracció penal o es dictin a conseqüència d'aquesta.", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-PI",
    "question": "D'acord amb l'article 84 de la Llei 39/2015, de 1 d'octubre, posen fi al procediment administratiu:",
    "number": 27,
    "answers": [
      { "text": "La resolució, el desistiment, la renúncia al dret en què es fonamenta la sol·licitud i la declaració de caducitat.", "correct": true },
      { "text": "La resolució, el desistiment, l'aplanament i la renúncia al dret en què es fonamenta la sol·licitud.", "correct": false },
      { "text": "La resolució, el desistiment, la caducitat i la prescripció.", "correct": false },
      { "text": "El desistiment, la caducitat, l'aplanament i la renúncia al dret en què es fonamenta la sol·licitud.", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-PI",
    "question": "Com es coneix la capacitat de les organitzacions i sistemes per compartir dades i possibilitar l'intercanvi d'informació entre ells?",
    "number": 28,
    "answers": [
      { "text": "Interoperabilitat.", "correct": true },
      { "text": "Govern electrònic.", "correct": false },
      { "text": "Principi d'accessibilitat universal.", "correct": false },
      { "text": "Multicanalitat integradora.", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-PI",
    "question": "D'acord amb el Reglament General de Protecció de Dades (RGPD) i la LOPDGDD 3/2018, la base legítima principal per al tractament de dades en l'exercici de poders públics per part de la Generalitat és:",
    "number": 29,
    "answers": [
      { "text": "El consentiment explícit de l'interessat en tots els casos d'actuació pública.", "correct": false },
      { "text": "El compliment d'una obligació legal o el compliment d'una missió realitzada en interès públic o en l'exercici de poders públics conferits al responsable.", "correct": true },
      { "text": "Que les dades s'hagin recollit amb anterioritat a la digitalització de les oficines OAC.", "correct": false },
      { "text": "Només es requereix consentiment si són dades relatives a la ideologia o religió de l'empleat.", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-PI",
    "question": "Dins de l'estat de despeses dels pressupostos de la Generalitat de Catalunya, determinats ingressos derivats de la prestació de serveis o transferències finalistes poden donar lloc a:",
    "number": 30,
    "answers": [
      { "text": "La generació de crèdits.", "correct": true },
      { "text": "La retenció forçosa de saldos pressupostaris.", "correct": false },
      { "text": "La liquidació automàtica de crèdits ampliadors.", "correct": false },
      { "text": "La incorporació directa de romanents sense autorització del Govern.", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-PI",
    "question": "D'acord amb l'article 40.2 de la Llei 39/2015, de 1 d'octubre, del procediment administratiu comú, tota notificació s'ha de cursar dins del termini de:",
    "number": 31,
    "answers": [
      { "text": "Cinc dies a partir de la data en què l'acte s'hagi dictat.", "correct": false },
      { "text": "Deu dies a partir de la data en què l'acte s'hagi dictat.", "correct": true },
      { "text": "Quinze dies a partir de la data en què l'acte s'hagi dictat.", "correct": false },
      { "text": "Vint dies a partir de la data en què l'acte s'hagi dictat.", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-PI",
    "question": "Els béns patrimonials de l'Administració de la Generalitat de Catalunya que tenen la consideració d'immobles:",
    "number": 32,
    "answers": [
      { "text": "S'han d'inscriure a l'inventari general del patrimoni de la Generalitat que gestiona el Departament de la Presidència.", "correct": false },
      { "text": "S'han d'inscriure al Registre de la Cambra de la Propietat del municipi on estiguin ubicats.", "correct": false },
      { "text": "S'han d'inscriure al Registre de la Propietat que correspongui, d'acord amb el règim establert a la Llei hipotecària.", "correct": true },
      { "text": "S'han d'inscriure al Registre Municipal de Béns de les Administracions Públiques exonerats del pagament de l'IAE.", "correct": false }
    ]
  },
  {
    "theme": "PAT; QUEST MODEL A - 160-PI",
    "question": "A què corresponen les sigles TIC en el marc del procés de modernització i administració digital de la Generalitat?",
    "number": 33,
    "answers": [
      { "text": "Teories dels instruments de comunicació.", "correct": false },
      { "text": "Tecnologies dels instruments de comunicació.", "correct": false },
      { "text": "Tecnologies de la informació i la comunicació.", "correct": true },
      { "text": "Tractats de la innovació i la comunicació.", "correct": false }
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