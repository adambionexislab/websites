<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Agriturismo Rosita - Contatti | Prenota il tuo soggiorno</title>
  <meta name="description" content="Contatta l'Agriturismo Rosita per prenotazioni e informazioni. Tel: +39 0371 761964. Email: info@agriturismorosita.it. Compila il modulo per richiedere disponibilita.">
  <meta name="keywords" content="agriturismo, agriturismo lodi, agriturismo milano">
  <meta name="google-site-verification" content="Pg1afVYlq60f7SCpNFz2mNjE3Dw_Rw6Lb8GsWZCXUeM">
  <meta property="og:title" content="Contatti - Agriturismo Rosita">
  <meta property="og:description" content="Richiedi disponibilita e informazioni. Tel: +39 0371 761964. Email: info@agriturismorosita.it.">
  <meta property="og:type" content="website">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

<nav class="site-nav">
  <div class="container">
    <div class="nav-inner">
      <a href="index.php?lang=ita" class="nav-brand">
        <img src="images/pages/logo.jpg" alt="Agriturismo Rosita logo">
        Agriturismo Rosita
      </a>
      <button class="nav-hamburger" aria-label="Apri menu" aria-expanded="false">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
      </button>
      <ul class="nav-links" role="list">
        <li><a href="index.php?lang=ita">Home Page</a></li>
        <li><a href="dovesiamo.php?lang=ita">Dove Siamo</a></li>
        <li><a href="lestanze.php?lang=ita">Le Stanze</a></li>
        <li><a href="confort.php?lang=ita">I Servizi</a></li>
        <li><a href="territorio.php?lang=ita">Il Territorio</a></li>
        <li><a href="prezzi.php?lang=ita">I Prezzi</a></li>
        <li><a href="news.php?lang=ita">News &amp; Offerte</a></li>
        <li><a href="https://www.tripadvisor.it/Hotel_Review-g2081923-d4235807-Reviews-Agriturismo_Rosita-Tavazzano_con_Villavesco_Province_of_Lodi_Lombardy.html#REVIEWS" target="_blank" rel="noopener">Recensioni dei clienti</a></li>
        <li class="nav-cta"><a href="contatti.php?lang=ita" class="active">Contatti</a></li>
      </ul>
      <div class="nav-right">
        <select id="lang-select" class="nav-lang" aria-label="Seleziona lingua">
          <option value="ita" selected>ITA</option>
          <option value="eng">ENG</option>
          <option value="fra">FRA</option>
          <option value="ger">GER</option>
          <option value="spa">SPA</option>
          <option value="swe">SVE</option>
          <option value="fin">FIN</option>
          <option value="rus">RUS</option>
        </select>
      </div>
    </div>
  </div>
</nav>

<div class="page-header">
  <div class="container">
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <a href="index.php?lang=ita">Home Page</a><span aria-hidden="true"> / </span><span>Contatti</span>
    </nav>
    <h1>Contatti</h1>
  </div>
</div>

