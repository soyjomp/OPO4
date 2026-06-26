const TEST_ID = "pat_a1_interna"; 
const questions = [
  {
    theme: "PAT; A1 COS SUP ADMINISTRACIÓ",
    question: "Treballeu al gabinet tècnic d'un departament i heu d'elaborar un Informe de delimitació de l'economia nacional. D'acord amb els requeriments del SEC 10, s'entén que conformen el territori econòmic:",
    number: 1,
    answers: [
      { text: "La zona (territori geogràfic) solmesa a la gestió i el control efectius d'una administració única.", correct: true },
      { text: "Les parts del territori geogràfic del país utilitzades per les administracions públiques d'altres països.", correct: false },
      { text: "Les parts del territori geogràfic del país utilitzades per institucions i organismes de la Unió Europea.", correct: false },
      { text: "Els enclavaments extraterritorials.", correct: false }
    ]
  },
  {
    theme: "PAT; A1 COS SUP ADMINISTRACIÓ",
    question: "S'ha de designar el secretari/ària del Consell de Seguretat de Catalunya, el qual és:",
    number: 2,
    answers: [
      { text: "L'òrgan encarregat de garantir el dret dels ciutadans a una prestació homogènia dels serveis de seguretat arreu de Catalunya.", correct: false },
      { text: "L'òrgan col·legiat consultiu superior en matèria de coordinació entre la policia de la Generalitat-Mossos d'Esquadra i les policies locals a Catalunya.", correct: false },
      { text: "L'autoritat de la Generalitat que dirigeix la política de seguretat de Catalunya, d'acord amb el Govern.", correct: false },
      { text: "L'òrgan consultiu i de participació superior a Catalunya en matèria de seguretat.", correct: true }
    ]
  },
  {
    theme: "PAT; A1 COS SUP ADMINISTRACIÓ",
    question: "El senyor Climent té previst rebre una notificació en el seu domicili i formula una consulta sobre si el seu fill se'n pot fer càrrec. Quina edat ha de tenir una persona per fer-se càrrec d'una notificació en suport paper practicada en el domicili?",
    number: 3,
    answers: [
      { text: "Major de 16 anys.", correct: false },
      { text: "Major de 18 anys.", correct: false },
      { text: "Major de 14 anys.", correct: true },
      { text: "Major de 21 anys.", correct: false }
    ]
  },
  {
    theme: "PAT; A1 COS SUP ADMINISTRACIÓ",
    question: "El senyor Comas ha rebut la notificació d'una resolució administrativa i es planteja impugnar-la davant la jurisdicció contenciosa administrativa, mitjançant el procediment especial per a la protecció dels drets i llibertats fonamentals, atès que considera que s'ha vulnerat un dret susceptible d'empara. De quin termini disposa per interposar el recurs corresponent?",
    number: 4,
    answers: [
      { text: "Deu dies a comptar des de l'endemà de la notificació de la resolució.", correct: true },
      { text: "Dos mesos a comptar des de l'endemà de la notificació de la resolució.", correct: false },
      { text: "Un mes a comptar des de la data de la resolució.", correct: false },
      { text: "Vint dies a comptar des de la data de la resolució.", correct: false }
    ]
  },
  {
    theme: "PAT; A1 COS SUP ADMINISTRACIÓ",
    question: "Una entitat ecologista vol interposar un recurs contenciós administratiu contra un decret recentment publicat que regula les activitats esportives en el medi natural i es planteja sol·licitar al tribunal competent la suspensió de la vigència dels preceptes que vol impugnar. En quin moment del procés contenciós pot efectuar aquesta petició?",
    number: 5,
    answers: [
      { text: "En qualsevol estat del procés anterior a la sentència.", correct: true },
      { text: "Únicament en l'escrit d'interposició.", correct: false },
      { text: "En l'escrit d'interposició del recurs o en l'escrit de demanda.", correct: false },
      { text: "En el tràmit d'al·legacions prèvies.", correct: false }
    ]
  },
  {
    theme: "PAT; A1 COS SUP ADMINISTRACIÓ",
    question: "Com a ciutadà necessiteu que us emetin un certificat d'eficiència energètica del vostre habitatge. Quin és l'òrgan competent per a la gestió del Registre de certificats d'eficiència energètica dels edificis?",
    number: 6,
    answers: [
      { text: "Agència Catalana d'Energies Renovables.", correct: false },
      { text: "Direcció General d'Energia, Mines i Seguretat Industrial.", correct: false },
      { text: "Institut Català d'Energia (ICAEN).", correct: true },
      { text: "Consorci d'Energia i Eficiència Energètica.", correct: false }
    ]
  },
  {
    theme: "PAT; A1 COS SUP ADMINISTRACIÓ",
    question: "D'accord amb la Llei orgànica 2/2012, de 27 d'abril, d'estabilitat pressupostària i sostenibilitat financera, el volum de l'endeutament públic del conjunt de les Administracions Públiques no podrà superar el volum del 60% del PIB nacional. Com es distribueix aquest percentatge?",
    number: 7,
    answers: [
      { text: "44% per a l'Administració central, 13% per al conjunt de les comunitats autònomes i 3% per al conjunt de les corporacions locals.", correct: true },
      { text: "43% per a l'Administració central, 11% per al conjunt de les comunitats autònomes i 6% per al conjunt de les corporacions locals.", correct: false },
      { text: "47% per a l'Administració central, 10% per al conjunt de les comunitats autònomes i 3% per al conjunt de les corporacions locals.", correct: false },
      { text: "40% per a l'Administració central, 14% per al conjunt de les comunitats autònomes i 6% per al conjunt de les corporacions locals.", correct: false }
    ]
  },
  {
    theme: "PAT; A1 COS SUP ADMINISTRACIÓ",
    question: "El senyor Garcia, notari de la localitat de Sant Feliu de Llobregat, vol comunicar-se amb el Departament de Justícia de la Generalitat per efectuar un tràmit d'un procediment administratiu. De quina manera preveu la normativa que tindrà l'obligació de fer-ho?",
    number: 8,
    answers: [
      { text: "A través del registre d'entrada de qualsevol Departament de la Generalitat.", correct: false },
      { text: "A través del registre d'entrada del Departament de Justícia de la Generalitat.", correct: false },
      { text: "A través de qualsevol oficina de correus.", correct: false },
      { text: "A través de mitjans electrònics.", correct: true }
    ]
  },
  {
    theme: "PAT; A1 COS SUP ADMINISTRACIÓ",
    question: "Quan escau prendre una decisió disposant d'objectius i alternatives clars, informació completa, capacitat il·limitada de processar informació i equanimitat, es segueix el model:",
    number: 9,
    answers: [
      { text: "De racionalitat limitada.", correct: false },
      { text: "Paperera.", correct: false },
      { text: "Incrementalista.", correct: false },
      { text: "Racional.", correct: true }
    ]
  },
  {
    theme: "PAT; A1 COS SUP ADMINISTRACIÓ",
    question: "D'acord amb l'Estatut d'Autonomia de Catalunya, a qui correspon la competència de la gestió del règim econòmic de la seguretat social?",
    number: 10,
    answers: [
      { text: "Exclusiva de la Generalitat de Catalunya.", correct: false },
      { text: "Compartida entre l'Estat i la Generalitat de Catalunya.", correct: false },
      { text: "Compartida entre la Generalitat de Catalunya i les entitats locals.", correct: false },
      { text: "Exclusiva de l'Estat.", correct: true }
    ]
  },
  {
    theme: "PAT; A1 COS SUP ADMINISTRACIÓ",
    question: "Un treballador que ha passat por diferents relacions de caràcter laboral vol saber quina d'aquestes és de caràcter especial d'acord amb l'Estatut dels Treballadors. Què li respondrieu?",
    number: 11,
    answers: [
      { text: "La relació de servei dels funcionaris públics.", correct: false },
      { text: "La dels esportistes professionals.", correct: true },
      { text: "L'activitat per desenvolupar càrrec en òrgans d'administració de les empreses.", correct: false },
      { text: "L'activitat de servei de transport per autorització administrativa.", correct: false }
    ]
  },
  {
    theme: "PAT; A1 COS SUP ADMINISTRACIÓ",
    question: "El vostre departament està lliurant certificats digitals de signatura electrònica que us identifiquen com a personal al servei de la Generalitat de Catalunya. Quin dels següents productes s'ajusta a aquesta definició:",
    number: 12,
    answers: [
      { text: "idCAT.", correct: false },
      { text: "Mobile ID.", correct: false },
      { text: "ERT-CAT.", correct: false },
      { text: "T-CAT.", correct: true }
    ]
  },
  {
    theme: "PAT; A1 COS SUP ADMINISTRACIÓ",
    question: "S'han de publicar al web del teu departament uns llistats de persones i cal que apliquis el principi de proporcionalitat (actualment minimització de dades). En què es tradueix l'aplicació d'aquest principi en aquest supòsit?",
    number: 13,
    answers: [
      { text: "En aquest supòsit preval sempre el principi de publicitat i es publicaran totes les dades identificatives.", correct: false },
      { text: "En donar sempre les mínimes dades que serveixin per a la finalitat i que afectin menys la privacitat.", correct: true },
      { text: "En aquest cas preval el principi de proporcionalitat i es notificarà directament a les persones.", correct: false },
      { text: "El principi de proporcionalitat no es desprèn de la normativa de protecció de dades.", correct: false }
    ]
  },
  {
    theme: "PAT; A1 COS SUP ADMINISTRACIÓ",
    question: "Un funcionari amb destinació definitiva adquireix el grau personal pel fet d'haver ocupat un lloc de treball durant:",
    number: 14,
    answers: [
      { text: "2 anys consecutius.", correct: true },
      { text: "3 anys consecutius.", correct: false },
      { text: "2 anys amb interrupcions.", correct: false },
      { text: "3 anys en qualsevol cas.", correct: false }
    ]
  },
  {
    theme: "PAT; A1 COS SUP ADMINISTRACIÓ",
    question: "El vostre cap us demana que mesureu els valors relatius al nombre de queixes dels usuaris del servei de preinscripció universitària de forma telemàtica i el relacioneu amb el valor de fallades en el sistema. Quin tipus de variables utilitzaríeu per fer-ho?",
    number: 15,
    answers: [
      { text: "Una variable qualitativa i una variable contínua.", correct: false },
      { text: "Dues variables contínues.", correct: false },
      { text: "Una variable discreta i una contínua.", correct: false },
      { text: "Dues variables discretes.", correct: true }
    ]
  },
  {
    theme: "PAT; A1 COS SUP ADMINISTRACIÓ",
    question: "Una directora general exerceix una competència per delegació del secretari general. Si aquesta directora general delega la signatura en un sub-director general, quina situació es produeix?",
    number: 16,
    answers: [
      { text: "No pot delegar la seva signatura per ser competències que li ha delegat el Secretari General.", correct: true },
      { text: "La delegació de signatura altera la competència de l'òrgan delegant però no cal publicar-la.", correct: false },
      { text: "La delegació de signatura no altera la competència de l'òrgan delegant i perquè sigui vàlida no cal publicar-la.", correct: false },
      { text: "En els actes i resolucions que es signen per delegació no és necessari fer constar aquesta circumstància.", correct: false }
    ]
  },
  {
    theme: "PAT; A1 COS SUP ADMINISTRACIÓ",
    question: "Us han encarregat participar en l'elaboració d'un projecte de reglament que afecta les competències de diversos departaments de la Generalitat de Catalunya. D'acord amb la Llei 26/2010, del 3 d'agost, quina autoritat és la competent per aprovar l'ordre d'inici d'aquest procediment normatiu?",
    number: 17,
    answers: [
      { text: "La persona titular del Departament de la Presidència.", correct: false },
      { text: "La persona titular de la Secretaria del Govern.", correct: false },
      { text: "El Govern de la Generalitat, a proposta conjunta dels departaments afectats.", correct: true },
      { text: "La Comissió Jurídica Assessora mitjançant dictamen preceptiu.", correct: false }
    ]
  },
  {
    theme: "PAT; A1 COS SUP ADMINISTRACIÓ",
    question: "En la resolució d'un recurs d'alçada, quin peu de recurs indicaríeu?",
    number: 18,
    answers: [
      { text: "Recurs potestatiu de reposició en el termini d'un mes.", correct: false },
      { text: "Recurs contenciós administratiu i recurs potestatiu de reposició.", correct: false },
      { text: "Recurs contenciós administratiu en el termini de dos mesos.", correct: true },
      { text: "Recurs de súplica.", correct: false }
    ]
  },
  {
    theme: "PAT; A1 COS SUP ADMINISTRACIÓ",
    question: "Com es garanteix l'accés a la justícia per a tots els ciutadans que amb els seus recursos no poden utilitzar el sistema judicial?",
    number: 19,
    answers: [
      { text: "Mitjançant els serveis jurídics de les administracions.", correct: false },
      { text: "Mitjançant el servei de mediació en dret privat prestada pel Departament de Justícia.", correct: false },
      { text: "Mitjançant l'assistència jurídica gratuïta.", correct: true },
      { text: "Mitjançant la resolució judicial d'imposició de costes.", correct: false }
    ]
  },
  {
    theme: "PAT; A1 COS SUP ADMINISTRACIÓ",
    question: "El Departament de Salut ha de proveir un lloc de treball mitjançant un sistema extraordinari de provisió. Quina d'aquestes formes no podrà utilitzar?",
    number: 20,
    answers: [
      { text: "Comissió de serveis.", correct: false },
      { text: "Lliure designació.", correct: true },
      { text: "Encàrrec de funcions.", correct: false },
      { text: "Permuta de llocs de treball.", correct: false }
    ]
  },
  {
    theme: "PAT; A1 COS SUP ADMINISTRACIÓ",
    question: "En el decurs de la implementació d'un tràmit electrònic, la unitat responsable d'administració electrònica del vostre departament us recorda que cal respectar el principi de neutralitat tecnològica. Què implica l'aplicació d'aquest principi?",
    number: 21,
    answers: [
      { text: "Les entitats del sector públic han de permetre l'ús dels mitjans electrònics independentment de les opcions tecnològiques escollides pels destinataris i han de promoure l'ús d'estàndards oberts.", correct: true },
      { text: "Les entitats del sector públic han de garantir que l'ús dels mitjans electrònics no ocasioni discriminacions per raó del mitjà emprat o per raó de les discapacitats o les dificultats especials dels destinataris d'aquestes.", correct: false },
      { text: "Les entitats del sector públic han de treballar en comú, compartir estratègies, generar solucions organitzatives i tecnològiques comunes, i també garantir la interoperabilitat de llurs sistemes d'informació.", correct: false },
      { text: "Les entitats del sector públic han de facilitar que l'ús dels mitjans electrònics pels ciutadans les faci més properes i adaptades a llurs necessitats, i redueixin costos i càrregues.", correct: false }
    ]
  },
  {
    theme: "PAT; A1 COS SUP ADMINISTRACIÓ",
    question: "En el marc de la implementació de serveis de col·laboració interadministrativa s'empra la Plataforma d'Integració i Col·laboració Administrativa (PICA). Quin dels serveis següents no troba cobertura per aquesta plataforma?",
    number: 22,
    answers: [
      { text: "Serveis d'interoperabilitat o intercanvi d'informació entre organitzacions, administracions i institucions.", correct: false },
      { text: "Serveis de tramitació electrònica que facilitin la integració dels portals de tràmits amb les aplicacions departamentals.", correct: false },
      { text: "Serveis comuns d'administració electrònica que facilitin l'accés a funcionalitats transversals necessàries per al desenvolupament de l'administració electrònica.", correct: false },
      { text: "Serveis de front i backoffice per a tràmits virtuals corporatius i departamentals, amb eines de desenvolupament de formularis electrònics.", correct: true }
    ]
  },
  {
    theme: "PAT; A1 COS SUP ADMINISTRACIÓ",
    question: "Treballeu a la Direcció General de Transports i heu rebut queixes dels usuaris del transport públic interurbà per carretera perquè el temps d'espera és molt elevat. El vostre cap us demana que calculeu la moda dels temps d'espera dels darrers 15 dies: 4, 6, 7, 3, 1, 0, 8, 2, 2, 1, 2, 4, 5, 6, 3 (minuts de retard). Quin és el resultat?",
    number: 23,
    answers: [
      { text: "4.", correct: false },
      { text: "7.", correct: false },
      { text: "2.", correct: true },
      { text: "5.", correct: false }
    ]
  },
  {
    theme: "PAT; A1 COS SUP ADMINISTRACIÓ",
    question: "En el marc de la protecció dels espais naturals a Catalunya, el Departament competent en medi ambient vol iniciar els tràmits per declarar un nou 'Parc Natural'. D'acord amb la normativa aplicable, quin rang formal ha de tenir l'acte de declaració d'aquesta figura de protecció?",
    number: 24,
    answers: [
      { text: "S'ha d'aprovar mitjançant una Llei del Parlament de Catalunya.", correct: false },
      { text: "S'ha d'aprovar mitjançant un Decret del Govern de la Generalitat.", correct: true },
      { text: "S'ha d'aprovar mitjançant una Ordre del conseller o consellera del departament competent.", correct: false },
      { text: "S'ha d'aprovar mitjançant Resolució de la Direcció General de Polítiques Ambientals i Medi Natural.", correct: false }
    ]
  },
  {
    theme: "PAT; A1 COS SUP ADMINISTRACIÓ",
    question: "Esteu elaborant la proposta de resolució d'un recurs extraordinari de revisió contra un acte ferm en via administrativa, fonamentat en què en dictar-lo s'ha incorregut en error de fet, que resulta dels mateixos documents incorporats a l'expedient. Quina de les actuacions següents considereu procedent?",
    number: 25,
    answers: [
      { text: "Acordar motivadament la inadmissió a tràmit.", correct: false },
      { text: "Resoldre sense la necessitat de sol·licitar un dictamen de l'òrgan consultiu de la comunitat autònoma.", correct: false },
      { text: "Demanar informe al Gabinet Jurídic, que serà vinculant.", correct: false },
      { text: "Demanar dictamen a la Comissió Jurídica Assessora.", correct: true }
    ]
  },
  {
    theme: "PAT; A1 COS SUP ADMINISTRACIÓ",
    question: "La senyora Sabater ha presentat una reclamació de responsabilitat patrimonial davant del Departament de Territori i Sostenibilitat i ja han transcorregut sis mesos des que es va iniciar el procediment sense que li hagi estat notificada la resolució corresponent. En aquest cas, quins efectes produeix la manca de resolució?",
    number: 26,
    answers: [
      { text: "La caducitat de l'expedient i l'arxiu de les actuacions.", correct: false },
      { text: "Es pot entendre que la resolució és contrària a la indemnització.", correct: true },
      { text: "L'inici del termini de prescripció del dret a reclamar.", correct: false },
      { text: "Es pot entendre que la resolució és estimatòria de la reclamació.", correct: false }
    ]
  },
  {
    theme: "PAT; A1 COS SUP ADMINISTRACIÓ",
    question: "En l'anàlisi de l'estat d'ingressos del pressupost de la Generalitat de Catalunya i d'acord amb la normativa estatal vigent de finançament de les comunitats autònomes de règim comú, quin dels següents tributs estatals té cedit el seu rendiment a la Generalitat en un percentatge del 50%?",
    number: 27,
    answers: [
      { text: "L'Impost sobre Successions i Donacions.", correct: false },
      { text: "L'Impost sobre el Valor Afegit (IVA).", correct: true },
      { text: "L'Impost sobre la Renda de les Persones Físiques (IRPF).", correct: false },
      { text: "L'Impost sobre Transmissions Patrimonials i Actes Jurídics Documentats.", correct: false }
    ]
  },
  {
    theme: "PAT; A1 COS SUP ADMINISTRACIÓ",
    question: "En l'exercici de les seves competències, un òrgan administratiu ha d'encarregar a un altre òrgan la realització d'activitats de caràcter material o tècnic de la seva competència. Quan es poden realitzar aquests encàrrecs de gestió?",
    number: 28,
    answers: [
      { text: "Sempre que entre les seves competències hi hagi aquestes activitats, per raons d'eficàcia o quan no es posseeixin els mitjans tècnics idonis per exercir-les.", correct: true },
      { text: "Sempre que les competències d'ambdós òrgans comprenguin aquestes activitats.", correct: false },
      { text: "Sempre que entre les seves competències hi hagi aquestes activitats, per raons d'eficiència.", correct: false },
      { text: "Només quan no es posseeixin els mitjans tècnics idonis per exercir-les.", correct: false }
    ]
  },
  {
    theme: "PAT; A1 COS SUP ADMINISTRACIÓ",
    question: "El 3 de febrer de 2017, divendres, s'ha publicat un anunci en el DOGC que concedeix el termini d'un mes a l'interessat per comparèixer. Quan conclou aquest termini?",
    number: 29,
    answers: [
      { text: "El 6 de març de 2017, dilluns.", correct: true },
      { text: "El 3 de març de 2017, divendres.", correct: false },
      { text: "El 2 de març de 2017, dijous.", correct: false },
      { text: "El 4 de març de 2017, dissabte.", correct: false }
    ]
  },
  {
    theme: "PAT; A1 COS SUP ADMINISTRACIÓ",
    question: "El Gabinet tècnic del Departament de Cultura prepara la defensa del pressupost del departament davant del Parlament. Com es desagrega la classificació econòmica del pressupost de la Generalitat de Catalunya?",
    number: 30,
    answers: [
      { text: "Capítol, Article, Concepte.", correct: true },
      { text: "Programa, Capítol, Article.", correct: false },
      { text: "Programa, Capítol, Secció.", correct: false },
      { text: "Capítol, Programa, Article.", correct: false }
    ]
  },
  {
    theme: "PAT; A1 COS SUP ADMINISTRACIÓ",
    question: "Un treballador utilitza indegudament la documentació o informació a què ha tingut accés per raó de la seva funció. Segons l'Estatut Bàsic de l'Empleat Públic, quina falta ha comès?",
    number: 31,
    answers: [
      { text: "Una falta greu.", correct: true },
      { text: "No és una falta.", correct: false },
      { text: "Una falta lleu.", correct: false },
      { text: "Una falta molt greu.", correct: false }
    ]
  },
  {
    theme: "PAT; A1 COS SUP ADMINISTRACIÓ",
    question: "Esteu treballant a l'Agència Catalana de Consum i heu rebut diverses consultes en relació a l'arbitratge de consum. Quines característiques té l'arbitratge en consum?",
    number: 32,
    answers: [
      { text: "Vinculant i executiu.", correct: true },
      { text: "No vinculant i subjectiu.", correct: false },
      { text: "Obligatori i de pagament.", correct: false },
      { text: "Obligatori i no vinculant.", correct: false }
    ]
  },
  {
    theme: "PAT; A1 COS SUP ADMINISTRACIÓ",
    question: "Esteu treballant en l'àmbit d'Universitats i Recerca. L'Agència per a la Qualitat del Sistema Universitari (AQU) s'encarrega de:",
    number: 33,
    answers: [
      { text: "L'avaluació de la docència, la recerca, la transferència de coneixement i la gestió del sistema universitari.", correct: true },
      { text: "La direcció de la consolidació del sistema universitari català a l'espai europeu d'educació superior.", correct: false },
      { text: "L'execució de programes de beques, de préstecs, de subvencions i d'altres activitats de foment de l'estudi universitari, de la recerca científica / tècnica i de la innovació tecnològica a Catalunya.", correct: false },
      { text: "L'actuació en matèria d'ordenació curricular i innovació del sistema educatiu.", correct: false }
    ]
  },
  {
    theme: "PAT; A1 COS SUP ADMINISTRACIÓ",
    question: "Esteu fent un màster de finançament de la hisenda autonòmica i local. Indiqueu a què es destina el Fons de Compensació Interterritorial d'acord amb la Llei 22/2001, de 27 de desembre?",
    number: 34,
    answers: [
      { text: "A finançar despeses financeres en els territoris que promoguin directament o indirecta la creació de renda i riquesa.", correct: false },
      { text: "A finançar despeses d'inversió en els territoris comparativament menys desenvolupats, que promoguin directament o indirecta la creació de renda i riquesa.", correct: true },
      { text: "A finançar despesa corrent i d'inversió en els territoris comparativament menys desenvolupats, que promoguin directament o indirecta la creació de renda i riquesa.", correct: false },
      { text: "A finançar despesa corrent en els territoris comparativament menys desenvolupats, que promoguin directament o indirecta la creació de renda i riquesa.", correct: false }
    ]
  },
  {
    theme: "PAT; A1 COS SUP ADMINISTRACIÓ",
    question: "El Tribunal Superior de Justícia de Catalunya ha anul·lat diversos articles d'un reglament arran d'un recurs contenciós administratiu interposat per una associació professional i la sentència ja és ferma. A partir de quin moment la sentència té efectes generals?",
    number: 35,
    answers: [
      { text: "Des del dia que es publica la part dispositiva de la sentència i els preceptes anul·lats en el diari oficial corresponent.", correct: true },
      { text: "Des del dia que es declara la fermesa de la sentència.", correct: false },
      { text: "Des del dia que es notifica la sentència a totes les parts personades.", correct: false },
      { text: "A partir de la data de la sentència.", correct: false }
    ]
  },
  {
    theme: "PAT; A1 COS SUP ADMINISTRACIÓ",
    question: "Presteu serveis en una unitat de recursos humans i un cap de servei us pregunta quant temps pot romandre un funcionari en situació administrativa d'expectativa de destinació.",
    number: 36,
    answers: [
      { text: "Un mínim d'un any.", correct: false },
      { text: "Un mínim de dos anys.", correct: false },
      { text: "Un màxim d'un any.", correct: true },
      { text: "Un màxim de dos anys.", correct: false }
    ]
  },
  {
    theme: "PAT; A1 COS SUP ADMINISTRACIÓ",
    question: "La vostra unitat rep la sol·licitud d'emissió d'informe o dictamen per a la tramitació d'un projecte de disposició reglamentària. Segons la Llei 26/2010, del 3 d'agost, de quin termini disposa la unitat per emetre'l a partir de l'endemà de rebre la sol·licitud?",
    number: 37,
    answers: [
      { text: "3 mesos.", correct: false },
      { text: "1 mes.", correct: false },
      { text: "15 dies.", correct: false },
      { text: "10 dies.", correct: true }
    ]
  },
  {
    theme: "PAT; A1 COS SUP ADMINISTRACIÓ",
    question: "La Generalitat de Catalunya vol concertar una operació de crèdit per un termini superior a un any. A què s'ha de destinar l'import total d'aquest crèdit d'acord amb la normativa de finançament i estabilitat pressupostària?",
    number: 38,
    answers: [
      { text: "Exclusivament a despesa d'inversió i financera.", correct: false },
      { text: "Exclusivament a despesa corrent.", correct: false },
      { text: "Exclusivament a despesa financera.", correct: false },
      { text: "Exclusivament a despesa d'inversió.", correct: true }
    ]
  },
  {
    theme: "PAT; A1 COS SUP ADMINISTRACIÓ",
    question: "Un ciutadà vol fer una consulta a l'Oficina Antifrau de Catalunya i en desconeix l'adscripció. Quina és aquesta adscripció?",
    number: 39,
    answers: [
      { text: "Parlament de Catalunya.", correct: true },
      { text: "Sindicatura de Comptes.", correct: false },
      { text: "Ministeri Fiscal.", correct: false },
      { text: "Departament de la Presidència.", correct: false }
    ]
  },
  {
    theme: "PAT; A1 COS SUP ADMINISTRACIÓ",
    question: "El Ministeri d'Assumptes Exteriors està en fase de negociació d'un tractat internacional i, un cop examinat per part dels òrgans competents de la Generalitat, es comprova que el contingut del seu clausulat afecta directament i singularment a Catalunya. D'acord amb l'Estatut d'Autonomia, davant aquesta circumstància, la Generalitat:",
    number: 40,
    answers: [
      { text: "Podrà assumir la responsabilitat de la delegació negociadora.", correct: false },
      { text: "Podrà sol·licitar del Govern que integri en les delegacions negociadores a representants de la Generalitat.", correct: true },
      { text: "Està representada de forma permanent en totes les delegacions negociadores dels tractats internacionals que formalitza l'Estat espanyol.", correct: false },
      { text: "Podrà assumir la responsabilitat de la delegació negociadora sempre que es constati que el tractat afecta singularment i directament les competències de la Generalitat o al territori de Catalunya.", correct: false }
    ]
  },
  {
    theme: "PAT; A1 COS SUP ADMINISTRACIÓ",
    question: "D'acord amb el Decret Legislatiu 3/2002, de 24 de desembre, pel qual s'aprova la Llei de finances públiques de Catalunya, qui té la responsabilitat de formar el Compte General de la Generalitat?",
    number: 41,
    answers: [
      { text: "La Sindicatura de Comptes.", correct: false },
      { text: "La Direcció General de Pressupostos.", correct: false },
      { text: "La Intervenció General de la Generalitat.", correct: true },
      { text: "El Govern de la Generalitat.", correct: false }
    ]
  },
  {
    theme: "PAT; A1 COS SUP ADMINISTRACIÓ",
    question: "Per la comissió d'un delicte lleu un òrgan judicial ha imposat una mesura penal alternativa a la pena privativa de llibertat. Quina de les següents finalitats no és una de les característiques de les mesures penals alternatives?",
    number: 42,
    answers: [
      { text: "El rescabalament del dany causat.", correct: false },
      { text: "Els aspectes relacionats amb la prevenció general i especial de la pena.", correct: false },
      { text: "L'element retributiu de la pena.", correct: true },
      { text: "La finalitat educativa i integradora de la pena.", correct: false }
    ]
  },
  {
    theme: "PAT; A1 COS SUP ADMINISTRACIÓ",
    question: "Una persona que és part interessada en unes actuacions d'investigació que està duent a terme l'Oficina Antifrau de Catalunya que es qualifiquen de molta complexitat, formula una consulta sobre el termini màxim que aquestes actuacions poden durar. Indiqueu el termini esmentat:",
    number: 43,
    answers: [
      { text: "6 mesos.", correct: false },
      { text: "1 any.", correct: true },
      { text: "3 mesos.", correct: false },
      { text: "9 mesos.", correct: false }
    ]
  },
  {
    theme: "PAT; A1 COS SUP ADMINISTRACIÓ",
    question: "Un interessat en un procediment actua per mitjà de representant. En quin dels següents supòsits es presumeix la representació?",
    number: 44,
    answers: [
      { text: "Actes i gestions de mer tràmit.", correct: true },
      { text: "Interposició de recursos.", correct: false },
      { text: "Desistiment d'accions.", correct: false },
      { text: "Formulació de sol·licituds.", correct: false }
    ]
  },
  {
    theme: "PAT; A1 COS SUP ADMINISTRACIÓ",
    question: "En el marc d'un procediment administratiu comú, l'òrgan competent requereix a l'interessat perquè esmeni la seva sol·licitud. Transcorregut el termini corresponent no l'ha esmenada. En aquest cas escau, mitjançant resolució:",
    number: 45,
    answers: [
      { text: "Tenir-lo per desistit.", correct: true },
      { text: "Declarar la caducitat.", correct: false },
      { text: "Declarar que renuncia al dret.", correct: false },
      { text: "Declarar la desaparició sobrevinguda de l'objecte.", correct: false }
    ]
  },
  {
    theme: "PAT; A1 COS SUP ADMINISTRACIÓ",
    question: "El Servei de Gestió Econòmica d'un departament analitza l'estructura dels pressupostos del sector públic. D'acord amb el Decret Legislatiu 3/2002, de finances públiques de Catalunya, els crèdits autoritzats en els estats de despeses de l'Administració de la Generalitat i dels seus organismes autònoms administratius tenen caràcter:",
    number: 46,
    answers: [
      { text: "Limitatiu i vinculant, i no es poden adquirir compromisos de despesa per quantia superior al seu import.", correct: true },
      { text: "Estimatiu i orientatiu, adaptant-se a les necessitats reals de la gestió de l'exercici.", correct: false },
      { text: "Ampliables de forma automàtica mitjançant transferències de crèdit entre diferents seccions.", correct: false },
      { text: "Limitatiu només pel que fa als capítols de despeses de personal i despeses corrents.", correct: false }
    ]
  },
  {
    theme: "PAT; A1 COS SUP ADMINISTRACIÓ",
    question: "En la vostra unitat es rep una sol·licitud d'exercici de dret de cancel·lació (supressió) de dades de caràcter personal. Quan es poden cancel·lar les dades personals tractades per l'Administració de la Generalitat?",
    number: 47,
    answers: [
      { text: "Quan ho sol·licita el titular de les dades en qualsevol moment.", correct: false },
      { text: "Les dades corresponents a expedients administratius no es poden cancel·lar.", correct: false },
      { text: "Quan s'ha complert la finalitat del tractament i cap norma obliga a conservar-les.", correct: true },
      { text: "Quan finalitza el procediment i ja no hi ha cap recurs possible, sempre que ho demani el titular de les dades.", correct: false }
    ]
  },
  {
    theme: "PAT; A1 COS SUP ADMINISTRACIÓ",
    question: "Esteu elaborant la memòria del Centre d'Atenció i Gestió de Trucades d'Urgència 112 Catalunya i heu de fer constar la seva naturalesa jurídica. Aquesta és:",
    number: 48,
    answers: [
      { text: "És una unitat directiva del Departament d'Interior.", correct: false },
      { text: "És una societat pública de la Generalitat de Catalunya adscrita al Departament de la Presidència.", correct: false },
      { text: "És una entitat autònoma de caràcter administratiu adscrita al Departament de Governació, Administracions Públiques i Habitatge.", correct: false },
      { text: "És una entitat de dret públic amb personalitat jurídica pròpia adscrita al Departament d'Interior.", correct: true }
    ]
  },
  {
    theme: "PAT; A1 COS SUP ADMINISTRACIÓ",
    question: "En l'àmbit del procediment administratiu comú, el titular de l'òrgan en què presteu serveis ha adoptat mesures provisionals per raons d'urgència. En quin termini s'ha d'efectuar l'acord d'iniciació del procediment?",
    number: 49,
    answers: [
      { text: "En els 15 dies següents a l'adopció de les mesures cautelars.", correct: true },
      { text: "En els 10 dies següents a l'adopció de les mesures cautelars.", correct: false },
      { text: "En els 20 dies següents a l'adopció de les mesures cautelars.", correct: false },
      { text: "En els 5 dies següents a l'adopció de les mesures cautelars.", correct: false }
    ]
  },
  {
    theme: "PAT; A1 COS SUP ADMINISTRACIÓ",
    question: "Heu presentat una sol·licitud per treballar al Departament de la Vicepresidència, Economia i Hisenda i una de les tasques que consten a l'oferta de treball és la verificació de la comptabilitat pública. D'acord amb el Decret Legislatiu 3/2002, de 24 de desembre, per quins dels següents òrgans resta sotmesa a verificació la comptabilitat pública de la Generalitat?",
    number: 50,
    answers: [
      { text: "La Intervenció General, la Sindicatura de Comptes i el Tribunal de Cuentas.", correct: true },
      { text: "Per l'empresa auditora autoritzada pel Govern de Catalunya.", correct: false },
      { text: "La Intervenció General de l'Administració de l'Estat.", correct: false },
      { text: "Pel Síndic de Greuges.", correct: false }
    ]
  },
  {
    theme: "PAT; A1 COS SUP ADMINISTRACIÓ",
    question: "S'entén que un procediment no s'inicia d'ofici quan:",
    number: 51,
    answers: [
      { text: "Es produeix una denúncia.", correct: false },
      { text: "Hi ha una sol·licitud de l'interessat.", correct: true },
      { text: "A iniciativa de l'òrgan competent.", correct: false },
      { text: "El superior jeràrquic ho impulsa.", correct: false }
    ]
  },
  {
    theme: "PAT; A1 COS SUP ADMINISTRACIÓ",
    question: "La doctrina que atribueix a la jurisdicció contenciosa administrativa el coneixement dels aspectes administratius que es puguin donar en la contractació privada de les administracions públiques s'anomena:",
    number: 52,
    answers: [
      { text: "Doctrina dels actes successius.", correct: false },
      { text: "Teoria de les seccions.", correct: false },
      { text: "Doctrina dels actes separables.", correct: true },
      { text: "Teoria de l'absorció.", correct: false }
    ]
  },
  {
    theme: "PAT; A1 COS SUP ADMINISTRACIÓ",
    question: "S'ha de dur a terme el control tàctic d'una política pública d'estalvi energètic. És per això que escau analitzar:",
    number: 53,
    answers: [
      { text: "Els objectius fixats i els objectius obtinguts.", correct: false },
      { text: "L'impacte general de la política pública mitjançant els indicadors fixats.", correct: false },
      { text: "Els programes, els pressupostos i els objectius operatius.", correct: true },
      { text: "Únicament la despesa generada per l'aplicació de la política.", correct: false }
    ]
  },
  {
    theme: "PAT; A1 COS SUP ADMINISTRACIÓ",
    question: "L'empresa del sector de les energies renovables per a la qual treballeu ha participat en un concurs per a la instal·lació d'un parc solar. Quin serà l'òrgan competent per dirigir l'estudi d'impacte ambiental?",
    number: 54,
    answers: [
      { text: "El Departament d'Empresa i Coneixement.", correct: false },
      { text: "L'ICAEN.", correct: false },
      { text: "El Departament de Territori i Sostenibilitat.", correct: true },
      { text: "El Departament d'Agricultura, Ramaderia, Pesca i Alimentació.", correct: false }
    ]
  }
];

