const TEST_ID = "tema9"; 
const questions = [
  {
    question: "Qui té la consideració d'interessat en el procediment administratiu?",
    number: 1,
    answers: [
      { text: "Els que són titulars de drets o interessos legítims.", correct: true },
      { text: "Totes les persones que s'assabenten del procediment.", correct: false },
      { text: "Només les entitats privades.", correct: false },
      { text: "Només els funcionaris públics.", correct: false }
    ]
  },
  {
    question: "El termini màxim per resoldre i notificar un procediment (si no s'estableix un altre) és de:",
    number: 2,
    answers: [
      { text: "Tres mesos.", correct: true },
      { text: "Un mes.", correct: false },
      { text: "Sis mesos.", correct: false },
      { text: "Dotze mesos.", correct: false }
    ]
  },
  {
    question: "Quan un acte administratiu és nul de ple dret?",
    number: 3,
    answers: [
      { text: "Quan lesionen el contingut essencial dels drets fonamentals.", correct: true },
      { text: "Quan tenen un defecte de forma que no impedeix la seva finalitat.", correct: false },
      { text: "Quan són dictats per òrgan competent.", correct: false },
      { text: "Quan no són publicats en el DOGC.", correct: false }
    ]
  },
  {
    question: "El còmput dels terminis expressats en dies s'entenen:",
    number: 4,
    answers: [
      { text: "Dies hàbils.", correct: true },
      { text: "Dies naturals.", correct: false },
      { text: "Dies festius.", correct: false },
      { text: "Dies lectius.", correct: false }
    ]
  },
  {
    question: "Quina és una fase del procediment administratiu?",
    number: 5,
    answers: [
      { text: "Instrucció.", correct: true },
      { text: "Negociació sindical.", correct: false },
      { text: "Auditoria externa.", correct: false },
      { text: "Promoció publicitària.", correct: false }
    ]
  },
  {
    question: "La motivació dels actes administratius és obligatòria quan:",
    number: 6,
    answers: [
      { text: "Són actes que limiten drets subjectius.", correct: true },
      { text: "Són actes de tràmit sense transcendència.", correct: false },
      { text: "Són actes d'organització interna.", correct: false },
      { text: "Mai és obligatòria.", correct: false }
    ]
  },
  {
    question: "El dret de les persones interessades a conèixer l'estat de tramitació és:",
    number: 7,
    answers: [
      { text: "Un dret recollit a la llei.", correct: true },
      { text: "Una cortesia de l'Administració.", correct: false },
      { text: "Un privilegi de determinats ciutadans.", correct: false },
      { text: "Inexistent en l'Administració moderna.", correct: false }
    ]
  },
  {
    question: "L'esmena de la sol·licitud és possible quan:",
    number: 8,
    answers: [
      { text: "La sol·licitud no reuneix els requisits exigits.", correct: true },
      { text: "L'interessat s'ha penedit de la seva petició.", correct: false },
      { text: "L'Administració està massa ocupada.", correct: false },
      { text: "L'interessat vol canviar el destinatari.", correct: false }
    ]
  },
  {
    question: "Què ocorre si transcorre el termini màxim sense notificar resolució?",
    number: 9,
    answers: [
      { text: "Es produeix el silenci administratiu.", correct: true },
      { text: "El procediment s'anul·la automàticament.", correct: false },
      { text: "S'inicia un procediment penal.", correct: false },
      { text: "L'Administració té termini il·limitat.", correct: false }
    ]
  },
  {
    question: "Els actes administratius es presumeixen:",
    number: 10,
    answers: [
      { text: "Vàlids i eficaços.", correct: true },
      { text: "Nuls fins que es demostri el contrari.", correct: false },
      { text: "Il·legals per defecte.", correct: false },
      { text: "Subjectes a interpretació lliure.", correct: false }
    ]
  },
  {
    question: "L'inici del procediment pot ser:",
    number: 11,
    answers: [
      { text: "D'ofici o a instància de part.", correct: true },
      { text: "Només per ordre del jutge.", correct: false },
      { text: "Exclusivament per denúncia privada.", correct: false },
      { text: "Només a petició del Parlament.", correct: false }
    ]
  },
  {
    question: "Els interessats poden actuar mitjançant:",
    number: 12,
    answers: [
      { text: "Representant.", correct: true },
      { text: "Només personalment.", correct: false },
      { text: "Exclusivament per mitjà de notari.", correct: false },
      { text: "No poden actuar per representant.", correct: false }
    ]
  },
  {
    question: "L'informe facultatiu és aquell que:",
    number: 13,
    answers: [
      { text: "No és vinculant i s'emet si l'òrgan ho considera.", correct: true },
      { text: "És obligatori en tots els casos.", correct: false },
      { text: "És vinculant i s'ha de seguir obligatòriament.", correct: false },
      { text: "L'ha de fer sempre un advocat.", correct: false }
    ]
  },
  {
    question: "La notificació ha de contenir:",
    number: 14,
    answers: [
      { text: "El text íntegre de l'acte i els recursos procedents.", correct: true },
      { text: "Només el nom de qui ho ha signat.", correct: false },
      { text: "Un resum amb l'opinió del funcionari.", correct: false },
      { text: "Cap informació addicional.", correct: false }
    ]
  },
  {
    question: "El procediment administratiu té com a objectiu:",
    number: 15,
    answers: [
      { text: "L'eficàcia i la protecció dels interessos generals.", correct: true },
      { text: "La complicació burocràtica.", correct: false },
      { text: "La despesa pressupostària.", correct: false },
      { text: "La paralització de l'activitat privada.", correct: false }
    ]
  },
  {
    question: "La capacitat d'obrar en el procediment l'ostenten:",
    number: 16,
    answers: [
      { text: "Les persones físiques i jurídiques.", correct: true },
      { text: "Només les persones majors de 65 anys.", correct: false },
      { text: "Només l'Administració.", correct: false },
      { text: "Només les associacions.", correct: false }
    ]
  },
  {
    question: "Un acte anul·lable és aquell que:",
    number: 17,
    answers: [
      { text: "Incorre en qualsevol infracció de l'ordenament jurídic.", correct: true },
      { text: "És sempre nul de ple dret.", correct: false },
      { text: "No té cap defecte.", correct: false },
      { text: "Ha estat dictat per qui no tenia competència.", correct: false }
    ]
  },
  {
    question: "Els terminis es compten a partir de:",
    number: 18,
    answers: [
      { text: "L'endemà de la notificació o publicació.", correct: true },
      { text: "El mateix dia de la notificació.", correct: false },
      { text: "Set dies després.", correct: false },
      { text: "La data de creació del document.", correct: false }
    ]
  },
  {
    question: "La fase d'instrucció té com a finalitat:",
    number: 19,
    answers: [
      { text: "La realització de tràmits i obtenció d'informació.", correct: true },
      { text: "La publicació en premsa.", correct: false },
      { text: "La venda de béns públics.", correct: false },
      { text: "La redacció final de la llei.", correct: false }
    ]
  },
  {
    question: "L'obligació de dictar resolució expressa existeix:",
    number: 20,
    answers: [
      { text: "En tots els procediments.", correct: true },
      { text: "Només si l'interessat ho demana.", correct: false },
      { text: "Només en temes tributaris.", correct: false },
      { text: "Mai, ja que sempre hi ha silenci.", correct: false }
    ]
  },
  {
    question: "Quina és una causa d'abstenció d'una autoritat?",
    number: 21,
    answers: [
      { text: "Tenir parentiu de consanguinitat amb l'interessat.", correct: true },
      { text: "Ser funcionari de carrera.", correct: false },
      { text: "Tenir molta feina.", correct: false },
      { text: "Viure a la mateixa ciutat.", correct: false }
    ]
  },
  {
    question: "La recusació permet que l'interessat:",
    number: 22,
    answers: [
      { text: "Promogui l'apartament d'una autoritat en un procediment.", correct: true },
      { text: "Faci una pregunta al Parlament.", correct: false },
      { text: "Canviï de jutge de manera arbitrària.", correct: false },
      { text: "Tanc l'Administració.", correct: false }
    ]
  },
  {
    question: "El tràmit d'audiència consisteix en:",
    number: 23,
    answers: [
      { text: "Donar vista a l'interessat abans de la resolució.", correct: true },
      { text: "Una entrevista amb el President.", correct: false },
      { text: "Un judici públic.", correct: false },
      { text: "Una audiència amb el rei.", correct: false }
    ]
  },
  {
    question: "L'acte administratiu que no necessita motivació és:",
    number: 24,
    answers: [
      { text: "Els actes de simple tràmit que no decideixen el fons.", correct: true },
      { text: "Els actes sancionadors.", correct: false },
      { text: "Els actes que deneguen drets.", correct: false },
      { text: "Els actes que resolen recursos.", correct: false }
    ]
  },
  {
    question: "La notificació telemàtica és obligatòria per a:",
    number: 25,
    answers: [
      { text: "Determinats subjectes (ex: persones jurídiques).", correct: true },
      { text: "Totes les persones sense excepció.", correct: false },
      { text: "Només per als menors d'edat.", correct: false },
      { text: "Només per als funcionaris.", correct: false }
    ]
  },
  {
    question: "L'ampliació de terminis ha de ser:",
    number: 26,
    answers: [
      { text: "Motivada i sense excedir la meitat del termini original.", correct: true },
      { text: "Automàtica i indefinida.", correct: false },
      { text: "Decidida per l'interessat.", correct: false },
      { text: "Sempre denegada.", correct: false }
    ]
  },
  {
    question: "Un recurs administratiu és:",
    number: 27,
    answers: [
      { text: "Un mecanisme de revisió dels actes administratius.", correct: true },
      { text: "Una multa econòmica.", correct: false },
      { text: "Una petició de diners.", correct: false },
      { text: "Una queixa sense validesa legal.", correct: false }
    ]
  },
  {
    question: "El procediment pot finalitzar per:",
    number: 28,
    answers: [
      { text: "Resolució, desistiment o renúncia.", correct: true },
      { text: "L'oblit de l'administració.", correct: false },
      { text: "La desaparició de l'interessat.", correct: false },
      { text: "El canvi de govern.", correct: false }
    ]
  },
  {
    question: "El silenci administratiu negatiu significa:",
    number: 29,
    answers: [
      { text: "Que la pretensió ha estat desestimada.", correct: true },
      { text: "Que l'Administració està d'acord.", correct: false },
      { text: "Que el termini s'ha suspès.", correct: false },
      { text: "Que s'ha d'iniciar un judici.", correct: false }
    ]
  },
  {
    question: "Què és la 'vista' de l'expedient?",
    number: 30,
    answers: [
      { text: "El dret a examinar el contingut de l'expedient.", correct: true },
      { text: "Mirar les instal·lacions des d'un balcó.", correct: false },
      { text: "Un tràmit visual exclusivament.", correct: false },
      { text: "Una reunió informal amb el cap.", correct: false }
    ]
  },
  {
    question: "La notificació s'entén practicada:",
    number: 31,
    answers: [
      { text: "Quan l'interessat hi accedeix (o transcorren 10 dies).", correct: true },
      { text: "El moment en què el funcionari la signa.", correct: false },
      { text: "Quan el correu postal l'envia.", correct: false },
      { text: "El moment en què la premsa en parla.", correct: false }
    ]
  },
  {
    question: "L'Administració té el deure de:",
    number: 32,
    answers: [
      { text: "Facilitar assistència als interessats per formular sol·licituds.", correct: true },
      { text: "Negar ajuda per no col·lapsar.", correct: false },
      { text: "Exigir el títol d'advocat als ciutadans.", correct: false },
      { text: "Cobrar una taxa per qualsevol dubte.", correct: false }
    ]
  },
  {
    question: "La rectificació d'errors materials pot fer-se:",
    number: 33,
    answers: [
      { text: "En qualsevol moment, d'ofici o a instància.", correct: true },
      { text: "Només abans de la resolució.", correct: false },
      { text: "Mai, la resolució és immòbil.", correct: false },
      { text: "Només per via judicial.", correct: false }
    ]
  },
  {
    question: "Els interessats poden presentar:",
    number: 34,
    answers: [
      { text: "Documents i al·legacions en qualsevol moment del tràmit.", correct: true },
      { text: "Només quan l'administració ho demana.", correct: false },
      { text: "Només per mitjà d'escriptura pública.", correct: false },
      { text: "Cap documentació nova després de l'inici.", correct: false }
    ]
  },
  {
    question: "La caducitat del procediment es produeix quan:",
    number: 35,
    answers: [
      { text: "El procediment s'atura per causa imputable a l'interessat.", correct: true },
      { text: "L'Administració té molta feina.", correct: false },
      { text: "L'interessat no ha pagat els impostos.", correct: false },
      { text: "El procediment ha durat massa poc.", correct: false }
    ]
  },
  {
    question: "La resolució ha de ser congruents amb:",
    number: 36,
    answers: [
      { text: "Les peticions formulades pels interessats.", correct: true },
      { text: "L'opinió política del partit governant.", correct: false },
      { text: "La disponibilitat pressupostària sense motiu.", correct: false },
      { text: "La conveniència del funcionari.", correct: false }
    ]
  },
  {
    question: "La signatura electrònica és:",
    number: 37,
    answers: [
      { text: "Una manera vàlida de signar actes administratius.", correct: true },
      { text: "Un joc de nens sense valor.", correct: false },
      { text: "Una cosa que només fan els bancs.", correct: false },
      { text: "Un document fet a mà escanejat.", correct: false }
    ]
  },
  {
    question: "L'Administració ha d'assegurar el registre de:",
    number: 38,
    answers: [
      { text: "Totes les entrades i sortides de documents.", correct: true },
      { text: "Només els documents importants.", correct: false },
      { text: "Els documents que vol guardar.", correct: false },
      { text: "Res, tot va al núvol directament.", correct: false }
    ]
  },
  {
    question: "Un interessat pot designar un representant:",
    number: 39,
    answers: [
      { text: "Sempre, per a la realització de tràmits.", correct: true },
      { text: "Només en cas d'inhabilitació.", correct: false },
      { text: "Només si és advocat.", correct: false },
      { text: "Mai, l'interessat ha d'anar personalment.", correct: false }
    ]
  },
  {
    question: "L'Administració té un termini per resoldre?",
    number: 40,
    answers: [
      { text: "Sí, establert per la normativa.", correct: true },
      { text: "No, decideix quan li va bé.", correct: false },
      { text: "Només si el ciutadà insisteix.", correct: false },
      { text: "Només per als tràmits de pagament.", correct: false }
    ]
  },
  {
    question: "Què és un registre electrònic?",
    number: 41,
    answers: [
      { text: "El punt per presentar documents de manera digital.", correct: true },
      { text: "Un llibre físic fet amb ordinador.", correct: false },
      { text: "Una llista de correus electrònics.", correct: false },
      { text: "Una base de dades privada.", correct: false }
    ]
  },
  {
    question: "L'acte administratiu que té defectes de forma:",
    number: 42,
    answers: [
      { text: "No s'anul·la si aconsegueix la seva finalitat.", correct: true },
      { text: "És sempre nul de ple dret.", correct: false },
      { text: "S'ha de repetir per força.", correct: false },
      { text: "Es converteix en un altre tipus d'acte.", correct: false }
    ]
  },
  {
    question: "La suspensió de l'execució d'un acte administratiu:",
    number: 43,
    answers: [
      { text: "Pot ocórrer si la seva execució causa danys irreparables.", correct: true },
      { text: "No es pot produir mai.", correct: false },
      { text: "És automàtica si es presenta recurs.", correct: false },
      { text: "Només pot decidir-la un jutge.", correct: false }
    ]
  },
  {
    question: "L'interès legítim és:",
    number: 44,
    answers: [
      { text: "Un dret a rebre un benefici o evitar un perjudici.", correct: true },
      { text: "El mateix que l'interès general.", correct: false },
      { text: "Una idea abstracta sense valor.", correct: false },
      { text: "Només el dret de propietat.", correct: false }
    ]
  },
  {
    question: "La notificació mitjançant compareixença significa:",
    number: 45,
    answers: [
      { text: "L'accés de l'interessat a la seu administrativa.", correct: true },
      { text: "Que l'interessat ha d'anar a judici.", correct: false },
      { text: "Una cita telefònica.", correct: false },
      { text: "Una notificació via correu certificat.", correct: false }
    ]
  },
  {
    question: "Les persones físiques tenen dret a:",
    number: 46,
    answers: [
      { text: "Comunicar-se amb l'Administració per mitjans electrònics.", correct: true },
      { text: "Ser ateses només en horari nocturn.", correct: false },
      { text: "Exigir la signatura del President.", correct: false },
      { text: "No identificar-se mai.", correct: false }
    ]
  },
  {
    question: "El tràmit de prova és:",
    number: 47,
    answers: [
      { text: "La demostració dels fets al·legats.", correct: true },
      { text: "La presentació de documents d'identitat.", correct: false },
      { text: "Un acte de fe.", correct: false },
      { text: "Només per a casos penals.", correct: false }
    ]
  },
  {
    question: "El procediment administratiu ha de ser:",
    number: 48,
    answers: [
      { text: "Àgil, senzill i sense dilacions.", correct: true },
      { text: "Complex i burocràtic.", correct: false },
      { text: "Lent i meticulós.", correct: false },
      { text: "Secret fins al final.", correct: false }
    ]
  },
  {
    question: "Què és la 'resolució'?",
    number: 49,
    answers: [
      { text: "L'acte final que posa fi al procediment.", correct: true },
      { text: "L'inici de la investigació.", correct: false },
      { text: "Un document sense importància.", correct: false },
      { text: "Una opinió del funcionari.", correct: false }
    ]
  },
  {
    question: "La declaració responsable permet:",
    number: 50,
    answers: [
      { text: "Iniciar l'activitat sense esperar l'autorització prèvia.", correct: true },
      { text: "Evitar pagar impostos.", correct: false },
      { text: "No seguir cap llei.", correct: false },
      { text: "Sustituir la resolució final.", correct: false }
    ]
  },
  {
    question: "L'interessat pot desistir de la seva sol·licitud?",
    number: 51,
    answers: [
      { text: "Sí, en qualsevol moment abans de la resolució.", correct: true },
      { text: "Mai, una vegada presentada no es pot tornar enrere.", correct: false },
      { text: "Només amb l'autorització del jutge.", correct: false },
      { text: "Només si el procediment és molt llarg.", correct: false }
    ]
  },
  {
    question: "Què s'entén per acte administratiu?",
    number: 52,
    answers: [
      { text: "Declaració de voluntat d'una Administració.", correct: true },
      { text: "Un fet de la natura.", correct: false },
      { text: "Una conversa privada entre funcionaris.", correct: false },
      { text: "La llei aprovada pel Parlament.", correct: false }
    ]
  },
  {
    question: "Si l'Administració no té competència, pot dictar l'acte?",
    number: 53,
    answers: [
      { text: "No, seria nul de ple dret.", correct: true },
      { text: "Sí, si és urgent.", correct: false },
      { text: "Sí, si el funcionari vol.", correct: false },
      { text: "Mai, però no té conseqüències.", correct: false }
    ]
  },
  {
    question: "La llei 39/2015 regula:",
    number: 54,
    answers: [
      { text: "El procediment administratiu comú.", correct: true },
      { text: "La llei de pressupostos.", correct: false },
      { text: "El dret penal espanyol.", correct: false },
      { text: "El dret civil català.", correct: false }
    ]
  },
  {
    question: "Els terminis poden ser:",
    number: 55,
    answers: [
      { text: "Dies, mesos o anys.", correct: true },
      { text: "Només hores.", correct: false },
      { text: "Només setmanes.", correct: false },
      { text: "Segons el que decideixi l'interessat.", correct: false }
    ]
  },
  {
    question: "Què passa si l'interessat no es pot identificar?",
    number: 56,
    answers: [
      { text: "El procediment es pot arxivar.", correct: true },
      { text: "L'Administració ho ha de resoldre igual.", correct: false },
      { text: "És responsabilitat de l'administració esbrinar qui és.", correct: false },
      { text: "No passa res.", correct: false }
    ]
  },
  {
    question: "El dret d'accés a l'expedient és:",
    number: 57,
    answers: [
      { text: "Un dret bàsic de l'interessat.", correct: true },
      { text: "Un favor especial.", correct: false },
      { text: "Inexistent en el procediment.", correct: false },
      { text: "Exclusiu per a polítics.", correct: false }
    ]
  },
  {
    question: "La notificació es pot fer per correu postal?",
    number: 58,
    answers: [
      { text: "Sí, sempre que hi hagi constància de la recepció.", correct: true },
      { text: "Mai, només per Internet.", correct: false },
      { text: "Només via missatgeria privada.", correct: false },
      { text: "Només al lloc de treball.", correct: false }
    ]
  },
  {
    question: "Les administracions públiques han d'actuar d'acord amb:",
    number: 59,
    answers: [
      { text: "El principi de legalitat.", correct: true },
      { text: "La voluntat del govern de torn.", correct: false },
      { text: "Els interessos econòmics privats.", correct: false },
      { text: "L'atzar.", correct: false }
    ]
  },
  {
    question: "Un acte administratiu és eficaç quan:",
    number: 60,
    answers: [
      { text: "Produeix efectes jurídics.", correct: true },
      { text: "Es queda guardat a l'armari.", correct: false },
      { text: "Només es publica al web.", correct: false },
      { text: "Té moltes pàgines.", correct: false }
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