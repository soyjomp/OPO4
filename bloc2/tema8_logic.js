const TEST_ID = "tema8"; 
const questions = [
  {
    question: "La competència administrativa és irrenunciable i s'exerceix per:",
    number: 1,
    answers: [
      { text: "Els òrgans que la tenen atribuïda per llei.", correct: true },
      { text: "Qualsevol òrgan que ho consideri oportú.", correct: false },
      { text: "Exclusivament pel President o Presidenta.", correct: false },
      { text: "El personal funcionari interí.", correct: false }
    ]
  },
  {
    question: "Què és l'avocació d'una competència?",
    number: 2,
    answers: [
      { text: "L'assumpció per un òrgan superior de l'exercici d'una competència d'un òrgan inferior.", correct: true },
      { text: "La transferència permanent de competències.", correct: false },
      { text: "La delegació de tasques a una entitat privada.", correct: false },
      { text: "La renúncia a una competència.", correct: false }
    ]
  },
  {
    question: "La delegació de competències ha de ser publicada en:",
    number: 3,
    answers: [
      { text: "El diari oficial corresponent (DOGC).", correct: true },
      { text: "Només en el tauler d'anuncis intern.", correct: false },
      { text: "No cal publicar-la, només notificar-la.", correct: false },
      { text: "En la web privada de l'òrgan delegat.", correct: false }
    ]
  },
  {
    question: "Es pot delegar l'exercici de competències en matèria d'expropiació forçosa?",
    number: 4,
    answers: [
      { text: "Sí, sempre que la llei ho permeti.", correct: true },
      { text: "No, està expressament prohibida.", correct: false },
      { text: "Només si el President dóna l'ordre.", correct: false },
      { text: "Només en l'àmbit local.", correct: false }
    ]
  },
  {
    question: "L'encàrrec de gestió es pot fer a:",
    number: 5,
    answers: [
      { text: "Un altre òrgan o entitat de dret públic.", correct: true },
      { text: "Qualsevol particular sense condicions.", correct: false },
      { text: "Directament al Parlament.", correct: false },
      { text: "Exclusivament a fundacions privades.", correct: false }
    ]
  },
  {
    question: "La delegació de signatura no suposa:",
    number: 6,
    answers: [
      { text: "L'alteració de la titularitat de la competència.", correct: true },
      { text: "La capacitat de signar en nom de l'òrgan delegant.", correct: false },
      { text: "L'existència d'un acte administratiu.", correct: false },
      { text: "La responsabilitat de l'òrgan delegat.", correct: false }
    ]
  },
  {
    question: "La suplència serveix per:",
    number: 7,
    answers: [
      { text: "Garantir l'exercici de les funcions per vacants, absència o malaltia.", correct: true },
      { text: "Aumentar el sou del funcionari.", correct: false },
      { text: "Canviar l'estructura del departament.", correct: false },
      { text: "Evitar la presa de decisions.", correct: false }
    ]
  },
  {
    question: "L'avocació ha de ser:",
    number: 8,
    answers: [
      { text: "Motivada i notificada als interessats.", correct: true },
      { text: "Automàtica en tots els casos.", correct: false },
      { text: "Decidida per votació popular.", correct: false },
      { text: "Secreta.", correct: false }
    ]
  },
  {
    question: "Pot ser objecte de delegació la potestat sancionadora?",
    number: 9,
    answers: [
      { text: "Sí, si la llei ho preveu i es fa entre òrgans de la mateixa administració.", correct: true },
      { text: "No, mai.", correct: false },
      { text: "Només en l'àmbit penitenciari.", correct: false },
      { text: "Només pel Govern.", correct: false }
    ]
  },
  {
    question: "L'encàrrec de gestió suposa cessió de la titularitat de la competència?",
    number: 10,
    answers: [
      { text: "No, només l'encàrrec d'activitats de caràcter tècnic o material.", correct: true },
      { text: "Sí, totalment.", correct: false },
      { text: "Només en cas d'urgència.", correct: false },
      { text: "Dependrà del que decideixi el destinatari.", correct: false }
    ]
  },
  {
    question: "La delegació de signatura ha de ser publicada?",
    number: 11,
    answers: [
      { text: "No és necessari la seva publicació en el diari oficial.", correct: true },
      { text: "Sí, obligatòriament en el DOGC.", correct: false },
      { text: "Només al BOE.", correct: false },
      { text: "Només si l'afectat ho demana.", correct: false }
    ]
  },
  {
    question: "En la delegació de competències, l'òrgan delegant pot:",
    number: 12,
    answers: [
      { text: "Revocar la delegació en qualsevol moment.", correct: true },
      { text: "Delegar-la a algú extern sense cap control.", correct: false },
      { text: "Desentendre's totalment de les conseqüències.", correct: false },
      { text: "Modificar la llei per voluntat pròpia.", correct: false }
    ]
  },
  {
    question: "Quina és la diferència principal entre delegació de competències i de signatura?",
    number: 13,
    answers: [
      { text: "La delegació de competències implica transferir l'exercici; la de signatura, no.", correct: true },
      { text: "Són exactament el mateix.", correct: false },
      { text: "La de signatura es publica; la de competències no.", correct: false },
      { text: "La de competències és més ràpida.", correct: false }
    ]
  },
  {
    question: "L'avocació s'aplica especialment entre:",
    number: 14,
    answers: [
      { text: "Òrgan superior i òrgan jeràrquicament dependent.", correct: true },
      { text: "Dos departaments diferents.", correct: false },
      { text: "L'Administració i el ciutadà.", correct: false },
      { text: "L'Administració i les empreses privades.", correct: false }
    ]
  },
  {
    question: "La titularitat de la competència correspon a:",
    number: 15,
    answers: [
      { text: "L'Administració pública com a persona jurídica.", correct: true },
      { text: "Al funcionari de manera personal.", correct: false },
      { text: "Al polític que guanya les eleccions.", correct: false },
      { text: "A l'òrgan que la té assignada per llei.", correct: true }
    ]
  },
  {
    question: "La supervisió administrativa consisteix en:",
    number: 16,
    answers: [
      { text: "Controlar el compliment de les funcions i directrius.", correct: true },
      { text: "Sancionar als ciutadans directament.", correct: false },
      { text: "Canviar els càrrecs cada setmana.", correct: false },
      { text: "Externalitzar tots els serveis.", correct: false }
    ]
  },
  {
    question: "És possible l'avocació d'assumptes delegats?",
    number: 17,
    answers: [
      { text: "Sí, l'òrgan delegant pot avocar-los.", correct: true },
      { text: "No, és prohibit.", correct: false },
      { text: "Només amb l'autorització del tribunal.", correct: false },
      { text: "Només si el delegat accepta.", correct: false }
    ]
  },
  {
    question: "L'acte administratiu dictat per delegació ha d'indicar-ho?",
    number: 18,
    answers: [
      { text: "Sí, fent constar expressament aquesta circumstància.", correct: true },
      { text: "No, no cal informar el ciutadà.", correct: false },
      { text: "Només si el delegat ho vol.", correct: false },
      { text: "Només en les notificacions per correu.", correct: false }
    ]
  },
  {
    question: "Quina és una característica de la suplència?",
    number: 19,
    answers: [
      { text: "No altera la titularitat ni l'exercici de la competència.", correct: true },
      { text: "Requereix una llei parlamentària cada vegada.", correct: false },
      { text: "És sempre remunerada amb un plus.", correct: false },
      { text: "Significa la destitució de l'original.", correct: false }
    ]
  },
  {
    question: "L'encàrrec de gestió pot ser a entitats privades?",
    number: 20,
    answers: [
      { text: "No, generalment s'exigeix que siguin ens públics.", correct: true },
      { text: "Sí, sense límit.", correct: false },
      { text: "Només en festius.", correct: false },
      { text: "Mai.", correct: false }
    ]
  },
  {
    question: "La delegació de signatura pot ser objecte de subdelegació?",
    number: 21,
    answers: [
      { text: "No, generalment no està permesa.", correct: true },
      { text: "Sí, sense restriccions.", correct: false },
      { text: "Només pel secretari.", correct: false },
      { text: "Sempre que es vulgui.", correct: false }
    ]
  },
  {
    question: "La competència es pot exercir per:",
    number: 22,
    answers: [
      { text: "Òrgans i entitats.", correct: true },
      { text: "Només persones físiques.", correct: false },
      { text: "Exclusivament per contractes externs.", correct: false },
      { text: "Per col·lectius no organitzats.", correct: false }
    ]
  },
  {
    question: "L'avocació es pot realitzar cap a un òrgan inferior?",
    number: 23,
    answers: [
      { text: "No, només de superior a inferior.", correct: false },
      { text: "Sí, en sentit ascendent.", correct: false },
      { text: "Només pot avocar el superior jeràrquic cap a ell mateix.", correct: true },
      { text: "Sempre cap a l'ajuntament.", correct: false }
    ]
  },
  {
    question: "La delegació de competències ha de determinar:",
    number: 24,
    answers: [
      { text: "L'abast, el termini i les condicions.", correct: true },
      { text: "Només el nom del delegat.", correct: false },
      { text: "Només la data d'inici.", correct: false },
      { text: "No cal determinar res.", correct: false }
    ]
  },
  {
    question: "Què passa quan s'encarrega una gestió a un altre ens?",
    number: 25,
    answers: [
      { text: "L'òrgan encarregant conserva la responsabilitat.", correct: true },
      { text: "La responsabilitat passa a l'encarregat.", correct: false },
      { text: "La responsabilitat desapareix.", correct: false },
      { text: "La responsabilitat és compartida al 50%.", correct: false }
    ]
  },
  {
    question: "La suplència s'ha de publicar en el diari oficial?",
    number: 26,
    answers: [
      { text: "No és obligatori.", correct: true },
      { text: "Sí, cada vegada que un cap se'n va de vacances.", correct: false },
      { text: "Només si la suplència dura un any.", correct: false },
      { text: "Sempre.", correct: false }
    ]
  },
  {
    question: "La delegació de competències pot incloure:",
    number: 27,
    answers: [
      { text: "La presa de decisions i la resolució d'expedients.", correct: true },
      { text: "Només la redacció de documents.", correct: false },
      { text: "Només l'arxiu de papers.", correct: false },
      { text: "L'opinió personal del delegat.", correct: false }
    ]
  },
  {
    question: "L'avocació pot ser per raons de:",
    number: 28,
    answers: [
      { text: "Interès públic, econòmic, social o tècnic.", correct: true },
      { text: "Gust personal del superior.", correct: false },
      { text: "Estar molt ocupat el superior.", correct: false },
      { text: "Vendre el recurs a un tercer.", correct: false }
    ]
  },
  {
    question: "En la delegació de signatura, la responsabilitat és de:",
    number: 29,
    answers: [
      { text: "L'òrgan delegant.", correct: true },
      { text: "L'òrgan que signa.", correct: false },
      { text: "El ciutadà.", correct: false },
      { text: "L'autoritat de control.", correct: false }
    ]
  },
  {
    question: "L'encàrrec de gestió es formalitza mitjançant:",
    number: 30,
    answers: [
      { text: "Acord o conveni entre les parts.", correct: true },
      { text: "Ordre judicial.", correct: false },
      { text: "Una simple trucada telefònica.", correct: false },
      { text: "Llei del Parlament.", correct: false }
    ]
  },
  {
    question: "Què vol dir que la competència és irrenunciable?",
    number: 31,
    answers: [
      { text: "Que l'òrgan titular ha d'exercir-la, llevat de casos de delegació o avocació.", correct: true },
      { text: "Que cap òrgan la pot exercir mai.", correct: false },
      { text: "Que el ciutadà pot escollir qui la fa.", correct: false },
      { text: "Que no es pot modificar mai per llei.", correct: false }
    ]
  },
  {
    question: "La delegació de competències entre òrgans es fa per:",
    number: 32,
    answers: [
      { text: "Acord de l'òrgan delegant.", correct: true },
      { text: "Eleccions internes.", correct: false },
      { text: "Sorteig.", correct: false },
      { text: "Votació del ple del Parlament.", correct: false }
    ]
  },
  {
    question: "La suplència d'un càrrec el nomena:",
    number: 33,
    answers: [
      { text: "L'òrgan competent per fer el nomenament original.", correct: true },
      { text: "El suplent mateix.", correct: false },
      { text: "El sindicat.", correct: false },
      { text: "El conseller de justícia.", correct: false }
    ]
  },
  {
    question: "La delegació de signatura pot ser cap a un òrgan inferior?",
    number: 34,
    answers: [
      { text: "Sí, és el cas habitual.", correct: true },
      { text: "Només cap a un igual.", correct: false },
      { text: "Mai.", correct: false },
      { text: "Cap al Parlament.", correct: false }
    ]
  },
  {
    question: "L'encàrrec de gestió a l'Administració General de l'Estat ha de ser per:",
    number: 35,
    answers: [
      { text: "Conveni.", correct: true },
      { text: "Decret llei.", correct: false },
      { text: "Sentència.", correct: false },
      { text: "Voluntat unilateral.", correct: false }
    ]
  },
  {
    question: "Si una competència s'avoca, què fa l'òrgan superior?",
    number: 36,
    answers: [
      { text: "Resol l'assumpte directament.", correct: true },
      { text: "Ordena a l'inferior que l'arxivi.", correct: false },
      { text: "Canvia la llei.", correct: false },
      { text: "No fa res.", correct: false }
    ]
  },
  {
    question: "L'exercici de la competència comprèn:",
    number: 37,
    answers: [
      { text: "Totes les facultats i deures vinculats a l'òrgan.", correct: true },
      { text: "Només l'atenció al client.", correct: false },
      { text: "L'arxiu de documents.", correct: false },
      { text: "Les relacions públiques.", correct: false }
    ]
  },
  {
    question: "La delegació de signatura es pot revocar?",
    number: 38,
    answers: [
      { text: "Sí, en qualsevol moment.", correct: true },
      { text: "No, una vegada feta és permanent.", correct: false },
      { text: "Només pel tribunal.", correct: false },
      { text: "Només amb preavís de 30 dies.", correct: false }
    ]
  },
  {
    question: "La direcció administrativa implica:",
    number: 39,
    answers: [
      { text: "El fixament d'objectius i directrius.", correct: true },
      { text: "L'execució manual de tasques.", correct: false },
      { text: "La vigilància dels edificis.", correct: false },
      { text: "L'externalització de serveis.", correct: false }
    ]
  },
  {
    question: "Es pot delegar la signatura d'una resolució sancionadora?",
    number: 40,
    answers: [
      { text: "Sí.", correct: true },
      { text: "No, està prohibit.", correct: false },
      { text: "Només pel President.", correct: false },
      { text: "Només a Catalunya.", correct: false }
    ]
  },
  {
    question: "Què és la desconnexió administrativa?",
    number: 41,
    answers: [
      { text: "No existeix tal concepte en la Llei 26/2010.", correct: true },
      { text: "El fet d'apagar l'ordinador.", correct: false },
      { text: "La separació d'una administració.", correct: false },
      { text: "La fi d'un conveni.", correct: false }
    ]
  },
  {
    question: "L'avocació s'utilitza per:",
    number: 42,
    answers: [
      { text: "L'exercici excepcional de la competència.", correct: true },
      { text: "El funcionament rutinari.", correct: false },
      { text: "La burocratització.", correct: false },
      { text: "La sanció de personal.", correct: false }
    ]
  },
  {
    question: "La delegació de competències en òrgans col·legiats requereix:",
    number: 43,
    answers: [
      { text: "L'acord del mateix òrgan col·legiat.", correct: true },
      { text: "La signatura del rei.", correct: false },
      { text: "L'aprovació del Parlament.", correct: false },
      { text: "La decisió individual d'un membre.", correct: false }
    ]
  },
  {
    question: "La suplència d'un càrrec pot ser per:",
    number: 44,
    answers: [
      { text: "Designació expressa o per l'ordre que estableixi la norma.", correct: true },
      { text: "Sort a la loteria.", correct: false },
      { text: "Elecció dels funcionaris de la unitat.", correct: false },
      { text: "Cap de les anteriors.", correct: false }
    ]
  },
  {
    question: "El conveni per a l'encàrrec de gestió s'ha de publicar en:",
    number: 45,
    answers: [
      { text: "El DOGC.", correct: true },
      { text: "La premsa esportiva.", correct: false },
      { text: "No cal publicar-lo.", correct: false },
      { text: "En la seu del delegat.", correct: false }
    ]
  },
  {
    question: "Pot l'òrgan delegat delegar, al seu torn, la competència?",
    number: 46,
    answers: [
      { text: "No, llevat que la llei ho autoritzi expressament.", correct: true },
      { text: "Sí, lliurement.", correct: false },
      { text: "Només a un altre nivell jeràrquic.", correct: false },
      { text: "Sempre.", correct: false }
    ]
  },
  {
    question: "La delegació de signatura s'ha de notar al final de la resolució?",
    number: 47,
    answers: [
      { text: "Sí, indicant 'per delegació' i el nom de l'òrgan delegant.", correct: true },
      { text: "No, no cal posar res.", correct: false },
      { text: "Només si l'afectat és un altre òrgan públic.", correct: false },
      { text: "Només si és un document llarg.", correct: false }
    ]
  },
  {
    question: "Què caracteritza la supervisió?",
    number: 48,
    answers: [
      { text: "És un control permanent i jeràrquic.", correct: true },
      { text: "És un control esporàdic.", correct: false },
      { text: "És un control extern total.", correct: false },
      { text: "No té finalitat concreta.", correct: false }
    ]
  },
  {
    question: "La delegació de competències no és possible si:",
    number: 49,
    answers: [
      { text: "La llei ho prohibeix expressament.", correct: true },
      { text: "El delegat no té telèfon.", correct: false },
      { text: "L'assumpte és molt llarg.", correct: false },
      { text: "El delegant té molta feina.", correct: false }
    ]
  },
  {
    question: "L'avocació deixa sense efecte la delegació?",
    number: 50,
    answers: [
      { text: "Sols per a l'assumpte concret que s'avoca.", correct: true },
      { text: "No, mai.", correct: false },
      { text: "Sí, per a tota la competència.", correct: false },
      { text: "Sols si el delegat dimiteix.", correct: false }
    ]
  },
  {
    question: "L'encàrrec de gestió pot tenir caràcter:",
    number: 51,
    answers: [
      { text: "Tècnic, econòmic o administratiu.", correct: true },
      { text: "Només social.", correct: false },
      { text: "Només informàtic.", correct: false },
      { text: "Estètic.", correct: false }
    ]
  },
  {
    question: "El suplent assumeix la competència?",
    number: 52,
    answers: [
      { text: "Sí, en tota la seva extensió durant el període de suplència.", correct: true },
      { text: "Només per a tràmits menors.", correct: false },
      { text: "Mai.", correct: false },
      { text: "Només si el titular li dóna permís cada dia.", correct: false }
    ]
  },
  {
    question: "La delegació de signatura pot ser per a tots els actes?",
    number: 53,
    answers: [
      { text: "Sí, sempre que siguin actes de la mateixa competència.", correct: true },
      { text: "No, només per a alguns.", correct: false },
      { text: "Mai.", correct: false },
      { text: "Només per a resolucions favorables.", correct: false }
    ]
  },
  {
    question: "La competència es pot exercir per:",
    number: 54,
    answers: [
      { text: "Delegació, avocació, encàrrec de gestió o suplència.", correct: true },
      { text: "Només per l'òrgan original.", correct: false },
      { text: "Per votació al carrer.", correct: false },
      { text: "Per una app mòbil sense control.", correct: false }
    ]
  },
  {
    question: "L'òrgan delegant és responsable de:",
    number: 55,
    answers: [
      { text: "La selecció del delegat.", correct: true },
      { text: "Tots els errors del delegat.", correct: false },
      { text: "Els errors dels funcionaris d'un altre departament.", correct: false },
      { text: "Cap responsabilitat.", correct: false }
    ]
  },
  {
    question: "La delegació és un mecanisme de:",
    number: 56,
    answers: [
      { text: "Flexibilització administrativa.", correct: true },
      { text: "Rigidesa extrema.", correct: false },
      { text: "Centralització del poder.", correct: false },
      { text: "Obstrucció.", correct: false }
    ]
  },
  {
    question: "L'avocació requereix:",
    number: 57,
    answers: [
      { text: "Un acord de l'òrgan superior.", correct: true },
      { text: "Una elecció interna.", correct: false },
      { text: "El vistiplau de l'interessat.", correct: false },
      { text: "Un sorteig.", correct: false }
    ]
  },
  {
    question: "L'encàrrec de gestió es pot fer entre administracions diferents?",
    number: 58,
    answers: [
      { text: "Sí, mitjançant conveni.", correct: true },
      { text: "No, mai.", correct: false },
      { text: "Només amb l'Estat.", correct: false },
      { text: "Només a nivell municipal.", correct: false }
    ]
  },
  {
    question: "La delegació de signatura és l'expressió de la competència de:",
    number: 59,
    answers: [
      { text: "L'òrgan que signa en nom de l'òrgan titular.", correct: true },
      { text: "El delegat sol.", correct: false },
      { text: "L'òrgan de control.", correct: false },
      { text: "El ciutadà.", correct: false }
    ]
  },
  {
    question: "La suplència d'òrgans col·legiats afecta:",
    number: 60,
    answers: [
      { text: "Als membres de l'òrgan.", correct: true },
      { text: "A tot l'edifici.", correct: false },
      { text: "A la llei del parlament.", correct: false },
      { text: "Al pressupost de l'ajuntament.", correct: false }
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