// -------------------------
// UTIL: SHUFFLE
// -------------------------
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// -------------------------
// ESTADO GLOBAL
// -------------------------
let activeQuestions = [];
let currentIndex = 0;
let correctCount = 0;
let incorrectCount = 0;
let hasAnswered = false;
let originalTotal = 0; // 🔥 NUEVO: Guarda el total real del test al empezar

const REAPEAR_OFFSET = 3;

// -------------------------
// DOM
// -------------------------
const quizCard = document.getElementById('quiz-card');
const themeHeaderContainer = document.getElementById('theme-header-container');
const globalThemeTitle = document.getElementById('global-theme-title');
const resultsCard = document.getElementById('results-card');
const scoreboard = document.getElementById('scoreboard');

const displayTestId = document.getElementById('display-test-id');
const currentIdxTxt = document.getElementById('current-index');
const totalQuestionsTxt = document.getElementById('total-questions');
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const topRestartBtn = document.getElementById('top-restart-btn');

const liveCorrect = document.getElementById('live-correct');
const liveIncorrect = document.getElementById('live-incorrect');
const liveRemaining = document.getElementById('live-remaining');

// -------------------------
// INIT
// -------------------------
function initTest(forceRestart = false) {

  const saved = loadProgress();

  // 🔥 CONTINUAR TEST
  if (!forceRestart && saved) {
    showUI();
    showQuestion();
    return;
  }

  // 🔥 REINICIO TOTAL
  currentIndex = 0;
  correctCount = 0;
  incorrectCount = 0;

  activeQuestions = shuffleArray(questions).map(q => ({
    ...q,
    answers: shuffleArray(q.answers)
  }));
  
  // 🔥 NUEVO: Guardamos cuántas preguntas tiene el test original antes de cualquier fallo
  originalTotal = activeQuestions.length;

  saveProgress();

  showUI();
  showQuestion();
}

