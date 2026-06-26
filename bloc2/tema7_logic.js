const TEST_ID = "tema7"; 
const questions = [
  {
    question: "Segons la Llei 26/2010, quin és un dels principis generals de l'Administració?",
    number: 1,
    answers: [
      { text: "El principi de jerarquia.", correct: true },
      { text: "El principi de màxim benefici.", correct: false },
      { text: "El principi d'autonomia financera il·limitada.", correct: false },
      { text: "El principi de discrecionalitat absoluta.", correct: false }
    ]
  },
  {
    question: "Com es defineix el dret d'accés a la informació pública?",
    number: 2,
    answers: [
      { text: "El dret de les persones a accedir a la informació elaborada o en poder de l'Administració.", correct: true },
      { text: "El dret a consultar només els expedients propis.", correct: false },
      { text: "L'obligació de l'Administració de publicar-ho tot sense excepció.", correct: false },
      { text: "El dret d'accés exclusiu per a funcionaris.", correct: false }
    ]
  },
  {
    question: "El dret de les persones a accedir a la informació pública està limitat per:",
    number: 3,
    answers: [
      { text: "Els límits expressament previstos per la llei (ex: seguretat pública, dades personals).", correct: true },
      { text: "Només per la manca de mitjans tècnics.", correct: false },
      { text: "Per la voluntat discrecional de l'òrgan administratiu.", correct: false },
      { text: "No té cap limitació en un Estat democràtic.", correct: false }
    ]
  },
  {
    question: "Quin és el termini màxim general per resoldre una sol·licitud d'accés a la informació pública?",
    number: 4,
    answers: [
      { text: "Un mes.", correct: true },
      { text: "15 dies.", correct: false },
      { text: "Deu dies hàbils.", correct: false },
      { text: "Dos mesos.", correct: false }
    ]
  },
  {
    question: "La publicitat activa consisteix en:",
    number: 5,
    answers: [
      { text: "La publicació obligatòria i periòdica d'informació rellevant per part de l'Administració.", correct: true },
      { text: "El dret del ciutadà a preguntar a l'Administració.", correct: false },
      { text: "La propaganda institucional en campanyes electorals.", correct: false },
      { text: "La venda de publicacions oficials.", correct: false }
    ]
  },
  {
    question: "L'Administració pública ha d'actuar d'acord amb el principi de:",
    number: 6,
    answers: [
      { text: "Eficàcia i eficiència.", correct: true },
      { text: "Rendibilitat econòmica.", correct: false },
      { text: "Secretisme administratiu.", correct: false },
      { text: "Preferència per determinats interessos privats.", correct: false }
    ]
  },
  {
    question: "Quina és una característica del dret d'accés a la informació?",
    number: 7,
    answers: [
      { text: "No cal motivar la sol·licitud.", correct: true },
      { text: "Cal justificar un interès directe i personal.", correct: false },
      { text: "S'ha de pagar una taxa obligatòria per sol·licitar informació.", correct: false },
      { text: "Només la poden exercir les persones jurídiques.", correct: false }
    ]
  },
  {
    question: "El dret a la informació pública inclou:",
    number: 8,
    answers: [
      { text: "El dret a accedir a documents i arxius.", correct: true },
      { text: "El dret a obtenir una plaça de funcionari sense oposició.", correct: false },
      { text: "El dret a canviar la normativa vigent.", correct: false },
      { text: "El dret a censurar els actes de l'Administració.", correct: false }
    ]
  },
  {
    question: "La denegació de l'accés a la informació ha de ser:",
    number: 9,
    answers: [
      { text: "Motivada i per escrit.", correct: true },
      { text: " Verbal i sense explicacions.", correct: false },
      { text: "Decidida unilateralment pel cap de personal.", correct: false },
      { text: "Automàtica si el document és antic.", correct: false }
    ]
  },
  {
    question: "Segons la Llei 26/2010, les administracions públiques han d'assegurar:",
    number: 10,
    answers: [
      { text: "La qualitat i la millora dels serveis públics.", correct: true },
      { text: "El màxim estalvi pressupostari anul·lant serveis.", correct: false },
      { text: "La informació parcialitzada per evitar confusions.", correct: false },
      { text: "La prioritat en l'atenció a amics i familiars.", correct: false }
    ]
  },
  {
    question: "El principi de bona fe en les relacions ciutadà-Administració implica:",
    number: 11,
    answers: [
      { text: "Confiança legítima.", correct: true },
      { text: "La possibilitat d'enganyar l'Administració.", correct: false },
      { text: "Que l'Administració pot canviar d'opinió sense avís.", correct: false },
      { text: "La formalitat extrema en tots els actes.", correct: false }
    ]
  },
  {
    question: "El dret d'accés pot ser restringit quan la informació conté:",
    number: 12,
    answers: [
      { text: "Dades personals especialment protegides (salut, ideologia).", correct: true },
      { text: "Les dates de les reunions del govern.", correct: false },
      { text: "Els noms dels funcionaris públics.", correct: false },
      { text: "Les adreces de les seus administratives.", correct: false }
    ]
  },
  {
    question: "Quina és una obligació de l'Administració en matèria de transparència?",
    number: 13,
    answers: [
      { text: "Mantenir actualitzat el Portal de Transparència.", correct: true },
      { text: "Limitar l'accés a Internet dels funcionaris.", correct: false },
      { text: "Donar resposta només a qui insisteix.", correct: false },
      { text: "Eliminar documents públics vells.", correct: false }
    ]
  },
  {
    question: "Els serveis públics s'han d'organitzar amb criteris de:",
    number: 14,
    answers: [
      { text: "Proximitat als usuaris.", correct: true },
      { text: "Centralització màxima en la capital.", correct: false },
      { text: "Exclusivitat per a ciutadans amb estudis universitaris.", correct: false },
      { text: "Privatització sistemàtica.", correct: false }
    ]
  },
  {
    question: "Les persones tenen dret a:",
    number: 15,
    answers: [
      { text: "Ser tractades amb respecte i deferència.", correct: true },
      { text: "Exigir una resposta en 24 hores.", correct: false },
      { text: "Canviar l'horari d'atenció de l'oficina.", correct: false },
      { text: "Accedir als expedients dels seus veïns.", correct: false }
    ]
  },
  {
    question: "L'accés a documents en període d'elaboració està limitat per:",
    number: 16,
    answers: [
      { text: "L'estratègia interna de decisió.", correct: true },
      { text: "El dret a la intimitat de l'Administració.", correct: false },
      { text: "La manca de rang reglamentari.", correct: false },
      { text: "És totalment lliure sempre.", correct: false }
    ]
  },
  {
    question: "Què és la Guia de serveis públics?",
    number: 17,
    answers: [
      { text: "Un instrument d'informació sobre els serveis que presta l'Administració.", correct: true },
      { text: "Un llistat de sancions administratives.", correct: false },
      { text: "Un codi d'ètica per a consellers.", correct: false },
      { text: "Una llei de procediment intern.", correct: false }
    ]
  },
  {
    question: "En cas de silenci administratiu en el dret d'accés, què passa?",
    number: 18,
    answers: [
      { text: "Té efectes desestimatoris.", correct: true },
      { text: "Té efectes estimatoris.", correct: false },
      { text: "S'entén que l'Administració està d'acord.", correct: false },
      { text: "S'obre un termini de 6 mesos.", correct: false }
    ]
  },
  {
    question: "La informació pública es pot presentar en quin format?",
    number: 19,
    answers: [
      { text: "En el format en què estigui disponible.", correct: true },
      { text: "Només en format paper i signat.", correct: false },
      { text: "Només en format telemàtic.", correct: false },
      { text: "Només en format d'informe escrit.", correct: false }
    ]
  },
  {
    question: "Quin és un límit al dret d'accés per raons de seguretat?",
    number: 20,
    answers: [
      { text: "La protecció de la seguretat pública i l'ordre públic.", correct: true },
      { text: "La protecció de l'ego de l'Administració.", correct: false },
      { text: "L'estalvi de paper i consumibles.", correct: false },
      { text: "La manca de temps dels funcionaris.", correct: false }
    ]
  },
  {
    question: "L'Administració ha d'actuar segons el principi de:",
    number: 21,
    answers: [
      { text: "Submissió plena a la llei i al dret.", correct: true },
      { text: "Lliure voluntat del governant de torn.", correct: false },
      { text: "Necessitat de recaptar fons.", correct: false },
      { text: "Capacitat de pressió política.", correct: false }
    ]
  },
  {
    question: "L'accés a la informació pot ser parcial si:",
    number: 22,
    answers: [
      { text: "Només una part de la informació està protegida.", correct: true },
      { text: "El funcionari està cansat.", correct: false },
      { text: "La sol·licitud és massa llarga.", correct: false },
      { text: "L'Administració vol estalviar diners.", correct: false }
    ]
  },
  {
    question: "Què és el 'bon govern'?",
    number: 23,
    answers: [
      { text: "Un conjunt d'actuacions basades en l'ètica i l'eficiència.", correct: true },
      { text: "Un programa de subvencions.", correct: false },
      { text: "El nom de la constitució catalana.", correct: false },
      { text: "Un organisme de control judicial.", correct: false }
    ]
  },
  {
    question: "El dret a la informació pública és una eina per fomentar:",
    number: 24,
    answers: [
      { text: "La participació ciutadana.", correct: true },
      { text: "El control de l'oposició per part del govern.", correct: false },
      { text: "La privatització de les empreses.", correct: false },
      { text: "La censura prèvia.", correct: false }
    ]
  },
  {
    question: "Si l'Administració es nega a donar informació, el ciutadà pot:",
    number: 25,
    answers: [
      { text: "Presentar una reclamació davant la GAIP (Comissió de Garantia del Dret d'Accés).", correct: true },
      { text: "Denunciar a la policia per agressió.", correct: false },
      { text: "Iniciar una vaga de fam indefinida.", correct: false },
      { text: "Ocupar el despatx del conseller.", correct: false }
    ]
  },
  {
    question: "La informació pública és aquella que:",
    number: 26,
    answers: [
      { text: "Està en poder de l'Administració com a resultat de la seva activitat.", correct: true },
      { text: "Es troba publicada en mitjans de comunicació privats.", correct: false },
      { text: "Es pot comprar a les llibreries.", correct: false },
      { text: "És privada però l'administració té permís per usar-la.", correct: false }
    ]
  },
  {
    question: "L'Administració ha de facilitar el dret d'accés de manera:",
    number: 27,
    answers: [
      { text: "Senzilla, àgil i gratuïta (excepte còpies).", correct: true },
      { text: "Complexa per garantir la seguretat.", correct: false },
      { text: "Costosa per dissuadir sol·licituds innecessàries.", correct: false },
      { text: "Secreta per evitar crítiques.", correct: false }
    ]
  },
  {
    question: "Què són les cartes de serveis?",
    number: 28,
    answers: [
      { text: "Documents que informen sobre els serveis i compromisos de qualitat.", correct: true },
      { text: "Cartes d'avís de multa.", correct: false },
      { text: "Correspondence entre departaments.", correct: false },
      { text: "Fulls d'inscripció a activitats.", correct: false }
    ]
  },
  {
    question: "La protecció de dades de caràcter personal és:",
    number: 29,
    answers: [
      { text: "Un límit legítim al dret d'accés a la informació.", correct: true },
      { text: "Una recomanació sense valor legal.", correct: false },
      { text: "Una obligació només per a l'empresa privada.", correct: false },
      { text: "Un impediment per al bon funcionament públic.", correct: false }
    ]
  },
  {
    question: "El principi de transparència permet que la ciutadania exerceixi un paper de:",
    number: 30,
    answers: [
      { text: "Control de l'acció pública.", correct: true },
      { text: "Gestió directa dels departaments.", correct: false },
      { text: "Substitució del poder executiu.", correct: false },
      { text: "Imposició de sancions als polítics.", correct: false }
    ]
  },
  {
    question: "La informació pública pot ser sol·licitada:",
    number: 31,
    answers: [
      { text: "Per qualsevol persona, sense necessitat d'estar legitimada.", correct: true },
      { text: "Només per majors de 65 anys.", correct: false },
      { text: "Només per ciutadans amb DNI espanyol.", correct: false },
      { text: "Només per periodistes acreditats.", correct: false }
    ]
  },
  {
    question: "La responsabilitat de l'Administració davant el ciutadà implica:",
    number: 32,
    answers: [
      { text: "L'obligació de reparar els danys causats pel funcionament dels serveis.", correct: true },
      { text: "Que el funcionari pagui de la seva butxaca qualsevol error.", correct: false },
      { text: "Que no es pot equivocar mai.", correct: false },
      { text: "La dimissió automàtica del director.", correct: false }
    ]
  },
  {
    question: "La informació sobre medi ambient es regeix per:",
    number: 33,
    answers: [
      { text: "Normativa específica amb drets d'accés més amplis.", correct: true },
      { text: "Les mateixes normes que qualsevol expedient intern.", correct: false },
      { text: "Lleis secretes.", correct: false },
      { text: "Normes que no permeten l'accés públic.", correct: false }
    ]
  },
  {
    question: "El Portal de Transparència de la Generalitat és un instrument per:",
    number: 34,
    answers: [
      { text: "Garantir la publicitat activa.", correct: true },
      { text: "Recollir impostos telemàticament.", correct: false },
      { text: "Fer publicitat electoral.", correct: false },
      { text: "Bloquejar l'accés a dades públiques.", correct: false }
    ]
  },
  {
    question: "L'Administració ha d'oferir informació pública que sigui:",
    number: 35,
    answers: [
      { text: "Clara, comprensible i estructurada.", correct: true },
      { text: "Tècnica i difícil de llegir.", correct: false },
      { text: "Només en format de resum executiu.", correct: false },
      { text: "Oculta sota petició escrita.", correct: false }
    ]
  },
  {
    question: "Què és la Comissió de Garantia del Dret d'Accés (GAIP)?",
    number: 36,
    answers: [
      { text: "Un òrgan independent que resol reclamacions en matèria d'accés.", correct: true },
      { text: "El departament de policia.", correct: false },
      { text: "L'oficina del President.", correct: false },
      { text: "Un jutjat civil.", correct: false }
    ]
  },
  {
    question: "Les persones tenen dret a obtenir còpies de documents:",
    number: 37,
    answers: [
      { text: "Sí, segons les tarifes vigents.", correct: true },
      { text: "Mai, la llei no ho permet.", correct: false },
      { text: "Només si es van a un jutge.", correct: false },
      { text: "Sempre gratuïtament.", correct: false }
    ]
  },
  {
    question: "La informació que conté dades protegides ha de ser:",
    number: 38,
    answers: [
      { text: "Anonimitzada abans de ser cedida.", correct: true },
      { text: "Publicada directament per ser transparent.", correct: false },
      { text: "Eliminada completament del fitxer.", correct: false },
      { text: "Lliurada sense cap modificació.", correct: false }
    ]
  },
  {
    question: "Quina és la funció de la informació pública?",
    number: 39,
    answers: [
      { text: "Donar transparència a l'actuació pública.", correct: true },
      { text: "Fer negoci mitjançant la venda de dades.", correct: false },
      { text: "Fomentar la rivalitat política.", correct: false },
      { text: "Justificar decisions sense base legal.", correct: false }
    ]
  },
  {
    question: "L'Administració té el deure de col·laborar amb:",
    number: 40,
    answers: [
      { text: "Altres administracions i amb els ciutadans.", correct: true },
      { text: "Només amb l'Estat central.", correct: false },
      { text: "Cap altra administració.", correct: false },
      { text: "Empreses del sector privat a canvi de favors.", correct: false }
    ]
  },
  {
    question: "El dret d'accés a la informació pública es pot exercir per mitjà de:",
    number: 41,
    answers: [
      { text: "Canals telemàtics i presencials.", correct: true },
      { text: "Només per correu postal certificat.", correct: false },
      { text: "Només acudint personalment al Parlament.", correct: false },
      { text: "Exclusivament via fax.", correct: false }
    ]
  },
  {
    question: "El principi d'economia administrativa es refereix a:",
    number: 42,
    answers: [
      { text: "Utilitzar els mitjans necessaris amb la menor despesa possible.", correct: true },
      { text: "Que l'administració no té despeses.", correct: false },
      { text: "Que cal eliminar els salaris dels funcionaris.", correct: false },
      { text: "Que els ciutadans han de pagar tots els serveis.", correct: false }
    ]
  },
  {
    question: "La informació pública sobre contractes ha de incloure:",
    number: 43,
    answers: [
      { text: "L'import, l'objecte i l'adjudicatari.", correct: true },
      { text: "Només la marca del cotxe del directiu.", correct: false },
      { text: "Informació personal dels treballadors de l'empresa.", correct: false },
      { text: "Només la data de signatura.", correct: false }
    ]
  },
  {
    question: "La transparència en l'Administració ha d'abastar:",
    number: 44,
    answers: [
      { text: "L'activitat institucional, administrativa i la gestió econòmica.", correct: true },
      { text: "Només les opinions dels consellers.", correct: false },
      { text: "Només la informació de les eleccions.", correct: false },
      { text: "La vida privada dels alts càrrecs.", correct: false }
    ]
  },
  {
    question: "La informació sobre subvencions és pública?",
    number: 45,
    answers: [
      { text: "Sí, és una obligació de transparència.", correct: true },
      { text: "No, és privada dels beneficiaris.", correct: false },
      { text: "Només si l'import supera el milió d'euros.", correct: false },
      { text: "Només per als periodistes.", correct: false }
    ]
  },
  {
    question: "Les persones amb discapacitat tenen dret a:",
    number: 46,
    answers: [
      { text: "Rebre la informació en formats accessibles.", correct: true },
      { text: "Rebre informació només si ho demanen en paper.", correct: false },
      { text: "No rebre cap mena d'informació.", correct: false },
      { text: "Tenir accés exclusiu a tots els expedients.", correct: false }
    ]
  },
  {
    question: "El principi de lleialtat institucional implica:",
    number: 47,
    answers: [
      { text: "Cooperació entre administracions públiques.", correct: true },
      { text: "Que una administració pot sabotejar a una altra.", correct: false },
      { text: "El pagament de tributs entre institucions.", correct: false },
      { text: "No haver de donar explicacions a ningú.", correct: false }
    ]
  },
  {
    question: "La informació pública inclou també les:",
    number: 48,
    answers: [
      { text: "Memòries i estudis tècnics.", correct: true },
      { text: "Notes personals d'agenda dels funcionaris.", correct: false },
      { text: "Converses telefòniques privades.", correct: false },
      { text: "Contrasenyes dels servidors.", correct: false }
    ]
  },
  {
    question: "Què és la seu electrònica?",
    number: 49,
    answers: [
      { text: "Adreça electrònica a través de la qual l'Administració ofereix informació i tràmits.", correct: true },
      { text: "La sala de reunions del Parlament.", correct: false },
      { text: "Una pàgina web de notícies de premsa.", correct: false },
      { text: "Un centre de dades físic d'accés restringit.", correct: false }
    ]
  },
  {
    question: "El dret d'accés es pot exercir davant:",
    number: 50,
    answers: [
      { text: "Qualsevol organisme de l'Administració pública.", correct: true },
      { text: "Només davant el Tribunal Superior de Justícia.", correct: false },
      { text: "Només davant l'ajuntament on vius.", correct: false },
      { text: "Davant les empreses subministradores de llum.", correct: false }
    ]
  },
  {
    question: "L'Administració té el dret d'accedir a les dades dels ciutadans quan:",
    number: 51,
    answers: [
      { text: "La llei ho permeti per al desenvolupament de les seves funcions.", correct: true },
      { text: "Tingui curiositat sobre el ciutadà.", correct: false },
      { text: "Vulgui controlar el comportament social.", correct: false },
      { text: "Sempre que hi hagi una bona relació entre els dos.", correct: false }
    ]
  },
  {
    question: "La publicitat activa ha de ser:",
    number: 52,
    answers: [
      { text: "Actualitzada.", correct: true },
      { text: "Publicada una sola vegada.", correct: false },
      { text: "Publicada només en el diari oficial.", correct: false },
      { text: "Opcional per a l'Administració.", correct: false }
    ]
  },
  {
    question: "Què és el codi de conducta dels alts càrrecs?",
    number: 53,
    answers: [
      { text: "Normes d'ètica i integritat per a alts càrrecs.", correct: true },
      { text: "Un manual de protocol per a recepcions oficials.", correct: false },
      { text: "Una llei de vestimenta.", correct: false },
      { text: "La normativa de seguretat laboral.", correct: false }
    ]
  },
  {
    question: "La protecció de dades té com a objectiu garantir:",
    number: 54,
    answers: [
      { text: "La intimitat de les persones físiques.", correct: true },
      { text: "Que l'Administració sàpiga tot sobre el ciutadà.", correct: false },
      { text: "El negoci de les empreses tecnològiques.", correct: false },
      { text: "La seguretat de l'edifici físic.", correct: false }
    ]
  },
  {
    question: "L'Administració ha d'informar als ciutadans sobre els seus:",
    number: 55,
    answers: [
      { text: "Drets i obligacions en els procediments administratius.", correct: true },
      { text: "Sous privats dels seus caps.", correct: false },
      { text: "Llocs de vacances dels ministres.", correct: false },
      { text: "Problemes personals dels funcionaris.", correct: false }
    ]
  },
  {
    question: "Un ciutadà pot ser exclòs d'un dret d'accés per:",
    number: 56,
    answers: [
      { text: "Mai, la llei no permet la discriminació en l'exercici d'aquest dret.", correct: true },
      { text: "La seva ideologia política.", correct: false },
      { text: "El fet de no haver votat.", correct: false },
      { text: "La falta de pagament d'un altre impost.", correct: false }
    ]
  },
  {
    question: "Com es controla que l'Administració compleixi amb la transparència?",
    number: 57,
    answers: [
      { text: "Mitjançant òrgans de control i l'impuls de la ciutadania.", correct: true },
      { text: "L'Administració es controla a si mateixa sense supervisió.", correct: false },
      { text: "No hi ha cap tipus de control.", correct: false },
      { text: "Només pel partit governant.", correct: false }
    ]
  },
  {
    question: "El dret d'accés a la informació pública és un dret de:",
    number: 58,
    answers: [
      { text: "Configuració legal.", correct: true },
      { text: "Naturalesa màgica.", correct: false },
      { text: "Caràcter potestatiu del funcionari.", correct: false },
      { text: "Exclusiu per a països de la UE.", correct: false }
    ]
  },
  {
    question: "Les administracions públiques han de tenir:",
    number: 59,
    answers: [
      { text: "Sistemes d'atenció al ciutadà eficients.", correct: true },
      { text: "Un servei de seguretat privat superior a la policia.", correct: false },
      { text: "Tots els tràmits en format presencial obligatori.", correct: false },
      { text: "Cap servei d'atenció, per estalviar costos.", correct: false }
    ]
  },
  {
    question: "La Llei 19/2014 és la llei catalana de:",
    number: 60,
    answers: [
      { text: "Transparència, accés a la informació pública i bon govern.", correct: true },
      { text: "Procediment administratiu comú.", correct: false },
      { text: "Seguretat social i pensions.", correct: false },
      { text: "Organització de la policia.", correct: false }
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