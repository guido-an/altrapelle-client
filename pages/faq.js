import ContainerApp from '../components/atoms/ContainerApp';
import IntroPage from '../components/molecules/IntroPage';
import Faq from 'react-faq-component';
import AnimatedWrapper from '../components/atoms/AnimatedWrapper';
import { NextSeo } from 'next-seo';

const altrapelle = {
  title: 'Altrapelle',
  rows: [
    {
      title: 'Dove vengono fabbricati i prodotti Altrapelle?',
      content:
        'Altrapelle seleziona i migliori laboratori e fornitori di materie prime italiani ed europei con sistemi di qualità certificati e nel rispetto delle Good Manufacturing Practices (Norme di Buona Preparazione). ',
    },
    {
      title: 'I prodotti Altrapelle sono elaborati a partire da ingredienti naturali?',
      content:
        "In Altrapelle crediamo in una cosmetica al tempo stesso efficace, naturale, ragionata e sensoriale. Privilegiamo gli ingredienti di origine naturale ma allo stesso tempo utilizziamo i migliori ingredienti al fine di migliorare costantemente le nostre formule ed ottimizzarne l'efficacia.",
    },
    {
      title: 'Testate sugli animali i vostri prodotti e gli ingredienti?',
      content:
        'Altrapelle è contro i test sugli animali. I prodotti Altrapelle non sono testati sugli animali, conformemente alla normativa europea. Inoltre, non utilizziamo ingredienti di origine animale.',
    },
    {
      title: 'Per quanto tempo si può conservare un prodotto prima dell’apertura?',
      content:
        'La maggior parte delle nostre formule cosmetiche ha una stabilità dimostrata di più di 30 mesi. Alcuni prodotti invece riportano la data di scadenza sulla confezione, che generalmente è tra i 24-36 mesi dalla data di produzione.',
    },
    {
      title: 'Per quanto tempo posso conservare un prodotto una volta aperto?',
      content:
        "Per i prodotti cosmetici, la durata dopo l'apertura varia generalmente tra i 6 e i 24 mesi ed è indicata sulla confezione di tutti i nostri prodotti (sotto forma di un pittogramma che rappresenta un barattolo aperto con sopra un numero e la lettera 'm').",
    },
    {
      title: 'I prodotti sono controindicati in gravidanza e allattamento?',
      content:
        "A titolo precauzionale, nei primi mesi di gravidanza e durante l'allattamento consigliamo di consultare il tuo medico per l’utilizzo di qualsiasi prodotto che sia cosmetico o dispositivo medico.",
    },
    {
      title: 'I prodotti Altrapelle sono vegani?',
      content:
        'La maggior parte dei prodotti possono essere utilizzati da vegani poiché non utilizziamo ingredienti di origine animale. Per maggiori informazioni su un prodotto specifico puoi scriverci (consulta la sezione CONTATTI del sito).',
    },
    {
      title: 'I prodotti Altrapelle possono essere utilizzati dai bambini?',
      content:
        "Altrapelle non ha sviluppato una gamma specifica per i neonati (al di sotto dei 3 anni) o i bambini (dai 3 anni in su). A titolo precauzionale, preferiamo non consigliare l'utilizzo dei prodotti sui bambini.",
    },
    {
      title: 'Ho la pelle sensibile, posso utilizzare i prodotti Altrapelle?',
      content:
        'Alcuni dei prodotti Altrapelle sono stati espressamente testati sulle pelli sensibili per minimizzare il rischio di reazioni e lenire le pelli più reattive. Raccomandiamo di controllare attentamente le informazioni riportate sulla confezione o sul sito. Per maggiori informazioni su un prodotto specifico puoi scriverci (consulta la sezione CONTATTI del sito). In caso di pelle molto sensibile, raccomandiamo di consultare un dermatologo prima di qualsiasi applicazione.',
    },
    {
      title: 'A quali test sono stati sottoposti i prodotti Altrapelle?',
      content:
        'Tutti i nostri prodotti, prima della loro immissione sul mercato, sono stati sottoposti a numerosi test di qualità, di tolleranza, di efficacia e sicurezza. Alcuni prodotti sono, inoltre, Clinicamente e Dermatologicamente testati preso laboratori indipendenti.',
    },
    {
      title: 'I prodotti Altrapelle contengono metalli pesanti?',
      content:
        "I prodotti Altrapelle vengono testati per la presenza di metalli pesanti (Nichel, Cromo e Cobalto). L'indicazione 'Metal Tested' sui nostri prodotti indica che la formula è stata sottoposta a test per individuare eventuali tracce di metalli pesanti che possono generare potenziale sensibilizzazione. Il valore di 1 ppm viene considerato un valore soglia, pertanto concentrazioni di metalli pesanti inferiori al limite di tolleranza di 1 ppm, sono considerate sicure e prive di potenziale sensibilizzante.",
    },
    {
      title: 'I prodotti Altrapelle contengono Nichel?',
      content:
        "I prodotti Altrapelle vengono testati per la presenza di metalli pesanti tra cui il Nichel. L'indicazione 'Metal Tested' o Nichel < 1 ppm, sui nostri prodotti indica che il prodotto è stato sottoposto a test per individuare eventuali tracce di questo metallo. Il valore di 1 ppm viene considerato un valore soglia, pertanto concentrazioni di metalli pesanti inferiori al limite di tolleranza di 1 ppm, sono considerate sicure e prive di potenziale sensibilizzante. ",
    },
    {
      title: 'I prodotti Altrapelle sono Dermatologicamente Testati?',
      content:
        'L’indicazione “Dermatologicamente Testato” presente sui prodotti Altrapelle indica il prodotto è stato testato su un certo numero di volontari, sotto la supervisione di un dermatologo. I prodotti Dermatrologicamente Testati sono stati sottoposti a test che studiano gli effetti sulla pelle, in particolare la buona tollerabilità cutanea, utilizzando specifici protocolli.',
    },
    {
      title: 'I prodotti Altrapelle sono Clinicamente Testati?',
      content:
        'I prodotti Altrapelle che riportano l’indicazione “Clinicamente Testato”, sono stati sottoposti a test sui volontari sotto la supervisione di un personale medico qualificato o una figura professionale qualificata secondo particolari condizioni definite da un protocollo clinico. Il test clinico garantisce la valutazione dell’efficacia del prodotto effettuata da laboratori indipendenti.',
    },
  ],
};