// -------------------------
// UI BASE
// -------------------------
function showUI() {
  displayTestId.textContent = TEST_ID;

  quizCard.style.display = 'block';
  themeHeaderContainer.style.display = 'block';
  scoreboard.style.display = 'flex';
  resultsCard.style.display = 'none';

  updateScoreboard();
}

// -------------------------
// SCOREBOARD
// -------------------------
function updateScoreboard() {
  // 🔥 FIJADO: Ahora muestra siempre el total inicial fijo
  totalQuestionsTxt.textContent = originalTotal; 
  liveCorrect.textContent = correctCount;
  liveIncorrect.textContent = incorrectCount;

  // 🔥 FIJADO: Calculamos el progreso real sobre el total original.
  // "currentIndex" representa cuántas preguntas del flujo principal ha ido superando.
  let answered = currentIndex + (hasAnswered ? 1 : 0);
  
  // Las restantes bajan de manera estricta basándose en el total original.
  let remaining = originalTotal - answered;

  liveRemaining.textContent = Math.max(0, remaining);
}

// -------------------------
// PREGUNTA
// -------------------------
function showQuestion() {
  hasAnswered = false;
  nextBtn.style.display = 'none';
  answersContainer.innerHTML = '';

  const q = activeQuestions[currentIndex];

  currentIdxTxt.textContent = currentIndex + 1;
  questionText.textContent = q.question;
  globalThemeTitle.textContent = q.theme || "TEMA GENERAL";

  q.answers.forEach(ans => {
    const btn = document.createElement('button');
    btn.classList.add('answer-btn');
    btn.textContent = ans.text;
    btn.dataset.correct = ans.correct;
    btn.onclick = selectAnswer;
    answersContainer.appendChild(btn);
  });

  updateScoreboard();
}

