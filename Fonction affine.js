<!DOCTYPE html> 
 <html> 
 <head> 
 <meta charset="utf-8" /> 
 <title></title> 
 </head> 
 <body> 
 	<script language="JavaScript"> 
 	
 	//cette fonction sert à mettre en place les variables.
 	function variables(){
 		inputVariable1 = document.createElement("input") 
 		inputVariable1.setAttribute("id","input1") 
 		inputVariable1.setAttribute("onchange","affiche()") 
 		document.body.appendChild(inputVariable1) 
 		inputVariable2 = document.createElement("input") 
 		inputVariable2.setAttribute("id","input2") 
 		inputVariable2.setAttribute("onchange","affiche()") 
 		document.body.appendChild(inputVariable2) 
 		}
 		
 	//cette fonction est le calcul de la fonction affine.
 	function calcul(){
 		for(var i=0;i<10;i++){ 
 			console.log(i) 
 			a = document.getElementById("input1").value 
 			b = document.getElementById("input2").value 
 			var r = a*i+b*1;}
 	
 	//cette fonction sert a affichée les valeurs.
 	function affichage(){
 			paragraphe = document.createElement("p") 
 			document.body.appendChild(paragraphe) 
 			texte = document.createTextNode(r) 
 			paragraphe.appendChild(texte);}  
 	</script> 
 </body> 
</html> 
