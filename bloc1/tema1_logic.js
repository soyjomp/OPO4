const TEST_ID = "tema1"; 
const questions = [
  {
    question: "Segons l'article 1 de la CE, quins són els valors superiors de l'ordenament jurídic?",
    number: 1,
    answers: [
      { text: "Llibertat, justícia, igualtat i pluralisme polític.", correct: true },
      { text: "Justícia, llibertat, seguretat i progrés.", correct: false },
      { text: "Igualtat, fraternitat, llibertat i unitat.", correct: false },
      { text: "Llibertat, igualtat, solidaritat i unitat.", correct: false }
    ]
  },
  {
    question: "La sobirania nacional resideix en:",
    number: 2,
    answers: [
      { text: "El Rei.", correct: false },
      { text: "Les Corts Generals.", correct: false },
      { text: "El poble espanyol.", correct: true },
      { text: "El Govern.", correct: false }
    ]
  },
  {
    question: "Quina és la forma política de l'Estat espanyol?",
    number: 3,
    answers: [
      { text: "República parlamentària.", correct: false },
      { text: "Monarquia parlamentària.", correct: true },
      { text: "Monarquia constitucional.", correct: false },
      { text: "Estat federal.", correct: false }
    ]
  },
  {
    question: "Segons la CE, el castellà és:",
    number: 4,
    answers: [
      { text: "L'única llengua oficial a tot l'Estat.", correct: false },
      { text: "La llengua oficial de l'Estat i tots els espanyols tenen el deure de conèixer-la i el dret d'usar-la.", correct: true },
      { text: "Una llengua oficial, però no obligatòria.", correct: false },
      { text: "La llengua administrativa única.", correct: false }
    ]
  },
  {
    question: "Quina és la capital de l'Estat?",
    number: 5,
    answers: [
      { text: "Madrid, per llei orgànica.", correct: false },
      { text: "Barcelona.", correct: false },
      { text: "Madrid, essent la vila de Madrid.", correct: true },
      { text: "Es fixa per reial decret.", correct: false }
    ]
  },
  {
    question: "Els partits polítics expressen el pluralisme polític i concorren a la formació i manifestació de la voluntat popular. Quina és la seva creació i exercici d'activitat?",
    number: 6,
    answers: [
      { text: "Restringits.", correct: false },
      { text: "Lliures.", correct: true },
      { text: "Intervinguts pel Govern.", correct: false },
      { text: "Subjectes a autorització prèvia.", correct: false }
    ]
  },
  {
    question: "Com s'anomena la secció que comprèn els drets fonamentals i llibertats públiques (articles 15 al 29)?",
    number: 7,
    answers: [
      { text: "Secció 1a del Capítol II.", correct: true },
      { text: "Secció 2a del Capítol II.", correct: false },
      { text: "Capítol I del Títol I.", correct: false },
      { text: "Secció única del Títol I.", correct: false }
    ]
  },
  {
    question: "Quin dret fonamental està protegit pel recurs d'empara davant el Tribunal Constitucional?",
    number: 8,
    answers: [
      { text: "El dret a l'habitatge.", correct: false },
      { text: "La llibertat d'expressió (art. 20).", correct: true },
      { text: "El dret a la salut.", correct: false },
      { text: "El dret a la protecció de dades.", correct: false }
    ]
  },
  {
    question: "Quina és la majoria necessària per aprovar una llei orgànica que desenvolupi els drets fonamentals?",
    number: 9,
    answers: [
      { text: "Majoria simple.", correct: false },
      { text: "Majoria absoluta del Congrés.", correct: true },
      { text: "Majoria de 3/5 parts.", correct: false },
      { text: "Majoria absoluta en ambdues cambres.", correct: false }
    ]
  },
  {
    question: "Segons l'article 14, els espanyols són iguals davant la llei:",
    number: 10,
    answers: [
      { text: "Sense que pugui prevaldre cap discriminació.", correct: true },
      { text: "només en l'àmbit civil.", correct: false },
      { text: "Excepte per raó de naixement.", correct: false },
      { text: "Segons determini el Govern.", correct: false }
    ]
  },
  {
    question: "Quina és la durada màxima de la detenció preventiva?",
    number: 11,
    answers: [
      { text: "24 hores.", correct: false },
      { text: "48 hores.", correct: false },
      { text: "El temps estrictament necessari, amb un màxim de 72 hores.", correct: true },
      { text: "7 dies.", correct: false }
    ]
  },
  {
    question: "L'habeas corpus és el procediment per posar a disposició judicial a tota persona detinguda il·legalment. Qui l'ha de regular?",
    number: 12,
    answers: [
      { text: "La llei orgànica.", correct: true },
      { text: "El Reglament del Congrés.", correct: false },
      { text: "El Codi Penal.", correct: false },
      { text: "La Llei d'Enjudiciament Criminal.", correct: false }
    ]
  },
  {
    question: "Quin dret no forma part de l'article 18 (Drets a l'honor, intimitat i pròpia imatge)?",
    number: 13,
    answers: [
      { text: "Inviolabilitat del domicili.", correct: false },
      { text: "Secret de les comunicacions.", correct: false },
      { text: "Llibertat d'ensenyament.", correct: true },
      { text: "Limitació a l'ús de la informàtica.", correct: false }
    ]
  },
  {
    question: "El dret de reunió pacífica i sense armes:",
    number: 14,
    answers: [
      { text: "Necessita autorització administrativa prèvia.", correct: false },
      { text: "No necessita autorització prèvia.", correct: true },
      { text: "Està prohibit als espais públics.", correct: false },
      { text: "Només es pot exercir en edificis tancats.", correct: false }
    ]
  },
  {
    question: "El dret d'associació està reconegut a l'article:",
    number: 15,
    answers: [
      { text: "21.", correct: false },
      { text: "22.", correct: true },
      { text: "23.", correct: false },
      { text: "24.", correct: false }
    ]
  },
  {
    question: "El dret a la tutela judicial efectiva sense indefensió està recollit a l'article:",
    number: 16,
    answers: [
      { text: "24.", correct: true },
      { text: "25.", correct: false },
      { text: "26.", correct: false },
      { text: "27.", correct: false }
    ]
  },
  {
    question: "Quina de les següents penes està prohibida per la Constitució?",
    number: 17,
    answers: [
      { text: "La presó permanent revisable.", correct: false },
      { text: "Els treballs forçats.", correct: true },
      { text: "Les multes coercitives.", correct: false },
      { text: "El confinament.", correct: false }
    ]
  },
  {
    question: "El dret a l'educació està reconegut a l'article:",
    number: 18,
    answers: [
      { text: "25.", correct: false },
      { text: "26.", correct: false },
      { text: "27.", correct: true },
      { text: "28.", correct: false }
    ]
  },
  {
    question: "El dret de sindicació i la llibertat sindical estan reconeguts a l'article:",
    number: 19,
    answers: [
      { text: "28.", correct: true },
      { text: "30.", correct: false },
      { text: "35.", correct: false },
      { text: "37.", correct: false }
    ]
  },
  {
    question: "El dret de petició individual i col·lectiva per escrit està reconegut a l'article:",
    number: 20,
    answers: [
      { text: "27.", correct: false },
      { text: "28.", correct: false },
      { text: "29.", correct: true },
      { text: "30.", correct: false }
    ]
  },
  {
    question: "Els espanyols tenen el dret i el deure de:",
    number: 21,
    answers: [
      { text: "Treballar.", correct: true },
      { text: "Pagar impostos només a l'Estat.", correct: false },
      { text: "Votar en totes les eleccions.", correct: false },
      { text: "Prestar servei militar.", correct: false }
    ]
  },
  {
    question: "El sistema tributari s'ha d'inspirar en els principis de:",
    number: 22,
    answers: [
      { text: "Igualtat i progressivitat.", correct: true },
      { text: "Uniformitat i proporcionalitat.", correct: false },
      { text: "Solidaritat i neutralitat.", correct: false },
      { text: "Eficiència i equitat.", correct: false }
    ]
  },
  {
    question: "La propietat privada i el dret d'herència estan reconeguts a l'article:",
    number: 23,
    answers: [
      { text: "31.", correct: false },
      { text: "33.", correct: true },
      { text: "35.", correct: false },
      { text: "38.", correct: false }
    ]
  },
  {
    question: "Quin dret laboral està protegit específicament per l'article 37?",
    number: 24,
    answers: [
      { text: "Dret a la sindicació.", correct: false },
      { text: "Dret a la negociació col·lectiva laboral.", correct: true },
      { text: "Dret a la vaga.", correct: false },
      { text: "Dret a la lliure elecció d'ofici.", correct: false }
    ]
  },
  {
    question: "Els poders públics asseguren la protecció social, econòmica i jurídica de:",
    number: 25,
    answers: [
      { text: "La família.", correct: true },
      { text: "Els joves únicament.", correct: false },
      { text: "Les empreses.", correct: false },
      { text: "Els funcionaris.", correct: false }
    ]
  },
  {
    question: "Els principis rectors de la política social i econòmica (Capítol III) vinculen:",
    number: 26,
    answers: [
      { text: "A tots els poders públics.", correct: true },
      { text: "Només al Poder Judicial.", correct: false },
      { text: "Només a l'Administració Central.", correct: false },
      { text: "No vinculen, són recomanacions.", correct: false }
    ]
  },
  {
    question: "El dret a la protecció de la salut està recollit a l'article:",
    number: 27,
    answers: [
      { text: "41.", correct: false },
      { text: "43.", correct: true },
      { text: "45.", correct: false },
      { text: "47.", correct: false }
    ]
  },
  {
    question: "El dret a un habitatge digne i adequat està a l'article:",
    number: 28,
    answers: [
      { text: "45.", correct: false },
      { text: "46.", correct: false },
      { text: "47.", correct: true },
      { text: "48.", correct: false }
    ]
  },
  {
    question: "Qui té l'obligació de vetllar per la utilització racional dels recursos naturals?",
    number: 29,
    answers: [
      { text: "El Rei.", correct: false },
      { text: "Els poders públics.", correct: true },
      { text: "La iniciativa privada.", correct: false },
      { text: "El Tribunal Constitucional.", correct: false }
    ]
  },
  {
    question: "El dret a la protecció dels consumidors i usuaris es regula a l'article:",
    number: 30,
    answers: [
      { text: "51.", correct: true },
      { text: "52.", correct: false },
      { text: "53.", correct: false },
      { text: "54.", correct: false }
    ]
  },
  {
    question: "El Defensor del Poble és l'alt comissionat de:",
    number: 31,
    answers: [
      { text: "Les Corts Generals.", correct: true },
      { text: "El Govern.", correct: false },
      { text: "El Poder Judicial.", correct: false },
      { text: "La Corona.", correct: false }
    ]
  },
  {
    question: "Quin article estableix la suspensió dels drets i llibertats?",
    number: 32,
    answers: [
      { text: "53.", correct: false },
      { text: "54.", correct: false },
      { text: "55.", correct: true },
      { text: "56.", correct: false }
    ]
  },
  {
    question: "Quina és la funció dels sindicats?",
    number: 33,
    answers: [
      { text: "Defensa dels interessos econòmics i socials.", correct: true },
      { text: "Participació en la formació del Govern.", correct: false },
      { text: "Gestió de les empreses públiques.", correct: false },
      { text: "Elaboració de lleis laborals.", correct: false }
    ]
  },
  {
    question: "La llibertat de càtedra és un dret reconegut a:",
    number: 34,
    answers: [
      { text: "Article 20.", correct: true },
      { text: "Article 27.", correct: false },
      { text: "Article 35.", correct: false },
      { text: "Article 44.", correct: false }
    ]
  },
  {
    question: "La Constitució estableix que ningú pot ser obligat a declarar sobre la seva ideologia, religió o creences a l'article:",
    number: 35,
    answers: [
      { text: "15.", correct: false },
      { text: "16.", correct: true },
      { text: "18.", correct: false },
      { text: "20.", correct: false }
    ]
  },
  {
    question: "Els estrangers gaudeixen de les llibertats públiques segons:",
    number: 36,
    answers: [
      { text: "El que estableixin els tractats i la llei.", correct: true },
      { text: "El que dicti cada Comunitat Autònoma.", correct: false },
      { text: "Igual que els espanyols, sense cap limitació.", correct: false },
      { text: "Segons el dret internacional consuetudinari.", correct: false }
    ]
  },
  {
    question: "Quina de les següents funcions pertany al Defensor del Poble?",
    number: 37,
    answers: [
      { text: "Defensa dels drets compresos en el Títol I.", correct: true },
      { text: "Jutjar a alts càrrecs.", correct: false },
      { text: "Dictar lleis.", correct: false },
      { text: "Representar a l'Estat a l'estranger.", correct: false }
    ]
  },
  {
    question: "Els drets fonamentals de la secció 1a del Capítol II són protegibles mitjançant:",
    number: 38,
    answers: [
      { text: "Recurs d'empara davant el Tribunal Constitucional.", correct: true },
      { text: "Recurs de cassació ordinari.", correct: false },
      { text: "Peticions al Rei.", correct: false },
      { text: "Només via administrativa.", correct: false }
    ]
  },
  {
    question: "L'article 20 protegeix el dret a:",
    number: 39,
    answers: [
      { text: "La llibertat d'expressió.", correct: true },
      { text: "El dret de manifestació.", correct: false },
      { text: "El dret d'associació.", correct: false },
      { text: "La intimitat.", correct: false }
    ]
  },
  {
    question: "El dret a la vida està reconegut a l'article:",
    number: 40,
    answers: [
      { text: "14.", correct: false },
      { text: "15.", correct: true },
      { text: "16.", correct: false },
      { text: "17.", correct: false }
    ]
  },
  {
    question: "Segons la CE, quina és la majoria d'edat?",
    number: 41,
    answers: [
      { text: "16 anys.", correct: false },
      { text: "18 anys.", correct: true },
      { text: "21 anys.", correct: false },
      { text: "La que estableixi el Codi Civil.", correct: false }
    ]
  },
  {
    question: "El dret a la vaga dels treballadors:",
    number: 42,
    answers: [
      { text: "Està prohibit als funcionaris.", correct: false },
      { text: "Es reconeix com a dret per a la defensa dels seus interessos.", correct: true },
      { text: "Necessita autorització governativa.", correct: false },
      { text: "És un deure constitucional.", correct: false }
    ]
  },
  {
    question: "Els poders públics garanteixen la defensa dels consumidors i usuaris mitjançant:",
    number: 43,
    answers: [
      { text: "Procediments eficaços.", correct: true },
      { text: "Subvencions directes a les empreses.", correct: false },
      { text: "Lleis de mercat lliure exclusivament.", correct: false },
      { text: "La creació de tribunals de comerç.", correct: false }
    ]
  },
  {
    question: "Quin és un deure dels poders públics respecte a la llengua catalana (d'acord amb la CE, en el marc de les comunitats autònomes)?",
    number: 44,
    answers: [
      { text: "Protegir la riquesa cultural i lingüística de les llengües d'Espanya.", correct: true },
      { text: "Prohibir-ne l'ús en l'administració central.", correct: false },
      { text: "Ignorar-la, ja que no és oficial a l'Estat.", correct: false },
      { text: "Imposar-la com a llengua única.", correct: false }
    ]
  },
  {
    question: "La seguretat jurídica és:",
    number: 45,
    answers: [
      { text: "Un valor superior de l'ordenament.", correct: false },
      { text: "Un principi constitucional consagrat a l'art. 9.3.", correct: true },
      { text: "Un dret fonamental de la secció 1a.", correct: false },
      { text: "Una facultat del Rei.", correct: false }
    ]
  },
  {
    question: "Com s'anomena la protecció dels drets fonamentals davant els Tribunals ordinaris?",
    number: 46,
    answers: [
      { text: "Procediment basat en els principis de preferència i sumarietat.", correct: true },
      { text: "Recurs de reposició.", correct: false },
      { text: "Recurs d'alçada.", correct: false },
      { text: "Procediment ordinari sense termini.", correct: false }
    ]
  },
  {
    question: "La inviolabilitat del domicili comporta que no es pot entrar sense consentiment excepte:",
    number: 47,
    answers: [
      { text: "Per ordre del Govern.", correct: false },
      { text: "En cas de flagrant delicte.", correct: true },
      { text: "Si un veí ho sol·licita.", correct: false },
      { text: "Per motius d'utilitat pública.", correct: false }
    ]
  },
  {
    question: "Quina edat mínima s'exigeix per ser elegible en eleccions municipals (dret al sufragi passiu)?",
    number: 48,
    answers: [
      { text: "18 anys.", correct: true },
      { text: "21 anys.", correct: false },
      { text: "25 anys.", correct: false },
      { text: "30 anys.", correct: false }
    ]
  },
  {
    question: "El dret d'accés a les funcions i càrrecs públics en condicions d'igualtat està a l'article:",
    number: 49,
    answers: [
      { text: "22.", correct: false },
      { text: "23.", correct: true },
      { text: "24.", correct: false },
      { text: "25.", correct: false }
    ]
  },
  {
    question: "La presumpció d'innocència és un dret recollit a l'article:",
    number: 50,
    answers: [
      { text: "24.", correct: true },
      { text: "25.", correct: false },
      { text: "26.", correct: false },
      { text: "28.", correct: false }
    ]
  },
  {
    question: "L'article 30 estableix que els espanyols tenen el dret i el deure de:",
    number: 51,
    answers: [
      { text: "Defensar Espanya.", correct: true },
      { text: "Ser funcionaris.", correct: false },
      { text: "Participar en partits polítics.", correct: false },
      { text: "Votar.", correct: false }
    ]
  },
  {
    question: "Els principis rectors de la política social i econòmica són:",
    number: 52,
    answers: [
      { text: "Drets fonamentals amb recurs d'empara.", correct: false },
      { text: "Directrius que informen la legislació positiva.", correct: true },
      { text: "Lleis orgàniques que cal desenvolupar.", correct: false },
      { text: "Obligacions del Poder Judicial exclusivament.", correct: false }
    ]
  },
  {
    question: "El dret a la protecció de la salut i a l'atenció sanitària s'orienta a:",
    number: 53,
    answers: [
      { text: "Establir un sistema d'atenció universal.", correct: true },
      { text: "Garantir un model privat de salut.", correct: false },
      { text: "Dependre només de les assegurances de treball.", correct: false },
      { text: "Limitar els costos a l'Estat.", correct: false }
    ]
  },
  {
    question: "La llei regularà les causes d'incompatibilitat dels:",
    number: 54,
    answers: [
      { text: "Membres de la carrera judicial.", correct: true },
      { text: "Ciutadans en l'exercici del dret de vot.", correct: false },
      { text: "Estudiants en l'exercici del dret d'estudi.", correct: false },
      { text: "Membres de les associacions religioses.", correct: false }
    ]
  },
  {
    question: "El dret a l'honor protegeix davant:",
    number: 55,
    answers: [
      { text: "Intromissions il·legítimes.", correct: true },
      { text: "Les crítiques polítiques en campanya.", correct: false },
      { text: "Les sentències judicials que no ens agraden.", correct: false },
      { text: "L'opinió pública en general.", correct: false }
    ]
  },
  {
    question: "Quina és la funció de la Inspecció de Treball?",
    number: 56,
    answers: [
      { text: "Vetllar pel compliment de les lleis laborals.", correct: true },
      { text: "Redactar els convenis col·lectius.", correct: false },
      { text: "Gestionar l'atur.", correct: false },
      { text: "Arbitrar les vagues generals.", correct: false }
    ]
  },
  {
    question: "El dret a la lliure elecció d'ofici o professió es recull a l'article:",
    number: 57,
    answers: [
      { text: "35.", correct: true },
      { text: "36.", correct: false },
      { text: "37.", correct: false },
      { text: "38.", correct: false }
    ]
  },
  {
    question: "La Constitució garanteix la llibertat d'empresa en el marc de:",
    number: 58,
    answers: [
      { text: "L'economia de mercat.", correct: true },
      { text: "La planificació estatal centralitzada.", correct: false },
      { text: "L'economia mixta obligatòria.", correct: false },
      { text: "La autogestió obrera.", correct: false }
    ]
  },
  {
    question: "El dret a la tutela judicial efectiva inclou el dret a:",
    number: 59,
    answers: [
      { text: "Obtenir una resolució motivada i fonamentada en dret.", correct: true },
      { text: "Guanyar sempre el plet.", correct: false },
      { text: "Triar el jutge de la causa.", correct: false },
      { text: "No pagar taxes judicials en cap cas.", correct: false }
    ]
  },
  {
    question: "Quina institució garanteix l'observança de la Constitució?",
    number: 60,
    answers: [
      { text: "El Tribunal Constitucional.", correct: true },
      { text: "El Govern.", correct: false },
      { text: "El Parlament de Catalunya.", correct: false },
      { text: "El Consell General del Poder Judicial.", correct: false }
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