<section class="section">
  <div class="container">
    <div class="contact-layout">

      <!-- Contact info -->
      <div data-reveal>
        <p class="section-body mb-md">Contattaci per qualsiasi esigenza. Trovi i numeri di telefono qui sotto, oppure usa il modulo per richiedere disponibilita e informazioni.</p>

        <div class="contact-block">
          <p class="contact-label">Telefono</p>
          <p class="contact-value"><a href="tel:+390371761964">+39 0371 761964</a></p>
        </div>

        <div class="contact-block">
          <p class="contact-label">Telefono (English)</p>
          <p class="contact-value"><a href="tel:+393397263651">+39 339 7263651</a></p>
        </div>

        <div class="contact-block">
          <p class="contact-label">Fax</p>
          <p class="contact-value">+39 0371 956830</p>
        </div>

        <div class="contact-block">
          <p class="contact-label">Email</p>
          <p class="contact-value"><a href="mailto:info@agriturismorosita.it">info@agriturismorosita.it</a></p>
        </div>

        <div class="contact-block">
          <p class="contact-label">Indirizzo</p>
          <p class="contact-value">Via XX Settembre 11<br>26838 Tavazzano con Villavesco (LO)</p>
        </div>

        <div class="contact-block">
          <p class="contact-label">Reception</p>
          <p class="contact-value">Aperta 24 ore su 24</p>
        </div>
      </div>

      <!-- Booking form -->
      <div data-reveal>
        <h2 class="section-title mb-md" style="font-size:1.375rem">Richiesta di prenotazione</h2>

        <form action="contatti.php?lang=ita&amp;action=br" method="post" enctype="multipart/form-data" novalidate>

          <div class="form-row">
            <label for="email-input">Il tuo indirizzo email</label>
            <input id="email-input" type="email" name="email" class="form-control" maxlength="50" required placeholder="nome@esempio.it">
          </div>

          <div class="form-cols">
            <div class="form-row">
              <label for="adults-input">Numero di adulti</label>
              <input id="adults-input" type="number" name="adults" class="form-control" min="1" max="13" placeholder="es. 2">
            </div>
            <div class="form-row">
              <label for="childs-input">Numero di bambini <span class="form-hint" style="display:inline">(sotto i 12 anni)</span></label>
              <input id="childs-input" type="number" name="childs" class="form-control" min="0" max="10" placeholder="es. 1">
            </div>
          </div>

          <div class="form-row">
            <label class="form-checkbox">
              <input type="checkbox" name="childbed" value="1">
              Desiderate un letto per bambini con sponde?
            </label>
          </div>

          <!-- Visible date pickers (JS populates hidden fields) -->
          <div class="form-cols">
            <div class="form-row">
              <label for="date-arrival">Data di arrivo</label>
              <input id="date-arrival" type="date" class="form-control" aria-label="Data di arrivo">
            </div>
            <div class="form-row">
              <label for="date-departure">Data di partenza</label>
              <input id="date-departure" type="date" class="form-control" aria-label="Data di partenza">
            </div>
          </div>

          <!-- Hidden split fields - preserve original field names for server-side PHP -->
          <input type="hidden" name="doad" value="">
          <input type="hidden" name="doam" value="">
          <input type="hidden" name="doay" value="">
          <input type="hidden" name="dodd" value="">
          <input type="hidden" name="dodm" value="">
          <input type="hidden" name="dody" value="">

          <div class="form-row">
            <label for="messaggio-input">Ulteriori informazioni</label>
            <textarea id="messaggio-input" name="messaggio" class="form-control" rows="5" placeholder="Domande, richieste particolari, numero di persone, periodo desiderato..."></textarea>
          </div>

          <div class="form-submit">
            <button type="submit" class="btn btn-primary">Invia richiesta</button>
          </div>

        </form>
      </div>

    </div>
  </div>
</section>

<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <p class="footer-brand">Agriturismo Rosita</p>
        <p class="footer-tagline">Un'antica casa colonica del 1600 tra i campi di Modignano, a Tavazzano con Villavesco. Ospitalita autentica a pochi chilometri da Milano.</p>
      </div>
      <div>
        <p class="footer-col-title">Pagine</p>
        <ul class="footer-nav">
          <li><a href="index.php?lang=ita">Home Page</a></li>
          <li><a href="dovesiamo.php?lang=ita">Dove Siamo</a></li>
          <li><a href="lestanze.php?lang=ita">Le Stanze</a></li>
          <li><a href="confort.php?lang=ita">I Servizi</a></li>
          <li><a href="territorio.php?lang=ita">Il Territorio</a></li>
          <li><a href="prezzi.php?lang=ita">I Prezzi</a></li>
          <li><a href="news.php?lang=ita">News &amp; Offerte</a></li>
        </ul>
      </div>
      <div>
        <p class="footer-col-title">Contatti</p>
        <div class="footer-contact">
          <p>Via XX Settembre 11<br>26838 Tavazzano con Villavesco (LO)</p>
          <p><a href="tel:+390371761964">+39 0371 761964</a></p>
          <p><a href="tel:+393397263651">+39 339 7263651</a></p>
          <p><a href="mailto:info@agriturismorosita.it">info@agriturismorosita.it</a></p>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>Agriturismo Rosita - Via XX Settembre 11, 26838 Tavazzano con Villavesco (LO)</span>
      <span><a href="mailto:info@agriturismorosita.it" style="color:inherit">info@agriturismorosita.it</a></span>
    </div>
  </div>
</footer>

<div id="cookie-banner" class="cookie-banner hidden" role="alert">
  <span>Utilizziamo i cookie per migliorare la navigazione. Continuando accetti il loro utilizzo.</span>
  <button id="cookie-accept" class="cookie-accept">Accetto</button>
</div>

<script src="js/main.js"></script>
</body>
</html>
