const TEST_ID = "tema6"; 
const questions = [
  {
    question: "Quin és l'òrgan col·legiat superior de l'Administració de la Generalitat?",
    number: 1,
    answers: [
      { text: "El Parlament.", correct: false },
      { text: "El Govern.", correct: true },
      { text: "La Presidència.", correct: false },
      { text: "El Consell de Garanties Estatutàries.", correct: false }
    ]
  },
  {
    question: "Qui té la potestat de nomenar i separar els consellers?",
    number: 2,
    answers: [
      { text: "El Parlament.", correct: false },
      { text: "El Ple del Govern.", correct: false },
      { text: "El President o Presidenta de la Generalitat.", correct: true },
      { text: "El Consell Executiu.", correct: false }
    ]
  },
  {
    question: "Què és el sector públic institucional de la Generalitat?",
    number: 3,
    answers: [
      { text: "Només els departaments.", correct: false },
      { text: "El conjunt d'organismes, entitats i ens vinculats o dependents.", correct: true },
      { text: "Exclusivament les empreses públiques.", correct: false },
      { text: "El conjunt dels empleats públics de la Generalitat.", correct: false }
    ]
  },
  {
    question: "Quina és la funció principal dels departaments?",
    number: 4,
    answers: [
      { text: "Exercir les competències en els àmbits d'actuació que tenen assignats.", correct: true },
      { text: "Controlar el pressupost del Parlament.", correct: false },
      { text: "Representar la Generalitat a l'estranger de forma autònoma.", correct: false },
      { text: "Dirigir el poder judicial.", correct: false }
    ]
  },
  {
    question: "Els òrgans directius de l'Administració de la Generalitat es divideixen en:",
    number: 5,
    answers: [
      { text: "Alts càrrecs i càrrecs de confiança.", correct: false },
      { text: "Secretaris generals i directors generals.", correct: true },
      { text: "Funcionaris i laborals.", correct: false },
      { text: "Delegats territorials i locals.", correct: false }
    ]
  },
  {
    question: "Quin principi regeix l'organització i el funcionament de l'Administració?",
    number: 6,
    answers: [
      { text: "El principi de jerarquia.", correct: true },
      { text: "El principi de lucre.", correct: false },
      { text: "El principi de secretisme.", correct: false },
      { text: "El principi de desvinculació.", correct: false }
    ]
  },
  {
    question: "Qui determina l'estructura dels departaments?",
    number: 7,
    answers: [
      { text: "El Parlament, mitjançant una llei.", correct: false },
      { text: "El Govern, mitjançant un decret.", correct: true },
      { text: "La consellera o conseller, per ordre ministerial.", correct: false },
      { text: "La direcció de funció pública.", correct: false }
    ]
  },
  {
    question: "El sector públic institucional es regeix, entre d'altres, pel principi de:",
    number: 8,
    answers: [
      { text: "Eficàcia, eficiència i suficiència.", correct: true },
      { text: "Competència deslleial.", correct: false },
      { text: "Privacitat absoluta.", correct: false },
      { text: "Autonomia financera il·limitada.", correct: false }
    ]
  },
  {
    question: "Quina és la tasca dels secretaris generals dins d'un departament?",
    number: 9,
    answers: [
      { text: "Dirigir els serveis comuns del departament.", correct: true },
      { text: "Aprovar les lleis del Parlament.", correct: false },
      { text: "Representar el Govern davant els tribunals.", correct: false },
      { text: "Decidir el pressupost de tot el sector públic.", correct: false }
    ]
  },
  {
    question: "Quin òrgan resol els conflictes d'atribucions entre departaments?",
    number: 10,
    answers: [
      { text: "El President.", correct: false },
      { text: "El Govern.", correct: true },
      { text: "El Tribunal Superior de Justícia.", correct: false },
      { text: "La Secretaria General.", correct: false }
    ]
  },
  {
    question: "Quina característica defineix els organismes autònoms?",
    number: 11,
    answers: [
      { text: "Tenen personalitat jurídica pròpia i autonomia de gestió.", correct: true },
      { text: "Depenen directament del Parlament.", correct: false },
      { text: "No tenen pressupost propi.", correct: false },
      { text: "Són òrgans consultius sense funcions executives.", correct: false }
    ]
  },
  {
    question: "El Govern actua com a:",
    number: 12,
    answers: [
      { text: "Òrgan col·legiat.", correct: true },
      { text: "Òrgan unipersonal exclusivament.", correct: false },
      { text: "Òrgan jurisdiccional.", correct: false },
      { text: "Òrgan de control de l'oposició.", correct: false }
    ]
  },
  {
    question: "Com es creen els organismes públics de la Generalitat?",
    number: 13,
    answers: [
      { text: "Per llei.", correct: true },
      { text: "Per decret del President.", correct: false },
      { text: "Per acord de la Mesa del Parlament.", correct: false },
      { text: "Per resolució d'un conseller.", correct: false }
    ]
  },
  {
    question: "Qui ostenta la representació ordinària del Govern?",
    number: 14,
    answers: [
      { text: "El portaveu del Govern.", correct: false },
      { text: "El President de la Generalitat.", correct: true },
      { text: "El conseller de Presidència.", correct: false },
      { text: "El secretari general del Govern.", correct: false }
    ]
  },
  {
    question: "Quina funció tenen les secretaries sectorials?",
    number: 15,
    answers: [
      { text: "Donar suport a la conselleria en l'exercici de les seves competències.", correct: true },
      { text: "Controlar el President.", correct: false },
      { text: "Sustituir al Govern en cas de crisi.", correct: false },
      { text: "Gestionar únicament el personal.", correct: false }
    ]
  },
  {
    question: "Quina és la funció de la Comissió de Secretaris Generals?",
    number: 16,
    answers: [
      { text: "Preparar les reunions del Govern.", correct: true },
      { text: "Aprovar els Pressupostos de la Generalitat.", correct: false },
      { text: "Designar al Síndic de Greuges.", correct: false },
      { text: "Gestionar els hospitals públics.", correct: false }
    ]
  },
  {
    question: "El principi d'eficàcia en l'organització administrativa implica:",
    number: 17,
    answers: [
      { text: "Adequació dels mitjans als objectius.", correct: true },
      { text: "Reducció de personal a zero.", correct: false },
      { text: "Canviar l'estructura cada legislatura.", correct: false },
      { text: "Treballar fora d'horari oficial.", correct: false }
    ]
  },
  {
    question: "Les delegacions territorials del Govern tenen com a objectiu:",
    number: 18,
    answers: [
      { text: "Representar el Govern en el territori.", correct: true },
      { text: "Sustituir els ajuntaments.", correct: false },
      { text: "Dirigir el poder judicial provincial.", correct: false },
      { text: "Recaptar tots els impostos estatals.", correct: false }
    ]
  },
  {
    question: "Quin és el règim jurídic de les empreses públiques de la Generalitat?",
    number: 19,
    answers: [
      { text: "Dret privat, tret de les funcions d'autoritat.", correct: true },
      { text: "Dret públic exclusivament.", correct: false },
      { text: "Dret internacional.", correct: false },
      { text: "Es regeixen pel dret canònic.", correct: false }
    ]
  },
  {
    question: "El President o Presidenta de la Generalitat és triat/ada per:",
    number: 20,
    answers: [
      { text: "El Parlament.", correct: true },
      { text: "El cos electoral en eleccions directes.", correct: false },
      { text: "El Govern de l'Estat.", correct: false },
      { text: "La Junta Electoral Central.", correct: false }
    ]
  },
  {
    question: "Quina és la funció de les direccions generals?",
    number: 21,
    answers: [
      { text: "Gestionar i executar les polítiques del departament en l'àmbit de la seva competència.", correct: true },
      { text: "Redactar les lleis del Parlament.", correct: false },
      { text: "Representar els ciutadans davant el Govern.", correct: false },
      { text: "Sancionar als funcionaris.", correct: false }
    ]
  },
  {
    question: "Els organismes del sector públic institucional estan subjectes a:",
    number: 22,
    answers: [
      { text: "Control d'eficàcia i eficiència.", correct: true },
      { text: "Autonomia absoluta sense control.", correct: false },
      { text: "Control per part de les entitats privades.", correct: false },
      { text: "Absència de control pressupostari.", correct: false }
    ]
  },
  {
    question: "Qui exerceix la direcció superior de l'Administració de la Generalitat?",
    number: 23,
    answers: [
      { text: "El Govern.", correct: true },
      { text: "El cap de l'oposició.", correct: false },
      { text: "El secretari de Presidència.", correct: false },
      { text: "El Parlament.", correct: false }
    ]
  },
  {
    question: "Quina és la composició del Govern?",
    number: 24,
    answers: [
      { text: "President/a, consellers/es i altres membres que determini la llei.", correct: true },
      { text: "Només el President i els seus assessors.", correct: false },
      { text: "Tots els diputats del Parlament.", correct: false },
      { text: "Els delegats territorials i els directors generals.", correct: false }
    ]
  },
  {
    question: "L'organització administrativa es basa en el principi de:",
    number: 25,
    answers: [
      { text: "Desconcentració.", correct: true },
      { text: "Concentració absoluta de poder.", correct: false },
      { text: "Privatització de tots els serveis.", correct: false },
      { text: "Desaparició dels departaments.", correct: false }
    ]
  },
  {
    question: "Què és la delegació de funcions?",
    number: 26,
    answers: [
      { text: "El traspàs de l'exercici de competències d'un òrgan a un altre.", correct: true },
      { text: "La pèrdua permanent de la competència.", correct: false },
      { text: "El nomenament de nous funcionaris.", correct: false },
      { text: "La dissolució del departament.", correct: false }
    ]
  },
  {
    question: "Quina és la tasca de la Vicepresidència, si existeix?",
    number: 27,
    answers: [
      { text: "Assumir funcions delegades pel President i la coordinació d'accions.", correct: true },
      { text: "Substituir sempre al Parlament.", correct: false },
      { text: "Gestionar els tribunals de justícia.", correct: false },
      { text: "Ser el cap de l'oposició.", correct: false }
    ]
  },
  {
    question: "El sector públic institucional es pot estructurar en:",
    number: 28,
    answers: [
      { text: "Organismes autònoms, entitats públiques empresarials i fundacions.", correct: true },
      { text: "Només departaments i vicepresidències.", correct: false },
      { text: "Cases d'ofici i ministeris.", correct: false },
      { text: "Partits polítics i sindicats.", correct: false }
    ]
  },
  {
    question: "Què significa que els òrgans són creats, modificats o suprimits mitjançant decret?",
    number: 29,
    answers: [
      { text: "Que ho decideix el Govern.", correct: true },
      { text: "Que ho decideix el jutge.", correct: false },
      { text: "Que és una decisió exclusiva del funcionari.", correct: false },
      { text: "Que es necessita votació popular.", correct: false }
    ]
  },
  {
    question: "Com s'anomena la capacitat de dictar normes reglamentàries?",
    number: 30,
    answers: [
      { text: "Potestat reglamentària.", correct: true },
      { text: "Potestat judicial.", correct: false },
      { text: "Potestat legislativa.", correct: false },
      { text: "Potestat disciplinària.", correct: false }
    ]
  },
  {
    question: "El Govern cessa quan:",
    number: 31,
    answers: [
      { text: "Es fan eleccions al Parlament.", correct: true },
      { text: "El President decideix anar-se'n de vacances.", correct: false },
      { text: "Un conseller canvia de partit.", correct: false },
      { text: "Es produeix una manifestació al carrer.", correct: false }
    ]
  },
  {
    question: "Quina és la funció de les Secretaries de Govern?",
    number: 32,
    answers: [
      { text: "Assistir el Govern en les seves funcions executives.", correct: true },
      { text: "Exercir la presidència del Parlament.", correct: false },
      { text: "Controlar el pressupost del sector privat.", correct: false },
      { text: "Dirigir les forces de seguretat estatal.", correct: false }
    ]
  },
  {
    question: "L'Administració de la Generalitat ha d'actuar amb:",
    number: 33,
    answers: [
      { text: "Sotmetiment ple a la llei i al dret.", correct: true },
      { text: "Llibertat total d'actuació.", correct: false },
      { text: "Dependència dels interessos dels partits.", correct: false },
      { text: "Secretisme en els actes administratius.", correct: false }
    ]
  },
  {
    question: "Els òrgans unipersonals són:",
    number: 34,
    answers: [
      { text: "Aquells que estan formats per una sola persona física.", correct: true },
      { text: "Aquells formats per un grup de funcionaris.", correct: false },
      { text: "Aquells que no tenen poder decisiu.", correct: false },
      { text: "Els que depenen dels ajuntaments.", correct: false }
    ]
  },
  {
    question: "La potestat de dictar normes amb rang de llei és:",
    number: 35,
    answers: [
      { text: "Legislativa, pròpia del Parlament.", correct: true },
      { text: "Reglamentària, pròpia del Govern.", correct: false },
      { text: "Judicial, pròpia dels jutges.", correct: false },
      { text: "Administrativa, pròpia dels directors.", correct: false }
    ]
  },
  {
    question: "En quin cas el Govern pot dictar decrets llei?",
    number: 36,
    answers: [
      { text: "En cas d'extraordinària i urgent necessitat.", correct: true },
      { text: "Sempre que vulgui evitar el debat al Parlament.", correct: false },
      { text: "Només quan el Parlament està tancat per vacances.", correct: false },
      { text: "Mai, no tenen aquesta potestat.", correct: false }
    ]
  },
  {
    question: "Qui coordina l'acció dels diferents departaments?",
    number: 37,
    answers: [
      { text: "El President.", correct: true },
      { text: "El Síndic de Greuges.", correct: false },
      { text: "El Delegat territorial.", correct: false },
      { text: "L'interventor general.", correct: false }
    ]
  },
  {
    question: "Els consellers són responsables davant:",
    number: 38,
    answers: [
      { text: "El President i el Parlament.", correct: true },
      { text: "Només davant el seu propi partit.", correct: false },
      { text: "Davant el Tribunal de Comptes.", correct: false },
      { text: "Davant la ciutadania de forma directa i individual.", correct: false }
    ]
  },
  {
    question: "El sector públic institucional ha de tenir per objecte:",
    number: 39,
    answers: [
      { text: "La realització d'activitats d'interès general.", correct: true },
      { text: "El lucre personal dels seus directius.", correct: false },
      { text: "La competència amb el sector privat.", correct: false },
      { text: "L'obtenció de beneficis per repartir entre els ciutadans.", correct: false }
    ]
  },
  {
    question: "Què s'entén per desconcetració?",
    number: 40,
    answers: [
      { text: "Transferència de titularitat de competències a òrgans inferiors.", correct: true },
      { text: "Acumulació de poder en el President.", correct: false },
      { text: "Trasllat de la seu central a una altra ciutat.", correct: false },
      { text: "Externalització d'un servei públic.", correct: false }
    ]
  },
  {
    question: "Com s'anomenen les unitats administratives inferiors a les direccions generals?",
    number: 41,
    answers: [
      { text: "Subdireccions generals, serveis i seccions.", correct: true },
      { text: "Ministeris locals.", correct: false },
      { text: "Delegacions de govern regional.", correct: false },
      { text: "Jutjats d'instrucció.", correct: false }
    ]
  },
  {
    question: "El pressupost de la Generalitat és aprovat per:",
    number: 42,
    answers: [
      { text: "El Parlament.", correct: true },
      { text: "El Govern.", correct: false },
      { text: "El President.", correct: false },
      { text: "El Departament d'Economia i Hisenda.", correct: false }
    ]
  },
  {
    question: "Quina funció té l'Advocacia de la Generalitat?",
    number: 43,
    answers: [
      { text: "Representació i defensa en judici.", correct: true },
      { text: "Assessorament als ciutadans en assumptes privats.", correct: false },
      { text: "Elaboració de decrets llei.", correct: false },
      { text: "Control de la policia.", correct: false }
    ]
  },
  {
    question: "Un dels principis de l'organització administrativa és la transparència, què implica?",
    number: 44,
    answers: [
      { text: "Publicitat de l'activitat administrativa.", correct: true },
      { text: "Que tots els documents siguin secrets.", correct: false },
      { text: "Que el ciutadà pagui per accedir a la informació.", correct: false },
      { text: "Que només el govern pugui veure l'expedient.", correct: false }
    ]
  },
  {
    question: "L'Administració de la Generalitat s'organitza en:",
    number: 45,
    answers: [
      { text: "Departaments.", correct: true },
      { text: "Cantonades administratives.", correct: false },
      { text: "Districtes federals.", correct: false },
      { text: "Prefectures provincials.", correct: false }
    ]
  },
  {
    question: "Quina és la funció de les secretaries tècniques?",
    number: 46,
    answers: [
      { text: "Assessorament i suport tècnic.", correct: true },
      { text: "Direcció de la policia autonòmica.", correct: false },
      { text: "Gestió dels impostos locals.", correct: false },
      { text: "Controlar el Parlament.", correct: false }
    ]
  },
  {
    question: "Qui aprova els reglaments?",
    number: 47,
    answers: [
      { text: "El Govern (decrets) i els consellers (ordres).", correct: true },
      { text: "El President en solitari.", correct: false },
      { text: "Els jutges.", correct: false },
      { text: "Els funcionaris de carrera.", correct: false }
    ]
  },
  {
    question: "Quina és la funció de l'Interventor General?",
    number: 48,
    answers: [
      { text: "Controlar la legalitat de la despesa pública.", correct: true },
      { text: "Redactar lleis socials.", correct: false },
      { text: "Representar la Generalitat a l'estranger.", correct: false },
      { text: "Gestionar els recursos humans.", correct: false }
    ]
  },
  {
    question: "El principi de coordinació administrativa serveix per:",
    number: 49,
    answers: [
      { text: "Evitar duplicitats i contradiccions entre òrgans.", correct: true },
      { text: "Donar més poder al sector privat.", correct: false },
      { text: "Obligar a tots els departaments a fer el mateix.", correct: false },
      { text: "Eliminar el control jeràrquic.", correct: false }
    ]
  },
  {
    question: "Com es diu el document que estableix l'estructura d'un departament?",
    number: 50,
    answers: [
      { text: "Decret d'estructura.", correct: true },
      { text: "Llei d'organigrama.", correct: false },
      { text: "Ordre de funcionament.", correct: false },
      { text: "Resolució de personal.", correct: false }
    ]
  },
  {
    question: "Qui pot proposar la modificació de l'estructura del Govern?",
    number: 51,
    answers: [
      { text: "El President.", correct: true },
      { text: "Un ciutadà qualsevol.", correct: false },
      { text: "El Tribunal Suprem.", correct: false },
      { text: "Els sindicats de funcionaris.", correct: false }
    ]
  },
  {
    question: "Quin dret tenen els ciutadans en relació amb l'organització administrativa?",
    number: 52,
    answers: [
      { text: "Dret a conèixer l'organització i el seu funcionament.", correct: true },
      { text: "Dret a decidir l'organigrama dels departaments.", correct: false },
      { text: "Dret a ser nomenat conseller directament.", correct: false },
      { text: "Dret a vetar els decrets del govern.", correct: false }
    ]
  },
  {
    question: "Els òrgans col·legiats han de tenir un:",
    number: 53,
    answers: [
      { text: "Secretari/a.", correct: true },
      { text: "Jutge encarregat.", correct: false },
      { text: "Representant de l'oposició.", correct: false },
      { text: "Vot determinant del President del govern.", correct: false }
    ]
  },
  {
    question: "L'Administració de la Generalitat ha d'actuar amb:",
    number: 54,
    answers: [
      { text: "Interdicció de l'arbitrarietat.", correct: true },
      { text: "Total discrecionalitat sense límits.", correct: false },
      { text: "Interessos de partit.", correct: false },
      { text: "Ocultació de dades.", correct: false }
    ]
  },
  {
    question: "Quina és la finalitat de les entitats públiques empresarials?",
    number: 55,
    answers: [
      { text: "La producció de béns o prestació de serveis sota règim de dret privat.", correct: true },
      { text: "La gestió exclusiva de la policia.", correct: false },
      { text: "L'exercici de potestats judicials.", correct: false },
      { text: "La creació de lleis.", correct: false }
    ]
  },
  {
    question: "La potestat sancionadora és exercida per:",
    number: 56,
    answers: [
      { text: "Els òrgans administratius que tenen atribuïda aquesta competència.", correct: true },
      { text: "Qualsevol ciutadà.", correct: false },
      { text: "El President personalment en tots els casos.", correct: false },
      { text: "Els mitjans de comunicació.", correct: false }
    ]
  },
  {
    question: "Els departaments tenen una funció de:",
    number: 57,
    answers: [
      { text: "Proposta i execució de la política del Govern.", correct: true },
      { text: "Control total del Parlament.", correct: false },
      { text: "Judici dels delictes greus.", correct: false },
      { text: "Recaptació d'impostos estatals.", correct: false }
    ]
  },
  {
    question: "La relació entre òrgans administratius es regeix pel principi de:",
    number: 58,
    answers: [
      { text: "Col·laboració i lleialtat institucional.", correct: true },
      { text: "Confrontació i independència.", correct: false },
      { text: "Subordinació absoluta a l'ajuntament.", correct: false },
      { text: "Negligència.", correct: false }
    ]
  },
  {
    question: "Què és un decret?",
    number: 59,
    answers: [
      { text: "Una norma reglamentària dictada pel Govern.", correct: true },
      { text: "Una llei dictada pel Parlament.", correct: false },
      { text: "Una sentència judicial.", correct: false },
      { text: "Un acte intern d'un funcionari.", correct: false }
    ]
  },
  {
    question: "L'Administració de la Generalitat es divideix en l'administració de la Generalitat i:",
    number: 60,
    answers: [
      { text: "El sector públic institucional.", correct: true },
      { text: "Els ministeris estatals.", correct: false },
      { text: "El sistema judicial català.", correct: false },
      { text: "La monarquia.", correct: false }
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