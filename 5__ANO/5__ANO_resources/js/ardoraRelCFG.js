//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=120; timeIni=120; timeBon=0;
var successes=0; successesMax=8; attempts=0; attemptsMax=3;
var score=0; scoreMax=8; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Iniciar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=2; messageOk="PARABÉNS!"; messageTime="O TEMPO ACABAOU! APERTE F5 PARA REINICIAR,"; messageError="TENTE NOVAMENTE"; messageErrorG="TENTE NOVAMENTE"; messageAttempts="FIM DO JOGO! "; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="NV9fQU5P"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cL=["<p>ALBUM</p>","<p>BANDO</p>","<p>CACHO</p>","<p>ARQUIPÉLOGO</p>","<p>BANDA</p>","<p>ELENCO</p>","<p>TRIBO</p>","<p>TURMA</p>"];
var iL=["","","","","","","",""];
var order=["","","","","","","",""]; orderR=["","","","","","","",""];indexR=0; indexL=0;
var cR=["<p>UVA</p>","<p>MÚSICOS</p>","<p>ARTISTAS</p>","<p>FOTOGRAFIAS</p>","<p>ÍNDIOS</p>","<p>ALUNOS</p>","<p>PESSOAS</p>","<p>ILHAS</p>"]; ansRL=["Mw==","Ng==","MA==","Nw==","MQ==","Mg==","NA==","NQ=="];
var iR=["","","","","","","",""];
var auR=[3,5,6,1,7,8,2,4];
