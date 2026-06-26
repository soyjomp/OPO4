const TEST_ID = "tema17"; 
const questions = [
  {
    question: "Quin és el document que recull la previsió d'ingressos i les despeses de la Generalitat per a un exercici?",
    number: 1,
    answers: [
      { text: "La Llei de pressupostos de la Generalitat.", correct: true },
      { text: "El Pla anual de control financer.", correct: false },
      { text: "La Llei de mesures fiscals i administratives.", correct: false },
      { text: "El Programa operatiu de despesa.", correct: false }
    ]
  },
  {
    question: "Quina és la durada temporal del pressupost de la Generalitat?",
    number: 2,
    answers: [
      { text: "Un exercici pressupostari, que coincideix amb l'any natural.", correct: true },
      { text: "Dos anys fiscals.", correct: false },
      { text: "El període de mandat de la legislatura.", correct: false },
      { text: "Un semestre natural.", correct: false }
    ]
  },
  {
    question: "Quin és el principi pressupostari que obliga a incloure totes les despeses i ingressos sense compensacions?",
    number: 3,
    answers: [
      { text: "Principi d'unitat i universalitat.", correct: true },
      { text: "Principi d'especialitat.", correct: false },
      { text: "Principi d'anualitat.", correct: false },
      { text: "Principi d'equilibri pressupostari.", correct: false }
    ]
  },
  {
    question: "Qui té la competència per elaborar l'avantprojecte de llei de pressupostos?",
    number: 4,
    answers: [
      { text: "El Govern de la Generalitat.", correct: true },
      { text: "El Parlament de Catalunya.", correct: false },
      { text: "La Sindicatura de Comptes.", correct: false },
      { text: "El Consell de Treball, Econòmic i Social.", correct: false }
    ]
  },
  {
    question: "Quina conselleria és la responsable de la proposta d'elaboració dels pressupostos?",
    number: 5,
    answers: [
      { text: "El Departament d'Economia i Finances.", correct: true },
      { text: "El Departament de la Presidència.", correct: false },
      { text: "El Departament d'Interior.", correct: false },
      { text: "El Departament d'Acció Exterior.", correct: false }
    ]
  },
  {
    question: "Com s'anomena la classificació que indica 'qui' gasta (el departament o entitat)?",
    number: 6,
    answers: [
      { text: "Classificació orgànica.", correct: true },
      { text: "Classificació econòmica.", correct: false },
      { text: "Classificació funcional.", correct: false },
      { text: "Classificació per programes.", correct: false }
    ]
  },
  {
    question: "Què permet conèixer la classificació funcional del pressupost?",
    number: 7,
    answers: [
      { text: "La finalitat de la despesa (què es pretén aconseguir).", correct: true },
      { text: "La quantia dels sous del personal.", correct: false },
      { text: "Quina conselleria executa la despesa.", correct: false },
      { text: "La naturalesa econòmica dels béns adquirits.", correct: false }
    ]
  },
  {
    question: "La classificació econòmica de les despeses agrupa els crèdits segons:",
    number: 8,
    answers: [
      { text: "La naturalesa de les operacions (despeses de personal, inversions, etc.).", correct: true },
      { text: "La unitat administrativa que gestiona el fons.", correct: false },
      { text: "El programa polític en què s'inclou.", correct: false },
      { text: "El tipus d'impost que finança la despesa.", correct: false }
    ]
  },
  {
    question: "Quin document s'ha d'aprovar si no hi ha pressupostos nous abans de l'1 de gener?",
    number: 9,
    answers: [
      { text: "La pròrroga pressupostària.", correct: true },
      { text: "Un decret llei d'emergència.", correct: false },
      { text: "Una modificació de crèdit extraordinària.", correct: false },
      { text: "Un pressupost provisional aprovat per la Sindicatura.", correct: false }
    ]
  },
  {
    question: "Quins ingressos financen les operacions corrents i de capital de la Generalitat?",
    number: 10,
    answers: [
      { text: "Tots els recursos previstos en la Llei de pressupostos.", correct: true },
      { text: "Només els ingressos provinents de l'Estat.", correct: false },
      { text: "Només els tributs propis de la Generalitat.", correct: false },
      { text: "Exclusivament els derivats d'operacions de crèdit.", correct: false }
    ]
  },
  {
    question: "Com es denomina el document que explica les polítiques que s'aplicaran amb el pressupost?",
    number: 11,
    answers: [
      { text: "Memòria explicativa.", correct: true },
      { text: "Compte general.", correct: false },
      { text: "Balanç de situació.", correct: false },
      { text: "Liquidació pressupostària.", correct: false }
    ]
  },
  {
    question: "En quin òrgan es debaten, esmenen i s'aproven definitivament els pressupostos?",
    number: 12,
    answers: [
      { text: "El Parlament de Catalunya.", correct: true },
      { text: "El Govern de la Generalitat.", correct: false },
      { text: "El Consell Executiu.", correct: false },
      { text: "La Comissió d'Economia del Parlament.", correct: false }
    ]
  },
  {
    question: "Què són les modificacions de crèdit?",
    number: 13,
    answers: [
      { text: "Variacions en la quantia o finalitat dels crèdits inicialment aprovats.", correct: true },
      { text: "L'increment automàtic del sou dels funcionaris.", correct: false },
      { text: "El pagament de deutes pendents de l'any anterior.", correct: false },
      { text: "L'anul·lació total del pressupost de l'entitat.", correct: false }
    ]
  },
  {
    question: "Què permet una 'transferència de crèdit'?",
    number: 14,
    answers: [
      { text: "Traspassar crèdit d'una partida a una altra per necessitats sobrevingudes.", correct: true },
      { text: "Augmentar l'import total del pressupost.", correct: false },
      { text: "Endeutar la Generalitat amb bancs estrangers.", correct: false },
      { text: "Reduir la càrrega fiscal dels ciutadans.", correct: false }
    ]
  },
  {
    question: "Quins tipus d'operacions conformen les despeses en la classificació econòmica?",
    number: 15,
    answers: [
      { text: "Operacions corrents, de capital i financeres.", correct: true },
      { text: "Operacions ordinàries i extraordinàries.", correct: false },
      { text: "Despeses directes i indirectes.", correct: false },
      { text: "Despeses de funcionament i d'inversió social.", correct: false }
    ]
  },
  {
    question: "Què són els crèdits de despeses de personal (Capítol 1)?",
    number: 16,
    answers: [
      { text: "Despeses destinades a la remuneració dels recursos humans.", correct: true },
      { text: "Despeses per a la compra d'immobles.", correct: false },
      { text: "Despeses financeres per interessos de deute.", correct: false },
      { text: "Subvencions a empreses públiques.", correct: false }
    ]
  },
  {
    question: "Què es recull al Capítol 6 de la classificació econòmica?",
    number: 17,
    answers: [
      { text: "Inversions reals.", correct: true },
      { text: "Despeses de personal.", correct: false },
      { text: "Passius financers.", correct: false },
      { text: "Transferències corrents.", correct: false }
    ]
  },
  {
    question: "El principi d'especialitat pressupostària vol dir que:",
    number: 18,
    answers: [
      { text: "Els crèdits s'han de destinar a la finalitat específica per a la qual van ser autoritzats.", correct: true },
      { text: "Només es pot gastar en el que autoritza el cap de departament.", correct: false },
      { text: "El pressupost s'ha d'especificar abans de començar l'any.", correct: false },
      { text: "La Generalitat ha d'especificar els impostos per cada ciutadà.", correct: false }
    ]
  },
  {
    question: "Què són les 'despeses compromeses'?",
    number: 19,
    answers: [
      { text: "Despeses que s'originen en un exercici però que tenen repercussió en exercicis futurs.", correct: true },
      { text: "Despeses que ja s'han pagat totalment.", correct: false },
      { text: "Despeses que no es poden realitzar per manca de fons.", correct: false },
      { text: "Despeses extraordinàries aprovades pel Parlament.", correct: false }
    ]
  },
  {
    question: "Què és la liquidació del pressupost?",
    number: 20,
    answers: [
      { text: "El resultat final de la recaptació i dels pagaments realitzats durant l'any.", correct: true },
      { text: "L'aprovació del pressupost de l'any següent.", correct: false },
      { text: "L'auditoria de la Sindicatura de Comptes sobre un departament.", correct: false },
      { text: "El procés de contractació pública.", correct: false }
    ]
  },
  {
    question: "Qui realitza el control extern del pressupost de la Generalitat?",
    number: 21,
    answers: [
      { text: "La Sindicatura de Comptes.", correct: true },
      { text: "La Intervenció General.", correct: false },
      { text: "El Síndic de Greuges.", correct: false },
      { text: "El Departament d'Economia.", correct: false }
    ]
  },
  {
    question: "Què és la Intervenció General de la Generalitat?",
    number: 22,
    answers: [
      { text: "L'òrgan que exerceix el control intern de la gestió econòmica i pressupostària.", correct: true },
      { text: "El departament que recapta els impostos dels ciutadans.", correct: false },
      { text: "L'òrgan que aprova el pressupost del Parlament.", correct: false },
      { text: "Un òrgan de control aliè a la Generalitat.", correct: false }
    ]
  },
  {
    question: "En quina fase s'aprova formalment la despesa?",
    number: 23,
    answers: [
      { text: "Fase d'autorització (A).", correct: true },
      { text: "Fase de compromís o disposició (D).", correct: false },
      { text: "Fase de reconeixement de l'obligació (O).", correct: false },
      { text: "Fase de proposta de pagament (P).", correct: false }
    ]
  },
  {
    question: "Quina és la seqüència correcta de les fases de la despesa?",
    number: 24,
    answers: [
      { text: "A - D - O - P.", correct: true },
      { text: "P - O - D - A.", correct: false },
      { text: "D - A - O - P.", correct: false },
      { text: "A - O - D - P.", correct: false }
    ]
  },
  {
    question: "Què implica la fase de reconeixement de l'obligació (O)?",
    number: 25,
    answers: [
      { text: "La constatació documental que s'ha complert la prestació i el dret al cobrament.", correct: true },
      { text: "L'ordre d'enviar els diners al proveïdor.", correct: false },
      { text: "L'aprovació inicial del pressupost.", correct: false },
      { text: "La reserva de crèdit per a un contracte.", correct: false }
    ]
  },
  {
    question: "Què es recull en el Capítol 2 de la classificació econòmica de despeses?",
    number: 26,
    answers: [
      { text: "Compra de béns corrents i serveis.", correct: true },
      { text: "Despeses de personal.", correct: false },
      { text: "Interessos del deute.", correct: false },
      { text: "Fons de contingència.", correct: false }
    ]
  },
  {
    question: "Com s'anomenen les despeses destinades a interessos del deute?",
    number: 27,
    answers: [
      { text: "Despeses financeres (Capítol 3).", correct: true },
      { text: "Inversions reals (Capítol 6).", correct: false },
      { text: "Passius financers (Capítol 9).", correct: false },
      { text: "Transferències corrents (Capítol 4).", correct: false }
    ]
  },
  {
    question: "Què significa l'equilibri pressupostari?",
    number: 28,
    answers: [
      { text: "Que el total de despeses ha d'igualar el total d'ingressos.", correct: true },
      { text: "Que el Govern no pot gastar diners de l'Estat.", correct: false },
      { text: "Que les despeses han de ser menors que els ingressos sempre.", correct: false },
      { text: "Que no es pot demanar crèdit mai.", correct: false }
    ]
  },
  {
    question: "Què és un pressupost 'prorrogat'?",
    number: 29,
    answers: [
      { text: "El pressupost de l'any anterior que es manté vigent en no aprovar-se'n un de nou.", correct: true },
      { text: "Un pressupost que s'ha ampliat en un 10%.", correct: false },
      { text: "El pressupost que només dura sis mesos.", correct: false },
      { text: "Un pressupost aprovat pel Govern sense el Parlament.", correct: false }
    ]
  },
  {
    question: "Què és la memòria econòmica que acompanya el projecte de pressupostos?",
    number: 30,
    answers: [
      { text: "Document que justifica les dades econòmiques i financeres incloses.", correct: true },
      { text: "Llistat de tots els proveïdors de la Generalitat.", correct: false },
      { text: "Informe sobre la situació històrica de Catalunya.", correct: false },
      { text: "El contracte signat amb el Ministeri d'Hisenda.", correct: false }
    ]
  },
  {
    question: "Quina llei regula el règim financer i pressupostari de la Generalitat?",
    number: 31,
    answers: [
      { text: "El Text refós de la Llei de finances públiques de Catalunya.", correct: true },
      { text: "La Llei de l'Estatut d'Autonomia.", correct: false },
      { text: "La Llei de procediment administratiu comú.", correct: false },
      { text: "La Llei d'estabilitat pressupostària estatal.", correct: false }
    ]
  },
  {
    question: "Què s'entén per 'ingressos de dret públic'?",
    number: 32,
    answers: [
      { text: "Els que obté l'Administració en l'exercici de les seves potestats (impostos, taxes).", correct: true },
      { text: "Els ingressos provinents de lloguers de finques privades.", correct: false },
      { text: "Els interessos bancaris de comptes privats.", correct: false },
      { text: "Els donatius de particulars.", correct: false }
    ]
  },
  {
    question: "Els tributs que gestiona la Generalitat es classifiquen en:",
    number: 33,
    answers: [
      { text: "Propis i cedits.", correct: true },
      { text: "Directes i globals.", correct: false },
      { text: "Estatals i locals.", correct: false },
      { text: "Ordinaris i extraordinaris.", correct: false }
    ]
  },
  {
    question: "Què és una taxa?",
    number: 34,
    answers: [
      { text: "Tribut el fet imposable del qual consisteix en la prestació d'un servei públic.", correct: true },
      { text: "Un tipus d'impost sense contraprestació.", correct: false },
      { text: "Una sanció administrativa.", correct: false },
      { text: "Un preu privat per la venda d'un immoble.", correct: false }
    ]
  },
  {
    question: "Què és la 'disposició de la despesa' (D)?",
    number: 35,
    answers: [
      { text: "L'acte mitjançant el qual s'acorda destinar crèdit a un fi determinat.", correct: true },
      { text: "L'ordre de pagar al banc.", correct: false },
      { text: "L'entrada del diner a la caixa.", correct: false },
      { text: "El tancament de l'exercici comptable.", correct: false }
    ]
  },
  {
    question: "On es publica la Llei de pressupostos un cop aprovada?",
    number: 36,
    answers: [
      { text: "Al Diari Oficial de la Generalitat de Catalunya (DOGC).", correct: true },
      { text: "Al Butlletí Oficial de l'Estat (BOE).", correct: false },
      { text: "A la web de la Sindicatura de Comptes.", correct: false },
      { text: "Només en el portal de transparència.", correct: false }
    ]
  },
  {
    question: "Què són les despeses de capital?",
    number: 37,
    answers: [
      { text: "Despeses destinades a crear o augmentar el patrimoni públic (inversions).", correct: true },
      { text: "Despeses per comprar material d'oficina fungible.", correct: false },
      { text: "Pagar el personal funcionari.", correct: false },
      { text: "Els interessos dels crèdits a curt termini.", correct: false }
    ]
  },
  {
    question: "Com es diu el procés d'elaboració del pressupost que parteix de zero cada any?",
    number: 38,
    answers: [
      { text: "Pressupost base zero.", correct: true },
      { text: "Pressupost incremental.", correct: false },
      { text: "Pressupost de continuïtat.", correct: false },
      { text: "Pressupost històric.", correct: false }
    ]
  },
  {
    question: "Quina és la funció de la classificació per programes?",
    number: 39,
    answers: [
      { text: "Agrupar crèdits per objectius i polítiques públiques.", correct: true },
      { text: "Agrupar crèdits per departaments.", correct: false },
      { text: "Agrupar crèdits pel tipus de material comprat.", correct: false },
      { text: "Agrupar crèdits per la província on es gasta.", correct: false }
    ]
  },
  {
    question: "El pressupost té caràcter limitatiu en:",
    number: 40,
    answers: [
      { text: "Les despeses.", correct: true },
      { text: "Els ingressos.", correct: false },
      { text: "Les subvencions rebudes.", correct: false },
      { text: "Les operacions financeres.", correct: false }
    ]
  },
  {
    question: "Què significa que els crèdits són 'limitatius'?",
    number: 41,
    answers: [
      { text: "Que no es poden realitzar despeses per un import superior al pressupostat.", correct: true },
      { text: "Que s'han de gastar obligatòriament els diners.", correct: false },
      { text: "Que els funcionaris tenen un límit de sou.", correct: false },
      { text: "Que el Parlament pot anul·lar-los quan vulgui.", correct: false }
    ]
  },
  {
    question: "Què s'entén per 'exercici pressupostari'?",
    number: 42,
    answers: [
      { text: "Període de temps que comprèn l'1 de gener al 31 de desembre.", correct: true },
      { text: "Període de quatre anys.", correct: false },
      { text: "El temps que dura la tramitació de la llei.", correct: false },
      { text: "El temps que tarda el govern a gastar els diners.", correct: false }
    ]
  },
  {
    question: "Què recull el Capítol 4 d'ingressos?",
    number: 43,
    answers: [
      { text: "Transferències corrents.", correct: true },
      { text: "Impostos directes.", correct: false },
      { text: "Venda d'inversions reals.", correct: false },
      { text: "Passius financers.", correct: false }
    ]
  },
  {
    question: "Què és el Compte General de la Generalitat?",
    number: 44,
    answers: [
      { text: "Document que recull la situació financera i el resultat de l'exercici.", correct: true },
      { text: "La llei de pressupostos de l'any següent.", correct: false },
      { text: "La llista de sous de tots els alts càrrecs.", correct: false },
      { text: "El pressupost aprovat al Parlament.", correct: false }
    ]
  },
  {
    question: "Com s'anomena la norma que s'aprova anualment juntament amb els pressupostos?",
    number: 45,
    answers: [
      { text: "Llei de mesures fiscals i administratives (Llei d'acompanyament).", correct: true },
      { text: "Llei de la funció pública.", correct: false },
      { text: "Llei de transparència.", correct: false },
      { text: "Decret d'estructura del Govern.", correct: false }
    ]
  },
  {
    question: "Què és un 'crèdit extraordinari'?",
    number: 46,
    answers: [
      { text: "Crèdit per a una despesa nova per a la qual no hi ha crèdit pressupostari.", correct: true },
      { text: "Un crèdit que es dóna al ciutadà.", correct: false },
      { text: "Un crèdit per pagar el sou dels polítics.", correct: false },
      { text: "Un tipus d'estalvi de la Generalitat.", correct: false }
    ]
  },
  {
    question: "Qui autoritza les modificacions de crèdit de gran importància?",
    number: 47,
    answers: [
      { text: "El Parlament de Catalunya.", correct: true },
      { text: "El cap del departament afectat.", correct: false },
      { text: "La Intervenció General directament.", correct: false },
      { text: "El Síndic de Greuges.", correct: false }
    ]
  },
  {
    question: "Què és una 'incorporació de crèdit'?",
    number: 48,
    answers: [
      { text: "Passar crèdits no gastats d'un any a l'any següent.", correct: true },
      { text: "Afegir una partida nova a meitat d'any.", correct: false },
      { text: "Sumar el pressupost d'un ajuntament al de la Generalitat.", correct: false },
      { text: "L'augment del deute públic.", correct: false }
    ]
  },
  {
    question: "Què és l'endeutament?",
    number: 49,
    answers: [
      { text: "Operació financera per obtenir recursos a canvi de retornar-los amb interessos.", correct: true },
      { text: "L'impost sobre el patrimoni.", correct: false },
      { text: "El pagament de les pensions.", correct: false },
      { text: "El càlcul del dèficit fiscal.", correct: false }
    ]
  },
  {
    question: "Què són les despeses de funcionament?",
    number: 50,
    answers: [
      { text: "Despeses necessàries per al desenvolupament de l'activitat ordinària.", correct: true },
      { text: "Inversions en infraestructures.", correct: false },
      { text: "Despeses de personal únicament.", correct: false },
      { text: "Pagaments de deutes antics.", correct: false }
    ]
  },
  {
    question: "Què és un 'exercici tancat'?",
    number: 51,
    answers: [
      { text: "Un exercici pressupostari que ja ha finalitzat.", correct: true },
      { text: "Un pressupost que no es pot modificar.", correct: false },
      { text: "L'any en curs.", correct: false },
      { text: "El pressupost que ha estat rebutjat.", correct: false }
    ]
  },
  {
    question: "Quina és la funció de la classificació territorial?",
    number: 52,
    answers: [
      { text: "Distribuir les despeses per àmbits geogràfics.", correct: true },
      { text: "Classificar els funcionaris per províncies.", correct: false },
      { text: "Determinar el sou dels polítics locals.", correct: false },
      { text: "Agrupar ingressos per tipus d'impost.", correct: false }
    ]
  },
  {
    question: "Què és l'autonomia financera de la Generalitat?",
    number: 53,
    answers: [
      { text: "La capacitat de gestionar els seus propis ingressos i despeses.", correct: true },
      { text: "La capacitat de crear moneda pròpia.", correct: false },
      { text: "La independència total del Ministeri d'Hisenda.", correct: false },
      { text: "L'absència de control per part de l'Estat.", correct: false }
    ]
  },
  {
    question: "Com s'anomena la fase de pagament (P)?",
    number: 54,
    answers: [
      { text: "Materialització de l'obligació mitjançant sortida de diners.", correct: true },
      { text: "Reconeixement de la factura.", correct: false },
      { text: "Reserva de crèdit.", correct: false },
      { text: "Aprovació del pressupost.", correct: false }
    ]
  },
  {
    question: "Què són les 'obligacions reconegudes'?",
    number: 55,
    answers: [
      { text: "Deutes certs i exigibles contrets per l'Administració.", correct: true },
      { text: "Despeses previstes però no realitzades.", correct: false },
      { text: "Els interessos bancaris que paga el ciutadà.", correct: false },
      { text: "Inversions futures.", correct: false }
    ]
  },
  {
    question: "Quina conselleria exerceix la funció de recaptació?",
    number: 56,
    answers: [
      { text: "El Departament d'Economia i Finances (mitjançant l'Agència Tributària de Catalunya).", correct: true },
      { text: "El Departament d'Interior.", correct: false },
      { text: "La Conselleria de Salut.", correct: false },
      { text: "La Presidència.", correct: false }
    ]
  },
  {
    question: "Què és un pressupost d'ingressos 'estimatiu'?",
    number: 57,
    answers: [
      { text: "Que les previsions no tenen un caràcter limitatiu (es pot recaptar més).", correct: true },
      { text: "Que el pressupost es basa en suposicions falses.", correct: false },
      { text: "Que només s'aprova una part del que es vol ingressar.", correct: false },
      { text: "Que el Parlament no té poder sobre aquests ingressos.", correct: false }
    ]
  },
  {
    question: "Què és el deute viu?",
    number: 58,
    answers: [
      { text: "La quantitat total de deute pendent de pagament en un moment determinat.", correct: true },
      { text: "Els interessos que es paguen cada dia.", correct: false },
      { text: "Un tipus d'inversió en borsa.", correct: false },
      { text: "Les despeses de personal de l'any següent.", correct: false }
    ]
  },
  {
    question: "El projecte de llei de pressupostos ha d'anar acompanyat de:",
    number: 59,
    answers: [
      { text: "Informes d'impacte de gènere.", correct: true },
      { text: "L'agenda del President.", correct: false },
      { text: "Un informe sobre el temps de la jornada laboral.", correct: false },
      { text: "Els contractes privats de tots els funcionaris.", correct: false }
    ]
  },
  {
    question: "L'incompliment del límit de crèdit pot suposar:",
    number: 60,
    answers: [
      { text: "Responsabilitat per a qui autoritza la despesa.", correct: true },
      { text: "Un ascens automàtic per al funcionari.", correct: false },
      { text: "Que el pressupost s'esborri.", correct: false },
      { text: "Que l'Estat pagui la diferència.", correct: false }
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