const tenless = {
  title: 'Altrapelle Tenless',
  rows: [
    {
      title: 'Cosa significa Depigmentante?',
      content:
        'Un prodotto depigmentante, agisce sulle macchie scure cutanee, schiarendole grazie all’azione sulla formazione del nostro pigmento naturale, la melanina. La produzione eccessiva di melanina, dovuta a vari fattori quali esposizione solare, invecchiamento cutaneo, cambiamenti ormonali, provoca iperpigmentazione cioè accumulo di pigmento in determinate aree della pelle con tipico aspetto disomogeneo, a chiazze o macchie.',
    },
    {
      title: 'I prodotti Altrapelle TENLESS contengono il fattore di protezione solare (SPF)?',
      content:
        'Il prodotto TENLESS BOOSTER ILLUMINANTE – Siero Radiante e Uniformante possiede SPF 25.',
    },
    {
      title:
        'È necessario idratare e detergere la pelle prima dell’applicazione del TRATTAMENTO ANTI-MACCHIE e del BOOSTER ILLUMINANTE?',
      content:
        'Consigliamo di detergere accuratamente la pelle prima dell’applicazione dei prodotti. Dopo aver fatto assorbire i prodotti è possibile utilizzare creme, BB cream, fondotinta o altri prodotti di skincare. Consigliamo dunque di idratate la pelle dopo l’uso di: - TENLESS TRATTAMENTO ANTI-MACCHIE qualora si usi il prodotto singolarmente - TENLESS BOOSTER ILLUMINANTE qualora si usi il prodotto singolarmente o in abbinata a TENLESS TRATTAMENTO ANTI-MACCHIE.',
    },
    {
      title:
        'Si possono applicare TRATTAMENTO ANTI-MACCHIE e BOOSTER ILLUMINANTE durante il periodo estivo?',
      content:
        "L'utilizzo di prodotti depigmentanti e schiarenti è maggiormente consigliato nel periodo autunno-inverno-primavera per una maggiore efficacia in quanto l’esposizione solare è inferiore in questi periodi dell’anno. TENLESS TRATTAMENTO ANTI-MACCHIE e TENLESS BOOSTER ILLUMINANTE possono essere comunque utilizzati quotidianamente in qualsiasi periodo dell’anno. Consigliamo di applicare una protezione solare adeguata al fototipo nei periodi di maggiore esposizione al sole, per evitare l’accentuarsi delle macchie cutanee o la comparsa di nuove.",
    },
    {
      title:
        'Si possono utilizzare TRATTAMENTO ANTI-MACCHIE e BOOSTER ILLUMINANTE nella stessa skincare routine?',
      content:
        'Assolutamente sì! Consigliamo di abbinare TRATTAMENTO ANTI-MACCHIE e BOOSTER ILLUMINANTE per un trattamento anti-macchie completo e sinergico. L’uso combinato massimizza l’effetto degli ingredienti attivi agendo sin dalle prime fasi di formazione delle macchie scure con effetto schiarente ed uniformante visibile dopo poche applicazioni. In caso di uso combinato, consigliamo di seguire questi step di applicazione: Step 1 Applicare TENLESS TRATTAMENTO ANTI-MACCHIE, due volte al giorno direttamente sull’area interessata (mani, viso, décolleté o corpo) per contrastare le macchie esistenti e prevenire la formazione di nuove. Step 2 Applicare TENLESS BOOSTER ILLUMINANTE, uso quotidiano, due volte al giorno su viso, collo e décolleté per migliorare l’incarnato illuminandolo ed uniformandolo e per prevenire la formazione di macchie scure. Step 3 Dopo il completo assorbimento di TENLESS BOOSTER ILLUMINANTE, applicare i consueti prodotti di skincare (ad esempio creme, solari, fondotinta).',
    },
    {
      title:
        'Se uso TRATTAMENTO ANTI-MACCHIE o BOOSTER ILLUMINANTE singolarmente ottengo l’effetto desiderato?',
      content:
        "Assolutamente sì! TENLESS TRATTAMENTO ANTI-MACCHIE, utilizzato 2 volte al giorno per 4 settimane ha dimostrato efficacia depigmentante nel 92% dei casi. (Studio cosmeto-clinico, efficacia depigmentante, % soddisfazione da autovalutazione dell'effetto sulla pelle, 25 volontarie, 30 giorni di trattamento). TENLESS BOOSTER ILLUMINANTE, utilizzato 2 volte al giorno per 4 settimane ha dimostrato efficacia illuminante nel 95% dei casi. (Studio cosmeto-clinico, % riduzione visibilità macchie cutanee, 20 volontarie, 60 giorni di trattamento).",
    },
    {
      title: 'Quali sono le differenze tra TRATTAMENTO ANTI-MACCHIE e BOOSTER ILLUMINANTE?',
      content:
        'TENLESS TRATTAMENTO ANTI-MACCHIE è una crema depigmentante per macchie cutanee localizzate. È a base di TYIF complex, complesso di ingredienti ad attività depigmentante specifica, con Azeloglicina, Vitamina C stabilizzata ad alta concentrazione e Acido Cogico, che agiscono in sinergia per ridurre e prevenire le macchie cutanee localizzate. Ha un effetto depigmentante su macchie localizzate e consente di ridurre e prevenire le macchie cutanee brune. Consigliato maggiormente per pelli mature e segnate dal tempo. TENLESS BOOSTER ILLUMINANTE è un siero radiante e uniformante con fattore di protezione SPF 25, in grado di prevenire e contrastare il fotoinvecchiamento. È a base di DIR complex, complesso di ingredienti a triplice azione che contribuisce a ridurre l’iperpigmentazione, prevenire il fotoinvecchiamento, illuminare e uniformare l’incarnato. Possiede un effetto schiarente ed è in grado di uniformare l’incarnato, illuminandolo. È dunque consigliato maggiormente per pelli discromiche, disomogenee o con macchie.',
    },
    {
      title:
        'Dopo aver applicato il TRATTAMENTO ANTI-MACCHIE e BOOSTER ILLUMINANTE è necessario risciacquare il viso?',
      content:
        'No, evitare il risciacquo. Non bisogna risciacquare il viso per evitare di rimuovere il prodotto che non avrebbe il tempo di agire. ',
    },
    {
      title: 'Per quanto tempo devo utilizzare il TRATTAMENTO ANTI-MACCHIE per vedere i risultati?',
      content:
        'Applicato quotidianamente sulla macchia per due volte al giorno, TENLESS TRATTAMENTO ANTI-MACCHIE ha dimostrato clinicamente* di incrementare la luminosità dell’area trattata e di ridurre l’area delle macchie scure già dolo sole due settimane. Gli effetti sono maggiormente visibili dopo 4 settimane di trattamento. * Studio cosmeto-clinico, efficacia depigmentante, 25 volontarie, 30 giorni di trattamento.',
    },
    {
      title: 'Per quanto tempo devo utilizzare il BOOSTER ILLUMINANTE per vedere i risultati?',
      content:
        'Applicato quotidianamente sull’area da trattare per due volte al giorno, TENLESS BOOSTER ILLUMINANTE ha dimostrato clinicamente* di incrementare la luminosità dell’area trattata già dopo soli 7 giorni. Gli effetti sono maggiormente visibili dopo 4 settimane di trattamento. * Studio cosmeto-clinico, 20 volontarie, 60 giorni di trattamento.',
    },
    {
      title:
        'Ho una leggera discromia con macchie non ben delineate, quale prodotto è più adatto a me?',
      content:
        'TENLESS BOOSTER ILLUMINANTE è sicuramente consigliato nei casi di aree discromiche ed incarnato disomogeneo. Ideale per viso, mani e décolleté ma è utilizzabile su tutto il corpo. Qualora tu voglia intensificare l’effetto contro le macchie scure ti consigliamo di abbinarlo a TENLESS TRATTAMENTO ANTI-MACCHIE.',
    },
    {
      title: 'Ho delle macchie accentuate su mani e décolleté, quale prodotto è più adatto a me?',
      content:
        'TENLESS TRATTAMENTO ANTI-MACCHIE è il prodotto consigliato nei casi di macchie localizzate. Ideale per viso, mani e décolleté ma è utilizzabile su tutto il corpo. Qualora tu voglia intensificare l’effetto anti-macchie ti consigliamo di abbinarlo a TENLESS BOOSTER ILLUMINANTE.',
    },
    {
      title:
        'Per quali tipi di macchie sono adatti i prodotti TRATTAMENTO ANTIMACCHIE e BOOSTER ILLUMINANTE?',
      content:
        'Sono adatti al trattamento ed alla prevenzione di tutti i tipi di macchie cutanee scure derivanti dall’invecchiamento, dall’esposizione solare o da cambiamenti ormonali (menopausa, gravidanza, assunzione di farmaci). Sono ideali anche per il trattamento di discromie e pelli disomogenee. L’efficacia preventiva sulla ricomparsa delle macchie varia ovviamente in relazione al tipo di fattore scatenante le macchie cutanee e dall’esposizione allo stesso (esposizione ripetuta al sole senza schermi adatti, assunzione ciclica di determinati farmaci, menopausa, etc…).',
    },
    {
      title: 'Posso utilizzare TRATTAMENTO ANTI-MACCHIE e/o BOOSTER ILLUMINANTE quotidianamente?',
      content:
        'Sì! Puoi applicare quotidianamente TENLESS TRATTAMENTO ANTI-MACCHIE e/o TENLESS BOOSTER ILLUMINANTE fino a due volte al giorno. I prodotti sono dermatologicamente testati e i test clinici dimostrano che risultano ben tollerati dopo l’applicazione.',
    },
    {
      title: 'Posso ricevere dei campioni?',
      content:
        'Campioni dei nostri prodotti sono disponibili anche in farmacie, parafarmacie e negozi specializzati. Ti invitiamo a contattarci all’indirizzo email info@difar.it per trovare il rivenditore più vicino a te.',
    },
  ],
};

