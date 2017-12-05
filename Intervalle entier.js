<HTML>
<head>

</head>
<body>
<script language="JavaScript">
paragraphe = document.createElement("p")
document.body.appendChild(paragraphe)
texte = document.createTextNode("a :")
paragraphe.appendChild(texte)
inputVariable = document.createElement("input")
inputVariable.setAttribute("id","input1")
document.body.appendChild(inputVariable)
paragraphe = document.createElement("p")
document.body.appendChild(paragraphe)
texte = document.createTextNode("b :")
paragraphe.appendChild(texte)
inputVariable2 = document.createElement("input")
inputVariable2.setAttribute("id","input2")
inputVariable2.setAttribute("onchange","executeFonction()")
document.body.appendChild(inputVariable2)
function entreA(){
a = document.getElementById("input1").value
a = a*1
return a 
}
function entreB() {
b = document.getElementById("input2").value
b=b*1
return b
}
function entreSomme() {
somme = 0
return somme
}
//Cette fonction aditionne les multibles de 5 compris dans un intervalle 
//entrées : a,b et somme sont des nombre réels
//sortie : la fonction retourne le réel somme
function metier(a,b,somme) {
	while (a<b){
		if (a%5==0) {
			somme = somme + a
			}
		console.log(a)
		a = a +1
	}
	return somme
}
function affiche(somme){
	paragraphe = document.createElement("p")
	document.body.appendChild(paragraphe)
	texte = document.createTextNode(somme)
	paragraphe.appendChild(texte)
}	
function executeFonction(){
	a = entreA()
	b = entreB()
	somme = entreSomme()
	somme = metier(a,b,somme)
	affiche(somme)
}
</script>
</body>
</HTML>
