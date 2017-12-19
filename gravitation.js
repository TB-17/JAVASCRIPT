<HTML>
<head>

</head>
<body>
<script language="JavaScript">
paragraphe = document.createElement("p")
document.body.appendChild(paragraphe)
inputVariable = document.createElement("input")
inputVariable.setAttribute("id","input1")
document.body.appendChild(inputVariable)
document.getElementById("input1").value="a"
inputVariable2 = document.createElement("input")
inputVariable2.setAttribute("id","input2")
document.body.appendChild(inputVariable2)
document.getElementById("input2").value="b"
inputVariable3 = document.createElement("input")
inputVariable3.setAttribute("id","input3")
document.body.appendChild(inputVariable3)
document.getElementById("input3").value="masse 1"
inputVariable4 = document.createElement("input")
inputVariable4.setAttribute("id","input4")
inputVariable4.setAttribute("onchange","executeFonction()")
document.body.appendChild(inputVariable4)
document.getElementById("input4").value="masse 2"
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
function entreMasse1() {
masse1 = document.getElementById("input3").value
masse1 = masse1*1
return masse1
}
function entreMasse2() {
masse2 = document.getElementById("input4").value
masse2 = masse2*1
return masse2
}
//Cette fonction calcul la force de gravitation selon la distance et la masse des deux objets
//entrées : a,b,masse1 et masse2 sont des nombre réels
//sortie : la fonction retourne le réel gravitation
function metier(a,masse1,masse2) {
	gravitation = (6.67*10**(-11))*((masse1*masse2)/(a**2))
	console.log(gravitation)
	return gravitation
}
function affiche(gravitation,a){
	paragraphe = document.createElement("p")
	document.body.appendChild(paragraphe)
	texte = document.createTextNode("F("+a+")="+gravitation+" N")
	paragraphe.appendChild(texte)
}
function executeFonction(){
	a = entreA()
	b = entreB()
	masse1= entreMasse1()
	masse2= entreMasse2()
	while(a<b){
		gravitation = metier(a,masse1,masse2)
		affiche(gravitation,a)
		a=a*2
	}
}
</script>
</body>
</HTML>
