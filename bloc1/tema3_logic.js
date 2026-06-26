const TEST_ID = "tema3"; 
const questions = [
  {
    question: "Segons la Llei 19/2014, quin és l'objecte principal de la norma?",
    number: 1,
    answers: [
      { text: "Regular el procediment administratiu sancionador.", correct: false },
      { text: "Regular i garantir la transparència de l'activitat pública.", correct: true },
      { text: "Establir les competències del Govern.", correct: false },
      { text: "Fixar el règim de retribucions dels funcionaris.", correct: false }
    ]
  },
  {
    question: "Com es coneix l'obligació de publicar informació sense que ningú l'hagi de demanar?",
    number: 2,
    answers: [
      { text: "Publicitat activa.", correct: true },
      { text: "Accés a la informació pública.", correct: false },
      { text: "Dret de petició.", correct: false },
      { text: "Govern obert.", correct: false }
    ]
  },
  {
    question: "Quin és el termini general per resoldre una sol·licitud d'accés a la informació pública?",
    number: 3,
    answers: [
      { text: "15 dies hàbils.", correct: false },
      { text: "1 mes.", correct: true },
      { text: "2 mesos.", correct: false },
      { text: "20 dies naturals.", correct: false }
    ]
  },
  {
    question: "Què és la 'informació pública' segons la Llei 19/2014?",
    number: 4,
    answers: [
      { text: "Només la informació de les xarxes socials.", correct: false },
      { text: "La informació elaborada o adquirida per l'Administració en l'exercici de les seves funcions.", correct: true },
      { text: "Tota informació que es trobi a Internet.", correct: false },
      { text: "Només les dades personals dels càrrecs públics.", correct: false }
    ]
  },
  {
    question: "Qui té dret a accedir a la informació pública?",
    number: 5,
    answers: [
      { text: "Només els ciutadans amb nacionalitat espanyola.", correct: false },
      { text: "Totes les persones, sense necessitat de motivar la sol·licitud.", correct: true },
      { text: "Només les persones interessades en un procediment.", correct: false },
      { text: "Només els periodistes acreditats.", correct: false }
    ]
  },
  {
    question: "El portal de transparència de la Generalitat és:",
    number: 6,
    answers: [
      { text: "Un instrument de publicitat activa.", correct: true },
      { text: "Un arxiu privat del Govern.", correct: false },
      { text: "Una xarxa social d'ús intern.", correct: false },
      { text: "Opcional per a l'Administració.", correct: false }
    ]
  },
  {
    question: "Quin principi regeix l'accés a la informació pública?",
    number: 7,
    answers: [
      { text: "El principi de restricció màxima.", correct: false },
      { text: "El principi de publicitat i el dret d'accés.", correct: true },
      { text: "El principi de confidencialitat absoluta.", correct: false },
      { text: "El principi de jerarquia administrativa.", correct: false }
    ]
  },
  {
    question: "Què s'entén per 'Bon Govern'?",
    number: 8,
    answers: [
      { text: "L'exercici del poder basat en l'ètica i la integritat pública.", correct: true },
      { text: "La capacitat de guanyar les eleccions.", correct: false },
      { text: "La gestió eficaç de les empreses privades.", correct: false },
      { text: "La jerarquia dels càrrecs polítics.", correct: false }
    ]
  },
  {
    question: "Quina és una causa de limitació o denegació de l'accés a la informació pública?",
    number: 9,
    answers: [
      { text: "Que el sol·licitant no sigui funcionari.", correct: false },
      { text: "La protecció de dades de caràcter personal.", correct: true },
      { text: "Que la informació sigui molt extensa.", correct: false },
      { text: "Que la informació estigui en català.", correct: false }
    ]
  },
  {
    question: "Què vol dir 'Govern Obert'?",
    number: 10,
    answers: [
      { text: "Un govern que obre les seves oficines fins tard.", correct: false },
      { text: "El model de gestió basat en transparència, participació i col·laboració.", correct: true },
      { text: "El govern de coalició.", correct: false },
      { text: "La digitalització de l'administració.", correct: false }
    ]
  },
  {
    question: "Quina institució supervisa el compliment de la transparència a Catalunya?",
    number: 11,
    answers: [
      { text: "El Síndic de Greuges.", correct: false },
      { text: "La Comissió de Garantia del Dret d'Accés a la Informació Pública (GAIP).", correct: true },
      { text: "El Departament d'Economia.", correct: false },
      { text: "El Ministeri de Justícia.", correct: false }
    ]
  },
  {
    question: "La 'participació ciutadana' dins del govern obert és:",
    number: 12,
    answers: [
      { text: "Només votar a les eleccions.", correct: false },
      { text: "El conjunt d'instruments per intervenir en l'acció pública.", correct: true },
      { text: "La obligació d'assistir a actes oficials.", correct: false },
      { text: "El dret a treballar a la Generalitat.", correct: false }
    ]
  },
  {
    question: "Què són les 'dades obertes' (Open Data)?",
    number: 13,
    answers: [
      { text: "Dades de pagament.", correct: false },
      { text: "Dades públiques en format reutilitzable per tothom.", correct: true },
      { text: "Dades secretes.", correct: false },
      { text: "Dades personals protegides.", correct: false }
    ]
  },
  {
    question: "El Codi de Conducta dels alts càrrecs forma part de:",
    number: 14,
    answers: [
      { text: "La Llei de transparència (Bon Govern).", correct: true },
      { text: "La Llei d'Estrangeria.", correct: false },
      { text: "La Llei d'Educació.", correct: false },
      { text: "El Reglament del Parlament.", correct: false }
    ]
  },
  {
    question: "L'Administració ha de facilitar informació sobre les seves retribucions?",
    number: 15,
    answers: [
      { text: "No, és informació privada.", correct: false },
      { text: "Sí, és informació objecte de publicitat activa.", correct: true },
      { text: "Només si es demana per escrit.", correct: false },
      { text: "Només la dels alts càrrecs, no la resta.", correct: false }
    ]
  },
  {
    question: "Què és la reutilització de la informació pública?",
    number: 16,
    answers: [
      { text: "L'ús de la informació per finalitats diferents de les que l'administració tenia inicialment.", correct: true },
      { text: "L'obligació de copiar documents oficials.", correct: false },
      { text: "La destrucció de documents antics.", correct: false },
      { text: "La impressió de documents públics.", correct: false }
    ]
  },
  {
    question: "Com es pot presentar una sol·licitud d'accés a la informació?",
    number: 17,
    answers: [
      { text: "Només presencialment.", correct: false },
      { text: "Per qualsevol mitjà, incloent-hi els electrònics.", correct: true },
      { text: "Només mitjançant certificat digital.", correct: false },
      { text: "Només a través del Síndic de Greuges.", correct: false }
    ]
  },
  {
    question: "Quina és la funció de l'ètica pública en el bon govern?",
    number: 18,
    answers: [
      { text: "Guiar l'actuació dels servidors públics cap a l'interès general.", correct: true },
      { text: "Establir les vacances dels empleats.", correct: false },
      { text: "Reduir el nombre de funcionaris.", correct: false },
      { text: "Promocionar els polítics en campanya.", correct: false }
    ]
  },
  {
    question: "La informació sobre els contractes públics ha de ser pública?",
    number: 19,
    answers: [
      { text: "No, és confidencial entre l'administració i l'empresa.", correct: false },
      { text: "Sí, és una obligació de transparència.", correct: true },
      { text: "Només si l'import supera un milió d'euros.", correct: false },
      { text: "Mai, per no perjudicar el mercat.", correct: false }
    ]
  },
  {
    question: "El silenci administratiu en les sol·licituds d'accés a la informació és:",
    number: 20,
    answers: [
      { text: "Desestimatori.", correct: true },
      { text: "Estimatori.", correct: false },
      { text: "No existeix el silenci.", correct: false },
      { text: "Caducitat.", correct: false }
    ]
  },
  {
    question: "Què és un conflicte d'interessos?",
    number: 21,
    answers: [
      { text: "Quan el propi interès de l'empleat públic influeix en l'exercici de les seves funcions.", correct: true },
      { text: "Una discussió entre dos funcionaris.", correct: false },
      { text: "Una queixa d'un ciutadà sobre un servei.", correct: false },
      { text: "Quan un partit no està d'acord amb una llei.", correct: false }
    ]
  },
  {
    question: "El dret d'accés pot ser denegat si la informació està en procés d'elaboració?",
    number: 22,
    answers: [
      { text: "Sí, si la difusió causa un perjudici al procés.", correct: true },
      { text: "Mai, la informació ha de ser pública sempre.", correct: false },
      { text: "Només si ho diu un jutge.", correct: false },
      { text: "Sí, però només a Catalunya.", correct: false }
    ]
  },
  {
    question: "La 'Carta de serveis' és:",
    number: 23,
    answers: [
      { text: "El document que recull els compromisos de qualitat d'un servei públic.", correct: true },
      { text: "La llista de tots els treballadors.", correct: false },
      { text: "El contracte laboral d'un empleat.", correct: false },
      { text: "La llei de pressupostos.", correct: false }
    ]
  },
  {
    question: "El procediment per presentar queixes i suggeriments:",
    number: 24,
    answers: [
      { text: "Està integrat en les polítiques de qualitat i govern obert.", correct: true },
      { text: "No existeix.", correct: false },
      { text: "És només per a problemes greus.", correct: false },
      { text: "És competència del Parlament.", correct: false }
    ]
  },
  {
    question: "Quina característica ha de tenir la informació publicada segons la transparència?",
    number: 25,
    answers: [
      { text: "Ha de ser clara, estructurada i comprensible.", correct: true },
      { text: "Ha de ser molt tècnica perquè ningú l'entengui.", correct: false },
      { text: "Ha d'estar impresa en paper obligatòriament.", correct: false },
      { text: "Només ha d'estar en castellà.", correct: false }
    ]
  },
  {
    question: "El dret d'accés a la informació pública és:",
    number: 26,
    answers: [
      { text: "Un dret fonamental a Catalunya.", correct: true },
      { text: "Un privilegi de l'administració.", correct: false },
      { text: "Una opció discrecional del cap de servei.", correct: false },
      { text: "Un servei de pagament.", correct: false }
    ]
  },
  {
    question: "Què és la 'rendició de comptes'?",
    number: 27,
    answers: [
      { text: "Explicar a la ciutadania les accions dutes a terme i l'ús dels fons públics.", correct: true },
      { text: "Pagar els deutes a les entitats bancàries.", correct: false },
      { text: "Fer un balanç de l'empresa privada.", correct: false },
      { text: "Auditar la comptabilitat interna del Govern.", correct: false }
    ]
  },
  {
    question: "Qui ha d'aprovar el Codi de Conducta dels alts càrrecs?",
    number: 28,
    answers: [
      { text: "El Govern.", correct: true },
      { text: "El Síndic de Greuges.", correct: false },
      { text: "Els propis càrrecs.", correct: false },
      { text: "Els sindicats.", correct: false }
    ]
  },
  {
    question: "La GAIP és l'organisme que:",
    number: 29,
    answers: [
      { text: "Resol les reclamacions sobre dret d'accés a la informació.", correct: true },
      { text: "Elegeix el President de la Generalitat.", correct: false },
      { text: "Gestiona les llicències d'obres.", correct: false },
      { text: "Paga les pensions.", correct: false }
    ]
  },
  {
    question: "La transparència en l'administració pública serveix per:",
    number: 30,
    answers: [
      { text: "Millorar la confiança ciutadana i prevenir la corrupció.", correct: true },
      { text: "Controlar la vida dels ciutadans.", correct: false },
      { text: "Fomentar el control dels funcionaris.", correct: false },
      { text: "Augmentar la burocràcia.", correct: false }
    ]
  },
  {
    question: "Els subjectes obligats per la Llei 19/2014 inclouen:",
    number: 31,
    answers: [
      { text: "Totes les administracions públiques catalanes.", correct: true },
      { text: "Només les multinacionals.", correct: false },
      { text: "Cap entitat privada.", correct: false },
      { text: "Només l'administració central.", correct: false }
    ]
  },
  {
    question: "Com s'ha de notificar la denegació d'una sol·licitud d'accés?",
    number: 32,
    answers: [
      { text: "De forma motivada.", correct: true },
      { text: "De forma oral.", correct: false },
      { text: "No cal notificar-la.", correct: false },
      { text: "Només a través del Diari Oficial.", correct: false }
    ]
  },
  {
    question: "Què es pot fer si ens deneguen l'accés a la informació?",
    number: 33,
    answers: [
      { text: "Presentar una reclamació davant la GAIP.", correct: true },
      { text: "Presentar una denúncia policial.", correct: false },
      { text: "No es pot fer res.", correct: false },
      { text: "Presentar un recurs a la UE.", correct: false }
    ]
  },
  {
    question: "La política de qualitat en els serveis públics es basa en:",
    number: 34,
    answers: [
      { text: "L'orientació a les necessitats de la ciutadania.", correct: true },
      { text: "La reducció de costos per sobre de tot.", correct: false },
      { text: "La gestió centralitzada.", correct: false },
      { text: "La facilitat de fer tràmits per a l'administració.", correct: false }
    ]
  },
  {
    question: "La participació en els assumptes públics és:",
    number: 35,
    answers: [
      { text: "Un dret recollit en l'Estatut i desenvolupat en lleis de transparència.", correct: true },
      { text: "Una obligació legal.", correct: false },
      { text: "Una pèrdua de temps per al govern.", correct: false },
      { text: "Només per a experts.", correct: false }
    ]
  },
  {
    question: "Què és la 'transparència institucional'?",
    number: 36,
    answers: [
      { text: "La publicació de l'estructura, el funcionament i les competències de l'entitat.", correct: true },
      { text: "El control d'horaris dels treballadors.", correct: false },
      { text: "La decoració dels edificis públics.", correct: false },
      { text: "La transparència en el funcionament del sector privat.", correct: false }
    ]
  },
  {
    question: "El règim sancionador en matèria de bon govern es refereix a:",
    number: 37,
    answers: [
      { text: "L'incompliment dels deures pels alts càrrecs.", correct: true },
      { text: "L'incompliment d'un ciutadà en una multa de trànsit.", correct: false },
      { text: "Els delictes penals comuns.", correct: false },
      { text: "Els errors tipogràfics en documents.", correct: false }
    ]
  },
  {
    question: "El dret a la informació inclou la possibilitat de:",
    number: 38,
    answers: [
      { text: "Obtenir còpia dels documents.", correct: true },
      { text: "Canviar els documents originals.", correct: false },
      { text: "Destruir la documentació original.", correct: false },
      { text: "Publicar dades falses.", correct: false }
    ]
  },
  {
    question: "La 'col·laboració ciutadana' dins el govern obert implica:",
    number: 39,
    answers: [
      { text: "La co-creació de polítiques i serveis.", correct: true },
      { text: "L'obligació de treballar per al govern.", correct: false },
      { text: "El pagament d'impostos extres.", correct: false },
      { text: "La col·laboració obligatòria.", correct: false }
    ]
  },
  {
    question: "Els subjectes del bon govern han d'evitar:",
    number: 40,
    answers: [
      { text: "L'ús indegut d'informació privilegiada.", correct: true },
      { text: "L'ús de correu electrònic oficial.", correct: false },
      { text: "La signatura de documents.", correct: false },
      { text: "La reunió amb ciutadans.", correct: false }
    ]
  },
  {
    question: "La qualitat del servei públic es mesura a través de:",
    number: 41,
    answers: [
      { text: "Enquestes de satisfacció i indicadors d'avaluació.", correct: true },
      { text: "El nombre de treballadors.", correct: false },
      { text: "El color del logotip del servei.", correct: false },
      { text: "Les opinions d'experts externs.", correct: false }
    ]
  },
  {
    question: "El principi d'economia en l'ús dels recursos públics és part de:",
    number: 42,
    answers: [
      { text: "El Bon Govern.", correct: true },
      { text: "La llei de caça.", correct: false },
      { text: "La normativa sobre urbanisme.", correct: false },
      { text: "La llei de protecció d'animals.", correct: false }
    ]
  },
  {
    question: "Què és la 'informació privilegiada'?",
    number: 43,
    answers: [
      { text: "Informació a la qual té accés un càrrec públic per raó del seu càrrec, no accessible al públic general.", correct: true },
      { text: "La informació publicada al diari oficial.", correct: false },
      { text: "La informació que es dóna a la premsa.", correct: false },
      { text: "La informació que es troba a la Wikipedia.", correct: false }
    ]
  },
  {
    question: "La transparència sobre els sous dels funcionaris és:",
    number: 44,
    answers: [
      { text: "Obligatòria.", correct: true },
      { text: "Opcional.", correct: false },
      { text: "Prohibida.", correct: false },
      { text: "Només per a directors.", correct: false }
    ]
  },
  {
    question: "Quina és la finalitat del 'portal de dades obertes'?",
    number: 45,
    answers: [
      { text: "Afavorir la transparència i la generació d'activitat econòmica.", correct: true },
      { text: "Ocultar la despesa pública.", correct: false },
      { text: "Sancionar els usuaris que descarreguen dades.", correct: false },
      { text: "Dificultar la recerca acadèmica.", correct: false }
    ]
  },
  {
    question: "Un alt càrrec ha d'actuar amb:",
    number: 46,
    answers: [
      { text: "Objectivitat, integritat i imparcialitat.", correct: true },
      { text: "Submissió al partit polític.", correct: false },
      { text: "Buscant l'interès personal.", correct: false },
      { text: "Total discrecionalitat.", correct: false }
    ]
  },
  {
    question: "La Llei 19/2014 estableix que la informació ha de ser:",
    number: 47,
    answers: [
      { text: "Actualitzada.", correct: true },
      { text: "Completa per tothom, incloent dades confidencials.", correct: false },
      { text: "Només en format paper.", correct: false },
      { text: "D'accés restringit.", correct: false }
    ]
  },
  {
    question: "Quina de les següents NO és una eina de govern obert?",
    number: 48,
    answers: [
      { text: "Portal de la transparència.", correct: false },
      { text: "Procés de pressupostos participatius.", correct: false },
      { text: "Reunió secreta de l'equip de govern.", correct: true },
      { text: "Consulta ciutadana digital.", correct: false }
    ]
  },
  {
    question: "Les obligacions de publicitat activa s'han de complir:",
    number: 49,
    answers: [
      { text: "D'ofici (sense petició).", correct: true },
      { text: "Només si el ciutadà paga una taxa.", correct: false },
      { text: "Cada deu anys.", correct: false },
      { text: "Només en període electoral.", correct: false }
    ]
  },
  {
    question: "El dret d'accés a la informació pot ser parcial?",
    number: 50,
    answers: [
      { text: "Sí, es pot facilitar accés a part de la informació protegint les dades personals.", correct: true },
      { text: "No, ha de ser tot o res.", correct: false },
      { text: "No, és una decisió del jutge.", correct: false },
      { text: "Sí, però només a Catalunya.", correct: false }
    ]
  },
  {
    question: "Què és la 'governança'?",
    number: 51,
    answers: [
      { text: "La forma en què es prenen les decisions i la interacció amb els actors socials.", correct: true },
      { text: "El mateix que la governació d'un hotel.", correct: false },
      { text: "El control pressupostari de la Generalitat.", correct: false },
      { text: "La llei de seguretat pública.", correct: false }
    ]
  },
  {
    question: "Els càrrecs públics tenen l'obligació de:",
    number: 52,
    answers: [
      { text: "Declarar les seves activitats i béns.", correct: true },
      { text: "Treballar fora de l'administració mentre tenen el càrrec.", correct: false },
      { text: "Regalar regals a ciutadans.", correct: false },
      { text: "Ocultar la seva renda.", correct: false }
    ]
  },
  {
    question: "L'avaluació de la qualitat dels serveis ha de ser:",
    number: 53,
    answers: [
      { text: "Periòdica i contínua.", correct: true },
      { text: "Només quan hi ha problemes.", correct: false },
      { text: "Un procés únic al final del mandat.", correct: false },
      { text: "Voluntària per part dels empleats.", correct: false }
    ]
  },
  {
    question: "La Llei 19/2014 garanteix el dret a:",
    number: 54,
    answers: [
      { text: "Accedir a la informació pública.", correct: true },
      { text: "Modificar lleis pel teu compte.", correct: false },
      { text: "Elegir els jutges.", correct: false },
      { text: "Treballar de funcionari sense oposicions.", correct: false }
    ]
  },
  {
    question: "La integritat pública es fomenta amb:",
    number: 55,
    answers: [
      { text: "Codis ètics i formació.", correct: true },
      { text: "Augment de salaris dels polítics.", correct: false },
      { text: "Menys control dels càrrecs.", correct: false },
      { text: "Major secretisme.", correct: false }
    ]
  },
  {
    question: "La informació sobre els interessos privats d'un càrrec públic es publica per:",
    number: 56,
    answers: [
      { text: "Prevenir conflictes d'interessos.", correct: true },
      { text: "Molestar el càrrec públic.", correct: false },
      { text: "Fomentar la curiositat ciutadana.", correct: false },
      { text: "No es publica mai.", correct: false }
    ]
  },
  {
    question: "La informació pública ha de ser accessible:",
    number: 57,
    answers: [
      { text: "En formats que permetin la cerca i el processament.", correct: true },
      { text: "Només en format difícil d'obrir.", correct: false },
      { text: "Només per correu postal.", correct: false },
      { text: "Només en biblioteques públiques.", correct: false }
    ]
  },
  {
    question: "L'objectiu final de la transparència és:",
    number: 58,
    answers: [
      { text: "Millorar la qualitat democràtica.", correct: true },
      { text: "Fer més lenta l'administració.", correct: false },
      { text: "Augmentar els impostos.", correct: false },
      { text: "Reduir el nombre de lleis.", correct: false }
    ]
  },
  {
    question: "Qui pot utilitzar el dret d'accés a la informació?",
    number: 59,
    answers: [
      { text: "Qualsevol persona, sense restriccions.", correct: true },
      { text: "Només els majors d'edat.", correct: false },
      { text: "Només els que viuen a Catalunya.", correct: false },
      { text: "Només amb l'autorització d'un advocat.", correct: false }
    ]
  },
  {
    question: "El bon govern és una eina clau per a:",
    number: 60,
    answers: [
      { text: "L'eficiència en la gestió dels serveis públics.", correct: true },
      { text: "L'increment del secretisme estatal.", correct: false },
      { text: "La centralització de competències.", correct: false },
      { text: "La supressió dels drets de la ciutadania.", correct: false }
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