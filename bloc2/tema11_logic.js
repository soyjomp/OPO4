const TEST_ID = "tema11"; 
const questions = [
  {
    question: "Què és l'expedient administratiu segons la Llei 39/2015?",
    number: 1,
    answers: [
      { text: "El conjunt ordenat de documents i actuacions que serveixen de base a la resolució.", correct: true },
      { text: "Una col·lecció de documents solts sense ordre ni concert.", correct: false },
      { text: "L'arxiu digital privat d'un funcionari.", correct: false },
      { text: "Només la resolució final signada pel superior.", correct: false }
    ]
  },
  {
    question: "El procediment administratiu es regeix pel principi d'impuls d'ofici. Què significa?",
    number: 2,
    answers: [
      { text: "Que l'Administració té l'obligació de tramitar-lo sense esperar instàncies de part.", correct: true },
      { text: "Que l'interessat ha d'anar impulsant el procediment diàriament.", correct: false },
      { text: "Que el procediment només es mou si hi ha un recurs.", correct: false },
      { text: "Que l'Administració només actua si té temps lliure.", correct: false }
    ]
  },
  {
    question: "Els actes de tràmit en la instrucció són aquells que:",
    number: 3,
    answers: [
      { text: "Contribueixen a l'obtenció de la resolució final.", correct: true },
      { text: "Decideixen directament sobre el fons de la qüestió.", correct: false },
      { text: "Posen fi a la via administrativa sempre.", correct: false },
      { text: "Només es poden fer de forma presencial.", correct: false }
    ]
  },
  {
    question: "La tramitació simplificada del procediment administratiu comú pot acordar-se:",
    number: 4,
    answers: [
      { text: "D'ofici o a proposta de l'instructor.", correct: true },
      { text: "Exclusivament a petició de l'interessat.", correct: false },
      { text: "Només si ho ordena un jutge.", correct: false },
      { text: "No es pot acordar mai.", correct: false }
    ]
  },
  {
    question: "Quina és la forma normal de finalització del procediment?",
    number: 5,
    answers: [
      { text: "La resolució.", correct: true },
      { text: "El desistiment.", correct: false },
      { text: "La caducitat.", correct: false },
      { text: "La renúncia.", correct: false }
    ]
  },
  {
    question: "Dins de la instrucció, l'al·legació és:",
    number: 6,
    answers: [
      { text: "Un acte en què l'interessat exposa els seus arguments.", correct: true },
      { text: "Una prova pericial obligatòria.", correct: false },
      { text: "La resolució final del procediment.", correct: false },
      { text: "Un recurs contra el funcionari instructor.", correct: false }
    ]
  },
  {
    question: "Els informes que es sol·liciten en el procediment són, per regla general:",
    number: 7,
    answers: [
      { text: "Facultatius i no vinculants.", correct: true },
      { text: "Obligatoris i vinculants.", correct: false },
      { text: "Sempre vinculants.", correct: false },
      { text: "Prohibits per la Llei 39/2015.", correct: false }
    ]
  },
  {
    question: "Quant de temps té un òrgan per emetre un informe sol·licitat, si no s'indica el contrari?",
    number: 8,
    answers: [
      { text: "Deu dies.", correct: true },
      { text: "Un mes.", correct: false },
      { text: "Cinc dies.", correct: false },
      { text: "Tres mesos.", correct: false }
    ]
  },
  {
    question: "El tràmit d'audiència consisteix en posar de manifest l'expedient per un termini de:",
    number: 9,
    answers: [
      { text: "De 10 a 15 dies.", correct: true },
      { text: "De 5 a 10 dies.", correct: false },
      { text: "Un mes fix.", correct: false },
      { text: "Tres dies hàbils.", correct: false }
    ]
  },
  {
    question: "Quan es pot prescindir del tràmit d'audiència?",
    number: 10,
    answers: [
      { text: "Quan no figuren en el procediment ni siguin tinguts en compte altres fets que els al·legats per l'interessat.", correct: true },
      { text: "Mai, és sempre obligatori.", correct: false },
      { text: "Quan l'administració té molta feina.", correct: false },
      { text: "Quan l'interessat és una empresa gran.", correct: false }
    ]
  },
  {
    question: "La caducitat del procediment es produeix quan:",
    number: 11,
    answers: [
      { text: "S'atura per causa imputable a l'interessat durant 3 mesos.", correct: true },
      { text: "El funcionari s'oblida de firmar el document.", correct: false },
      { text: "L'Administració tarda un dia més del compte.", correct: false },
      { text: "L'interessat es canvia de domicili.", correct: false }
    ]
  },
  {
    question: "El desistiment en el procediment administratiu implica:",
    number: 12,
    answers: [
      { text: "Que l'interessat abandona la petició però no perd el dret en un futur.", correct: true },
      { text: "Que l'interessat perd el dret fonamental.", correct: false },
      { text: "L'inici obligatori d'un procés penal.", correct: false },
      { text: "La prohibició de tornar a sol·licitar el mateix.", correct: false }
    ]
  },
  {
    question: "La renúncia en el procediment administratiu implica:",
    number: 13,
    answers: [
      { text: "L'abandonament del dret en què es fonamenta la petició.", correct: true },
      { text: "Un simple retard en la tramitació.", correct: false },
      { text: "L'acord d'inici d'un nou expedient.", correct: false },
      { text: "La pèrdua de la condició de ciutadà.", correct: false }
    ]
  },
  {
    question: "Què és la 'terminació convencional'?",
    number: 14,
    answers: [
      { text: "Pactes, convenis o contractes amb l'Administració.", correct: true },
      { text: "Una resolució unilateral de l'Administració.", correct: false },
      { text: "La pèrdua de l'objecte del procediment.", correct: false },
      { text: "La sanció imposada pel jutge.", correct: false }
    ]
  },
  {
    question: "En la tramitació simplificada, quin termini màxim té el procediment?",
    number: 15,
    answers: [
      { text: "30 dies.", correct: true },
      { text: "3 mesos.", correct: false },
      { text: "6 mesos.", correct: false },
      { text: "15 dies.", correct: false }
    ]
  },
  {
    question: "Es pot realitzar el tràmit d'audiència en la tramitació simplificada?",
    number: 16,
    answers: [
      { text: "Només si és necessari abans de dictar la resolució.", correct: true },
      { text: "No, està totalment prohibit.", correct: false },
      { text: "Sí, és obligatori sempre.", correct: false },
      { text: "Només en cap de setmana.", correct: false }
    ]
  },
  {
    question: "La resolució del procediment ha de ser:",
    number: 17,
    answers: [
      { text: "Congruent amb les peticions formulades.", correct: true },
      { text: "Totalment independent de la petició de l'interessat.", correct: false },
      { text: "Oral, preferiblement.", correct: false },
      { text: "Secret fins que el diari l'anunciï.", correct: false }
    ]
  },
  {
    question: "Quins documents ha d'incloure l'expedient administratiu?",
    number: 18,
    answers: [
      { text: "Documentació, sol·licituds, informes i resolucions.", correct: true },
      { text: "Només el DNI de l'interessat.", correct: false },
      { text: "Només la resolució final.", correct: false },
      { text: "Cap, és un concepte abstracte.", correct: false }
    ]
  },
  {
    question: "El principi de celeritat obliga a:",
    number: 19,
    answers: [
      { text: "Impulsar d'ofici el procediment i evitar dilacions.", correct: true },
      { text: "Resoldre els procediments abans de començar-los.", correct: false },
      { text: "Cobrar més taxes.", correct: false },
      { text: "Dificultar els recursos.", correct: false }
    ]
  },
  {
    question: "La prova en el procediment s'ha de practicar quan:",
    number: 20,
    answers: [
      { text: "Els fets no estiguin clars o siguin controvertits.", correct: true },
      { text: "L'Administració té ganes de perdre temps.", correct: false },
      { text: "L'interessat paga un suplement.", correct: false },
      { text: "Mai, no hi ha proves en el procediment.", correct: false }
    ]
  },
  {
    question: "El període de prova té una durada màxima de:",
    number: 21,
    answers: [
      { text: "30 dies.", correct: true },
      { text: "15 dies.", correct: false },
      { text: "10 dies.", correct: false },
      { text: "3 mesos.", correct: false }
    ]
  },
  {
    question: "Què passa si l'interessat no presenta les al·legacions a temps?",
    number: 22,
    answers: [
      { text: "No es perden els drets, però s'haurien d'haver presentat.", correct: true },
      { text: "El procediment s'anul·la.", correct: false },
      { text: "L'Administració multa a l'interessat.", correct: false },
      { text: "L'interessat perd el dret a la resolució.", correct: false }
    ]
  },
  {
    question: "L'expedient electrònic està format per:",
    number: 23,
    answers: [
      { text: "Documents electrònics, índex i signatura.", correct: true },
      { text: "Un PDF escanejat sense més.", correct: false },
      { text: "Una col·lecció d'emails.", correct: false },
      { text: "Un llistat en Excel.", correct: false }
    ]
  },
  {
    question: "La tramitació simplificada pot aplicar-se:",
    number: 24,
    answers: [
      { text: "Quan no hi ha raons d'interès públic que ho impedeixin.", correct: true },
      { text: "Només quan l'interessat ho exigeix.", correct: false },
      { text: "Mai en procediments sancionadors.", correct: false },
      { text: "Només per a tràmits tributaris.", correct: false }
    ]
  },
  {
    question: "En la finalització per desistiment, el procediment:",
    number: 25,
    answers: [
      { text: "S'arxiva.", correct: true },
      { text: "Continua d'ofici.", correct: false },
      { text: "S'ha de notificar al jutjat.", correct: false },
      { text: "Es converteix en un altre procediment.", correct: false }
    ]
  },
  {
    question: "Què és la 'pèrdua sobrevinguda de l'objecte'?",
    number: 26,
    answers: [
      { text: "Una causa de finalització del procediment.", correct: true },
      { text: "La pèrdua d'un document per l'Administració.", correct: false },
      { text: "La mort d'un funcionari.", correct: false },
      { text: "Una sanció penal.", correct: false }
    ]
  },
  {
    question: "La tramitació simplificada redueix:",
    number: 27,
    answers: [
      { text: "Tràmits, no garanties.", correct: true },
      { text: "Garanties fonamentals.", correct: false },
      { text: "El sou dels funcionaris.", correct: false },
      { text: "El dret a la defensa.", correct: false }
    ]
  },
  {
    question: "El procediment administratiu comú s'inicia i s'impulsa:",
    number: 28,
    answers: [
      { text: "D'ofici en tots els casos que la llei ho preveu.", correct: true },
      { text: "Només per petició de part.", correct: false },
      { text: "Només si el jutge ho decideix.", correct: false },
      { text: "Per l'atzar.", correct: false }
    ]
  },
  {
    question: "La instrucció és la fase on:",
    number: 29,
    answers: [
      { text: "Es recullen les dades, proves i informes.", correct: true },
      { text: "Es pren la decisió final.", correct: false },
      { text: "S'arxiva l'expedient abans de començar.", correct: false },
      { text: "Es publiquen les lleis al DOGC.", correct: false }
    ]
  },
  {
    question: "Les persones interessades poden presentar documents en qualsevol moment?",
    number: 30,
    answers: [
      { text: "Sí, abans del tràmit d'audiència.", correct: true },
      { text: "No, han d'esperar el permís.", correct: false },
      { text: "Només al final.", correct: false },
      { text: "Només en dies festius.", correct: false }
    ]
  },
  {
    question: "L'Administració pot sol·licitar que l'interessat aporti documents:",
    number: 31,
    answers: [
      { text: "Si són imprescindibles per a la resolució.", correct: true },
      { text: "Mai, l'Administració ho ha de fer tot.", correct: false },
      { text: "Només per molestar.", correct: false },
      { text: "Només si són originals.", correct: false }
    ]
  },
  {
    question: "Els informes es demanen a:",
    number: 32,
    answers: [
      { text: "Òrgans competents en la matèria.", correct: true },
      { text: "Qualsevol persona del carrer.", correct: false },
      { text: "La premsa.", correct: false },
      { text: "Amics del funcionari.", correct: false }
    ]
  },
  {
    question: "Un informe no vinculant pot ser:",
    number: 33,
    answers: [
      { text: "Desatès motivadament per l'òrgan resolutor.", correct: true },
      { text: "Ignorat sense cap motiu.", correct: false },
      { text: "Sempre d'obligat compliment.", correct: false },
      { text: "Un acte nul.", correct: false }
    ]
  },
  {
    question: "En la tramitació simplificada, si el tràmit requereix un informe preceptiu:",
    number: 34,
    answers: [
      { text: "S'ha de demanar igualment.", correct: true },
      { text: "S'elimina el tràmit.", correct: false },
      { text: "Es demana a l'interessat que el faci ell.", correct: false },
      { text: "Es prohibeix l'informe.", correct: false }
    ]
  },
  {
    question: "L'acord d'inici de la tramitació simplificada s'ha de notificar?",
    number: 35,
    answers: [
      { text: "Sí.", correct: true },
      { text: "No, és intern.", correct: false },
      { text: "Només si l'interessat és advocat.", correct: false },
      { text: "Mai.", correct: false }
    ]
  },
  {
    question: "Què és un expedient compulsiat?",
    number: 36,
    answers: [
      { text: "Document amb còpia autèntica.", correct: true },
      { text: "Un expedient perdut.", correct: false },
      { text: "Un expedient sense signatura.", correct: false },
      { text: "Un document en brut.", correct: false }
    ]
  },
  {
    question: "La tramitació simplificada es pot tramitar per:",
    number: 37,
    answers: [
      { text: "Motius d'eficàcia i agilitat.", correct: true },
      { text: "Motius purament econòmics.", correct: false },
      { text: "Per afavorir una empresa concreta.", correct: false },
      { text: "No hi ha motius definits.", correct: false }
    ]
  },
  {
    question: "El procediment pot finalitzar per:",
    number: 38,
    answers: [
      { text: "Resolució, desistiment, renúncia o caducitat.", correct: true },
      { text: "L'oblit, la distracció o la mandra.", correct: false },
      { text: "El canvi de govern.", correct: false },
      { text: "Un recurs contra el món.", correct: false }
    ]
  },
  {
    question: "Si una prova és impossible de practicar:",
    number: 39,
    answers: [
      { text: "Es pot rebutjar per la seva inutilitat.", correct: true },
      { text: "S'ha de fer obligatòriament.", correct: false },
      { text: "El procediment s'atura per sempre.", correct: false },
      { text: "Es canvia de procediment.", correct: false }
    ]
  },
  {
    question: "Qui té la responsabilitat de la instrucció?",
    number: 40,
    answers: [
      { text: "L'òrgan instructor.", correct: true },
      { text: "L'interessat.", correct: false },
      { text: "El ciutadà del carrer.", correct: false },
      { text: "L'alcalde.", correct: false }
    ]
  },
  {
    question: "La tramitació simplificada té com a límit:",
    number: 41,
    answers: [
      { text: "Que no es vulnerin garanties.", correct: true },
      { text: "Que l'interessat sigui molt ric.", correct: false },
      { text: "Que la llei no l'ha prevista.", correct: false },
      { text: "Cap, no té límits.", correct: false }
    ]
  },
  {
    question: "Un document pot ser incorporat a l'expedient?",
    number: 42,
    answers: [
      { text: "Sí, per qualsevol mitjà legal.", correct: true },
      { text: "Només si és en paper.", correct: false },
      { text: "Només si ho diu la policia.", correct: false },
      { text: "Mai.", correct: false }
    ]
  },
  {
    question: "El tràmit d'informació pública és:",
    number: 43,
    answers: [
      { text: "Un tràmit obert a tothom.", correct: true },
      { text: "Un tràmit només per a experts.", correct: false },
      { text: "El tràmit d'audiència.", correct: false },
      { text: "Una prohibició legal.", correct: false }
    ]
  },
  {
    question: "La caducitat s'ha de declarar per l'Administració?",
    number: 44,
    answers: [
      { text: "Sí, mitjançant resolució.", correct: true },
      { text: "No, és automàtica.", correct: false },
      { text: "No cal res.", correct: false },
      { text: "Només si el jutge ho mana.", correct: false }
    ]
  },
  {
    question: "Què es pot sol·licitar durant la instrucció?",
    number: 45,
    answers: [
      { text: "Informes i proves.", correct: true },
      { text: "La dimissió del funcionari.", correct: false },
      { text: "Dinero en efectiu.", correct: false },
      { text: "L'anul·lació de la Llei.", correct: false }
    ]
  },
  {
    question: "El procediment administratiu ha de ser:",
    number: 46,
    answers: [
      { text: "Senzill, àgil i transparent.", correct: true },
      { text: "Complex, opac i lent.", correct: false },
      { text: "Burocràtic i inútil.", correct: false },
      { text: "Secret i exclusiu.", correct: false }
    ]
  },
  {
    question: "La resolució pot declarar la inadmissibilitat?",
    number: 47,
    answers: [
      { text: "Sí, si no compleix els requisits.", correct: true },
      { text: "No, sempre s'ha de resoldre.", correct: false },
      { text: "Només si l'interessat té raó.", correct: false },
      { text: "Només en matèria penal.", correct: false }
    ]
  },
  {
    question: "L'expedient ha de tenir un índex?",
    number: 48,
    answers: [
      { text: "Sí, per facilitar l'accés i consulta.", correct: true },
      { text: "No, és innecessari.", correct: false },
      { text: "Només si és molt llarg.", correct: false },
      { text: "Només si és digital.", correct: false }
    ]
  },
  {
    question: "Es poden unificar procediments?",
    number: 49,
    answers: [
      { text: "Sí, en cas de connexió.", correct: true },
      { text: "No, estan prohibits.", correct: false },
      { text: "Només si tenen la mateixa data.", correct: false },
      { text: "Només pel cap del departament.", correct: false }
    ]
  },
  {
    question: "Un procediment d'ofici pot ser simplificat?",
    number: 50,
    answers: [
      { text: "Sí.", correct: true },
      { text: "No.", correct: false },
      { text: "Només si és sancionador.", correct: false },
      { text: "Mai.", correct: false }
    ]
  },
  {
    question: "L'interessat pot renunciar al tràmit d'audiència?",
    number: 51,
    answers: [
      { text: "Sí.", correct: true },
      { text: "No, és irrenunciable.", correct: false },
      { text: "Només si li paguen.", correct: false },
      { text: "Mai.", correct: false }
    ]
  },
  {
    question: "Els terminis en la tramitació simplificada són:",
    number: 52,
    answers: [
      { text: "Més curts que en l'ordinària.", correct: true },
      { text: "Iguals.", correct: false },
      { text: "Més llargs.", correct: false },
      { text: "Indefinits.", correct: false }
    ]
  },
  {
    question: "La finalització convencional és:",
    number: 53,
    answers: [
      { text: "Un pacte amb l'Administració.", correct: true },
      { text: "Una sentència judicial.", correct: false },
      { text: "Una ordre directa.", correct: false },
      { text: "Un acte sense força.", correct: false }
    ]
  },
  {
    question: "Si el procediment caduca, es poden reprendre les actuacions?",
    number: 54,
    answers: [
      { text: "No, s'ha d'iniciar un de nou.", correct: true },
      { text: "Sí, sense problemes.", correct: false },
      { text: "Només si s'ho vol l'Administració.", correct: false },
      { text: "Només si el ciutadà paga.", correct: false }
    ]
  },
  {
    question: "El procediment administratiu ha de garantir:",
    number: 55,
    answers: [
      { text: "La defensa de l'interessat.", correct: true },
      { text: "L'interès del funcionari.", correct: false },
      { text: "La celeritat excessiva.", correct: false },
      { text: "Res en especial.", correct: false }
    ]
  },
  {
    question: "Es pot finalitzar el procediment per causa de força major?",
    number: 56,
    answers: [
      { text: "Sí, quan es fa impossible continuar.", correct: true },
      { text: "No, mai.", correct: false },
      { text: "Només si hi ha un terratrèmol.", correct: false },
      { text: "Només en procediments electorals.", correct: false }
    ]
  },
  {
    question: "L'expedient administratiu és la base de la:",
    number: 57,
    answers: [
      { text: "Resolució.", correct: true },
      { text: "Denúncia.", correct: false },
      { text: "Sentència penal.", correct: false },
      { text: "Prohibició.", correct: false }
    ]
  },
  {
    question: "La tramitació simplificada obliga a fer tots els tràmits?",
    number: 58,
    answers: [
      { text: "No, s'exclouen els no necessaris.", correct: true },
      { text: "Sí, tots.", correct: false },
      { text: "Només els que decideix l'interessat.", correct: false },
      { text: "Mai.", correct: false }
    ]
  },
  {
    question: "El principi d'economia procedimental és:",
    number: 59,
    answers: [
      { text: "Evitar tràmits innecessaris.", correct: true },
      { text: "Estalviar diners a l'interessat.", correct: false },
      { text: "Estalviar paper a l'Administració.", correct: false },
      { text: "Prohibir els recursos.", correct: false }
    ]
  },
  {
    question: "La resolució del procediment ha de ser notificada?",
    number: 60,
    answers: [
      { text: "Sí.", correct: true },
      { text: "No, amb publicar-la n'hi ha prou.", correct: false },
      { text: "Només via email.", correct: false },
      { text: "Mai.", correct: false }
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