// -------------------------
// RESPUESTA
// -------------------------
function selectAnswer(e) {
  if (hasAnswered) return;
  hasAnswered = true;

  const btn = e.target;
  const correct = btn.dataset.correct === 'true';

  if (correct) {
    btn.classList.add('correct');
    correctCount++;
  } else {
    btn.classList.add('incorrect');
    incorrectCount++;

    Array.from(answersContainer.children).forEach(b => {
      if (b.dataset.correct === 'true') b.classList.add('correct');
    });

    // 🔥 REPASO ERROR (Se sigue insertando al final para repasar, pero ya no rompe los contadores)
    const duplicated = {
      ...activeQuestions[currentIndex],
      answers: shuffleArray(activeQuestions[currentIndex].answers)
    };

    const target = currentIndex + REAPEAR_OFFSET + 1;

    if (target >= activeQuestions.length) {
      activeQuestions.push(duplicated);
    } else {
      activeQuestions.splice(target, 0, duplicated);
    }
  }

  Array.from(answersContainer.children).forEach(b => b.disabled = true);

  updateScoreboard();
  nextBtn.style.display = 'block';

  saveProgress();
}

// -------------------------
// SIGUIENTE
// -------------------------
nextBtn.onclick = () => {
  currentIndex++;

  if (currentIndex >= activeQuestions.length) {
    showResults();
    return;
  }

  saveProgress();
  showQuestion();
};

