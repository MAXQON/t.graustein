import React from "react";

const TermsAndConditions = ({ darkTheme }) => {
  return (
    <div
      id="terms-policy"
      className="modal fade"
      role="dialog"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-lg modal-dialog-centered"
        role="document"
      >
        <div
          className={
            "modal-content " + (darkTheme ? "bg-dark-2 text-light" : "")
          }
        >
          <div className="modal-header">
            <h5 className={"modal-title " + (darkTheme ? "text-white" : "")}>
              Datenschutz
            </h5>
            <button
              type="button"
              className={"btn-close " + (darkTheme ? "btn-close-white" : "")}
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body p-4">
            <h2 className={"mb-3 mt-4 mt-4 " + (darkTheme ? "text-white" : "")}>
              1. Datenschutz auf einen Blick
            </h2>
          </div>
          <div className="modal-body p-4">
            <h3 className={"mb-3 mt-4 mt-4 " + (darkTheme ? "text-white" : "")}>
              Allgemeine Hinweise
            </h3>
            <p>
            Die folgenden Hinweise geben einen einfachen &Uuml;berblick dar&uuml;ber,
was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind
alle Daten, mit denen Sie pers&ouml;nlich identifiziert werden k&ouml;nnen. Ausf&uuml;hrliche Informationen zum
Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgef&uuml;hrten
Datenschutzerkl&auml;rung.
            </p>
            <h5 className={"text-4 mt-4 " + (darkTheme ? "text-white" : "")}>
              Datenerfassung auf dieser Website
            </h5>
            <h4>Wer ist verantwortlich f&uuml;r die Datenerfassung auf dieser
              Website?
            </h4>
            <p>
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
Kontaktdaten k&ouml;nnen Sie dem Abschnitt &bdquo;Hinweis zur Verantwortlichen Stelle&ldquo; in dieser
Datenschutzerkl&auml;rung entnehmen.
            </p>
            <h5 className={"text-4 mt-4 " + (darkTheme ? "text-white" : "")}>
              Wie erfassen wir Ihre Daten?
            </h5>
            <p>
            Ihre Daten werden zum
einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.&nbsp;B. um Daten handeln, die Sie in ein
Kontaktformular eingeben.
            </p>
            <p>Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch
der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.&nbsp;B. Internetbrowser,
Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese
Website betreten.</p>
            <h5 className={"text-4 mt-4 " + (darkTheme ? "text-white" : "")}>
              Wof&uuml;r nutzen wir Ihre Daten?
            </h5>
            <p>
            Ein Teil der Daten wird erhoben, um eine
fehlerfreie Bereitstellung der Website zu gew&auml;hrleisten. Andere Daten k&ouml;nnen zur Analyse Ihres
Nutzerverhaltens verwendet werden.
            </p>
            <h3 className={"mb-3 mt-4 " + (darkTheme ? "text-white" : "")}>
            Welche Rechte haben Sie bez&uuml;glich Ihrer Daten?
            </h3>
            <p>
            Sie haben jederzeit das Recht, unentgeltlich Auskunft &uuml;ber Herkunft, Empf&auml;nger und Zweck Ihrer
gespeicherten personenbezogenen Daten zu erhalten. Sie haben au&szlig;erdem ein Recht, die Berichtigung oder
L&ouml;schung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben,
k&ouml;nnen Sie diese Einwilligung jederzeit f&uuml;r die Zukunft widerrufen. Au&szlig;erdem haben Sie das Recht,
unter bestimmten Umst&auml;nden die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu
verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zust&auml;ndigen Aufsichtsbeh&ouml;rde
zu
            </p>
            <p>Hierzu sowie zu weiteren Fragen zum Thema Datenschutz k&ouml;nnen Sie sich jederzeit an uns
wenden.</p>
            <h3 className={"mb-3 mt-4 " + (darkTheme ? "text-white" : "")}>
            2. Hosting
            </h3>
            <p>
              Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
            </p>
            <h5 className={"text-4 mt-4 " + (darkTheme ? "text-white" : "")}>
            Externes Hosting
            </h5>
            <p>Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser
Website erfasst werden, werden auf den Servern des Hosters / der Hoster gespeichert. Hierbei kann es sich
v.&nbsp;a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten,
Namen, Websitezugriffe und sonstige Daten, die &uuml;ber eine Website generiert werden, handeln.</p> <p>Das
externe Hosting erfolgt zum Zwecke der Vertragserf&uuml;llung gegen&uuml;ber unseren potenziellen und
bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten
Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern
eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschlie&szlig;lich auf Grundlage von
Art. 6 Abs. 1 lit. a DSGVO und &sect; 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder
den Zugriff auf Informationen im Endger&auml;t des Nutzers (z.&nbsp;B. Device-Fingerprinting) im Sinne des
TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.</p> <p>Unser(e) Hoster wird bzw. werden Ihre Daten
nur insoweit verarbeiten, wie dies zur Erf&uuml;llung seiner Leistungspflichten erforderlich ist und unsere
Weisungen in Bezug auf diese Daten befolgen.</p> <p>Wir setzen folgende(n) Hoster ein:</p>
<p>HMHosting,<br />
support@hmhosting.de,<br />
Inh. Jesper Madsen,<br />
Tel. 046342019797</p>
            <h3 className={"mb-3 mt-4 " + (darkTheme ? "text-white" : "")}>
            3. Allgemeine Hinweise und Pflicht&shy;informationen
            </h3>
            <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer pers&ouml;nlichen Daten sehr
ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen
Datenschutzvorschriften sowie dieser Datenschutzerkl&auml;rung.</p> <p>Wenn Sie diese Website benutzen,
werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie
pers&ouml;nlich identifiziert werden k&ouml;nnen. Die vorliegende Datenschutzerkl&auml;rung erl&auml;utert,
welche Daten wir erheben und wof&uuml;r wir sie nutzen. Sie erl&auml;utert auch, wie und zu welchem Zweck das
geschieht.</p> <p>Wir weisen darauf hin, dass die Daten&uuml;bertragung im Internet (z.&nbsp;B. bei der
Kommunikation per E-Mail) Sicherheitsl&uuml;cken aufweisen kann. Ein l&uuml;ckenloser Schutz der Daten vor
dem Zugriff durch Dritte ist nicht m&ouml;glich.</p>
<h5 className={"text-4 mt-4 " + (darkTheme ? "text-white" : "")}>
Hinweis zur verantwortlichen Stelle
            </h5>
            <p>Die verantwortliche Stelle f&uuml;r die Datenverarbeitung auf
dieser Website ist:</p> <p>Position 1 Tracks Gbr,<br />
Wallstrasse 1,<br />
19053 Schwerin,</p>
<p>Telefon: 015251864275<br />
E-Mail: admin@position1tracks</p>
<p>Verantwortliche Stelle ist die nat&uuml;rliche oder juristische Person, die allein oder gemeinsam mit anderen
&uuml;ber die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.&nbsp;B. Namen, E-Mail-
Adressen o. &Auml;.) entscheidet.</p>
<h5 className={"text-4 mt-4 " + (darkTheme ? "text-white" : "")}>
Speicherdauer
            </h5>
            <p>Soweit innerhalb dieser Datenschutzerkl&auml;rung keine speziellere Speicherdauer
genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck f&uuml;r die Datenverarbeitung
entf&auml;llt. Wenn Sie ein berechtigtes L&ouml;schersuchen geltend machen oder eine Einwilligung zur
Datenverarbeitung widerrufen, werden Ihre Daten gel&ouml;scht, sofern wir keine anderen rechtlich
zul&auml;ssigen Gr&uuml;nde f&uuml;r die Speicherung Ihrer personenbezogenen Daten haben (z.&nbsp;B. steuer-
oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die L&ouml;schung nach Fortfall
dieser Gr&uuml;nde.</p>
<h5 className={"text-4 mt-4 " + (darkTheme ? "text-white" : "")}>
Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website
            </h5>
            <p>Sofern Sie
in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art.
6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO
verarbeitet werden. Im Falle einer ausdr&uuml;cklichen Einwilligung in die &Uuml;bertragung personenbezogener
Daten in Drittstaaten erfolgt die Datenverarbeitung au&szlig;erdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO.
Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endger&auml;t (z.&nbsp;B. via
Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zus&auml;tzlich auf Grundlage von &sect;
25 Abs. 1 TTDSG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserf&uuml;llung oder zur
Durchf&uuml;hrung vorvertraglicher Ma&szlig;nahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage des
Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erf&uuml;llung einer
rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung
kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. &Uuml;ber die
jeweils im Einzelfall einschl&auml;gigen Rechtsgrundlagen wird in den folgenden Abs&auml;tzen dieser
Datenschutzerkl&auml;rung informiert.</p>
<h5 className={"text-4 mt-4 " + (darkTheme ? "text-white" : "")}>
Empfänger von personenbezogenen Daten
            </h5>
            <p>Im Rahmen unserer Gesch&auml;ftst&auml;tigkeit
arbeiten wir mit verschiedenen externen Stellen zusammen. Dabei ist teilweise auch eine &Uuml;bermittlung von
personenbezogenen Daten an diese externen Stellen erforderlich. Wir geben personenbezogene Daten nur dann an
externe Stellen weiter, wenn dies im Rahmen einer Vertragserf&uuml;llung erforderlich ist, wenn wir gesetzlich
hierzu verpflichtet sind (z.&nbsp;B. Weitergabe von Daten an Steuerbeh&ouml;rden), wenn wir ein berechtigtes
Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn eine sonstige Rechtsgrundlage die
Datenweitergabe erlaubt. Beim Einsatz von Auftragsverarbeitern geben wir personenbezogene Daten unserer
Kunden nur auf Grundlage eines g&uuml;ltigen Vertrags &uuml;ber Auftragsverarbeitung weiter. Im Falle einer
gemeinsamen Verarbeitung wird ein Vertrag &uuml;ber gemeinsame Verarbeitung geschlossen.</p>
<p>Das Unternehmen verf&uuml;gt &uuml;ber eine Zertifizierung nach dem &bdquo;EU-US Data Privacy
Framework&ldquo; (DPF). Der DPF ist ein &Uuml;bereinkommen zwischen der Europ&auml;ischen Union und den
USA, der die Einhaltung europ&auml;ischer Datenschutzstandards bei Datenverarbeitungen in den USA
gew&auml;hrleisten soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese
Datenschutzstandards einzuhalten. Weitere Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link:
<a href="https://www.dataprivacyframework.gov/s/participant-search/participant-
detail?contact=true&id=a2zt0000000GnywAAC&status=Active" target="_blank" rel="noopener noreferrer">https:
//www.dataprivacyframework.gov/s/participant-search/participant-
detail?contact=true&id=a2zt0000000GnywAAC&status=Active</a></p>

<h5 className={"text-4 mt-4 " + (darkTheme ? "text-white" : "")}>
Widerruf Ihrer Einwilligung zur Datenverarbeitung
            </h5>
            <p>Viele Datenverarbeitungsvorg&auml;nge sind
nur mit Ihrer ausdr&uuml;cklichen Einwilligung m&ouml;glich. Sie k&ouml;nnen eine bereits erteilte Einwilligung
jederzeit widerrufen. Die Rechtm&auml;&szlig;igkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom
Widerruf unber&uuml;hrt.</p>
<h5 className={"text-4 mt-4 " + (darkTheme ? "text-white" : "")}>
Widerspruchsrecht gegen die Datenerhebung in besonderen F&auml;llen sowie gegen Direktwerbung (Art. 21
DSGVO)
            </h5>
            <p>WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F
DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GR&Uuml;NDEN, DIE SICH AUS IHRER
BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN
WIDERSPRUCH EINZULEGEN; DIES GILT AUCH F&Uuml;R EIN AUF DIESE BESTIMMUNGEN GEST&Uuml;TZTES
PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN
SIE DIESER DATENSCHUTZERKL&Auml;RUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE
BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR
K&Ouml;NNEN ZWINGENDE SCHUTZW&Uuml;RDIGE GR&Uuml;NDE F&Uuml;R DIE VERARBEITUNG
NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN &Uuml;BERWIEGEN ODER DIE
VERARBEITUNG DIENT DER GELTENDMACHUNG, AUS&Uuml;BUNG ODER VERTEIDIGUNG VON
RECHTSANSPR&Uuml;CHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).</p> <p>WERDEN IHRE
PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS
RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER
DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH F&Uuml;R DAS PROFILING,
SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN,
WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER
DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).</p>

<h5 className={"text-4 mt-4 " + (darkTheme ? "text-white" : "")}>
Recht auf Daten&shy;&uuml;bertrag&shy;barkeit
            </h5>
            <p>Sie haben das Recht, Daten, die wir auf Grundlage
Ihrer Einwilligung oder in Erf&uuml;llung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in
einem g&auml;ngigen, maschinenlesbaren Format aush&auml;ndigen zu lassen. Sofern Sie die direkte
&Uuml;bertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch
machbar ist.</p>
<h5 className={"text-4 mt-4 " + (darkTheme ? "text-white" : "")}>
Auskunft, Berichtigung und L&ouml;schung
            </h5>
            <p>Sie haben im Rahmen der geltenden gesetzlichen
Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft &uuml;ber Ihre gespeicherten personenbezogenen
Daten, deren Herkunft und Empf&auml;nger und den Zweck der Datenverarbeitung und ggf. ein Recht auf
Berichtigung oder L&ouml;schung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene
Daten k&ouml;nnen Sie sich jederzeit an uns wenden.</p>
<h5 className={"text-4 mt-4 " + (darkTheme ? "text-white" : "")}>
Recht auf Einschr&auml;nkung der Verarbeitung
            </h5>
            <p>Sie haben das Recht, die Einschr&auml;nkung der
Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu k&ouml;nnen Sie sich jederzeit an uns wenden.
Das Recht auf Einschr&auml;nkung der Verarbeitung besteht in folgenden F&auml;llen:</p> <ul> <li>Wenn Sie die
Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, ben&ouml;tigen wir in der Regel Zeit,
um dies zu &uuml;berpr&uuml;fen. F&uuml;r die Dauer der Pr&uuml;fung haben Sie das Recht, die
Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li> <li>Wenn die
Verarbeitung Ihrer personenbezogenen Daten unrechtm&auml;&szlig;ig geschah/geschieht, k&ouml;nnen Sie statt
der L&ouml;schung die Einschr&auml;nkung der Datenverarbeitung verlangen.</li> <li>Wenn wir Ihre
personenbezogenen Daten nicht mehr ben&ouml;tigen, Sie sie jedoch zur Aus&uuml;bung, Verteidigung oder
Geltendmachung von Rechtsanspr&uuml;chen ben&ouml;tigen, haben Sie das Recht, statt der L&ouml;schung die
Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li> <li>Wenn Sie einen
Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abw&auml;gung zwischen Ihren und unseren
Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen &uuml;berwiegen, haben Sie das
Recht, die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li> </ul>
<p>Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschr&auml;nkt haben, d&uuml;rfen diese
Daten &ndash; von ihrer Speicherung abgesehen &ndash; nur mit Ihrer Einwilligung oder zur Geltendmachung,
Aus&uuml;bung oder Verteidigung von Rechtsanspr&uuml;chen oder zum Schutz der Rechte einer anderen
nat&uuml;rlichen oder juristischen Person oder aus Gr&uuml;nden eines wichtigen &ouml;ffentlichen Interesses der
Europ&auml;ischen Union oder eines Mitgliedstaats verarbeitet werden.</p>
<h5 className={"text-4 mt-4 " + (darkTheme ? "text-white" : "")}>
SSL- bzw. TLS-Verschl&uuml;sselung
            </h5>
            <p>Diese Seite nutzt aus Sicherheitsgr&uuml;nden und zum Schutz
der &Uuml;bertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als
Seitenbetreiber senden, eine SSL- bzw. TLS-Verschl&uuml;sselung. Eine verschl&uuml;sselte Verbindung erkennen
Sie daran, dass die Adresszeile des Browsers von &bdquo;http://&ldquo; auf &bdquo;https://&ldquo; wechselt und
an dem Schloss-Symbol in Ihrer Browserzeile.</p> <p>Wenn die SSL- bzw. TLS-Verschl&uuml;sselung aktiviert ist,
k&ouml;nnen die Daten, die Sie an uns &uuml;bermitteln, nicht von Dritten mitgelesen werden.</p>
<h3 className={"mb-3 mt-4 " + (darkTheme ? "text-white" : "")}>
4. Datenerfassung auf dieser Website
            </h3>
            <h5 className={"text-4 mt-4 " + (darkTheme ? "text-white" : "")}>
            Cookies
            </h5>
            <p>Unsere Internetseiten verwenden so genannte &bdquo;Cookies&ldquo;. Cookies sind kleine
Datenpakete und richten auf Ihrem Endger&auml;t keinen Schaden an. Sie werden entweder vor&uuml;bergehend
f&uuml;r die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endger&auml;t
gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch gel&ouml;scht. Permanente Cookies
bleiben auf Ihrem Endger&auml;t gespeichert, bis Sie diese selbst l&ouml;schen oder eine automatische
L&ouml;schung durch Ihren Webbrowser erfolgt.</p> <p>Cookies k&ouml;nnen von uns (First-Party-Cookies) oder
von Drittunternehmen stammen (sog. Third-Party-Cookies). Third-Party-Cookies erm&ouml;glichen die Einbindung
bestimmter Dienstleistungen von Drittunternehmen innerhalb von Webseiten (z.&nbsp;B. Cookies zur Abwicklung
von Zahlungsdienstleistungen).</p> <p>Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch
notwendig, da bestimmte Webseitenfunktionen ohne diese nicht funktionieren w&uuml;rden (z.&nbsp;B. die
Warenkorbfunktion oder die Anzeige von Videos). Andere Cookies k&ouml;nnen zur Auswertung des
Nutzerverhaltens oder zu Werbezwecken verwendet werden.</p> <p>Cookies, die zur Durchf&uuml;hrung des
elektronischen Kommunikationsvorgangs, zur Bereitstellung bestimmter, von Ihnen erw&uuml;nschter Funktionen
(z.&nbsp;B. f&uuml;r die Warenkorbfunktion) oder zur Optimierung der Website (z.&nbsp;B. Cookies zur Messung
des Webpublikums) erforderlich sind (notwendige Cookies), werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
gespeichert, sofern keine andere Rechtsgrundlage angegeben wird. Der Websitebetreiber hat ein berechtigtes
Interesse an der Speicherung von notwendigen Cookies zur technisch fehlerfreien und optimierten Bereitstellung
seiner Dienste. Sofern eine Einwilligung zur Speicherung von Cookies und vergleichbaren
Wiedererkennungstechnologien abgefragt wurde, erfolgt die Verarbeitung ausschlie&szlig;lich auf Grundlage dieser
Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und &sect; 25 Abs. 1 TTDSG); die Einwilligung ist jederzeit widerrufbar.</p>
<p>Sie k&ouml;nnen Ihren Browser so einstellen, dass Sie &uuml;ber das Setzen von Cookies informiert werden und
Cookies nur im Einzelfall erlauben, die Annahme von Cookies f&uuml;r bestimmte F&auml;lle oder generell
ausschlie&szlig;en sowie das automatische L&ouml;schen der Cookies beim Schlie&szlig;en des Browsers aktivieren.
Bei der Deaktivierung von Cookies kann die Funktionalit&auml;t dieser Website eingeschr&auml;nkt sein.</p>
<p>Welche Cookies und Dienste auf dieser Website eingesetzt werden, k&ouml;nnen Sie dieser
Datenschutzerkl&auml;rung entnehmen.</p>

