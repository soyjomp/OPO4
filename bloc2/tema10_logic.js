const TEST_ID = "tema10"; 
const questions = [
  {
    question: "El procediment administratiu es pot iniciar de les maneres següents:",
    number: 1,
    answers: [
      { text: "D'ofici o a sol·licitud de persona interessada.", correct: true },
      { text: "Només d'ofici.", correct: false },
      { text: "Només a petició de part.", correct: false },
      { text: "Per decret llei o via judicial.", correct: false }
    ]
  },
  {
    question: "Les actuacions prèvies a l'inici d'un procediment d'ofici tenen com a finalitat:",
    number: 2,
    answers: [
      { text: "Determinar si concorren circumstàncies que en justifiquen l'inici.", correct: true },
      { text: "Resoldre definitivament l'expedient.", correct: false },
      { text: "Sancionar directament la conducta observada.", correct: false },
      { text: "Arxivar totes les denúncies rebudes.", correct: false }
    ]
  },
  {
    question: "L'inici d'un procediment d'ofici es pot fer per:",
    number: 3,
    answers: [
      { text: "Iniciativa pròpia, ordre superior, petició raonada d'altres òrgans o denúncia.", correct: true },
      { text: "Sorteig entre els funcionaris.", correct: false },
      { text: "Decisió exclusiva de l'interessat.", correct: false },
      { text: "Un acord verbal entre consellers.", correct: false }
    ]
  },
  {
    question: "La denúncia és:",
    number: 4,
    answers: [
      { text: "L'acte pel qual qualsevol persona posa en coneixement d'un òrgan fets que podrien justificar l'inici d'ofici.", correct: true },
      { text: "La resolució final d'un expedient.", correct: false },
      { text: "Un recurs contra una sanció.", correct: false },
      { text: "Un acte obligatori per a tots els ciutadans.", correct: false }
    ]
  },
  {
    question: "La presentació d'una denúncia converteix el denunciant en interessat?",
    number: 5,
    answers: [
      { text: "No, llevat que així ho estableixi la normativa específica.", correct: true },
      { text: "Sí, automàticament.", correct: false },
      { text: "Només si el denunciat és un funcionari.", correct: false },
      { text: "Només si es presenta presencialment.", correct: false }
    ]
  },
  {
    question: "Quina de les següents no és una forma d'inici del procediment d'ofici?",
    number: 6,
    answers: [
      { text: "Sol·licitud de l'interessat.", correct: true },
      { text: "Ordre superior.", correct: false },
      { text: "Petició raonada d'altres òrgans.", correct: false },
      { text: "Iniciativa de l'òrgan competent.", correct: false }
    ]
  },
  {
    question: "L'informació prèvia té naturalesa d'acte administratiu?",
    number: 7,
    answers: [
      { text: "No, es tracta d'una actuació d'investigació interna.", correct: true },
      { text: "Sí, és un acte definitiu.", correct: false },
      { text: "Sí, requereix notificació preceptiva.", correct: false },
      { text: "Només si l'interessat ho demana.", correct: false }
    ]
  },
  {
    question: "Quan s'inicia el procediment a sol·licitud de persona interessada, què ha d'incloure la sol·licitud?",
    number: 8,
    answers: [
      { text: "Dades personals, fets, raons, petició, lloc, data i signatura.", correct: true },
      { text: "Només la signatura i el nom.", correct: false },
      { text: "Cap dada, l'administració ho ha de saber.", correct: false },
      { text: "Una taxa pagada per endavant obligatòriament.", correct: false }
    ]
  },
  {
    question: "Si una sol·licitud no reuneix els requisits, l'administració:",
    number: 9,
    answers: [
      { text: "Requerirà l'interessat perquè l'esmeni en un termini de 10 dies.", correct: true },
      { text: "L'arxivarà directament sense avisar.", correct: false },
      { text: "L'enviarà a la policia.", correct: false },
      { text: "La resoldrà negativament.", correct: false }
    ]
  },
  {
    question: "Què ocorre si l'interessat no esmena la sol·licitud en el termini concedit?",
    number: 10,
    answers: [
      { text: "Se'l tindrà per desistit de la seva petició.", correct: true },
      { text: "Se l'obligarà a pagar una multa.", correct: false },
      { text: "L'administració ha de resoldre igualment.", correct: false },
      { text: "S'inicia un altre procediment.", correct: false }
    ]
  },
  {
    question: "L'administració pot sol·licitar informació addicional durant l'inici?",
    number: 11,
    answers: [
      { text: "Sí, per completar l'expedient.", correct: true },
      { text: "No, està totalment prohibit.", correct: false },
      { text: "Només en cap de setmana.", correct: false },
      { text: "Només si l'òrgan és superior.", correct: false }
    ]
  },
  {
    question: "Els models normalitzats de sol·licitud tenen com a objectiu:",
    number: 12,
    answers: [
      { text: "Facilitar l'exercici del dret de petició i la tramitació.", correct: true },
      { text: "Dificultar l'accés del ciutadà.", correct: false },
      { text: "Controlar el nombre d'interessats.", correct: false },
      { text: "Limitar els drets fonamentals.", correct: false }
    ]
  },
  {
    question: "L'inici d'un procediment d'ofici requereix que l'òrgan competent:",
    number: 13,
    answers: [
      { text: "Dicti un acord d'inici motivat.", correct: true },
      { text: "Ho faci de paraula.", correct: false },
      { text: "Esperi a ser denunciat.", correct: false },
      { text: "Demani permís al jutge.", correct: false }
    ]
  },
  {
    question: "Què és una 'petició raonada' per iniciar un procediment?",
    number: 14,
    answers: [
      { text: "La proposta formulada per un òrgan que no té competència per iniciar-lo.", correct: true },
      { text: "Un recurs de reposició.", correct: false },
      { text: "Una petició privada d'un amic.", correct: false },
      { text: "Una ordre directa d'un jutge.", correct: false }
    ]
  },
  {
    question: "L'administració pot acumular procediments?",
    number: 15,
    answers: [
      { text: "Sí, si tenen identitat o connexió substancial.", correct: true },
      { text: "No, mai.", correct: false },
      { text: "Només si són de diferents administracions.", correct: false },
      { text: "Només per fer-los més llargs.", correct: false }
    ]
  },
  {
    question: "La data d'inici d'un procediment d'ofici és:",
    number: 16,
    answers: [
      { text: "La data de l'acord d'inici.", correct: true },
      { text: "La data en què es rep la denúncia.", correct: false },
      { text: "El dia que surt al diari.", correct: false },
      { text: "El dia que el funcionari el registra.", correct: false }
    ]
  },
  {
    question: "En el procediment a sol·licitud de part, la data d'inici és:",
    number: 17,
    answers: [
      { text: "La data d'entrada en el registre de l'òrgan competent.", correct: true },
      { text: "El dia que el ciutadà el va redactar a casa.", correct: false },
      { text: "El dia que el funcionari el veu per primer cop.", correct: false },
      { text: "Cinc dies després de presentar-lo.", correct: false }
    ]
  },
  {
    question: "L'administració pot fer estudis previs abans d'iniciar un procediment?",
    number: 18,
    answers: [
      { text: "Sí, com a part de les actuacions prèvies.", correct: true },
      { text: "No, és una pèrdua de temps.", correct: false },
      { text: "Només en matèria d'urbanisme.", correct: false },
      { text: "Només si hi ha diners sobrants.", correct: false }
    ]
  },
  {
    question: "L'acord d'inici s'ha de comunicar als interessats?",
    number: 19,
    answers: [
      { text: "Sí, per garantir la seva defensa.", correct: true },
      { text: "Només si ho demanen.", correct: false },
      { text: "No, és secret.", correct: false },
      { text: "Només al final.", correct: false }
    ]
  },
  {
    question: "Pot una denúncia ser anònima?",
    number: 20,
    answers: [
      { text: "Sí, però l'administració ha de valorar la seva veracitat.", correct: true },
      { text: "No, han de ser sempre identificades.", correct: false },
      { text: "Només les de corrupció.", correct: false },
      { text: "Mai, no tenen cap validesa.", correct: false }
    ]
  },
  {
    question: "L'inici del procediment implica la paralització de qualsevol altre?",
    number: 21,
    answers: [
      { text: "No necessàriament.", correct: true },
      { text: "Sí, sempre.", correct: false },
      { text: "Només si és un procediment penal.", correct: false },
      { text: "Només en període electoral.", correct: false }
    ]
  },
  {
    question: "Els interessats poden desistir de la seva sol·licitud durant l'inici?",
    number: 22,
    answers: [
      { text: "Sí, sempre que no estigui prohibit per llei.", correct: true },
      { text: "No, un cop presentada és obligatori seguir.", correct: false },
      { text: "Només si paguen una taxa de desistiment.", correct: false },
      { text: "Només en el primer dia.", correct: false }
    ]
  },
  {
    question: "L'administració ha de facilitar l'accés a les dades necessàries?",
    number: 23,
    answers: [
      { text: "Sí, per evitar que el ciutadà presenti documents que ja tenen.", correct: true },
      { text: "No, el ciutadà ha de portar-ho tot.", correct: false },
      { text: "Només si l'òrgan és molt gran.", correct: false },
      { text: "Mai.", correct: false }
    ]
  },
  {
    question: "Què s'entén per 'iniciativa pròpia' d'un òrgan?",
    number: 24,
    answers: [
      { text: "El coneixement directe dels fets pel propi òrgan.", correct: true },
      { text: "Una petició d'un partit polític.", correct: false },
      { text: "La demanda d'un mitjà de comunicació.", correct: false },
      { text: "Una ordre de l'alcalde.", correct: false }
    ]
  },
  {
    question: "L'administració està obligada a iniciar tots els procediments sol·licitats?",
    number: 25,
    answers: [
      { text: "No, només si es compleixen els requisits legals.", correct: true },
      { text: "Sí, sense excepció.", correct: false },
      { text: "Només si hi ha silenci administratiu.", correct: false },
      { text: "Sí, fins i tot si són absurds.", correct: false }
    ]
  },
  {
    question: "La sol·licitud de l'interessat ha de ser presentada en:",
    number: 26,
    answers: [
      { text: "Les oficines de registre o seu electrònica.", correct: true },
      { text: "El despatx particular del funcionari.", correct: false },
      { text: "El correu electrònic personal del cap.", correct: false },
      { text: "Un bar proper a l'administració.", correct: false }
    ]
  },
  {
    question: "Si hi ha diversos interessats, es pot presentar una única sol·licitud?",
    number: 27,
    answers: [
      { text: "Sí, si tenen la mateixa pretensió.", correct: true },
      { text: "No, ha de ser una per persona.", correct: false },
      { text: "Només si són familiars.", correct: false },
      { text: "Només si són empreses.", correct: false }
    ]
  },
  {
    question: "L'inici del procediment té efectes:",
    number: 28,
    answers: [
      { text: "Sobre els terminis i la gestió de l'expedient.", correct: true },
      { text: "Cap, només quan acaba.", correct: false },
      { text: "Només per al funcionari.", correct: false },
      { text: "Només per als impostos.", correct: false }
    ]
  },
  {
    question: "L'administració pot rebutjar de plano una sol·licitud?",
    number: 29,
    answers: [
      { text: "Sí, si és manifestament irrellevant o sense fonament.", correct: true },
      { text: "No, mai.", correct: false },
      { text: "Només si l'interessat és estranger.", correct: false },
      { text: "Només si no s'ha pagat cap taxa.", correct: false }
    ]
  },
  {
    question: "El procediment d'ofici pot començar a partir d'una inspecció?",
    number: 30,
    answers: [
      { text: "Sí.", correct: true },
      { text: "No.", correct: false },
      { text: "Només si la fa la policia.", correct: false },
      { text: "Només si el ciutadà dóna permís.", correct: false }
    ]
  },
  {
    question: "La sol·licitud pot ser presentada presencialment?",
    number: 31,
    answers: [
      { text: "Sí, segons el tipus d'interessat.", correct: true },
      { text: "No, tot ha de ser electrònic.", correct: false },
      { text: "Només via telefònica.", correct: false },
      { text: "Mai.", correct: false }
    ]
  },
  {
    question: "Quina informació ha d'aportar l'interessat obligatòriament?",
    number: 32,
    answers: [
      { text: "Dades d'identificació i fets.", correct: true },
      { text: "El seu historial acadèmic.", correct: false },
      { text: "La seva ideologia.", correct: false },
      { text: "La seva llista d'amics.", correct: false }
    ]
  },
  {
    question: "L'acord d'inici d'ofici ha de ser públic?",
    number: 33,
    answers: [
      { text: "No necessàriament, tret que la llei ho digui.", correct: true },
      { text: "Sí, obligatòriament a la premsa.", correct: false },
      { text: "Només en el tauler del barri.", correct: false },
      { text: "Sempre.", correct: false }
    ]
  },
  {
    question: "L'administració ha de col·laborar en la redacció de la sol·licitud?",
    number: 34,
    answers: [
      { text: "Sí, mitjançant l'assistència als interessats.", correct: true },
      { text: "No, cadascú ha de saber-ho fer.", correct: false },
      { text: "Només si són gent gran.", correct: false },
      { text: "Mai.", correct: false }
    ]
  },
  {
    question: "L'inici per petició raonada ve d'un òrgan:",
    number: 35,
    answers: [
      { text: "Que no té la competència per iniciar el procediment.", correct: true },
      { text: "Que té la competència màxima.", correct: false },
      { text: "Que és un jutjat penal.", correct: false },
      { text: "Privat.", correct: false }
    ]
  },
  {
    question: "Una denúncia formal ha de ser examinada?",
    number: 36,
    answers: [
      { text: "Sí, l'òrgan competent l'ha de valorar.", correct: true },
      { text: "No, es pot ignorar sempre.", correct: false },
      { text: "Només si arriba amb segell.", correct: false },
      { text: "Només si el denunciat és conegut.", correct: false }
    ]
  },
  {
    question: "El procediment s'inicia de forma telemàtica obligatòriament per a:",
    number: 37,
    answers: [
      { text: "Persones jurídiques i col·lectius obligats.", correct: true },
      { text: "Totes les persones sense excepcions.", correct: false },
      { text: "Només per als menors.", correct: false },
      { text: "Només per als funcionaris.", correct: false }
    ]
  },
  {
    question: "L'administració pot exigir còpies autenticades?",
    number: 38,
    answers: [
      { text: "No, ha d'admetre els documents presentats o fer-ne la còpia.", correct: true },
      { text: "Sí, sempre que l'interessat pagui.", correct: false },
      { text: "Només via notari.", correct: false },
      { text: "Sí, per norma general.", correct: false }
    ]
  },
  {
    question: "Què és la 'informació prèvia'?",
    number: 39,
    answers: [
      { text: "Un tràmit per esbrinar si hi ha dades per iniciar el procediment.", correct: true },
      { text: "Un examen de l'interessat.", correct: false },
      { text: "Una multa informativa.", correct: false },
      { text: "Un acte final.", correct: false }
    ]
  },
  {
    question: "Les actuacions prèvies són obligatòries?",
    number: 40,
    answers: [
      { text: "No, són facultatives per a l'administració.", correct: true },
      { text: "Sí, en tots els casos.", correct: false },
      { text: "Només si el ciutadà ho demana.", correct: false },
      { text: "Només si el jutge ho ordena.", correct: false }
    ]
  },
  {
    question: "La sol·licitud pot ser presentada fora de termini?",
    number: 41,
    answers: [
      { text: "Si el termini és de caducitat, es pot perdre el dret.", correct: true },
      { text: "No importa mai el termini.", correct: false },
      { text: "L'administració mai té terminis.", correct: false },
      { text: "Sempre s'admet.", correct: false }
    ]
  },
  {
    question: "En l'inici d'ofici, l'administració ha d'identificar els interessats?",
    number: 42,
    answers: [
      { text: "Sí, si són coneguts.", correct: true },
      { text: "No, mai.", correct: false },
      { text: "Només si hi ha sanció.", correct: false },
      { text: "Només si són de la Generalitat.", correct: false }
    ]
  },
  {
    question: "El procediment s'inicia pel fet de:",
    number: 43,
    answers: [
      { text: "Donar-se els supòsits legals per fer-ho.", correct: true },
      { text: "La voluntat del funcionari de torn.", correct: false },
      { text: "L'atzar.", correct: false },
      { text: "La publicitat electoral.", correct: false }
    ]
  },
  {
    question: "L'administració ha de notificar l'inici del procediment si:",
    number: 44,
    answers: [
      { text: "L'interessat és conegut i el procediment l'afecta.", correct: true },
      { text: "És un procediment secret.", correct: false },
      { text: "El procediment dura 5 minuts.", correct: false },
      { text: "Mai cal notificar res.", correct: false }
    ]
  },
  {
    question: "La sol·licitud té un model obligatori?",
    number: 45,
    answers: [
      { text: "Només si l'administració n'ha aprovat un.", correct: true },
      { text: "Sí, sempre per a tot.", correct: false },
      { text: "Mai, cadascú ho fa com vol.", correct: false },
      { text: "Només si és en paper.", correct: false }
    ]
  },
  {
    question: "Què és la 'instància de part'?",
    number: 46,
    answers: [
      { text: "El mateix que la sol·licitud de l'interessat.", correct: true },
      { text: "Una acció judicial.", correct: false },
      { text: "Un acte del govern.", correct: false },
      { text: "Un recurs contra una sentència.", correct: false }
    ]
  },
  {
    question: "Es pot presentar una sol·licitud per fax?",
    number: 47,
    answers: [
      { text: "Si el centre de recepció ho té, sí.", correct: true },
      { text: "No, és una tecnologia obsoleta.", correct: false },
      { text: "Només per missatge de veu.", correct: false },
      { text: "Mai.", correct: false }
    ]
  },
  {
    question: "Els interessats poden actuar per representant?",
    number: 48,
    answers: [
      { text: "Sí, acreditat documentalment.", correct: true },
      { text: "No, ha d'anar personalment.", correct: false },
      { text: "Només en cas d'urgència.", correct: false },
      { text: "Només si el representant és advocat.", correct: false }
    ]
  },
  {
    question: "L'administració pot fer proves abans d'iniciar?",
    number: 49,
    answers: [
      { text: "Sí, com a part de les actuacions prèvies.", correct: true },
      { text: "No, només un cop iniciat.", correct: false },
      { text: "Mai.", correct: false },
      { text: "Només amb l'autorització del ciutadà.", correct: false }
    ]
  },
  {
    question: "Si la denúncia es fa davant una altra autoritat, què passa?",
    number: 50,
    answers: [
      { text: "Aquesta l'ha de traslladar a l'òrgan competent.", correct: true },
      { text: "S'arxiva directament.", correct: false },
      { text: "L'administració no té obligació.", correct: false },
      { text: "L'interessat ha de tornar a començar.", correct: false }
    ]
  },
  {
    question: "L'acord d'inici d'ofici pot ser impugnat?",
    number: 51,
    answers: [
      { text: "Normalment no, tret que impedeixi la defensa.", correct: true },
      { text: "Sempre sí.", correct: false },
      { text: "Mai.", correct: false },
      { text: "Només si el jutge ho vol.", correct: false }
    ]
  },
  {
    question: "Les actuacions prèvies s'han de fer en el termini més curt possible?",
    number: 52,
    answers: [
      { text: "Sí.", correct: true },
      { text: "No, el temps no importa.", correct: false },
      { text: "Tenen un termini fix de 1 any.", correct: false },
      { text: "Només al mes d'agost.", correct: false }
    ]
  },
  {
    question: "L'administració ha d'informar del dret a fer esmenes?",
    number: 53,
    answers: [
      { text: "Sí, al requerir-les.", correct: true },
      { text: "No, és feina del ciutadà.", correct: false },
      { text: "Només si el ciutadà ho sap.", correct: false },
      { text: "Mai.", correct: false }
    ]
  },
  {
    question: "El procediment és el camí per:",
    number: 54,
    answers: [
      { text: "Dictar una resolució administrativa.", correct: true },
      { text: "Donar feina als funcionaris.", correct: false },
      { text: "Pagar impostos.", correct: false },
      { text: "Fer política.", correct: false }
    ]
  },
  {
    question: "La sol·licitud ha de ser signada?",
    number: 55,
    answers: [
      { text: "Sí, obligatòriament (electrònica o autògrafa).", correct: true },
      { text: "No, pot ser anònima.", correct: false },
      { text: "Només si és una queixa.", correct: false },
      { text: "Només pel representant.", correct: false }
    ]
  },
  {
    question: "Si l'administració no té dades per iniciar:",
    number: 56,
    answers: [
      { text: "Pot fer actuacions prèvies.", correct: true },
      { text: "Ha d'esperar a la sort.", correct: false },
      { text: "Ha de renunciar a la seva competència.", correct: false },
      { text: "Només pot demanar diners.", correct: false }
    ]
  },
  {
    question: "El procediment es pot iniciar per error?",
    number: 57,
    answers: [
      { text: "Sí, i es pot corregir.", correct: true },
      { text: "No, mai.", correct: false },
      { text: "Només si ho diu un jutge.", correct: false },
      { text: "És el motiu principal d'inici.", correct: false }
    ]
  },
  {
    question: "L'inici del procediment és el primer acte?",
    number: 58,
    answers: [
      { text: "Sí, és el moment jurídic de començament.", correct: true },
      { text: "No, abans sempre hi ha un altre acte.", correct: false },
      { text: "No existeix l'inici, tot és un procés.", correct: false },
      { text: "És l'últim acte.", correct: false }
    ]
  },
  {
    question: "L'administració ha de mantenir la confidencialitat en la denúncia?",
    number: 59,
    answers: [
      { text: "Sí, en la mesura que la llei ho permeti.", correct: true },
      { text: "No, ha de dir el nom a tothom.", correct: false },
      { text: "Només si ho paguen.", correct: false },
      { text: "Mai.", correct: false }
    ]
  },
  {
    question: "El procediment pot ser incoat per:",
    number: 60,
    answers: [
      { text: "L'òrgan competent per dictar la resolució.", correct: true },
      { text: "Qualsevol persona del carrer sense autoritat.", correct: false },
      { text: "Un becari sense control.", correct: false },
      { text: "La premsa.", correct: false }
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