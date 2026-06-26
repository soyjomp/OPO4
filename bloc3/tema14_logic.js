const TEST_ID = "tema14"; 
const questions = [
  {
    question: "Quina és la finalitat principal d'un registre administratiu?",
    number: 1,
    answers: [
      { text: "Constància de l'entrada i sortida de documents.", correct: true },
      { text: "L'arxivament definitiu de tots els expedients.", correct: false },
      { text: "La publicació d'anuncis oficials a la premsa.", correct: false },
      { text: "L'atenció telefònica als ciutadans.", correct: false }
    ]
  },
  {
    question: "Segons la Llei 39/2015, quina és la naturalesa de les oficines d'assistència en matèria de registres?",
    number: 2,
    answers: [
      { text: "Són el punt de contacte entre el ciutadà i l'Administració.", correct: true },
      { text: "Són òrgans consultius sense atenció al públic.", correct: false },
      { text: "Són exclusivament virtuals, sense presència física.", correct: false },
      { text: "Són oficines de seguretat informàtica.", correct: false }
    ]
  },
  {
    question: "Quina informació ha de quedar constància en el registre en rebre un document?",
    number: 3,
    answers: [
      { text: "Identificació de l'interessat, tipus de document i data d'entrada.", correct: true },
      { text: "El número de compte bancari del funcionari.", correct: false },
      { text: "La valoració subjectiva del funcionari sobre el document.", correct: false },
      { text: "El color del paper del document.", correct: false }
    ]
  },
  {
    question: "Els documents que presentin els interessats en les oficines d'assistència han de ser:",
    number: 4,
    answers: [
      { text: "Digitalitzats per a la seva incorporació a l'expedient electrònic.", correct: true },
      { text: "Fotocopiats en paper i guardats en una carpeta física.", correct: false },
      { text: "Destruïts un cop el ciutadà marxa.", correct: false },
      { text: "Enviats per fax al destinatari.", correct: false }
    ]
  },
  {
    question: "Qui té l'obligació de presentar documents electrònicament?",
    number: 5,
    answers: [
      { text: "Les persones jurídiques (empreses, etc.).", correct: true },
      { text: "Totes les persones físiques sense excepció.", correct: false },
      { text: "Només els funcionaris públics.", correct: false },
      { text: "Cap ciutadà està obligat.", correct: false }
    ]
  },
  {
    question: "El Registre electrònic d'apoderaments permet:",
    number: 6,
    answers: [
      { text: "Inscriure les representacions que els interessats atorguen a tercers.", correct: true },
      { text: "Contractar personal per a l'Administració.", correct: false },
      { text: "Modificar la llei electoral.", correct: false },
      { text: "Pagar els impostos de circulació.", correct: false }
    ]
  },
  {
    question: "Si el registre electrònic està en període d'interrupció tècnica:",
    number: 7,
    answers: [
      { text: "Els terminis es poden prorrogar fins al següent dia hàbil.", correct: true },
      { text: "L'interessat perd el dret a presentar el document.", correct: false },
      { text: "S'ha d'esperar una setmana per presentar-ho.", correct: false },
      { text: "L'Administració té dret a no acceptar el document.", correct: false }
    ]
  },
  {
    question: "Què és un assentament registral?",
    number: 8,
    answers: [
      { text: "L'anotació de l'entrada o sortida d'un document.", correct: true },
      { text: "La signatura del cap de servei en una resolució.", correct: false },
      { text: "L'arxiu d'un document en un contenidor físic.", correct: false },
      { text: "La classificació d'una llei al DOGC.", correct: false }
    ]
  },
  {
    question: "Les oficines d'assistència en matèria de registres han d'ajudar els ciutadans a:",
    number: 9,
    answers: [
      { text: "Presentar sol·licituds i escrits de forma assistida.", correct: true },
      { text: "Redactar sentències judicials.", correct: false },
      { text: "Aprendre a programar ordinadors.", correct: false },
      { text: "Portar la comptabilitat de l'empresa.", correct: false }
    ]
  },
  {
    question: "Els documents originals presentats pel ciutadà en format paper:",
    number: 10,
    answers: [
      { text: "S'han de retornar a l'interessat una vegada digitalitzats.", correct: true },
      { text: "Es queden sempre en propietat de l'Administració.", correct: false },
      { text: "S'han de cremar immediatament.", correct: false },
      { text: "Es regalen a la biblioteca pública.", correct: false }
    ]
  },
  {
    question: "L'anotació en el registre electrònic és:",
    number: 11,
    answers: [
      { text: "Automàtica en el moment de la presentació.", correct: true },
      { text: "Manual i pot trigar dies.", correct: false },
      { text: "Opcional per a l'Administració.", correct: false },
      { text: "Només per a documents urgents.", correct: false }
    ]
  },
  {
    question: "L'accés als registres públics per part dels ciutadans s'ha de fer:",
    number: 12,
    answers: [
      { text: "Seguint les indicacions de seguretat i protecció de dades.", correct: true },
      { text: "Amb accés lliure a tots els expedients de tothom.", correct: false },
      { text: "Només si es paga una taxa d'accés.", correct: false },
      { text: "Només amb l'autorització del jutge.", correct: false }
    ]
  },
  {
    question: "Quina és la funció de la unitat de registre?",
    number: 13,
    answers: [
      { text: "Recepcionar, classificar i distribuir documents.", correct: true },
      { text: "Dictar lleis per a tot l'Estat.", correct: false },
      { text: "Fer les funcions d'inspector d'Hisenda.", correct: false },
      { text: "Donar consell jurídic als ciutadans.", correct: false }
    ]
  },
  {
    question: "En cas de dubte sobre si un document s'ha de registrar:",
    number: 14,
    answers: [
      { text: "S'ha d'anotar en el registre sempre que sigui un document administratiu.", correct: true },
      { text: "Es rebutja automàticament.", correct: false },
      { text: "S'envia a l'arxiu històric.", correct: false },
      { text: "Es pregunta a un advocat privat.", correct: false }
    ]
  },
  {
    question: "La 'Còpia autèntica' en el registre significa:",
    number: 15,
    answers: [
      { text: "Que l'Administració certifica que és una còpia fidel de l'original.", correct: true },
      { text: "Que és una fotocòpia sense cap valor.", correct: false },
      { text: "Que es pot copiar a mà.", correct: false },
      { text: "Que s'ha d'enviar per correu a tothom.", correct: false }
    ]
  },
  {
    question: "Què és l'Oficina d'Assistència en Matèria de Registres (OAMR)?",
    number: 16,
    answers: [
      { text: "Una oficina on s'ajuda a realitzar tràmits amb l'AAPP.", correct: true },
      { text: "Una oficina de policia.", correct: false },
      { text: "Un despatx privat d'advocats.", correct: false },
      { text: "Una botiga de material d'oficina.", correct: false }
    ]
  },
  {
    question: "L'horari d'atenció al públic de les oficines de registre ha de ser:",
    number: 17,
    answers: [
      { text: "Públic i conegut.", correct: true },
      { text: "Secret i canviant cada dia.", correct: false },
      { text: "Només nocturn.", correct: false },
      { text: "Mai fixat.", correct: false }
    ]
  },
  {
    question: "Quin mitjà és vàlid per presentar escrits a l'Administració?",
    number: 18,
    answers: [
      { text: "Seu electrònica, oficines de correus i oficines d'assistència.", correct: true },
      { text: "Només missatges de WhatsApp.", correct: false },
      { text: "Només de forma verbal a un funcionari.", correct: false },
      { text: "Cap mitjà està regulat.", correct: false }
    ]
  },
  {
    question: "Si una persona física no té mitjans digitals, pot presentar un document?",
    number: 19,
    answers: [
      { text: "Sí, en les oficines d'assistència presencial.", correct: true },
      { text: "No, està obligada a tenir Internet.", correct: false },
      { text: "Només si paga una multa.", correct: false },
      { text: "Només si ho autoritza un notari.", correct: false }
    ]
  },
  {
    question: "El registre administratiu ha de ser:",
    number: 20,
    answers: [
      { text: "Únic, comú i transparent.", correct: true },
      { text: "Complex, fragmentat i secret.", correct: false },
      { text: "Dispers i poc fiable.", correct: false },
      { text: "Diferent per a cada funcionari.", correct: false }
    ]
  },
  {
    question: "La finalitat de la digitalització en el registre és:",
    number: 21,
    answers: [
      { text: "Agilitar la tramitació i estalviar paper.", correct: true },
      { text: "Guanyar temps per a descansar.", correct: false },
      { text: "Dificultar la feina del ciutadà.", correct: false },
      { text: "No té cap finalitat especial.", correct: false }
    ]
  },
  {
    question: "Els documents registrats tenen garantida la seva:",
    number: 22,
    answers: [
      { text: "Integritat i autenticitat.", correct: true },
      { text: "Destrucció inmediata.", correct: false },
      { text: "Modificació lliure.", correct: false },
      { text: "Venda al millor postor.", correct: false }
    ]
  },
  {
    question: "Si presentem un document fora de termini:",
    number: 23,
    answers: [
      { text: "L'Administració pot declarar l'extemporaneïtat.", correct: true },
      { text: "L'Administració té l'obligació d'acceptar-lo igualment.", correct: false },
      { text: "S'elimina la data original.", correct: false },
      { text: "Es considera un error del funcionari.", correct: false }
    ]
  },
  {
    question: "El registre electrònic és accessible:",
    number: 24,
    answers: [
      { text: "24 hores al dia, tots els dies de l'any.", correct: true },
      { text: "Només en dies feiners.", correct: false },
      { text: "Només si el web és ràpid.", correct: false },
      { text: "Mai.", correct: false }
    ]
  },
  {
    question: "Les oficines d'assistència han de registrar:",
    number: 25,
    answers: [
      { text: "Totes les sol·licituds que es presentin.", correct: true },
      { text: "Només les que semblin importants.", correct: false },
      { text: "Només les de persones conegudes.", correct: false },
      { text: "Cap sol·licitud.", correct: false }
    ]
  },
  {
    question: "El rebut del registre ha de contenir:",
    number: 26,
    answers: [
      { text: "Número d'assentament, data i hora de presentació.", correct: true },
      { text: "L'adreça de correu personal del funcionari.", correct: false },
      { text: "Un consell sobre el procediment.", correct: false },
      { text: "Cap informació, és opcional.", correct: false }
    ]
  },
  {
    question: "Els documents presentats per correu postal han de ser:",
    number: 27,
    answers: [
      { text: "Presentats en sobre obert per ser segellats.", correct: true },
      { text: "Enviats sense remitent.", correct: false },
      { text: "Enviats només per missatgeria privada.", correct: false },
      { text: "Enviats sense el document original.", correct: false }
    ]
  },
  {
    question: "El registre electrònic garanteix:",
    number: 28,
    answers: [
      { text: "La constància de la data de presentació.", correct: true },
      { text: "La pèrdua dels documents.", correct: false },
      { text: "L'accés il·limitat a tots els expedients.", correct: false },
      { text: "Que el ciutadà no hagi d'identificar-se.", correct: false }
    ]
  },
  {
    question: "Les administracions públiques estan obligades a:",
    number: 29,
    answers: [
      { text: "Disposar d'un sistema de registre.", correct: true },
      { text: "Tancar tots els registres físics.", correct: false },
      { text: "Demarar papers innecessaris.", correct: false },
      { text: "No atendre mai el ciutadà.", correct: false }
    ]
  },
  {
    question: "La presentació de documents en el registre administratiu és el moment:",
    number: 30,
    answers: [
      { text: "En què comença el procediment (o s'inicia el tràmit).", correct: true },
      { text: "En què s'acaba tot.", correct: false },
      { text: "En què s'arxiva tot.", correct: false },
      { text: "Inexistent a la llei.", correct: false }
    ]
  },
  {
    question: "Els funcionaris de les oficines d'assistència han de:",
    number: 31,
    answers: [
      { text: "Identificar-se en la seva actuació.", correct: true },
      { text: "Ser anònims sempre.", correct: false },
      { text: "No donar cap informació.", correct: false },
      { text: "Ignorar les preguntes del ciutadà.", correct: false }
    ]
  },
  {
    question: "Què s'entén per registre descentralitzat?",
    number: 32,
    answers: [
      { text: "Diversos punts de registre repartits territorialment.", correct: true },
      { text: "Un registre situat només a Madrid.", correct: false },
      { text: "Un registre que no funciona.", correct: false },
      { text: "Un registre sense cap mena d'ordre.", correct: false }
    ]
  },
  {
    question: "El rebut del registre és la prova de:",
    number: 33,
    answers: [
      { text: "La presentació efectiva del document.", correct: true },
      { text: "La resolució favorable.", correct: false },
      { text: "Que el funcionari està d'acord amb tu.", correct: false },
      { text: "Res en particular.", correct: false }
    ]
  },
  {
    question: "L'Administració ha d'utilitzar mitjans electrònics per:",
    number: 34,
    answers: [
      { text: "El registre, l'arxiu i la notificació.", correct: true },
      { text: "Gastar més diners.", correct: false },
      { text: "Crear problemes al ciutadà.", correct: false },
      { text: "No fer res de tot això.", correct: false }
    ]
  },
  {
    question: "Qui pot utilitzar l'oficina d'assistència?",
    number: 35,
    answers: [
      { text: "Qualsevol ciutadà.", correct: true },
      { text: "Només els funcionaris.", correct: false },
      { text: "Només els polítics.", correct: false },
      { text: "Ningú.", correct: false }
    ]
  },
  {
    question: "La digitalització s'ha de fer amb:",
    number: 36,
    answers: [
      { text: "Garanties d'autenticitat.", correct: true },
      { text: "Mala qualitat.", correct: false },
      { text: "Només si es té temps.", correct: false },
      { text: "Cap garantia.", correct: false }
    ]
  },
  {
    question: "El registre pot rebutjar un document?",
    number: 37,
    answers: [
      { text: "Només si no compleix els requisits legals establerts.", correct: true },
      { text: "Si el funcionari no té ganes de treballar.", correct: false },
      { text: "Mai, s'han d'acceptar tots.", correct: false },
      { text: "Només si el ciutadà cau malament.", correct: false }
    ]
  },
  {
    question: "Què permet el Registre d'Apoderaments?",
    number: 38,
    answers: [
      { text: "Acreditar la representació d'una persona.", correct: true },
      { text: "Comprar menjar.", correct: false },
      { text: "Votar en eleccions.", correct: false },
      { text: "No fer res.", correct: false }
    ]
  },
  {
    question: "Les oficines d'assistència han de donar informació:",
    number: 39,
    answers: [
      { text: "Correcta, actualitzada i gratuïta.", correct: true },
      { text: "Errònia.", correct: false },
      { text: "Cobrant una taxa elevada.", correct: false },
      { text: "Només a petició judicial.", correct: false }
    ]
  },
  {
    question: "La presentació electrònica és obligatòria per a:",
    number: 40,
    answers: [
      { text: "Persones jurídiques i professionals col·legiats.", correct: true },
      { text: "Totes les persones físiques.", correct: false },
      { text: "Només per als menors d'edat.", correct: false },
      { text: "Només per als estrangers.", correct: false }
    ]
  },
  {
    question: "Els documents rebuts en el registre es: ",
    number: 41,
    answers: [
      { text: "Registren segons ordre d'entrada.", correct: true },
      { text: "Registren segons la preferència del funcionari.", correct: false },
      { text: "Registren quan es pot.", correct: false },
      { text: "No es registren mai.", correct: false }
    ]
  },
  {
    question: "El registre públic garanteix:",
    number: 42,
    answers: [
      { text: "La transparència en les relacions.", correct: true },
      { text: "L'ocultació d'informació.", correct: false },
      { text: "El caos administratiu.", correct: false },
      { text: "Res.", correct: false }
    ]
  },
  {
    question: "L'oficina d'assistència ajuda el ciutadà a:",
    number: 43,
    answers: [
      { text: "Tramitar sol·licituds.", correct: true },
      { text: "Saber les opinions polítiques.", correct: false },
      { text: "Aprendre anglès.", correct: false },
      { text: "Cap cosa.", correct: false }
    ]
  },
  {
    question: "La data d'entrada és:",
    number: 44,
    answers: [
      { text: "Fonamental per al còmput de terminis.", correct: true },
      { text: "Irrellevant per als terminis.", correct: false },
      { text: "Opcional.", correct: false },
      { text: "Només informació curiosa.", correct: false }
    ]
  },
  {
    question: "Quina característica ha de tenir el registre?",
    number: 45,
    answers: [
      { text: "Estar obert i ser eficient.", correct: true },
      { text: "Estar tancat i ser lent.", correct: false },
      { text: "Ser il·legal.", correct: false },
      { text: "Ser complicat.", correct: false }
    ]
  },
  {
    question: "La digitalització s'ha d'ajustar a:",
    number: 46,
    answers: [
      { text: "La normativa tècnica vigent.", correct: true },
      { text: "El que es vulgui.", correct: false },
      { text: "Res.", correct: false },
      { text: "El que digui el client.", correct: false }
    ]
  },
  {
    question: "Els documents originals són:",
    number: 47,
    answers: [
      { text: "Retornats després de digitalitzar-los.", correct: true },
      { text: "Destruïts per seguretat.", correct: false },
      { text: "Venuts.", correct: false },
      { text: "No es tornen mai.", correct: false }
    ]
  },
  {
    question: "La unitat de registre ha de tenir:",
    number: 48,
    answers: [
      { text: "Un sistema de gestió unificat.", correct: true },
      { text: "Molts sistemes diferents i caòtics.", correct: false },
      { text: "Cap sistema.", correct: false },
      { text: "Només paper.", correct: false }
    ]
  },
  {
    question: "El registre permet al ciutadà:",
    number: 49,
    answers: [
      { text: "Tenir seguretat sobre el lliurament dels seus escrits.", correct: true },
      { text: "Modificar lleis a conveniència.", correct: false },
      { text: "Accedir a comptes secrets.", correct: false },
      { text: "No fer res.", correct: false }
    ]
  },
  {
    question: "L'Administració ha d'estar dotada de:",
    number: 50,
    answers: [
      { text: "Oficines d'assistència competents.", correct: true },
      { text: "Funcionaris maleducats.", correct: false },
      { text: "Sistemes inútils.", correct: false },
      { text: "Cap infraestructura.", correct: false }
    ]
  },
  {
    question: "Un document pot ser presentat en:",
    number: 51,
    answers: [
      { text: "El registre de l'Administració competent.", correct: true },
      { text: "Un bar qualsevol.", correct: false },
      { text: "El correu personal.", correct: false },
      { text: "Cap lloc.", correct: false }
    ]
  },
  {
    question: "El registre electrònic és:",
    number: 52,
    answers: [
      { text: "Obligatori per a determinats subjectes.", correct: true },
      { text: "Prohibit.", correct: false },
      { text: "Opcional per a tothom.", correct: false },
      { text: "No existeix.", correct: false }
    ]
  },
  {
    question: "Les oficines d'assistència han de ser:",
    number: 53,
    answers: [
      { text: "Accessibles.", correct: true },
      { text: "Ocultes.", correct: false },
      { text: "Privades.", correct: false },
      { text: "Innecessàries.", correct: false }
    ]
  },
  {
    question: "La digitalització permet:",
    number: 54,
    answers: [
      { text: "Incorporar el document a l'expedient electrònic.", correct: true },
      { text: "Esborrar el document original.", correct: false },
      { text: "Fer coses il·legals.", correct: false },
      { text: "No fer res.", correct: false }
    ]
  },
  {
    question: "La finalitat de les oficines d'assistència és:",
    number: 55,
    answers: [
      { text: "Facilitar les relacions ciutadà-administració.", correct: true },
      { text: "Complicar les relacions.", correct: false },
      { text: "Desentendre's del ciutadà.", correct: false },
      { text: "Cap.", correct: false }
    ]
  },
  {
    question: "Si el registre fallés, el ciutadà:",
    number: 56,
    answers: [
      { text: "Té garanties legals d'extensió de terminis.", correct: true },
      { text: "No té garanties.", correct: false },
      { text: "Rep una multa.", correct: false },
      { text: "No s'ha de preocupar.", correct: false }
    ]
  },
  {
    question: "L'atenció al públic a les oficines ha de ser:",
    number: 57,
    answers: [
      { text: "Respectuosa i eficaç.", correct: true },
      { text: "Ruda i lenta.", correct: false },
      { text: "Inexistent.", correct: false },
      { text: "Desinteressada.", correct: false }
    ]
  },
  {
    question: "L'objectiu del registre és:",
    number: 58,
    answers: [
      { text: "Ordenar el flux de documents.", correct: true },
      { text: "Desordenar tot.", correct: false },
      { text: "Perdre la informació.", correct: false },
      { text: "No fer res.", correct: false }
    ]
  },
  {
    question: "Què s'anota en el registre?",
    number: 59,
    answers: [
      { text: "Els documents que entren i surten.", correct: true },
      { text: "Les vendes d'un supermercat.", correct: false },
      { text: "Les notes personals.", correct: false },
      { text: "No s'anota res.", correct: false }
    ]
  },
  {
    question: "Les oficines d'assistència han de ser:",
    number: 60,
    answers: [
      { text: "Punts de referència per al ciutadà.", correct: true },
      { text: "Zones prohibides.", correct: false },
      { text: "Llocs de reunió privada.", correct: false },
      { text: "Inexistents.", correct: false }
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