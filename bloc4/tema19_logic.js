const TEST_ID = "tema19"; 
const questions = [
  {
    question: "Segons el TREBEP, quina és la classificació bàsica del personal al servei de les administracions públiques?",
    number: 1,
    answers: [
      { text: "Funcionaris de carrera, funcionaris interins, personal laboral i personal eventual.", correct: true },
      { text: "Funcionaris, personal laboral i personal extern.", correct: false },
      { text: "Funcionaris de carrera i personal contractat.", correct: false },
      { text: "Funcionaris, personal laboral, personal eventual i personal directiu.", correct: false }
    ]
  },
  {
    question: "Qui són els funcionaris de carrera?",
    number: 2,
    answers: [
      { text: "Els qui, en virtut de nomenament legal, estan vinculats a una administració per una relació estatutària permanent.", correct: true },
      { text: "Els qui ocupen càrrecs de confiança política.", correct: false },
      { text: "Els qui estan contractats per temps indefinit mitjançant un contracte laboral.", correct: false },
      { text: "Els qui realitzen tasques de col·laboració temporal.", correct: false }
    ]
  },
  {
    question: "Quina és la causa principal per a la selecció de funcionaris interins?",
    number: 3,
    answers: [
      { text: "L'existència de places vacants quan no sigui possible la cobertura per funcionaris de carrera.", correct: true },
      { text: "La necessitat de cobrir un càrrec directiu.", correct: false },
      { text: "La voluntat política de l'òrgan de govern.", correct: false },
      { text: "L'increment pressupostari de la partida de personal.", correct: false }
    ]
  },
  {
    question: "El personal eventual és el que:",
    number: 4,
    answers: [
      { text: "Realitza funcions expressament qualificades de confiança o assessorament especial.", correct: true },
      { text: "Substitueix a un funcionari de carrera temporalment.", correct: false },
      { text: "Està subjecte a les normes de la funció pública per al seu règim retributiu.", correct: false },
      { text: "S'ha seleccionat mitjançant oposició lliure.", correct: false }
    ]
  },
  {
    question: "Com s'ha de garantir el procés de selecció dels funcionaris de carrera?",
    number: 5,
    answers: [
      { text: "Mitjançant procediments que garanteixin els principis d'igualtat, mèrit i capacitat.", correct: true },
      { text: "Mitjançant l'elecció directa del departament interessat.", correct: false },
      { text: "Només mitjançant una entrevista personal i el currículum.", correct: false },
      { text: "A través d'una selecció per antiguitat exclusivament.", correct: false }
    ]
  },
  {
    question: "Quina és una causa de pèrdua de la condició de funcionari de carrera?",
    number: 6,
    answers: [
      { text: "La renúncia a la condició de funcionari.", correct: true },
      { text: "El trasllat a un altre departament.", correct: false },
      { text: "La suspensió temporal de funcions.", correct: false },
      { text: "La jubilació parcial.", correct: false }
    ]
  },
  {
    question: "La pèrdua de la condició de funcionari per sanció disciplinària ha de ser:",
    number: 7,
    answers: [
      { text: "Ferm en via administrativa.", correct: true },
      { text: "Decidida directament pel superior jeràrquic sense expedient.", correct: false },
      { text: "Aprovada per referèndum.", correct: false },
      { text: "Voluntària per part del funcionari.", correct: false }
    ]
  },
  {
    question: "El personal laboral es regeix per:",
    number: 8,
    answers: [
      { text: "La legislació laboral i els convenis col·lectius.", correct: true },
      { text: "El règim estatutari dels funcionaris.", correct: false },
      { text: "El dret civil únicament.", correct: false },
      { text: "El reglament orgànic de la Generalitat.", correct: false }
    ]
  },
  {
    question: "Quina és la diferència principal entre personal eventual i interí?",
    number: 9,
    answers: [
      { text: "L'eventual exerceix funcions de confiança/assessorament; l'interí exerceix funcions pròpies de funcionari.", correct: true },
      { text: "L'eventual està sotmès a oposició i l'interí no.", correct: false },
      { text: "L'interí sempre és fix i l'eventual no.", correct: false },
      { text: "No existeix cap diferència en les seves funcions.", correct: false }
    ]
  },
  {
    question: "La selecció de personal laboral s'ha de fer a través de:",
    number: 10,
    answers: [
      { text: "Sistemes que garanteixin igualtat, mèrit i capacitat, i publicitat.", correct: true },
      { text: "Contractes privats d'obra i servei.", correct: false },
      { text: "Designació directa sense cap tràmit.", correct: false },
      { text: "La presentació única de mèrits laborals.", correct: false }
    ]
  },
  {
    question: "Què és la rehabilitació de la condició de funcionari?",
    number: 11,
    answers: [
      { text: "El procediment per recuperar la condició de funcionari després d'haver estat perduda.", correct: true },
      { text: "L'ascens a una categoria superior.", correct: false },
      { text: "La recuperació després d'una excedència voluntària.", correct: false },
      { text: "L'obligació de retornar els diners cobrats indegudament.", correct: false }
    ]
  },
  {
    question: "Quins són els sistemes de selecció més habituals a l'administració?",
    number: 12,
    answers: [
      { text: "Oposició, concurs i concurs-oposició.", correct: true },
      { text: "Entrevista i prova psicotècnica únicament.", correct: false },
      { text: "Selecció per sortej públic.", correct: false },
      { text: "Valoració de currículum privat.", correct: false }
    ]
  },
  {
    question: "L'oposició com a sistema de selecció consisteix en:",
    number: 13,
    answers: [
      { text: "La celebració d'una o diverses proves per determinar la capacitat i aptitud.", correct: true },
      { text: "La valoració exclusiva dels mèrits acadèmics.", correct: false },
      { text: "La valoració de l'experiència prèvia a l'administració.", correct: false },
      { text: "L'elecció per part del cap d'unitat.", correct: false }
    ]
  },
  {
    question: "El sistema de concurs consisteix en:",
    number: 14,
    answers: [
      { text: "La comprovació i qualificació dels mèrits dels aspirants.", correct: true },
      { text: "La realització d'una prova tipus test.", correct: false },
      { text: "La combinació de proves i mèrits.", correct: false },
      { text: "L'elecció aleatòria dels candidats.", correct: false }
    ]
  },
  {
    question: "El nomenament de funcionaris de carrera es publica a:",
    number: 15,
    answers: [
      { text: "El Diari Oficial de la Generalitat de Catalunya (DOGC).", correct: true },
      { text: "El Butlletí Oficial de l'Estat (BOE).", correct: false },
      { text: "El tauler d'anuncis del departament sense publicar res més.", correct: false },
      { text: "El diari personal del funcionari.", correct: false }
    ]
  },
  {
    question: "Quan es perd la condició de funcionari per jubilació?",
    number: 16,
    answers: [
      { text: "Quan s'arriba a l'edat legalment establerta.", correct: true },
      { text: "A petició pròpia a qualsevol edat.", correct: false },
      { text: "Per decret llei del Parlament.", correct: false },
      { text: "Mai, la condició és vitalícia.", correct: false }
    ]
  },
  {
    question: "La renúncia a la condició de funcionari ha de ser:",
    number: 17,
    answers: [
      { text: "Expressa i per escrit.", correct: true },
      { text: "Tàcita, pel simple fet de no anar a treballar.", correct: false },
      { text: "Aprovada pel sindicat.", correct: false },
      { text: "No és possible renunciar a la condició de funcionari.", correct: false }
    ]
  },
  {
    question: "Què és la suspensió de funcions?",
    number: 18,
    answers: [
      { text: "Una situació administrativa que implica el cessament temporal de funcions.", correct: true },
      { text: "La pèrdua definitiva del lloc de treball.", correct: false },
      { text: "Un canvi de lloc de treball obligatori.", correct: false },
      { text: "La jubilació anticipada.", correct: false }
    ]
  },
  {
    question: "Què s'entén per accés a la funció pública?",
    number: 19,
    answers: [
      { text: "L'obtenció de la condició de funcionari mitjançant els procediments legals.", correct: true },
      { text: "El dret a entrar als edificis públics.", correct: false },
      { text: "La inscripció en el cens electoral.", correct: false },
      { text: "L'admissió a qualsevol curs de formació.", correct: false }
    ]
  },
  {
    question: "Els òrgans de selecció han de ser:",
    number: 20,
    answers: [
      { text: "Imparcials i professionals.", correct: true },
      { text: "Compostos només per polítics.", correct: false },
      { text: "Compostos només pels caps dels departaments.", correct: false },
      { text: "De caràcter totalment voluntari i aleatori.", correct: false }
    ]
  },
  {
    question: "L'adquisició de la condició de funcionari es produeix quan:",
    number: 21,
    answers: [
      { text: "Es pren possessió del lloc de treball.", correct: true },
      { text: "S'aprova l'oposició.", correct: false },
      { text: "Es publica la llista d'aprovats.", correct: false },
      { text: "Es rep la notificació de l'aprovació.", correct: false }
    ]
  },
  {
    question: "El personal directiu professional és:",
    number: 22,
    answers: [
      { text: "El que desenvolupa funcions directives professionals basades en principis de mèrit i capacitat.", correct: true },
      { text: "Qualsevol funcionari amb antiguitat.", correct: false },
      { text: "El mateix que el personal eventual.", correct: false },
      { text: "Un càrrec que només pot ocupar un funcionari del grup A1.", correct: false }
    ]
  },
  {
    question: "Què vol dir el principi d'igualtat en l'accés a la funció pública?",
    number: 23,
    answers: [
      { text: "Que tots els ciutadans poden accedir si reuneixen els requisits.", correct: true },
      { text: "Que tothom pot ser funcionari sense passar cap prova.", correct: false },
      { text: "Que s'ha de contractar preferentment a amics i coneguts.", correct: false },
      { text: "Que només es valora el lloc de naixement.", correct: false }
    ]
  },
  {
    question: "La pèrdua de la nacionalitat espanyola implica:",
    number: 24,
    answers: [
      { text: "La pèrdua de la condició de funcionari si la nacionalitat era un requisit d'accés.", correct: true },
      { text: "Cap conseqüència en la vida laboral.", correct: false },
      { text: "L'ascens immediat de categoria.", correct: false },
      { text: "La conversió automàtica a personal laboral.", correct: false }
    ]
  },
  {
    question: "La incapacitat permanent declarada implica:",
    number: 25,
    answers: [
      { text: "La jubilació del funcionari.", correct: true },
      { text: "La suspensió de sou sense jubilació.", correct: false },
      { text: "El trasllat a una altra administració.", correct: false },
      { text: "L'obligació de treballar des de casa.", correct: false }
    ]
  },
  {
    question: "Què és un procediment de provisió de llocs de treball?",
    number: 26,
    answers: [
      { text: "El sistema per ocupar un lloc un cop ja s'és funcionari (concurs o lliure designació).", correct: true },
      { text: "El procés d'oposició inicial.", correct: false },
      { text: "El procés de contractació de personal laboral.", correct: false },
      { text: "El procés de jubilació.", correct: false }
    ]
  },
  {
    question: "El sistema de concurs per a la provisió de llocs de treball és:",
    number: 27,
    answers: [
      { text: "El sistema ordinari de provisió.", correct: true },
      { text: "Un sistema excepcional i poc comú.", correct: false },
      { text: "Lliure designació sempre.", correct: false },
      { text: "Un sistema que només utilitza l'Estat.", correct: false }
    ]
  },
  {
    question: "El personal eventual cessa automàticament quan:",
    number: 28,
    answers: [
      { text: "Cessa l'autoritat que el va nomenar.", correct: true },
      { text: "Passen dos anys des del seu nomenament.", correct: false },
      { text: "Es jubila el seu cap immediat.", correct: false },
      { text: "Arriba la data del seu aniversari.", correct: false }
    ]
  },
  {
    question: "La relació de servei dels funcionaris es pot suspendre:",
    number: 29,
    answers: [
      { text: "Per raons disciplinàries o altres situacions administratives previstes.", correct: true },
      { text: "Per decisió arbitrària del cap.", correct: false },
      { text: "Per voler anar de vacances molt llargues.", correct: false },
      { text: "Per no voler portar uniforme.", correct: false }
    ]
  },
  {
    question: "Quina és la funció de la Mesa de Selecció en un procés?",
    number: 30,
    answers: [
      { text: "Avaluar els candidats segons les bases de la convocatòria.", correct: true },
      { text: "Redactar les lleis de la Generalitat.", correct: false },
      { text: "Pagar el sou dels opositors.", correct: false },
      { text: "Determinar quantes places s'ofereixen.", correct: false }
    ]
  },
  {
    question: "El principi de publicitat en la selecció significa:",
    number: 31,
    answers: [
      { text: "Que les convocatòries s'han de fer públiques per a tothom.", correct: true },
      { text: "Que s'ha de fer un anunci a la televisió.", correct: false },
      { text: "Que el nom dels opositors surt als diaris.", correct: false },
      { text: "Que només els funcionaris poden saber les places.", correct: false }
    ]
  },
  {
    question: "Els requisits d'accés a la funció pública es fixen:",
    number: 32,
    answers: [
      { text: "En les bases de la convocatòria seguint la normativa.", correct: true },
      { text: "A discreció del departament de Recursos Humans.", correct: false },
      { text: "Segons l'experiència prèvia de l'entrevistador.", correct: false },
      { text: "No existeixen requisits, tothom pot accedir.", correct: false }
    ]
  },
  {
    question: "El personal interí pot esdevenir funcionari de carrera?",
    number: 33,
    answers: [
      { text: "Només si supera el procés de selecció lliure (oposició/concurs).", correct: true },
      { text: "Sí, per antiguitat automàtica.", correct: false },
      { text: "Sí, després de 5 anys de serveis prestats.", correct: false },
      { text: "No, en cap cas.", correct: false }
    ]
  },
  {
    question: "Quina és la finalitat dels períodes de prova?",
    number: 34,
    answers: [
      { text: "Comprovar l'aptitud del treballador per al lloc.", correct: true },
      { text: "Que el treballador decideixi si li agrada l'oficina.", correct: false },
      { text: "Donar vacances a l'anterior ocupant.", correct: false },
      { text: "Reduir el sou del treballador.", correct: false }
    ]
  },
  {
    question: "Què és la presa de possessió?",
    number: 35,
    answers: [
      { text: "L'acte formal en què s'adquireix la condició de funcionari en un lloc.", correct: true },
      { text: "La presentació del títol acadèmic.", correct: false },
      { text: "El primer dia de vacances.", correct: false },
      { text: "L'elecció de les funcions diàries.", correct: false }
    ]
  },
  {
    question: "El personal laboral pot ser fix o temporal?",
    number: 36,
    answers: [
      { text: "Sí, pot ser fix (indefinit) o temporal.", correct: true },
      { text: "No, tot el personal laboral és sempre temporal.", correct: false },
      { text: "No, tot el personal laboral és sempre fix.", correct: false },
      { text: "Només existeix el personal laboral de confiança.", correct: false }
    ]
  },
  {
    question: "Quina norma regula el règim disciplinari dels funcionaris?",
    number: 37,
    answers: [
      { text: "El TREBEP i la normativa autonòmica de funció pública.", correct: true },
      { text: "El Codi Civil.", correct: false },
      { text: "La Llei de Contractes del Sector Públic.", correct: false },
      { text: "El Reglament de la Unió Europea.", correct: false }
    ]
  },
  {
    question: "Les faltes dels funcionaris es classifiquen en:",
    number: 38,
    answers: [
      { text: "Molt greus, greus i lleus.", correct: true },
      { text: "Administratives i penals.", correct: false },
      { text: "Interenes i externes.", correct: false },
      { text: "Temporals i definitives.", correct: false }
    ]
  },
  {
    question: "L'excedència voluntària és una situació administrativa que implica:",
    number: 39,
    answers: [
      { text: "La suspensió de funcions i del dret a retribucions.", correct: true },
      { text: "L'ascens a una categoria superior.", correct: false },
      { text: "La pèrdua definitiva de la plaça.", correct: false },
      { text: "El dret a cobrar el sou íntegre.", correct: false }
    ]
  },
  {
    question: "Què és el concurs de mèrits?",
    number: 40,
    answers: [
      { text: "Un procediment per proveir llocs de treball valorant mèrits.", correct: true },
      { text: "Una prova de coneixements teòrics.", correct: false },
      { text: "Un procés per triar el millor amic.", correct: false },
      { text: "Una prova de resistència física.", correct: false }
    ]
  },
  {
    question: "L'administració pot reduir la plantilla per:",
    number: 41,
    answers: [
      { text: "Raons pressupostàries o d'organització (sempre respectant la llei).", correct: true },
      { text: "Perquè li agrada canviar de gent.", correct: false },
      { text: "Per evitar que la gent es conegui massa.", correct: false },
      { text: "Mai es pot reduir la plantilla.", correct: false }
    ]
  },
  {
    question: "Què és un funcionari en pràctiques?",
    number: 42,
    answers: [
      { text: "El que ha superat el procés de selecció però no ha pres possessió definitiva.", correct: true },
      { text: "El que està en període de formació universitària.", correct: false },
      { text: "El funcionari que està de vacances.", correct: false },
      { text: "Un tipus de personal laboral.", correct: false }
    ]
  },
  {
    question: "La inhabilitació per a càrrec públic implica:",
    number: 43,
    answers: [
      { text: "La pèrdua de la condició de funcionari.", correct: true },
      { text: "Una multa econòmica sense conseqüències laborals.", correct: false },
      { text: "Un avís verbal sense més conseqüències.", correct: false },
      { text: "L'ascens a un altre departament.", correct: false }
    ]
  },
  {
    question: "Què és el certificat de bona conducta?",
    number: 44,
    answers: [
      { text: "Un document que no és requerit habitualment; s'utilitza el certificat d'antecedents penals.", correct: true },
      { text: "Un document que dóna el cap del departament.", correct: false },
      { text: "L'únic document necessari per ser funcionari.", correct: false },
      { text: "Un certificat emès pel sindicat.", correct: false }
    ]
  },
  {
    question: "La relació entre el funcionari i l'Administració és:",
    number: 45,
    answers: [
      { text: "Estatutària.", correct: true },
      { text: "Mercantil.", correct: false },
      { text: "Laboral privada.", correct: false },
      { text: "Civil pura.", correct: false }
    ]
  },
  {
    question: "Els funcionaris tenen dret a la formació contínua?",
    number: 46,
    answers: [
      { text: "Sí, és un dret i un deure.", correct: true },
      { text: "No, és una pèrdua de temps.", correct: false },
      { text: "Només si es paguen ells la formació.", correct: false },
      { text: "Només si són directius.", correct: false }
    ]
  },
  {
    question: "Què passa si un funcionari abandona el servei?",
    number: 47,
    answers: [
      { text: "Pot ser considerat falta molt greu (abandonament de servei).", correct: true },
      { text: "S'entén que ha demanat les vacances.", correct: false },
      { text: "Se li augmenta el sou per incentivar-lo a tornar.", correct: false },
      { text: "No té cap conseqüència.", correct: false }
    ]
  },
  {
    question: "El personal eventual té dret a la permanència?",
    number: 48,
    answers: [
      { text: "No, el seu nomenament és lliure i el seu cessament també.", correct: true },
      { text: "Sí, després d'un any.", correct: false },
      { text: "Sí, com qualsevol funcionari.", correct: false },
      { text: "Sí, mentre tingui un títol acadèmic.", correct: false }
    ]
  },
  {
    question: "La jubilació forçosa es produeix:",
    number: 49,
    answers: [
      { text: "Per edat legalment establerta.", correct: true },
      { text: "Quan el cap ho decideix.", correct: false },
      { text: "Quan s'acaba el pressupost.", correct: false },
      { text: "Quan el funcionari té molts problemes de gestió.", correct: false }
    ]
  },
  {
    question: "El personal funcionari pot ser de carrera o interí?",
    number: 50,
    answers: [
      { text: "Sí, ambdues categories formen el personal funcionari.", correct: true },
      { text: "No, només existeixen els funcionaris de carrera.", correct: false },
      { text: "No, els interins són personal laboral.", correct: false },
      { text: "No, els interins són personal eventual.", correct: false }
    ]
  },
  {
    question: "Els mèrits a valorar en un concurs solen ser:",
    number: 51,
    answers: [
      { text: "Experiència, formació i antiguitat.", correct: true },
      { text: "Només l'edat del candidat.", correct: false },
      { text: "El color del currículum.", correct: false },
      { text: "L'amistat amb el president.", correct: false }
    ]
  },
  {
    question: "Què és una convocatòria pública?",
    number: 52,
    answers: [
      { text: "L'acte on es fan públics els llocs i els requisits per accedir-hi.", correct: true },
      { text: "Una reunió d'amics.", correct: false },
      { text: "Un document privat enviat només per correu electrònic.", correct: false },
      { text: "Una ordre verbal del cap.", correct: false }
    ]
  },
  {
    question: "La presa de possessió ha de ser dins del termini establert?",
    number: 53,
    answers: [
      { text: "Sí, si no s'hi va, es pot perdre el dret al nomenament.", correct: true },
      { text: "No, pots anar quan vulguis.", correct: false },
      { text: "Pots enviar a algú altre en el teu lloc.", correct: false },
      { text: "No, el nomenament té validesa indefinida sense acte formal.", correct: false }
    ]
  },
  {
    question: "Els drets dels funcionaris inclouen:",
    number: 54,
    answers: [
      { text: "La llibertat d'expressió, la retribució i el desenvolupament de la carrera.", correct: true },
      { text: "El dret a no treballar mai.", correct: false },
      { text: "El dret a cobrar sense anar a treballar.", correct: false },
      { text: "El dret a fer el que vulguin sense cap regla.", correct: false }
    ]
  },
  {
    question: "Les obligacions dels funcionaris inclouen:",
    number: 55,
    answers: [
      { text: "La dedicació al servei públic i el respecte a la Constitució i l'Estatut.", correct: true },
      { text: "Només arribar a l'hora i marxar d'hora.", correct: false },
      { text: "Només obeir el cap superior.", correct: false },
      { text: "No tenen obligacions especials.", correct: false }
    ]
  },
  {
    question: "L'Administració ha d'oferir avaluació de l'acompliment?",
    number: 56,
    answers: [
      { text: "Sí, per valorar la tasca i desenvolupar la carrera.", correct: true },
      { text: "No, no serveix per a res.", correct: false },
      { text: "Només quan hi ha problemes greus.", correct: false },
      { text: "Només si ho paga el funcionari.", correct: false }
    ]
  },
  {
    question: "La inamovibilitat és un principi de:",
    number: 57,
    answers: [
      { text: "Els funcionaris de carrera.", correct: true },
      { text: "El personal laboral.", correct: false },
      { text: "El personal eventual.", correct: false },
      { text: "Els interins.", correct: false }
    ]
  },
  {
    question: "Què vol dir inamovibilitat?",
    number: 58,
    answers: [
      { text: "Que no es pot ser privat de la condició de funcionari excepte per causes legals.", correct: true },
      { text: "Que no pots canviar mai de despatx.", correct: false },
      { text: "Que no pots tenir mai vacances.", correct: false },
      { text: "Que el teu sou mai pot augmentar.", correct: false }
    ]
  },
  {
    question: "El personal directiu es nomena atenent a:",
    number: 59,
    answers: [
      { text: "Criteris de competència professional i experiència.", correct: true },
      { text: "Només criteris d'amistat.", correct: false },
      { text: "L'atzar.", correct: false },
      { text: "L'edat.", correct: false }
    ]
  },
  {
    question: "La relació de servei es pot perdre per:",
    number: 60,
    answers: [
      { text: "Renúncia, pèrdua de nacionalitat, jubilació o sanció disciplinària.", correct: true },
      { text: "Un trasllat temporal.", correct: false },
      { text: "Una suspensió curta.", correct: false },
      { text: "Un canvi de departament.", correct: false }
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