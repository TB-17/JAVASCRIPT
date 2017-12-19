<HTML>
<head>

</head>
<body>
<script language="JavaScript">
var tableau = ["Pierre","Paul","Jacque"]
var str=""

for (var i=0;i<tableau.length;i++){
	var nbrCharac = tableau[i].length
	str+=tableau[i]+" : "+nbrCharac+"; "
}

paragraphe = document.createElement("p")
document.body.appendChild(paragraphe)
texte = document.createTextNode(str)
paragraphe.appendChild(texte)
</script>
</body>
</HTML>
