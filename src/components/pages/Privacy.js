import React from "react"
import { useSiteData } from "react-static"

import DocumentParagraph from "components/base/DocumentParagraph"
import { Button, Typography } from "@material-ui/core"
import useTranslations from "i18n/useTranslations"
import { useConsent } from "components/useConsent"

export default function Privacy() {
  const { mail, street, city, ceoName, phone } = useSiteData()
  const t = useTranslations()
  const { setConsent } = useConsent()

  return (
    <>
      <DocumentParagraph title="1. Datenschutz auf einen Blick">
        <Typography variant="h3">Allgemeine Hinweise</Typography>
        <Typography variant="body2">
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was
          mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
          besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
          persönlich identifiziert werden können. Ausführliche Informationen zum
          Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten
          Datenschutzerklärung.
        </Typography>
        <Typography variant="h3">Datenerfassung auf dieser Website</Typography>
        <Typography variant="h4">
          Wer ist verantwortlich für die Datenerfassung auf dieser Website?
        </Typography>
        <Typography variant="body2">
          Die Datenverarbeitung auf dieser Website erfolgt durch den
          Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt
          „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung
          entnehmen.
        </Typography>
        <Typography variant="h4">Wie erfassen wir Ihre Daten?</Typography>
        <Typography variant="body2">
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
          mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein
          Kontaktformular eingeben.
        </Typography>
        <Typography variant="body2">
          Andere Daten werden automatisch oder nach Ihrer Einwilligung beim
          Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem
          technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit
          des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch,
          sobald Sie diese Website betreten.
        </Typography>
        <Typography variant="h4">Wofür nutzen wir Ihre Daten?</Typography>
        <Typography variant="body2">
          Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung
          der Website zu gewährleisten. Andere Daten können zur Analyse Ihres
          Nutzerverhaltens verwendet werden.
        </Typography>
        <Typography variant="h4">
          Welche Rechte haben Sie bezüglich Ihrer Daten?
        </Typography>
        <Typography variant="body2">
          Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft,
          Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu
          erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung
          dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur
          Datenverarbeitung erteilt haben, können Sie diese Einwilligung
          jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht,
          unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer
          personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein
          Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
        </Typography>
        <Typography variant="body2">
          Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich
          jederzeit an uns wenden.
        </Typography>
        <Typography variant="h3">
          Analyse-Tools und Tools von Dritt­anbietern
        </Typography>
        <Typography variant="body2">
          Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch
          ausgewertet werden. Das geschieht vor allem mit sogenannten
          Analyseprogrammen.
        </Typography>
        <Typography variant="body2">
          Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in
          der folgenden Datenschutzerklärung.
        </Typography>
      </DocumentParagraph>
      <DocumentParagraph title="2. Hosting und Content Delivery Networks (CDN)">
        <Typography variant="h3">
          Hosting mit Amazon Web Services (AWS)
        </Typography>
        <Typography variant="body2">
          Wir hosten unsere Website bei AWS. Anbieter ist die Amazon Web
          Services EMEA SARL, 38 Avenue John F. Kennedy, 1855 Luxemburg
          (nachfolgend: AWS).
        </Typography>
        <Typography variant="body2">
          Wenn Sie unsere Website besuchen, werden Ihre personenbezogenen Daten
          auf den Servern von AWS verarbeitet. Hierbei können auch
          personenbezogene Daten an das Mutterunternehmen von AWS in die USA
          übermittelt werden. Die Datenübertragung in die USA wird auf die
          EU-Standardvertragsklauseln gestützt. Details finden Sie hier:
          https://aws.amazon.com/de/blogs/security/aws-gdpr-data-processing-addendum/.
        </Typography>
        <Typography variant="body2">
          Weitere Informationen entnehmen Sie der Datenschutzerklärung von AWS:
          https://aws.amazon.com/de/privacy/?nc1=f_pr.
        </Typography>
        <Typography variant="body2">
          Die Verwendung von AWS erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f
          DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst
          zuverlässigen Darstellung unserer Website. Sofern eine entsprechende
          Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich
          auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist
          jederzeit widerrufbar.
        </Typography>
      </DocumentParagraph>

      <DocumentParagraph title="3. Allgemeine Hinweise und Pflicht­informationen">
        <Typography variant="h3">Datenschutz</Typography>
        <Typography variant="body2">
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten
          sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und
          entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser
          Datenschutzerklärung.
        </Typography>
        <Typography variant="body2">
          Wenn Sie diese Website benutzen, werden verschiedene personenbezogene
          Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie
          persönlich identifiziert werden können. Die vorliegende
          Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir
          sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das
          geschieht.
        </Typography>
        <Typography variant="body2">
          Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B.
          bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann.
          Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist
          nicht möglich.
        </Typography>
        <Typography variant="h3">
          Hinweis zur verantwortlichen Stelle
        </Typography>
        <Typography variant="body2">
          Die verantwortliche Stelle für die Datenverarbeitung auf dieser
          Website ist:
        </Typography>
        <Typography variant="body2">{ceoName}</Typography>
        <Typography variant="body2">
          {street}
          <br />
          {city}
        </Typography>
        <Typography variant="body2">
          Telefon: {phone}
          <br />
          E-Mail: {mail}
        </Typography>
        <Typography variant="body2">
          Verantwortliche Stelle ist die natürliche oder juristische Person, die
          allein oder gemeinsam mit anderen über die Zwecke und Mittel der
          Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen
          o. Ä.) entscheidet.
        </Typography>
        <Typography variant="h3">Speicherdauer</Typography>
        <Typography variant="body2">
          Soweit innerhalb dieser Datenschutzerklärung keine speziellere
          Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten
          bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie
          ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung
          zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern
          wir keine anderen rechtlich zulässigen Gründe für die Speicherung
          Ihrer personenbezogenen Daten haben (z. B. steuer- oder
          handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall
          erfolgt die Löschung nach Fortfall dieser Gründe.
        </Typography>
        <Typography variant="h3">
          Gesetzlich vorgeschriebener Datenschutz­beauftragter
        </Typography>
        <Typography variant="body2">
          Wir haben für unser Unternehmen einen Datenschutzbeauftragten
          bestellt.
        </Typography>
        <Typography variant="body2">{ceoName}</Typography>
        <Typography variant="body2">
          {street}
          <br />
          {city}
        </Typography>
        <Typography variant="body2">
          Telefon: {phone}
          <br />
          E-Mail: {mail}
        </Typography>
        <Typography variant="h3">
          Hinweis zur Datenweitergabe in die USA und sonstige Drittstaaten
        </Typography>
        <Typography variant="body2">
          Wir verwenden unter anderem Tools von Unternehmen mit Sitz in den USA
          oder sonstigen datenschutzrechtlich nicht sicheren Drittstaaten. Wenn
          diese Tools aktiv sind, können Ihre personenbezogene Daten in diese
          Drittstaaten übertragen und dort verarbeitet werden. Wir weisen darauf
          hin, dass in diesen Ländern kein mit der EU vergleichbares
          Datenschutzniveau garantiert werden kann. Beispielsweise sind
          US-Unternehmen dazu verpflichtet, personenbezogene Daten an
          Sicherheitsbehörden herauszugeben, ohne dass Sie als Betroffener
          hiergegen gerichtlich vorgehen könnten. Es kann daher nicht
          ausgeschlossen werden, dass US-Behörden (z. B. Geheimdienste) Ihre auf
          US-Servern befindlichen Daten zu Überwachungszwecken verarbeiten,
          auswerten und dauerhaft speichern. Wir haben auf diese
          Verarbeitungstätigkeiten keinen Einfluss.
        </Typography>
        <Typography variant="h3">
          Widerruf Ihrer Einwilligung zur Datenverarbeitung
        </Typography>
        <Typography variant="body2">
          Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
          Einwilligung möglich. Sie können eine bereits erteilte Einwilligung
          jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf
          erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
        </Typography>
        <Typography variant="h3">
          Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie
          gegen Direktwerbung (Art. 21 DSGVO)
        </Typography>
        <Typography variant="body2">
          WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER
          F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH
          AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER
          PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN
          AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE
          RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE
          DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR
          IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES
          SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE
          VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN
          ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG
          ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS.
          1 DSGVO).
        </Typography>
        <Typography variant="body2">
          WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU
          BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE
          VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE
          DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING,
          SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE
          WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT
          MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21
          ABS. 2 DSGVO).
        </Typography>
        <Typography variant="h3">
          Beschwerde­recht bei der zuständigen Aufsichts­behörde
        </Typography>
        <Typography variant="body2">
          Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein
          Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem
          Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes
          oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht
          besteht unbeschadet anderweitiger verwaltungsrechtlicher oder
          gerichtlicher Rechtsbehelfe.
        </Typography>
        <Typography variant="h3">Recht auf Daten­übertrag­barkeit</Typography>
        <Typography variant="body2">
          Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung
          oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich
          oder an einen Dritten in einem gängigen, maschinenlesbaren Format
          aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an
          einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es
          technisch machbar ist.
        </Typography>
        <Typography variant="h3">SSL- bzw. TLS-Verschlüsselung</Typography>
        <Typography variant="body2">
          Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
          Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder
          Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw.
          TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie
          daran, dass die Adresszeile des Browsers von „http://“ auf „https://“
          wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
        </Typography>
        <Typography variant="body2">
          Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die
          Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen
          werden.
        </Typography>
        <Typography variant="h3">
          Auskunft, Löschung und Berichtigung
        </Typography>
        <Typography variant="body2">
          Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit
          das Recht auf unentgeltliche Auskunft über Ihre gespeicherten
          personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck
          der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder
          Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema
          personenbezogene Daten können Sie sich jederzeit an uns wenden.
        </Typography>
        <Typography variant="h3">
          Recht auf Einschränkung der Verarbeitung
        </Typography>
        <Typography variant="body2">
          Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer
          personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit
          an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in
          folgenden Fällen:{" "}
        </Typography>
        <Typography variant="body2">
          Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen
          Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu
          überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die
          Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
          verlangen. <br />
          Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig
          geschah/geschieht, können Sie statt der Löschung die Einschränkung der
          Datenverarbeitung verlangen.
          <br /> Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie
          sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von
          Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung
          die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
          verlangen. <br />
          Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben,
          muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen
          werden. Solange noch nicht feststeht, wessen Interessen überwiegen,
          haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer
          personenbezogenen Daten zu verlangen. <br />
          Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt
          haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit
          Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung
          von Rechtsansprüchen oder zum Schutz der Rechte einer anderen
          natürlichen oder juristischen Person oder aus Gründen eines wichtigen
          öffentlichen Interesses der Europäischen Union oder eines
          Mitgliedstaats verarbeitet werden.
        </Typography>
        <Typography variant="h3">Widerspruch gegen Werbe-E-Mails</Typography>
        <Typography variant="body2">
          Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
          Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter
          Werbung und Informationsmaterialien wird hiermit widersprochen. Die
          Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im
          Falle der unverlangten Zusendung von Werbeinformationen, etwa durch
          Spam-E-Mails, vor.
        </Typography>
      </DocumentParagraph>
      <DocumentParagraph title="4. Datenerfassung auf dieser Website">
        <Typography variant="h3">Cookies</Typography>
        <Typography variant="body2">
          Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind
          kleine Textdateien und richten auf Ihrem Endgerät keinen Schaden an.
          Sie werden entweder vorübergehend für die Dauer einer Sitzung
          (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem
          Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs
          automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät
          gespeichert, bis Sie diese selbst löschen oder eine automatische
          Löschung durch Ihren Webbrowser erfolgt.
        </Typography>
        <Typography variant="body2">
          Teilweise können auch Cookies von Drittunternehmen auf Ihrem Endgerät
          gespeichert werden, wenn Sie unsere Seite betreten
          (Third-Party-Cookies). Diese ermöglichen uns oder Ihnen die Nutzung
          bestimmter Dienstleistungen des Drittunternehmens (z. B. Cookies zur
          Abwicklung von Zahlungsdienstleistungen).
        </Typography>
        <Typography variant="body2">
          Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind
          technisch notwendig, da bestimmte Websitefunktionen ohne diese nicht
          funktionieren würden (z. B. die Warenkorbfunktion oder die Anzeige von
          Videos). Andere Cookies dienen dazu, das Nutzerverhalten auszuwerten
          oder Werbung anzuzeigen.
        </Typography>
        <Typography variant="body2">
          Cookies, die zur Durchführung des elektronischen
          Kommunikationsvorgangs (notwendige Cookies) oder zur Bereitstellung
          bestimmter, von Ihnen erwünschter Funktionen (funktionale Cookies, z.
          B. für die Warenkorbfunktion) oder zur Optimierung der Website (z. B.
          Cookies zur Messung des Webpublikums) erforderlich sind, werden auf
          Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert, sofern keine
          andere Rechtsgrundlage angegeben wird. Der Websitebetreiber hat ein
          berechtigtes Interesse an der Speicherung von Cookies zur technisch
          fehlerfreien und optimierten Bereitstellung seiner Dienste. Sofern
          eine Einwilligung zur Speicherung von Cookies abgefragt wurde, erfolgt
          die Speicherung der betreffenden Cookies ausschließlich auf Grundlage
          dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO); die Einwilligung ist
          jederzeit widerrufbar.
        </Typography>
        <Typography variant="body2">
          Sie können Ihren Browser so einstellen, dass Sie über das Setzen von
          Cookies informiert werden und Cookies nur im Einzelfall erlauben, die
          Annahme von Cookies für bestimmte Fälle oder generell ausschließen
          sowie das automatische Löschen der Cookies beim Schließen des Browsers
          aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität
          dieser Website eingeschränkt sein.
        </Typography>
        <Typography variant="body2">
          Soweit Cookies von Drittunternehmen oder zu Analysezwecken eingesetzt
          werden, werden wir Sie hierüber im Rahmen dieser Datenschutzerklärung
          gesondert informieren und ggf. eine Einwilligung abfragen.
        </Typography>
        <Typography variant="h3">Server-Log-Dateien</Typography>
        <Typography variant="body2">
          Der Provider der Seiten erhebt und speichert automatisch Informationen
          in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns
          übermittelt. Dies sind:
        </Typography>
        <ul>
          <li>
            <Typography variant="body2">
              Browsertyp und Browserversion
            </Typography>
          </li>
          <li>
            <Typography variant="body2">verwendetes Betriebssystem</Typography>
          </li>
          <li>
            <Typography variant="body2">Referrer URL</Typography>
          </li>
          <li>
            <Typography variant="body2">
              Hostname des zugreifenden Rechners
            </Typography>
          </li>
          <li>
            <Typography variant="body2">Uhrzeit der Serveranfrage</Typography>
          </li>
          <li>
            <Typography variant="body2">IP-Adresse</Typography>
          </li>
        </ul>
        <Typography variant="body2">
          Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht
          vorgenommen.
        </Typography>
        <Typography variant="body2">
          Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
          lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an
          der technisch fehlerfreien Darstellung und der Optimierung seiner
          Website – hierzu müssen die Server-Log-Files erfasst werden.
        </Typography>
        <Typography variant="h3">Kontaktformular</Typography>
        <Typography variant="body2">
          Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre
          Angaben aus dem Anfrageformular inklusive der von Ihnen dort
          angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den
          Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir
          nicht ohne Ihre Einwilligung weiter.
        </Typography>
        <Typography variant="body2">
          Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
          lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags
          zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
          erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf
          unserem berechtigten Interesse an der effektiven Bearbeitung der an
          uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
          Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt
          wurde.
        </Typography>
        <Typography variant="body2">
          Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei
          uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur
          Speicherung widerrufen oder der Zweck für die Datenspeicherung
          entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage).
          Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen
          – bleiben unberührt.
        </Typography>
      </DocumentParagraph>
      <DocumentParagraph title="5. Analyse-Tools und Werbung">
        <Typography variant="h3">Google Tag Manager</Typography>
        <Typography variant="body2">
          Wir setzen den Google Tag Manager ein. Anbieter ist die Google Ireland
          Limited, Gordon House, Barrow Street, Dublin 4, Irland.
        </Typography>
        <Typography variant="body2">
          Der Google Tag Manager ist ein Tool, mit dessen Hilfe wir Tracking-
          oder Statistik-Tools und andere Technologien auf unserer Website
          einbinden können. Der Google Tag Manager selbst erstellt keine
          Nutzerprofile, speichert keine Cookies und nimmt keine eigenständigen
          Analysen vor. Er dient lediglich der Verwaltung und Ausspielung der
          über ihn eingebundenen Tools. Der Google Tag Manager erfasst jedoch
          Ihre IP-Adresse, die auch an das Mutterunternehmen von Google in die
          Vereinigten Staaten übertragen werden kann.
        </Typography>
        <Typography variant="body2">
          Der Einsatz des Google Tag Managers erfolgt auf Grundlage von Art. 6
          Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes
          Interesse an einer schnellen und unkomplizierten Einbindung und
          Verwaltung verschiedener Tools auf seiner Website. Sofern eine
          entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung
          ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die
          Einwilligung ist jederzeit widerrufbar.
        </Typography>
        <Typography variant="h3">Google Analytics</Typography>
        <Typography variant="body2">
          Diese Website nutzt Funktionen des Webanalysedienstes Google
          Analytics. Anbieter ist die Google Ireland Limited („Google“), Gordon
          House, Barrow Street, Dublin 4, Irland.
        </Typography>
        <Typography variant="body2">
          Google Analytics ermöglicht es dem Websitebetreiber, das Verhalten der
          Websitebesucher zu analysieren. Hierbei erhält der Websitebetreiber
          verschiedene Nutzungsdaten, wie z. B. Seitenaufrufe, Verweildauer,
          verwendete Betriebssysteme und Herkunft des Nutzers. Diese Daten
          werden von Google ggf. in einem Profil zusammengefasst, das dem
          jeweiligen Nutzer bzw. dessen Endgerät zugeordnet ist.
        </Typography>
        <Typography variant="body2">
          Des Weiteren können wir Google Analytics u. a. Ihre Maus- und
          Scrollbewegungen und Klicks aufzeichnen. Ferner verwendet Google
          Analytics verschiedene Modellierungsansätze, um die erfassten
          Datensätze zu ergänzen und setzt Machine Learning-Technologien bei der
          Datenanalyse ein.
        </Typography>
        <Typography variant="body2">
          Google Analytics verwendet Technologien, die die Wiedererkennung des
          Nutzers zum Zwecke der Analyse des Nutzerverhaltens ermöglichen (z. B.
          Cookies oder Device-Fingerprinting). Die von Google erfassten
          Informationen über die Benutzung dieser Website werden in der Regel an
          einen Server von Google in den USA übertragen und dort gespeichert.
        </Typography>
        <Typography variant="body2">
          Die Nutzung dieses Analyse-Tools erfolgt auf Grundlage von Art. 6 Abs.
          1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an
          der Analyse des Nutzerverhaltens, um sowohl sein Webangebot als auch
          seine Werbung zu optimieren. Sofern eine entsprechende Einwilligung
          abgefragt wurde (z. B. eine Einwilligung zur Speicherung von Cookies),
          erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs.
          1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.
        </Typography>
        <Typography variant="body2">
          Die Datenübertragung in die USA wird auf die Standardvertragsklauseln
          der EU-Kommission gestützt. Details finden Sie hier:
          https://privacy.google.com/businesses/controllerterms/mccs/.
        </Typography>
        <Typography variant="h3">IP Anonymisierung</Typography>
        <Typography variant="body2">
          Wir haben auf dieser Website die Funktion IP-Anonymisierung aktiviert.
          Dadurch wird Ihre IP-Adresse von Google innerhalb von Mitgliedstaaten
          der Europäischen Union oder in anderen Vertragsstaaten des Abkommens
          über den Europäischen Wirtschaftsraum vor der Übermittlung in die USA
          gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen
          Server von Google in den USA übertragen und dort gekürzt. Im Auftrag
          des Betreibers dieser Website wird Google diese Informationen
          benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die
          Websiteaktivitäten zusammenzustellen und um weitere mit der
          Websitenutzung und der Internetnutzung verbundene Dienstleistungen
          gegenüber dem Websitebetreiber zu erbringen. Die im Rahmen von Google
          Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit
          anderen Daten von Google zusammengeführt.
        </Typography>
        <Typography variant="h3">Browser Plugin</Typography>
        <Typography variant="body2">
          Sie können die Erfassung und Verarbeitung Ihrer Daten durch Google
          verhindern, indem Sie das unter dem folgenden Link verfügbare
          Browser-Plugin herunterladen und installieren:
          https://tools.google.com/dlpage/gaoptout?hl=de.
        </Typography>
        <Typography variant="body2">
          Mehr Informationen zum Umgang mit Nutzerdaten bei Google Analytics
          finden Sie in der Datenschutzerklärung von Google:
          https://support.google.com/analytics/answer/6004245?hl=de.
        </Typography>
        <Typography variant="h3">Auftragsverarbeitung</Typography>
        <Typography variant="body2">
          Wir haben mit Google einen Vertrag zur Auftragsverarbeitung
          abgeschlossen und setzen die strengen Vorgaben der deutschen
          Datenschutzbehörden bei der Nutzung von Google Analytics vollständig
          um.
        </Typography>
        <Typography variant="h3">Speicherdauer</Typography>
        <Typography variant="body2">
          Bei Google gespeicherte Daten auf Nutzer- und Ereignisebene, die mit
          Cookies, Nutzerkennungen (z. B. User ID) oder Werbe-IDs (z. B.
          DoubleClick-Cookies, Android-Werbe-ID) verknüpft sind, werden nach 2
          Monaten anonymisiert bzw. gelöscht. Details hierzu ersehen Sie unter
          folgendem Link:
          https://support.google.com/analytics/answer/7667196?hl=de
        </Typography>
      </DocumentParagraph>
      <DocumentParagraph title="6. Plugins und Tools">
        <Typography variant="h3">Google Web Fonts</Typography>
        <Typography variant="body2">
          Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so
          genannte Web Fonts, die von Google bereitgestellt werden. Beim Aufruf
          einer Seite lädt Ihr Browser die benötigten Web Fonts in ihren
          Browsercache, um Texte und Schriftarten korrekt anzuzeigen.
        </Typography>
        <Typography variant="body2">
          Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu
          den Servern von Google aufnehmen. Hierdurch erlangt Google Kenntnis
          darüber, dass über Ihre IP-Adresse diese Website aufgerufen wurde. Die
          Nutzung von Google WebFonts erfolgt auf Grundlage von Art. 6 Abs. 1
          lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an
          der einheitlichen Darstellung des Schriftbildes auf seiner Website.
          Sofern eine entsprechende Einwilligung abgefragt wurde (z. B. eine
          Einwilligung zur Speicherung von Cookies), erfolgt die Verarbeitung
          ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die
          Einwilligung ist jederzeit widerrufbar.
        </Typography>
        <Typography variant="body2">
          Wenn Ihr Browser Web Fonts nicht unterstützt, wird eine
          Standardschrift von Ihrem Computer genutzt.
        </Typography>
        <Typography variant="body2">
          Weitere Informationen zu Google Web Fonts finden Sie unter
          https://developers.google.com/fonts/faq und in der
          Datenschutzerklärung von Google:
          https://policies.google.com/privacy?hl=de.
        </Typography>
      </DocumentParagraph>
      <DocumentParagraph title={t("Reset consent")}>
        <Button variant="outlined" onClick={() => setConsent("none")}>
          {t("Reset consent for your data usage")}
        </Button>
      </DocumentParagraph>
    </>
  )
}