// -------------------------
// RESULTADOS
// -------------------------
function showResults() {
  clearProgress();

  quizCard.style.display = 'none';
  themeHeaderContainer.style.display = 'none';
  scoreboard.style.display = 'none';
  resultsCard.style.display = 'block';

  document.getElementById('final-correct').textContent = correctCount;
  document.getElementById('final-incorrect').textContent = incorrectCount;
}

// -------------------------
// REINICIO
// -------------------------
restartBtn.onclick = () => {
  clearProgress();
  initTest(true);
};

topRestartBtn.onclick = () => {
  clearProgress();
  initTest(true);
};

// -------------------------
// STORAGE
// -------------------------
function saveProgress() {
  localStorage.setItem(
    `test_progress_${TEST_ID}`,
    JSON.stringify({
      currentIndex,
      correctCount,
      incorrectCount,
      activeQuestions,
      originalTotal // 🔥 NUEVO: Guardamos el total original en LocalStorage
    })
  );
}

function loadProgress() {
  const saved = localStorage.getItem(`test_progress_${TEST_ID}`);
  if (!saved) return false;

  const data = JSON.parse(saved);

  currentIndex = data.currentIndex;
  correctCount = data.correctCount;
  incorrectCount = data.incorrectCount;
  activeQuestions = data.activeQuestions;
  originalTotal = data.originalTotal || data.activeQuestions.length; // 🔥 NUEVO: Recuperamos el total original

  return true;
}

function clearProgress() {
  localStorage.removeItem(`test_progress_${TEST_ID}`);
}

// -------------------------
// START (IMPORTANTE)
// -------------------------
document.addEventListener("DOMContentLoaded", () => {
  initTest();
});