const orders = {
  title: 'Ordini',
  rows: [
    {
      title: 'Dove posso acquistare i prodotti Altrapelle?',
      content:
        'Puoi acquistare i prodotti Altrapelle in farmacia, parafarmacia e negozi specializzati oppure online sul nostro e-commerce',
    },
    {
      title: 'Come si effettua un ordine online?',
      content:
        "Seleziona gli articoli che desideri acquistare facendo click su 'Aggiungi al carrello' Puoi scegliere se continuare con gli acquisti o passare direttamente alla conferma dell'ordine. Una volta aggiunti i prodotti nel carrello, fai click sul tasto 'Conferma' o 'Acquista'.",
    },
    {
      title: 'Come posso sapere se il mio ordine è stato preso in carico?',
      content:
        'Una volta che il tuo ordine e il relativo pagamento saranno stati confermati, ti invieremo una e-mail. Se non ricevi questa e-mail, è possibile che il tuo ordine non sia stato registrato. In questo caso, ti invitiamo a contattarci via e-mail servizioclienti@difar.it o al seguente numero: 800 91 36 39 (dal lunedì al venerdì, dalle 9.00 alle 13.00 e dalle 14.00 alle 17.30).',
    },
    {
      title: 'Come posso cancellare o modificare il mio ordine?',
      content:
        "Se il pagamento non è stato ancora confermato, puoi modificare o cancellare il tuo ordine alla pagina 'Il tuo carrello' nella fase di conferma dell'ordine. Per garantire la massima rapidità di consegna, non puoi cancellare né modificare il tuo ordine una volta che sarà stato finalizzato. Puoi restituire tutto o parte del tuo ordine. Consulta la sezione dedicata alla nostra politica di reso in Condizioni Generali di Vendita.",
    },
    {
      title: 'Ho sbagliato a completare l’ordine, posso modificarlo/annullarlo',
      content:
        "Se l'ordine è entrato nel processo di spedizione, nessuna delle due opzioni sarà disponibile (potrai comunque far valere il tuo diritto di recesso una volta ricevuto l'ordine). L'acquirente dovrà mandare una email a servizioclienti@difar.it specificando nell'oggetto il numero d'ordine di riferimento ricevuto nella mail di conferma. Nello specifico, la modifica dell'ordine è valida solo se la quantità e il prezzo del nuovo prodotto corrispondono ai valori del precedente.",
    },
    {
      title: 'Posso cambiare indirizzo di consegna?',
      content:
        "Se l'ordine è entrato nel processo di spedizione quest’opzione non sarà disponibile. In caso contrario, l'acquirente dovrà mandare una e-mail a servizioclienti@difar.it specificando nell'oggetto il numero d'ordine di riferimento ricevuto nella mail di conferma e i dettagli (Nome, Cognome, Via, Civico, Cap, Citta, Provincia, Nazione, Numero di telefono) del nuovo indirizzo di consegna.",
    },
    {
      title: 'Ho ricevuto un prodotto sbagliato / mancante, cosa posso fare?',
      content:
        "Qualora il pacco contenga un prodotto errato o mancante, l'acquirente dovrà mandare una e-mail a servizioclienti@difar.it per segnalare il problema, specificando nell'oggetto il numero d'ordine di riferimento ricevuto nella mail di conferma. Dopodiché, sarà nostra premura organizzare il ritiro e sostituzione del prodotto sbagliato o l'invio del prodotto mancante, tramite corriere entro 72 ore lavorative.",
    },
    {
      title:
        'Sono titolare di un punto vendita e vorrei acquistare i prodotti Altrapelle, è possibile?',
      content:
        'Scrivi una e-mail all’indirizzo servizioclienti@difar.it e sarai ricontattato dall’area manager entro 3 giorni lavorativi per ricevere maggiori informazioni sui nostri prodotti.',
    },
    {
      title: 'È obbligatorio registrarsi sul sito per effettuare un ordine?',
      content:
        'No, su Altrapelle puoi acquistare senza necessità di registrati rendendo il tuo shopping ancora più veloce',
    },
    {
      title: 'Posso fare un ordine telefonico?',
      content:
        'Ci dispiace, non accettiamo ordini telefonici. Puoi ordinare online oppure recarti presso la farmacia/parafarmacia più vicina a te per richiedere i prodotti.',
    },
    {
      title: 'Come viene garantita la mia privacy?',
      content:
        'Tutti i dati raccolti attraverso il sito oliviaschoice.it vengono trattati ai sensi del D.lgs. del 10 agosto 2018 n. 101 e del Regolamento europeo (UE) 2016/679 relativo alla protezione delle persone fisiche con riguardo al trattamento dei dati personali. In qualsiasi momento, in caso di domande, obiezioni e richieste circa le modalità attraverso cui raccogliamo e trattiamo i dati personali, potete contattare il nostro Servizio Clienti all’indirizzo e-mail privacy@difar.it. Puoi consultare la sezione privacy policy per ulteriori informazioni.',
    },
    {
      title: 'Le transazioni effettuate con la carta di credito sono sicure?',
      content:
        'Utilizziamo il servizio di pagamento sicuro che prevede l’utilizzo del protocollo di sicurezza SSL. I dati riservati della carta di sono criptati e così trasmessi al gestore dei pagamenti. Il nostro Sito non ha mai accesso e non memorizza i dati della carta di credito utilizzata per il pagamento dei prodotti. Tutte le informazioni di pagamento sono criptate per garantirti il massimo grado di privacy. Per maggiori informazioni consulta la privacy policy.',
    },
    {
      title: 'Quando verrà spedito il mio ordine?',
      content:
        "Il tuo ordine viene spedito dal nostro magazzino, il giorno stesso o l'indomani, a seconda dell'ora in cui abbiamo ricevuto l’ordine. Per gli ordini effettuati dal lunedì al venerdì il tempo massimo previsto per spedire il tuo ordine è solitamente un giorno lavorativo per la preparazione. Se l’ordine viene effettuato di Sabato e/o Domenica, andrà in preparazione il lunedì successivo. I nostri uffici di resteranno chiusi nei giorni di festività nazionale: 1°Gennaio, 6 Gennaio, Pasqua e Lunedì dell'Angelo, 25 Aprile, 1°Maggio, 2 Giugno, 15 Agosto, 1° Novembre, 8 Dicembre, 25 Dicembre, 26 Dicembre.",
    },
    {
      title: 'Entro quanti giorni consegnate?',
      content:
        'Dal momento della presa in carico da parte del Corriere, la consegna avverrà entro 72/96 ore in tutta Italia.',
    },
    {
      title: 'Consegnate anche all’estero?',
      content:
        'No, attualmente il nostro servizio di spedizione è riservato solo al territorio nazionale, non consegniamo all’estero.',
    },
    {
      title: 'Come devo comportarmi se i prodotti arrivano danneggiati?',
      content:
        'Siamo spiacenti se durante il trasporto si è danneggiato un prodotto. Se al momento della consegna il pacco si presenta già danneggiato e/o presenta macchie esterne provocate da prodotti liquidi, non accettarlo e contatta immediatamente il nostro Servizio Clienti all’email servizioclienti@difar.it. Se dovessi accorgerti del danno ai prodotti quando ormai il pacco è già consegnato, puoi effettuare una richiesta di Rimborso per prodotto danneggiato scrivendo al nostro Servizio Clienti servizioclienti@difar.it. Per consentirci di elaborare rapidamente la segnalazione ti raccomandiamo di allegare fotografie del pacco e/o della merce danneggiata. Per maggiori informazioni consultare l’Articolo 8 – Difetti, non conformità e danni ai prodotti delle Condizioni Generali di Vendita.',
    },
    {
      title: 'Cosa succede se il Corriere non mi trova in casa al momento della consegna?',
      content:
        "In caso di tua assenza al passaggio del corriere, riceverai un'email a notificarti che il pacco si trova nella sede del corriere più vicina. Avrai 5 giorni per concordare una nuova consegna con il corriere, altrimenti il pacco resterà fermo in deposito presso la sede del corriere più vicina fino ad un intervento. Per qualsiasi informazione aggiuntiva e supporto, puoi contattare il Servizio Clienti inviando una email a servizioclienti@difar.it.",
    },
    {
      title: 'Posso restituire un prodotto se ho cambiato idea?',
      content:
        "Puoi in qualsiasi momento esercitate il Diritto di recesso sull’ordine effettuato. Sarà sufficiente, entro 14 giorni dal ricevimento della merce, inviare una email ad servizioclienti@difar.it comunicando i dati necessari o inviando il modulo di recesso tipo, che troverai nelle Condizioni generali di Vendita. In questo caso, l'utente può usare qualsiasi metodo di spedizione a sua scelta. Il pagamento del trasporto è a carico dell'utente. Accetteremo la merce resa riservandoci ogni rimborso solo previa verifica che i prodotti siano stati riconsegnati nel loro stato d’origine, non utilizzati e con il packaging originale integro. Al ricevimento del pacco, lo verificheremo e se non è stato danneggiato ti rimborseremo per il pieno valore dell’ordine. Per tutte le condizioni applicabili e per maggiori informazioni consulta l’Articolo 9 – Recesso delle Condizioni generali di Vendita",
    },
    {
      title: 'Il reso è gratuito',
      content:
        "Se hai deciso di applicare il diritto di recesso il costo della restituzione di uno o più prodotti è a tuo carico. I prodotti acquistati dovranno essere integri e restituiti nell'imballo originale, completi in tutte le loro parti (compresi il foglietto illustrativo, eventuali gadget omaggio e altri elementi). Poiché le modalità e spese di spedizione del reso sono a tuo carico, potrai spedirlo con qualsiasi metodo di spedizione tracciabile a tua scelta. Fino all’avvenuto ricevimento in magazzino, la spedizione del reso è sotto tua completa responsabilità.",
    },
    {
      title: 'Ho ricevuto un prodotto errato, cosa fare?',
      content:
        'Ci scusiamo per l’inconveniente. Se hai ricevuto un articolo errato nella spedizione, ti preghiamo di contattarci via e-mail all’indirizzo servizioclienti@difar.it e il nostro servizio clienti ti assisterà per il reso o la sostituzione. Non ti verranno addebitate spese di spedizione per eventuali',
    },
    {
      title: 'Ho ricevuto un prodotto difettoso, cosa fare?',
      content:
        'In caso di difetto di un prodotto, hai diritto al ripristino, senza spese aggiuntive, della conformità del bene mediante riparazione (ove applicabile) o sostituzione. Per tutte le condizioni applicabili e per maggiori informazioni consulta l’Articolo 8 – Difetti, non conformità e danni ai prodotti delle Condizioni generali di Vendita',
    },
    {
      title: 'Con quale metodo di pagamento riceverò il rimborso?',
      content:
        "Se hai effettuato una richiesta di rimborso per Recesso ed è stata accettata, l'importo del reso ti sarà rimborsato tramite: - Bonifico Bancario se avevi acquistato tramite Contrassegno. In questo caso ti sarà richiesto via email di indicare le coordinate bancarie verso le quali desideri che venga effettuato il rimborso. - se l’acquisto è stato effettuato tramite Carta di Credito il rimborso avverrà sulla stessa carta",
    },
  ],
};

const styles = {
  // bgColor: 'white',
  titleTextColor: '#153d6d',
  rowTitleColor: '#222',
  rowTitleTextSize: 'medium',
  rowContentColor: '#595b62',
  // arrowColor: "red",
};

export default function FaqPage() {
  return (
    <AnimatedWrapper>
      <NextSeo
        title="Le domande più frequenti sui nostri prodotti | Altrapelle"
        description="All'interno di questa sezione potrai trovare le risposte alle domande più frequenti sui prodotti a marchio Altrapelle in modo tale da sciogliere ogni dubbio."
      />
      <ContainerApp>
        <IntroPage>Domande Frequenti</IntroPage>
        <div style={{ marginTop: '40px' }}>
          <Faq data={altrapelle} styles={styles} />
        </div>
        <div style={{ marginTop: '40px' }}>
          <Faq data={tenless} styles={styles} />
        </div>
        <div style={{ marginTop: '40px' }}>
          <Faq data={orders} styles={styles} />
        </div>
      </ContainerApp>
    </AnimatedWrapper>
  );
}
