//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=20; attempts=0; attemptsMax=2;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Iniciar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";colorLeave="#000000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=2; messageOk="PARABÉNS"; messageTime="O TEMPO ACABOU"; messageError="TENTE NOVAMENTE"; messageErrorG="TENTE NOVAMENTE"; messageAttempts="FIM DO JOGO"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="M19BTk8="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[["MiAgWCAx", "Mg=="],["Mg==", "MSBYIDI="],["MiAgWCAy", "NA=="],["NA==", "MiBYIDI="],["MiAgWCAz", "Ng=="],["Ng==", "MyBYIDI="],["MiAgWCA0", "OA=="],["OA==", "NCBYIDI="],["MiAgWCA1", "MTA="],["MTA=", "NSBYIDI="],["MiAgWCA2", "MTI="],["MTI=", "NiBYIDI="],["MiAgWCA3", "MTQ="],["MTQ=", "NyBYIDI="],["MiAgWCA4", "MTY="],["MTY=", "OCBYIDI="],["MiAgWCA5", "MTg="],["MTg=", "OSBYIDI="],["MiAgWCAxMA==", "MjA="],["MjA=", "MTAgWCAy"]];
var c=[[6,1],[1,5],[6,1],[1,5],[6,1],[1,5],[6,1],[1,5],[6,2],[2,5],[6,2],[2,5],[6,2],[2,5],[6,2],[2,5],[6,2],[2,5],[7,2],[2,6]];
var con1=["2  X 1","2  X 2","2  X 3","2  X 4","2  X 5","2  X 6","2  X 7","2  X 8","2  X 9","2  X 10"];
var con2=["2","4","6","8","10","12","14","16","18","20"];
var con3=["1 X 2","2 X 2","3 X 2","4 X 2","5 X 2","6 X 2","7 X 2","8 X 2","9 X 2","10 X 2"];
var sel1=""; join1=[]; join2=[];