<h5 className={"text-4 mt-4 " + (darkTheme ? "text-white" : "")}>
Kontaktformular
            </h5>
            <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre
Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung
der Anfrage und f&uuml;r den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre
Einwilligung weiter.</p> <p>Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
sofern Ihre Anfrage mit der Erf&uuml;llung eines Vertrags zusammenh&auml;ngt oder zur Durchf&uuml;hrung
vorvertraglicher Ma&szlig;nahmen erforderlich ist. In allen &uuml;brigen F&auml;llen beruht die Verarbeitung auf
unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f
DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist
jederzeit widerrufbar.</p> <p>Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie
uns zur L&ouml;schung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck f&uuml;r die
Datenspeicherung entf&auml;llt (z.&nbsp;B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende
gesetzliche Bestimmungen &ndash; insbesondere Aufbewahrungsfristen &ndash; bleiben unber&uuml;hrt.</p>

<h5 className={"text-4 mt-4 " + (darkTheme ? "text-white" : "")}>
Anfrage per E-Mail, Telefon oder Telefax
            </h5>
            <p>Wenn Sie uns per E-Mail, Telefon oder Telefax
kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage)
zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne
Ihre Einwilligung weiter.</p> <p>Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b
DSGVO, sofern Ihre Anfrage mit der Erf&uuml;llung eines Vertrags zusammenh&auml;ngt oder zur
Durchf&uuml;hrung vorvertraglicher Ma&szlig;nahmen erforderlich ist. In allen &uuml;brigen F&auml;llen beruht
die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten
Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt
wurde; die Einwilligung ist jederzeit widerrufbar.</p> <p>Die von Ihnen an uns per Kontaktanfragen
&uuml;bersandten Daten verbleiben bei uns, bis Sie uns zur L&ouml;schung auffordern, Ihre Einwilligung zur
Speicherung widerrufen oder der Zweck f&uuml;r die Datenspeicherung entf&auml;llt (z.&nbsp;B. nach
abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen &ndash; insbesondere
gesetzliche Aufbewahrungsfristen &ndash; bleiben unber&uuml;hrt.</p>

<h3 className={"mb-3 mt-4 " + (darkTheme ? "text-white" : "")}>
5. Soziale Medien
            </h3>
            <h5 className={"text-4 mt-4 " + (darkTheme ? "text-white" : "")}>
            Instagram
            </h5>
            <p>Auf dieser Website sind Funktionen des Dienstes Instagram eingebunden. Diese
Funktionen werden angeboten durch die Meta Platforms Ireland Limited, 4 Grand Canal Square, Grand Canal
Harbour, Dublin 2, Irland.</p> <p>Wenn das Social-Media-Element aktiv ist, wird eine direkte Verbindung zwischen
Ihrem Endger&auml;t und dem Instagram-Server hergestellt. Instagram erh&auml;lt dadurch Informationen
&uuml;ber den Besuch dieser Website durch Sie.</p> <p>Wenn Sie in Ihrem Instagram-Account eingeloggt sind,
k&ouml;nnen Sie durch Anklicken des Instagram-Buttons die Inhalte dieser Website mit Ihrem Instagram-Profil
verlinken. Dadurch kann Instagram den Besuch dieser Website Ihrem Benutzerkonto zuordnen. Wir weisen darauf
hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der &uuml;bermittelten Daten sowie deren Nutzung
durch Instagram erhalten.</p> <p>Soweit eine Einwilligung (Consent) eingeholt wurde, erfolgt der Einsatz des
o.&nbsp;g. Dienstes auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und &sect; 25 TTDSG. Die Einwilligung ist jederzeit
widerrufbar. Soweit keine Einwilligung eingeholt wurde, erfolgt die Verwendung des Dienstes auf Grundlage
unseres berechtigten Interesses an einer m&ouml;glichst umfassenden Sichtbarkeit in den Sozialen Medien.</p>
<p>Soweit mit Hilfe des hier beschriebenen Tools personenbezogene Daten auf unserer Website erfasst und an
Facebook bzw. Instagram weitergeleitet werden, sind wir und die Meta Platforms Ireland Limited, 4 Grand Canal
Square, Grand Canal Harbour, Dublin 2, Irland gemeinsam f&uuml;r diese Datenverarbeitung verantwortlich (Art.
26 DSGVO). Die gemeinsame Verantwortlichkeit beschr&auml;nkt sich dabei ausschlie&szlig;lich auf die Erfassung
der Daten und deren Weitergabe an Facebook bzw. Instagram. Die nach der Weiterleitung erfolgende Verarbeitung
durch Facebook bzw. Instagram ist nicht Teil der gemeinsamen Verantwortung. Die uns gemeinsam obliegenden
Verpflichtungen wurden in einer Vereinbarung &uuml;ber gemeinsame Verarbeitung festgehalten. Den Wortlaut
der Vereinbarung finden Sie unter: <a href="https://www.facebook.com/legal/controller_addendum"
target="_blank" rel="noopener noreferrer">https://www.facebook.com/legal/controller_addendum</a>. Laut
dieser Vereinbarung sind wir f&uuml;r die Erteilung der Datenschutzinformationen beim Einsatz des Facebook-
bzw. Instagram-Tools und f&uuml;r die datenschutzrechtlich sichere Implementierung des Tools auf unserer
Website verantwortlich. F&uuml;r die Datensicherheit der Facebook bzw. Instagram-Produkte ist Facebook
verantwortlich. Betroffenenrechte (z.&nbsp;B. Auskunftsersuchen) hinsichtlich der bei Facebook bzw. Instagram
verarbeiteten Daten k&ouml;nnen Sie direkt bei Facebook geltend machen. Wenn Sie die Betroffenenrechte bei uns
geltend machen, sind wir verpflichtet, diese an Facebook weiterzuleiten.</p> <p>Die Daten&uuml;bertragung in die
USA wird auf die Standardvertragsklauseln der EU-Kommission gest&uuml;tzt. Details finden Sie hier: <a
href="https://www.facebook.com/legal/EU_data_transfer_addendum" target="_blank" rel="noopener
noreferrer">https://www.facebook.com/legal/EU_data_transfer_addendum</a>, <a
href="https://help.instagram.com/519522125107875" target="_blank" rel="noopener
noreferrer">https://help.instagram.com/519522125107875</a> und <a href="https://de-
de.facebook.com/help/566994660333381" target="_blank" rel="noopener noreferrer">https://de-
de.facebook.com/help/566994660333381</a>.</p> <p>Weitere Informationen hierzu finden Sie in der
Datenschutzerkl&auml;rung von Instagram: <a href="https://instagram.com/about/legal/privacy/" target="_blank"
rel="noopener noreferrer">https://instagram.com/about/legal/privacy/</a>.</p>
<p>Das Unternehmen verf&uuml;gt &uuml;ber eine Zertifizierung nach dem &bdquo;EU-US Data Privacy
Framework&ldquo; (DPF). Der DPF ist ein &Uuml;bereinkommen zwischen der Europ&auml;ischen Union und den
USA, der die Einhaltung europ&auml;ischer Datenschutzstandards bei Datenverarbeitungen in den USA
gew&auml;hrleisten soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese
Datenschutzstandards einzuhalten. Weitere Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link:
<a href="https://www.dataprivacyframework.gov/s/participant-search/participant-
detail?contact=true&id=a2zt0000000GnywAAC&status=Active" target="_blank" rel="noopener noreferrer">https:
//www.dataprivacyframework.gov/s/participant-search/participant-
detail?contact=true&id=a2zt0000000GnywAAC&status=Active</a></p>

<h3 className={"mb-3 mt-4 " + (darkTheme ? "text-white" : "")}>
6. Plugins und Tools
            </h3>
            <h5 className={"text-4 mt-4 " + (darkTheme ? "text-white" : "")}>
            Spotify
            </h5>
            <p>Auf dieser Website sind Funktionen des Musik-Dienstes Spotify eingebunden. Anbieter ist
die Spotify AB, Birger Jarlsgatan 61, 113 56 Stockholm in Schweden. Die Spotify Plugins erkennen Sie an dem
gr&uuml;nen Logo auf dieser Website. Eine &Uuml;bersicht &uuml;ber die Spotify-Plugins finden Sie unter: <a
href="https://developer.spotify.com" target="_blank" rel="noopener
noreferrer">https://developer.spotify.com</a>.</p> <p>Dadurch kann beim Besuch dieser Website &uuml;ber das
Plugin eine direkte Verbindung zwischen Ihrem Browser und dem Spotify-Server hergestellt werden. Spotify
erh&auml;lt dadurch die Information, dass Sie mit Ihrer IP-Adresse diese Website besucht haben. Wenn Sie den
Spotify Button anklicken, w&auml;hrend Sie in Ihrem Spotify-Account eingeloggt sind, k&ouml;nnen Sie die Inhalte
dieser Website auf Ihrem Spotify Profil verlinken. Dadurch kann Spotify den Besuch dieser Website Ihrem
Benutzerkonto zuordnen.</p> <p>Wir weisen darauf hin, dass bei der Nutzung von Spotify Cookies von Google
Analytics eingesetzt werden, sodass Ihre Nutzungsdaten bei der Nutzung von Spotify auch an Google weitergegeben
werden k&ouml;nnen. Google Analytics ist ein Tool des Google-Konzerns zur Analyse des Nutzerverhaltens mit Sitz
in den USA. F&uuml;r diese Einbindung ist allein Spotify verantwortlich. Wir als Websitebetreiber haben auf diese
Verarbeitung keinen Einfluss.</p> <p>Die Speicherung und Analyse der Daten erfolgt auf Grundlage von Art. 6 Abs.
1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der ansprechenden akustischen
Ausgestaltung seiner Website. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung
ausschlie&szlig;lich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und &sect; 25 Abs. 1 TTDSG, soweit die
Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endger&auml;t des Nutzers
(z.&nbsp;B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.</p>
<p>Weitere Informationen hierzu finden Sie in der Datenschutzerkl&auml;rung von Spotify: <a
href="https://www.spotify.com/de/legal/privacy-policy/" target="_blank" rel="noopener
noreferrer">https://www.spotify.com/de/legal/privacy-policy/</a>.</p> <p>Wenn Sie nicht w&uuml;nschen, dass
Spotify den Besuch dieser Website Ihrem Spotify-Nutzerkonto zuordnen kann, loggen Sie sich bitte aus Ihrem
Spotify-Benutzerkonto aus.</p>
<p>Quelle: <a href="https://www.e-recht24.de">https://www.e-recht24.de</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
