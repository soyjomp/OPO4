const TEST_ID = "tema20"; 
const questions = [
  {
    question: "Quina és la situació administrativa en què el funcionari ocupa un lloc de treball amb reserva de plaça?",
    number: 1,
    answers: [
      { text: "Servei actiu.", correct: true },
      { text: "Excedència voluntària per interès particular.", correct: false },
      { text: "Suspensió de funcions.", correct: false },
      { text: "Excedència per agrupació familiar.", correct: false }
    ]
  },
  {
    question: "El personal funcionari que passa a ocupar un càrrec electe, en quina situació es troba?",
    number: 2,
    answers: [
      { text: "Serveis especials.", correct: true },
      { text: "Excedència forçosa.", correct: false },
      { text: "Servei en altres administracions públiques.", correct: false },
      { text: "Servei actiu.", correct: false }
    ]
  },
  {
    question: "L'excedència voluntària per interès particular requereix un temps mínim de servei previ?",
    number: 3,
    answers: [
      { text: "Sí, generalment 5 anys.", correct: true },
      { text: "No, es pot demanar des del primer dia.", correct: false },
      { text: "Només 1 any.", correct: false },
      { text: "10 anys.", correct: false }
    ]
  },
  {
    question: "Quina situació administrativa s'aplica al funcionari que ha de complir una sanció de suspensió?",
    number: 4,
    answers: [
      { text: "Suspensió de funcions.", correct: true },
      { text: "Excedència forçosa.", correct: false },
      { text: "Excedència per raons de violència de gènere.", correct: false },
      { text: "Servei actiu.", correct: false }
    ]
  },
  {
    question: "Es poden compatibilitzar dos llocs de treball al sector públic?",
    number: 5,
    answers: [
      { text: "Només en els casos expressament previstos per la Llei d'incompatibilitats.", correct: true },
      { text: "Mai, està totalment prohibit.", correct: false },
      { text: "Sempre que es tinguin jornades reduïdes.", correct: false },
      { text: "Només si els dos llocs són de lliure designació.", correct: false }
    ]
  },
  {
    question: "Què és la lliure designació com a sistema de mobilitat?",
    number: 6,
    answers: [
      { text: "Un sistema de provisió que requereix convocatòria pública i concurrència.", correct: false },
      { text: "Un sistema discrecional per a llocs de responsabilitat especial.", correct: true },
      { text: "El sistema ordinari per a qualsevol lloc base.", correct: false },
      { text: "Un sistema basat exclusivament en l'antiguitat.", correct: false }
    ]
  },
  {
    question: "Quina és la durada màxima d'una excedència per cura de familiar?",
    number: 7,
    answers: [
      { text: "3 anys.", correct: true },
      { text: "1 any.", correct: false },
      { text: "2 anys.", correct: false },
      { text: "No té límit.", correct: false }
    ]
  },
  {
    question: "El funcionari en excedència voluntària per interès particular, té dret a reserva de lloc?",
    number: 8,
    answers: [
      { text: "No.", correct: true },
      { text: "Sí, durant els primers 2 anys.", correct: false },
      { text: "Sí, durant tot el període.", correct: false },
      { text: "Sí, si el departament ho aprova.", correct: false }
    ]
  },
  {
    question: "Quina activitat privada és compatible amb el lloc de funcionari?",
    number: 9,
    answers: [
      { text: "La docència en centres universitaris a temps parcial.", correct: true },
      { text: "La direcció d'una empresa que contracta amb l'Administració.", correct: false },
      { text: "L'exercici de l'advocacia contra l'Administració.", correct: false },
      { text: "Qualsevol activitat que no afecti l'horari.", correct: false }
    ]
  },
  {
    question: "Com s'anomena la mobilitat del funcionari per necessitats del servei?",
    number: 10,
    answers: [
      { text: "Comissió de serveis.", correct: true },
      { text: "Adscripció provisional.", correct: true },
      { text: "Concurs de mèrits.", correct: false },
      { text: "Lliure designació.", correct: false }
    ]
  },
  {
    question: "La retribució del funcionari en situació de servei en altres administracions:",
    number: 11,
    answers: [
      { text: "La percep de l'administració de destinació.", correct: true },
      { text: "La manté de l'administració d'origen.", correct: false },
      { text: "No en rep cap.", correct: false },
      { text: "La percep de les dues.", correct: false }
    ]
  },
  {
    question: "Quina llei regula fonamentalment les incompatibilitats?",
    number: 12,
    answers: [
      { text: "Llei 53/1984, d'incompatibilitats del personal al servei de les administracions públiques.", correct: true },
      { text: "Llei 39/2015.", correct: false },
      { text: "TREBEP.", correct: false },
      { text: "Llei de la funció pública de Catalunya.", correct: false }
    ]
  },
  {
    question: "El personal funcionari pot exercir activitats privades relacionades amb el seu càrrec?",
    number: 13,
    answers: [
      { text: "No, si impliquen un conflicte d'interessos.", correct: true },
      { text: "Sí, sense límit.", correct: false },
      { text: "Només si es fan fora de l'horari laboral.", correct: false },
      { text: "Només si el seu cap ho autoritza per escrit.", correct: false }
    ]
  },
  {
    question: "L'excedència per violència de gènere permet reservar el lloc de treball?",
    number: 14,
    answers: [
      { text: "Sí, durant els sis primers mesos (prorrogables).", correct: true },
      { text: "No hi ha reserva.", correct: false },
      { text: "Sí, durant 5 anys.", correct: false },
      { text: "Només durant 1 mes.", correct: false }
    ]
  },
  {
    question: "En quina situació està un funcionari que és cessat d'un lloc de lliure designació?",
    number: 15,
    answers: [
      { text: "Adscripció provisional.", correct: true },
      { text: "Excedència forçosa.", correct: false },
      { text: "Servei en altres administracions.", correct: false },
      { text: "Suspensió.", correct: false }
    ]
  },
  {
    question: "El funcionari en excedència per cura de fills, durant el primer any té dret a:",
    number: 16,
    answers: [
      { text: "Reserva del mateix lloc de treball.", correct: true },
      { text: "Reserva de qualsevol lloc del mateix grup.", correct: false },
      { text: "No té dret a reserva.", correct: false },
      { text: "Només té dret a preferència per tornar.", correct: false }
    ]
  },
  {
    question: "Pot un funcionari jubilat exercir activitats privades?",
    number: 17,
    answers: [
      { text: "Sí, amb caràcter general.", correct: true },
      { text: "No, està prohibit.", correct: false },
      { text: "Només si no va ser directiu.", correct: false },
      { text: "Només amb autorització prèvia.", correct: false }
    ]
  },
  {
    question: "Com s'anomena el pas d'un funcionari d'una administració a una altra?",
    number: 18,
    answers: [
      { text: "Transferència o trasllat (mobilitat interadministrativa).", correct: true },
      { text: "Concurs de trasllats.", correct: false },
      { text: "Comissió de serveis.", correct: false },
      { text: "Permuta.", correct: false }
    ]
  },
  {
    question: "Els membres de les Corts Generals o Assemblees legislatives, en quina situació estan?",
    number: 19,
    answers: [
      { text: "Serveis especials.", correct: true },
      { text: "Excedència forçosa.", correct: false },
      { text: "Servei actiu.", correct: false },
      { text: "Excedència voluntària.", correct: false }
    ]
  },
  {
    question: "El personal al servei de les administracions públiques ha de declarar les seves activitats privades?",
    number: 20,
    answers: [
      { text: "Sí, per obtenir l'autorització de compatibilitat.", correct: true },
      { text: "No és necessari.", correct: false },
      { text: "Només si percep un sou alt.", correct: false },
      { text: "Només a petició judicial.", correct: false }
    ]
  },
  {
    question: "Quin és l'òrgan que autoritza la compatibilitat?",
    number: 21,
    answers: [
      { text: "L'òrgan competent de Funció Pública.", correct: true },
      { text: "El Síndic de Greuges.", correct: false },
      { text: "El tribunal de comptes.", correct: false },
      { text: "El Parlament.", correct: false }
    ]
  },
  {
    question: "Què és la comissió de serveis?",
    number: 22,
    answers: [
      { text: "Forma de provisió temporal per ocupar un lloc amb reserva del propi.", correct: true },
      { text: "Forma de jubilació anticipada.", correct: false },
      { text: "Forma d'adquisició de la plaça definitiva.", correct: false },
      { text: "Forma d'excedència.", correct: false }
    ]
  },
  {
    question: "L'excedència per agrupació familiar es pot concedir quan?",
    number: 23,
    answers: [
      { text: "El cònjuge viu en una altra localitat per motius de treball.", correct: true },
      { text: "Es vol anar de vacances.", correct: false },
      { text: "Es vol fer un curs de formació.", correct: false },
      { text: "Es canvia de casa en el mateix municipi.", correct: false }
    ]
  },
  {
    question: "La suspensió de funcions té efectes econòmics?",
    number: 24,
    answers: [
      { text: "Sí, implica la pèrdua total o parcial de retribucions.", correct: true },
      { text: "No, es manté el sou íntegre.", correct: false },
      { text: "Només perden les pagues extres.", correct: false },
      { text: "Només perden el complement de destí.", correct: false }
    ]
  },
  {
    question: "Què s'entén per activitat pública en el marc d'incompatibilitats?",
    number: 25,
    answers: [
      { text: "L'exercici de funcions en qualsevol administració o entitat del sector públic.", correct: true },
      { text: "Només el treball en l'Administració de l'Estat.", correct: false },
      { text: "Només els càrrecs polítics.", correct: false },
      { text: "Només el treball en la Generalitat.", correct: false }
    ]
  },
  {
    question: "El pas al servei actiu des de l'excedència es realitza via:",
    number: 26,
    answers: [
      { text: "Reingrés al servei actiu (segons normativa).", correct: true },
      { text: "Concurs de mèrits automàtic.", correct: false },
      { text: "Petició verbal al departament.", correct: false },
      { text: "Només mitjançant oposició.", correct: false }
    ]
  },
  {
    question: "Pot un funcionari de carrera ser personal laboral d'una altra administració?",
    number: 27,
    answers: [
      { text: "No, és incompatible.", correct: true },
      { text: "Sí, si vol.", correct: false },
      { text: "Només si és de confiança.", correct: false },
      { text: "Sí, si l'Administració l'autoritza.", correct: false }
    ]
  },
  {
    question: "Què és la permuta?",
    number: 28,
    answers: [
      { text: "Intercanvi de llocs de treball entre dos funcionaris.", correct: true },
      { text: "Intercanvi d'horaris.", correct: false },
      { text: "Intercanvi de sous.", correct: false },
      { text: "Intercanvi de departaments sense acord.", correct: false }
    ]
  },
  {
    question: "El personal funcionari pot ser soci de societats mercantils?",
    number: 29,
    answers: [
      { text: "Sí, llevat que tinguin activitat amb l'Administració pública.", correct: true },
      { text: "No, mai.", correct: false },
      { text: "Sí, si és accionista majoritari.", correct: false },
      { text: "Sempre amb autorització.", correct: false }
    ]
  },
  {
    question: "Quan un funcionari està en serveis especials, té dret a:",
    number: 30,
    answers: [
      { text: "Computar el temps a efectes d'antiguitat.", correct: true },
      { text: "Cobrar el sou de la Generalitat.", correct: false },
      { text: "Tornar al lloc de treball en tot moment.", correct: false },
      { text: "Cap dret laboral.", correct: false }
    ]
  },
  {
    question: "Quina és la situació d'un funcionari que està pendent d'adscripció?",
    number: 31,
    answers: [
      { text: "Adscripció provisional.", correct: true },
      { text: "Excedència.", correct: false },
      { text: "Servei actiu permanent.", correct: false },
      { text: "Suspensió.", correct: false }
    ]
  },
  {
    question: "L'exercici de la docència universitària requereix autorització?",
    number: 32,
    answers: [
      { text: "Sí, sempre.", correct: true },
      { text: "No, és lliure.", correct: false },
      { text: "Només si es fa fora d'Espanya.", correct: false },
      { text: "Només si es fa en universitats privades.", correct: false }
    ]
  },
  {
    question: "La limitació de la jornada laboral per compatibilitat és:",
    number: 33,
    answers: [
      { text: "Un límit establert per llei en l'exercici de dues activitats.", correct: true },
      { text: "No hi ha límit horari.", correct: false },
      { text: "Només si les activitats són públiques.", correct: false },
      { text: "Només si les activitats són privades.", correct: false }
    ]
  },
  {
    question: "El funcionari en excedència forçosa, té dret a reingrés?",
    number: 34,
    answers: [
      { text: "Sí, amb caràcter prioritari.", correct: true },
      { text: "No té cap dret.", correct: false },
      { text: "Només si s'obre un concurs.", correct: false },
      { text: "Ha de tornar a fer oposicions.", correct: false }
    ]
  },
  {
    question: "Les incompatibilitats afecten al personal:",
    number: 35,
    answers: [
      { text: "A tot el personal al servei de les administracions públiques.", correct: true },
      { text: "Només al personal de la Generalitat.", correct: false },
      { text: "Només als funcionaris del grup A.", correct: false },
      { text: "Només al personal laboral.", correct: false }
    ]
  },
  {
    question: "Què s'ha de fer si es produeix una incompatibilitat sobrevinguda?",
    number: 36,
    answers: [
      { text: "Opte per una de les activitats en el termini reglamentari.", correct: true },
      { text: "Pots mantenir les dues.", correct: false },
      { text: "Has de renunciar a totes dues.", correct: false },
      { text: "L'Administració tria per tu.", correct: false }
    ]
  },
  {
    question: "El funcionari en excedència per violència terrorista té dret a:",
    number: 37,
    answers: [
      { text: "Reserva de lloc i computació d'antiguitat.", correct: true },
      { text: "Reserva sense antiguitat.", correct: false },
      { text: "No té dret a reserva.", correct: false },
      { text: "Només dret a indemnització.", correct: false }
    ]
  },
  {
    question: "Què es pot fer en cas d'unir serveis públics?",
    number: 38,
    answers: [
      { text: "Sol·licitar el reconeixement de triennis.", correct: true },
      { text: "Renunciar als anys anteriors.", correct: false },
      { text: "Doblar el sou.", correct: false },
      { text: "Demanar un permís addicional.", correct: false }
    ]
  },
  {
    question: "En situació de servei actiu, el funcionari pot:",
    number: 39,
    answers: [
      { text: "Exercir la representació sindical.", correct: true },
      { text: "Exercir qualsevol negoci privat.", correct: false },
      { text: "No treballar si està cansat.", correct: false },
      { text: "Tria el seu horari a discreció.", correct: false }
    ]
  },
  {
    question: "Quina és la finalitat del concurs de trasllats?",
    number: 40,
    answers: [
      { text: "Permetre la mobilitat voluntària del personal funcionari.", correct: true },
      { text: "Reduir el nombre de funcionaris.", correct: false },
      { text: "Sancionar el personal.", correct: false },
      { text: "Incrementar el sou de tots.", correct: false }
    ]
  },
  {
    question: "Pot un funcionari de la Generalitat passar a un altre Ministeri?",
    number: 41,
    answers: [
      { text: "Sí, mitjançant els mecanismes de mobilitat interadministrativa.", correct: true },
      { text: "No, és impossible.", correct: false },
      { text: "Només si es jubila.", correct: false },
      { text: "Només per motius de salut.", correct: false }
    ]
  },
  {
    question: "Què és la suspensió ferma?",
    number: 42,
    answers: [
      { text: "La derivada d'una sanció disciplinària o sentència.", correct: true },
      { text: "Una suspensió temporal sense motiu.", correct: false },
      { text: "Una suspensió voluntària.", correct: false },
      { text: "La suspensió per fer tasques de govern.", correct: false }
    ]
  },
  {
    question: "L'excedència voluntària per interès particular no té dret a:",
    number: 43,
    answers: [
      { text: "Reserva de lloc i retribucions.", correct: true },
      { text: "Tornar al servei actiu.", correct: false },
      { text: "Dret a triennis.", correct: false },
      { text: "Cap dret laboral.", correct: false }
    ]
  },
  {
    question: "La compatibilitat per a activitats culturals o esportives:",
    number: 44,
    answers: [
      { text: "Pot ser autoritzada si no desmereix la funció.", correct: true },
      { text: "Està prohibida.", correct: false },
      { text: "És sempre lliure.", correct: false },
      { text: "Només si es fa a Catalunya.", correct: false }
    ]
  },
  {
    question: "El personal funcionari pot ser càrrec directiu en una altra administració?",
    number: 45,
    answers: [
      { text: "Sí, en situació de serveis especials o servei en altres administracions.", correct: true },
      { text: "Mai.", correct: false },
      { text: "Només a l'empresa privada.", correct: false },
      { text: "Sempre que tingui permís del seu cap directe.", correct: false }
    ]
  },
  {
    question: "L'adscripció provisional no pot durar indefinidament?",
    number: 46,
    answers: [
      { text: "Correcte, s'ha de convocar el concurs corresponent.", correct: true },
      { text: "És il·limitada.", correct: false },
      { text: "Depèn de la voluntat del funcionari.", correct: false },
      { text: "S'acaba en 1 mes.", correct: false }
    ]
  },
  {
    question: "En quina situació hi ha dret a triennis?",
    number: 47,
    answers: [
      { text: "Servei actiu, serveis especials i altres (segons normativa).", correct: true },
      { text: "Només en excedència voluntària.", correct: false },
      { text: "Només en suspensió.", correct: false },
      { text: "En cap situació.", correct: false }
    ]
  },
  {
    question: "Què és la jubilació parcial?",
    number: 48,
    answers: [
      { text: "Situació que permet combinar el treball i la pensió (segons condicions legals).", correct: true },
      { text: "Jubilació definitiva.", correct: false },
      { text: "Jubilació per malaltia.", correct: false },
      { text: "Suspensió de sou.", correct: false }
    ]
  },
  {
    question: "Els funcionaris públics tenen deure d'exclusivitat?",
    number: 49,
    answers: [
      { text: "En termes generals, sí, llevat de les compatibilitats.", correct: true },
      { text: "Mai.", correct: false },
      { text: "Sempre, sense excepcions.", correct: false },
      { text: "Només els polítics.", correct: false }
    ]
  },
  {
    question: "La mobilitat pot ser obligatòria?",
    number: 50,
    answers: [
      { text: "Sí, per motius de reestructuració o necessitats del servei.", correct: true },
      { text: "Mai.", correct: false },
      { text: "Només amb acord sindical.", correct: false },
      { text: "Només si el funcionari vol.", correct: false }
    ]
  },
  {
    question: "L'excedència per cura de familiar pot ser fraccionada?",
    number: 51,
    answers: [
      { text: "Sí, segons la normativa vigent.", correct: true },
      { text: "No, ha de ser seguida.", correct: false },
      { text: "Només un cop.", correct: false },
      { text: "Mai.", correct: false }
    ]
  },
  {
    question: "Com s'ha de sol·licitar el reingrés al servei actiu?",
    number: 52,
    answers: [
      { text: "Per escrit seguint el procediment establert.", correct: true },
      { text: "Per trucada telefònica.", correct: false },
      { text: "S'entén fet automàticament.", correct: false },
      { text: "Cal esperar a una crida.", correct: false }
    ]
  },
  {
    question: "Què és la compatibilitat per l'exercici de càrrecs de direcció?",
    number: 53,
    answers: [
      { text: "Una excepció que requereix autorització prèvia.", correct: true },
      { text: "No existeix.", correct: false },
      { text: "És automàtica.", correct: false },
      { text: "Només per a càrrecs polítics.", correct: false }
    ]
  },
  {
    question: "El personal laboral es regeix per les mateixes incompatibilitats que els funcionaris?",
    number: 54,
    answers: [
      { text: "Sí, en allò essencial de l'exercici de funcions públiques.", correct: true },
      { text: "No, tenen altres regles completament diferents.", correct: false },
      { text: "Sempre.", correct: false },
      { text: "Mai.", correct: false }
    ]
  },
  {
    question: "Quina situació es dóna quan un funcionari és declarat en suspensió provisional?",
    number: 55,
    answers: [
      { text: "Com a mesura cautelar en un expedient disciplinari.", correct: true },
      { text: "Per vacances.", correct: false },
      { text: "Per exercir un càrrec polític.", correct: false },
      { text: "Per excedència.", correct: false }
    ]
  },
  {
    question: "L'excedència per raons de gènere pot no tenir reserva?",
    number: 56,
    answers: [
      { text: "No, la reserva és obligatòria per llei.", correct: true },
      { text: "Sí, sempre.", correct: false },
      { text: "Només si el funcionari vol.", correct: false },
      { text: "Depèn de l'Administració.", correct: false }
    ]
  },
  {
    question: "Es pot fer mobilitat interadministrativa entre ajuntaments?",
    number: 57,
    answers: [
      { text: "Sí, mitjançant els mecanismes de provisió de llocs.", correct: true },
      { text: "No.", correct: false },
      { text: "Només si l'Estat ho autoritza.", correct: false },
      { text: "Només si és pel mateix municipi.", correct: false }
    ]
  },
  {
    question: "Les incompatibilitats busquen:",
    number: 58,
    answers: [
      { text: "Garantir l'objectivitat i imparcialitat en el servei públic.", correct: true },
      { text: "Evitar que el funcionari tingui diners.", correct: false },
      { text: "Que el funcionari només treballi per l'Estat.", correct: false },
      { text: "Limitar la llibertat d'empresa.", correct: false }
    ]
  },
  {
    question: "Què és la suspensió de funcions de caràcter disciplinari?",
    number: 59,
    answers: [
      { text: "Una sanció per la comissió d'una falta greu o molt greu.", correct: true },
      { text: "Un premi per bona feina.", correct: false },
      { text: "Una situació administrativa per motius personals.", correct: false },
      { text: "Una jubilació anticipada.", correct: false }
    ]
  },
  {
    question: "L'excedència voluntària per agrupació familiar no té dret a:",
    number: 60,
    answers: [
      { text: "Reserva de lloc i retribucions.", correct: true },
      { text: "Computar l'antiguitat.", correct: false },
      { text: "Tornar al servei actiu.", correct: false },
      { text: "Cap dret reconegut.", correct: false }
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