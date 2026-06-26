const TEST_ID = "2024_c1_lliure";
const questions = [
  {
    theme: "2024; C1 TORN LLIURE",
    question: "D'acord amb la Constitució espanyola, són drets fonamentals de les persones:",
    number: 1,
    answers: [
      { text: "El dret a la vida i a la integritat física i moral, i el dret a la propietat privada i a l'herència.", correct: false },
      { text: "El dret a la vida i a la integritat física i moral, el dret a l'honor i a la intimitat personal i familiar i a la pròpia imatge.", correct: true },
      { text: "El dret al treball i el dret a la vida i a la integritat física i moral.", correct: false },
      { text: "El dret a la protecció de la salut i el dret a la llibertat i a la seguretat.", correct: false }
    ]
  },
  {
    theme: "2024; C1 TORN LLIURE",
    question: "El recurs d'empara per a la tutela de les llibertats i dels drets fonamentals reconeguts a la Constitució espanyola, davant de qui s'ha d'interposar?",
    number: 2,
    answers: [
      { text: "Del Tribunal Suprem.", correct: false },
      { text: "Del Tribunal de Justícia de la Unió Europea.", correct: false },
      { text: "Del Tribunal Constitucional.", correct: true },
      { text: "Del Tribunal Superior de Justícia de la seva comunitat autònoma.", correct: false }
    ]
  },
  {
    theme: "2024; C1 TORN LLIURE",
    question: "Per a exercir el dret constitucional de reunió en llocs de trànsit públic i de manifestar-se...",
    number: 3,
    answers: [
      { text: "No cal, en cap cas, una autorització prèvia ni comunicar-ho a l'autoritat.", correct: false },
      { text: "No cal comunicar-ho prèviament a l'autoritat si la reunió o manifestació és pacífica i sense armes.", correct: false },
      { text: "Cal comunicar-ho prèviament a l'autoritat, la qual pot prohibir-ho de manera discrecional.", correct: false },
      { text: "Cal comunicar-ho prèviament a l'autoritat, la qual només pot prohibir-ho quan hi hagi motius fonamentats d'alteració de l'ordre públic, amb perill per a persones o béns.", correct: true }
    ]
  },
  {
    theme: "2024; C1 TORN LLIURE",
    question: "D'acord amb l'Estatut d'autonomia de Catalunya, en les relacions amb les institucions, les organitzacions i les administracions públiques a Catalunya totes les persones...",
    number: 4,
    answers: [
      { text: "Tenen l'obligació d'utilitzar la llingua catalana.", correct: false },
      { text: "S'han d'adequar a la llengua en què se'ls adreci el personal funcionari que les atén.", correct: false },
      { text: "Tenen dret a utilitzar la llengua oficial que elegeixin.", correct: true },
      { text: "Tenen el dret a utilitzar la llengua catalana, llevat que es tracti de l'Administració de justícia.", correct: false }
    ]
  },
  {
    theme: "2024; C1 TORN LLIURE",
    question: "D'acord amb l'Estatut d'autonomia de Catalunya, quines potestats i funcions corresponen a la Generalitat en l'àmbit de les seves competències exclusives?",
    number: 5,
    answers: [
      { text: "De manera íntegra la potestat legislativa, la potestat reglamentària i la funció executiva.", correct: true },
      { text: "De manera íntegra la potestat reglamentària i la funció executiva i la funció judicial.", correct: false },
      { text: "De forma compartida amb l'Estat la potestat legislativa i la potestat reglamentària, i, de manera íntegra, la funció executiva i la funció judicial.", correct: false },
      { text: "De manera íntegra la potestat legislativa i la potestat reglamentària, i, de forma compartida amb l'Estat, la funció executiva i la funció judicial.", correct: false }
    ]
  },
  {
    theme: "2024; C1 TORN LLIURE",
    question: "D'acord amb l'Estatut d'autonomia de Catalunya i les lleis, quines són les funcions i potestats que exerceix el Govrn de la Generalitat?",
    number: 6,
    answers: [
      { text: "La funció legislativa, la funció executiva i la potestat reglamentària.", correct: false },
      { text: "La funció legislativa i la potestat reglamentària.", correct: false },
      { text: "La funció executiva i la potestat reglamentària.", correct: true },
      { text: "La funció executiva i la funció judicial.", correct: false }
    ]
  },
  {
    theme: "2024; C1 TORN LLIURE",
    question: "Què és una carta de serveis?",
    number: 7,
    answers: [
      { text: "Una eina de gestió de la qualitat per millorar l'activitat de prestació pública i un instrument de comunicació a través del qual l'Administració informa la ciutadania dels serveis que li ofereix.", correct: true },
      { text: "Una eina de gestió interna dels empleats públics, per avaluar els serveis que l'Administració presta a la ciutadania.", correct: false },
      { text: "Un conjunt de documents que recullen les funcions i les tasques que corresponen a una unitat administrativa.", correct: false },
      { text: "Un conjunt d'escrits que l'Administració adreça a la ciutadania per informar-la dels serveis que ofereix, dels requisits per tenir-hi accés i de les unitats administratives que els presten.", correct: false }
    ]
  },
  {
    theme: "2024; C1 TORN LLIURE",
    question: "D'acord amb la Llei 19/2014, del 29 de desembre, de transparència, accés a la informació pública i bon govern, què s'entén per bon govern?",
    number: 8,
    answers: [
      { text: "Les mesures per a establir una relació i un diàleg permanents i bidireccionals entre l'Administració i les persones a l'hora de definir i aplicar les polítiques públiques, i per a introduir i desenvolupar instruments de participació i col·laboració ciutadana en els assumptes públics.", correct: false },
      { text: "Els principis, les obligacions i les regles sobre la qualitat dels serveis i el funcionament de l'Administració, i els principis ètics i les bones pràctiques d'acord amb els quals han d'actuar els alts càrrecs de l'Administració, els càrrecs directius i la resta de personal al servei de l'Administració, amb l'objectiu que aquesta funcioni amb la màxima transparència, qualitat i equitat, i com a garantia de retiment de comptes.", correct: true },
      { text: "L'acció proactiva de l'Administració de donar a conèixer la informació relativa als seus àmbits d'actuació i les seves obligacions, amb caràcter permanent i actualitzat, de la manera que resulti més comprensible per a les persones i per mitjà dels instruments de difusió que els permetin un accés ampli i fàcil a les dades i els facilitin la participació en els assumptes públics.", correct: false },
      { text: "La informació pública de l'Administració sobre les actuacions que duu a terme referents a la gestió econòmica, comptable, pressupostària i patrimonial, les decisions i actuacions de rellevància jurídica, la planificació i programació, la contractació pública, els convenis de col·laboració i les subvencions.", correct: false }
    ]
  },
  {
    theme: "2024; C1 TORN LLIURE",
    question: "D'acord amb la Llei 19/2014, del 29 de desembre, de transparència, accés a la informació pública i bon govern, el govern obert...",
    number: 9,
    answers: [
      { text: "Permet que els ciutadans i les entitats, amb caràcter general, facin arribar a l'Administració pública propostes, suggeriments i opinions sobre qualsevol assumpte en què aquesta sigui competent, si bé l'Administració no té l'obligació de donar-los-en una resposta motivada.", correct: false },
      { text: "Permet que els ciutadans i les entitats, amb caràcter general, facin arribar a l'Administració pública propostes, suggeriments i opinions sobre qualsevol assumpte en què aquesta sigui competent, i l'Administració té l'obligació de donar-los-en una resposta motivada.", correct: true },
      { text: "No permet que els ciutadans, amb caràcter general, facin arribar a l'Administració pública propostes, suggeriments i opinions sobre qualsevol assumpte en què aquesta sigui competent, ja que únicament ho permet a les entitats i associacions legalment constituïdes.", correct: false },
      { text: "Implica que únicament els empleats públics poden fer propostes i suggeriments i donar opinions a l'Administració pública sobre qualsevol assumpte en què aquesta sigui competent, i l'Administració té l'obligació de donar-los-en una resposta motivada.", correct: false }
    ]
  },
  {
    theme: "2024; C1 TORN LLIURE",
    question: "D'acord amb la Llei orgànica de protecció de dades personals i garantia dels drets digitals, quines de les dades següents no formen part de les categories especials de dades?",
    number: 10,
    answers: [
      { text: "Les dades acadèmiques i professionals.", correct: true },
      { text: "Les dades genètiques.", correct: false },
      { text: "Les dades relatives a la vida sexual o l'orientació sexual de la persona.", correct: false },
      { text: "Les dades referents a conviccions religioses o filosòfiques.", correct: false }
    ]
  },
  {
    theme: "2024; C1 TORN LLIURE",
    question: "D'acord amb la Llei orgànica de protecció de dades personals i garantia dels drets digitals, quina de l'afirmació següent no és correcta en relació amb el consentiment per tractar dades personals?",
    number: 11,
    answers: [
      { text: "La persona interessada té dret a retirar el seu consentiment en qualsevol moment.", correct: false },
      { text: "Si el tractament es basa en el consentiment de la persona interessada, el responsable ha de poder demostrar que aquesta hi va consentir.", correct: false },
      { text: "El consentiment s'ha de donar mitjançant un acte afirmatiu clar, com ara una declaració per escrit, inclosos els mitjans electrònics, o una declaració verbal.", correct: false },
      { text: "Si el tractament té diverses finalitats, només cal donar el consentiment per al tractament que es considera principal.", correct: true }
    ]
  },
  {
    theme: "2024; C1 TORN LLIURE",
    question: "D'acord amb la Llei orgànica de protecció de dades personals i garantia dels drets digitals, pot un menor d'edat donar el seu consentiment perquè es tractin les seves dades personal?",
    number: 12,
    answers: [
      { text: "Sí, si ja té setze anys i sense excepció.", correct: false },
      { text: "No, un menor d'edat no pot donar mai el seu consentiment.", correct: false },
      { text: "Sí, si és més gran de catorze anys i en qualsevol circumstància.", correct: false },
      { text: "Sí, si és més gran de catorze anys i a excepció d'alguns supòsits recollits per la llei.", correct: true }
    ]
  },
  {
    theme: "2024; C1 TORN LLIURE",
    question: "D'acord amb la Llei 19/2014, del 29 de desembre, de transparència, accés a la informació pública i bon govern, el dret de les persones a accedir a la informació pública es pot exercir:",
    number: 13,
    answers: [
      { text: "A partir dels setze anys i no és condicionat a la concurrència d'un interès personal, no resta subjecte a motivació i no requereix la invocació de cap norma.", correct: true },
      { text: "A partir dels divuit anys i no és condicionat a la concurrència d'un interès personal, no resta subjecte a motivació i no requereix la invocació de cap norma.", correct: false },
      { text: "A partir dels setze anys i és condicionat a la concurrència d'un interès personal, resta subjecte a motivació i requereix la invocació de normativa reguladora en matèria de transparència.", correct: false },
      { text: "A partir dels divuit anys i és condicionat a la concurrència d'un interès personal, resta subjecte a motivació i requereix la invocació de normativa reguladora en matèria de transparència.", correct: false }
    ]
  },
  {
    theme: "2024; C1 TORN LLIURE",
    question: "D'acord amb la Llei orgànica de protecció de dades personals i garantia dels drets digitals, en quin dels supòsits següents els responsables i encarregats del tractament de dades no han de designar un delegat de protecció de dades?",
    number: 14,
    answers: [
      { text: "Quan es tracti de centres docents que ofereixin ensenyaments en qualsevol dels nivells que estableix la legislació reguladora del dret a l'educació, així com de les universitats públiques i privades.", correct: false },
      { text: "Quan el tractament tingui per objecte categories especials de dades personals o dades relatives a condemnes o infraccions penals.", correct: false },
      { text: "Quan es tracti de professionals de la salut que, tot i estar obligats legalment al manteniment de les històries clíniques dels pacients, exerceixin la seva activitat a títol individual.", correct: true },
      { text: "Quan el tractament l'efectua una autoritat o un organisme públic, tret dels tribunals que actuen en l'exercici de la seva funció judicial.", correct: false }
    ]
  },
  {
    theme: "2024; C1 TORN LLIURE",
    question: "D'acord amb la Llei 13/2008, del 5 de novembre, de la presidència de la Generalitat i del Govern, quina de les atribucions següents correspon a les persones titulars de les conselleries, com a integrants del Govern?",
    number: 15,
    answers: [
      { text: "Sol·licitar la convocatòria d'una sessió extraordinària del Parlament.", correct: false },
      { text: "Proposar al Govern avantprojectes de llei, projectes de decret legislativ, projectes de decret llei o projectes de decret relatius a llurs funcions o a llur àmbit de competències.", correct: true },
      { text: "Mantenir les relacions amb les autoritats de les institucions de l'Estat, de les comunitats autònomes i dels ens locals, i de llurs administracions públiques, i també amb les autoritats de l'àmbit internacional.", correct: false },
      { text: "Nomenar els membres del Consell de Garanties Estatutàries.", correct: false }
    ]
  },
  {
    theme: "2024; C1 TORN LLIURE",
    question: "D'acord amb la Llei 40/2015, d'1 d'octubre, de règim jurídic del sector públic, quin dels organismes o les institucions següents no forma part del sector públic institucional de l'Administració de la Generalitat de Catalunya?",
    number: 16,
    answers: [
      { text: "La Universitat de Barcelona.", correct: false },
      { text: "La Conselleria de Cultura.", correct: true },
      { text: "El Consell de l'Audiovisual de Catalunya.", correct: false },
      { text: "L'Agència Catalana de Cooperació al Desenvolupament.", correct: false }
    ]
  },
  {
    theme: "2024; C1 TORN LLIURE",
    question: "Segons la Constitució espanyola, l'Administració pública actua d'acord amb els principis...",
    number: 17,
    answers: [
      { text: "D'eficàcia, jerarquia, descentralització, desconcentració i coordinació.", correct: true },
      { text: "D'agilitat, eficiència, jerarquia, descentralització, desconcentració.", correct: false },
      { text: "D'eficàcia, eficiència, jerarquia, descentralització i delegació.", correct: false },
      { text: "D'agilitat, eficàcia, jerarquia, descentralització i cooperació.", correct: false }
    ]
  },
  {
    theme: "2024; C1 TORN LLIURE",
    question: "D'acord amb la Llei 40/2015, d'1 d'octubre, de règim jurídic del sector públic, cadascuna de les administracions públiques actua, per al compliment de les seves finalitats, amb personalitat jurídica:",
    number: 18,
    answers: [
      { text: "Única.", correct: true },
      { text: "Plena.", correct: false },
      { text: "Pròpia.", correct: false },
      { text: "Comuna.", correct: false }
    ]
  },
  {
    theme: "2024; C1 TORN LLIURE",
    question: "D'acord amb la Llei 40/2015, d'1 d'octubre, de règim jurídic del sector públic, quina de les figures següents no altera la titularitat de la competència, però sí que n'altera l'exercici?",
    number: 19,
    answers: [
      { text: "L'encàrrec de funcions.", correct: false },
      { text: "L'encàrrec de gestió.", correct: true },
      { text: "La invocació.", correct: false },
      { text: "La redistribució.", correct: false }
    ]
  },
  {
    theme: "2024; C1 TORN LLIURE",
    question: "D'acord amb la Llei 26/2010, del 3 d'agost, de règim jurídic i de procediment de les administracions públiques de Catalunya, quina de les afirmacions següents en relació amb la delegació de competències és correcta?",
    number: 20,
    answers: [
      { text: "La delegació és revocable per l'òrgan que l'hagi conferit.", correct: true },
      { text: "Sempre es poden delegar les competències que s'exerceixin per delegació.", correct: false },
      { text: "Les resolucions administratives que s'adoptin per delegació han d'indicar expressament aquesta circumstància i es consideren dictades per l'òrgan delegat.", correct: false },
      { text: "Els òrgans de les diferents administracions públiques poden delegar l'exercici de les competències que tinguin atribuïdes, en altres òrgans de la mateixa Administració sempre que aquests siguin jeràrquicament dependents.", correct: false }
    ]
  },
  {
    theme: "2024; C1 TORN LLIURE",
    question: "D'acord amb l'article 30 de la Llei 39/2015, d'1 d'octubre, del procediment administratiu comú de les administracions públiques, quina de les afirmacions següents és correcta en relació amb el còmput de terminis?",
    number: 21,
    answers: [
      { text: "Llevat que per llei o en el dret de la Unió Europea no s'expressi un altre còmput, quan els terminis s'assenyalin per dies, s'entén que aquests són naturals.", correct: false },
      { text: "Els terminis expressats en dies es compten a partir del dia hàbil en què tingui lloc la notificació o publicació de l'acte de què es tracti.", correct: false },
      { text: "Si el termini es fixa en mesos o anys, aquest es computa a partir del dia següent a aquell en què tingui lloc la notificació o publicació de l'acte de què es tracti.", correct: false },
      { text: "Els terminis expressats en hores es compten d'hora en hora i de minut en minut des de l'hora i el minut en què tingui lloc la notificació o publicació de l'acte de què es tracti.", correct: true }
    ]
  },
  {
    theme: "2024; C1 TORN LLIURE",
    question: "D'acord amb la Llei 39/2015, d'1 d'octubre, del procediment administratiu comú de les administracions públiques, qui té, amb caràcter general, capacitat d'obrar o d'actuar davant les administracions públiques de Catalunya?",
    number: 22,
    answers: [
      { text: "Únicament els majors d'edat.", correct: false },
      { text: "Els majors de setze anys en tots els casos.", correct: false },
      { text: "Els majors d'edat i els menors emancipats.", correct: true },
      { text: "Els majors de catorze anys.", correct: false }
    ]
  },
  {
    theme: "2024; C1 TORN LLIURE",
    question: "D'acord amb l'article 58 de la Llei 39/2015, d'1 d'octubre, del procediment administratiu comú de les administracions públiques, com s'inicien els procediments d'ofici?",
    number: 23,
    answers: [
      { text: "A petició de la persona interessada.", correct: false },
      { text: "Per acord de qualsevol òrgan.", correct: false },
      { text: "Per acord de l'òrgan competent.", correct: true },
      { text: "A petició raonada d'un grup de persones amb un interès legítm.", correct: false }
    ]
  },
  {
    theme: "2024; C1 TORN LLIURE",
    question: "D'acord amb la Llei 39/2015, d'1 d'octubre, del procediment administratiu comú de les administracions públiques, pot l'òrgan competent obrir un període d'informació o actuacions prèvies?",
    number: 24,
    answers: [
      { text: "No, totes les informacions i actuacions s'han de dur a terme un cop s'iniciï d'ofici el procediment.", correct: false },
      { text: "Sí, amb la finalitat de conèixer les circumstàncies del cas concret i la conveniència o no d'iniciar el procediment.", correct: true },
      { text: "Sí, però únicament en el cas de procediments de naturalesa sancionadora.", correct: false },
      { text: "Sí, sempre que hi hagi una petició raonada de la persona o persones interessades.", correct: false }
    ]
  },
  {
    theme: "2024; C1 TORN LLIURE",
    question: "D'acord amb la Llei 39/2015, d'1 d'octubre, del procediment administratiu comú de les administracions públiques, quina de les causes següents posa fi al procediment administratiu comú?",
    number: 25,
    answers: [
      { text: "La finalització de la instrucció.", correct: false },
      { text: "El desistiment.", correct: true },
      { text: "La declaració de prescripció.", correct: false },
      { text: "La proposta de resolució.", correct: false }
    ]
  },
  {
    theme: "2024; C1 TORN LLIURE",
    question: "D'acord amb la Llei 39/2015, d'1 d'octubre, del procediment administratiu comú de les administracions públiques, en el procediment administratiu els informes tenen caràcter...",
    number: 26,
    answers: [
      { text: "Facultatiu i vinculant.", correct: false },
      { text: "Preceptiu i vinculant.", correct: false },
      { text: "Preceptiu i no vinculant.", correct: false },
      { text: "Facultatiu i no vinculant llevat d'una disposició expressa en contra.", correct: true }
    ]
  },
  {
    theme: "2024; C1 TORN LLIURE",
    question: "D'acord amb la Llei 39/2015, d'1 d'octubre, del procediment administratiu comú de les administracions públiques, es produeix la caducitat d'un procediment iniciat a sol·licitud de l'interessat i paralitzat per una causa imputable a aquest, un cop transcorregut el termini de...",
    number: 27,
    answers: [
      { text: "Dos mesos amb l'advertiment previ de l'Administració.", correct: false },
      { text: "Dos mesos sense que sigui necessari l'advertiment previ de l'Administració.", correct: false },
      { text: "Tres mesos amb l'advertiment previ de l'Administració.", correct: true },
      { text: "Tres mesos sense que sigui necessari l'advertiment previ de l'Administració.", correct: false }
    ]
  },
  {
    theme: "2024; C1 TORN LLIURE",
    question: "Quan es pot acordar la tramitació simplificada del procediment administratiu comú?",
    number: 28,
    answers: [
      { text: "Quan raons d'interès públic o la falta de complexitat del procediment ho aconsellin.", correct: true },
      { text: "Quan l'òrgan competent ho decideixi d'ofici i sense notificar-ho als interessats.", correct: false },
      { text: "Quan l'interessat ho sol·liciti i el procediment sigui complex.", correct: false },
      { text: "Quan l'òrgan competent consideri que la infracció és molt greu.", correct: false }
    ]
  },
  {
    theme: "2024; C1 TORN LLIURE",
    question: "D'acord amb la Llei 40/2015, d'1 d'octubre, de règim jurídic del sector públic, la titularitat de la Seu electrònica...",
    number: 29,
    answers: [
      { text: "Només correspon a una administració pública.", correct: false },
      { text: "Correspon a una administració pública o bé a un o diversos organismes públics o entitats de dret públic.", correct: true },
      { text: "Pot correspondre a un òrgan administratiu.", correct: false },
      { text: "No correspon a organismes públics o entitats de dret públic.", correct: false }
    ]
  },
  {
    theme: "2024; C1 TORN LLIURE",
    question: "D'acord amb la Llei 39/2015, d'1 d'octubre, del procediment administratiu comú de les administracions públiques, quina de les afirmacions següents en referència a l'arxiu electrònic de documents és certa?",
    number: 30,
    answers: [
      { text: "Els documents electrònics s'han de conservar en tot cas en format paper i la seva eliminació no pot ser autoritzada.", correct: false },
      { text: "Totes les administracions públiques de Catalunya han de transferir a un únic arxiu electrònic compartit tots os documents electrònics que corresponguin a procediments oberts.", correct: false },
      { text: "Cada Administració ha de mantenir un arxiu electrònic únic dels documents electrònics que corresponguin a procediments finalitzats, en els termes que estableixi la normativa reguladora aplicable.", correct: true },
      { text: "Els mitjans o suports en què s'emmagatzemin documents han de disposar de mesures d'autenticitat, d'acord amb el que preveu l'Esquema Nacional Espanyol d'Autenticitat.", correct: false }
    ]
  },
  {
    theme: "2024; C1 TORN LLIURE",
    question: "D'acord amb el Decret 76/2020, de 4 d'agost, d'Administració digital, quina de les eines següents és una eina de tramitació per als tràmits i les actuacions del personal de l'Administració de la Generalitat de Catalunya?",
    number: 31,
    answers: [
      { text: "La plataforma d'intercanvi Exnet.", correct: false },
      { text: "La plataforma e-Social.", correct: false },
      { text: "El gestor electrònic d'expedients de col·laboració Gesec.", correct: false },
      { text: "El sistema de valisa electrònica e-Valisa.", correct: true }
    ]
  },
  {
    theme: "2024; C1 TORN LLIURE",
    question: "D'acord amb la Llei 39/2015, d'1 d'octubre, del procediment administratiu comú de les administracions públiques, el dret a no presentar documents s'estén:",
    number: 32,
    answers: [
      { text: "Només respecte als documents que constin en el procediment en tramitació.", correct: false },
      { text: "Només respecte als documents en poder de l'Administració pública actuant.", correct: false },
      { text: "Només respecte als documents que hagi elaborat l'Administració pública actuant.", correct: false },
      { text: "Respecte als documents en poder de l'Administració actuant o que hagi elaborat qualsevol altra Administracií pública.", correct: true }
    ]
  },
  {
    theme: "2024; C1 TORN LLIURE",
    question: "D'acord amb la Llei 39/2015, d'1 d'octubre, del procediment administratiu comú de les administracions públics, els documents presentats en paper a les oficines d'assistència en matèria de registre...",
    number: 33,
    answers: [
      { text: "S'han de digitalitzar i retornar a la persona interessada.", correct: true },
      { text: "S'han de digitalitzar i arxivar.", correct: false },
      { text: "S'han de digitalitzar i destruir.", correct: false },
      { text: "Sempre s'han d'incloure a l'expedient en format paper.", correct: false }
    ]
  },
  {
    theme: "2024; C1 TORN LLIURE",
    question: "D'acord amb la Llei 39/2015, d'1 d'octubre, del procediment administratiu comú de les administracions públiques, quina de les funcions següents és una funció bàsica de les oficines d'assistència en matèria de registre?",
    number: 34,
    answers: [
      { text: "Proporcionar serveis d'assessorament legal en matèria disciplinària.", correct: false },
      { text: "Assistir en l'ús dels mitjans electrònics.", correct: true },
      { text: "Realitzar notificacions per e-Notum.", correct: false },
      { text: "Registrar comunicats interns.", correct: false }
    ]
  },
  {
    theme: "2024; C1 TORN LLIURE",
    question: "Quin dels instruments tècnics següents és un dels instruments establerts pel Protocol de gestió de documents electrònics i arxiu de la Generalitat?",
    number: 35,
    answers: [
      { text: "Els Quadres de Classificació Tècnica (QCT).", correct: false },
      { text: "Els Manuals d'Organització de Llocs de Treball (MOLT).", correct: false },
      { text: "Les Taules d'Avaluació i Accés Documental (TAAD).", correct: true },
      { text: "Les Llistes de Regles Ambientals (LRA).", correct: false }
    ]
  },
  {
    theme: "2024; C1 TORN LLIURE",
    question: "En relació amb els certificats administratius, quina de les afirmacions següents és correcta?",
    number: 36,
    answers: [
      { text: "Requereixen el consentiment de la persona interessada en tots els casos.", correct: false },
      { text: "Han de contenir les dades objecte de la certificació i la signatura de l'òrgan competent per a lliurar-los.", correct: true },
      { text: "Només es lliuren a instància de l'òrgan competent.", correct: false },
      { text: "Només es lliuren a instància de la persona interessada.", correct: false }
    ]
  },
  {
    theme: "2024; C1 TORN LLIURE",
    question: "D'acord amb els criteris formals per a l'elaboració dels documents administratius, en referència a la datació del peu de signatura de la convocatòria de reunió, quina de l'afirmació següent és correcta?",
    number: 37,
    answers: [
      { text: "El dia i l'any s'escriuen en xifres, i el mes en lletres.", correct: true },
      { text: "El mes s'escriu amb majúscula inicial.", correct: false },
      { text: "Es posa un punt al final de la datació.", correct: false },
      { text: "S'escriu la preposició 'a' davant de la població.", correct: false }
    ]
  },
  {
    theme: "2024; C1 TORN LLIURE",
    question: "D'acord amb el text refós de la Llei de finances públiques de Catalunya, quin principi fonamental caracteritza el sistema jurídic dels ingressos públics?",
    number: 38,
    answers: [
      { text: "El principi d'afectació.", correct: false },
      { text: "El principi de no transparència.", correct: false },
      { text: "El principi d'anualitat.", correct: true },
      { text: "El principi de no intervenció.", correct: false }
    ]
  },
  {
    theme: "2024; C1 TORN LLIURE",
    question: "Quin és l'òrgan competent per administrar l'estat d'ingressos del pressupost de la Generalitat de Catalunya?",
    number: 39,
    answers: [
      { text: "El conseller o consellera competent en matèria pressupostària.", correct: true },
      { text: "El Parlament de Catalunya.", correct: false },
      { text: "El president o presidenta de la Generalitat.", correct: false },
      { text: "El director o directora general de pressupostos.", correct: false }
    ]
  },
  {
    theme: "2024; C1 TORN LLIURE",
    question: "D'acord amb l'Estatut d'autonomia de Catalunya, els recursos de les finances de la Generalitat estan constituïts...",
    number: 40,
    answers: [
      { text: "Pels impostos propis i els ingressos procedents de multes i sancions en l'àmbit de les seves competències i les de les administracions locals de Catalunya.", correct: false },
      { text: "Per diversos tipus de recursos, inclosos els impostos propis, els tributs estatals cedits i altres fons com els rendiments del patrimoni de la Generalitat.", correct: true },
      { text: "Els tributs estatals cedits, sense incloure-hi els recàrrecs sobre aquest tributs ni les contribucions especials.", correct: false },
      { text: "Els ingressos procedents de la Unió Europea i de programes comunitaris amb l'acord previ del Fons de Compensació Interterritorial.", correct: false }
    ]
  },
  {
    theme: "2024; C1 TORN LLIURE",
    question: "D'acord amb la Llei 9/2017, de 8 de novembre, de contractes del sector públic, quina de les condicions següents no és una condició d'aptitud de les persones jurídiques per contractar amb el sector públic?",
    number: 41,
    answers: [
      { text: "No estar incurses en una prohibició de contractar.", correct: false },
      { text: "En els casos que ho exigeixi la llei, estar degudament classificades.", correct: false },
      { text: "Acreditar la solvència econòmica, financera i tècnica o professional.", correct: false },
      { text: "En el cas de persones jurídiques estrangeres, disposar d'alguna seu en territori espanyol.", correct: true }
    ]
  },
  {
    theme: "2024; C1 TORN LLIURE",
    question: "D'acord amb la Llei 9/2017, de 8 de novembre, de contractes del sector públic, el procediment obert simplificat es pot utilitzar en els contractes d'obres amb un valor estimat igual o inferior a...",
    number: 42,
    answers: [
      { text: "2.000.000 €.", correct: true },
      { text: "5.538.000 €.", correct: false },
      { text: "8.000.000 €.", correct: false },
      { text: "3.000.000 €.", correct: false }
    ]
  },
  {
    theme: "2024; C1 TORN LLIURE",
    question: "D'acord amb la Llei 9/2017, de 8 de novembre, de contractes del sector públic, quins són els procediments ordinaris d'adjudicació dels contractes públics?",
    number: 43,
    answers: [
      { text: "El procediment obert, els acords marc, els sistemes dinàmics d'adquisició i la compra centralitzada.", correct: false },
      { text: "El procediment obert, l'obert simplificat i l'obert simplificat abreujat.", correct: false },
      { text: "El procediment obert i el procediment restringit.", correct: true },
      { text: "El procediment obert, el restringit i el procediment amb negociació.", correct: false }
    ]
  },
  {
    theme: "2024; C1 TORN LLIURE",
    question: "D'acord amb l'article 34 del Decret legislatiu 1/1997, de 31 d'octubre, pel qual s'aprova la refosa en un Text únic dels preceptes de determinats textos legals vigents a Catalunya en matèria de funció pública, l'adquisició de la condició de funcionari o funcionària de la Generalitat s'adquireix mitjançant el compliment successiu dels requisits següents:",
    number: 44,
    answers: [
      { text: "Superar els processos selectius, ser contractat per l'autoritat competent, jurar o prometre complir les lleis vigents en el compliment de les funcions que li siguin atribuïdes i prendre possessió del lloc de treball en el termini reglamentari.", correct: false },
      { text: "Superar els processos selectius, ser nomenat pel director o directora de serveis competent, jurar o prometre complir les lleis vigents en el compliment de les funcions que li siguin atribuïdes i prendre possessió del lloc de treball en el termini reglamentari.", correct: false },
      { text: "Superar os processos selectius, ser nomenat per l'autoritat competent, jurar o prometre complir les lleis vigents en el compliment de les funcions que li siguin atribuïdes i prendre possessió del lloc de treball en el termini de deu dies.", correct: false },
      { text: "Superar els processos selectius, ser nomenat per l'autoritat competent, jurar o prometre complir les lleis vigents en el compliment de les funcions que li siguin atribuïdes i prendre possessió del lloc de treball en el termini reglamentari.", correct: true }
    ]
  },
  {
    theme: "2024; C1 TORN LLIURE",
    question: "D'acord amb la normativa vigent en matèria de funció pública, la condiciò de funcionari o funcionària no es perd...",
    number: 45,
    answers: [
      { text: "Per jubilació voluntària.", correct: false },
      { text: "Per incapacitat temporal.", correct: true },
      { text: "Com a conseqüència d'una sanció disciplinària que suposi la separació del servei.", correct: false },
      { text: "Per jubilació forçosa.", correct: false }
    ]
  },
  {
    theme: "2024; C1 TORN LLIURE",
    question: "D'acord amb l'article 86 del Decret legislatiu 1/1997, de 31 d'octubre, pel qual s'aprova la refosa en un Text únic dels preceptes de determinats textos legals vigents a Catalunya en matèria de funció pública, el temps que es roman en la situació d'excedència voluntària...",
    number: 46,
    answers: [
      { text: "Es computa a efectes de triennis, grau i drets passius, i comporta reserva de plaça i destinació.", correct: false },
      { text: "Es computa a efectes de triennis, grau i drets passius, però no comporta reserva de plaça i destinació.", correct: false },
      { text: "No es computa a efectes de triennis, grau i drets passius, però sí que comporta reserva de plaça i destinació.", correct: false },
      { text: "No es computa a efectes de triennis, grau i drets passius, ni comporta reserva de plaça i destinació.", correct: true }
    ]
  },
  {
    theme: "2024; C1 TORN LLIURE",
    question: "D'acord amb la Llei 21/1987, de 26 de novembre, d'incompatibilitats del personal al servei de l'Administració de la Generalitat, en cas de canvi de lloc en el sector públic o de modificació de les condicions de treball, els reconeixements de compatibilitat...",
    number: 47,
    answers: [
      { text: "Resten automàticament sense efecte.", correct: true },
      { text: "Es renoven automàticament.", correct: false },
      { text: "Es renoven a petició de la persona interessada.", correct: false },
      { text: "Es renoven automàticament si no hi ha coincidència de jornada i horari, i a petició de la persona interessada si hi ha coincidència.", correct: false }
    ]
  },
  {
    theme: "2024; C1 TORN LLIURE",
    question: "D'acord amb la normativa vigent en matèria de funció pública, quina de les situacions següents en què es pot trobar el personal funcionari de l'Administració de la Generalitat de Catalunya no és una situació administrativa?",
    number: 48,
    answers: [
      { text: "En actiu.", correct: false },
      { text: "En comissió de serveis.", correct: true },
      { text: "En suspensió d'ocupació.", correct: false },
      { text: "En expectativa de destinació.", correct: false }
    ]
  },
  {
    theme: "2024; C1 TORN LLIURE",
    question: "D'acord amb el Reglament general de provisió de llocs de treball i promoció professional dels funcionaris de l'Administració de la Generalitat de Catalunya, quins són els sistemes generals ordinaris de provisió de llocs de treball reservats al personal funcionari de l'Administració de la Generalitat de Catalunya?",
    number: 49,
    answers: [
      { text: "El concurs de mèrits i capacitats i l'adscripció provisional.", correct: false },
      { text: "El concurs de mèrits i capacitats, la comissió de serveis i l'encàrrec de funcions.", correct: false },
      { text: "El concurs de mèrits i capacitats i la lliure designació.", correct: true },
      { text: "La comissió de serveis i l'acumulació de tasques.", correct: false }
    ]
  },
  {
    theme: "2024; C1 TORN LLIURE",
    question: "Quin és l'òrgan competent per efectuar la proposta de resolució de les convocatòries dels concursos específics de mèrits i capacitats de l'Administració de la Generalitat de Catalunya?",
    number: 50,
    answers: [
      { text: "L'Òrgan Tècnic de Provisió de Llocs de Treball.", correct: false },
      { text: "La Comissió d'Avaluació.", correct: false },
      { text: "La Junta de Mèrits i Capacitats.", correct: true },
      { text: "El Tribunal Qualificador.", correct: false }
    ]
  },
  {
    theme: "2024; C1 TORN LLIURE",
    question: "D'acord amb el text refós de la Llei de l'Estatut bàsic de l'empleat públic, és un principi de conducta dels empleats i empleades públics...",
    number: 51,
    answers: [
      { text: "Respectar la Constitució i la resta de normes que integren l'ordenament jurídic.", correct: false },
      { text: "Administrar els recursos i béns públics amb austeritat i no utilitzar-los en profit propi o de persones pròximes.", correct: true },
      { text: "Abstenir-se en els assumptes en què tinguin un interès personal.", correct: false },
      { text: "Ajustar la seva actuació als principis de lleialtat i bona fe amb l'Administració en la qual prestin els seus serveis.", correct: false }
    ]
  },
  {
    theme: "2024; C1 TORN LLIURE",
    question: "D'acord amb l'article 15 del text refós de la Llei de l'Estatut bàsic de l'empleat públic, la llibertat sindical és:",
    number: 52,
    answers: [
      { text: "Un dret individual exercit individualment.", correct: false },
      { text: "Un dret individual exercit de manera col·lectiva.", correct: true },
      { text: "Un deure individual exercit de manera col·lectiva.", correct: false },
      { text: "Un deure individual exercit de manera individual.", correct: false }
    ]
  },
  {
    theme: "2024; C1 TORN LLIURE",
    question: "D'acord amb la Llei 17/2015, del 21 de juliol, d'igualtat efectiva entre dones i homes, quin dels requisits següents és un dels requisits que han de complir els plans d'igualtat de dones i homes del sector públic?",
    number: 53,
    answers: [
      { text: "Tenir en compte els alts càrrecs a l'hora d'elaborar-los i aprovar-los.", correct: false },
      { text: "Incloure en l'articulat l'avaluació pròpia, que ha d'ésser anual.", correct: false },
      { text: "Tenir en compte els representants dels treballadors a l'hora d'elaborar-los i aprovar-los.", correct: true },
      { text: "Incloure en l'articulat mesures específiques per a adequar-los a les peculiaritats del personal laboral.", correct: false }
    ]
  },
  {
    theme: "2024; C1 TORN LLIURE",
    question: "Segons l'Acord marc en relació amb els plans d'igualtat de gènere de l'Administració de la Generalitat de Catalunya, aquests plans es caracteritzen per ser:",
    number: 54,
    answers: [
      { text: "Vius, dinàmics i oberts.", correct: true },
      { text: "Efectius i sense dotació pressupostària.", correct: false },
      { text: "Basats en la no transversalitat de gènere.", correct: false },
      { text: "Renovables i no avaluables.", correct: false }
    ]
  },
  {
    theme: "2024; C1 TORN LLIURE",
    question: "D'acord amb la Llei 15/2022, de 12 de juliol, integral per a la igualtat de tracte i la no discriminació, a qui es reconeix el dret a la igualtat de tracte i no discriminació?",
    number: 55,
    answers: [
      { text: "A tota persona, amb independència de la seva nacionalitat, de si són menors o majors d'edat o de si gaudeixen o no de residència legal.", correct: true },
      { text: "Als ciutadans i ciutadanes, majors d'edat, excloent-ne expressament les persones no nacionals i aquelles que no disposin de residència legal.", correct: false },
      { text: "Als ciutadans i ciutadanes de la Unió Europea, majors d'edat, sempre que disposin de residència legal a Catalunya.", correct: false },
      { text: "A les persones amb veïnatge civil i administratiu a Catalunya, majors d'edat, sempre que disposin de residència legal a l'Estat espanyol.", correct: false }
    ]
  },
  {
    theme: "2024; C1 TORN LLIURE",
    question: "Quin delicte contra l'Administració pública consisteix a induir amb diners o obsequis un funcionari o funcionària públic perquè en exercici del seu càrrec dugui a terme un acte contrari als deures inherents a aquest càrrec?",
    number: 56,
    answers: [
      { text: "La violació de secrets.", correct: false },
      { text: "El suborn.", correct: true },
      { text: "L'abús en l'exercici de les funcions.", correct: false },
      { text: "El tràfic d'influències.", correct: false }
    ]
  },
  {
    theme: "2024; C1 TORN LLIURE",
    question: "Quin delicte contra l'Administració pública consisteix a influir sobre l'autoritat fent-se valer de facultats derivades de la relació personal o jeràrquica per a obtenir un benefici econòmic?",
    number: 57,
    answers: [
      { text: "L'abús en l'exercici de les funcions.", correct: false },
      { text: "La viaolació de secrets.", correct: false },
      { text: "El suborn.", correct: false },
      { text: "El tràfic d'influències.", correct: true }
    ]
  },
  {
    theme: "2024; C1 TORN LLIURE",
    question: "A l'aplicació OneDrive, es pot compartir un document o una carpeta de l'espai personal des de l'ordinador de sobretaula o portàtil?",
    number: 58,
    answers: [
      { text: "No, no es poden compartir, només hi pot accedir i modificar-los la persona que els ha creat.", correct: false },
      { text: "Sí, es poden compartir mitjançant el correu electrònic o enviant-ne l'enllaç.", correct: true },
      { text: "Sí, però només es poden compartir per correu electrònic amb signatura digital.", correct: false },
      { text: "Sí, pero només es poden compartir enviant-ne l'enllaç des del Portasignatures.", correct: false }
    ]
  },
  {
    theme: "2024; C1 TORN LLIUREÓ",
    question: "Què analitza la tècnica informàtica denominada mineria de dades?",
    number: 59,
    answers: [
      { text: "Productes i recursos senzills per fer-los complexos.", correct: false },
      { text: "Qualsevol pàgina web.", correct: false },
      { text: "Informació autèntica que no sigui estadística i algoritmes de volum baix.", correct: false },
      { text: "Un gran volum d'informació emmagatzemada en diferents bases de dades.", correct: true }
    ]
  },
  {
    theme: "2024; C1 TORN LLIURE",
    question: "D'acord amb la Llei 37/2007, de 16 de novembre, sobre reutilització de la informació del sector públic, què són les dades obertes?",
    number: 60,
    answers: [
      { text: "Dades de documents que només es poden llegir amb programari protegit per una llicència o drets d'autor.", correct: false },
      { text: "Dades de documents que només es poden llegir amb eines gratuïtes.", correct: false },
      { text: "Dades que qualsevol persona pot reutilitzar i redistribuir lliurement.", correct: true },
      { text: "En l'àmbit de l'Administració pública, són el conjunt de dades públiques amb dret d'accés, transparència i govern obert de la ciutadania.", correct: false }
    ]
  },
  {
    theme: "2024; C1 TORN LLIURE",
    question: "A l'Administració de la Generalitat de Catalunya, on s'emmagatzemen els documents al núvol?",
    number: 1,
    answers: [
      { text: "En les xarxes compartides d'ordinadors de la Generalitat de Catalunya.", correct: false },
      { text: "En l'escriptori de qualsevol dispositiu.", correct: false },
      { text: "En un llapis de memòria compartit.", correct: false },
      { text: "En un espai virtual.", correct: true }
    ]
  },
  {
    theme: "2024; C1 TORN LLIURE",
    question: "D'acord amb la Llei 9/2017, de 8 de novembre, de contractes del sector públic, quins són els tipus de contractes públics segons l'objecte?",
    number: 2,
    answers: [
      { text: "Els contractes d'obres, de concessió d'obres, de serveis, de concessió de serveis, de subministraments i patrimonials.", correct: false },
      { text: "Els contractes administratius i els contractes privats.", correct: false },
      { text: "Els contractes d'obres, de serveis, de subministraments i d'encàrrec a mitjans propis personificats.", correct: false },
      { text: "Els contractes d'obres, de concessió d'obres, de serveis, de concessió de serveis i de subministraments.", correct: true }
    ]
  },
  {
    theme: "2024; C1 TORN LLIURE",
    question: "D'acord amb la Llei 13/2008, del 5 de novembre, de la presidència de la Generalitat i del Govern, com es determina el nombre, la denominació i l'àmbit de competències dels departaments en què s'organitza el Govern?",
    number: 3,
    answers: [
      { text: "Mitjançant un decret del Govern.", correct: false },
      { text: "Mitjançant una ordre de la Secretaria del Govern.", correct: false },
      { text: "Mitjançant una llei del Parlament de Catalunya.", correct: false },
      { text: "Mitjançant un decret del president o presidenta de la Generalitat.", correct: true }
    ]
  },
  {
    theme: "2024; C1 TORN LLIURE",
    question: "D'acord amb la Llei 40/2015, d'1 d'octubre, de règim jurídic del sector públic, la delegació de signatura...",
    number: 4,
    answers: [
      { text: "No altera la competència de l'òrgan delegant i perquè sigui vàlida s'ha de publicar.", correct: false },
      { text: "Altera la competència de l'òrgan delegant i perquè sigui vàlida no cal publicar-la.", correct: false },
      { text: "No altera la competència de l'òrgan delegant i perquè sigui vàlida no cal publicar-la.", correct: true },
      { text: "Altera la competència de l'òrgan delegant i perquè sigui vàlida cal publicar-la.", correct: false }
    ]
  },
  {
    theme: "2024; C1 TORN LLIURE",
    question: "D'acord amb la Llei 39/2015, d'1 d'octubre, de procediment administratiu comú de les administracions públiques, quan l'Administració no doni per certs els fets al·legats pels interessats o la naturalesa del procediment ho requereixi, la persona instructora ha d'acordar l'obertura del període de prova per un termini no superior a...",
    number: 5,
    answers: [
      { text: "Trenta dies ni inferior a quinze dies.", correct: false },
      { text: "Vint dies ni inferior a quinze dies.", correct: false },
      { text: "Vint dies ni inferior a deu dies.", correct: false },
      { text: "Trenta dies ni inferior a deu dies.", correct: true }
    ]
  },
  {
    theme: "2024; C1 TORN LLIURE",
    question: "El recurs d'empara per a la tutela de les llibertats i dels drets fonamentals reconeguts a la Constitució espanyola, davant de qui s'ha d'interposar?",
    number: 6,
    answers: [
      { text: "Del Tribunal Suprem.", correct: false },
      { text: "Del Tribunal de Justícia de la Unió Europea.", correct: false },
      { text: "Del Tribunal Constitucional.", correct: true },
      { text: "Del Tribunal Superior de Justícia de la seva comunitat autònoma.", correct: false }
    ]
  },
  {
    theme: "2024; C1 TORN LLIURE",
    question: "Si parlem del personal eventual, no és cert que:",
    number: 7,
    answers: [
      { text: "El personal eventual és nomenat amb caràcter no permanent", correct: false },
      { text: "El nomenament i el cessament del personal eventual són lliures, però ahuran de cessar automàticament, quan cessi en el càrrec l'autoritat que el va nomenar, llevat que s'el ratifiqui expressament.", correct: false },
      { text: "La prestació de serveis en qualitat de personal eventual pot ser considerada com a mèrit per a l'accés a la condició de personal funcionari o de personal laboral i per a la promoció interna.", correct: true },
      { text: "Al personal eventual li serà aplicable, en el que sigui adequat a la naturalesa de la seva condició, el règim general dels funcionaris de carrera.", correct: false }
    ]
  },
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