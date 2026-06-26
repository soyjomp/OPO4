const TEST_ID = "tema13"; 
const questions = [
  {
    question: "Segons la Llei 29/2010, quin és l'objecte principal de la llei?",
    number: 1,
    answers: [
      { text: "Regular l'ús dels mitjans electrònics en l'actuació de les administracions públiques catalanes.", correct: true },
      { text: "Obligar a tots els ciutadans a utilitzar el certificat digital obligatòriament.", correct: false },
      { text: "Eliminar la possibilitat de tramitar de forma presencial.", correct: false },
      { text: "Regular només la seguretat de la xarxa corporativa.", correct: false }
    ]
  },
  {
    question: "Què és el 'Catàleg de procediments' segons el model català?",
    number: 2,
    answers: [
      { text: "Un instrument que recull els procediments que es poden tramitar per mitjans electrònics.", correct: true },
      { text: "Un arxiu on es guarden les sancions dels ciutadans.", correct: false },
      { text: "La llista de tots els funcionaris que tenen accés a la seu.", correct: false },
      { text: "Un document d'obligat compliment per a les empreses privades.", correct: false }
    ]
  },
  {
    question: "Quin és un dret de la ciutadania en relació amb l'Administració electrònica a Catalunya?",
    number: 3,
    answers: [
      { text: "El dret a triar el canal de relació amb l'Administració.", correct: true },
      { text: "El dret a exigir que el procediment es faci només per correu postal.", correct: false },
      { text: "El dret a utilitzar qualsevol programari aliè a l'Administració.", correct: false },
      { text: "El dret a no identificar-se mai per fer tràmits.", correct: false }
    ]
  },
  {
    question: "Què s'entén per 'tramitació integrada' en el model català?",
    number: 4,
    answers: [
      { text: "L'articulació de sistemes perquè l'interessat no hagi d'aportar documents que ja tenen les AAPP.", correct: true },
      { text: "Que tots els tràmits han de ser presencials.", correct: false },
      { text: "La unificació de tots els departaments de la Generalitat en un sol despatx.", correct: false },
      { text: "L'obligació de presentar el DNI físic en cada pas.", correct: false }
    ]
  },
  {
    question: "Quin organisme és el principal impulsor de l'administració electrònica al món local català?",
    number: 5,
    answers: [
      { text: "El Consorci AOC (Administració Oberta de Catalunya).", correct: true },
      { text: "L'Agència Tributària de Catalunya.", correct: false },
      { text: "El Ministeri d'Indústria.", correct: false },
      { text: "La policia local.", correct: false }
    ]
  },
  {
    question: "La seu electrònica és el punt d'accés electrònic on...",
    number: 6,
    answers: [
      { text: "Els ciutadans poden accedir a la informació i serveis i realitzar tràmits.", correct: true },
      { text: "Només es publiquen lleis sense cap funció de tràmit.", correct: false },
      { text: "S'emmagatzemen exclusivament dades privades dels funcionaris.", correct: false },
      { text: "Es pot demanar hora per anar a un notari privat.", correct: false }
    ]
  },
  {
    question: "Què garanteix la interoperabilitat en el model català?",
    number: 7,
    answers: [
      { text: "Que les diferents aplicacions i sistemes puguin intercanviar dades.", correct: true },
      { text: "Que les computadores tinguin la mateixa marca.", correct: false },
      { text: "Que el ciutadà hagi de portar el mateix document a diverses oficines.", correct: false },
      { text: "Que els funcionaris parlin el mateix idioma tecnològic.", correct: false }
    ]
  },
  {
    question: "La signatura electrònica reconeguda en el model català és...",
    number: 8,
    answers: [
      { text: "Equivalent a la signatura manuscrita en paper.", correct: true },
      { text: "Menys segura que la signatura en paper.", correct: false },
      { text: "Només vàlida per a documents interns.", correct: false },
      { text: "Opcional i sense efectes jurídics.", correct: false }
    ]
  },
  {
    question: "Què permet el sistema d'identificació 'idCAT'?",
    number: 9,
    answers: [
      { text: "Identificar la ciutadania davant les administracions públiques.", correct: true },
      { text: "Accedir a les xarxes socials del President.", correct: false },
      { text: "Pagar multes de trànsit fora de Catalunya.", correct: false },
      { text: "Votar directament al Parlament des de casa.", correct: false }
    ]
  },
  {
    question: "El principi de 'neutralitat tecnològica' implica que l'Administració...",
    number: 10,
    answers: [
      { text: "No ha d'imposar l'ús de mitjans electrònics concrets o privatius als ciutadans.", correct: true },
      { text: "Ha de comprar els ordinadors més cars del mercat.", correct: false },
      { text: "Està obligada a utilitzar només programari de pagament.", correct: false },
      { text: "Només pot utilitzar mitjans que funcionin en sistemes operatius privats.", correct: false }
    ]
  },
  {
    question: "En el context català, el 'Registre d'Entrada i Sortida' electrònic garanteix...",
    number: 11,
    answers: [
      { text: "La constància de la recepció i presentació de documents.", correct: true },
      { text: "Que el document arriba abans que per correu.", correct: false },
      { text: "La destrucció automàtica de la sol·licitud.", correct: false },
      { text: "L'acceptació immediata de la petició pel funcionari.", correct: false }
    ]
  },
  {
    question: "Quina és la funció de la Plataforma de Serveis de Contractació Pública?",
    number: 12,
    answers: [
      { text: "Publicitar les licitacions i els contractes de l'Administració.", correct: true },
      { text: "Permetre que els ciutadans comprin productes a la Generalitat.", correct: false },
      { text: "Gestionar els sous dels empleats públics.", correct: false },
      { text: "Controlar el flux de trànsit a Barcelona.", correct: false }
    ]
  },
  {
    question: "La notificació electrònica en l'àmbit de la Generalitat...",
    number: 13,
    answers: [
      { text: "Té plena validesa jurídica si es realitza per mitjans segurs.", correct: true },
      { text: "Només és informativa, no té validesa legal.", correct: false },
      { text: "És obligatòria per a tots els ciutadans sense excepció.", correct: false },
      { text: "Només s'utilitza si el ciutadà viu a l'estranger.", correct: false }
    ]
  },
  {
    question: "El model català d'administració electrònica prioritza el fet que...",
    number: 14,
    answers: [
      { text: "L'Administració sigui més propera i accessible al ciutadà.", correct: true },
      { text: "Es redueixi el nombre de tràmits possibles.", correct: false },
      { text: "Només es pugui interactuar mitjançant cita prèvia.", correct: false },
      { text: "Es prohibeixi la tramitació presencial definitivament.", correct: false }
    ]
  },
  {
    question: "Què és la 'Carpeta Ciutadana'?",
    number: 15,
    answers: [
      { text: "Un espai personalitzat on el ciutadà consulta els seus expedients.", correct: true },
      { text: "Una carpeta física que s'envia a domicili.", correct: false },
      { text: "El sistema que utilitzen els polítics per guardar els seus documents.", correct: false },
      { text: "Un llistat públic de tots els deutes dels ciutadans.", correct: false }
    ]
  },
  {
    question: "La publicació de documents en el tauler d'anuncis electrònic...",
    number: 16,
    answers: [
      { text: "Substitueix a tots els efectes la publicació en el tauler físic.", correct: true },
      { text: "És complementària i no té validesa legal.", correct: false },
      { text: "Només és per a temes d'esports.", correct: false },
      { text: "No té cap valor jurídic segons la normativa.", correct: false }
    ]
  },
  {
    question: "En el model català, l'accés a les dades personals per mitjans electrònics...",
    number: 17,
    answers: [
      { text: "Ha de respectar la normativa de protecció de dades de caràcter personal.", correct: true },
      { text: "És totalment lliure per a qualsevol funcionari.", correct: false },
      { text: "No està regulat per cap llei específica.", correct: false },
      { text: "Permet que qualsevol veí consulti l'expedient d'un altre.", correct: false }
    ]
  },
  {
    question: "L'Administració Oberta de Catalunya (AOC) és...",
    number: 18,
    answers: [
      { text: "Un consorci format per la Generalitat i el món local.", correct: true },
      { text: "Un partit polític.", correct: false },
      { text: "Una empresa privada de programari.", correct: false },
      { text: "Un ministeri del govern central.", correct: false }
    ]
  },
  {
    question: "Per al dret a la informació electrònica, les AAPP han de:",
    number: 19,
    answers: [
      { text: "Mantenir els continguts actualitzats i accessibles.", correct: true },
      { text: "Publicar informació només en llengua anglesa.", correct: false },
      { text: "Escriure tota la informació en llenguatge tècnic difícil.", correct: false },
      { text: "Limitar l'accés a horaris nocturns.", correct: false }
    ]
  },
  {
    question: "La tramitació electrònica ha de ser accessible per a:",
    number: 20,
    answers: [
      { text: "Totes les persones, incloses les que tenen discapacitats.", correct: true },
      { text: "Només les persones que tinguin ordinadors d'alta gamma.", correct: false },
      { text: "Només les persones que parlin dues llengües.", correct: false },
      { text: "Només el personal de l'Administració.", correct: false }
    ]
  },
  {
    question: "Què garanteix la integritat d'un document electrònic?",
    number: 21,
    answers: [
      { text: "Que no ha estat manipulat ni alterat des de la seva signatura.", correct: true },
      { text: "Que el document és bonic estèticament.", correct: false },
      { text: "Que el document ocupa poc espai a la memòria.", correct: false },
      { text: "Que el document pot ser imprès moltes vegades.", correct: false }
    ]
  },
  {
    question: "Els sistemes de validació de la signatura electrònica serveixen per...",
    number: 22,
    answers: [
      { text: "Confirmar que la signatura és autèntica i està vigent.", correct: true },
      { text: "Esborrar la signatura per error.", correct: false },
      { text: "Canviar l'autor de la signatura.", correct: false },
      { text: "Impedir que el ciutadà signi documents.", correct: false }
    ]
  },
  {
    question: "La 'seu electrònica' ha d'estar vinculada a:",
    number: 23,
    answers: [
      { text: "La web corporativa o portal de l'Administració.", correct: true },
      { text: "El número de telèfon personal del funcionari.", correct: false },
      { text: "Una botiga online privada.", correct: false },
      { text: "A un arxiu físic que no té web.", correct: false }
    ]
  },
  {
    question: "Què permet el 'Codi Segur de Verificació' (CSV)?",
    number: 24,
    answers: [
      { text: "Verificar l'autenticitat d'una còpia en paper d'un document original electrònic.", correct: true },
      { text: "Accedir a la clau bancària del ciutadà.", correct: false },
      { text: "Bloquejar un expedient per sempre.", correct: false },
      { text: "Canviar el contingut del document original.", correct: false }
    ]
  },
  {
    question: "En el model català, es promou l'ús de...",
    number: 25,
    answers: [
      { text: "Programari de codi obert (llure).", correct: true },
      { text: "Programari que només funcioni a un país concret.", correct: false },
      { text: "Programari secret només per a l'Estat.", correct: false },
      { text: "Fulls de càlcul fets a mà.", correct: false }
    ]
  },
  {
    question: "La 'notificació' es considera practicada quan...",
    number: 26,
    answers: [
      { text: "L'interessat accedeix al seu contingut en la seu electrònica.", correct: true },
      { text: "El funcionari envia l'email (encara que ningú l'obri).", correct: false },
      { text: "Passa un segon des de l'enviament.", correct: false },
      { text: "Quan l'ordinador del ciutadà s'encén.", correct: false }
    ]
  },
  {
    question: "Quina és la finalitat del portal d'Internet de l'Administració?",
    number: 27,
    answers: [
      { text: "Facilitar l'accés a la informació i serveis públics.", correct: true },
      { text: "Publicar les fotos de les festes majors.", correct: false },
      { text: "Vendre publicitat d'empreses privades.", correct: false },
      { text: "Limitar la participació ciutadana.", correct: false }
    ]
  },
  {
    question: "L'ús de mitjans electrònics NO ha de suposar:",
    number: 28,
    answers: [
      { text: "Una discriminació per als ciutadans que no tenen mitjans.", correct: true },
      { text: "Una major eficàcia administrativa.", correct: false },
      { text: "L'estalvi de paper.", correct: false },
      { text: "La millora de la transparència.", correct: false }
    ]
  },
  {
    question: "La Llei 29/2010 obliga a les Administracions a:",
    number: 29,
    answers: [
      { text: "Garantir la seguretat de les comunicacions.", correct: true },
      { text: "Fer servir només el correu postal.", correct: false },
      { text: "Eliminar tots els funcionaris de carrera.", correct: false },
      { text: "No utilitzar mai l'Internet.", correct: false }
    ]
  },
  {
    question: "Què és el 'Catàleg de dades i documents'?",
    number: 30,
    answers: [
      { text: "Un repositori per evitar demanar al ciutadà el que l'AAPP ja té.", correct: true },
      { text: "Un fitxer de dades prohibides.", correct: false },
      { text: "La llista de tots els ciutadans que han comès faltes.", correct: false },
      { text: "Un document on s'escriuen les opinions dels funcionaris.", correct: false }
    ]
  },
  {
    question: "La signatura electrònica permet identificar...",
    number: 31,
    answers: [
      { text: "L'autor de la signatura.", correct: true },
      { text: "L'ordinador on es va comprar la signatura.", correct: false },
      { text: "L'adreça física de l'Administració.", correct: false },
      { text: "L'estat civil del ciutadà.", correct: false }
    ]
  },
  {
    question: "Els documents electrònics han de ser conservats:",
    number: 32,
    answers: [
      { text: "En formats que garanteixin la conservació a llarg termini.", correct: true },
      { text: "Sempre en paper i mai electrònicament.", correct: false },
      { text: "En un pendrive personal d'un funcionari.", correct: false },
      { text: "Només durant 24 hores.", correct: false }
    ]
  },
  {
    question: "En el model català, el principi d'agilitat administrativa s'aconsegueix amb:",
    number: 33,
    answers: [
      { text: "La tramitació electrònica.", correct: true },
      { text: "El retard intencionat dels tràmits.", correct: false },
      { text: "L'exigència de múltiples signatures en paper.", correct: false },
      { text: "La reducció dels canals d'informació.", correct: false }
    ]
  },
  {
    question: "Què es necessita per accedir a determinats tràmits electrònics de nivell alt?",
    number: 34,
    answers: [
      { text: "Un sistema d'identificació reforçat (com certificat digital).", correct: true },
      { text: "Només un nom d'usuari inventat.", correct: false },
      { text: "Enviar una carta certificada abans.", correct: false },
      { text: "Demanar permís telefònicament.", correct: false }
    ]
  },
  {
    question: "L'Administració pública catalana té el deure de:",
    number: 35,
    answers: [
      { text: "Promoure l'alfabetització digital de la ciutadania.", correct: true },
      { text: "Prohibir l'ús d'ordinadors als majors de 60 anys.", correct: false },
      { text: "Cobrar per qualsevol tràmit electrònic.", correct: false },
      { text: "Limitar la informació al ciutadà.", correct: false }
    ]
  },
  {
    question: "L'ús de la llengua catalana en l'administració electrònica:",
    number: 36,
    answers: [
      { text: "És obligatori i garanteix el dret dels ciutadans a utilitzar-la.", correct: true },
      { text: "Està prohibit per normativa estatal.", correct: false },
      { text: "És opcional segons el funcionari.", correct: false },
      { text: "No està regulat en la llei 29/2010.", correct: false }
    ]
  },
  {
    question: "La seu electrònica ha de mostrar:",
    number: 37,
    answers: [
      { text: "L'òrgan titular de la seu.", correct: true },
      { text: "El menú del dia de la cafeteria.", correct: false },
      { text: "Dades personals d'altres ciutadans.", correct: false },
      { text: "Publicitat de bancs privats.", correct: false }
    ]
  },
  {
    question: "Els sistemes d'intercanvi de dades entre administracions eviten que:",
    number: 38,
    answers: [
      { text: "El ciutadà hagi d'aportar documents que l'AAPP ja posseeix.", correct: true },
      { text: "El ciutadà pagui taxes.", correct: false },
      { text: "El ciutadà hagi d'omplir formularis.", correct: false },
      { text: "El funcionari treballi.", correct: false }
    ]
  },
  {
    question: "El model català es basa en la Llei 29/2010, que és una llei:",
    number: 39,
    answers: [
      { text: "Del Parlament de Catalunya.", correct: true },
      { text: "Del Congrés dels Diputats.", correct: false },
      { text: "De la Unió Europea.", correct: false },
      { text: "D'un ajuntament petit.", correct: false }
    ]
  },
  {
    question: "Què permet el sistema de signatura electrònica?",
    number: 40,
    answers: [
      { text: "Garantir l'autenticitat i integritat.", correct: true },
      { text: "Que el fitxer sigui menys segur.", correct: false },
      { text: "Que tothom pugui suplantar la identitat d'un altre.", correct: false },
      { text: "Que els documents es perdin més fàcilment.", correct: false }
    ]
  },
  {
    question: "Què és la 'Administració Oberta'?",
    number: 41,
    answers: [
      { text: "Un model d'AAPP transparent, participativa i col·laborativa.", correct: true },
      { text: "Una administració que no té parets ni oficines.", correct: false },
      { text: "Una administració que només funciona els caps de setmana.", correct: false },
      { text: "Un model on no hi ha normes.", correct: false }
    ]
  },
  {
    question: "La seu electrònica ha de tenir mesures de:",
    number: 42,
    answers: [
      { text: "Seguretat i autenticitat.", correct: true },
      { text: "Publicitat comercial.", correct: false },
      { text: "Vigilància física amb càmeres.", correct: false },
      { text: "Cap, perquè Internet és segur per defecte.", correct: false }
    ]
  },
  {
    question: "Els tràmits electrònics han de seguir criteris de:",
    number: 43,
    answers: [
      { text: "Simplicitat i facilitat d'ús.", correct: true },
      { text: "Complexitat màxima.", correct: false },
      { text: "Dificultat per evitar abusos.", correct: false },
      { text: "No hi ha cap criteri.", correct: false }
    ]
  },
  {
    question: "La Llei 29/2010 regula l'ús de mitjans electrònics en:",
    number: 44,
    answers: [
      { text: "El sector públic de Catalunya.", correct: true },
      { text: "Només en les empreses privades.", correct: false },
      { text: "Exclusivament a l'àmbit judicial.", correct: false },
      { text: "En les relacions entre particulars.", correct: false }
    ]
  },
  {
    question: "Què vol dir 'dret de relació' amb l'Administració?",
    number: 45,
    answers: [
      { text: "Que el ciutadà pot triar com interactuar amb l'AAPP.", correct: true },
      { text: "Que el ciutadà ha d'anar personalment a fer cues.", correct: false },
      { text: "Que el ciutadà ha de pagar pel dret a parlar.", correct: false },
      { text: "Que l'Administració té dret a ignorar el ciutadà.", correct: false }
    ]
  },
  {
    question: "Quina és una eina bàsica del model català?",
    number: 46,
    answers: [
      { text: "La Seu Electrònica.", correct: true },
      { text: "Un fax antic.", correct: false },
      { text: "Un tauler de suro a la paret.", correct: false },
      { text: "Un llibre de signatures manual.", correct: false }
    ]
  },
  {
    question: "L'Administració ha de garantir la confidencialitat de:",
    number: 47,
    answers: [
      { text: "Les dades personals dels ciutadans.", correct: true },
      { text: "Les despeses de la cafeteria.", correct: false },
      { text: "La llista de funcionaris que fan festa.", correct: false },
      { text: "Cap dada, tot ha de ser públic.", correct: false }
    ]
  },
  {
    question: "Els tràmits electrònics estan disponibles:",
    number: 48,
    answers: [
      { text: "De forma permanent (24h/365 dies), llevat de manteniment.", correct: true },
      { text: "Només quan el funcionari està a la oficina.", correct: false },
      { text: "Només en dies festius.", correct: false },
      { text: "Mai, són tràmits teòrics.", correct: false }
    ]
  },
  {
    question: "L'ús de mitjans electrònics per part del ciutadà és:",
    number: 49,
    answers: [
      { text: "Un dret, i en alguns casos (empreses) una obligació.", correct: true },
      { text: "Prohibit per llei.", correct: false },
      { text: "Obligatori per a tots els ciutadans sense excepció.", correct: false },
      { text: "Una opció només per als menors de 18 anys.", correct: false }
    ]
  },
  {
    question: "Què és la signatura electrònica?",
    number: 50,
    answers: [
      { text: "Un conjunt de dades en forma electrònica per identificar l'autor.", correct: true },
      { text: "Una contrasenya que només té el President.", correct: false },
      { text: "Una imatge d'un segell de goma.", correct: false },
      { text: "Un missatge de correu electrònic.", correct: false }
    ]
  },
  {
    question: "La llei 29/2010 té com a referent el principi de:",
    number: 51,
    answers: [
      { text: "Eficàcia i transparència.", correct: true },
      { text: "Secretisme burocràtic.", correct: false },
      { text: "Lentitud administrativa.", correct: false },
      { text: "Complicació dels tràmits.", correct: false }
    ]
  },
  {
    question: "Què significa l'accessibilitat en el web?",
    number: 52,
    answers: [
      { text: "Que tots els ciutadans puguin percebre i entendre el contingut.", correct: true },
      { text: "Que el web sigui només per a usuaris registrats.", correct: false },
      { text: "Que el web només funcioni amb Internet ràpid.", correct: false },
      { text: "Que el web estigui en venda.", correct: false }
    ]
  },
  {
    question: "Un ciutadà pot presentar un escrit per correu electrònic?",
    number: 53,
    answers: [
      { text: "Sí, sempre que sigui a través del registre electrònic habilitat.", correct: true },
      { text: "Mai, no és un mitjà vàlid.", correct: false },
      { text: "Només si l'escrit és molt curt.", correct: false },
      { text: "Només els caps de setmana.", correct: false }
    ]
  },
  {
    question: "El model català té per objectiu eliminar:",
    number: 54,
    answers: [
      { text: "La burocràcia innecessària.", correct: true },
      { text: "El dret a la defensa.", correct: false },
      { text: "La transparència.", correct: false },
      { text: "El dret a l'accés a l'informació.", correct: false }
    ]
  },
  {
    question: "Les administracions públiques han de fomentar:",
    number: 55,
    answers: [
      { text: "L'ús de l'administració electrònica.", correct: true },
      { text: "L'ús de paper imprès.", correct: false },
      { text: "L'ús de sistemes obsolets.", correct: false },
      { text: "Que el ciutadà no faci tràmits.", correct: false }
    ]
  },
  {
    question: "Què passa si un tràmit electrònic no funciona per avaria tècnica?",
    number: 56,
    answers: [
      { text: "Es poden ampliar els terminis de presentació.", correct: true },
      { text: "El ciutadà perd el dret a presentar-lo.", correct: false },
      { text: "L'Administració multa el ciutadà.", correct: false },
      { text: "El tràmit s'anul·la permanentment.", correct: false }
    ]
  },
  {
    question: "Els documents electrònics tenen plena validesa:",
    number: 57,
    answers: [
      { text: "Si compleixen els requisits tècnics i legals.", correct: true },
      { text: "Només si el funcionari els imprimeix.", correct: false },
      { text: "Només per a tràmits de poc valor.", correct: false },
      { text: "Mai.", correct: false }
    ]
  },
  {
    question: "L'Administració ha d'informar als ciutadans sobre:",
    number: 58,
    answers: [
      { text: "Com utilitzar els serveis electrònics.", correct: true },
      { text: "Les opinions polítiques del govern.", correct: false },
      { text: "Com saltar-se les normes de seguretat.", correct: false },
      { text: "Res, la informació és secreta.", correct: false }
    ]
  },
  {
    question: "El model català de govern obert inclou:",
    number: 59,
    answers: [
      { text: "La transparència, la participació i la col·laboració.", correct: true },
      { text: "El secretisme, l'ocultació i la rigidesa.", correct: false },
      { text: "El control autoritari i la restricció.", correct: false },
      { text: "La burocràcia extrema.", correct: false }
    ]
  },
  {
    question: "En conclusió, quin és el benefici principal per al ciutadà?",
    number: 60,
    answers: [
      { text: "Un accés més fàcil, àgil i transparent a l'Administració.", correct: true },
      { text: "Tenir més obligacions de pagament.", correct: false },
      { text: "Haver d'anar més sovint a les oficines físiques.", correct: false },
      { text: "No tenir cap benefici extra.", correct: false }
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