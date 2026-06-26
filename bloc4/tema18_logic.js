const TEST_ID = "tema18"; 
const questions = [
  {
    question: "Quina és la llei bàsica que regula els contractes del sector públic a Espanya?",
    number: 1,
    answers: [
      { text: "Llei 9/2017, de Contractes del Sector Públic.", correct: true },
      { text: "Llei 39/2015, de procediment administratiu.", correct: false },
      { text: "Llei 40/2015, de règim jurídic del sector públic.", correct: false },
      { text: "Reial Decret Legislatiu 2/2004, de finances locals.", correct: false }
    ]
  },
  {
    question: "Quin és el criteri principal per adjudicar un contracte segons la LCSP?",
    number: 2,
    answers: [
      { text: "La millor relació qualitat-preu.", correct: true },
      { text: "El preu més baix, sempre i en tot cas.", correct: false },
      { text: "La conveniència del funcionari responsable.", correct: false },
      { text: "La proximitat geogràfica de l'empresa.", correct: false }
    ]
  },
  {
    question: "Quins són els tipus de contractes regulats a la LCSP?",
    number: 3,
    answers: [
      { text: "Obres, concessió d'obres, concessió de serveis, subministrament i serveis.", correct: true },
      { text: "Només obres i serveis.", correct: false },
      { text: "Compravenda, arrendament i permuta.", correct: false },
      { text: "Contractes laborals i mercantils.", correct: false }
    ]
  },
  {
    question: "Què és un contracte de subministrament?",
    number: 4,
    answers: [
      { text: "El que té per objecte l'adquisició o arrendament de productes o béns mobles.", correct: true },
      { text: "El que té per objecte la construcció d'un pont.", correct: false },
      { text: "El que té per objecte activitats intel·lectuals.", correct: false },
      { text: "El que té per objecte la gestió d'un servei públic.", correct: false }
    ]
  },
  {
    question: "Quina característica defineix un contracte menor de subministrament?",
    number: 5,
    answers: [
      { text: "Valor estimat inferior a 15.000 euros.", correct: true },
      { text: "Valor estimat inferior a 40.000 euros.", correct: false },
      { text: "Durada superior a 5 anys.", correct: false },
      { text: "Contracte signat per la presidència.", correct: false }
    ]
  },
  {
    question: "Quina és la durada màxima d'un contracte menor d'obres?",
    number: 6,
    answers: [
      { text: "Un any.", correct: true },
      { text: "Tres anys.", correct: false },
      { text: "Cinc anys.", correct: false },
      { text: "No té límit de durada.", correct: false }
    ]
  },
  {
    question: "Què implica la contractació electrònica obligatòria?",
    number: 7,
    answers: [
      { text: "La utilització de mitjans electrònics en tot el procés de licitació.", correct: true },
      { text: "Que els contractes s'han de pagar en criptomoneda.", correct: false },
      { text: "Que només es poden fer contractes informàtics.", correct: false },
      { text: "Que s'ha d'enviar el contracte per fax.", correct: false }
    ]
  },
  {
    question: "Què és el perfil del contractant?",
    number: 8,
    answers: [
      { text: "El mitjà de difusió obligatòria de l'activitat contractual.", correct: true },
      { text: "La fitxa personal del responsable de l'empresa.", correct: false },
      { text: "El document de l'adjudicatari.", correct: false },
      { text: "L'eina per pagar les factures.", correct: false }
    ]
  },
  {
    question: "Quin és el procediment ordinari d'adjudicació?",
    number: 9,
    answers: [
      { text: "Obert.", correct: true },
      { text: "Negociat sense publicitat.", correct: false },
      { text: "Diàleg competitiu.", correct: false },
      { text: "Contractació directa.", correct: false }
    ]
  },
  {
    question: "Què és un contracte de serveis?",
    number: 10,
    answers: [
      { text: "El que té per objecte prestacions de fer consistents en el desenvolupament d'una activitat.", correct: true },
      { text: "El que té per objecte la compra de maquinària.", correct: false },
      { text: "El que té per objecte la construcció d'una carretera.", correct: false },
      { text: "El que té per objecte l'adquisició d'un solar.", correct: false }
    ]
  },
  {
    question: "Com es denomina el document on es detallen les condicions jurídiques del contracte?",
    number: 11,
    answers: [
      { text: "Ple de clàusules administratives particulars.", correct: true },
      { text: "Ple de prescripcions tècniques.", correct: false },
      { text: "Informe de necessitat.", correct: false },
      { text: "Projecte tècnic.", correct: false }
    ]
  },
  {
    question: "Qui aprova l'expedient de contractació?",
    number: 12,
    answers: [
      { text: "L'òrgan de contractació.", correct: true },
      { text: "El tribunal de comptes.", correct: false },
      { text: "L'empresa adjudicatària.", correct: false },
      { text: "El cap de seguretat.", correct: false }
    ]
  },
  {
    question: "Quina garantia s'exigeix habitualment per assegurar el compliment del contracte?",
    number: 13,
    answers: [
      { text: "Garantia definitiva.", correct: true },
      { text: "Garantia d'imatge.", correct: false },
      { text: "Garantia de descompte.", correct: false },
      { text: "Garantia d'assistència.", correct: false }
    ]
  },
  {
    question: "Què és la licitació electrònica?",
    number: 14,
    answers: [
      { text: "La presentació d'ofertes per mitjans digitals.", correct: true },
      { text: "Un sistema de pagament amb targeta.", correct: false },
      { text: "La impressió digital de documents.", correct: false },
      { text: "Una licitació que es fa per telèfon.", correct: false }
    ]
  },
  {
    question: "Què és el Registre Públic de Contractes?",
    number: 15,
    answers: [
      { text: "El registre on es comuniquen els contractes celebrats pel sector públic.", correct: true },
      { text: "L'arxiu privat de l'empresa adjudicatària.", correct: false },
      { text: "El catàleg de productes de la Generalitat.", correct: false },
      { text: "El registre de funcionaris contractadors.", correct: false }
    ]
  },
  {
    question: "Quina és la funció de la Mesa de Contractació?",
    number: 16,
    answers: [
      { text: "Valorar les ofertes presentades pels licitadors.", correct: true },
      { text: "Comprar el material de les oficines.", correct: false },
      { text: "Pagar els salaris dels treballadors públics.", correct: false },
      { text: "Redactar les lleis del Parlament.", correct: false }
    ]
  },
  {
    question: "Què és una oferta anormalment baixa?",
    number: 17,
    answers: [
      { text: "Una oferta que no permet complir les obligacions del contracte.", correct: true },
      { text: "L'oferta més guanyadora per ser barata.", correct: false },
      { text: "L'oferta presentada fora de termini.", correct: false },
      { text: "L'oferta de l'empresa més gran del mercat.", correct: false }
    ]
  },
  {
    question: "En quin tipus de contracte és obligatòria la classificació de l'empresa?",
    number: 18,
    answers: [
      { text: "Contractes d'obres de gran import.", correct: true },
      { text: "Contractes menors de serveis.", correct: false },
      { text: "Contractes de subministrament de paper.", correct: false },
      { text: "Contractes d'assistència informàtica.", correct: false }
    ]
  },
  {
    question: "Quina és la finalitat de l'informe de necessitat?",
    number: 19,
    answers: [
      { text: "Justificar la conveniència del contracte.", correct: true },
      { text: "Establir el preu màxim que vull pagar.", correct: false },
      { text: "Identificar qui serà l'adjudicatari.", correct: false },
      { text: "Publicar el contracte en el BOE.", correct: false }
    ]
  },
  {
    question: "Què és la subrogació en els contractes?",
    number: 20,
    answers: [
      { text: "L'obligació de l'adjudicatari d'assumir part del personal de l'anterior.", correct: true },
      { text: "La possibilitat de canviar el contracte.", correct: false },
      { text: "La submissió al tribunal administratiu.", correct: false },
      { text: "La venda del contracte a un tercer.", correct: false }
    ]
  },
  {
    question: "Què és una oferta variant?",
    number: 21,
    answers: [
      { text: "Una alternativa a l'oferta base plantejada per l'empresa.", correct: true },
      { text: "Una oferta feta pel mateix govern.", correct: false },
      { text: "Un tipus d'impost del contracte.", correct: false },
      { text: "Una correcció de l'oferta presentada.", correct: false }
    ]
  },
  {
    question: "Com es diu el document on es detallen les característiques tècniques?",
    number: 22,
    answers: [
      { text: "Ple de prescripcions tècniques.", correct: true },
      { text: "Ple administratiu.", correct: false },
      { text: "Informe de solvència.", correct: false },
      { text: "Expedient de contractació.", correct: false }
    ]
  },
  {
    question: "Quina és la funció de la publicitat en la contractació?",
    number: 23,
    answers: [
      { text: "Garantir la concurrència i transparència.", correct: true },
      { text: "Fer propaganda del Govern.", correct: false },
      { text: "Complir amb la normativa de premsa.", correct: false },
      { text: "Avisar a l'empresa preferida.", correct: false }
    ]
  },
  {
    question: "Quina és la prohibició de contractar més habitual?",
    number: 24,
    answers: [
      { text: "Haver estat condemnat per delictes contra l'Administració.", correct: true },
      { text: "Tenir molts empleats.", correct: false },
      { text: "Ser una empresa de fora de la UE.", correct: false },
      { text: "No tenir pàgina web.", correct: false }
    ]
  },
  {
    question: "Com s'anomena la resolució que tanca el procediment d'adjudicació?",
    number: 25,
    answers: [
      { text: "Resolució d'adjudicació.", correct: true },
      { text: "Resolució de desestimació.", correct: false },
      { text: "Ordre de compra.", correct: false },
      { text: "Decret d'inversió.", correct: false }
    ]
  },
  {
    question: "Què és la solvència de l'empresa?",
    number: 26,
    answers: [
      { text: "La capacitat econòmica i tècnica per executar el contracte.", correct: true },
      { text: "La quantitat de deutes que té l'empresa.", correct: false },
      { text: "La fama que té l'empresa a les xarxes.", correct: false },
      { text: "L'edat de l'empresari.", correct: false }
    ]
  },
  {
    question: "Què és una licitació?",
    number: 27,
    answers: [
      { text: "El procés per seleccionar un contractista.", correct: true },
      { text: "El pagament d'una factura.", correct: false },
      { text: "La compra directa d'un bé.", correct: false },
      { text: "L'auditoria d'un contracte.", correct: false }
    ]
  },
  {
    question: "Què és un contracte d'obra?",
    number: 28,
    answers: [
      { text: "El que té per objecte la realització de treballs de construcció o enginyeria.", correct: true },
      { text: "El que té per objecte la compra de llibres.", correct: false },
      { text: "El que té per objecte netejar oficines.", correct: false },
      { text: "El que té per objecte el transport de mercaderies.", correct: false }
    ]
  },
  {
    question: "On es publiquen els contractes d'import rellevant a la UE?",
    number: 29,
    answers: [
      { text: "Diari Oficial de la Unió Europea (DOUE).", correct: true },
      { text: "DOGC.", correct: false },
      { text: "BOE.", correct: false },
      { text: "Web municipal.", correct: false }
    ]
  },
  {
    question: "Qui pot ser contractista?",
    number: 30,
    answers: [
      { text: "Persones físiques o jurídiques amb capacitat d'obrar.", correct: true },
      { text: "Només les multinacionals.", correct: false },
      { text: "Només els funcionaris de carrera.", correct: false },
      { text: "Les empreses que no tenen deutes amb l'Estat.", correct: false }
    ]
  },
  {
    question: "Què és el 'valor estimat' d'un contracte?",
    number: 31,
    answers: [
      { text: "L'import total de la despesa sense IVA.", correct: true },
      { text: "El preu de venda al públic.", correct: false },
      { text: "El pressupost total amb els beneficis.", correct: false },
      { text: "El cost dels treballadors.", correct: false }
    ]
  },
  {
    question: "Què són les clàusules socials en la contractació?",
    number: 32,
    answers: [
      { text: "Criteris d'adjudicació relacionats amb el medi ambient o la inserció social.", correct: true },
      { text: "Descomptes per a empleats públics.", correct: false },
      { text: "Normes sobre la jornada laboral dels funcionaris.", correct: false },
      { text: "Punts extra per a empreses que fan festes.", correct: false }
    ]
  },
  {
    question: "Com s'anomena la revisió de preus en un contracte?",
    number: 33,
    answers: [
      { text: "Revisió de preus.", correct: true },
      { text: "Modificació de contracte.", correct: false },
      { text: "Actualització de despeses.", correct: false },
      { text: "Pròrroga de contracte.", correct: false }
    ]
  },
  {
    question: "Què és la recepció del contracte?",
    number: 34,
    answers: [
      { text: "L'acte de conformitat de l'Administració sobre l'objecte del contracte.", correct: true },
      { text: "L'acte de signatura del contracte.", correct: false },
      { text: "El pagament de la factura.", correct: false },
      { text: "L'inici de la licitació.", correct: false }
    ]
  },
  {
    question: "Quina és la finalitat del diàleg competitiu?",
    number: 35,
    answers: [
      { text: "Buscar solucions per a projectes complexos.", correct: true },
      { text: "Comprar paper d'oficina.", correct: false },
      { text: "Fer una subhasta de béns públics.", correct: false },
      { text: "Contractar personal directament.", correct: false }
    ]
  },
  {
    question: "Com es formalitzen els contractes del sector públic?",
    number: 36,
    answers: [
      { text: "En document administratiu o escriptura pública.", correct: true },
      { text: "Només verbalment.", correct: false },
      { text: "Mitjançant un correu electrònic.", correct: false },
      { text: "Sempre davant de notari.", correct: false }
    ]
  },
  {
    question: "Què passa si una empresa té prohibit contractar?",
    number: 37,
    answers: [
      { text: "No pot ser adjudicatària de cap contracte públic.", correct: true },
      { text: "Pot contractar però amb un preu més baix.", correct: false },
      { text: "Pot contractar si canvia de nom.", correct: false },
      { text: "No passa res, pot contractar.", correct: false }
    ]
  },
  {
    question: "La classificació de l'empresa acredita:",
    number: 38,
    answers: [
      { text: "La solvència tècnica i econòmica per a determinats contractes.", correct: true },
      { text: "Que l'empresa paga impostos.", correct: false },
      { text: "El tamany de l'oficina.", correct: false },
      { text: "L'edat de l'empresa.", correct: false }
    ]
  },
  {
    question: "Què és un contracte de serveis intel·lectuals?",
    number: 39,
    answers: [
      { text: "Contractes d'arquitectura, enginyeria, consultoria.", correct: true },
      { text: "Contractes de neteja.", correct: false },
      { text: "Contractes de subministrament de mobiliari.", correct: false },
      { text: "Contractes de manteniment d'ordinadors.", correct: false }
    ]
  },
  {
    question: "Què és la Mesa de Contractació?",
    number: 40,
    answers: [
      { text: "Òrgan col·legiat amb funcions d'assistència en el procediment.", correct: true },
      { text: "El despatx del cap de contractació.", correct: false },
      { text: "El mobiliari on es signen contractes.", correct: false },
      { text: "Una taula rodona per parlar de contractes.", correct: false }
    ]
  },
  {
    question: "La formalització d'un contracte s'ha de fer:",
    number: 41,
    answers: [
      { text: "Dins dels terminis fixats per la llei.", correct: true },
      { text: "Quan vulgui l'adjudicatari.", correct: false },
      { text: "Sense cap termini fixat.", correct: false },
      { text: "Mai, no cal formalitzar-los.", correct: false }
    ]
  },
  {
    question: "Què és el preu del contracte?",
    number: 42,
    answers: [
      { text: "L'import que l'Administració paga pel contracte.", correct: true },
      { text: "Els impostos que paga el ciutadà.", correct: false },
      { text: "El sou dels funcionaris.", correct: false },
      { text: "El cost dels materials més els beneficis.", correct: false }
    ]
  },
  {
    question: "Com s'anomena l'empresa que guanya un contracte?",
    number: 43,
    answers: [
      { text: "Adjudicatari.", correct: true },
      { text: "Licitador.", correct: false },
      { text: "Subcontractista.", correct: false },
      { text: "Promotor.", correct: false }
    ]
  },
  {
    question: "Què és un contracte mixt?",
    number: 44,
    answers: [
      { text: "El que conté prestacions de diferents tipus.", correct: true },
      { text: "El que es fa entre un privat i el govern.", correct: false },
      { text: "El que es paga amb diners i espècie.", correct: false },
      { text: "El contracte que es fa en dos idiomes.", correct: false }
    ]
  },
  {
    question: "Quina és la finalitat del recurs especial en matèria de contractació?",
    number: 45,
    answers: [
      { text: "Impugnar determinades decisions del procés de contractació.", correct: true },
      { text: "Queixar-se de la pluja.", correct: false },
      { text: "Demandar una millora del sou.", correct: false },
      { text: "Renunciar al contracte.", correct: false }
    ]
  },
  {
    question: "Què passa si es declara desert un procediment?",
    number: 46,
    answers: [
      { text: "Que no s'han presentat ofertes vàlides.", correct: true },
      { text: "Que l'empresa guanyadora ha renunciat.", correct: false },
      { text: "Que s'han presentat massa ofertes.", correct: false },
      { text: "Que el contracte era massa barat.", correct: false }
    ]
  },
  {
    question: "Com es garanteix el principi de transparència?",
    number: 47,
    answers: [
      { text: "Amb la publicitat de totes les fases.", correct: true },
      { text: "No dient a ningú el que es fa.", correct: false },
      { text: "Tancant les portes de les oficines.", correct: false },
      { text: "No publicant les adjudicacions.", correct: false }
    ]
  },
  {
    question: "Què és una subhasta electrònica?",
    number: 48,
    answers: [
      { text: "Sistema de licitació basat en una sèrie d'iteracions de preus.", correct: true },
      { text: "Una venda de mobles vells per Internet.", correct: false },
      { text: "El pagament de la factura electrònicament.", correct: false },
      { text: "L'enviament de correus als licitadors.", correct: false }
    ]
  },
  {
    question: "Què és un contracte exclusiu?",
    number: 49,
    answers: [
      { text: "El que només es pot fer amb un proveïdor determinat.", correct: true },
      { text: "Un contracte només per a directius.", correct: false },
      { text: "Un contracte que dura tota la vida.", correct: false },
      { text: "El contracte que només es firma en català.", correct: false }
    ]
  },
  {
    question: "Què són les prescripcions tècniques?",
    number: 50,
    answers: [
      { text: "Característiques definides per a l'objecte del contracte.", correct: true },
      { text: "El preu màxim que es pot pagar.", correct: false },
      { text: "El nom del funcionari responsable.", correct: false },
      { text: "Les regles de joc de l'empresa.", correct: false }
    ]
  },
  {
    question: "Qui té la competència per adjudicar un contracte?",
    number: 51,
    answers: [
      { text: "L'òrgan de contractació.", correct: true },
      { text: "El secretari de la Generalitat.", correct: false },
      { text: "L'empresa guanyadora.", correct: false },
      { text: "El ciutadà que sol·licita el servei.", correct: false }
    ]
  },
  {
    question: "En quin cas no és obligatòria la Mesa de Contractació?",
    number: 52,
    answers: [
      { text: "En contractes menors.", correct: true },
      { text: "En obres majors.", correct: false },
      { text: "En subministraments complexos.", correct: false },
      { text: "En concessió de serveis.", correct: false }
    ]
  },
  {
    question: "Com es poden presentar les ofertes electrònicament?",
    number: 53,
    answers: [
      { text: "Mitjançant plataformes de licitació electrònica.", correct: true },
      { text: "Per WhatsApp.", correct: false },
      { text: "Per correu postal ordinari.", correct: false },
      { text: "Entregant un pendrive en mà.", correct: false }
    ]
  },
  {
    question: "Quina funció té la Plataforma de Serveis de Contractació Pública (PSCP)?",
    number: 54,
    answers: [
      { text: "Difusió de l'activitat contractual a Catalunya.", correct: true },
      { text: "Pagar els sous dels funcionaris.", correct: false },
      { text: "Redactar sentències judicials.", correct: false },
      { text: "Emetre certificats de naixement.", correct: false }
    ]
  },
  {
    question: "Què és un contracte de concessió de serveis?",
    number: 55,
    answers: [
      { text: "Gestió d'un servei assumint el risc operacional.", correct: true },
      { text: "Compra de roba per a la policia.", correct: false },
      { text: "Construcció d'un edifici.", correct: false },
      { text: "Contracte d'assistència tècnica.", correct: false }
    ]
  },
  {
    question: "Què s'entén per concurrència?",
    number: 56,
    answers: [
      { text: "Que qualsevol empresa capacitada pugui optar al contracte.", correct: true },
      { text: "Que només es puguin presentar 2 empreses.", correct: false },
      { text: "Que el contracte es fa per una subhasta ràpida.", correct: false },
      { text: "Que l'Administració tria a qui li agrada.", correct: false }
    ]
  },
  {
    question: "Què són les pròrrogues d'un contracte?",
    number: 57,
    answers: [
      { text: "Allargament de la durada del contracte original.", correct: true },
      { text: "Augment del preu per sorpresa.", correct: false },
      { text: "Cessió a una altra empresa.", correct: false },
      { text: "Canvi d'objecte del contracte.", correct: false }
    ]
  },
  {
    question: "Els contractes menors es poden fraccionar?",
    number: 58,
    answers: [
      { text: "No, està prohibit per evitar l'elusió de normes de publicitat.", correct: true },
      { text: "Sí, sempre que es vulgui.", correct: false },
      { text: "Sí, si ho decideix el cap de departament.", correct: false },
      { text: "Sí, cada vegada que s'acaba el pressupost.", correct: false }
    ]
  },
  {
    question: "Què és la solvència econòmica d'una empresa?",
    number: 59,
    answers: [
      { text: "L'acreditació de fons suficients per executar el contracte.", correct: true },
      { text: "La quantitat de cotxes que té.", correct: false },
      { text: "El nombre d'anys que porta operant.", correct: false },
      { text: "El volum d'impostos que paga al mes.", correct: false }
    ]
  },
  {
    question: "Quina és la forma normal d'extinció d'un contracte?",
    number: 60,
    answers: [
      { text: "El compliment de les prestacions per ambdues parts.", correct: true },
      { text: "La mort del contractista.", correct: false },
      { text: "La renúncia del govern.", correct: false },
      { text: "La finalització del pressupost anual.", correct: false }
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