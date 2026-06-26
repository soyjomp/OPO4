const TEST_ID = "2024_c1_interna1_test"; 
const questions = [
  {
    theme: "2024; C1 PROMO INTERNA 1",
    question: "D'acord amb la Llei 19/2014, del 29 de desembre, de transparència, accés a la informació pública i bon govern, el dret de les persones a accedir a la informació pública es pot exercir:",
    number: 1,
    answers: [
      { text: "A partir dels setze anys i no és condicionat a la concurrència d'un interès personal, no resta subjecte a motivació i no requereix la invocació de cap norma.", correct: true },
      { text: "A partir dels divuit anys i no és condicionat a la concurrència d'un interès personal, no resta subjecte a motivació i no requereix la invocació de cap norma.", correct: false },
      { text: "A partir dels setze anys i és condicionat a la concurrència d'un interès personal, resta subjecte a motivació i requereix la invocació de normativa reguladora en matèria de transparència.", correct: false },
      { text: "A partir dels divuit anys i és condicionat a la concurrència d'un interès personal, resta subjecte a motivació i requereix la invocació de normativa reguladora en matèria de transparència.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 1",
    question: "D'acord amb la Llei orgànica de protecció de dades personals i garantia dels drets digitals, en quin d'aquests supòsits els responsables i encarregats del tractament de dades no han de designar un delegat de protecció de dades?",
    number: 2,
    answers: [
      { text: "Quan es tracti de centres docents que ofereixin ensenyaments en qualsevol dels nivells que estableix la legislació reguladora del dret a l'educació, així com de les universitats públiques i privades.", correct: false },
      { text: "Quan el tractament tingui per objecte categories especials de dades personals o dades relatives a condemnes o infraccions penals.", correct: false },
      { text: "Quan es tracti de professionals de la salut que, tot i estar obligats legalment al manteniment de les històries clíniques dels pacients, exerceixin la seva activitat a títol individual.", correct: true },
      { text: "Quan el tractament l'efectua una autoritat o un organisme públic, tret dels tribunals que actuen en l'exercici de la seva funció judicial.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 1",
    question: "D'acord amb la Llei 19/2014, del 29 de desembre, de transparència, accés a la informació pública i bon govern, quines institucions han de vetllar pel dret d'informació pública de les persones interessades?",
    number: 3,
    answers: [
      { text: "El Síndic de Greuges, la Sindicatura de Comptes i l'Oficina Antifrau de Catalunya.", correct: true },
      { text: "Únicament el Síndic de Greuges i l'Oficina Antifrau de Catalunya.", correct: false },
      { text: "La Comissió de Garantia del Dret d'Accés a la Informació Pública i l'Autoritat Catalana de Protecció de Dades.", correct: false },
      { text: "El Síndic de Greuges i l'Autoritat Catalana de Protecció de Dades.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 1",
    question: "Segons la Constitució espanyola, l'Administració pública actua d'acord amb els principis...",
    number: 4,
    answers: [
      { text: "D'eficàcia, jerarquia, descentralització, desconcentració i coordinació.", correct: true },
      { text: "D'agilitat, eficiència, jerarquia, descentralització i desconcentració.", correct: false },
      { text: "D'eficàcia, eficiència, jerarquia, descentralització i delegació.", correct: false },
      { text: "D'agilitat, eficàcia, jerarquia, descentralització i cooperació.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 1",
    question: "D'acord amb la Llei 19/2014, del 29 de desembre, de transparència, accés a la informació pública i bon govern, no s'admeten a tràmit les sol·licituds d'accés a la informació pública si...",
    number: 5,
    answers: [
      { text: "Demanen dades sobre convocatòries i l'atorgament de les subvencions i els ajuts públics.", correct: false },
      { text: "Cal una tasca complexa d'elaboració o reelaboració de la informació que es demana. En aquest cas, es pot donar la informació de manera desglossada, amb l'audiència prèvia del sol·licitant.", correct: true },
      { text: "Demanen dades sobre la plantilla de personal, la relació de llocs de treball i el règim retributiu de l'Administració pública.", correct: false },
      { text: "Sol·liciten informació estadística que apareix al web d'Idescat.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 1",
    question: "D'acord amb la Llei 40/2015, d'1 d'octubre, de règim jurídic del sector públic, cadascuna de les administracions públiques actua, per al cumplimiento de les seves finalitats, amb personalitat jurídica:",
    number: 6,
    answers: [
      { text: "Única.", correct: true },
      { text: "Plena.", correct: false },
      { text: "Pròpia.", correct: false },
      { text: "Comuna.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 1",
    question: "D'acord amb l'article 30 de la Llei 39/2015, d'1 d'octubre, del procediment administratiu comú de les administracions públiques, quina de les afirmacions següents és correcta en relació amb el còmput de terminis?",
    number: 7,
    answers: [
      { text: "Llevat que per llei o en el dret de la Unió Europea no s'expressi un altre còmput, quan els terminis s'assenyalin per dies, s'entén que aquests són naturals.", correct: false },
      { text: "Els terminis expressats en dies es compten a partir del dia hàbil en què tingui lloc la notificació o publicació de l'acte de què es tracti.", correct: false },
      { text: "Si el termini es fixa en mesos o anys, aquest es computa a partir del dia natural en què tingui lloc la notificació o publicació de l'acte de què es tracti.", correct: false },
      { text: "Els terminis expressats en hores es compten d'hora en hora i de minut en minut des de l'hora i el minut en què tingui lloc la notificació o publicació de l'acte de què es tracti.", correct: true }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 1",
    question: "D'acord amb la Llei 39/2015, d'1 d'octubre, del procediment administratiu comú de les administracions públiques, qui té, amb caràcter general, capacitat d'obrar o d'actuar davant les administracions públiques de Catalunya?",
    number: 8,
    answers: [
      { text: "Únicament els majors d'edat.", correct: false },
      { text: "Els majors de setze anys en tots els casos.", correct: false },
      { text: "Els majors d'edat i els menors emancipats.", correct: true },
      { text: "Els majors de catorze anys.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 1",
    question: "D'acord amb la Llei 39/2015, d'1 d'octubre, del procediment administratiu comú de les administracions públiques, el dret a conèixer en qualsevol moment l'estat de la tramitació dels procediments...",
    number: 9,
    answers: [
      { text: "No està previst en la normativa vigent.", correct: false },
      { text: "El té reconegut qualsevol persona física o jurídica interessada en un procediment administratiu.", correct: true },
      { text: "Només el tenen reconegut les persones físiques a través de mitjans electrònics.", correct: false },
      { text: "El té reconegut qualsevol persona física o jurídica encara que no sigui persona interessada en un procediment administratiu.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 1",
    question: "D'acord amb la Llei 40/2015, d'1 d'octubre, de règim jurídic del sector públic, la titularitat de la Seu electrònica...",
    number: 10,
    answers: [
      { text: "Només correspon a una administració pública.", correct: false },
      { text: "Correspon a una administració pública o bé a un o diversos organismes públics o entitats de dret públic.", correct: true },
      { text: "Pot correspondre a un òrgan administratiu.", correct: false },
      { text: "No correspon a organismes públics o entitats de dret públic.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 1",
    question: "D'acord amb la Llei 40/2015, d'1 d'octubre, de règim jurídic del sector públic, per raons de seguretat pública els sistemes de signatura electrònica del personal al servei d'una administració pública només es poden referir...",
    number: 11,
    answers: [
      { text: "Al número de registre de personal de l'empleat públic.", correct: false },
      { text: "Al document nacional d'identitat de l'empleat públic.", correct: false },
      { text: "Al número d'identificació professional de l'empleat públic.", correct: true },
      { text: "Al nom, cognom i càrrec de l'empleat públic.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 1",
    question: "D'acord amb la Llei 39/2015, d'1 d'octubre, del procediment administratiu comú de les administracions públiques, quina de les afirmacions següents en referència a l'arxiu electrònic de documents és certa?",
    number: 12,
    answers: [
      { text: "Els documents electrònics s'han de conservar en tots els casos en format paper i la seva eliminació no pot ser autoritzada.", correct: false },
      { text: "Totes les administracions públiques de Catalunya han de transferir a un únic arxiu electrònic compartit tots els documents electrònics que corresponguin a procediments oberts.", correct: false },
      { text: "Cada Administració ha de mantenir un arxiu electrònic únic dels documents electrònics que corresponguin a procediments finalitzats, en els termes que estableixi la normativa reguladora aplicable.", correct: true },
      { text: "Els mitjans o suports en què s'emmagatzemin documents han de disposar de mesures d'autenticitat, d'acord amb el que preveu l'Esquema Nacional Espanyol d'Autenticitat.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 1",
    question: "D'acord amb el Decret 76/2020, de 4 d'agost, d'Administració digital, quina de les eines següents és una eina de tramitació per als tràmits i les actuacions del personal de l'Administració de la Generalitat de Catalunya?",
    number: 13,
    answers: [
      { text: "La plataforma d'intercanvi Exnet.", correct: false },
      { text: "La plataforma e-Social.", correct: false },
      { text: "El gestor electrònic d'expedients de col·laboració Gesec.", correct: false },
      { text: "El sistema de valisa electrònica e-Valisa.", correct: true }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 1",
    question: "D'acord amb la Llei 39/2015, d'1 d'octubre, del procediment administratiu comú de les administracions públiques, el dret a no presentar documents s'estén:",
    number: 14,
    answers: [
      { text: "Només respecte als documents que constin en el procediment en tramitació.", correct: false },
      { text: "Només respecte als documents en poder de l'Administració pública actuant.", correct: false },
      { text: "Només respecte als documents que hagi elaborat l'Administració pública actuant.", correct: false },
      { text: "Respecte als documents en poder de l'Administració actuant o que hagi elaborat qualsevol altra Administració pública.", correct: true }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 1",
    question: "Els tramitadors són les aplicacions que utilitza l'Administració per gestionar, controlar i fer el seguiment de qualsevol procediment electrònic, com són els tràmits. Actualment existeixen a l'Administració de la Generalitat de Catalunya, entre d'altres, els tramitadors següents:",
    number: 15,
    answers: [
      { text: "El Tramitador governamental (TG), el Tramitador d'ajuts i subvencions (TAIS), el Tramitador d'expedients interns (TEI) i els sistemes de gestió interna especialitzats (Backoffice-BO).", correct: false },
      { text: "El Tramitador genèric (TG), el Tramitador d'ajuts i subvencions (TAIS), el Tramitador d'expedients interdepartamentals (TEI) i els sistemes de gestió interna especialitzats (Backoffice-BO).", correct: true },
      { text: "El Tramitador genèric (TG), el Tramitador d'ajuts i subvencions (TAIS), el Tramitador d'expedients interdepartamentals (TEI) i els sistemes de gestió externa generals (Backoffice-BO).", correct: false },
      { text: "El Tramitador genèric (TG), el Tramitador d'assistència i subsidis (TAIS), el Tramitador d'expedients interdepartamentals (TEI) i els sistemes de gestió interna especialitzats (Backoffice-BO).", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 1",
    question: "D'acord amb la Llei 39/2015, d'1 d'octubre, del procediment administratiu comú de les administracions públiques, el còmput dels terminis al registre electrònic es fa...",
    number: 16,
    answers: [
      { text: "Les vint-i-quatre hores del dia qualsevol dia de la setmana.", correct: false },
      { text: "Només les hores del dia en què estigui oberta l'oficina d'assistència en matèria de registres.", correct: false },
      { text: "La primera hora del dia següent a un dia inhàbil en qualsevol cas.", correct: false },
      { text: "La primera hora del dia següent a un dia inhàbil llevat que una norma permeti expressament la recepció en dia inhàbil.", correct: true }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 1",
    question: "D'acord amb la Llei 39/2015, d'1 d'octubre, del procediment administratiu comú de les administracions públiques, els documents presentats en paper a les oficines d'assistència en matèria de registre...",
    number: 17,
    answers: [
      { text: "S'han de digitalitzar i retornar a la persona interessada.", correct: true },
      { text: "S'han de digitalitzar i arxivar.", correct: false },
      { text: "S'han de digitalitzar i destruir.", correct: false },
      { text: "Sempre s'han d'incloure en l'expedient en format paper.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 1",
    question: "D'acord amb la Llei 39/2015, d'1 d'octubre, del procediment administratiu comú de les administracions públiques, quina és una funció bàsica de les oficines d'assistència en matèria de registre?",
    number: 18,
    answers: [
      { text: "Proporcionar serveis d'assessorament legal en matèria disciplinària.", correct: false },
      { text: "Assistir en l'ús dels mitjans electrònics.", correct: true },
      { text: "Realitzar notificacions per e-Notum.", correct: false },
      { text: "Registrar comunicats interns.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 1",
    question: "En matèria de gestió documental i arxiu electrònic, la plataforma corporativa de gestió documental de la Generalitat de Catalunya per tractar i preservar la informació i documentació electròniques, s'anomena:",
    number: 19,
    answers: [
      { text: "ARESTA.", correct: true },
      { text: "iArxiu.", correct: false },
      { text: "e-Valisa.", correct: false },
      { text: "e-Tauler.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 1",
    question: "Quin dels instruments tècnics següents és un dels establerts pel Protocol de gestió de documents electrònics i arxiu de la Generalitat?",
    number: 20,
    answers: [
      { text: "Els Quadres de Classificació Tècnica (QCT).", correct: false },
      { text: "Els Manuals d'Organització de Llocs de Treball (MOLT).", correct: false },
      { text: "Les Taules d'Avaluació i Accés Documental (TAAD).", correct: true },
      { text: "Les Llistes de Regles Ambientals (LRA).", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 1",
    question: "D'acord amb la Llei 10/2001, de 13 de juliol, d'arxius i gestió de documents, el conjunt d'operacions i tècniques del sistema de gestió documental tenen com a finalitat:",
    number: 21,
    answers: [
      { text: "Controlar d'una manera eficaç la creació, la recepció i el manteniment dels documents.", correct: false },
      { text: "Controlar d'una manera eficaç i sistemàtica la creació, la recepció, el manteniment i l'eliminació dels documents.", correct: false },
      { text: "Controlar d'una manera eficient i sistemàtica la creació, la recepció, el manteniment, l'ús, la conservació o la transferència dels documents a empreses del sector públic o privat.", correct: false },
      { text: "Controlar d'una manera eficient i sistemàtica la creació, la recepció, el manteniment, l'ús, la conservació i l'eliminació o la transferència dels documents.", correct: true }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 1",
    question: "D'acord amb la Guia d'usos no sexistes de la llengua en els textos de l'Administració de la Generalitat de Catalunya, quina de les afirmacions següents és correcta?",
    number: 22,
    answers: [
      { text: "Cal donar preferència, en general, als recursos que comporten l'ús de formes dobles, com per exemple \"ciutadà/ciutadana\" i \"administrat/administrada\".", correct: false },
      { text: "L'ús de la paraula persona com a forma genèrica és un recurso possible, però no se n'ha d'abusar perquè sovint va en contra del principi d'economia lingüística i perquè comporta una certa complicació sintàctica i semàntica.", correct: true },
      { text: "Sempre cal promoure l'ús de formes dobles abreujades, com per exemple \"director/a\".", correct: false },
      { text: "En les referències fetes en plural per a col·lectius que poden ser constituïts tant per homes com per dones, s'entén que el femení té valor genèric.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 1",
    question: "En relació amb els certificats administratius, quina de les afirmacions següents és correcta?",
    number: 23,
    answers: [
      { text: "Requereixen el consentiment de la persona interessada en tots els casos.", correct: false },
      { text: "Han de contenir les dades objecte de certificació i la signatura de l'òrgan competent per a lliurar-los.", correct: true },
      { text: "Només es lliuren a instància de l'òrgan competent.", correct: false },
      { text: "Només es lliuren a instància de la persona interessada.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 1",
    question: "D'acord amb els criteris formals de la Secretaria de Política Lingüística per a l'elaboració dels documents administratius, en referència a la datació del peu de signatura de la convocatòria de reunió, quina de les afirmació següents és correcta?",
    number: 24,
    answers: [
      { text: "El dia i l'any s'escriuen en xifres, i el mes en lletres.", correct: true },
      { text: "El mes s'escriu amb majúscula inicial.", correct: false },
      { text: "Es posa un punt al final de la datació.", correct: false },
      { text: "S'escriu la preposició \"a\" davant de la població.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 1",
    question: "D'acord amb el text refós de la Llei de l'Estatut bàsic de l'empleat públic, és un principi de conducta dels empleats i empleades públics...",
    number: 25,
    answers: [
      { text: "Respectar la Constitució i la resta de normes que integren l'ordenament jurídic.", correct: false },
      { text: "Administrar els recursos i béns públics amb austeritat i no utilitzar-los en profit propi o de persones pròximes.", correct: true },
      { text: "Abstenir-se en els assumptes en què tinguin un interès personal.", correct: false },
      { text: "Ajustar la seva actuació als principis de lleialtat i bona fe amb l'Administració en la qual prestin els seus serveis.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 1",
    question: "D'acord amb l'article 20 del Reial decret legislatiu 5/2015, de 30 d'octubre, pel qual s'aprova el text refós de la Llei de l'Estatut bàsic de l'empleat públic, l'avaluació de l'acompliment és el procediment mitjançant el qual es mesuren i valoren...",
    number: 26,
    answers: [
      { text: "Els contractes públics.", correct: false },
      { text: "La conducta professional i el rendiment o l'assoliment de resultats.", correct: true },
      { text: "Els serveis que es presten a la ciutadania.", correct: false },
      { text: "Les polítiques públiques.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 1",
    question: "D'acord amb l'article 15 del text refós de la Llei de l'Estatut bàsic de l'empleat públic, la llibertat sindical és:",
    number: 27,
    answers: [
      { text: "Un dret individual exercit individualment.", correct: false },
      { text: "Un dret individual exercit de manera col·lectiva.", correct: true },
      { text: "Un deure individual exercit de manera col·lectiva.", correct: false },
      { text: "És un deure individual exercit de manera individual.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 1",
    question: "D'acord amb el text refós de la Llei de l'Estatut bàsic de l'empleat públic, és un dret individual exercit col·lectivament el dret a...",
    number: 28,
    answers: [
      { text: "La conciliació personal, familiar i laboral.", correct: false },
      { text: "Les vacances.", correct: false },
      { text: "La participació en la determinació de les condicions de treball.", correct: true },
      { text: "La lliure associació professional.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 1",
    question: "D'acord amb l'article 16 del text refós de la Llei de l'Estatut bàsic de l'empleat públic, en què consisteix la carrera horitzontal?",
    number: 29,
    answers: [
      { text: "En la progressió de grau, categoria, esglaó o altres conceptes anàlegs sense necessitat de canviar de lloc de treball.", correct: true },
      { text: "En l'ascens en l'estructura de llocs de treball mitjançant els procediments de provisió ordinaris.", correct: false },
      { text: "En l'ascens d'un cos a un altre de superior.", correct: false },
      { text: "En la progressió simultània a cossos o escales superiors.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 1",
    question: "D'acord amb la Llei 17/2015, del 21 de juliol, d'igualtat efectiva entre dones i homes, quin dels requisits següents és un dels requisits que han de complir els plans d'igualtat de dones i homes del sector públic?",
    number: 30,
    answers: [
      { text: "Tenir en compte els alts càrrecs a l'hora d'elaborar-los i aprovar-los.", correct: false },
      { text: "Incloure en l'articulat l'avaluació pròpia, que ha d'ésser anual.", correct: false },
      { text: "Tenir en compte els representants dels treballadors a l'hora d'elaborar-los i aprovar-los.", correct: true },
      { text: "Incloure en l'articulat mesures específiques per a adequar-los a les peculiaritats del personal laboral.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 1",
    question: "D'acord amb el glossari del Protocol d'intervenció per gestionar la diversitat per raó d'identitat de gènere a l'Administració de la Generalitat de Catalunya, què s'entén per cissexisme?",
    number: 31,
    answers: [
      { text: "L'estructura social que exclou les realitats tradicionals.", correct: false },
      { text: "La discriminació per l'atracció afectivosexual.", correct: false },
      { text: "La presumpció que tothom és heterosexual.", correct: false },
      { text: "La presumpció que tothom és cisgènere.", correct: true }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 1",
    question: "D'acord amb la Llei 15/2022, de 12 de juliol, integral per a la igualtat de tracte i la no-discriminació, a qui es reconeix el dret a la igualtat de tracte i no-discriminació?",
    number: 32,
    answers: [
      { text: "A toda persona, amb independència de la seva nacionalitat, de si és menor o major d'edat o de si gaudeix o no de residència legal.", correct: true },
      { text: "Als ciutadans i ciutadanes, majors d'edat, excloent-ne expressament les persones no nacionals i aquelles que no disposin de residència legal.", correct: false },
      { text: "Als ciutadans i ciutadanes de la Unió Europea, majors d'edat, sempre que disposin de residència legal a Catalunya.", correct: false },
      { text: "A les persones amb veïnatge civil i administratiu a Catalunya, majors d'edat, sempre que disposin de residència legal a l'Estat espanyol.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 1",
    question: "Quin delicte contra l'Administració pública consisteix a induir amb diners o obsequis un funcionari públic o funcionària pública perquè en l'exercici del seu càrrec dugui a terme un acte contrari als deures inherents a aquest càrrec?",
    number: 33,
    answers: [
      { text: "La violació de secrets.", correct: false },
      { text: "El suborn.", correct: true },
      { text: "L'abús en l'exercici de les funcions.", correct: false },
      { text: "El tràfic d'influències.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 1",
    question: "Quin delicte contra l'Administració pública consisteix a influir sobre l'autoritat fent-se valer de facultats derivades de la relació personal o jeràrquica per a obtenir un benefici econòmic?",
    number: 34,
    answers: [
      { text: "L'abús en l'exercici de les funcions.", correct: false },
      { text: "La violació de secrets.", correct: false },
      { text: "El suborn.", correct: false },
      { text: "El tràfic d'influències.", correct: true }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 1",
    question: "Pel que fa a les activitats prohibides al personal funcionari públic, quina de les activitats següents és un delicte contra l'Administració pública?",
    number: 35,
    answers: [
      { text: "La discriminació per raó de raça, ideologia, religió o sexe.", correct: false },
      { text: "Els delictes contra la inviolabilitat del domicili i altres garanties de la intimitat.", correct: false },
      { text: "La realització d'activitats professionals d'assessorament sobre una matèria en què hagi intervingut per raó del seu càrrec a l'Administració pública.", correct: true },
      { text: "Els delictes contra drets individuals, la censura prèvia i la dissolució de reunions degudament autoritzades.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 1",
    question: "A l'aplicació OneDrive, es pot compartir un document o una carpeta de l'espai personal des de l'ordinador de sobretaula o portàtil?",
    number: 36,
    answers: [
      { text: "No, no es poden compartir, només hi pot accedir i modificar-los la persona que els ha creat.", correct: false },
      { text: "Sí, es poden compartir mitjançant el correu electrònic o enviant-ne l'enllaç.", correct: true },
      { text: "Sí, però només es poden compartir per correu electrònic com signatura digital.", correct: false },
      { text: "Sí, però només es poden compartir enviant-ne l'enllaç des del Portasignatures.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 1",
    question: "Quina de les opcions següents no és un servei al núvol per a organitzar i gestionar reunions virtuals d'equips de treball?",
    number: 37,
    answers: [
      { text: "Teams meeting.", correct: false },
      { text: "Zoom.", correct: false },
      { text: "Jitsi.", correct: true },
      { text: "Google Meet.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 1",
    question: "El Decret 76/2020, de 4 d'agost, d'Administració digital, defineix el cicle de vida de les dades com l'organització de la seqüència de passos que fa...",
    number: 38,
    answers: [
      { text: "Un document, passant per les fases activa i inactiva.", correct: false },
      { text: "Una dada, passant per les fases activa i inactiva.", correct: false },
      { text: "Una dada, des que es genera fins que s'elimina.", correct: false },
      { text: "Una dada, des que es genera o es captura fins que eventualment s'arxiva o s'elimina.", correct: true }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 1",
    question: "Què analitza la tècnica informàtica denominada mineria de dades?",
    number: 39,
    answers: [
      { text: "Productes i recursos senzills per fer-los complexos.", correct: false },
      { text: "Qualsevol pàgina web.", correct: false },
      { text: "Informació autèntica que no sigui estadística i algoritmes de volum baix.", correct: false },
      { text: "Un gran volum d'informació emmagatzemada en diferents bases de dades.", correct: true }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 1",
    question: "D'acord amb la Llei 37/2007, de 16 de novembre, sobre reutilització de la informació del sector públic, què són les dades obertes?",
    number: 40,
    answers: [
      { text: "Dades de documents que només es poden llegir amb programari protegit per una llicència o per drets d'autor.", correct: false },
      { text: "Dades de documents que només es poden llegir amb eines gratuïtes.", correct: false },
      { text: "Dades que qualsevol persona pot reutilitzar i redistribuir lliurement.", correct: true },
      { text: "En l'àmbit de l'Administració pública, són el conjunt de dades públiques amb dret d'accés, transparència i govern obert de la ciutadania.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 1",
    question: "A l'administració de la Generalitat de Catalunya, on s'emmagatzemen els documents al núvol?",
    number: 1,
    answers: [
      { text: "En les xarxes compartides d'ordinadors de la Generalitat de Catalunya.", correct: false },
      { text: "En l'escriptori de qualsevol dispositiu.", correct: false },
      { text: "En un llapis de memòria compartit.", correct: false },
      { text: "En un espai virtual.", correct: true }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 1",
    question: "D'acord amb el text refós de la Llei de l'Estatut bàsic de l'empleat públic, quin tipus de dret és el dret a les vacances, descansos, permisos i llicències?",
    number: 2,
    answers: [
      { text: "Un dret individual.", correct: true },
      { text: "Un dret individual exercit de manera col·lectiva.", correct: false },
      { text: "No és un dret, és un principi de conducta.", correct: false },
      { text: "No és un dret, és un principi ètic.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 1",
    question: "En l'àmbit de les dades obertes de l'Administració digital, què és un format reutilitzable?",
    number: 3,
    answers: [
      { text: "Un format estructurat, obert i que no té propietaris.", correct: true },
      { text: "Un format PDF que es pot reutilitzar senzillament.", correct: false },
      { text: "Un format tancat, que té propietaris, amb llicència.", correct: false },
      { text: "Un format d'ús i llicències privades.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 1",
    question: "Segons l'Acord marc en relació amb os plans d'igualtat de gènere de l'Administració de la Generalitat de Catalunya, aquests plans es caracteritzen per ser:",
    number: 4,
    answers: [
      { text: "Vius, dinàmics i oberts.", correct: true },
      { text: "Efectius i sense dotació pressupostària.", correct: false },
      { text: "Basats en la no transversalitat de gènere.", correct: false },
      { text: "Renovables i no avaluables.", correct: false }
    ]
  },
  {
    theme: "2024; C1 PROMO INTERNA 1",
    question: "D'acord amb la Guia d'usos no sexistes de la llengua en els textos de l'Administració de la Generalitat de Catalunya, quina afirmació és correcta?",
    number: 5,
    answers: [
      { text: "Quan un text fa referència a una persona indeterminada, o a un grup de persones de diferents sexes, s'ha d'adaptar el discurs al gènere femení.", correct: false },
      { text: "Cal donar preferència, en general, als recursos que comporten l'ús de formes dobles.", correct: false },
      { text: "Cal donar preferència, en general, als recursos que no comporten l'ús de formes dobles.", correct: true },
      { text: "Quan un text fa referència a una persona determinada, o a un grup de persones del mateix sexe, s'ha d'adaptar el discurs al gènere femení.", correct: false }
    ]
  }
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