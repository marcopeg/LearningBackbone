------------------------------------------------------
   LearningBackbone - TwitterSearch - App
------------------------------------------------------

Purpose of this example is to test how collections can be used to display things in a page.



In questo articolo voglio raccontare come è stata realizzata l'<strong>App dimostrativa</strong> TwitterSearch.

TwitterSearch permette all'utente di <strong>effettuare ricerche su Twitter</strong> inserendo una query di ricerca personalizzata.
I punti di interesse per l'apprendimento di Backbone sono:
<ul>
	<li>utilizzo di <strong>Model e Collection</strong> per la gestione dati</li>
	<li>utilizzo di <strong>View e sub-views</strong> per il controllo UI</li>
	<li>comunicazione tra dati e UI tramite la <strong>generazione di eventi</strong></li>
</ul>
<p style="text-align: center;"><a title="TwitterSearch Backbone App - Tutorial Example Application" href="http://www.movableapp.com/LearningBackbone/009_twitter_search_app/" target="_blank">Vai alla demo!</a> | <a title="TwitterSearch Backbone App - Tutorial Example Application" href="https://github.com/thepeg/LearningBackbone/tree/master/009_twitter_search_app" target="_blank">Codice sorgente su GitHub</a> | <a title="Learning BackboneJS Tutorial and Examples Project" href="http://movableapp.com/2012/06/backbonejs-by-examples/" target="_blank">LearningBackbone by Examples</a></p>
<p style="text-align: center;"><!--more--></p>

<h2>Interfaccia Utente</h2>
<a href="http://www.consulenza-web.com/wp-content/uploads/2012/06/TwitterSearchUI.png"><img class="alignleft  wp-image-825" title="TwitterSearchUI" src="http://www.consulenza-web.com/wp-content/uploads/2012/06/TwitterSearchUI-270x300.png" alt="" width="189" height="210" /></a>L'interfaccia utente è composta una macro-view (Viewport) il cui compito è di organizzare al suo interno le sub-views.

Le sub-views controllano i vari componenti dell'interfaccia grafica ovvero:
<ul>
	<li><span style="text-decoration: underline;">TitleView:</span> barra del titolo (stato della ricerca)</li>
	<li><span style="text-decoration: underline;">FormView:</span> form di input e relativi eventi</li>
	<li><span style="text-decoration: underline;">TweetsView:</span> risultato ricerca e messaggistica</li>
</ul>
<strong>NOTA:</strong> Si sarebbe anche potuto evitare l'utilizzo del Viewport in quanto questa è un'app comunque molto semplice. Tuttavia questa è una <span style="text-decoration: underline;">buona strategia per la progettazione e codifica</span> di applicazioni web complesse.
Infatti il concetto di view e sub-view può essere applicato a componenti e sub-componenti: <strong>i classici widgets!</strong>
<h2>Gestione dei Dati - Model e Collection</h2>
I dati manipolati da questa applicazione sono i Tweet caricati attraverso le <a title="Twitter Json API Documentation" href="https://dev.twitter.com/docs/api/1/get/search" target="_blank">API JSON di Twitter</a>.
Con ogni probabilità una ricerca fornisce un elevato numero di risultati - un elenco di tweets - quindi il modo migliore di rappresentare questo scenario è una Collection.
<ul>
	<li><span style="text-decoration: underline;">TweetsCollection:</span> contiene un elenco di modelli (TweetModel) ed è incaricato di interfacciarsi con l'API Twitter per effettuare le ricerche.</li>
	<li><span style="text-decoration: underline;">TweetModel:</span> contiene i dati del singolo tweet così come vengono forniti da Twitter</li>
</ul>
<h2>Interazione tra Componenti</h2>
Il punto più delicato di questa applicazione (dimostrativa!!) è <strong>mettere in comunicazione</strong> la parte logica (Collection) con l'interfaccia utente (Views).
<ul>
	<li>Quando l'utente clicca su "Go!" o preme "Invio" è necessario mettere in moto la logica dati per effettuare una nuova ricerca.</li>
	<li>Quando la ricerca ottiene dei risultati dal server è necessario istruire la sub-view TweetsView affinchè visualizzi i dati.</li>
</ul>
In linea di massima vale il principio: "Ad azione corrisponde reazione".