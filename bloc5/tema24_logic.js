const TEST_ID = "tema24"; 
const questions = [
  {
    question: "Què s'entén principalment pel concepte 'computació al núvol' (cloud computing)?",
    number: 1,
    answers: [
      { text: "L'accés a serveis i recursos informàtics a través d'Internet.", correct: true },
      { text: "L'emmagatzematge exclusiu en discos durs locals físics.", correct: false },
      { text: "La instal·lació de servidors físics a cada departament.", correct: false },
      { text: "L'ús de xarxes privades sense sortida a l'exterior.", correct: false }
    ]
  },
  {
    question: "Quin és un dels avantatges principals d'utilitzar OneDrive en l'entorn corporatiu?",
    number: 2,
    answers: [
      { text: "La facilitat d'accés a les dades des de qualsevol dispositiu i ubicació.", correct: true },
      { text: "La garantia que les dades no sortiran mai del país.", correct: false },
      { text: "L'eliminació total de la necessitat d'Internet.", correct: false },
      { text: "La reducció de la seguretat en favor de la velocitat.", correct: false }
    ]
  },
  {
    question: "OneDrive forma part de quin ecosistema corporatiu d'ofimàtica?",
    number: 3,
    answers: [
      { text: "Microsoft 365.", correct: true },
      { text: "Google Workspace.", correct: false },
      { text: "Adobe Creative Cloud.", correct: false },
      { text: "Linux Open Office.", correct: false }
    ]
  },
  {
    question: "Què permet la funció de 'coautoria' (co-authoring) en un fitxer d'OneDrive?",
    number: 4,
    answers: [
      { text: "L'edició simultània d'un document per diversos usuaris.", correct: true },
      { text: "La prohibició d'accés a altres usuaris mentre l'autor treballa.", correct: false },
      { text: "La conversió automàtica de fitxers de text a PDF.", correct: false },
      { text: "L'enviament massiu de correus electrònics.", correct: false }
    ]
  },
  {
    question: "Què implica tenir un fitxer 'sincronitzat' amb OneDrive a l'ordinador?",
    number: 5,
    answers: [
      { text: "Que els canvis fets localment es reflecteixen automàticament al núvol.", correct: true },
      { text: "Que el fitxer s'esborra si no es fa còpia de seguretat.", correct: false },
      { text: "Que el fitxer només es pot obrir des d'un navegador web.", correct: false },
      { text: "Que el fitxer es duplica indefinidament.", correct: false }
    ]
  },
  {
    question: "Què representa la icona de la 'núvol blau' al costat d'un fitxer en l'Explorador d'Arxius?",
    number: 6,
    answers: [
      { text: "Que el fitxer està al núvol i es descarregarà quan s'obri.", correct: true },
      { text: "Que el fitxer s'ha suprimit correctament.", correct: false },
      { text: "Que el fitxer s'està imprimint.", correct: false },
      { text: "Que el fitxer té un virus.", correct: false }
    ]
  },
  {
    question: "Com es pot compartir un fitxer amb un usuari extern si la normativa ho permet?",
    number: 7,
    answers: [
      { text: "Generant un enllaç de compartició des de l'opció 'Compartir'.", correct: true },
      { text: "Enviant tot el servidor per correu electrònic.", correct: false },
      { text: "Donant les credencials personals d'accés.", correct: false },
      { text: "Copiant el fitxer en un llapis USB i enviant-lo per correu postal.", correct: false }
    ]
  },
  {
    question: "Quina funció permet recuperar versions anteriors d'un document a OneDrive?",
    number: 8,
    answers: [
      { text: "L'historial de versions.", correct: true },
      { text: "La paperera de reciclatge universal.", correct: false },
      { text: "La restauració de fàbrica.", correct: false },
      { text: "L'opció de formatar disc.", correct: false }
    ]
  },
  {
    question: "En l'entorn de la Generalitat, quina és la finalitat principal d'OneDrive?",
    number: 9,
    answers: [
      { text: "L'emmagatzematge i la gestió de documents de treball de manera segura.", correct: true },
      { text: "L'emmagatzematge de fotos personals de vacances.", correct: false },
      { text: "La instal·lació d'aplicacions de jocs corporatius.", correct: false },
      { text: "La gestió exclusiva de correu electrònic.", correct: false }
    ]
  },
  {
    question: "Què és la 'Paperera de reciclatge' d'OneDrive?",
    number: 10,
    answers: [
      { text: "Un espai on van els fitxers eliminats abans de la seva supressió definitiva.", correct: true },
      { text: "Un lloc on es guarden els fitxers que no s'han pogut obrir.", correct: false },
      { text: "Una carpeta de correu brossa.", correct: false },
      { text: "Un arxiu d'errors de sistema.", correct: false }
    ]
  },
  {
    question: "Què significa 'treballar sense connexió' en OneDrive?",
    number: 11,
    answers: [
      { text: "Editar fitxers localment que es sincronitzaran quan hi hagi Internet.", correct: true },
      { text: "Que l'ordinador s'ha apagat.", correct: false },
      { text: "Que no es poden desar els canvis de cap manera.", correct: false },
      { text: "Que el servei està caigut per a tothom.", correct: false }
    ]
  },
  {
    question: "Quin és el risc de seguretat més comú en compartir enllaços d'OneDrive sense control?",
    number: 12,
    answers: [
      { text: "Que l'enllaç pugui ser reenviat a persones no autoritzades.", correct: true },
      { text: "Que el núvol s'ompli de virus automàticament.", correct: false },
      { text: "Que l'ordinador es bloquegi físicament.", correct: false },
      { text: "Que el fitxer es converteixi en un format inintel·ligible.", correct: false }
    ]
  },
  {
    question: "Com s'anomena la configuració que permet mantenir fitxers al PC per accedir-hi sense Internet?",
    number: 13,
    answers: [
      { text: "Mantenir sempre en aquest dispositiu.", correct: true },
      { text: "Alliberar espai.", correct: false },
      { text: "Sincronització selectiva.", correct: false },
      { text: "Copia offline obligatòria.", correct: false }
    ]
  },
  {
    question: "En OneDrive, què és una biblioteca de documents?",
    number: 14,
    answers: [
      { text: "Un lloc d'emmagatzematge col·lectiu, sovint associat a SharePoint.", correct: true },
      { text: "Una carpeta privada que només veu l'administrador del sistema.", correct: false },
      { text: "Un llibre digitalitzat.", correct: false },
      { text: "Un recurs del sistema operatiu per a impressores.", correct: false }
    ]
  },
  {
    question: "Quan s'elimina un fitxer d'OneDrive corporatiu, quant de temps sol estar a la paperera (aproximadament)?",
    number: 15,
    answers: [
      { text: "93 dies (per defecte a SharePoint/OneDrive for Business).", correct: true },
      { text: "24 hores.", correct: false },
      { text: "Un any.", correct: false },
      { text: "Mai s'esborra del tot.", correct: false }
    ]
  },
  {
    question: "Per què és aconsellable utilitzar OneDrive en comptes d'arxius en local?",
    number: 16,
    answers: [
      { text: "Per garantir la còpia de seguretat i l'accessibilitat remota.", correct: true },
      { text: "Perquè és més barat que comprar un disc dur.", correct: false },
      { text: "Perquè augmenta la potència del processador.", correct: false },
      { text: "Perquè no requereix gestionar contrasenyes.", correct: false }
    ]
  },
  {
    question: "Què permet fer l'opció 'Solicitar fitxers' a OneDrive?",
    number: 17,
    answers: [
      { text: "Permet que altres usuaris pugin fitxers a una carpeta sense veure'n el contingut.", correct: true },
      { text: "Envia un avís a l'informàtic de guàrdia.", correct: false },
      { text: "Esborra els fitxers dels altres usuaris.", correct: false },
      { text: "Descarrega automàticament tots els fitxers de l'empresa.", correct: false }
    ]
  },
  {
    question: "Quina és la diferència principal entre OneDrive i SharePoint en l'àmbit de la Generalitat?",
    number: 18,
    answers: [
      { text: "OneDrive és per a ús personal/d'usuari; SharePoint és per a ús col·laboratiu/equip.", correct: true },
      { text: "OneDrive és gratuït i SharePoint és de pagament.", correct: false },
      { text: "Són exactament el mateix.", correct: false },
      { text: "OneDrive és només per a fotos i SharePoint per a text.", correct: false }
    ]
  },
  {
    question: "Com pots veure qui ha modificat un fitxer compartit recentment?",
    number: 19,
    answers: [
      { text: "Mitjançant el panell de detalls o l'historial del fitxer.", correct: true },
      { text: "Preguntant per correu electrònic a tothom.", correct: false },
      { text: "No es pot saber mai.", correct: false },
      { text: "Mirant les propietats de la impressora.", correct: false }
    ]
  },
  {
    question: "Què passa si s'excedeix la quota d'emmagatzematge a OneDrive?",
    number: 20,
    answers: [
      { text: "No es poden pujar ni sincronitzar nous fitxers.", correct: true },
      { text: "L'ordinador s'espatlla.", correct: false },
      { text: "Es borren automàticament els fitxers més antics.", correct: false },
      { text: "Es cobra automàticament al compte bancari de l'usuari.", correct: false }
    ]
  },
  {
    question: "La 'Sincronització selectiva' permet:",
    number: 21,
    answers: [
      { text: "Triar quines carpetes del núvol es volen tenir al PC.", correct: true },
      { text: "Seleccionar quins fitxers tenen millor qualitat.", correct: false },
      { text: "Bloquejar l'accés a carpetes per a certs horaris.", correct: false },
      { text: "Escollir la velocitat de connexió a Internet.", correct: false }
    ]
  },
  {
    question: "Què és un 'enllaç compartible' tipus 'només lectura'?",
    number: 22,
    answers: [
      { text: "L'usuari receptor pot veure el fitxer però no pot editar-lo.", correct: true },
      { text: "El fitxer s'obre però no es pot imprimir.", correct: false },
      { text: "L'usuari ha de pagar per veure'l.", correct: false },
      { text: "El fitxer s'esborra després de llegir-lo.", correct: false }
    ]
  },
  {
    question: "Com s'accedeix a OneDrive a través d'un navegador web?",
    number: 23,
    answers: [
      { text: "Mitjançant el portal d'Office 365 amb les credencials corporatives.", correct: true },
      { text: "Cercant a Google sense identificar-se.", correct: false },
      { text: "Entrant a qualsevol web d'arxius públics.", correct: false },
      { text: "Instal·lant una extensió de navegador de tercers.", correct: false }
    ]
  },
  {
    question: "Quina de les següents accions és una mala pràctica de seguretat?",
    number: 24,
    answers: [
      { text: "Compartir un enllaç 'Qualsevol amb l'enllaç' per a dades sensibles.", correct: true },
      { text: "Tancar la sessió en ordinadors compartits.", correct: false },
      { text: "Utilitzar l'autenticació multifactor (MFA).", correct: false },
      { text: "Revisar periòdicament els permisos compartits.", correct: false }
    ]
  },
  {
    question: "Què s'entén per 'dades al núvol' des del punt de vista de la protecció de dades (RGPD)?",
    number: 25,
    answers: [
      { text: "Dades que, tot i estar al núvol, han de seguir complint la normativa de protecció de dades.", correct: true },
      { text: "Dades que deixen de ser privades pel fet d'estar al núvol.", correct: false },
      { text: "Dades que no tenen cap restricció legal.", correct: false },
      { text: "Dades que només poden ser propietat de l'empresa proveïdora del núvol.", correct: false }
    ]
  },
  {
    question: "OneDrive pot previsualitzar fitxers sense descarregar-los?",
    number: 26,
    answers: [
      { text: "Sí, des de la interfície web.", correct: true },
      { text: "No, sempre s'han de baixar i obrir amb el programa corresponent.", correct: false },
      { text: "Només si el fitxer és un PDF.", correct: false },
      { text: "Només si el fitxer és de text pla (.txt).", correct: false }
    ]
  },
  {
    question: "Com es diu el procés de verificar la identitat a més de la contrasenya en accedir a OneDrive?",
    number: 27,
    answers: [
      { text: "Autenticació multifactor (MFA).", correct: true },
      { text: "Doble còpia de seguretat.", correct: false },
      { text: "Sincronització profunda.", correct: false },
      { text: "Validació d'arxius.", correct: false }
    ]
  },
  {
    question: "Els fitxers eliminats permanentment es poden recuperar?",
    number: 28,
    answers: [
      { text: "No, en la majoria de casos corporatius una vegada esborrats de la segona paperera.", correct: true },
      { text: "Sí, sempre, fins a 10 anys després.", correct: false },
      { text: "Sí, l'informàtic pot recuperar tot el servidor.", correct: false },
      { text: "Depèn del color del fitxer.", correct: false }
    ]
  },
  {
    question: "OneDrive permet organitzar els fitxers en:",
    number: 29,
    answers: [
      { text: "Carpetes i subcarpetes de manera jeràrquica.", correct: true },
      { text: "Només una llista plana sense estructurar.", correct: false },
      { text: "Només es poden ordenar per data.", correct: false },
      { text: "No permet organització, tot va a una sola carpeta.", correct: false }
    ]
  },
  {
    question: "Què és la 'cerca' a OneDrive?",
    number: 30,
    answers: [
      { text: "Una eina per trobar fitxers pel nom o contingut dins del teu núvol.", correct: true },
      { text: "Un cercador d'Internet aliè a l'empresa.", correct: false },
      { text: "Una eina per trobar virus.", correct: false },
      { text: "Una funció per cercar la ubicació física del servidor.", correct: false }
    ]
  },
  {
    question: "Si canvies el nom d'un fitxer a OneDrive a l'ordinador:",
    number: 31,
    answers: [
      { text: "El nom també canvia al núvol de forma automàtica.", correct: true },
      { text: "El fitxer es duplica amb els dos noms.", correct: false },
      { text: "La sincronització es bloqueja fins que l'informàtic l'arregli.", correct: false },
      { text: "El fitxer desapareix.", correct: false }
    ]
  },
  {
    question: "Quina és la millor forma de treballar de manera col·laborativa en un document de Word?",
    number: 32,
    answers: [
      { text: "Guardar-lo a OneDrive i compartir l'enllaç d'edició.", correct: true },
      { text: "Enviar-lo per correu electrònic a tots els companys.", correct: false },
      { text: "Imprimir-lo i que cadascú faci notes a mà.", correct: false },
      { text: "Desar diverses versions al PC i renombrar-les amb el nom de cada usuari.", correct: false }
    ]
  },
  {
    question: "L'ús d'OneDrive és compatible amb dispositius mòbils (telèfons/tablets)?",
    number: 33,
    answers: [
      { text: "Sí, mitjançant l'aplicació oficial.", correct: true },
      { text: "No, és una eina exclusiva per a ordinadors de sobretaula.", correct: false },
      { text: "Només si es fa servir una VPN molt complexa.", correct: false },
      { text: "Només per a lectura, mai per a edició.", correct: false }
    ]
  },
  {
    question: "Què s'ha de fer abans de deixar de fer servir un ordinador compartit?",
    number: 34,
    answers: [
      { text: "Tancar la sessió d'OneDrive/Microsoft 365.", correct: true },
      { text: "Esborrar el sistema operatiu.", correct: false },
      { text: "Deixar la sessió oberta per al següent company.", correct: false },
      { text: "Apagar el monitor.", correct: false }
    ]
  },
  {
    question: "OneDrive està integrat amb altres aplicacions de Microsoft 365 com:",
    number: 35,
    answers: [
      { text: "Word, Excel i PowerPoint.", correct: true },
      { text: "Programes de disseny gràfic complex de tercers.", correct: false },
      { text: "Controladors de maquinària pesada.", correct: false },
      { text: "Programari de comptabilitat totalment aliè.", correct: false }
    ]
  },
  {
    question: "Què permet fer l'opció 'Historial de versions'?",
    number: 36,
    answers: [
      { text: "Veure i restaurar canvis anteriors fets en un fitxer.", correct: true },
      { text: "Veure qui s'ha connectat al teu PC.", correct: false },
      { text: "Eliminar les versions velles de l'Office.", correct: false },
      { text: "Actualitzar el Windows.", correct: false }
    ]
  },
  {
    question: "En l'entorn de treball, on hauries de desar els teus documents de feina?",
    number: 37,
    answers: [
      { text: "En OneDrive o SharePoint, segons les polítiques del teu departament.", correct: true },
      { text: "En una carpeta oculta del disc dur local.", correct: false },
      { text: "En un servei de núvol personal aliè a la Generalitat.", correct: false },
      { text: "En un llapis USB de propietat privada.", correct: false }
    ]
  },
  {
    question: "La funció 'Autoguardat' a les aplicacions Office (Word/Excel) funciona amb:",
    number: 38,
    answers: [
      { text: "Fitxers desats a OneDrive o SharePoint.", correct: true },
      { text: "Només fitxers desats en disquet.", correct: false },
      { text: "Només fitxers que no s'han guardat mai.", correct: false },
      { text: "Fitxers que s'han esborrat.", correct: false }
    ]
  },
  {
    question: "Pots compartir un fitxer només amb persones concretes?",
    number: 39,
    answers: [
      { text: "Sí, especificant els seus correus electrònics.", correct: true },
      { text: "No, o ho veu tothom o ningú.", correct: false },
      { text: "Només si són del mateix grup de treball.", correct: false },
      { text: "Només amb l'administrador del sistema.", correct: false }
    ]
  },
  {
    question: "Què indica una icona de 'creu vermella' a la sincronització de OneDrive?",
    number: 40,
    answers: [
      { text: "Que hi ha un error de sincronització que s'ha de revisar.", correct: true },
      { text: "Que el fitxer és molt gran.", correct: false },
      { text: "Que el fitxer està en mode segur.", correct: false },
      { text: "Que la connexió va molt ràpida.", correct: false }
    ]
  },
  {
    question: "OneDrive és un exemple de:",
    number: 41,
    answers: [
      { text: "SaaS (Software as a Service) / Emmagatzematge al núvol.", correct: true },
      { text: "Un servidor web de correu privat.", correct: false },
      { text: "Un sistema de gestió de bases de dades SQL.", correct: false },
      { text: "Un sistema de cablejat estructurat.", correct: false }
    ]
  },
  {
    question: "Com puc saber quant espai em queda a OneDrive?",
    number: 42,
    answers: [
      { text: "A través de la configuració de l'aplicació o web.", correct: true },
      { text: "Mirant la llum de l'ordinador.", correct: false },
      { text: "Calculant els fitxers a ull.", correct: false },
      { text: "Trucant al servei d'atenció al client d'Internet.", correct: false }
    ]
  },
  {
    question: "OneDrive permet la gestió de carpetes compartides?",
    number: 43,
    answers: [
      { text: "Sí, per facilitar el treball en equip.", correct: true },
      { text: "No, només fitxers individuals.", correct: false },
      { text: "Només si les carpetes són buides.", correct: false },
      { text: "Només si són carpetes de sistema.", correct: false }
    ]
  },
  {
    question: "Què és un enllaç de compartició 'caducable'?",
    number: 44,
    answers: [
      { text: "Un enllaç que deixa de funcionar després d'una data determinada.", correct: true },
      { text: "Un enllaç que s'esborra si el fitxer pesa poc.", correct: false },
      { text: "Un enllaç que només funciona si tens molta bateria.", correct: false },
      { text: "Un enllaç que caduca si l'ordinador es reinicia.", correct: false }
    ]
  },
  {
    question: "La seguretat d'OneDrive es basa, entre d'altres, en:",
    number: 45,
    answers: [
      { text: "Xifratge de dades tant en trànsit com en repòs.", correct: true },
      { text: "L'ús de contrasenyes senzilles com '1234'.", correct: false },
      { text: "La manca de vigilància dels servidors.", correct: false },
      { text: "No utilitzar cap tipus de protecció.", correct: false }
    ]
  },
  {
    question: "Pots moure fitxers d'una carpeta a una altra dins d'OneDrive?",
    number: 46,
    answers: [
      { text: "Sí, mitjançant arrossegar i deixar anar o tallar/enganxar.", correct: true },
      { text: "No, un cop a una carpeta s'han de quedar allà.", correct: false },
      { text: "Només si les carpetes estan al mateix ordinador.", correct: false },
      { text: "Només si l'administrador dona permís cada vegada.", correct: false }
    ]
  },
  {
    question: "Què succeeix si edites un fitxer al núvol mentre estàs sense connexió?",
    number: 47,
    answers: [
      { text: "El canvi es guarda localment i es sincronitza en recuperar connexió.", correct: true },
      { text: "Es perd tota la feina.", correct: false },
      { text: "L'aplicació es tanca de cop.", correct: false },
      { text: "El fitxer es bloqueja.", correct: false }
    ]
  },
  {
    question: "És possible veure qui té accés a un fitxer específic?",
    number: 48,
    answers: [
      { text: "Sí, a través de les opcions de 'Gestionar accés' o 'Compartit amb'.", correct: true },
      { text: "No, és una dada confidencial de Microsoft.", correct: false },
      { text: "Només si ets l'administrador global de la Generalitat.", correct: false },
      { text: "No, la llista d'usuaris és privada.", correct: false }
    ]
  },
  {
    question: "Quina és la millor eina per a la gestió de projectes i documents en equip a la Generalitat?",
    number: 49,
    answers: [
      { text: "SharePoint / Microsoft 365 Groups.", correct: true },
      { text: "Un fitxer de text al PC de l'escriptori.", correct: false },
      { text: "Correu electrònic sense adjunts.", correct: false },
      { text: "Xarxes socials públiques.", correct: false }
    ]
  },
  {
    question: "Com pots bloquejar l'accés a un fitxer que havies compartit abans?",
    number: 50,
    answers: [
      { text: "Des de les opcions de 'Gestionar accés' o eliminant l'enllaç.", correct: true },
      { text: "Apagant l'ordinador del receptor.", correct: false },
      { text: "No es pot bloquejar un cop compartit.", correct: false },
      { text: "Esborrant el teu compte d'usuari.", correct: false }
    ]
  },
  {
    question: "OneDrive permet desar fitxers PDF?",
    number: 51,
    answers: [
      { text: "Sí, és un tipus de fitxer com qualsevol altre.", correct: true },
      { text: "No, només permet fitxers d'Office.", correct: false },
      { text: "Només si el PDF pesa menys d'1 MB.", correct: false },
      { text: "No, els PDF estan prohibits.", correct: false }
    ]
  },
  {
    question: "Què és la integració amb l'Explorador d'Arxius?",
    number: 52,
    answers: [
      { text: "Que OneDrive apareix com una carpeta més dins del teu PC.", correct: true },
      { text: "Que OneDrive substitueix el Windows.", correct: false },
      { text: "Que OneDrive només funciona dins de l'Explorador.", correct: false },
      { text: "Que l'Explorador es fa més lent.", correct: false }
    ]
  },
  {
    question: "Què és un 'conflicte de sincronització'?",
    number: 53,
    answers: [
      { text: "Quan dos usuaris han editat el mateix fitxer al mateix temps sense connexió.", correct: true },
      { text: "Quan el fitxer té un nom massa llarg.", correct: false },
      { text: "Quan l'Internet és massa ràpid.", correct: false },
      { text: "Quan el fitxer està encriptat.", correct: false }
    ]
  },
  {
    question: "OneDrive és segur per a dades corporatives de la Generalitat?",
    number: 54,
    answers: [
      { text: "Sí, sempre que s'utilitzi seguint les polítiques de seguretat corporatives.", correct: true },
      { text: "No, mai s'han de pujar dades corporatives al núvol.", correct: false },
      { text: "És igual que un núvol personal gratuït.", correct: false },
      { text: "No, és una eina que no compleix cap llei.", correct: false }
    ]
  },
  {
    question: "Pots utilitzar OneDrive per crear un full de càlcul (Excel) directament al núvol?",
    number: 55,
    answers: [
      { text: "Sí, mitjançant les versions web de l'Office.", correct: true },
      { text: "No, sempre s'ha de fer a l'ordinador.", correct: false },
      { text: "Només si ets un usuari avançat.", correct: false },
      { text: "No, el núvol no permet crear fitxers, només desar-los.", correct: false }
    ]
  },
  {
    question: "Què fa l'opció 'Alliberar espai' a OneDrive?",
    number: 56,
    answers: [
      { text: "Esborra la còpia local del fitxer, mantenint-lo al núvol.", correct: true },
      { text: "Esborra el fitxer definitivament del núvol.", correct: false },
      { text: "Comprimeix el PC per fer-lo més petit físicament.", correct: false },
      { text: "Desactiva la targeta gràfica.", correct: false }
    ]
  },
  {
    question: "Pots personalitzar la configuració de OneDrive?",
    number: 57,
    answers: [
      { text: "Sí, mitjançant les opcions de configuració de l'aplicació.", correct: true },
      { text: "No, Microsoft no permet cap canvi.", correct: false },
      { text: "Només si el teu PC té Windows 11.", correct: false },
      { text: "No, l'administrador ho bloqueja tot.", correct: false }
    ]
  },
  {
    question: "És aconsellable utilitzar contrasenyes fortes en el teu compte corporatiu?",
    number: 58,
    answers: [
      { text: "Sí, és fonamental per protegir les dades corporatives.", correct: true },
      { text: "No, és millor posar la mateixa que tothom.", correct: false },
      { text: "No importa, el núvol ja és segur per si sol.", correct: false },
      { text: "És opcional.", correct: false }
    ]
  },
  {
    question: "OneDrive permet crear enllaços que expiren?",
    number: 59,
    answers: [
      { text: "Sí, és una opció de seguretat addicional.", correct: true },
      { text: "No, els enllaços duren per sempre.", correct: false },
      { text: "Només els enllaços que es creen des del mòbil.", correct: false },
      { text: "No, només l'administrador pot fer-ho.", correct: false }
    ]
  },
  {
    question: "El treball al núvol fomenta la:",
    number: 60,
    answers: [
      { text: "Col·laboració i l'eficiència en els equips de treball.", correct: true },
      { text: "Aïllament dels treballadors.", correct: false },
      { text: "Duplicitat innecessària d'arxius.", correct: false },
      { text: "Pèrdua d'informació constant.", correct: false }
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