const TEST_ID = "2026_c2_parcsijardins_test"; 
const questions = [
  {
    number: 1,
    question: "Es pot suspendre algun dret dels que figuren a la Constitució espanyola?",
    answers: [
      { text: "S’hauria de fer una Constitució nova i reformular els drets existents.", correct: false },
      { text: "En casos de declaració d’estat de setge o excepció sí.", correct: true },
      { text: "No. Per alguna cosa són drets constitucionals.", correct: false },
      { text: "Els drets fonamentals mai es poden limitar.", correct: false }
    ]
  },
  {
    number: 2,
    question: "Les associacions il·legals són:",
    answers: [
      { text: "Qualsevol que defensi fets no inclosos en la Constitució.", correct: false },
      { text: "Les que persegueixen fins il·lícits.", correct: true },
      { text: "Les polítiques que defensin la separació d’una part del territori.", correct: false },
      { text: "Les que defensin valors religiosos diferents als catòlics.", correct: false }
    ]
  },
  {
    number: 3,
    question: "Quants Diputats hi ha actualment al Congrés dels Diputats?",
    answers: [
      { text: "500.", correct: false },
      { text: "400.", correct: false },
      { text: "300.", correct: false },
      { text: "350.", correct: true }
    ]
  },
  {
    number: 4,
    question: "El president del Congrés dels diputats, a quin poder representa?",
    answers: [
      { text: "Al poder legislatiu.", correct: true },
      { text: "Al poder executiu.", correct: false },
      { text: "Al poder judicial.", correct: false },
      { text: "A la Corona.", correct: false }
    ]
  },
  {
    number: 5,
    question: "Quantes Comunitats autònomes hi ha a l’Estat espanyol?",
    answers: [
      { text: "18.", correct: false },
      { text: "16.", correct: false },
      { text: "17.", correct: true },
      { text: "19.", correct: false }
    ]
  },
  {
    number: 6,
    question: "Quins són els símbols nacionals segons l’Estatut d’autonomia de Catalunya?",
    answers: [
      { text: "La bandera, els castellers i l’himne.", correct: false },
      { text: "La bandera, el barça, i l’himne.", correct: false },
      { text: "La bandera, la sardana, i els castellers.", correct: false },
      { text: "La bandera, la festa i l’himne.", correct: true }
    ]
  },
  {
    number: 7,
    question: "L’accés a la funció pública s’ha de basar en els principis de:",
    answers: [
      { text: "Lliure designació.", correct: false },
      { text: "Mèrit i capacitat.", correct: true },
      { text: "Antiguitat.", correct: false },
      { text: "Afinitat política.", correct: false }
    ]
  },
  {
    number: 8,
    question: "Quin principi ha de garantir l’Administració pública?",
    answers: [
      { text: "Discrecionalitat absoluta.", correct: false },
      { text: "Servir amb objectivitat els interessos generals.", correct: true },
      { text: "Independència del Govern.", correct: false },
      { text: "Celeritat.", correct: false }
    ]
  },
  {
    number: 11,
    question: "Al personal laboral de l’Administració pública, quina legislació els hi aplica?",
    answers: [
      { text: "L’Estatut dels treballadors i els Convenis col·lectius aplicables.", correct: true },
      { text: "L’Estatut bàsic dels treballadors públics.", correct: false },
      { text: "La legislació aplicable en funció del tipus d’Administració pública.", correct: false },
      { text: "El Règim jurídic laboral del sector públic.", correct: false }
    ]
  },
  {
    number: 15,
    question: "L’objectiu general del Pla d’Igualtat és:",
    answers: [
      { text: "Avançar en la igualtat d’oportunitats entre dones i homes, tenint en compte les diferents dimensions de la desigualtat i incorporant com l’origen geogràfic, la diversitat funcional, l’edat o la diversitat sexual i de gènere.", correct: true },
      { text: "Garantir que tots els treballadors i treballadores rebin exactament el mateix salari, independentment del lloc, responsabilitat o experiència.", correct: false },
      { text: "Promoure activitats socials per millorar l’ambient laboral, sense relació amb la igualtat o les condicions de treball.", correct: false },
      { text: "Crear un pla exclusiu per a la contractació de personal jove com a mesura principal d’igualtat.", correct: false }
    ]
  },
{
    number: 16,
    question: "El llenguatge inclusiu i no sexista és:",
    answers: [
      { text: "Una forma de parlar que evita utilitzar verbs per simplificar les frases.", correct: false },
      { text: "Un estil comunicatiu que recomana utilitzar sempre les mateixes paraules, independentment del context.", correct: false },
      { text: "Un llenguatge que evita el biaix cap a un sexe i que tracta tothom amb el mateix respecte sense amagar-ne, excloure’n o jerarquitzar-ne cap dels dos.", correct: true },
      { text: "Un llenguatge que només s’utilitza en àmbits acadèmics i no és necessari en l’entorn laboral.", correct: false }
    ]
  },
  {
    number: 18,
    question: "Quan es considera rebutjada una notificació electrònica?",
    answers: [
      { text: "Quan el destinatari la llegeix parcialment.", correct: false },
      { text: "Quan han passat 5 dies sense accedir-hi.", correct: false },
      { text: "Quan han passat 10 dies naturals sense accedir-hi.", correct: true },
      { text: "Quan l’Administració ho decideix.", correct: false }
    ]
  },
  {
    number: 19,
    question: "Quin dels següents actes és directament nul de ple dret i no anul·lable?",
    answers: [
      { text: "Acte amb error aritmètic.", correct: false },
      { text: "Acte dictat per òrgan manifestament incompetent per raó de la matèria.", correct: true },
      { text: "Acte amb defecte de forma no essencial.", correct: false },
      { text: "Acte fora de termini.", correct: false }
    ]
  },
  {
    number: 20,
    question: "Quan un acte administratiu produeix efectes des d’una data anterior a la seva adopció?",
    answers: [
      { text: "Quan és desfavorable.", correct: false },
      { text: "Quan és nul.", correct: false },
      { text: "Quan té efectes retroactius favorables i no lesiona drets de tercers.", correct: true },
      { text: "Quan l’Administració ho decideix lliurement.", correct: false }
    ]
  },
  {
    number: 21,
    question: "Quan en una sol·licitud, escrit o comunicació hi figurin diversos interessats (indicar la resposta més completa o encertada):",
    answers: [
      { text: "Les actuacions a què donin lloc s´hauran d´entendre amb l´interessat que figuri en primer terme.", correct: false },
      { text: "Les actuacions a què donin lloc s'han d'efectuar amb el representant o l'interessat que s´hagi assenyalat expressament i, si no n'hi ha, amb el que figuri en primer terme.", correct: true },
      { text: "Les actuacions a què donin lloc s´han d´entendre amb tots i cada un dels individus que constin identificats a la sol·licitud.", correct: false },
      { text: "Cap de les anteriors respostes és correcta.", correct: false }
    ]
  },
  {
    number: 22,
    question: "Quin dels següents és un dret de les persones en les seves relacions amb l’Administració?",
    answers: [
      { text: "Obligatorietat d’utilitzar mitjans electrònics en tots els casos.", correct: false },
      { text: "No identificar-se mai davant l’Administració.", correct: false },
      { text: "Conèixer l’estat de la tramitació dels procediments.", correct: true },
      { text: "Presentar documents fora de termini.", correct: false }
    ]
  },
  {
    number: 23,
    question: "Les persones tenen dret a ser assistides en l’ús de mitjans electrònics?",
    answers: [
      { text: "No, mai.", correct: false },
      { text: "Només les empreses.", correct: false },
      { text: "Sí, especialment si no estan obligades a usar-los.", correct: true },
      { text: "Només amb advocat.", correct: false }
    ]
  },
  {
    number: 24,
    question: "Si un subjecte obligat a relacionar-se amb l'Administració per mitjans electrònics presenta la sol·licitud presencialment:",
    answers: [
      { text: "S’admet sense més.", correct: false },
      { text: "Es rebutja definitivament.", correct: false },
      { text: "S’ha de requerir la seva presentació electrònica com a esmena.", correct: true },
      { text: "Es tramita parcialment.", correct: false }
    ]
  },
  {
    number: 25,
    question: "Els terminis de la Llei de procediment administratiu poden ser en:",
    answers: [
      { text: "Dies hàbils i inhàbils.", correct: false },
      { text: "Hores, dies, mesos i anys.", correct: true },
      { text: "Dies, mesos i anys.", correct: false },
      { text: "Hores, dies, setmanes i anys.", correct: false }
    ]
  },
  {
    number: 26,
    question: "Si el 7 de setembre es publica una resolució que inicia el termini d’esmenes de 10 dies hàbils, quin és el darrer dia vàlid per presentar una esmena? (dia 7 divendres, 11 festiu, 24 festiu)",
    answers: [
      { text: "El dia 18 de setembre.", correct: false },
      { text: "El dia 24 de setembre.", correct: false },
      { text: "El dia 21 de setembre.", correct: false },
      { text: "El dia 25 de setembre.", correct: true }
    ]
  },
  {
    number: 27,
    question: "Si el 10 d’octubre es publica una convocatòria que inicia el termini de presentació de sol·licituds de 20 dies naturals, quin és el darrer dia vàlid per presentar una sol·licitud? (10 Octubre Dimecres, 12 festiu)",
    answers: [
      { text: "El dia 29 d’octubre.", correct: false },
      { text: "El dia 30 d’octubre.", correct: true },
      { text: "El dia 31 d’octubre.", correct: false },
      { text: "El dia 2 de novembre.", correct: false }
    ]
  },
  {
    number: 28,
    question: "Són dies inhàbils:",
    answers: [
      { text: "Només els diumenges.", correct: false },
      { text: "Dissabtes, diumenges i festius.", correct: true },
      { text: "Només festius nacionals.", correct: false },
      { text: "Només dissabtes.", correct: false }
    ]
  },
  {
    number: 29,
    question: "Quan una sol·licitud no reuneix els requisits exigits, l’Administració:",
    answers: [
      { text: "L’ha d’inadmetre directament.", correct: false },
      { text: "Ha de requerir l’interessat perquè l’esmeni.", correct: true },
      { text: "Pot arxivar-la sense més tràmit.", correct: false },
      { text: "Ha de resoldre sobre el fons igualment.", correct: false }
    ]
  },
  {
    number: 30,
    question: "Quin és el termini general per esmenar una sol·licitud?",
    answers: [
      { text: "5 dies improrrogables.", correct: false },
      { text: "10 dies prorrogables.", correct: true },
      { text: "15 dies naturals.", correct: false },
      { text: "20 dies hàbils.", correct: false }
    ]
  },
  {
    number: 31,
    question: "Què permet l’esmena a l’interessat?",
    answers: [
      { text: "Modificar lliurement la seva pretensió inicial.", correct: false },
      { text: "Aportar documents i corregir defectes o omissions.", correct: true },
      { text: "Reiniciar el procediment.", correct: false },
      { text: "Evitar la resolució administrativa.", correct: false }
    ]
  },
  {
    number: 32,
    question: "Què implica el silenci positiu?",
    answers: [
      { text: "Desestimació.", correct: false },
      { text: "Caducitat.", correct: false },
      { text: "Estimació de la sol·licitud.", correct: true },
      { text: "Suspensió.", correct: false }
    ]
  },
  {
    number: 33,
    question: "L’Administració pot dictar resolució expressa després del silenci positiu?",
    answers: [
      { text: "No, mai.", correct: false },
      { text: "Sí, però només confirmatòria.", correct: true },
      { text: "Sí, sempre en contra.", correct: false },
      { text: "Només judicialment.", correct: false }
    ]
  },
  {
    number: 34,
    question: "El silenci administratiu substitueix l’obligació de resoldre?",
    answers: [
      { text: "Sí.", correct: false },
      { text: "No.", correct: true },
      { text: "Només parcialment.", correct: false },
      { text: "Només en sancions.", correct: false }
    ]
  },
  {
    number: 35,
    question: "Quin dels següents és un recurs administratiu ordinari?",
    answers: [
      { text: "Recurs de revisió.", correct: false },
      { text: "Recurs d’alçada.", correct: true },
      { text: "Recurs d’apel·lació.", correct: false },
      { text: "Recurs d’inconstitucionalitat.", correct: false }
    ]
  },
  {
    number: 36,
    question: "Quin és el termini general per interposar un recurs d’alçada?",
    answers: [
      { text: "10 dies.", correct: false },
      { text: "15 dies.", correct: false },
      { text: "1 mes.", correct: true },
      { text: "3 mesos.", correct: false }
    ]
  },
  {
    number: 37,
    question: "El recurs de reposició és:",
    answers: [
      { text: "Obligatori.", correct: false },
      { text: "Previ al judicial sempre.", correct: false },
      { text: "Potestatiu (es pot presentar o no, segons consideri l’interessat).", correct: true },
      { text: "Inexistent.", correct: false }
    ]
  },
  {
    number: 38,
    question: "L’error en la qualificació del recurs per part de l’interessat:",
    answers: [
      { text: "Determina la inadmissió.", correct: false },
      { text: "Es corregeix d’ofici per l’Administració.", correct: true },
      { text: "Anul·la el procediment.", correct: false },
      { text: "Implica sanció.", correct: false }
    ]
  },
  {
    number: 39,
    question: "Per crear un índex automàtic en MS Word, què cal fer prèviament?",
    answers: [
      { text: "Escriure els títols en negreta.", correct: false },
      { text: "Canviar els marges.", correct: false },
      { text: "Copiar els textos.", correct: false },
      { text: "Utilitzar estils de títol.", correct: true }
    ]
  },
  {
    number: 40,
    question: "Quina funció permet saber qui ha fet cada canvi en un document?",
    answers: [
      { text: "Control de canvis.", correct: true },
      { text: "Comentaris.", correct: false },
      { text: "Cerca i substitueix.", correct: false },
      { text: "Format automàtic.", correct: false }
    ]
  },
  {
    number: 41,
    question: "En l’ús de MS Word, si vols que un document comenci sempre amb una portada sense numeració, però que la numeració comenci a la pàgina següent, què cal fer?",
    answers: [
      { text: "Eliminar el número de la primera pàgina manualment.", correct: false },
      { text: "Canviar el format del document.", correct: false },
      { text: "Inserir un salt de secció i marcar “Primera pàgina diferent”.", correct: true },
      { text: "Canviar l’estil del títol.", correct: false }
    ]
  },
  {
    number: 42,
    question: "Si vols repetir el mateix format (tipus de lletra, mida i color) en diferents parts del document, quina és la millor opció?",
    answers: [
      { text: "Copiar i enganxar el text.", correct: false },
      { text: "Aplicar format manualment cada vegada.", correct: false },
      { text: "Fer servir tabulacions.", correct: false },
      { text: "Crear o utilitzar un estil.", correct: true }
    ]
  },
  {
    number: 43,
    question: "En un document de MS Word, si abans d’imprimir vols comprovar com quedarà exactament cada pàgina, quina opció has d’utilitzar?",
    answers: [
      { text: "Vista d’esborrany.", correct: false },
      { text: "Vista prèvia d’impressió.", correct: true },
      { text: "Vista web.", correct: false },
      { text: "Mode lectura.", correct: false }
    ]
  },
  {
    number: 44,
    question: "Si en una cel·la apareix l’error #DIV/0!, què indica normalment?",
    answers: [
      { text: "Que falta una funció.", correct: false },
      { text: "Que la cel·la està buida.", correct: false },
      { text: "Que el format no és correcte.", correct: false },
      { text: "Que s’ha dividit entre zero.", correct: true }
    ]
  },
  {
    number: 45,
    question: "Què és recomanable fer abans d’esborrar una columna que s’utilitza en fórmules d’altres cel·les?",
    answers: [
      { text: "Canviar el color.", correct: false },
      { text: "Comprovar si hi ha fórmules que en depenen.", correct: true },
      { text: "Amagar-la.", correct: false },
      { text: "Ordenar el full.", correct: false }
    ]
  },
  {
    number: 46,
    question: "Quin avantatge té utilitzar el format de taula en Excel?",
    answers: [
      { text: "El full pesa menys.", correct: false },
      { text: "Les dades no es poden canviar.", correct: false },
      { text: "Facilita filtres, formats i càlculs automàtics.", correct: true },
      { text: "Bloqueja les cel·les.", correct: false }
    ]
  },
  {
    number: 47,
    question: "Si un número es veu com “#######” en una cel·la, què sol indicar?",
    answers: [
      { text: "Que la dada és incorrecta.", correct: false },
      { text: "Que la columna és massa estreta.", correct: true },
      { text: "Que la fórmula està mal escrita.", correct: false },
      { text: "Que falta una funció.", correct: false }
    ]
  },
  {
    number: 48,
    question: "Abans d’imprimir un full d’Excel, per què és recomanable revisar la vista prèvia?",
    answers: [
      { text: "Per canviar les dades.", correct: false },
      { text: "Per afegir gràfics.", correct: false },
      { text: "Per modificar fórmules.", correct: false },
      { text: "Per veure com quedarà distribuït a les pàgines.", correct: true }
    ]
  },
  {
    number: 49,
    question: "El Patró de diapositives serveix principalment per a:",
    answers: [
      { text: "Afegir animacions a una diapositiva.", correct: false },
      { text: "Escriure les notes del presentador.", correct: false },
      { text: "Controlar el disseny global de la presentació.", correct: true },
      { text: "Reproduir la presentació automàticament.", correct: false }
    ]
  },
  {
    number: 50,
    question: "Una transició s’aplica a:",
    answers: [
      { text: "Una diapositiva.", correct: true },
      { text: "Un text.", correct: false },
      { text: "Un objecte.", correct: false },
      { text: "Una imatge.", correct: false }
    ]
  },
  {
    number: 51,
    question: "Per a què serveix l’opció “c/o” en l’enviament d’un correu electrònic?",
    answers: [
      { text: "Permet posar un únic destinatari.", correct: false },
      { text: "Permet posar diferents adreces, de manera que els destinataris vegin els altres.", correct: false },
      { text: "Permet posar diferents adreces, de manera que els destinataris no vegin els altres.", correct: true },
      { text: "Demana confirmació de lectura.", correct: false }
    ]
  },
  {
    number: 52,
    question: "Què passa si no poso assumpte en un correu electrònic?",
    answers: [
      { text: "El correu anirà a Spam.", correct: false },
      { text: "Pot sortir un avís indicant que no hem posat assumpte, i si volem continuar.", correct: true },
      { text: "Donarà error.", correct: false },
      { text: "Agafarà el text automàticament.", correct: false }
    ]
  },
  {
    number: 53,
    question: "Quina de les següents frases es la més correcta, d’acord amb una redacció eficient i planera?",
    answers: [
      { text: "A continuació procedirem a iniciar les proves del procés selectiu.", correct: false },
      { text: "Tot seguit iniciarem les proves del procés selectiu.", correct: true },
      { text: "A continuació iniciarem les proves del present procés selectiu.", correct: false },
      { text: "Tot seguit donarem per iniciades les proves del procés selectiu.", correct: false }
    ]
  },
  {
    number: 54,
    question: "Quin d’aquests és un navegador web?",
    answers: [
      { text: "Google.", correct: false },
      { text: "Word.", correct: false },
      { text: "Edge.", correct: true },
      { text: "Wikipedia.", correct: false }
    ]
  },
  {
    number: 55,
    question: "Quin d’aquests és un motor de cerca?",
    answers: [
      { text: "YouTube.", correct: false },
      { text: "Gmail.", correct: false },
      { text: "PowerPoint.", correct: false },
      { text: "Google.", correct: true }
    ]
  },
  {
    number: 56,
    question: "Si trobes dues webs amb informació diferent sobre el mateix tema, què hauries de fer?",
    answers: [
      { text: "Escollir la més curta.", correct: false },
      { text: "Crear la primera que has vist.", correct: false },
      { text: "Comparar fonts i comprovar-ne la fiabilitat.", correct: true },
      { text: "Comprovar-ne l’autor i fer servir el de més entitat.", correct: false }
    ]
  },
  {
    number: 57,
    question: "Què passa si escrius termes de cerca a la barra d’adreces en lloc d’una URL?",
    answers: [
      { text: "El navegador es bloqueja.", correct: false },
      { text: "No passa res.", correct: false },
      { text: "Dona error.", correct: false },
      { text: "El navegador utilitza un motor de cerca per fer la recerca.", correct: true }
    ]
  },
  {
    number: 58,
    question: "Quina diferència hi ha entre cercar a tota la web o només a imatges/vídeos?",
    answers: [
      { text: "S’utilitzen filtres específics de contingut.", correct: true },
      { text: "Canvia el navegador.", correct: false },
      { text: "No hi ha cap diferència.", correct: false },
      { text: "Es canvia l’idioma.", correct: false }
    ]
  },
  {
    number: 59,
    question: "Les dades sensibles es refereixen a:",
    answers: [
      { text: "Cap de les respostes és correcta.", correct: false },
      { text: "Les dades que revelen circumstàncies o informació sobre l’esfera més íntima i personal.", correct: true },
      { text: "Dades que només poden ser tractades amb consentiment explícit i signat.", correct: false },
      { text: "Dades que poden generar perfils.", correct: false }
    ]
  },
  {
    number: 60,
    question: "Què no seria una violació de seguretat?",
    answers: [
      { text: "L’entrada d’un hacker al sistema.", correct: false },
      { text: "Llençar els partes de baixa a la paperera sense trencar.", correct: false },
      { text: "Enviar per correu els comptes anuals publicats al Registre Mercantil d'una empresa a l'empresa incorrecta.", correct: true },
      { text: "El robatori del mòbil amb accés al correu corporatiu.", correct: false }
    ]
  },
  {
    number: 61,
    question: "El certificat acreditatiu del silenci:",
    answers: [
      { text: "És obligatori sempre.", correct: false },
      { text: "Es pot sol·licitar.", correct: true },
      { text: "Només el pot emetre un jutge.", correct: false },
      { text: "No existeix.", correct: false }
    ]
  },
  {
    number: 62,
    question: "Per iniciar un correu electrònic, quina d’aquestes salutacions és correcta?",
    answers: [
      { text: "Bon dia, Clara,", correct: true },
      { text: "Bon dia Clara,", correct: false },
      { text: "Bon dia Clara:", correct: false },
      { text: "Bon dia Clara;", correct: false }
    ]
  },
  {
    number: 65,
    question: "Els actes administratius han de ser motivats?",
    answers: [
      { text: "Sempre.", correct: false },
      { text: "Només si són favorables.", correct: false },
      { text: "En determinats casos previstos per la llei.", correct: true },
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