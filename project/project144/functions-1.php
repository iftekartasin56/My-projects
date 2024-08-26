<?php

// Allow scaling to improve accessibility

function remove_my_action() {
remove_action('wp_head', 'et_add_viewport_meta');
}
function custom_et_add_viewport_meta(){
echo '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=1" />';
}
add_action( 'init', 'remove_my_action');
add_action( 'wp_head', 'custom_et_add_viewport_meta' );

//Calculette du besoin par jour pour menu
function calculette_besoin_par_jour_menu($url) {
extract( shortcode_atts( array(
      'url'     => '',
   ), $url, 'calculettepjcm' ) );
   $sexe=$_POST['sexe'];   
   $age=$_POST['age'];
   $taille=$_POST['taille'];
	$taille = preg_replace('*,*','.',$taille);
   $poids=$_POST['poids'];
	$poids = preg_replace('*,*','.',$poids);
   $act=$_POST['act'];
if ($sexe==1) {$hek1="checked ";}
else {$hek2="checked ";}
if ($act==2) {$check2="checked ";}
else if ($act==3) {$check3="checked ";}
else {$check1="checked ";}
   $codehtml = <<<EOT
<div id="resultat1"> </div>
			<div class="bloc-menu-test2">
<h3 style="text-align: center;">CALCULETTE DES BESOINS JOURNALIERS EN CALORIES</h3>
</div>
		  
			<div class="bloc_calc_menu">
			
<form name="imcform" class="form-type1" method="post" action="$url">
<span class="rosep">Vous êtes</span>
<ul class="ul_calc"> 
<li><input id="femme" name="sexe" value="2" type="radio" $hek2/><label for="femme">Une femme</label></li> 
<li><input id="homme" name="sexe" value="1" type="radio" $hek1/><label for="homme">Un homme</label></li></ul>
<span class="rosep">Votre niveau d’activité</span>
<ul class="ul_calc"> 
<li><input id="sedentaire" name="act" value="1" type="radio" $check1/><label for="sedentaire">Sédentaire</label></li>
<li><input id="actif" name="act" value="2" type="radio" $check2/><label for="actif">Actif</label></li>
<li><input id="sportif" name="act" value="3" type="radio" $check3/><label for="sportif">Sportif</label></li>
</ul>

<div class="clear">
<div class="col_calc"><span class="rosep">Votre âge</span><br><input name="age" class="input-t1" value="$age" type="text"></div>
<div class="col_calc"><span class="rosep">Votre taille (en cm)</span><br><input name="taille" class="input-t1" value="$taille" type="text"></div>
</div><div class="clear">
<div class="col_calc"><span class="rosep">Votre poids (en KG)</span><br><input name="poids" class="input-t1" value="$poids" type="text"></div>
<div class="col_calc">&nbsp;<br><input name="valider" value="CALCULER" type="submit"></div>
</div>  
</form>
<div class="clear">&nbsp;</div>
</div>
EOT;
if (isset($_POST['valider'])) {
   if ($sexe=="2") {$MB=(230*pow($poids,(0.48))*pow(($taille/100),(0.5))*pow($age,(-0.13)));}
   else if ($sexe=="1") {$MB=(259*pow($poids,(0.48))*pow(($taille/100),(0.5))*pow($age,(-0.13)));}
$MB=round($MB,0);
if ($act=="1") {$BC=$MB*1.37;}
else if ($act=="2") {$BC=$MB*1.55;}
else if ($act=="3") {$BC=$MB*1.8;}
$BC=round($BC,0);
   $codehtml .= <<<EOT
<div class="titre_calc2">Votre résultat en Kcalories</div>   
<div class="bloc_calc2">
<div class="float50">
  <center><span class="police-resultat"> Votre métabolisme de base </span></center> <center> <div class="circle">  <center> <br><span class="result14">$MB</span><br><span class="result14p">Kcal</span></div> </center>
</div><div class="float50">
    <center><span class="police-resultat"> Votre besoin en calories </span></center> <center> <div class="circle">  <center> <br><span class="result14">$BC</span><br><span class="result14p">Kcal</span></center></div></center>
</div>
<div class="clear">&nbsp;</div>
</div>
EOT;
}
return $codehtml;
}
add_shortcode( 'calculettebpjcm', 'calculette_besoin_par_jour_menu' );

//Calculette du besoin par jour
function calculette_besoin_par_jour($url) {
extract( shortcode_atts( array(
      'url'     => '',
   ), $url, 'calculettepjc' ) );
   $sexe=$_POST['sexe'];   
   $age=$_POST['age'];
   $taille=$_POST['taille'];
	$taille = preg_replace('*,*','.',$taille);
   $poids=$_POST['poids'];
	$poids = preg_replace('*,*','.',$poids);
   $act=$_POST['act'];
if ($sexe==1) {$hek1="checked ";}
else {$hek2="checked ";}
if ($act==2) {$check2="checked ";}
else if ($act==3) {$check3="checked ";}
else {$check1="checked ";}
   $codehtml = <<<EOT
<div id="resultat1"> </div>
			<div class="titre_calc">Calculette du besoin par jour en calories</div>   
			<div class="bloc_calc">
			<div class="trans_calc">
<form name="imcform" class="form-type1" method="post" action="$url">
<span class="rosep">Vous êtes</span>
<ul class="ul_calc"> 
<li><input id="femme" name="sexe" value="2" type="radio" $hek2/><label for="femme">Une femme</label></li> 
<li><input id="homme" name="sexe" value="1" type="radio" $hek1/><label for="homme">Un homme</label></li></ul>
<span class="rosep">Votre niveau d’activité</span>
<ul class="ul_calc"> 
<li><input id="sedentaire" name="act" value="1" type="radio" $check1/><label for="sedentaire">Sédentaire</label></li>
<li><input id="actif" name="act" value="2" type="radio" $check2/><label for="actif">Actif</label></li>
<li><input id="sportif" name="act" value="3" type="radio" $check3/><label for="sportif">Sportif</label></li>
</ul>

<div class="clear">
<div class="col_calc"><span class="rosep">Votre âge</span><br><input name="age" class="input-t1" value="$age" type="text"></div>
<div class="col_calc"><span class="rosep">Votre taille (en cm)</span><br><input name="taille" class="input-t1" value="$taille" type="text"></div>
</div><div class="clear">
<div class="col_calc"><span class="rosep">Votre poids (en KG)</span><br><input name="poids" class="input-t1" value="$poids" type="text"></div>
<div class="col_calc">&nbsp;<br><input name="valider" value="CALCULER" type="submit"></div>
</div>  
</form>
<div class="clear">&nbsp;</div>
</div></div>
EOT;
if (isset($_POST['valider'])) {
   if ($sexe=="2") {$MB=(230*pow($poids,(0.48))*pow(($taille/100),(0.5))*pow($age,(-0.13)));}
   else if ($sexe=="1") {$MB=(259*pow($poids,(0.48))*pow(($taille/100),(0.5))*pow($age,(-0.13)));}
$MB=round($MB,0);
if ($act=="1") {$BC=$MB*1.37;}
else if ($act=="2") {$BC=$MB*1.55;}
else if ($act=="3") {$BC=$MB*1.8;}
$BC=round($BC,0);
   $codehtml .= <<<EOT
<div class="titre_calc2">Votre résultat en Kcalories</div>   
<div class="bloc_calc2">
<div class="float50">
  <center><span class="police-resultat"> Votre métabolisme de base </span></center> <center> <div class="circle">  <center> <br><span class="result14">$MB</span><br><span class="result14p">Kcal</span></div> </center>
</div><div class="float50">
    <center><span class="police-resultat"> Votre besoin en calories </span></center> <center> <div class="circle">  <center> <br><span class="result14">$BC</span><br><span class="result14p">Kcal</span></center></div></center>
</div>
<div class="clear">&nbsp;</div>
</div>
EOT;
}
return $codehtml;
}
add_shortcode( 'calculettebpjc', 'calculette_besoin_par_jour' );



//Calculette du besoin en macronutriment par jour avec répartition par macro
//macro 0: tous les macro
//macro 1: lipides
//macro 2: proteines
//macro 3: glucides
//macro 4: fibres
function calculette_besoin_par_jour_macro($atts) {
extract( shortcode_atts( array(
      'url'     => '',
	  'macro'     => '',
   ), $atts, 'calculettepjmacro' ) );
   $sexe=$_POST['sexe'];   
   $age=$_POST['age'];
   $taille=$_POST['taille'];
	$taille = preg_replace('*,*','.',$taille);
   $poids=$_POST['poids'];
	$poids = preg_replace('*,*','.',$poids);
   $act=$_POST['act'];
if ($sexe==1) {$hek1="checked ";}
else {$hek2="checked ";}
if ($act==2) {$check2="checked ";}
else if ($act==3) {$check3="checked ";}
else {$check1="checked ";}
$obj=$_POST['obj'];
	$obj = preg_replace('*,*','.',$obj);

if ($macro=="0") {$fintitre = "par macronutriments";}
else if ($macro=="1") {$fintitre = "pour les lipides";}
else if ($macro=="2") {$fintitre = "pour les protéines";}
else if ($macro=="3") {$fintitre = "pour les glucides";}
else if ($macro=="4") {$fintitre = "pour les fibres";}


   $codehtml = <<<EOT
<div id="resultat1"> </div>
			<div class="ocm-titre1">Calculette du besoin par jour $fintitre</div>   
			<div class="ocm-bl1">
<form name="imcform" class="ocm-form" method="post" action="#besoin">
<span class="rosep">Vous êtes</span>
<ul class="ul_calc"> 
<li><input id="femme" name="sexe" value="2" type="radio" $hek2/><label for="femme">Une femme</label></li> 
<li><input id="homme" name="sexe" value="1" type="radio" $hek1/><label for="homme">Un homme</label></li></ul>
<span class="rosep">Votre niveau d’activité</span>
<ul class="ul_calc"> 
<li><input id="sedentaire" name="act" value="1" type="radio" $check1/><label for="sedentaire">Sédentaire</label></li>
<li><input id="actif" name="act" value="2" type="radio" $check2/><label for="actif">Actif</label></li>
<li><input id="sportif" name="act" value="3" type="radio" $check3/><label for="sportif">Sportif</label></li>
</ul>
<div class="clear">
<div class="ocm-col3"><span class="rosep">Votre âge</span><br><input name="age" class="ocm-input1" value="$age" type="text"></div>
<div class="ocm-col3"><span class="rosep">Votre taille (cm)</span><br><input name="taille" class="ocm-input1" value="$taille" type="text"></div>
<div class="ocm-col3"><span class="rosep">Votre poids (KG)</span><br><input name="poids" class="ocm-input1" value="$poids" type="text"></div>
</div><div id="besoin" class="centrage">
<input name="valider" value="CALCULER" type="submit">
</div>  
</form>
<div class="clear-zero">&nbsp;</div>
</div>
EOT;
if (isset($_POST['valider'])) {
   if ($sexe=="2") {$MB=(230*pow($poids,(0.48))*pow(($taille/100),(0.5))*pow($age,(-0.13)));}
   else if ($sexe=="1") {$MB=(259*pow($poids,(0.48))*pow(($taille/100),(0.5))*pow($age,(-0.13)));}
$MB=round($MB,0);
if ($act=="1") {$BC=$MB*1.37;}
else if ($act=="2") {$BC=$MB*1.55;}
else if ($act=="3") {$BC=$MB*1.8;}
$BC=round($BC,0);

$Kr1 = $BC*0.375/9;
$Kr1=round($Kr1,0);
$Kr2 = $poids*0.8;
$Kr2=round($Kr2,0);
$Kr3 = $BC*0.55/4;
$Kr3=round($Kr3,0);
$Kr31 = $BC*0.4/4;
$Kr31=round($Kr31,0);
$Kr32 = $BC*0.15/4;
$Kr32=round($Kr32,0);
$Kr4 = 30;
$Kr4=round($Kr4,0);

if ($macro=="0") {
   $vmodele2 = <<<EOT
 <div class="ocm-titre1">Répartition des macronutriments en grammes
 <br><span class="petite-police-blanche">Pour être plus précis, rendez vous sur la calculette de chaque macronutriment.</span>
 </div>
</div>
<div class="clear-zero">&nbsp;</div>  
 <div class="float50">
  <div class="ocm-bl4">Lipides<br /><img src="/wp-content/uploads/lipide-icon.png" width="40" height="40" alt="fibres" class="wp-image-84242 aligncenter size-full" /><span></span></div>
  <div class="ocm-circle"><span class="ocm-result14">&asymp;<br> $Kr1</span><span class="ocm-result14p">gr</span></div>
  
</div>  
 <div class="float50">
  <div class="ocm-bl4">Protéines<br/><img src="/wp-content/uploads/proteine-icon.png" width="40" height="40" alt="fibres" class="wp-image-84242 aligncenter size-full" /><span></span></div>
  <div class="ocm-circle"><span class="ocm-result14">&asymp;<br> $Kr2</span><span class="ocm-result14p">gr</span></div>
</div> 
<div class="clear-zero">&nbsp;</div>
 <div class="float50">
  <div class="ocm-bl4">Glucides<br /><img src="/wp-content/uploads/glucide-icon.png" width="40" height="40" alt="fibres" class="wp-image-84242 aligncenter size-full" /><span></span></div>
  <div class="ocm-circle"><span class="ocm-result14">&asymp;<br> $Kr3</span><span class="ocm-result14p">gr</span></div>
</div> 
 <div class="float50">
  <div class="ocm-bl4">Fibres<br /><img src="/wp-content/uploads/fibres-icon.png" width="40" height="40" alt="fibres" class="wp-image-84242 aligncenter size-full" /><span></span></div>
  <div class="ocm-circle"><span class="ocm-result14">&asymp;<br> $Kr4</span><span class="ocm-result14p">gr</span></div>
</div>    
EOT;
}
else if ($macro=="1") {
   $vmodele2 = <<<EOT
<div class="ocm-titre1">Répartition des lipides et autres macronutriments</div>
<span class="petite-police-blanche">La quantité recommandée est de<strong> 35 à 40 % de l'apport énergétique</strong>. Ce qui représente pour <strong>2 000 kcal, 80 à 90 g / jour</strong>.<br />Cette proportion couvre les besoins journaliers et prévient les pathologies.<br />Toutefois, la qualité des lipides prime puisque tous ne sont ni essentiels ni bénéfiques.</span>
<br>
</div>
<div class="clear-zero">&nbsp;</div>  
 <div class="float50">
  <div class="ocm-bl4">Lipides<br /><img src="/wp-content/uploads/lipide-icon.png" width="40" height="40" alt="fibres" class="wp-image-84242 aligncenter size-full" /><span></span></div>
  <div class="ocm-circle"><span class="ocm-res14r">&asymp;<br> $Kr1</span><span class="ocm-result14p">gr</span></div>
  
</div>  
 <div class="float50">
  <div class="ocm-bl4">Protéines<br/><img src="/wp-content/uploads/proteine-icon.png" width="40" height="40" alt="fibres" class="wp-image-84242 aligncenter size-full" /><span></span></div>
  <div class="ocm-circle"><span class="ocm-result14">&asymp;<br> $Kr2</span><span class="ocm-result14p">gr</span></div>
</div> 
<div class="clear-zero">&nbsp;</div>
 <div class="float50">
  <div class="ocm-bl4">Glucides<br /><img src="/wp-content/uploads/glucide-icon.png" width="40" height="40" alt="fibres" class="wp-image-84242 aligncenter size-full" /><span></span></div>
  <div class="ocm-circle"><span class="ocm-result14">&asymp;<br> $Kr3</span><span class="ocm-result14p">gr</span></div>
</div> 
 <div class="float50">
  <div class="ocm-bl4">Fibres<br /><img src="/wp-content/uploads/fibres-icon.png" width="40" height="40" alt="fibres" class="wp-image-84242 aligncenter size-full" /><span></span></div>
  <div class="ocm-circle"><span class="ocm-result14">&asymp;<br> $Kr4</span><span class="ocm-result14p">gr</span></div>
</div>    
EOT;
}
else if ($macro=="2") {
   $vmodele2 = <<<EOT
<div class="ocm-titre1">Répartition des protéines et autres macronutriments</div>
<span class="petite-police-blanche">
<ol>
	<li>Je veux rester en bonne santé et maintenir un poids stable, pour les - de 60 ans :<strong> « votre poids » x 0,8</strong> (par d&eacute;faut)</li>
	<li>Je veux rester en bonne santé et maintenir un poids stable, pour les + de 60 ans : <strong>« votre poids » x 1</strong></li>
	<li>Je pratique la musculation : <strong>« votre poids » x 1,8</strong></li>
	<li>Je pratique un sport d’endurance : <strong>« votre poids » x 1,3</strong></li>
	<li>Je veux maigrir : <strong>« votre poids » x 1,1</strong></li>
</ol>
</span>
<br>
</div>
<div class="clear-zero">&nbsp;</div>  
 <div class="float50">
  <div class="ocm-bl4">Lipides<br /><img src="/wp-content/uploads/lipide-icon.png" width="40" height="40" alt="fibres" class="wp-image-84242 aligncenter size-full" /><span></span></div>
  <div class="ocm-circle"><span class="ocm-result14">&asymp;<br> $Kr1</span><span class="ocm-result14p">gr</span></div>
  
</div>  
 <div class="float50">
  <div class="ocm-bl4">Protéines<br/><img src="/wp-content/uploads/proteine-icon.png" width="40" height="40" alt="fibres" class="wp-image-84242 aligncenter size-full" /><span></span></div>
  <div class="ocm-circle"><span class="ocm-res14r">&asymp;<br> $Kr2</span><span class="ocm-result14p">gr</span></div>
</div> 
<div class="clear-zero">&nbsp;</div>
 <div class="float50">
  <div class="ocm-bl4">Glucides<br /><img src="/wp-content/uploads/glucide-icon.png" width="40" height="40" alt="fibres" class="wp-image-84242 aligncenter size-full" /><span></span></div>
  <div class="ocm-circle"><span class="ocm-result14">&asymp;<br> $Kr3</span><span class="ocm-result14p">gr</span></div>
</div> 
 <div class="float50">
  <div class="ocm-bl4">Fibres<br /><img src="/wp-content/uploads/fibres-icon.png" width="40" height="40" alt="fibres" class="wp-image-84242 aligncenter size-full" /><span></span></div>
  <div class="ocm-circle"><span class="ocm-result14">&asymp;<br> $Kr4</span><span class="ocm-result14p">gr</span></div>
</div>    
EOT;
}
else if ($macro=="3") {
   $vmodele2 = <<<EOT
<div class="ocm-titre1">Répartition des glucides et autres macronutriments</div>

<span class="petite-police-blanche">
Les dernières recommandations préconisent de consommer <strong>40 à 55 % de glucides de la ration calorique</strong>. Par exemple, pour un apport énergétique quotidien de 2 000 kcal, les glucides représenteraient 800 à 1100 kcal soit 200 à 275 g / jour.

<br><span class="ocm-res14r">Les 3 cas :</span><br>
<ol>
	<li><strong>Activité physique élevée, sport d’endurance, travail de force</strong> : ration à 55 % de glucides</li>
	<li><strong>Maintien du poids, travail assis</strong> : ration à 40 % de glucides</li>
	<li><strong>Perte de poids</strong> : ration de 10 à 20 % de glucides afin de stimuler la combustion des graisses de réserve</li>
</ol>
</span>
<br>
</div>
<div class="clear-zero">&nbsp;</div>  
 <div class="float50">
  <div class="ocm-bl4">Lipides<br /><img src="/wp-content/uploads/lipide-icon.png" width="40" height="40" alt="fibres" class="wp-image-84242 aligncenter size-full" /><span></span></div>
  <div class="ocm-circle"><span class="ocm-result14">&asymp;<br> $Kr1</span><span class="ocm-result14p">gr</span></div>
  
</div>  
 <div class="float50">
  <div class="ocm-bl4">Protéines<br/><img src="/wp-content/uploads/proteine-icon.png" width="40" height="40" alt="fibres" class="wp-image-84242 aligncenter size-full" /><span></span></div>
  <div class="ocm-circle"><span class="ocm-result14">&asymp;<br> $Kr2</span><span class="ocm-result14p">gr</span></div>
</div> 
<div class="clear-zero">&nbsp;</div>
 <div class="float50">
  <div class="ocm-bl4">Glucides<br /><img src="/wp-content/uploads/glucide-icon.png" width="40" height="40" alt="fibres" class="wp-image-84242 aligncenter size-full" /><span></span></div>
 <div class="ocm-col3">
<span class="petite-police-blanche">CAS 1</span><br><div class="ocm-circle"><span class="ocm-res14r">&asymp;<br> $Kr3</span><span class="ocm-result14p">gr</span></div></div>
 <div class="ocm-col3">
<span class="petite-police-blanche">CAS 2</span><br><div class="ocm-circle"><span class="ocm-res14r">&asymp;<br> $Kr31</span><span class="ocm-result14p">gr</span></div></div>
<div class="ocm-col3">
<span class="petite-police-blanche">CAS 3</span><br><div class="ocm-circle"><span class="ocm-res14r">&asymp;<br> $Kr32</span><span class="ocm-result14p">gr</span></div></div>
</div> 
 <div class="float50">
  <div class="ocm-bl4">Fibres<br /><img src="/wp-content/uploads/fibres-icon.png" width="40" height="40" alt="fibres" class="wp-image-84242 aligncenter size-full" /><span></span></div>
  <div class="ocm-circle"><span class="ocm-result14">&asymp;<br> $Kr4</span><span class="ocm-result14p">gr</span></div>
</div>    
EOT;
}
else if ($macro=="4") {
   $vmodele2 = <<<EOT
<div class="ocm-titre1">Répartition des fibres et autres macronutriments</div>
</div>
<div class="clear-zero">&nbsp;</div>  
 <div class="float50">
  <div class="ocm-bl4">Lipides<br /><img src="/wp-content/uploads/lipide-icon.png" width="40" height="40" alt="fibres" class="wp-image-84242 aligncenter size-full" /><span></span></div>
  <div class="ocm-circle"><span class="ocm-result14">&asymp;<br> $Kr1</span><span class="ocm-result14p">gr</span></div>
  
</div>  
 <div class="float50">
  <div class="ocm-bl4">Protéines<br/><img src="/wp-content/uploads/proteine-icon.png" width="40" height="40" alt="fibres" class="wp-image-84242 aligncenter size-full" /><span></span></div>
  <div class="ocm-circle"><span class="ocm-result14">&asymp;<br> $Kr2</span><span class="ocm-result14p">gr</span></div>
</div> 
<div class="clear-zero">&nbsp;</div>
 <div class="float50">
  <div class="ocm-bl4">Glucides<br /><img src="/wp-content/uploads/glucide-icon.png" width="40" height="40" alt="fibres" class="wp-image-84242 aligncenter size-full" /><span></span></div>
  <div class="ocm-circle"><span class="ocm-result14">&asymp;<br> $Kr3</span><span class="ocm-result14p">gr</span></div>
</div> 
 <div class="float50">
  <div class="ocm-bl4">Fibres<br /><img src="/wp-content/uploads/fibres-icon.png" width="40" height="40" alt="fibres" class="wp-image-84242 aligncenter size-full" /><span></span></div>
  <div class="ocm-circle"><span class="ocm-res14r">&asymp;<br> $Kr4</span><span class="ocm-result14p">gr</span></div>
</div>    
EOT;
}

   $codehtml .= <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/titre-besoin.png">
</div>
<div class="ocm-bl2">
<div class="clear-zero">&nbsp;</div>
<div class="float50">
  <div class="ocm-bl4">Métabolisme de base<br /><span>Dépense au repos</span></div>
  <div class="ocm-circle"><br><span class="ocm-result14">$MB</span><br><span class="ocm-result14p">Kcal</span></div>
</div>
<div class="float50">
    <div class="ocm-bl4">Besoin en calories<br /><span>Dépense énergétique totale</span></div>
	<div class="ocm-circle"><br><span class="ocm-result14">$BC</span><br><span class="ocm-result14p">Kcal</span></div>
</div>
<div class="clear-zero">&nbsp;</div>
<div class="ocm-noir">
$vmodele2
<div class="clear-zero">&nbsp;</div> 
</div>
<div class="ocm-bl1">
Vous souhaitez perdre quelques kilos? Votre objectif de poids est-il réaliste? Poursuivez l'analyse en calculant votre poids idéal et en découvrant nos solutions:
<form name="anaform" class="ocm-form" method="post" action="#analyse">
<div id="analyse" class="clear">
<div class="centrage"><span class="rosep">Quel est votre objectif de poids (en KG)</span><br><input name="obj" class="ocm-input1" value="$obj" type="text"></div></div>
<div class="clear">
<input type="hidden" name="sexe" value="$sexe" />
<input type="hidden" name="act" value="$act" />
<input type="hidden" name="age" value="$age" />
<input type="hidden" name="taille" value="$taille" />
<input type="hidden" name="poids" value="$poids" />
<input type="hidden" name="valider" value="CALCULER" />
<div class="centrage">&nbsp;<br><input name="valider2" value="ANALYSER" type="submit"></div>
</form>
<div class="clear-zero">&nbsp;</div>
</div></div>
EOT;
}

if (isset($_POST['valider2'])) {
 $IMC=($poids/(($taille/100)*($taille/100)));
   $IMC=round($IMC,1);
      if ($IMC<18.5) {
   $STATUT= "maigreur";
   $IMAGE="imc-statut-maigreur.png";
   }
   else if ($IMC<25) {
   $STATUT= "corpulence normale";
   $IMAGE="imc-statut-normal.png";
   }
   else if ($IMC<30) {
   $STATUT= "surpoids";
   $IMAGE="imc-statut-suroids.png";
   } 
   else {
   $STATUT= "obèsité";
   $IMAGE="imc-statut-obesite.png";
   }
   
      if ($sexe=="2") {$PIL=($taille-100-(($taille-150)/2.5));}
   else if ($sexe=="1") {$PIL=($taille-100-(($taille-150)/4));}
$PIL=round($PIL,1);
   
   $pmaa = (($obj+$PIL)/2);
   $kap = ($poids-$pmaa);
   $vakap = abs($kap);
   
       if ($kap>0) {$textp="Poids moyen à perdre";}
   else if ($kap<0) {$textp="Poids moyen à gagner";}
   else {$textp="Vous êtes à l'équilibre";} 
   
       if ($kap<0.1) {$texto1="Vous n'avez pas de poids à perdre. Félicitations.";
   $lienb="<div class=\"ocm-liena\"><a href=\"/categorie-produit/coffret-minceur-box-de-regime/\">VOIR TOUS NOS PROGRAMMES</a></div>";	   
	   }
   else if ($kap<1) {$texto1="Vous êtes presque à votre poids d'équilibre. Vous pouvez perdre ce léger superflus en découvrant notre programme.";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-s-a-3-kg-14-jours/\">VOIR MON PROGRAMME</a></div>";
   }	   
   else if ($kap<3) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">2  semaines!</span>";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-s-a-3-kg-14-jours/\">VOIR MON PROGRAMME</a></div>";
   }
   else if ($kap<6) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">4  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-m-3-a-6-kg-28-jours/\">VOIR MON PROGRAMME</a></div>";}
   else if ($kap<9) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">6  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-l-6-a-9-kg-42-jours/\">VOIR MON PROGRAMME</a></div>";}
   else if ($kap<12) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">10  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xl-9-a-12-kg-56-jours/\">VOIR MON PROGRAMME</a></div>";}
    else if ($kap<15) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">10  semaines!</span>";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xxl-12-a-15-kg-70-jours/\">VOIR MON PROGRAMME</a></div>";}
   else {$texto1="En étant raisonnable vous pouvez vous fixer un objectif d'environ <span class=\"rosep\">15 kg</span> et l'atteindre au bout de <span class=\"rosep\">10 semaines!</span>";
     $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xxl-12-a-15-kg-70-jours/\">VOIR MON PROGRAMME</a></div>";} 
   
   $codehtml .= <<<EOT
<div class="ocm-noir"><img src="/wp-content/uploads/titre-analyse.png">
</div>
<div class="ocm-bl3">
<div class="ocm-blancg">Votre Indice de Masse Corporelle</div>
<p>IMC = <span class="rosegrasspan">$IMC</span><br />
Statut = <span class="rosegrasspan">$STATUT</span></p>
 <img class="aligncenter" src="/wp-content/uploads/$IMAGE"> 
<div class="ocm-blancg">Vos indicateurs de poids</div>
 <p>
  Votre poids actuel = <span class="rosegrasspan">$poids</span> kg<br />
 Poids idéal (formule de Lorentz) = <span class="rosegrasspan">$PIL</span> kg<br />
Objectif personnel = <span class="rosegrasspan">$obj</span> kg
</p>
<div class="float50">
  <div class="ocm-bl4">Poids moyen à atteindre</div>
  <div class="ocm-circle"><br><span class="ocm-res14r">$pmaa</span><br><span class="result14p">Kg</span></div>
</div>
<div class="float50">
    <div class="ocm-bl4">$textp</div>
	<div class="ocm-circle"><br><span class="ocm-res14r">$vakap</span><br><span class="result14p">Kg</span></div>
</div>
<div class="clear-zero">&nbsp;</div>
</div>
<div class="ocm-noir">
<img src="/wp-content/uploads/titre-solution.png">
</div>
<div class="ocm-bl1">
<div class="clear">
<div class="centrage"><span class="rosep">Quel objectif et comment le concrétiser?</span></div>
</div>
$texto1
<div class="clear-zero">&nbsp;</div>
$lienb
<img src="/wp-content/uploads/ligne-objectif-final.png">
</div>
EOT;
}

   $codehtml .= <<<EOT
<div class="clear-zero">&nbsp;</div>
EOT;


return $codehtml;
}
add_shortcode( 'calculettebpjmacro', 'calculette_besoin_par_jour_macro' );











//Calculette de l'IMC
function calculette_indice_masse_corporelle($url) {
extract( shortcode_atts( array(
      'url'     => '',
   ), $url, 'calculetteimc' ) );
	$taille=$_POST['taille'];
	$taille = preg_replace('*,*','.',$taille);
	$poids=$_POST['poids'];
	$poids = preg_replace('*,*','.',$poids);

   $codehtml = <<<EOT
<div id="resultatIMC"> </div>
			<div class="titre_calc">Calculette de l'indice de masse corporelle (IMC)</div>   
			<div class="bloc_calc">
			<div class="trans_calc">
<form name="imc1form" class="form-type1" method="post" action="$url">
<div class="clear"><span class="rosep">Votre taille (en cm)</span><br><input name="taille" class="input-t1" value="$taille" type="text"></div>
<div class="clear"><span class="rosep">Votre poids (en KG)</span><br><input name="poids" class="input-t1" value="$poids" type="text"></div>
<div class="clear">&nbsp;<br><input name="valider" value="CALCULER" type="submit"></div>
</form>
<div class="clear">&nbsp;</div>
</div></div>
EOT;
if (isset($_POST['valider'])) {
   $IMC=($poids/(($taille/100)*($taille/100)));
   $IMC=round($IMC,1);
   
    if ($IMC<16.5) {
   $STATUT= "Statut dénutrition";
   $IMAGE="/regivia-imc/images/imc-statut-maigreur3.jpg";
   }
   else if ($IMC<18.5) {
   $STATUT= "Statut état de maigreur";
   $IMAGE="/regivia-imc/images/imc-statut-maigreur3.jpg";
   }
   else if ($IMC<25) {
   $STATUT= "Statut corpulence normale";
   $IMAGE="/regivia-imc/images/imc-statut-normal3.jpg";
   }
   else if ($IMC<30) {
   $STATUT= "Statut surpoids";
   $IMAGE="/regivia-imc/images/imc-statut-surpoids3.jpg";
   } 
   else if ($IMC<35) {
   $STATUT= "Statut obèsité modérée";
   $IMAGE="/regivia-imc/images/imc-statut-obesite3.jpg";
   }
   else if ($IMC<40) {
   $STATUT= "Statut obèsité sévère";
   $IMAGE="/regivia-imc/images/imc-statut-obesite3.jpg";
   }
   else {
   $STATUT= "Statut obèsité morbide";
   $IMAGE="/regivia-imc/images/imc-statut-obesite3.jpg";
   }
   
   $codehtml .= <<<EOT
 <div class="bloc_calc2">
  <center><span class="police-resultat"> Votre indice de masse corporelle (IMC) </span></center> <center> <div class="circle">  <center> <br><span class="result14">$IMC</span></div></center>
  
  <center><span class="police-resultat">$STATUT</span></center> <img class="aligncenter" src="$IMAGE"> <br> <center>(N’hésitez pas à changer le nombre de kilos pour voir à partir de quel poids votre statut change !)</center>
</div>  

EOT;
}
return $codehtml;
}
add_shortcode( 'calculetteimc', 'calculette_indice_masse_corporelle' );


//Calculette de l'IMG
function calculette_indice_masse_grasse($url) {
extract( shortcode_atts( array(
      'url'     => '',
   ), $url, 'calculetteimg' ) );
   $sexe=$_POST['sexe'];   
   $age=$_POST['age'];
   $taille=$_POST['taille'];
	$taille = preg_replace('*,*','.',$taille);
   $poids=$_POST['poids'];
	$poids = preg_replace('*,*','.',$poids);
if ($sexe==1) {$hek1="checked ";}
else {$hek2="checked ";}


 $codehtml = <<<EOT
<div id="resultat1"> </div>
			<div class="titre_calc">Calculette de l'IMG</div>   
			<div class="bloc_calc">
			<div class="trans_calc">
<form name="imgform" class="form-type1" method="post" action="$url">
<span class="rosep">Vous êtes</span>
<ul class="ul_calc"> 
<li><input id="femme" name="sexe" value="0" type="radio" $hek2/><label for="femme">Une femme</label></li> 
<li><input id="homme" name="sexe" value="1" type="radio" $hek1/><label for="homme">Un homme</label></li></ul>

<div class="clear">
<div class="col_calc"><span class="rosep">Votre âge</span><br><input name="age" class="input-t1" value="$age" type="text"></div>
<div class="col_calc"><span class="rosep">Votre taille (en cm)</span><br><input name="taille" class="input-t1" value="$taille" type="text"></div>
</div><div class="clear">
<div class="col_calc"><span class="rosep">Votre poids (en KG)</span><br><input name="poids" class="input-t1" value="$poids" type="text"></div>
<div class="col_calc">&nbsp;<br><input name="valider" value="CALCULER" type="submit"></div>
</div>  
</form>
<div class="clear">&nbsp;</div>
</div></div>
EOT;
if (isset($_POST['valider'])) {
   $IMG=(1.2*$poids/(($taille/100)*($taille/100)))+(0.23*$age)-(10.8*$sexe)-5.4;
   $IMG=round($IMG,1);
   
if($sexe=="0" AND $IMG<25)   {
   $STATUT= "Vous êtes trop maigre";
   $IMAGE="/regivia-imc/images/img-f-1.jpg";
   }
else if($sexe=="0" AND $IMG<=30)  {
   $STATUT= "Vous êtes dans la normale";
   $IMAGE="/regivia-imc/images/img-f-2.jpg";
   }
else if($sexe=="0" AND $IMG>30) {
   $STATUT= "Vous avez un excès de graisse";
   $IMAGE="/regivia-imc/images/img-f-3.jpg";
   }
if($sexe=="1" AND $IMG<15)  {
   $STATUT= "Vous êtes trop maigre";
   $IMAGE="/regivia-imc/images/img-h-1.jpg";
   } 
else if($sexe=="1" AND $IMG<=20)  {
   $STATUT= "Vous êtes dans la normale";
   $IMAGE="/regivia-imc/images/img-h-2.jpg";
   }
else if($sexe=="1" AND $IMG>20)  {
   $STATUT= "Vous avez un excès de graisse";
   $IMAGE="/regivia-imc/images/img-h-3.jpg";
   }
    
     $codehtml .= <<<EOT
 <div class="bloc_calc2">
  <center><span class="police-resultat"> Votre indice de masse grasse (IMG) </span></center> <center> <div class="circle">  <center> <br><span class="result14">$IMG</span></div></center>
  
  <center><span class="police-resultat">$STATUT</span></center> <img class="aligncenter" src="$IMAGE"> <br> <center>(N’hésitez pas à changer le nombre de kilos pour voir à partir de quel poids votre statut change !)</center>
</div>  

EOT;
}
return $codehtml;
}
add_shortcode( 'calculetteimg', 'calculette_indice_masse_grasse' );



//Calculette du poids idéal par formule de Lorentz
function calculette_lorentz($url) {
extract( shortcode_atts( array(
      'url'     => '',
   ), $url, 'calculettelorentz' ) );
	$sexe=$_POST['sexe'];  
	$taille=$_POST['taille'];
	$taille = preg_replace('*,*','.',$taille);
if ($sexe==1) {$hek1="checked ";}
else {$hek2="checked ";}
$codehtml = <<<EOT
			<div class="titre_calc">Calculette du poids idéal par la formule de Lorentz</div>   
			<div class="bloc_calc_1_4">
			<div class="trans_calc_1_4">
<form name="lorentzform" class="form-type1" method="post" action="$url">
<span class="rosep">Vous êtes</span>
<ul class="ul_calc"> 
<li><input id="femme" name="sexe" value="2" type="radio" $hek2/><label for="femme">Une femme</label></li> 
<li><input id="homme" name="sexe" value="1" type="radio" $hek1/><label for="homme">Un homme</label></li></ul>
<div class="clear">
<span class="rosep">Votre taille (en cm)</span><br><input name="taille" class="input-t1" value="$taille" type="text">
</div><div class="clear"><br>&nbsp;
<input name="valider" value="CALCULER" type="submit">
</div>  
</form>
<div class="clear">&nbsp;</div>
</div></div>
EOT;
if (isset($_POST['valider'])) {
   if ($sexe=="2") {$PIL=($taille-100-(($taille-150)/2.5));}
   else if ($sexe=="1") {$PIL=($taille-100-(($taille-150)/4));}
$PIL=round($PIL,0);
   $codehtml .= <<<EOT
<div class="bloc_calc2">
  <center><span class="police-resultat"> Votre poids idéal selon la formule de Lorentz</span></center> <center> <div class="circle">  <center> <br><span class="result14">$PIL</span><br><span class="result14p">KG</span></div> </center>
</div>
EOT;
}
return $codehtml;
}
add_shortcode( 'calculettelorentz', 'calculette_lorentz' );



//Calculette du poids idéal par formule de Monnerot Dumaine
function calculette_monnerot($url) {
extract( shortcode_atts( array(
      'url'     => '',
   ), $url, 'calculettemonnerot' ) );
	$taille=$_POST['taille'];
	$taille = preg_replace('*,*','.',$taille);
	$poignet=$_POST['poignet'];
	$poignet = preg_replace('*,*','.',$poignet);
	$codehtml = <<<EOT
			<div class="titre_calc">Calculette du poids idéal par la formule de Monnerot-Dumaine</div>   
			<div class="bloc_calc_1_4">
			<div class="trans_calc_1_4">
<form name="monnerotform" class="form-type1" method="post" action="$url">
<div class="clear">
<span class="rosep">Votre taille (en cm)</span><br><input name="taille" class="input-t1" value="$taille" type="text">
</div>
<div class="clear">
<span class="rosep">Circonférence du poignet (en cm)</span><br><input name="poignet" class="input-t1" value="$poignet" type="text">
</div>
<div class="clear"><br>&nbsp;
<input name="valider" value="CALCULER" type="submit">
</div>  
</form>
<div class="clear">&nbsp;</div>
</div></div>
EOT;
if (isset($_POST['valider'])) {
		$PIMD=(($taille-100+(4*$poignet))/2);
		$PIMD=round($PIMD,0);
	   $codehtml .= <<<EOT
	<div class="bloc_calc2">
	  <center><span class="police-resultat"> Votre poids idéal selon la formule de Monnerot-Dumaine</span></center> <center> <div class="circle">  <center> <br><span class="result14">$PIMD</span><br><span class="result14p">KG</span></div> </center>
	</div>
EOT;
}
return $codehtml;
}
add_shortcode( 'calculettemonnerot', 'calculette_monnerot' );



//Calculette du poids idéal par formule de Devine
function calculette_devine($url) {
extract( shortcode_atts( array(
      'url'     => '',
   ), $url, 'calculettedevine' ) );
	$sexe=$_POST['sexe'];  
	$taille=($_POST['taille']);
	$taille = preg_replace('*,*','.',$taille);
if ($sexe==1) {$hek1="checked ";}
else {$hek2="checked ";}
$codehtml = <<<EOT
			<div class="titre_calc">Calculette du poids idéal par la formule de Devine</div>   
			<div class="bloc_calc_1_4">
			<div class="trans_calc_1_4">
<form name="devineform" class="form-type1" method="post" action="$url">
<span class="rosep">Vous êtes</span>
<ul class="ul_calc"> 
<li><input id="femme" name="sexe" value="2" type="radio" $hek2/><label for="femme">Une femme</label></li> 
<li><input id="homme" name="sexe" value="1" type="radio" $hek1/><label for="homme">Un homme</label></li></ul>
<div class="clear">
<span class="rosep">Votre taille (en cm)</span><br><input name="taille" class="input-t1" value="$taille" type="text">
</div><div class="clear"><br>&nbsp;
<input name="valider" value="CALCULER" type="submit">
</div>  
</form>
<div class="clear">&nbsp;</div>
</div></div>
EOT;
if (isset($_POST['valider'])) {
   if ($sexe=="2") {$PID=(45.5+2.3*(($taille/2.54)-60));}
   else if ($sexe=="1") {$PID=(50.5+2.3*(($taille/2.54)-60));}
$PID=round($PID,0);
   $codehtml .= <<<EOT
<div class="bloc_calc2">
  <center><span class="police-resultat"> Votre poids idéal selon la formule de Devine</span></center> <center> <div class="circle">  <center> <br><span class="result14">$PID</span><br><span class="result14p">KG</span></div> </center>
</div>
EOT;
}
return $codehtml;
}
add_shortcode( 'calculettedevine', 'calculette_devine' );



//Calculette du poids idéal par formule de Broca
function calculette_broca($url) {
extract( shortcode_atts( array(
      'url'     => '',
   ), $url, 'calculettebroca' ) );
	$taille=$_POST['taille'];
	$taille = preg_replace('*,*','.',$taille);
	$codehtml = <<<EOT
			<div class="titre_calc">Calculette du poids idéal par la formule de Broca</div>   
			<div class="bloc_calc_1_4">
			<div class="trans_calc_1_4">
<form name="brocaform" class="form-type1" method="post" action="$url">
<div class="clear">
<span class="rosep">Votre taille (en cm)</span><br><input name="taille" class="input-t1" value="$taille" type="text">
</div>
<div class="clear"><br>&nbsp;
<input name="valider" value="CALCULER" type="submit">
</div>  
</form>
<div class="clear">&nbsp;</div>
</div></div>
EOT;
if (isset($_POST['valider'])) {
		$PIBR=($taille-100);
		$PIBR=round($PIBR,0);
	   $codehtml .= <<<EOT
	<div class="bloc_calc2">
	  <center><span class="police-resultat"> Votre poids idéal selon la formule de Broca</span></center> <center> <div class="circle">  <center> <br><span class="result14">$PIBR</span><br><span class="result14p">KG</span></div> </center>
	</div>
EOT;
}
return $codehtml;
}
add_shortcode( 'calculettebroca', 'calculette_broca' );



//Calculette du poids idéal par formule de Perrault
function calculette_perrault($url) {
extract( shortcode_atts( array(
      'url'     => '',
   ), $url, 'calculetteperrault' ) );
	$taille=$_POST['taille'];
	$taille = preg_replace('*,*','.',$taille);
	$age=$_POST['age'];
	$age = preg_replace('*,*','.',$age);
	$codehtml = <<<EOT
			<div class="titre_calc">Calculette du poids idéal par la formule de Perrault</div>   
			<div class="bloc_calc_1_4">
			<div class="trans_calc_1_4">
<form name="perraultform" class="form-type1" method="post" action="$url">
<div class="clear">
<span class="rosep">Votre taille (en cm)</span><br><input name="taille" class="input-t1" value="$taille" type="text">
</div>
<div class="clear">
<span class="rosep">Votre &acirc;ge (en années)</span><br><input name="age" class="input-t1" value="$age" type="text">
</div>
<div class="clear"><br>&nbsp;
<input name="valider" value="CALCULER" type="submit">
</div>  
</form>
<div class="clear">&nbsp;</div>
</div></div>
EOT;
if (isset($_POST['valider'])) {
		$PIPE=($taille-100+(0.09*$age));
		$PIPE=round($PIPE,0);
	   $codehtml .= <<<EOT
	<div class="bloc_calc2">
	  <center><span class="police-resultat"> Votre poids idéal selon la formule de Perrault</span></center> <center> <div class="circle">  <center> <br><span class="result14">$PIPE</span><br><span class="result14p">KG</span></div> </center>
	</div>
EOT;
}
return $codehtml;
}
add_shortcode( 'calculetteperrault', 'calculette_perrault' );


//Calculette du poids idéal par formule de Creff
function calculette_creff($url) {
extract( shortcode_atts( array(
      'url'     => '',
   ), $url, 'calculettecreff' ) );
	$taille=$_POST['taille'];
	$taille = preg_replace('*,*','.',$taille);
	$age=$_POST['age'];
	$age = preg_replace('*,*','.',$age);
	$morph=$_POST['morph'];
if ($morph=="Large") {$check2=" selected";}
else if ($morph=="Mince") {$check3=" selected";}
else {$check1=" selected";}

$codehtml = <<<EOT
			<div class="titre_calc">Calculette du poids idéal par la formule de Creff</div>   
			<div class="bloc_calc_1_4">
			<div class="trans_calc_1_4">
<form name="creffform" class="form-type1" method="post" action="$url">
<div class="clear">
<span class="rosep">Votre taille (en cm)</span><br><input name="taille" class="input-t1" value="$taille" type="text">
</div>
<div class="clear">
<span class="rosep">Votre &acirc;ge (en années)</span><br><input name="age" class="input-t1" value="$age" type="text">
</div>
<div class="clear">
<span class="rosep">Votre morphologie</span><br>
<select name="morph">
<option$check1>Normale</option>
<option$check2>Large</option>
<option$check3>Mince</option>
</select>
</div>
<div class="clear"><br>&nbsp;
<input name="valider" value="CALCULER" type="submit">
</div>  
</form>
<div class="clear">&nbsp;</div>
</div></div>
EOT;
if (isset($_POST['valider'])) {
   if ($morph=="Normale") {$PICR=($taille-100+(0.09*$age));}
   else if ($morph=="Large") {$PICR=($taille-100+(0.09*1.1*$age));}
   else {$PICR=($taille-100+(0.09*0.9*$age));}
$PICR=round($PICR,1);
   $codehtml .= <<<EOT
<div class="bloc_calc2">
  <center><span class="police-resultat"> Votre poids idéal selon la formule de Creff</span></center> <center> <div class="circle">  <center> <br><span class="result14">$PICR</span><br><span class="result14p">KG</span></div> </center>
</div>
EOT;
}
return $codehtml;
}
add_shortcode( 'calculettecreff', 'calculette_creff' );


//Calculette du poids idéal par formule de Bornhardt
function calculette_bornhardt($url) {
extract( shortcode_atts( array(
      'url'     => '',
   ), $url, 'calculettebornhardt' ) );
	$taille=$_POST['taille'];
	$taille = preg_replace('*,*','.',$taille);
	$poitr=$_POST['poitr'];
	$poitr = preg_replace('*,*','.',$poitr);
	$codehtml = <<<EOT
			<div class="titre_calc">Calculette du poids idéal par la formule de Bornhardt</div>   
			<div class="bloc_calc_1_4">
			<div class="trans_calc_1_4">
<form name="bornhardtform" class="form-type1" method="post" action="$url">
<div class="clear">
<span class="rosep">Votre taille (en cm)</span><br><input name="taille" class="input-t1" value="$taille" type="text">
</div>
<div class="clear">
<span class="rosep">Tour de poitrine (en cm)</span><br><input name="poitr" class="input-t1" value="$poitr" type="text">
</div>
<div class="clear"><br>&nbsp;
<input name="valider" value="CALCULER" type="submit">
</div>  
</form>
<div class="clear">&nbsp;</div>
</div></div>
EOT;
if (isset($_POST['valider'])) {
		$PIBO=($taille*$poitr/240);
		$PIBO=round($PIBO,0);
	   $codehtml .= <<<EOT
	<div class="bloc_calc2">
	  <center><span class="police-resultat"> Votre poids idéal selon la formule de Bornhardt</span></center> <center> <div class="circle">  <center> <br><span class="result14">$PIBO</span><br><span class="result14p">KG</span></div> </center>
	</div>
EOT;
}
return $codehtml;
}
add_shortcode( 'calculettebornhardt', 'calculette_bornhardt' );


//Calculette depenses en calorie par minute selon le sport

function calculette_sportmet($atts) {
extract( shortcode_atts( array(
      'url'     => '',
	  'sport'     => '',
   ), $atts, 'calculettesportmet' ) );
	
	if (isset($_POST['sport'])) {$sport=$_POST['sport'];}
	else {$sport=$sport;} 
		
	$temps=$_POST['temps'];
	$poids=$_POST['poids'];
	$poids = preg_replace('*,*','.',$poids);

$codehtml = <<<EOT
			<div class="titre_calc">Calculette des dépenses en calories par sport</div>   
			<div class="bloc_calc_1_4">
			<div class="trans_calc_1_4">
			En sélectionnant une activité sportive de votre choix, cette calculette RegiVia des dépenses énergétiques vous permettra de connaître pour chaque sport et selon votre poids, le nombre de calories que vous allez dépenser sur un temps donné.</br> </br>  
			</br> </br></br></br></br>
<form name="sportmetform" class="form-type1" method="post" action="$url">

<div class="clear">
<div class="col_calc">
<span class="rosep">Votre sport</span><br>
<select name="sport">
<option value="$sport">$sport</option>
<option value="Aérobic intensité normale">Aérobic intensité normale</option>
<option value="Aérobic haute intensité">Aérobic haute intensité</option>
<option value="Aïkido">Aïkido</option>
<option value="Aquabiking">Aquabiking</option> 
<option value="Aquagym">Aquagym</option>
<option value="Arts martiaux">Art martiaux (en général)</option>
<option value="Aviron modéré">Aviron modéré</option>
<option value="Aviron intense">Aviron intense</option>
<option value="Badminton calme">Badminton calme</option>
<option value="Badminton intermédiare">Badminton intermédiare</option>
<option value="Badminton intense">Badminton intense</option>
<option value="Ballet danse">Ballet danse</option>
<option value="Basket récréatif">Basket récréatif</option>
<option value="Basket compétition">Basket compétition</option>
<option value="Bicyclette Vélo Effort léger">Bicyclette Vélo Effort léger</option>
<option value="Vélo Effort moyen">Vélo Effort moyen</option>
<option value="Vélo intense 22-30km/h">Vélo intense 22-30km/h</option>
<option value="Vélo très intense sup à 30km/h">Vélo très intense sup à 30km/h</option>
<option value="Vélo stationnaire faible">Vélo stationnaire faible</option>
<option value="Vélo stationnaire moyen">Vélo stationnaire moyen</option>
<option value="Vélo stationnaire intense">Vélo stationnaire intense</option>
<option value="Vélo stationnaire très intense">Vélo stationnaire très intense</option>
<option value="Boxe intensité faible">Boxe intensité faible</option>
<option value="Boxe intensité modérée">Boxe intensité modérée</option>
<option value="Boxe intensité forte">Boxe intensité forte</option>
<option value="Corde à sauter modérée">Corde à sauter modérée</option>
<option value="Corde à sauter intense">Corde à sauter intense</option>
<option value="Course à pied faible avec marche">Course à pied faible avec marche</option>
<option value="Course à pied faible">Course à pied faible</option>
<option value="Course à pied 8km h">Course à pied 8km h</option>
<option value="Course à pied 9,5km/h">Course à pied 9,5km/h</option>
<option value="Course à pied 13km/h">Course à pied 13km/h</option>
<option value="Course à pied cross-country">Course à pied cross-country</option>
<option value="Course à pied sur place">Course à pied sur place</option>
<option value="Danse calme">Danse calme</option>
<option value="Danse modérée">Danse modérée</option>
<option value="Danse intense">Danse intense</option>
<option value="Equitation au pas">Equitation au pas</option>
<option value="Equitation trot et galop">Equitation trot et galop</option>
<option value="Escalade">Escalade</option>
<option value="Escrime récréatif">Escrime récréatif</option>
<option value="Escrime intense">Escrime intense</option>
<option value="Fitness intensité faible">Fitness intensité faible</option>
<option value="Fitness intensité moyenne">Fitness intensité moyenne</option>
<option value="Fitness intensité forte">Fitness intensité forte</option>
<option value="Football modéré">Football modéré</option>
<option value="Football intense">Football intense</option>
<option value="Golf à pied">Golf à pied</option>
<option value="Golf en voiturette">Golf en voiturette</option>
<option value="Gymnastique">Gymnastique</option>
<option value="Halterophilie">Halterophilie</option>
<option value="Hand-ball">Hand-ball</option>
<option value="Hockey sur gazon">Hockey sur gazon</option>
<option value="Hockey sur glace">Hockey sur glace</option>
<option value="Judo">Judo</option>
<option value="Karaté">Karaté</option>
<option value="Kayak eaux calmes">Kayak eaux calmes</option>
<option value="Kayak eaux vives">Kayak eaux vives</option>
<option value="Kick Boxing">Kick Boxing</option>
<option value="Luge skeleton bobsleigh">Luge skeleton bobsleigh</option>
<option value="Marche ordinaire 5km h">Marche ordinaire 5km h</option>
<option value="Marche rapide">Marche rapide</option>
<option value="Marche nordique">Marche nordique</option>
<option value="Marche olympique">Marche olympique</option>
<option value="Musculation">Musculation</option>
<option value="Natation récréatif">Natation récréatif</option>
<option value="Natation style libre modéré">Natation style libre modéré</option>
<option value="Natation style libre intense">Natation style libre intense</option>
<option value="Natation brasse">Natation brasse</option>
<option value="Natation crawl">Natation crawl</option>
<option value="Natation dos">Natation dos</option>
<option value="Natation papillon">Natation papillon</option>
<option value="Natation nage synchronisée">Natation nage synchronisée</option>
<option value="Patinage récréatif">Patinage récréatif</option>
<option value="Patinage intense">Patinage intense</option>
<option value="Patinage vitesse compétition">Patinage vitesse compétition</option>
<option value="Patinage roller récréatif">Patinage roller récréatif</option>
<option value="Patinage roller intense">Patinage roller intense</option>
<option value="Plongée sous-marine">Plongée sous-marine</option>
<option value="Polo">Polo</option>
<option value="Rafting">Rafting</option>
<option value="Rameur d appartement">Rameur d appartement</option>
<option value="Randonnée">Randonnée</option>
<option value="Randonnée avec sac">Randonnée avec sac</option>
<option value="Raquette à neige">Raquette à neige</option>
<option value="Rugby">Rugby</option>
<option value="Skate">Skate</option>
<option value="Ski alpin léger">Ski alpin léger</option>
<option value="Ski alpin modéré">Ski alpin modéré</option>
<option value="Ski alpin intense">Ski alpin intense</option>
<option value="Ski nautique">Ski nautique</option>
<option value="Ski randonnée modéré 7k/h">Ski randonnée modéré 7k/h</option>
<option value="Ski randonnée intense 10.5k/h">Ski randonnée intense 10.5k/h</option>
<option value="Squash récréatif">Squash récréatif</option>
<option value="Squash intense">Squash intense</option>
<option value="Step modéré">Step modéré</option>
<option value="Step intense">Step intense</option>
<option value="Surf">Surf</option>
<option value="Taï-chi">Taï-chi</option>
<option value="Tennis de table">Tennis de table</option>
<option value="Tennis en simple">Tennis en simple</option>
<option value="Tennis en double">Tennis en double</option>
<option value="Volley-ball récréatif">Volley-ball récréatif</option>
<option value="Volley-ball compétition">Volley-ball compétition</option>
<option value="VTT Vélo Tout Terrain">VTT Vélo Tout Terrain</option>
<option value="Water Polo">Water Polo</option>
<option value="Yoga">Yoga</option>
<option value="Zumba">Zumba</option>

</select>
</div>
<div class="col_calc">
<span class="rosep">Temps en minutes</span><br><input name="temps" class="input-t1" value="$temps" type="text">
</div>
</div>

<div class="clear">
<div class="col_calc"><span class="rosep">Votre poids (en KG)</span><br><input name="poids" class="input-t1" value="$poids" type="text"></div>
<div class="col_calc">&nbsp;<br><input name="valider" value="CALCULER" type="submit"></div> 
</div>
</form>
<div class="clear">&nbsp;</div>
</div>
</div>
EOT;
if (isset($_POST['valider'])) {

	if ($sport=="Aérobic intensité normale") {$MET=5.5;$lien="depenses-caloriques-consommees-pour-l-aerobic/";}
	else if ($sport=="Aérobic haute intensité") {$MET=7.5;$lien="depenses-caloriques-consommees-pour-l-aerobic/";}
	else if ($sport=="Aïkido") {$MET=9;$lien="depenses-caloriques-consommees-pour-l-aikido/";}
	else if ($sport=="Aquabiking") {$MET=8;$lien="aquabike-depenses-caloriques-consommees-pour-l-aquabiking/";}
	else if ($sport=="Aquagym") {$MET=4;$lien="depenses-caloriques-consommees-pour-l-aquagym/";}
	else if ($sport=="Arts martiaux") {$MET=4;$lien="depenses-caloriques-consommees-pour-les-arts-martiaux/";}
	else if ($sport=="Aviron modéré") {$MET=7;$lien="depenses-caloriques-consommees-pour-l-aviron/";}
	else if ($sport=="Aviron intense") {$MET=11;$lien="depenses-caloriques-consommees-pour-l-aviron/";}
	else if ($sport=="Badminton calme") {$MET=4.5;$lien="depenses-caloriques-consommees-pour-le-badminton/";}
	else if ($sport=="Badminton intermédiare") {$MET=7;$lien="depenses-caloriques-consommees-pour-le-badminton/";}
	else if ($sport=="Badminton intense") {$MET=10;$lien="depenses-caloriques-consommees-pour-le-badminton/";}
	else if ($sport=="Ballet danse") {$MET=6;$lien="depenses-caloriques-consommees-pour-le-ballet-danse/";}
	else if ($sport=="Basket récréatif") {$MET=6;$lien="depenses-caloriques-consommees-pour-le-basket-ball/";}
	else if ($sport=="Basket compétition") {$MET=8;$lien="depenses-caloriques-consommees-pour-le-basket-ball/";}
	else if ($sport=="Bicyclette Vélo Effort léger") {$MET=4;$lien="depenses-caloriques-consommees-pour-le-velo-bicyclette-et-cyclisme/";}
	else if ($sport=="Vélo Effort moyen") {$MET=7;$lien="depenses-caloriques-consommees-pour-le-velo-bicyclette-et-cyclisme/";}
	else if ($sport=="Vélo intense 22-30km/h") {$MET=10;$lien="depenses-caloriques-consommees-pour-le-velo-bicyclette-et-cyclisme/";}
	else if ($sport=="Vélo très intense sup à 30km/h") {$MET=14;$lien="depenses-caloriques-consommees-pour-le-velo-bicyclette-et-cyclisme/";}
	else if ($sport=="Vélo stationnaire faible") {$MET=3;$lien="depenses-caloriques-consommees-pour-le-velo-d-appartement-stationnaire/";}
	else if ($sport=="Vélo stationnaire moyen") {$MET=5.5;$lien="depenses-caloriques-consommees-pour-le-velo-d-appartement-stationnaire/";}
	else if ($sport=="Vélo stationnaire intense") {$MET=7;$lien="depenses-caloriques-consommees-pour-le-velo-d-appartement-stationnaire/";}
	else if ($sport=="Vélo stationnaire très intense") {$MET=11;$lien="depenses-caloriques-consommees-pour-le-velo-d-appartement-stationnaire/";}
	else if ($sport=="Boxe intensité faible") {$MET=6;$lien="depenses-caloriques-consommees-pour-la-boxe/";}
	else if ($sport=="Boxe intensité modérée") {$MET=9;$lien="depenses-caloriques-consommees-pour-la-boxe/";}
	else if ($sport=="Boxe intensité forte") {$MET=12;$lien="depenses-caloriques-consommees-pour-la-boxe/";}
	else if ($sport=="Corde à sauter modérée") {$MET=8.5;$lien="depenses-caloriques-consommees-pour-la-corde-a-sauter/";}
	else if ($sport=="Corde à sauter intense") {$MET=11.5;$lien="depenses-caloriques-consommees-pour-la-corde-a-sauter/";}
	else if ($sport=="Course à pied faible avec marche") {$MET=6;$lien="depenses-caloriques-consommees-pour-la-course-a-pied-le-running-footing-ou-jogging/";}
	else if ($sport=="Course à pied faible") {$MET=7;$lien="depenses-caloriques-consommees-pour-la-course-a-pied-le-running-footing-ou-jogging/";}
	else if ($sport=="Course à pied 8km h") {$MET=8;$lien="depenses-caloriques-consommees-pour-la-course-a-pied-le-running-footing-ou-jogging/";}
	else if ($sport=="Course à pied 9,5km/h") {$MET=10;$lien="depenses-caloriques-consommees-pour-la-course-a-pied-le-running-footing-ou-jogging/";}
	else if ($sport=="Course à pied 13km/h") {$MET=13;$lien="depenses-caloriques-consommees-pour-la-course-a-pied-le-running-footing-ou-jogging/";}
	else if ($sport=="Course à pied cross-country") {$MET=9;$lien="depenses-caloriques-consommees-pour-la-course-a-pied-le-running-footing-ou-jogging/";}
	else if ($sport=="Course à pied sur place") {$MET=8;$lien="depenses-caloriques-consommees-pour-la-course-a-pied-le-running-footing-ou-jogging/";}
	else if ($sport=="Danse calme") {$MET=3;$lien="depenses-caloriques-consommees-pour-la-danse/";}
	else if ($sport=="Danse modérée") {$MET=4;$lien="depenses-caloriques-consommees-pour-la-danse/";}
	else if ($sport=="Danse intense") {$MET=5;$lien="depenses-caloriques-consommees-pour-la-danse/";}
	else if ($sport=="Escalade") {$MET=11;$lien="depenses-caloriques-consommees-pour-l-escalade-et-la-varappe/";}
	else if ($sport=="Escrime récréatif") {$MET=6;$lien="depenses-caloriques-consommees-pour-l-escrime-epee-et-fleuret/";}
	else if ($sport=="Escrime intense") {$MET=8;$lien="depenses-caloriques-consommees-pour-l-escrime-epee-et-fleuret/";}
	else if ($sport=="Equitation au pas") {$MET=4;$lien="depenses-caloriques-consommees-pour-l-equitation-monter-a-cheval/";}
	else if ($sport=="Equitation trot et galop") {$MET=6;$lien="depenses-caloriques-consommees-pour-l-equitation-monter-a-cheval/";}
	else if ($sport=="Fitness intensité faible") {$MET=4;$lien="depenses-caloriques-consommees-pour-le-fitness/";}
	else if ($sport=="Fitness intensité moyenne") {$MET=6;$lien="depenses-caloriques-consommees-pour-le-fitness/";}
	else if ($sport=="Fitness intensité forte") {$MET=9;$lien="depenses-caloriques-consommees-pour-le-fitness/";}
	else if ($sport=="Football modéré") {$MET=8;$lien="depenses-caloriques-consommees-pour-le-football/";}
	else if ($sport=="Football intense") {$MET=9;$lien="depenses-caloriques-consommees-pour-le-football/";}
	else if ($sport=="Golf à pied") {$MET=5.5;$lien="depenses-caloriques-consommees-pour-le-golf/";}
	else if ($sport=="Golf en voiturette") {$MET=4.5;$lien="depenses-caloriques-consommees-pour-le-golf/";}
	else if ($sport=="Gymnastique") {$MET=4;$lien="depenses-caloriques-consommees-pour-la-gymnastique/";}
	else if ($sport=="Halterophilie") {$MET=3;$lien="depenses-caloriques-consommees-pour-l-halterophilie/";}
	else if ($sport=="Hand-ball") {$MET=8;$lien="depenses-caloriques-consommees-pour-le-hand-ball/";}
	else if ($sport=="Hockey sur gazon") {$MET=9;$lien="depenses-caloriques-consommees-pour-le-hockey-sur-gazon/";}
	else if ($sport=="Hockey sur glace") {$MET=9;$lien="depenses-caloriques-consommees-pour-le-hockey-sur-glace/";}
	else if ($sport=="Judo") {$MET=10;$lien="depenses-caloriques-consommees-pour-le-judo/";}
	else if ($sport=="Karaté") {$MET=10;$lien="depenses-caloriques-consommees-pour-le-karate/";}
	else if ($sport=="Kayak eaux vives") {$MET=8.5;$lien="depenses-caloriques-consommees-pour-le-kayak-en-riviere-ou-en-mer/";}
	else if ($sport=="Kayak eaux calmes") {$MET=5;$lien="depenses-caloriques-consommees-pour-le-kayak-en-riviere-ou-en-mer/";}
	else if ($sport=="Kick Boxing") {$MET=10;$lien="depenses-caloriques-consommees-pour-le-kick-boxing/";}
	else if ($sport=="Luge skeleton bobsleigh") {$MET=7;$lien="depenses-caloriques-consommees-pour-la-luge-le-skeleton-et-le-bobsleigh/";}
	else if ($sport=="Marche ordinaire 5km h") {$MET=3;$lien="depenses-caloriques-consommees-pour-la-marche-a-pied/";}
	else if ($sport=="Marche rapide") {$MET=4.5;$lien="depenses-caloriques-consommees-pour-la-marche-rapide-ou-sportive/";}
	else if ($sport=="Marche nordique") {$MET=5;$lien="depenses-caloriques-consommees-pour-la-marche-nordique-nordic-walking/";}
	else if ($sport=="Marche olympique") {$MET=6.5;$lien="depenses-caloriques-consommees-pour-la-marche-rapide-ou-sportive/";}
	else if ($sport=="Musculation") {$MET=3;$lien="depenses-caloriques-consommees-pour-la-musculation/";}
	else if ($sport=="Natation récréatif") {$MET=6;$lien="depenses-caloriques-en-calories-consommees-pour-la-natation/";}
	else if ($sport=="Natation style libre modéré") {$MET=8;$lien="depenses-caloriques-en-calories-consommees-pour-la-natation/";}
	else if ($sport=="Natation style libre intense") {$MET=10;$lien="depenses-caloriques-en-calories-consommees-pour-la-natation/";}
	else if ($sport=="Natation brasse") {$MET=10;$lien="depenses-caloriques-en-calories-consommees-pour-la-natation/brasse/";}
	else if ($sport=="Natation crawl") {$MET=8;$lien="depenses-caloriques-en-calories-consommees-pour-la-natation/crawl/";}
	else if ($sport=="Natation dos") {$MET=8;$lien="depenses-caloriques-en-calories-consommees-pour-la-natation/dos-crawle/";}
	else if ($sport=="Natation papillon") {$MET=11;$lien="depenses-caloriques-en-calories-consommees-pour-la-natation/papillon/";}
	else if ($sport=="Natation nage synchronisée") {$MET=8;$lien="depenses-caloriques-en-calories-consommees-pour-la-natation/nage-synchronisee/";}
	else if ($sport=="Patinage récréatif") {$MET=5.5;$lien="depenses-caloriques-consommees-pour-le-patinage-sur-glace/";}
	else if ($sport=="Patinage intense") {$MET=9;$lien="depenses-caloriques-consommees-pour-le-patinage-sur-glace/";}
	else if ($sport=="Patinage vitesse compétition") {$MET=15;$lien="depenses-caloriques-consommees-pour-le-patinage-de-vitesse-sur-glace/";}
	else if ($sport=="Patinage roller récréatif") {$MET=7;$lien="depenses-caloriques-consommees-pour-le-roller-patin-en-ligne/";}
	else if ($sport=="Patinage roller intense") {$MET=10;$lien="depenses-caloriques-consommees-pour-le-roller-patin-en-ligne/";}
	else if ($sport=="Plongée sous-marine") {$MET=7;$lien="depenses-caloriques-consommees-pour-la-plongee-sous-marine/";}
	else if ($sport=="Polo") {$MET=8;$lien="depenses-caloriques-consommees-pour-le-polo/";}
	else if ($sport=="Rafting") {$MET=5;$lien="depenses-caloriques-consommees-pour-le-rafting/";}
	else if ($sport=="Rameur d appartement") {$MET=7;$lien="depenses-caloriques-consommees-pour-le-rameur-d-appartement/";}
	else if ($sport=="Randonnée") {$MET=6;$lien="depenses-caloriques-consommees-pour-la-randonnee-avec-ou-sans-sac/";}
	else if ($sport=="Randonnée avec sac") {$MET=7;$lien="depenses-caloriques-consommees-pour-la-randonnee-avec-ou-sans-sac/";}
	else if ($sport=="Raquette à neige") {$MET=8;$lien="depenses-caloriques-consommees-pour-la-randonnee-en-raquette-a-neige/";}
	else if ($sport=="Rugby") {$MET=10;$lien="depenses-caloriques-consommees-pour-le-rugby";}
	else if ($sport=="Skate") {$MET=5;$lien="depenses-caloriques-consommees-pour-le-skate-board-planche-a-roulette/";}
	else if ($sport=="Ski alpin léger") {$MET=5;$lien="depenses-caloriques-consommees-pour-le-ski-alpin/";}
	else if ($sport=="Ski alpin modéré") {$MET=6;$lien="depenses-caloriques-consommees-pour-le-ski-alpin/";}
	else if ($sport=="Ski alpin intense") {$MET=8;$lien="depenses-caloriques-consommees-pour-le-ski-alpin/";}
	else if ($sport=="Ski nautique") {$MET=7;$lien="depenses-caloriques-consommees-pour-le-ski-nautique/";}
	else if ($sport=="Ski randonnée modéré 7k/h") {$MET=7;$lien="depenses-caloriques-consommees-pour-le-ski-de-randonnee-ou-ski-de-fond/";}
	else if ($sport=="Ski randonnée intense 10.5k/h") {$MET=8;$lien="depenses-caloriques-consommees-pour-le-ski-de-randonnee-ou-ski-de-fond/";}
	else if ($sport=="Squash récréatif") {$MET=7;$lien="depenses-caloriques-consommees-pour-le-squash/";}
	else if ($sport=="Squash compétition") {$MET=11;$lien="depenses-caloriques-consommees-pour-le-squash/";}
	else if ($sport=="Step modéré") {$MET=7;$lien="depenses-caloriques-consommees-pour-le-step/";}
	else if ($sport=="Step intense") {$MET=11;$lien="depenses-caloriques-consommees-pour-le-step/";}
	else if ($sport=="Surf") {$MET=3;$lien="depenses-caloriques-consommees-pour-le-surf/";}
	else if ($sport=="Taï-chi") {$MET=4;$lien="depenses-caloriques-consommees-pour-le-tai-chi-chuan/";}
	else if ($sport=="Tennis de table") {$MET=7;$lien="depenses-caloriques-consommees-pour-le-tennis-de-table-ping-pong/";}
	else if ($sport=="Tennis en simple") {$MET=7.5;$lien="depenses-caloriques-consommees-pour-le-tennis/";}
	else if ($sport=="Tennis en double") {$MET=6;$lien="depenses-caloriques-consommees-pour-le-tennis/";}
	else if ($sport=="Volley-ball récréatif") {$MET=3;$lien="depenses-caloriques-consommees-pour-le-volley-ball/";}
	else if ($sport=="Volley-ball compétition") {$MET=4.5;$lien="depenses-caloriques-consommees-pour-le-volley-ball/";}
	else if ($sport=="VTT Vélo Tout Terrain") {$MET=9;$lien="depenses-caloriques-consommees-pour-le-vtt-velo-tout-terrain/";}
	else if ($sport=="Water Polo") {$MET=10;$lien="depenses-caloriques-consommees-pour-le-water-polo/";}
	else if ($sport=="Yoga") {$MET=3;$lien="depenses-caloriques-consommees-pour-le-yoga/";}
	else if ($sport=="Zumba") {$MET=8;$lien="depenses-caloriques-consommees-pour-la-zumba/";}
	

	$CE =($temps*$MET*3.5*$poids/200);
	$CE = round($CE,0);
	$lien = "/comment-maigrir-conseils-solutions-trucs-et-astuces/calcul-des-depenses-energetiques-en-calories-par-sports-et-activites/".$lien;

	$codehtml .= <<<EOT
<div class="bloc_calc2">
  <center><span class="police-resultat">Résultat: une séance de $temps mn pour une personne de $poids kg, brûle</span></center> <center> <div class="circle">  <center> <br><span class="result14">$CE</span><br><span class="result14p">Kcal</span></div> </center>
  <center><span class="police-resultat">En savoir plus sur ce sport, voir <a href="$lien">$sport</a> !</span></center><br>
</div>
EOT;
}
return $codehtml;
}
add_shortcode( 'calculettesportmet', 'calculette_sportmet' );



//Nouvelle calculette des depenses par activité  non sportive avec analyse
function calculette_act_depense_nonsportive($atts) {
extract( shortcode_atts( array(
      'url'     => '',
	  'sport'     => '',
   ), $atts, 'calculetteactdepnonsportive' ) );
   
  
   $sexe=$_POST['sexe'];   
   $age=$_POST['age'];
   $taille=$_POST['taille'];
	$taille = preg_replace('*,*','.',$taille);
   $poids=$_POST['poids'];
	$poids = preg_replace('*,*','.',$poids);
   $act=$_POST['act'];
if ($sexe==1) {$hek1="checked ";}
else {$hek2="checked ";}

$obj=$_POST['obj'];
	$obj = preg_replace('*,*','.',$obj);
	
	if (isset($_POST['sport'])) {$sport=$_POST['sport'];}
	else {$sport=$sport;} 
		
	$temps=$_POST['temps'];	
	
   $codehtml = <<<EOT
<div id="resultat1"> </div>
			<div class="ocm-titre1">Calculette des dépenses en calories par activit&eacute;</div>   
			<div class="ocm-bl1">

<form name="imcform" class="ocm-form" method="post" action="#besoin">

<div class="clear">
<em>En sélectionnant une activité cela vous permettra de connaître le nombre de calories que vous allez dépenser sur un temps donné.</em><br />&nbsp;<br />
<div class="ocm-col2"><span class="rosep">Votre activit&eacute;</span><br>
<select name="sport">
<option value="$sport">$sport</option>
<option value="Bricoler">Bricoler</option>
<option value="Cuisiner">Cuisiner</option>
<option value="Dormir">Dormir</option>
<option value="Faire l amour">Faire l amour</option>
<option value="Faire le ménage">Faire le ménage</option>
<option value="Jardiner">Jardiner</option>
<option value="Jouer avec les enfants">Jouer avec les enfants</option>
<option value="Monter les escaliers">Monter les escaliers</option>
<option value="Passer l aspirateur">Passer l aspirateur</option>
<option value="Porter des objets - de 10kg">Porter des objets - de 10kg</option>
<option value="Porter des objets + de 10kg">Porter des objets + de 10kg</option>

</select>
</div>
<div class="ocm-col2"><span class="rosep">Temps en minutes</span><br><input name="temps" class="ocm-input1" value="$temps" type="text"></div>
</div>
<span class="rosep">Vous êtes</span>
<ul class="ul_calc"> 
<li><input id="femme" name="sexe" value="2" type="radio" $hek2/><label for="femme">Une femme</label></li> 
<li><input id="homme" name="sexe" value="1" type="radio" $hek1/><label for="homme">Un homme</label></li></ul>
<div class="clear">
<div class="ocm-col3"><span class="rosep">Votre âge</span><br><input name="age" class="ocm-input1" value="$age" type="text"></div>
<div class="ocm-col3"><span class="rosep">Votre taille (cm)</span><br><input name="taille" class="ocm-input1" value="$taille" type="text"></div>
<div class="ocm-col3"><span class="rosep">Votre poids (KG)</span><br><input name="poids" class="ocm-input1" value="$poids" type="text"></div>
</div><div id="besoin" class="centrage">
<input name="valider" value="CALCULER" type="submit">
</div>  
</form>
<div class="clear-zero">&nbsp;</div>
</div>
EOT;
if (isset($_POST['valider'])) {
	if ($sport=="Bricoler") {$MET=3;$lien="";} 
	else if ($sport=="Cuisiner") {$MET=2;$lien="";}
	else if ($sport=="Dormir") {$MET=0.9;$lien="";}
	else if ($sport=="Faire l amour") {$MET=3;$lien="sexe-calories-depensees-en-faisant-l-amour/";}
	else if ($sport=="Faire le ménage") {$MET=4;$lien="nombre-de-calories-depensees-en-faisant-le-menage/";}
	else if ($sport=="Jardiner") {$MET=5;$lien="";}	
	else if ($sport=="Jouer avec les enfants") {$MET=5;$lien="";}
	else if ($sport=="Monter les escaliers") {$MET=8;$lien="";}
	else if ($sport=="Passer l aspirateur") {$MET=6;$lien="";}
	else if ($sport=="Porter des objets - de 10kg") {$MET=7;$lien="";}
	else if ($sport=="Porter des objets + de 10kg") {$MET=8;$lien="";}
	

	$CE =($temps*$MET*3.5*$poids/200);
	$CE = round($CE,0);
	$lien = "/comment-maigrir-conseils-solutions-trucs-et-astuces/calcul-des-depenses-energetiques-en-calories-par-sports-et-activites/".$lien;



   $codehtml .= <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/titre-besoin.png">
</div>
<div class="ocm-bl6">
<div class="clear-zero">&nbsp;</div>
<div class="clear">
  <div class="ocm-bl4">Résultat de vos dépenses<br /><br /><span>Une séance de $temps mn d'une personne de $poids kg pour l'activité "<a href="$lien">$sport</a>" brûle:<span><br />&nbsp;</div>
  <div class="ocm-circle"><br><span class="ocm-result14">$CE</span><br><span class="ocm-result14p">Kcal</span></div>
</div>
<div class="clear-zero">&nbsp;</div>
</div>
<div class="ocm-bl1">
Vous souhaitez maigrir en faisant du sport?<br />Poursuivez l'analyse!
<form name="anaform" class="ocm-form" method="post" action="#analyse">
<div id="analyse" class="clear">
<div class="centrage"><span class="rosep">Quel est votre objectif de poids (en KG)</span><br><input name="obj" class="ocm-input1" value="$obj" type="text"></div></div>
<div class="clear">
<input type="hidden" name="sexe" value="$sexe" />
<input type="hidden" name="age" value="$age" />
<input type="hidden" name="taille" value="$taille" />
<input type="hidden" name="poids" value="$poids" />
<input type="hidden" name="sport" value="$sport" />
<input type="hidden" name="temps" value="$temps" />
<input type="hidden" name="valider" value="CALCULER" />
<div class="centrage">&nbsp;<br><input name="valider2" value="ANALYSER" type="submit"></div>
</form>
<div class="clear-zero">&nbsp;</div>
</div></div>
EOT;
}

if (isset($_POST['valider2'])) {
 $IMC=($poids/(($taille/100)*($taille/100)));
   $IMC=round($IMC,1);
      if ($IMC<18.5) {
   $STATUT= "maigreur";
   $IMAGE="imc-statut-maigreur.png";
   }
   else if ($IMC<25) {
   $STATUT= "corpulence normale";
   $IMAGE="imc-statut-normal.png";
   }
   else if ($IMC<30) {
   $STATUT= "surpoids";
   $IMAGE="imc-statut-suroids.png";
   } 
   else {
   $STATUT= "obèsité";
   $IMAGE="imc-statut-obesite.png";
   }
   
      if ($sexe=="2") {$PIL=($taille-100-(($taille-150)/2.5));}
   else if ($sexe=="1") {$PIL=($taille-100-(($taille-150)/4));}
$PIL=round($PIL,1);
   
   $pmaa = (($obj+$PIL)/2);
   $kap = ($poids-$pmaa);
   $vakap = abs($kap);
   
       if ($kap>0) {$textp="Poids moyen à perdre";}
   else if ($kap<0) {$textp="Poids moyen à gagner";}
   else {$textp="Vous êtes à l'équilibre";} 
   
       if ($kap<0.1) {$texto1="Vous n'avez pas de poids à perdre. Félicitations.";
   $lienb="<div class=\"ocm-liena\"><a href=\"/categorie-produit/coffret-minceur-box-de-regime/\">VOIR TOUS NOS PROGRAMMES</a></div>";	   
	   }
   else if ($kap<1) {$texto1="Vous êtes presque à votre poids d'équilibre. Vous pouvez perdre ce léger superflus en découvrant notre programme.";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-s-a-3-kg-14-jours/\">VOIR MON PROGRAMME</a></div>";
   }	   
   else if ($kap<3) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">2  semaines!</span>";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-s-a-3-kg-14-jours/\">VOIR MON PROGRAMME</a></div>";
   }
   else if ($kap<6) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">4  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-m-3-a-6-kg-28-jours/\">VOIR MON PROGRAMME</a></div>";}
   else if ($kap<9) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">6  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-l-6-a-9-kg-42-jours/\">VOIR MON PROGRAMME</a></div>";}
   else if ($kap<12) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">10  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xl-9-a-12-kg-56-jours/\">VOIR MON PROGRAMME</a></div>";}
    else if ($kap<15) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">10  semaines!</span>";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xxl-12-a-15-kg-70-jours/\">VOIR MON PROGRAMME</a></div>";}
   else {$texto1="En étant raisonnable vous pouvez vous fixer un objectif d'environ <span class=\"rosep\">15 kg</span> et l'atteindre au bout de <span class=\"rosep\">10 semaines!</span>";
     $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xxl-12-a-15-kg-70-jours/\">VOIR MON PROGRAMME</a></div>";} 
   
   $codehtml .= <<<EOT
<div class="ocm-noir"><img src="/wp-content/uploads/titre-analyse.png">
</div>
<div class="ocm-bl3">
<div class="ocm-blancg">Votre Indice de Masse Corporelle</div>
<p>IMC = <span class="rosegrasspan">$IMC</span><br />
Statut = <span class="rosegrasspan">$STATUT</span></p>
 <img class="aligncenter" src="/wp-content/uploads/$IMAGE"> 
<div class="ocm-blancg">Vos indicateurs de poids</div>
 <p>
  Votre poids actuel = <span class="rosegrasspan">$poids</span> kg<br />
 Poids idéal (formule de Lorentz) = <span class="rosegrasspan">$PIL</span> kg<br />
Objectif personnel = <span class="rosegrasspan">$obj</span> kg
</p>
<div class="float50">
  <div class="ocm-bl4">Poids moyen à atteindre</div>
  <div class="ocm-circle"><br><span class="ocm-res14r">$pmaa</span><br><span class="result14p">Kg</span></div>
</div>
<div class="float50">
    <div class="ocm-bl4">$textp</div>
	<div class="ocm-circle"><br><span class="ocm-res14r">$vakap</span><br><span class="result14p">Kg</span></div>
</div>
<div class="clear-zero">&nbsp;</div>
</div>
<div class="ocm-noir">
<img src="/wp-content/uploads/titre-solution.png">
</div>
<div class="ocm-bl1">
<div class="clear">
<div class="centrage"><span class="rosep">Quel objectif et comment le concrétiser?</span></div>
</div>
$texto1
<div class="clear-zero">&nbsp;</div>
$lienb
<img src="/wp-content/uploads/ligne-objectif-final.png">
</div>
EOT;
}

   $codehtml .= <<<EOT
<div class="clear-zero">&nbsp;</div>
EOT;


return $codehtml;
}
add_shortcode( 'calculetteactdepnonsportive', 'calculette_act_depense_nonsportive' );




//Calculette maigrir selon le nombre de pas


function calculette_npas_maigrir($atts) {
extract( shortcode_atts( array(
      'url'     => '',
	  'sport'     => '',
   ), $atts, 'calculettenpasmaigrir' ) );
   
  
   $sexe=$_POST['sexe'];   
   $age=$_POST['age'];
   $taille=$_POST['taille'];
	$taille = preg_replace('*,*','.',$taille);
   $poids=$_POST['poids'];
	$poids = preg_replace('*,*','.',$poids);
   $act=$_POST['act'];
if ($sexe==1) {$hek1="checked ";}
else {$hek2="checked ";}

$obj=$_POST['obj'];
	$obj = preg_replace('*,*','.',$obj);
	
	if (isset($_POST['sport'])) {$sport=$_POST['sport'];}
	else {$sport=$sport;} 
		
	$temps=$_POST['temps'];	
	
   $codehtml = <<<EOT
<div id="resultat1"> </div>
			<div class="ocm-titre1"><h3 class="police-blanche">Calculette : Impact de l'augmentation des pas par jour sur la perte de poids.</h3>
			<h4 class="police-blanche">" Estimation de perte de poids par semaine, par mois et par an ! "</h4></div>   
			<div class="ocm-bl1">

<form name="imcform" class="ocm-form" method="post" action="#besoin">

<div class="clear">
<em>Sélectionner votre objectif. par exemple : Je passe de 8000 à 10 000 pas = J'augmente de 2000 pas.</em><br />&nbsp;<br />
<div class="ocm-col2"><span class="rosep">Par jour, j'augmente de :</span><br>
<select name="sport">
<option value="$sport">$sport</option>
<option value="1000 pas">1000 pas</option>
<option value="2000 pas">2000 pas</option>
<option value="3000 pas">3000 pas</option>
<option value="4000 pas">4000 pas</option>
<option value="5000 pas">5000 pas</option>
<option value="6000 pas">6000 pas</option>
<option value="7000 pas">7000 pas</option>
<option value="8000 pas">8000 pas</option>
<option value="9000 pas">9000 pas</option>
<option value="10 000 pas">10 000 pas</option>
<option value="11 000 pas">11 000 pas</option>
<option value="12 000 pas">12 000 pas</option>
<option value="13 000 pas">13 000 pas</option>
<option value="14 000 pas">14 000 pas</option>
<option value="15 000 pas">15 000 pas</option>
<option value="16 000 pas">16 000 pas</option>
<option value="17 000 pas">17 000 pas</option>
<option value="18 000 pas">18 000 pas</option>
<option value="19 000 pas">19 000 pas</option>
<option value="20 000 pas">20 000 pas</option>
<option value="25 000 pas">25 000 pas</option>
<option value="30 000 pas">30 000 pas</option>
<option value="35 000 pas">35 000 pas</option>
<option value="40 000 pas">40 000 pas</option>
</select>
</div>

</div>
<span class="rosep">Vous êtes</span>
<ul class="ul_calc"> 
<li><input id="femme" name="sexe" value="2" type="radio" $hek2/><label for="femme">Une femme</label></li> 
<li><input id="homme" name="sexe" value="1" type="radio" $hek1/><label for="homme">Un homme</label></li></ul>
<div class="clear">
<div class="ocm-col3"><span class="rosep">Votre âge</span><br><input name="age" class="ocm-input1" value="$age" type="text"></div>
<div class="ocm-col3"><span class="rosep">Votre taille (cm)</span><br><input name="taille" class="ocm-input1" value="$taille" type="text"></div>
<div class="ocm-col3"><span class="rosep">Votre poids (KG)</span><br><input name="poids" class="ocm-input1" value="$poids" type="text"></div>
</div><div id="besoin" class="centrage">
<input name="valider" value="CALCULER" type="submit">
</div>  
</form>
<div class="clear-zero">&nbsp;</div>
</div>
EOT;
if (isset($_POST['valider'])) {


if ($sport=="1000 pas") {$temps=9;$lien="";} 
	else if ($sport=="2000 pas") {$temps=18;$lien="";}
	else if ($sport=="3000 pas") {$temps=27;$lien="";}
	else if ($sport=="4000 pas") {$temps=36;$lien="";}
	else if ($sport=="5000 pas") {$temps=45;$lien="";}
	else if ($sport=="6000 pas") {$temps=54;$lien="";}	
	else if ($sport=="7000 pas") {$temps=63;$lien="";}
	else if ($sport=="8000 pas") {$temps=72;$lien="";}
	else if ($sport=="9000 pas") {$temps=81;$lien="";}
	else if ($sport=="10 000 pas") {$temps=90;$lien="";}
	else if ($sport=="11 000 pas") {$temps=99;$lien="";}
	else if ($sport=="12 000 pas") {$temps=108;$lien="";}
	else if ($sport=="13 000 pas") {$temps=117;$lien="";}
	else if ($sport=="14 000 pas") {$temps=126;$lien="";}
	else if ($sport=="15 000 pas") {$temps=135;$lien="";}
	else if ($sport=="16 000 pas") {$temps=144;$lien="";}
	else if ($sport=="17 000 pas") {$temps=153;$lien="";}
	else if ($sport=="18 000 pas") {$temps=162;$lien="";}
	else if ($sport=="19 000 pas") {$temps=171;$lien="";}
	else if ($sport=="20 000 pas") {$temps=180;$lien="";}
	else if ($sport=="25 000 pas") {$temps=225;$lien="";}
	else if ($sport=="30 000 pas") {$temps=270;$lien="";}
	else if ($sport=="35 000 pas") {$temps=315;$lien="";}
	else if ($sport=="40 000 pas") {$temps=360;$lien="";}

	$CE =($temps*3*3.5*$poids/200);
	$CE = round($CE,0);
	$lien = "/comment-maigrir-conseils-solutions-trucs-et-astuces/calcul-des-depenses-energetiques-en-calories-par-sports-et-activites/".$lien;
    $DE1 =($temps*3*3.5*$poids/200/7700*1);
	$DE1 = round($DE1,2);
	$DE2 =($temps*3*3.5*$poids/200/7700*7);
	$DE2 = round($DE2,2);
	$DE3 =($temps*3*3.5*$poids/200/7700*30);
	$DE3 = round($DE3,2);
	$DE4 =($temps*3*3.5*$poids/200/7700*365);
	$DE4 = round($DE4,2);

   $codehtml .= <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/titre-sport-calcul.png">
</div>
<div class="fond-outil-sport-maigrir">
<div class="clear-zero">&nbsp;</div>
<div class="clear">
 <img class="aligncenter" src="/wp-content/uploads/ligne-outil.png"/>
  <div class="ocm-noir"><h3 class="police-blanche">Impact sur vos dépenses par jour</h3></div>
  <img class="aligncenter" src="/wp-content/uploads/ligne-outil.png"/>
  <span class="police-blanche">En augmentant votre activité de <span class="rosep">$sport</span> par jour (<span class="rosep">$temps</span> mn de marche) brûle :<br><span><span class="ocm-result14">$CE</span><span class="ocm-result14p"> Kcal/jour</span><br />&nbsp;
 
   
    <div class="ocm-noir"><h3 class="police-blanche">Estimation de perte de poids par J/S/M/A !</h3></div>
  <img class="aligncenter" src="/wp-content/uploads/ligne-outil.png"/>
   <div class="clear"></div>
  <div class="landing-home-4"><img class="aligncenter size-full wp-image-27061"  src="https://www.regivia.com/wp-content/uploads/etape-11.png"  width="22" height="22"><span class="sport-maigrir-resultat-blanc">Perte quotidienne<br /></span><span class="sport-maigrir-resultat-gros">≈<br />-$DE1</span><span class="sport-maigrir-resultat-blanc"> kg<br />par jour</span></div>
  <div class="landing-separation-home"><img class="alignnone size-full wp-image-27378" src="https://www.regivia.com/wp-content/uploads/separation3.png" alt="separation3" width="216" height="30"></div>
  <div class="landing-home-4"><img class="aligncenter size-full wp-image-27061"  src="https://www.regivia.com/wp-content/uploads/etape-11.png"  width="22" height="22"><span class="sport-maigrir-resultat-blanc">Perte hebdomadaire<br /></span><span class="sport-maigrir-resultat-gros">≈<br />-$DE2</span><span class="sport-maigrir-resultat-blanc"> kg<br />par semaine</span></div>
  <div class="landing-separation-home"><img class="alignnone size-full wp-image-27378" src="https://www.regivia.com/wp-content/uploads/separation3.png" alt="separation3" width="216" height="30"></div>
  <div class="landing-home-4"><img class="aligncenter size-full wp-image-27061"  src="https://www.regivia.com/wp-content/uploads/etape-11.png"  width="22" height="22"><span class="sport-maigrir-resultat-blanc">Perte mensuelle<br /></span><span class="sport-maigrir-resultat-gros">≈<br />-$DE3</span><span class="sport-maigrir-resultat-blanc"> kg<br />par mois</span></div>
  <div class="landing-separation-home"><img class="alignnone size-full wp-image-27378" src="https://www.regivia.com/wp-content/uploads/separation3.png" alt="separation3" width="216" height="30"></div>
  <div class="landing-home-4"><img class="aligncenter size-full wp-image-27061"  src="https://www.regivia.com/wp-content/uploads/etape-11.png"  width="22" height="22"><span class="sport-maigrir-resultat-blanc">Perte annuelle<br /></span><span class="sport-maigrir-resultat-gros">≈<br />-$DE4</span><span class="sport-maigrir-resultat-blanc"> kg<br />par an</span></div>
  <div class="clear"></div>
  
  
  <br />&nbsp;</div>
 
  
</div>
<div class="clear-zero">&nbsp;</div>
</div>
<div class="ocm-bl1">
<br />

<span class="outil-action-rose">V</span><span class="outil-action-noir">ous souhaitez maigrir ? Poursuivez l'analyse !</span><br /><br />
<form name="anaform" class="ocm-form" method="post" action="#analyse">
<div id="analyse" class="clear">
<div class="centrage"><span class="rosep">Quel est votre objectif de poids (en KG)</span><br><input name="obj" class="ocm-input1" value="$obj" type="text"></div></div>
<div class="clear">
<input type="hidden" name="sexe" value="$sexe" />
<input type="hidden" name="age" value="$age" />
<input type="hidden" name="taille" value="$taille" />
<input type="hidden" name="poids" value="$poids" />
<input type="hidden" name="sport" value="$sport" />
<input type="hidden" name="temps" value="$temps" />
<input type="hidden" name="valider" value="CALCULER" />
<div class="centrage">&nbsp;<br><input name="valider2" value="ANALYSER" type="submit"></div>
</form>
<div class="clear-zero">&nbsp;</div>
</div></div>
EOT;
}

if (isset($_POST['valider2'])) {
 $IMC=($poids/(($taille/100)*($taille/100)));
   $IMC=round($IMC,1);
      if ($IMC<18.5) {
   $STATUT= "maigreur";
   $IMAGE="imc-statut-maigreur.png";
   }
   else if ($IMC<25) {
   $STATUT= "corpulence normale";
   $IMAGE="imc-statut-normal.png";
   }
   else if ($IMC<30) {
   $STATUT= "surpoids";
   $IMAGE="imc-statut-suroids.png";
   } 
   else {
   $STATUT= "obèsité";
   $IMAGE="imc-statut-obesite.png";
   }
   
      if ($sexe=="2") {$PIL=($taille-100-(($taille-150)/2.5));}
   else if ($sexe=="1") {$PIL=($taille-100-(($taille-150)/4));}
$PIL=round($PIL,1);
   
   $pmaa = (($obj+$PIL)/2);
   $kap = ($poids-$pmaa);
   $vakap = abs($kap);
   
       if ($kap>0) {$textp="Poids moyen à perdre";}
   else if ($kap<0) {$textp="Poids moyen à gagner";}
   else {$textp="Vous êtes à l'équilibre";} 
   
       if ($kap<0.1) {$texto1="Vous n'avez pas de poids à perdre. Félicitations.";
   $lienb="<div class=\"ocm-liena\"><a href=\"/categorie-produit/coffret-minceur-box-de-regime/\">VOIR TOUS NOS PROGRAMMES</a></div>";	   
	   }
   else if ($kap<1) {$texto1="Vous êtes presque à votre poids d'équilibre. Vous pouvez perdre ce léger superflus en découvrant notre programme.";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-s-a-3-kg-14-jours/\">VOIR MON PROGRAMME</a></div>";
   }	   
   else if ($kap<3) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">2  semaines!</span>";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-s-a-3-kg-14-jours/\">VOIR MON PROGRAMME</a></div>";
   }
   else if ($kap<6) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">4  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-m-3-a-6-kg-28-jours/\">VOIR MON PROGRAMME</a></div>";}
   else if ($kap<9) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">6  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-l-6-a-9-kg-42-jours/\">VOIR MON PROGRAMME</a></div>";}
   else if ($kap<12) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">10  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xl-9-a-12-kg-56-jours/\">VOIR MON PROGRAMME</a></div>";}
    else if ($kap<15) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">10  semaines!</span>";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xxl-12-a-15-kg-70-jours/\">VOIR MON PROGRAMME</a></div>";}
   else {$texto1="En étant raisonnable vous pouvez vous fixer un objectif d'environ <span class=\"rosep\">15 kg</span> et l'atteindre au bout de <span class=\"rosep\">10 semaines!</span>";
     $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xxl-12-a-15-kg-70-jours/\">VOIR MON PROGRAMME</a></div>";} 
   
   $codehtml .= <<<EOT
<div class="ocm-noir"><img src="/wp-content/uploads/titre-sport-analyse.png">
</div>
<div class="ocm-bl3">
<div class="ocm-blancg">Votre Indice de Masse Corporelle</div>
<p>IMC = <span class="rosegrasspan">$IMC</span><br />
Statut = <span class="rosegrasspan">$STATUT</span></p>
 <img class="aligncenter" src="/wp-content/uploads/$IMAGE"> 
<div class="ocm-blancg">Vos indicateurs de poids</div>
 <p>
  Votre poids actuel = <span class="rosegrasspan">$poids</span> kg<br />
 Poids idéal (formule de Lorentz) = <span class="rosegrasspan">$PIL</span> kg<br />
Objectif personnel = <span class="rosegrasspan">$obj</span> kg
</p>
<div class="float50">
  <div class="ocm-bl4">Poids moyen à atteindre</div>
  <div class="ocm-circle"><br><span class="ocm-res14r">$pmaa</span><br><span class="result14p">Kg</span></div>
</div>
<div class="float50">
    <div class="ocm-bl4">$textp</div>
	<div class="ocm-circle"><br><span class="ocm-res14r">$vakap</span><br><span class="result14p">Kg</span></div>
</div>
<div class="clear-zero">&nbsp;</div>
</div>
<div class="ocm-noir">
<img src="/wp-content/uploads/titre-sport-solution.png">
</div>
<div class="ocm-bl1">
<div class="clear">
<div class="centrage"><span class="rosep">Quel objectif et comment le concrétiser?</span></div>
</div>
$texto1
<div class="clear-zero">&nbsp;</div>
$lienb
<img src="/wp-content/uploads/ligne-objectif-final.png">
</div>
EOT;
}

   $codehtml .= <<<EOT
<div class="clear-zero">&nbsp;</div>
EOT;


return $codehtml;
}
add_shortcode( 'calculettenpasmaigrir', 'calculette_npas_maigrir' );







//Nouvelle calculette des depenses par nombre de pas
function calculette_depense_pas($atts) {
extract( shortcode_atts( array(
      'url'     => '',
	  'sport'     => '',
   ), $atts, 'calculettedepas' ) );
   
  
   $sexe=$_POST['sexe'];   
   $age=$_POST['age'];
   $taille=$_POST['taille'];
	$taille = preg_replace('*,*','.',$taille);
   $poids=$_POST['poids'];
	$poids = preg_replace('*,*','.',$poids);
   $act=$_POST['act'];
if ($sexe==1) {$hek1="checked ";}
else {$hek2="checked ";}

$obj=$_POST['obj'];
	$obj = preg_replace('*,*','.',$obj);
	
	if (isset($_POST['sport'])) {$sport=$_POST['sport'];}
	else {$sport=$sport;} ;	
	
   $codehtml = <<<EOT
<div id="resultat1"> </div>
			<div class="ocm-titre1">Calculette des calories dépensées par nombre de pas</div>   
			<div class="ocm-bl1">

<form name="imcform" class="ocm-form" method="post" action="#besoin">

<div class="clear">
<em>Remplir son profil et sélectionner le nombre de pas pour voir votre dépense et combien de temps pour le réaliser !</em><br />&nbsp;<br />
<div class="ocm-col2"><span class="rosep">Nombre de pas</span><br>
<select name="sport">
<option value="$sport">$sport</option>
<option value="1000 pas">1000 pas</option>
<option value="2000 pas">2000 pas</option>
<option value="3000 pas">3000 pas</option>
<option value="4000 pas">4000 pas</option>
<option value="5000 pas">5000 pas</option>
<option value="6000 pas">6000 pas</option>
<option value="7000 pas">7000 pas</option>
<option value="8000 pas">8000 pas</option>
<option value="9000 pas">9000 pas</option>
<option value="10 000 pas">10 000 pas</option>
<option value="11 000 pas">11 000 pas</option>
<option value="12 000 pas">12 000 pas</option>
<option value="13 000 pas">13 000 pas</option>
<option value="14 000 pas">14 000 pas</option>
<option value="15 000 pas">15 000 pas</option>
<option value="16 000 pas">16 000 pas</option>
<option value="17 000 pas">17 000 pas</option>
<option value="18 000 pas">18 000 pas</option>
<option value="19 000 pas">19 000 pas</option>
<option value="20 000 pas">20 000 pas</option>
<option value="25 000 pas">25 000 pas</option>
<option value="30 000 pas">30 000 pas</option>
<option value="35 000 pas">35 000 pas</option>
<option value="40 000 pas">40 000 pas</option>
<option value="45 000 pas">45 000 pas</option>
<option value="50 000 pas">50 000 pas</option>


</select>
</div>

</div>
<span class="rosep">Vous êtes</span>
<ul class="ul_calc"> 
<li><input id="femme" name="sexe" value="2" type="radio" $hek2/><label for="femme">Une femme</label></li> 
<li><input id="homme" name="sexe" value="1" type="radio" $hek1/><label for="homme">Un homme</label></li></ul>
<div class="clear">
<div class="ocm-col3"><span class="rosep">Votre âge</span><br><input name="age" class="ocm-input1" value="$age" type="text"></div>
<div class="ocm-col3"><span class="rosep">Votre taille (cm)</span><br><input name="taille" class="ocm-input1" value="$taille" type="text"></div>
<div class="ocm-col3"><span class="rosep">Votre poids (KG)</span><br><input name="poids" class="ocm-input1" value="$poids" type="text"></div>
</div><div id="besoin" class="centrage">
<input name="valider" value="CALCULER" type="submit">
</div>  
</form>
<div class="clear-zero">&nbsp;</div>
</div>
EOT;
if (isset($_POST['valider'])) {
	if ($sport=="1000 pas") {$temps=9;$lien="";} 
	else if ($sport=="2000 pas") {$temps=18;$lien="";}
	else if ($sport=="3000 pas") {$temps=27;$lien="";}
	else if ($sport=="4000 pas") {$temps=36;$lien="";}
	else if ($sport=="5000 pas") {$temps=45;$lien="";}
	else if ($sport=="6000 pas") {$temps=54;$lien="";}	
	else if ($sport=="7000 pas") {$temps=63;$lien="";}
	else if ($sport=="8000 pas") {$temps=72;$lien="";}
	else if ($sport=="9000 pas") {$temps=81;$lien="";}
	else if ($sport=="10 000 pas") {$temps=90;$lien="";}
	else if ($sport=="11 000 pas") {$temps=99;$lien="";}
	else if ($sport=="12 000 pas") {$temps=108;$lien="";}
	else if ($sport=="13 000 pas") {$temps=117;$lien="";}
	else if ($sport=="14 000 pas") {$temps=126;$lien="";}
	else if ($sport=="15 000 pas") {$temps=135;$lien="";}
	else if ($sport=="16 000 pas") {$temps=144;$lien="";}
	else if ($sport=="17 000 pas") {$temps=153;$lien="";}
	else if ($sport=="18 000 pas") {$temps=162;$lien="";}
	else if ($sport=="19 000 pas") {$temps=171;$lien="";}
	else if ($sport=="20 000 pas") {$temps=180;$lien="";}
	else if ($sport=="25 000 pas") {$temps=225;$lien="";}
	else if ($sport=="30 000 pas") {$temps=270;$lien="";}
	else if ($sport=="35 000 pas") {$temps=315;$lien="";}
	else if ($sport=="40 000 pas") {$temps=360;$lien="";}
	else if ($sport=="45 000 pas") {$temps=405;$lien="";}
	else if ($sport=="50 000 pas") {$temps=450;$lien="";}
			
	
	

	$CE =($temps*3*3.5*$poids/200);
	$CE = round($CE,0);
	$lien = "/comment-maigrir-conseils-solutions-trucs-et-astuces/calcul-des-depenses-energetiques-en-calories-par-sports-et-activites/".$lien;



   $codehtml .= <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/titre-besoin.png">
</div>
<div class="ocm-bl6">
<div class="clear-zero">&nbsp;</div>
<div class="clear">
  <div class="ocm-bl4">Résultat de vos dépenses<br /><br /><span>Une séance de <span class="rosep">$sport</span> dure environ <span class="rosep">$temps</span> mn et permet &agrave; une personne de <span class="rosep">$poids</span> kg de brûler :<span><br />&nbsp;</div>
  <div class="ocm-circle"><br><span class="ocm-result14">$CE</span><br><span class="ocm-result14p">Kcal</span></div>
</div>
<div class="clear-zero">&nbsp;</div>
</div>
<div class="ocm-bl1">
Vous souhaitez connaître votre poids idéal ?<br />Poursuivez l'analyse!
<form name="anaform" class="ocm-form" method="post" action="#analyse">
<div id="analyse" class="clear">
<div class="centrage"><span class="rosep">Quel est votre objectif de poids (en KG)</span><br><input name="obj" class="ocm-input1" value="$obj" type="text"></div></div>
<div class="clear">
<input type="hidden" name="sexe" value="$sexe" />
<input type="hidden" name="age" value="$age" />
<input type="hidden" name="taille" value="$taille" />
<input type="hidden" name="poids" value="$poids" />
<input type="hidden" name="sport" value="$sport" />
<input type="hidden" name="temps" value="$temps" />
<input type="hidden" name="valider" value="CALCULER" />
<div class="centrage">&nbsp;<br><input name="valider2" value="ANALYSER" type="submit"></div>
</form>
<div class="clear-zero">&nbsp;</div>
</div></div>
EOT;
}

if (isset($_POST['valider2'])) {
 $IMC=($poids/(($taille/100)*($taille/100)));
   $IMC=round($IMC,1);
      if ($IMC<18.5) {
   $STATUT= "maigreur";
   $IMAGE="imc-statut-maigreur.png";
   }
   else if ($IMC<25) {
   $STATUT= "corpulence normale";
   $IMAGE="imc-statut-normal.png";
   }
   else if ($IMC<30) {
   $STATUT= "surpoids";
   $IMAGE="imc-statut-suroids.png";
   } 
   else {
   $STATUT= "obèsité";
   $IMAGE="imc-statut-obesite.png";
   }
   
      if ($sexe=="2") {$PIL=($taille-100-(($taille-150)/2.5));}
   else if ($sexe=="1") {$PIL=($taille-100-(($taille-150)/4));}
$PIL=round($PIL,1);
   
   $pmaa = (($obj+$PIL)/2);
   $kap = ($poids-$pmaa);
   $vakap = abs($kap);
   
       if ($kap>0) {$textp="Poids moyen à perdre";}
   else if ($kap<0) {$textp="Poids moyen à gagner";}
   else {$textp="Vous êtes à l'équilibre";} 
   
       if ($kap<0.1) {$texto1="Vous n'avez pas de poids à perdre. Félicitations.";
   $lienb="<div class=\"ocm-liena\"><a href=\"/categorie-produit/coffret-minceur-box-de-regime/\">VOIR TOUS NOS PROGRAMMES</a></div>";	   
	   }
   else if ($kap<1) {$texto1="Vous êtes presque à votre poids d'équilibre. Vous pouvez perdre ce léger superflus en découvrant notre programme.";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-s-a-3-kg-14-jours/\">VOIR MON PROGRAMME</a></div>";
   }	   
   else if ($kap<3) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">2  semaines!</span>";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-s-a-3-kg-14-jours/\">VOIR MON PROGRAMME</a></div>";
   }
   else if ($kap<6) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">4  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-m-3-a-6-kg-28-jours/\">VOIR MON PROGRAMME</a></div>";}
   else if ($kap<9) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">6  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-l-6-a-9-kg-42-jours/\">VOIR MON PROGRAMME</a></div>";}
   else if ($kap<12) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">10  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xl-9-a-12-kg-56-jours/\">VOIR MON PROGRAMME</a></div>";}
    else if ($kap<15) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">10  semaines!</span>";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xxl-12-a-15-kg-70-jours/\">VOIR MON PROGRAMME</a></div>";}
   else {$texto1="En étant raisonnable vous pouvez vous fixer un objectif d'environ <span class=\"rosep\">15 kg</span> et l'atteindre au bout de <span class=\"rosep\">10 semaines!</span>";
     $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xxl-12-a-15-kg-70-jours/\">VOIR MON PROGRAMME</a></div>";} 
   
   $codehtml .= <<<EOT
<div class="ocm-noir"><img src="/wp-content/uploads/titre-analyse.png">
</div>
<div class="ocm-bl3">
<div class="ocm-blancg">Votre Indice de Masse Corporelle</div>
<p>IMC = <span class="rosegrasspan">$IMC</span><br />
Statut = <span class="rosegrasspan">$STATUT</span></p>
 <img class="aligncenter" src="/wp-content/uploads/$IMAGE"> 
<div class="ocm-blancg">Vos indicateurs de poids</div>
 <p>
  Votre poids actuel = <span class="rosegrasspan">$poids</span> kg<br />
 Poids idéal (formule de Lorentz) = <span class="rosegrasspan">$PIL</span> kg<br />
Objectif personnel = <span class="rosegrasspan">$obj</span> kg
</p>
<div class="float50">
  <div class="ocm-bl4">Poids moyen à atteindre</div>
  <div class="ocm-circle"><br><span class="ocm-res14r">$pmaa</span><br><span class="result14p">Kg</span></div>
</div>
<div class="float50">
    <div class="ocm-bl4">$textp</div>
	<div class="ocm-circle"><br><span class="ocm-res14r">$vakap</span><br><span class="result14p">Kg</span></div>
</div>
<div class="clear-zero">&nbsp;</div>
</div>
<div class="ocm-noir">
<img src="/wp-content/uploads/titre-solution.png">
</div>
<div class="ocm-bl1">
<div class="clear">
<div class="centrage"><span class="rosep">Quel objectif et comment le concrétiser?</span></div>
</div>
$texto1
<div class="clear-zero">&nbsp;</div>
$lienb
<img src="/wp-content/uploads/ligne-objectif-final.png">
</div>
EOT;
}

   $codehtml .= <<<EOT
<div class="clear-zero">&nbsp;</div>
EOT;


return $codehtml;
}
add_shortcode( 'calculettedepas', 'calculette_depense_pas' );





//Ancienne Calculette depenses en calorie par minute selon l activité non sportive

function calculette_activitehs($atts) {
extract( shortcode_atts( array(
      'url'     => '',
	  'activite'     => '',
   ), $atts, 'calculetteactivitehs' ) );
	
	if (isset($_POST['activite'])) {$activite=$_POST['activite'];}
	else {$activite=$activite;} 
		
	$temps=$_POST['temps'];
	$poids=$_POST['poids'];
	$poids = preg_replace('*,*','.',$poids);

$codehtml = <<<EOT
			<div class="titre_calc">Calculette des calories par activité du quotidien</div>   
			<div class="bloc_calc_1_4-activite">
			<div class="trans_calc_1_4">
			En sélectionnant une activité non sportive de votre choix, cette calculette RegiVia des dépenses énergétiques vous permettra de connaître selon votre poids, le nombre de calories que vous allez dépenser sur un temps donné.</br> </br>  
			</br> </br></br></br></br>
<form name="activitensform" class="form-type1" method="post" action="$url">

<div class="clear">
<div class="col_calc">
<span class="rosep">Votre activité</span><br>
<select name="activite">
<option value="$activite">$activite</option>
<option value="Bricoler">Bricoler</option>
<option value="Cuisiner">Cuisiner</option>
<option value="Dormir">Dormir</option>
<option value="Faire l amour">Faire l amour</option>
<option value="Faire le ménage">Faire le ménage</option>
<option value="Jardiner">Jardiner</option>
<option value="Jouer avec les enfants">Jouer avec les enfants</option>
<option value="Monter les escaliers">Monter les escaliers</option>
<option value="Passer l aspirateur">Passer l aspirateur</option>
<option value="Porter des objets - de 10kg">Porter des objets - de 10kg</option>
<option value="Porter des objets + de 10kg">Porter des objets + de 10kg</option>



</select>
</div>
<div class="col_calc">
<span class="rosep">Temps en minutes</span><br><input name="temps" class="input-t1" value="$temps" type="text">
</div>
</div>

<div class="clear">
<div class="col_calc"><span class="rosep">Votre poids (en KG)</span><br><input name="poids" class="input-t1" value="$poids" type="text"></div>
<div class="col_calc">&nbsp;<br><input name="valider" value="CALCULER" type="submit"></div> 
</div>
</form>
<div class="clear">&nbsp;</div>
</div>
</div>
EOT;
if (isset($_POST['valider'])) {
    if ($activite=="Bricoler") {$MET=3;$lien="";} 
	else if ($activite=="Cuisiner") {$MET=2;$lien="";}
	else if ($activite=="Dormir") {$MET=0.9;$lien="";}
	else if ($activite=="Faire l amour") {$MET=3;$lien="sexe-calories-depensees-en-faisant-l-amour/";}
	else if ($activite=="Faire le ménage") {$MET=4;$lien="nombre-de-calories-depensees-en-faisant-le-menage/";}
	else if ($activite=="Jardiner") {$MET=5;$lien="";}	
	else if ($activite=="Jouer avec les enfants") {$MET=5;$lien="";}
	else if ($activite=="Monter les escaliers") {$MET=8;$lien="";}
	else if ($activite=="Passer l aspirateur") {$MET=6;$lien="";}
	else if ($activite=="Porter des objets - de 10kg") {$MET=7;$lien="";}
	else if ($activite=="Porter des objets + de 10kg") {$MET=8;$lien="";}
	
	

	$CE =($temps*$MET*3.5*$poids/200);
	$CE = round($CE,0);
	$lien = "/comment-maigrir-conseils-solutions-trucs-et-astuces/calcul-des-depenses-energetiques-en-calories-par-sports-et-activites/".$lien;

	$codehtml .= <<<EOT
<div class="bloc_calc2">
  <center><span class="police-resultat">En savoir plus sur cete activité, voir <a href="$lien">$activite</a> ! <br>Résultat: une séance de $temps mn pour une personne de $poids kg, permet de brûler</span></center> <center> <div class="circle">  <center> <br><span class="result14">$CE</span><br><span class="result14p">Kcal</span></div> </center>
</div>
EOT;
}
return $codehtml;
}
add_shortcode( 'calculetteactivitehs', 'calculette_activitehs' );



//Calculette morphologie
function outils_morphoa($url) {
extract( shortcode_atts( array(
      'url'     => '',
   ), $url, 'outilsmorphoa' ) );
				$nature = $_POST['nature'];
   				$poit = $_POST['poit'];		
if ($nature==1) {$check1="checked ";}
				else if ($nature==2) {$check2="checked ";}
				else if ($nature==3) {$check3="checked ";}
				else if ($nature==4) {$check4="checked ";}
				else if ($nature==5) {$check5="checked ";}
if ($poit==8) {$check8="checked ";}
				else if ($poit==9) {$check9="checked ";}

if ($nature==1)
 {$morpho="A";
  	$texte = <<<EOT
<div class="bloc-morpho-blanc"><h3>VOTRE<span class="rosespan"> MORPHOLOGIE</span> EST EN <span class="rosespan">A </span></h3> </div>
<a href="/morphologie-et-silhouette-type-femme/en-a-pyramide-triangle-ou-poire/"><img src="/wp-content/uploads/conseils-morphologie-silhouette-en-a-ou-triangle-pyramide.gif" alt="Conseils silhouette et morphologie en A pyramide, triangle ou poire"  title="Conseils silhouette et morphologie en A pyramide, triangle ou poire" class="alignleft size-full wp-image-16575" height="181" width="64"></a><br />
Vous avez une morphologie en A que l’on nomme également silhouette en pyramide, triangle ou poire. Vous l’aurez compris, votre bassin est donc plus large que vos épaules.  <br/><br/>
Votre défi est donc de faire illusion avec des vêtements adaptés qui mettront en avant vos atouts et masqueront vos faiblesses. Mais savez-vous réellement habiller votre silhouette ? Connaissez-vous les exercices, les sports et les conseils minceur qui feront la différence sur votre look ? 
<br/><br/><p style="text-align: center;"><em>Besoin d’aide ? Alors suivez le guide ci-dessous !</em></p><br/><br/><div class="clear-zero">&nbsp;</div>
<div class="bloc-morpho-blanc"><h3>CONSEILS POUR LES<span class="rosespan"> A</span></h3> </div>
	<div class="d-morpho4"><a href="/morphologie-et-silhouette-type-femme/comment-s-habiller/quels-vetements-choisir-et-porter-quand-on-est-en-a-pyramide-triangle-ou-poire/">Quels vêtements porter?<br><img src="/wp-content/uploads/vetements-morphologie-8.gif" alt="Comment s'habiller et quels vêtements porter ?" title="Comment s'habiller et quels vêtements porter ?" height="150" width="150">
</a></div>
<div class="d-morpho4"><a href="/morphologie-et-silhouette-type-femme/quels-exercices-et-quels-sports-selon-sa-morphologie/quand-on-est-en-a-pyramide-triangle-ou-poire/">Quels sports &amp; exercices <br><img src="/wp-content/uploads/exercices-et-sports-morphologie-8.gif" alt="Quels exercices et quels sports ?" title="Quels exercices et quels sports ?" height="150" width="150">
</a></div>
<div class="d-morpho4"><a href="/morphologie-et-silhouette-type-femme/conseils-minceur-comment-maigrir-selon-sa-morphologie/quand-on-est-en-a-pyramide-triangle-ou-poire/">Quels conseils minceur?<br><img src="/wp-content/uploads/conseils-minceur-morphologie-8.gif" alt="Conseils minceur : Comment maigrir ?" title="Conseils minceur : Comment maigrir ?" height="150" width="150">
</a></div>
<div class="clear-zero">&nbsp;</div>
EOT;
}
else if ($nature==3)
 {$morpho="O";
  	$texte = <<<EOT
<div class="bloc-morpho-blanc"><h3>VOTRE<span class="rosespan"> MORPHOLOGIE</span> EST EN <span class="rosespan">O </span></h3> </div>
<a href="/morphologie-et-silhouette-type-femme/en-rond-o-ou-pomme/"><img src="/wp-content/uploads/conseils-morphologie-silhouette-en-o-ronde.gif" alt="Conseils silhouette et morphologie en O ronde ou pomme"  title="Conseils silhouette et morphologie en O ronde ou pomme" class="alignleft size-full wp-image-16575" height="181" width="64"></a><br />
Vous avez une morphologie en O que l’on nomme également  ronde ou silhouette en forme de pomme. Vous l’aurez compris, chez vous les lignes sont arrondies et ce n’est pas pour déplaire à la gente masculine qui contrairement à ce que vous pensez, aime les rondeurs généreuses.  <br/><br/>
Mais, vous ? Avez-vous envie de perdre quelques rondeurs ou avez-vous envie de les transformer en atout ? Savez-vous réellement habiller votre silhouette ? Connaissez-vous les exercices, les sports et les conseils minceur qui feront la différence sur votre look ? 
<br/><br/><p style="text-align: center;"><em>Besoin d’aide ? Alors suivez le guide ci-dessous !</em></p><br/><br/><div class="clear-zero">&nbsp;</div>
<div class="bloc-morpho-blanc"><h3>CONSEILS POUR LES<span class="rosespan"> O</span></h3> </div>
	<div class="d-morpho4"><a href="/morphologie-et-silhouette-type-femme/comment-s-habiller/quels-vetements-choisir-et-porter-quand-on-est-en-o-ronde-ou-pomme/">Quels vêtements porter?<br><img src="/wp-content/uploads/vetements-morphologie.gif" alt="Comment s'habiller et quels vêtements porter ?" title="Comment s'habiller et quels vêtements porter ?" height="150" width="150">
</a></div>
<div class="d-morpho4"><a href="/morphologie-et-silhouette-type-femme/quels-exercices-et-quels-sports-selon-sa-morphologie/quand-on-est-en-o-ronde-ou-pomme/">Quels sports &amp; exercices <br><img src="/wp-content/uploads/exercices-et-sports-morphologie.gif" alt="Quels exercices et quels sports ?" title="Quels exercices et quels sports ?" height="150" width="150">
</a></div>
<div class="d-morpho4"><a href="/morphologie-et-silhouette-type-femme/conseils-minceur-comment-maigrir-selon-sa-morphologie/quand-on-est-en-o-ronde-ou-pomme/">Quels conseils minceur?<br><img src="/wp-content/uploads/conseils-minceur-morphologie.gif" alt="Conseils minceur : Comment maigrir ?" title="Conseils minceur : Comment maigrir ?" height="150" width="150">
</a></div>
<div class="clear-zero">&nbsp;</div>
EOT;
}
else if ($nature==4)
 {$morpho="V";
  	$texte = <<<EOT
<div class="bloc-morpho-blanc"><h3>VOTRE<span class="rosespan"> MORPHOLOGIE</span> EST EN <span class="rosespan">V </span></h3> </div>
<a href="/morphologie-et-silhouette-type-femme/en-v-pyramide-inversee-ou-triangle-inverse/"><img src="/wp-content/uploads/conseils-morphologie-silhouette-en-v-ou-triangle-pyramide-inverse.gif" alt="Conseils silhouette et morphologie en V, pyramide inversée ou triangle inversé"  title="Conseils silhouette et morphologie en V, pyramide inversée ou triangle inversé" class="alignleft size-full wp-image-16575" height="181" width="64"></a><br />
Vous avez une morphologie en V que l’on nomme également silhouette en pyramide inversée ou triangle inversé. Vous l’aurez compris, votre largeur d’épaule est donc supérieure à celle de votre bassin.  <br/><br/>
Votre défi est donc de faire illusion avec des vêtements adaptés qui mettront en avant vos atouts et masqueront vos faiblesses. Mais savez-vous réellement habiller votre silhouette ? Connaissez-vous les exercices, les sports et les conseils minceur qui feront la différence sur votre look ? 
<br/><br/><p style="text-align: center;"><em>Besoin d’aide ? Alors suivez le guide ci-dessous !</em></p><br/><br/><div class="clear-zero">&nbsp;</div>
<div class="bloc-morpho-blanc"><h3>CONSEILS POUR LES<span class="rosespan"> V</span></h3> </div>
	<div class="d-morpho4"><a href="/morphologie-et-silhouette-type-femme/comment-s-habiller/quels-vetements-choisir-et-porter-quand-on-est-en-v-pyramide-inversee-ou-triangle-inverse/">Quels vêtements porter?<br><img src="/wp-content/uploads/vetements-morphologie-8.gif" alt="Comment s'habiller et quels vêtements porter ?" title="Comment s'habiller et quels vêtements porter ?" height="150" width="150">
</a></div>
<div class="d-morpho4"><a href="/morphologie-et-silhouette-type-femme/quels-exercices-et-quels-sports-selon-sa-morphologie/quand-on-est-en-v-pyramide-inversee-ou-triangle-inverse/">Quels sports &amp; exercices <br><img src="/wp-content/uploads/exercices-et-sports-morphologie-8.gif" alt="Quels exercices et quels sports ?" title="Quels exercices et quels sports ?" height="150" width="150">
</a></div>
<div class="d-morpho4"><a href="/morphologie-et-silhouette-type-femme/conseils-minceur-comment-maigrir-selon-sa-morphologie/quand-on-est-en-v-pyramide-inversee-ou-triangle-inverse/">Quels conseils minceur?<br><img src="/wp-content/uploads/conseils-minceur-morphologie-8.gif" alt="Conseils minceur : Comment maigrir ?" title="Conseils minceur : Comment maigrir ?" height="150" width="150">
</a></div>
<div class="clear-zero">&nbsp;</div>
EOT;
}
else if ($nature==5)
 {$morpho="H";
  	$texte = <<<EOT
<div class="bloc-morpho-blanc"><h3>VOTRE<span class="rosespan"> MORPHOLOGIE</span> EST EN <span class="rosespan">H </span></h3> </div>
<a href="/morphologie-et-silhouette-type-femme/en-h-ou-rectangle/"><img src="/wp-content/uploads/conseils-morphologie-silhouette-en-h-ou-rectangle.gif" alt="Conseils silhouette et morphologie en h ou rectangle"  title="Conseils silhouette et morphologie en h ou rectangle" class="alignleft size-full wp-image-16575" height="181" width="64"></a><br />
Vous avez une morphologie en H que l’on nomme également silhouette en rectangle. Vous l’aurez compris, chez vous les lignes épaules, taille bassin sont plutôt droites.  <br/><br/>
Votre défi est donc de faire illusion avec des vêtements adaptés qui mettront en avant vos atouts et masqueront vos faiblesses. Mais savez-vous réellement habiller votre silhouette ? Connaissez-vous les exercices, les sports et les conseils minceur qui feront la différence sur votre look ? 
<br/><br/><em><p style="text-align: center;">Besoin d’aide ? Alors suivez le guide ci-dessous !</em></p><br/><br/><div class="clear-zero">&nbsp;</div>
<div class="bloc-morpho-blanc"><h3>CONSEILS POUR LES<span class="rosespan"> H</span></h3> </div>
	<div class="d-morpho4"><a href="/morphologie-et-silhouette-type-femme/comment-s-habiller/quels-vetements-choisir-et-porter-quand-on-est-en-h-ou-rectangle/">Quels vêtements porter?<br><img src="/wp-content/uploads/vetements-morphologie-8.gif" alt="Comment s'habiller et quels vêtements porter ?" title="Comment s'habiller et quels vêtements porter ?" height="150" width="150">
</a></div>
<div class="d-morpho4"><a href="/morphologie-et-silhouette-type-femme/quels-exercices-et-quels-sports-selon-sa-morphologie/quand-on-est-en-h-ou-rectangle/">Quels sports &amp; exercices <br><img src="/wp-content/uploads/exercices-et-sports-morphologie-8.gif" alt="Quels exercices et quels sports ?" title="Quels exercices et quels sports ?" height="150" width="150">
</a></div>
<div class="d-morpho4"><a href="/morphologie-et-silhouette-type-femme/conseils-minceur-comment-maigrir-selon-sa-morphologie/quand-on-est-en-h-ou-rectangle/">Quels conseils minceur?<br><img src="/wp-content/uploads/conseils-minceur-morphologie-8.gif" alt="Conseils minceur : Comment maigrir ?" title="Conseils minceur : Comment maigrir ?" height="150" width="150">
</a></div>
<div class="clear-zero">&nbsp;</div>
EOT;
}
else if (($nature==2)AND($poit==8))
 {$morpho="8";
 	$texte = <<<EOT
<div class="bloc-morpho-blanc"><h3>VOTRE<span class="rosespan"> MORPHOLOGIE</span> EST EN <span class="rosespan">8 </span></h3> </div>
<a href="/morphologie-et-silhouette-type-femme/en-8-ou-huit/"><img src="/wp-content/uploads/conseils-morphologie-silhouette-en-8.gif" alt="Conseils silhouette et morphologie en huit"  title="Conseils silhouette et morphologie en huit" class="alignleft size-full wp-image-16575" height="181" width="64"></a><br />
Vous avez une morphologie en 8, c’est-à-dire, la morphologie dont toutes les femmes rêvent.  <br/><br/>
La générosité de vos formes renforcée par votre taille marquée est un véritable atout à exploiter pour se mettre en valeur ! Mais savez-vous réellement habiller votre silhouette ? Connaissez-vous les exercices, les sports et les conseils minceur qui feront la différence sur votre look ? 
<br/><br/><em><p style="text-align: center;">Besoin d’aide ? Alors suivez le guide ci-dessous !</em></p><br/><br/><div class="clear-zero">&nbsp;</div>
<div class="bloc-morpho-blanc"><h3>CONSEILS POUR LES<span class="rosespan"> 8</span></h3> </div>
	<div class="d-morpho4"><a href="/morphologie-et-silhouette-type-femme/comment-s-habiller/quels-vetements-choisir-et-porter-quand-on-est-en-8-ou-huit/">Quels vêtements porter?<br><img src="/wp-content/uploads/vetements-morphologie-8.gif" alt="Comment s'habiller et quels vêtements porter ?" title="Comment s'habiller et quels vêtements porter ?" height="150" width="150">
</a></div>
<div class="d-morpho4"><a href="/morphologie-et-silhouette-type-femme/quels-exercices-et-quels-sports-selon-sa-morphologie/quand-on-est-en-8-ou-huit/">Quels sports &amp; exercices <br><img src="/wp-content/uploads/exercices-et-sports-morphologie-8.gif" alt="Quels exercices et quels sports ?" title="Quels exercices et quels sports ?" height="150" width="150">
</a></div>
<div class="d-morpho4"><a href="/morphologie-et-silhouette-type-femme/conseils-minceur-comment-maigrir-selon-sa-morphologie/quand-on-est-en-8-ou-huit/">Quels conseils minceur?<br><img src="/wp-content/uploads/conseils-minceur-morphologie-8.gif" alt="Conseils minceur : Comment maigrir ?" title="Conseils minceur : Comment maigrir ?" height="150" width="150">
</a></div>
<div class="clear-zero">&nbsp;</div>
EOT;
 }
else if (($nature==2)AND($poit==9))
 {$morpho="X";
  	$texte = <<<EOT
<div class="bloc-morpho-blanc"><h3>VOTRE<span class="rosespan"> MORPHOLOGIE</span> EST EN <span class="rosespan">X </span></h3> </div>
<a href="/morphologie-et-silhouette-type-femme/en-x-ou-sablier/"><img src="/wp-content/uploads/conseils-morphologie-silhouette-en-X.gif" alt="Conseils morphologie et silhouette en x ou sablier"  title="Conseils morphologie et silhouette en x ou sablier" class="alignleft size-full wp-image-16575" height="181" width="64"></a><br />
Vous avez une morphologie en X que l’on nomme également silhouette en sablier. Vous êtes très chanceuse car c’est sans aucun doute la morphologie de la femme parfaite. <br/><br/>
L’équité de votre ligne d’épaule et de bassin avec votre taille marquée sont de vrais atouts mais toujours faut-il savoir en profiter. Savez-vous réellement habiller votre silhouette ? Connaissez-vous les exercices, les sports et les conseils minceur qui feront la différence sur votre look ? 
<br/><br/><em><p style="text-align: center;">Besoin d’aide ? Alors suivez le guide ci-dessous !</em></p><br/><br/><div class="clear-zero">&nbsp;</div>
<div class="bloc-morpho-blanc"><h3>CONSEILS POUR LES<span class="rosespan"> X</span></h3> </div>
	<div class="d-morpho4"><a href="/morphologie-et-silhouette-type-femme/comment-s-habiller/quels-vetements-choisir-et-porter-quand-on-est-en-x-ou-sablier/">Quels vêtements porter?<br><img src="/wp-content/uploads/vetements-morphologie-8.gif" alt="Comment s'habiller et quels vêtements porter ?" title="Comment s'habiller et quels vêtements porter ?" height="150" width="150">
</a></div>
<div class="d-morpho4"><a href="/morphologie-et-silhouette-type-femme/quels-exercices-et-quels-sports-selon-sa-morphologie/quand-on-est-en-x-ou-sablier/">Quels sports &amp; exercices <br><img src="/wp-content/uploads/exercices-et-sports-morphologie-8.gif" alt="Quels exercices et quels sports ?" title="Quels exercices et quels sports ?" height="150" width="150">
</a></div>
<div class="d-morpho4"><a href="/morphologie-et-silhouette-type-femme/conseils-minceur-comment-maigrir-selon-sa-morphologie/quand-on-est-en-x-ou-sablier/">Quels conseils minceur?<br><img src="/wp-content/uploads/conseils-minceur-morphologie-8.gif" alt="Conseils minceur : Comment maigrir ?" title="Conseils minceur : Comment maigrir ?" height="150" width="150">
</a></div>
<div class="clear-zero">&nbsp;</div>
EOT;
}

	$codehtml .= <<<EOT
<div class="bloc-morpho-gl">
<form name="morphoaform" class="form-type1" method="post" action="$url">
<img src="/wp-content/uploads/les-proportions-du-corps-avec-les-lignes-morphologiques-des-epaules-de-la-taille-et-des-hanches-2.webp" alt="Test morpho femme" title="Test morpho femme" class="aligncenter size-full wp-image-16781" height="200" width="600">

<div class="bloc-morpho-blanc">
<h3>QUESTION<span class="rosespan"> 1</span>/2 <span class="rosespan"> </span></h3>

<em>A l’aide de l’image ci-dessus représentant des formes sur  les 3 lignes noires de silhouette que sont les épaules (1), la taille (2) et les hanches (3) ...</em>
<h4><span class="rosespan">Êtes-vous plutôt ?</span></h4>
</div>
<input id="ex1" type="radio" name="nature" value="1" $check1/><label for="ex1">(ex 1) Hanches plus larges que les épaules</label><br>
<input id="ex2" type="radio" name="nature" value="2" $check2/><label for="ex2">(ex 2) Hanches égales aux épaules + taille marquée</label><br />
<input id="ex3" type="radio" name="nature" value="3" $check3/><label for="ex3">(ex 3) Taille ronde</label><br />
<input id="ex4" type="radio" name="nature" value="4" $check4/><label for="ex4">(ex 4) Épaules plus larges que les hanches</label><br>
<input id="ex5" type="radio" name="nature" value="5" $check5/><label for="ex5">(ex 5) Épaules, taille et hanches égales</label><br>
<div class="bloc-morpho-blanc">
<h3>QUESTION<span class="rosespan"> 2</span>/2 <span class="rosespan"> </span></h3>
<h4><span class="rosespan">Avez-vous une poitrine et des hanches généreuses ?</span></h4></div>
<p class="centrage"><input id="oui1" type="radio" name="poit" value="8" $check8/><label for="oui1"> OUI</label>&nbsp; &nbsp;
<input id="non1" type="radio" name="poit" value="9" $check9/><label for="non1"> NON</label></p>
<p class="centrage"><input name="valider" value="VALIDER" type="submit"></p><br>

EOT;
if (isset($_POST['valider'])) {
	   $codehtml .= <<<EOT
$texte
EOT;
}
	   $codehtml .= <<<EOT
</div>	
EOT;
return $codehtml;
}
add_shortcode( 'outilsmorphoa', 'outils_morphoa' );



//Calculette mariage
function outils_mariage($url) {
extract( shortcode_atts( array(
      'url'     => '',
   ), $url, 'outilsmariage' ) );
				$nature = $_POST['nature'];
   				$poit = $_POST['poit'];		
if ($nature==1) {$check1="checked ";}
				else if ($nature==2) {$check2="checked ";}
				else if ($nature==3) {$check3="checked ";}
				else if ($nature==4) {$check4="checked ";}
				else if ($nature==5) {$check5="checked ";}
if ($poit==8) {$check8="checked ";}
				else if ($poit==9) {$check9="checked ";}

if ($nature==1)
 {$morpho="A";
  	$texte = <<<EOT
<div class="bloc-morpho-blanc"><h3>VOTRE<span class="rosespan"> MORPHOLOGIE</span> EST EN <span class="rosespan">A </span></h3> </div>
<a href="/morphologie-et-silhouette-type-femme/en-a-pyramide-triangle-ou-poire/"><img src="/wp-content/uploads/conseils-morphologie-silhouette-en-a-ou-triangle-pyramide.gif" alt="Conseils silhouette et morphologie en A pyramide, triangle ou poire"  title="Conseils silhouette et morphologie en A pyramide, triangle ou poire" class="alignleft size-full wp-image-16575" height="141" width="50"></a><br />
Vous avez une morphologie en A que l’on nomme également silhouette en pyramide, triangle ou poire. Vous l’aurez compris, votre bassin est donc plus large que vos épaules.  <br/><br/>
<br/><br/><p style="text-align: center;"><em>Besoin d’aide pour choisir votre robe ? Cliquez ci-dessous !</em>
<a href="/morphologie-et-silhouette-type-femme/comment-s-habiller/quelle-robe-de-mariee-porter-et-choisir-pour-son-mariage/quand-on-est-en-a-pyramide-triangle-ou-poire/"><img src="/wp-content/uploads/comment-choisir-et-quelle-robe-de-mariee-porter-pour-le-mariage-quand-on-a-une-silhouette-et-une-morphologie-de-femme-en-v-pyramide-triangle-ou-poire-avec-fond.gif" alt="Conseils mariage et robes de mariée pour silhouette et morphologie en A pyramide, triangle ou poire"  title="Conseils mariage et robes de mariée pour silhouette et morphologie en A pyramide, triangle ou poire" class="aligncenter size-full wp-image-16575" height="181" width="64">
Voir les exemples de robes de mariée pour la morphologie A !</a><br />
<br/>
</p><br/><br/><div class="clear-zero">&nbsp;</div>
<div class="bloc-morpho-blanc"><h3>AUTRES CONSEILS POUR LES<span class="rosespan"> A</span></h3> </div>
	<div class="d-morpho4"><a href="/morphologie-et-silhouette-type-femme/comment-s-habiller/quels-vetements-choisir-et-porter-quand-on-est-en-a-pyramide-triangle-ou-poire/">Quels vêtements porter?<br><img src="/wp-content/uploads/vetements-morphologie-8.gif" alt="Comment s'habiller et quels vêtements porter ?" title="Comment s'habiller et quels vêtements porter ?" height="150" width="150">
</a></div>
<div class="d-morpho4"><a href="/morphologie-et-silhouette-type-femme/quels-exercices-et-quels-sports-selon-sa-morphologie/quand-on-est-en-a-pyramide-triangle-ou-poire/">Quels sports &amp; exercices <br><img src="/wp-content/uploads/exercices-et-sports-morphologie-8.gif" alt="Quels exercices et quels sports ?" title="Quels exercices et quels sports ?" height="150" width="150">
</a></div>
<div class="d-morpho4"><a href="/morphologie-et-silhouette-type-femme/conseils-minceur-comment-maigrir-selon-sa-morphologie/quand-on-est-en-a-pyramide-triangle-ou-poire/">Quels conseils minceur?<br><img src="/wp-content/uploads/conseils-minceur-morphologie-8.gif" alt="Conseils minceur : Comment maigrir ?" title="Conseils minceur : Comment maigrir ?" height="150" width="150">
</a></div>
<div class="clear-zero">&nbsp;</div>
EOT;
}
else if ($nature==3)
 {$morpho="O";
  	$texte = <<<EOT
<div class="bloc-morpho-blanc"><h3>VOTRE<span class="rosespan"> MORPHOLOGIE</span> EST EN <span class="rosespan">O </span></h3> </div>
<a href="/morphologie-et-silhouette-type-femme/en-rond-o-ou-pomme/"><img src="/wp-content/uploads/conseils-morphologie-silhouette-en-o-ronde.gif" alt="Conseils silhouette et morphologie en O ronde ou pomme"  title="Conseils silhouette et morphologie en O ronde ou pomme" class="alignleft size-full wp-image-16575" height="181" width="64"></a><br />
Vous avez une morphologie en O que l’on nomme également  ronde ou silhouette en forme de pomme. Vous l’aurez compris, chez vous les lignes sont arrondies et ce n’est pas pour déplaire à votre futur mari qui comme la majorité des hommes aime les formes généreuses.  <br/><br/>
<br/><br/><p style="text-align: center;"><em>Besoin d’aide pour choisir votre robe ? Cliquez ci-dessous !</em>
<a href="/morphologie-et-silhouette-type-femme/comment-s-habiller/quelle-robe-de-mariee-porter-et-choisir-pour-son-mariage/quand-on-est-en-o-ronde-ou-pomme/"><img src="/wp-content/uploads/comment-choisir-et-quelle-robe-de-mariee-porter-pour-le-mariage-quand-on-a-une-silhouette-et-une-morphologie-de-femme-en-o-ronde-pomme-enrobee-ou-grosse-avec-fond.gif" alt="Conseils mariage et robes de mariée pour silhouette et morphologie en o, ronde ou pomme"  title="Conseils mariage et robes de mariée pour silhouette et morphologie en en o, ronde ou pomme" class="aligncenter size-full wp-image-16575" height="181" width="64">
Voir les exemples de robes de mariée pour la morphologie O "ronde" !</a><br />
<br/>
</p><br/><br/><div class="clear-zero">&nbsp;</div>
<div class="bloc-morpho-blanc"><h3> AUTRES CONSEILS POUR LES<span class="rosespan"> O</span></h3> </div>
	<div class="d-morpho4"><a href="/morphologie-et-silhouette-type-femme/comment-s-habiller/quels-vetements-choisir-et-porter-quand-on-est-en-o-ronde-ou-pomme/">Quels vêtements porter?<br><img src="/wp-content/uploads/vetements-morphologie.gif" alt="Comment s'habiller et quels vêtements porter ?" title="Comment s'habiller et quels vêtements porter ?" height="150" width="150">
</a></div>
<div class="d-morpho4"><a href="/morphologie-et-silhouette-type-femme/quels-exercices-et-quels-sports-selon-sa-morphologie/quand-on-est-en-o-ronde-ou-pomme/">Quels sports &amp; exercices <br><img src="/wp-content/uploads/exercices-et-sports-morphologie.gif" alt="Quels exercices et quels sports ?" title="Quels exercices et quels sports ?" height="150" width="150">
</a></div>
<div class="d-morpho4"><a href="/morphologie-et-silhouette-type-femme/conseils-minceur-comment-maigrir-selon-sa-morphologie/quand-on-est-en-o-ronde-ou-pomme/">Quels conseils minceur?<br><img src="/wp-content/uploads/conseils-minceur-morphologie.gif" alt="Conseils minceur : Comment maigrir ?" title="Conseils minceur : Comment maigrir ?" height="150" width="150">
</a></div>
<div class="clear-zero">&nbsp;</div>
EOT;
}
else if ($nature==4)
 {$morpho="V";
  	$texte = <<<EOT
<div class="bloc-morpho-blanc"><h3>VOTRE<span class="rosespan"> MORPHOLOGIE</span> EST EN <span class="rosespan">V </span></h3> </div>
<a href="/morphologie-et-silhouette-type-femme/en-v-pyramide-inversee-ou-triangle-inverse/"><img src="/wp-content/uploads/conseils-morphologie-silhouette-en-v-ou-triangle-pyramide-inverse.gif" alt="Conseils silhouette et morphologie en V, pyramide inversée ou triangle inversé"  title="Conseils silhouette et morphologie en V, pyramide inversée ou triangle inversé" class="alignleft size-full wp-image-16575" height="181" width="64"></a><br />
Vous avez une morphologie en V que l’on nomme également silhouette en pyramide inversée ou triangle inversé. <br/><br/>Vous l’aurez compris, votre largeur d’épaule est donc supérieure à celle de votre bassin.  <br/><br/>
<br/><br/><p style="text-align: center;"><em>Besoin d’aide pour choisir votre robe ? Cliquez ci-dessous !</em>
<a href="/morphologie-et-silhouette-type-femme/comment-s-habiller/quelle-robe-de-mariee-porter-et-choisir-pour-son-mariage/quand-on-est-en-v-pyramide-inversee-ou-triangle-inverse/"><img src="/wp-content/uploads/comment-choisir-et-quelle-robe-de-mariee-porter-pour-le-mariage-quand-on-a-une-silhouette-et-une-morphologie-de-femme-en-v-pyramide-inversee-ou-triangle-inverse-avec-fond.gif" alt="Conseils mariage et robes de mariée pour silhouette et morphologie en V, pyramide inversée ou trinagle inversé"  title="Conseils mariage et robes de mariée pour silhouette et morphologie en V, pyramide inversée ou trinagle inversé" class="aligncenter size-full wp-image-16575" height="181" width="64">
Voir les exemples de robes de mariée pour la morphologie V, pyramide inversée ou triangle inversé !</a><br />
<br/>
</p><br/><br/><div class="clear-zero">&nbsp;</div>
<div class="bloc-morpho-blanc"><h3>AUTRES CONSEILS POUR LES<span class="rosespan"> V</span></h3> </div>
	<div class="d-morpho4"><a href="/morphologie-et-silhouette-type-femme/comment-s-habiller/quels-vetements-choisir-et-porter-quand-on-est-en-v-pyramide-inversee-ou-triangle-inverse/">Quels vêtements porter?<br><img src="/wp-content/uploads/vetements-morphologie-8.gif" alt="Comment s'habiller et quels vêtements porter ?" title="Comment s'habiller et quels vêtements porter ?" height="150" width="150">
</a></div>
<div class="d-morpho4"><a href="/morphologie-et-silhouette-type-femme/quels-exercices-et-quels-sports-selon-sa-morphologie/quand-on-est-en-v-pyramide-inversee-ou-triangle-inverse/">Quels sports &amp; exercices <br><img src="/wp-content/uploads/exercices-et-sports-morphologie-8.gif" alt="Quels exercices et quels sports ?" title="Quels exercices et quels sports ?" height="150" width="150">
</a></div>
<div class="d-morpho4"><a href="/morphologie-et-silhouette-type-femme/conseils-minceur-comment-maigrir-selon-sa-morphologie/quand-on-est-en-v-pyramide-inversee-ou-triangle-inverse/">Quels conseils minceur?<br><img src="/wp-content/uploads/conseils-minceur-morphologie-8.gif" alt="Conseils minceur : Comment maigrir ?" title="Conseils minceur : Comment maigrir ?" height="150" width="150">
</a></div>
<div class="clear-zero">&nbsp;</div>
EOT;
}
else if ($nature==5)
 {$morpho="H";
  	$texte = <<<EOT
<div class="bloc-morpho-blanc"><h3>VOTRE<span class="rosespan"> MORPHOLOGIE</span> EST EN <span class="rosespan">H </span></h3> </div>
<a href="/morphologie-et-silhouette-type-femme/en-h-ou-rectangle/"><img src="/wp-content/uploads/conseils-morphologie-silhouette-en-h-ou-rectangle.gif" alt="Conseils silhouette et morphologie en h ou rectangle"  title="Conseils silhouette et morphologie en h ou rectangle" class="alignleft size-full wp-image-16575" height="181" width="64"></a><br />
Vous avez une morphologie en H que l’on nomme également silhouette en rectangle.<br/><br/> Vous l’aurez compris, chez vous les lignes épaules, taille bassin sont plutôt droites.  <br/><br/>
<br/><br/><em><p style="text-align: center;">Besoin d’aide pour choisir votre robe ? Cliquez ci-dessous !</em>
<a href="/morphologie-et-silhouette-type-femme/comment-s-habiller/quelle-robe-de-mariee-porter-et-choisir-pour-son-mariage/quand-on-est-en-h-ou-rectangle/"><img src="/wp-content/uploads/comment-choisir-et-quelle-robe-de-mariee-porter-pour-le-mariage-quand-on-a-une-silhouette-et-une-morphologie-de-femme-en-h-ou-rectangle-avec-fond.gif" alt="Conseils mariage et robes de mariée pour silhouette et morphologie en H ou rectangle"  title="Conseils mariage et robes de mariée pour silhouette et morphologie en H ou rectangle" class="aligncenter size-full wp-image-16575" height="181" width="64">
Voir les exemples de robes de mariée pour la morphologie H ou rectangle !</a><br />
<br/>
</p><br/><br/><div class="clear-zero">&nbsp;</div>
<div class="bloc-morpho-blanc"><h3>AUTRES CONSEILS POUR LES<span class="rosespan"> H</span></h3> </div>
	<div class="d-morpho4"><a href="/morphologie-et-silhouette-type-femme/comment-s-habiller/quels-vetements-choisir-et-porter-quand-on-est-en-h-ou-rectangle/">Quels vêtements porter?<br><img src="/wp-content/uploads/vetements-morphologie-8.gif" alt="Comment s'habiller et quels vêtements porter ?" title="Comment s'habiller et quels vêtements porter ?" height="150" width="150">
</a></div>
<div class="d-morpho4"><a href="/morphologie-et-silhouette-type-femme/quels-exercices-et-quels-sports-selon-sa-morphologie/quand-on-est-en-h-ou-rectangle/">Quels sports &amp; exercices <br><img src="/wp-content/uploads/exercices-et-sports-morphologie-8.gif" alt="Quels exercices et quels sports ?" title="Quels exercices et quels sports ?" height="150" width="150">
</a></div>
<div class="d-morpho4"><a href="/morphologie-et-silhouette-type-femme/conseils-minceur-comment-maigrir-selon-sa-morphologie/quand-on-est-en-h-ou-rectangle/">Quels conseils minceur?<br><img src="/wp-content/uploads/conseils-minceur-morphologie-8.gif" alt="Conseils minceur : Comment maigrir ?" title="Conseils minceur : Comment maigrir ?" height="150" width="150">
</a></div>
<div class="clear-zero">&nbsp;</div>
EOT;
}
else if (($nature==2)AND($poit==8))
 {$morpho="8";
 	$texte = <<<EOT
<div class="bloc-morpho-blanc"><h3>VOTRE<span class="rosespan"> MORPHOLOGIE</span> EST EN <span class="rosespan">8 </span></h3> </div>
<a href="/morphologie-et-silhouette-type-femme/en-8-ou-huit/"><img src="/wp-content/uploads/conseils-morphologie-silhouette-en-8.gif" alt="Conseils silhouette et morphologie en huit"  title="Conseils silhouette et morphologie en huit" class="alignleft size-full wp-image-16575" height="181" width="64"></a><br />
Vous avez une morphologie en 8, c’est-à-dire, la morphologie dont toutes les femmes rêvent. <br/><br/>La générosité de vos formes renforcée par votre taille marquée est un véritable atout à exploiter pour se mettre en valeur !<br/><br/>
<br/><br/><em><p style="text-align: center;">Besoin d’aide pour choisir votre robe ? Cliquez ci-dessous !</em>
<a href="/morphologie-et-silhouette-type-femme/comment-s-habiller/quelle-robe-de-mariee-porter-et-choisir-pour-son-mariage/quand-on-est-en-8-ou-huit/"><img src="/wp-content/uploads/comment-choisir-et-quelle-robe-de-mariee-porter-pour-le-mariage-quand-on-a-une-silhouette-et-une-morphologie-de-femme-en-8-ou-huit-avec-fond.gif" alt="Conseils mariage et robes de mariée pour silhouette et morphologie en 8 ou huit"  title="Conseils mariage et robes de mariée pour silhouette et morphologie en 8 ou huit" class="aligncenter size-full wp-image-16575" height="181" width="64">
Voir les exemples de robes de mariée pour la morphologie 8 ou huit !</a><br />
<br/>
</p><br/><br/><div class="clear-zero">&nbsp;</div>
<div class="bloc-morpho-blanc"><h3>CONSEILS POUR LES<span class="rosespan"> 8</span></h3> </div>
	<div class="d-morpho4"><a href="/morphologie-et-silhouette-type-femme/comment-s-habiller/quels-vetements-choisir-et-porter-quand-on-est-en-8-ou-huit/">Quels vêtements porter?<br><img src="/wp-content/uploads/vetements-morphologie-8.gif" alt="Comment s'habiller et quels vêtements porter ?" title="Comment s'habiller et quels vêtements porter ?" height="150" width="150">
</a></div>
<div class="d-morpho4"><a href="/morphologie-et-silhouette-type-femme/quels-exercices-et-quels-sports-selon-sa-morphologie/quand-on-est-en-8-ou-huit/">Quels sports &amp; exercices <br><img src="/wp-content/uploads/exercices-et-sports-morphologie-8.gif" alt="Quels exercices et quels sports ?" title="Quels exercices et quels sports ?" height="150" width="150">
</a></div>
<div class="d-morpho4"><a href="/morphologie-et-silhouette-type-femme/conseils-minceur-comment-maigrir-selon-sa-morphologie/quand-on-est-en-8-ou-huit/">Quels conseils minceur?<br><img src="/wp-content/uploads/conseils-minceur-morphologie-8.gif" alt="Conseils minceur : Comment maigrir ?" title="Conseils minceur : Comment maigrir ?" height="150" width="150">
</a></div>
<div class="clear-zero">&nbsp;</div>
EOT;
 }
else if (($nature==2)AND($poit==9))
 {$morpho="X";
  	$texte = <<<EOT
<div class="bloc-morpho-blanc"><h3>VOTRE<span class="rosespan"> MORPHOLOGIE</span> EST EN <span class="rosespan">X </span></h3> </div>
<a href="/morphologie-et-silhouette-type-femme/en-x-ou-sablier/"><img src="/wp-content/uploads/conseils-morphologie-silhouette-en-X.gif" alt="Conseils morphologie et silhouette en x ou sablier"  title="Conseils morphologie et silhouette en x ou sablier" class="alignleft size-full wp-image-16575" height="181" width="64"></a><br />
Vous avez une morphologie en X que l’on nomme également silhouette en sablier. Vous êtes très chanceuse car c’est sans aucun doute la morphologie de la femme parfaite. <br/><br/>
L’équité de votre ligne d’épaule et de bassin avec votre taille marquée sont de vrais atouts mais toujours faut-il savoir en profiter.
<br/><br/><em><p style="text-align: center;">Besoin d’aide pour choisir votre robe ? Cliquez ci-dessous !</em>
<a href="/morphologie-et-silhouette-type-femme/comment-s-habiller/quelle-robe-de-mariee-porter-et-choisir-pour-son-mariage/quand-on-est-en-x-ou-sablier/"><img src="/wp-content/uploads/comment-choisir-et-quelle-robe-de-mariee-porter-pour-le-mariage-quand-on-a-une-silhouette-et-une-morphologie-de-femme-en-x-ou-sablier-avec-fond.gif" alt="Conseils mariage et robes de mariée pour silhouette et morphologie en X ou sablier"  title="Conseils mariage et robes de mariée pour silhouette et morphologie en X ou sablier" class="aligncenter size-full wp-image-16575" height="181" width="64">
Voir les exemples de robes de mariée pour la morphologie X ou sablier !</a><br />
<br/>
</p><br/><br/><div class="clear-zero">&nbsp;</div>
<div class="bloc-morpho-blanc"><h3>CONSEILS POUR LES<span class="rosespan"> X</span></h3> </div>
	<div class="d-morpho4"><a href="/morphologie-et-silhouette-type-femme/comment-s-habiller/quels-vetements-choisir-et-porter-quand-on-est-en-x-ou-sablier/">Quels vêtements porter?<br><img src="/wp-content/uploads/vetements-morphologie-8.gif" alt="Comment s'habiller et quels vêtements porter ?" title="Comment s'habiller et quels vêtements porter ?" height="150" width="150">
</a></div>
<div class="d-morpho4"><a href="/morphologie-et-silhouette-type-femme/quels-exercices-et-quels-sports-selon-sa-morphologie/quand-on-est-en-x-ou-sablier/">Quels sports &amp; exercices <br><img src="/wp-content/uploads/exercices-et-sports-morphologie-8.gif" alt="Quels exercices et quels sports ?" title="Quels exercices et quels sports ?" height="150" width="150">
</a></div>
<div class="d-morpho4"><a href="/morphologie-et-silhouette-type-femme/conseils-minceur-comment-maigrir-selon-sa-morphologie/quand-on-est-en-x-ou-sablier/">Quels conseils minceur?<br><img src="/wp-content/uploads/conseils-minceur-morphologie-8.gif" alt="Conseils minceur : Comment maigrir ?" title="Conseils minceur : Comment maigrir ?" height="150" width="150">
</a></div>
<div class="clear-zero">&nbsp;</div>
EOT;
}

	$codehtml .= <<<EOT
<div class="bloc-morpho-gl">
<form name="morphoaform" class="form-type1" method="post" action="$url">
<img src="/wp-content/uploads/morphologie-test-mariage-comment-faire-pour-bien-choisir-sa-robe-de-mariee.webp" alt="er" class="aligncenter size-full wp-image-16781" height="200" width="600">

<div class="bloc-morpho-blanc">
<h3>QUESTION<span class="rosespan"> 1</span>/2 <span class="rosespan"> </span></h3>

<em>A l’aide de l’image ci-dessus représentant des formes sur  les 3 lignes noires de silhouette que sont les épaules (1), la taille (2) et les hanches (3) ...</em>
<h4><span class="rosespan">Êtes-vous plutôt ?</span></h4>
</div>
<input id="ex1" type="radio" name="nature" value="1" $check1/><label for="ex1">(ex 1) Hanches plus larges que les épaules</label><br>
<input id="ex2" type="radio" name="nature" value="2" $check2/><label for="ex2">(ex 2) Hanches égales aux épaules + taille marquée</label><br />
<input id="ex3" type="radio" name="nature" value="3" $check3/><label for="ex3">(ex 3) Taille ronde</label><br />
<input id="ex4" type="radio" name="nature" value="4" $check4/><label for="ex4">(ex 4) Épaules plus larges que les hanches</label><br>
<input id="ex5" type="radio" name="nature" value="5" $check5/><label for="ex5">(ex 5) Épaules, taille et hanches égales</label><br>
<div class="bloc-morpho-blanc">
<h3>QUESTION<span class="rosespan"> 2</span>/2 <span class="rosespan"> </span></h3>
<h4><span class="rosespan">Avez-vous une poitrine et des hanches généreuses ?</span></h4></div>
<p class="centrage"><input id="oui1" type="radio" name="poit" value="8" $check8/><label for="oui1"> OUI</label>&nbsp; &nbsp;
<input id="non1" type="radio" name="poit" value="9" $check9/><label for="non1"> NON</label></p>
<p class="centrage"><input name="valider" value="VALIDER" type="submit"></p><br>

EOT;
if (isset($_POST['valider'])) {
	   $codehtml .= <<<EOT
$texte
EOT;
}
	   $codehtml .= <<<EOT
</div>	
EOT;
return $codehtml;
}
add_shortcode( 'outilsmariage', 'outils_mariage' );











/**
 Replace last occurence of a string
 *
 * @return string
 **/
function str_lreplace($search, $replace, $subject)
{
    $pos = strrpos($subject, $search);

    if($pos !== false)
    {
        $subject = substr_replace($subject, $replace, $pos, strlen($search));
    }

    return $subject;
}

/**
 Convert Yoast breadcrumbs to use Microdata
 Add correct schema.org validation
 *
 * @params string $breadcrumbs Breadcrumb HTML
 * @return string
 * @author Jaik Dean, Daniel Roch
 **/
function convertBreadcrumbsToMicrodata($breadcrumbs)
{
    // remove the XML namespace
    $breadcrumbs = str_replace(' xmlns:v="http://rdf.data-vocabulary.org/#"', '', $breadcrumbs);

    // convert each breadcrumb
    $breadcrumbs = preg_replace(
        '/<span typeof="v:Breadcrumb"><a href="([^"]+)" rel="v:url" property="v:title">([^<]+)<\\/a><\\/span>/',
        '<span itemscope itemtype="http://data-vocabulary.org/Breadcrumb"><a href="$1" itemprop="url"><span itemprop="title">$2</span></a></span>',
        $breadcrumbs
    );

    $breadcrumbs = preg_replace(
        '/<span typeof="v:Breadcrumb"><span class="breadcrumb_last" property="v:title">([^<]+)<\\/span><\\/span>/',
        '<span itemscope itemtype="http://data-vocabulary.org/Breadcrumb"><span class="breadcrumb_last" itemprop="title">$1</span></span>',
        $breadcrumbs
    );

    // remove last itemscope and itemtype to have correct schema validation
    $search = ' itemscope itemtype="http://data-vocabulary.org/Breadcrumb"';
    $replace = '';
    $breadcrumbs = str_lreplace($search, $replace, $breadcrumbs);
    $search2 = ' itemprop="title"';
    $breadcrumbs = str_lreplace($search2, $replace, $breadcrumbs);
    return $breadcrumbs;
}
add_filter('wpseo_breadcrumb_output', 'convertBreadcrumbsToMicrodata');


//Calculette du besoin par jour avec analyse
//modele 1: besoin par jour
//modele 2: combien de calories pour maigrir
function calculette_besoin_par_jour_analyse($atts) {
extract( shortcode_atts( array(
      'url'     => '',
	  'modele'     => '',
   ), $atts, 'calculettepjca' ) );
   $sexe=$_POST['sexe'];   
   $age=$_POST['age'];
   $taille=$_POST['taille'];
	$taille = preg_replace('*,*','.',$taille);
   $poids=$_POST['poids'];
	$poids = preg_replace('*,*','.',$poids);
   $act=$_POST['act'];
if ($sexe==1) {$hek1="checked ";}
else {$hek2="checked ";}
if ($act==2) {$check2="checked ";}
else if ($act==3) {$check3="checked ";}
else {$check1="checked ";}
$obj=$_POST['obj'];
	$obj = preg_replace('*,*','.',$obj);
   $codehtml = <<<EOT
<div id="resultat1"> </div>
			<div class="ocm-titre1">Calculette du besoin par jour en calories</div>   
			<div class="ocm-bl1">
<form name="imcform" class="ocm-form" method="post" action="#besoin">
<span class="rosep">Vous êtes</span>
<ul class="ul_calc"> 
<li><input id="femme" name="sexe" value="2" type="radio" $hek2/><label for="femme">Une femme</label></li> 
<li><input id="homme" name="sexe" value="1" type="radio" $hek1/><label for="homme">Un homme</label></li></ul>
<span class="rosep">Votre niveau d’activité</span>
<ul class="ul_calc"> 
<li><input id="sedentaire" name="act" value="1" type="radio" $check1/><label for="sedentaire">Sédentaire</label></li>
<li><input id="actif" name="act" value="2" type="radio" $check2/><label for="actif">Actif</label></li>
<li><input id="sportif" name="act" value="3" type="radio" $check3/><label for="sportif">Sportif</label></li>
</ul>
<div class="clear">
<div class="ocm-col3"><span class="rosep">Votre âge</span><br><input name="age" class="ocm-input1" value="$age" type="text"></div>
<div class="ocm-col3"><span class="rosep">Votre taille (cm)</span><br><input name="taille" class="ocm-input1" value="$taille" type="text"></div>
<div class="ocm-col3"><span class="rosep">Votre poids (KG)</span><br><input name="poids" class="ocm-input1" value="$poids" type="text"></div>
</div><div id="besoin" class="centrage">
<input name="valider" value="CALCULER" type="submit">
</div>  
</form>
<div class="clear-zero">&nbsp;</div>
</div>
EOT;
if (isset($_POST['valider'])) {
   if ($sexe=="2") {$MB=(230*pow($poids,(0.48))*pow(($taille/100),(0.5))*pow($age,(-0.13)));}
   else if ($sexe=="1") {$MB=(259*pow($poids,(0.48))*pow(($taille/100),(0.5))*pow($age,(-0.13)));}
$MB=round($MB,0);
if ($act=="1") {$BC=$MB*1.37;}
else if ($act=="2") {$BC=$MB*1.55;}
else if ($act=="3") {$BC=$MB*1.8;}
$BC=round($BC,0);
$BC20=($BC*0.8);
$BC20=round($BC20,0);
if ($modele=="2") {
   $vmodele2 .= <<<EOT
<div class="ocm-blancg">Si vous souhaitez maigrir, vous pourriez réduire vos apports caloriques de 20% (ou) augmenter vos dépenses caloriques !</div>
<div class="clear">
   <div class="ocm-bl4">Mes besoins - 20%<br /></div>
  <div class="ocm-circle"><br><span class="ocm-result14">$BC20</span><br><span class="ocm-result14p">Kcal</span></div>
</div>  
EOT;
}
   $codehtml .= <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/titre-besoin.png">
</div>
<div class="ocm-bl2">
<div class="clear-zero">&nbsp;</div>
<div class="float50">
  <div class="ocm-bl4">Métabolisme de base<br /><span>Dépense au repos</span></div>
  <div class="ocm-circle"><br><span class="ocm-result14">$MB</span><br><span class="ocm-result14p">Kcal</span></div>
</div>
<div class="float50">
    <div class="ocm-bl4">Besoin en calories<br /><span>Dépense énergétique totale</span></div>
	<div class="ocm-circle"><br><span class="ocm-result14">$BC</span><br><span class="ocm-result14p">Kcal</span></div>
</div>
<div class="clear-zero">&nbsp;</div>
$vmodele2
</div>
<div class="ocm-bl1">
Vous souhaitez perdre quelques kilos? Votre objectif de poids est-il réaliste? Poursuivez l'analyse en calculant votre poids idéal et en découvrant nos solutions:
<form name="anaform" class="ocm-form" method="post" action="#analyse">
<div id="analyse" class="clear">
<div class="centrage"><span class="rosep">Quel est votre objectif de poids (en KG)</span><br><input name="obj" class="ocm-input1" value="$obj" type="text"></div></div>
<div class="clear">
<input type="hidden" name="sexe" value="$sexe" />
<input type="hidden" name="act" value="$act" />
<input type="hidden" name="age" value="$age" />
<input type="hidden" name="taille" value="$taille" />
<input type="hidden" name="poids" value="$poids" />
<input type="hidden" name="valider" value="CALCULER" />
<div class="centrage">&nbsp;<br><input name="valider2" value="ANALYSER" type="submit"></div>
</form>
<div class="clear-zero">&nbsp;</div>
</div></div>
EOT;
}

if (isset($_POST['valider2'])) {
 $IMC=($poids/(($taille/100)*($taille/100)));
   $IMC=round($IMC,1);
      if ($IMC<18.5) {
   $STATUT= "maigreur";
   $IMAGE="imc-statut-maigreur.png";
   }
   else if ($IMC<25) {
   $STATUT= "corpulence normale";
   $IMAGE="imc-statut-normal.png";
   }
   else if ($IMC<30) {
   $STATUT= "surpoids";
   $IMAGE="imc-statut-suroids.png";
   } 
   else {
   $STATUT= "obèsité";
   $IMAGE="imc-statut-obesite.png";
   }
   
      if ($sexe=="2") {$PIL=($taille-100-(($taille-150)/2.5));}
   else if ($sexe=="1") {$PIL=($taille-100-(($taille-150)/4));}
$PIL=round($PIL,1);
   
   $pmaa = (($obj+$PIL)/2);
   $kap = ($poids-$pmaa);
   $vakap = abs($kap);
   
       if ($kap>0) {$textp="Poids moyen à perdre";}
   else if ($kap<0) {$textp="Poids moyen à gagner";}
   else {$textp="Vous êtes à l'équilibre";} 
   
       if ($kap<0.1) {$texto1="Vous n'avez pas de poids à perdre. Félicitations.";
   $lienb="<div class=\"ocm-liena\"><a href=\"/categorie-produit/coffret-minceur-box-de-regime/\">VOIR TOUS NOS PROGRAMMES</a></div>";	   
	   }
   else if ($kap<1) {$texto1="Vous êtes presque à votre poids d'équilibre. Vous pouvez perdre ce léger superflus en découvrant notre programme.";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-s-a-3-kg-14-jours/\">VOIR MON PROGRAMME</a></div>";
   }	   
   else if ($kap<3) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">2  semaines!</span>";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-s-a-3-kg-14-jours/\">VOIR MON PROGRAMME</a></div>";
   }
   else if ($kap<6) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">4  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-m-3-a-6-kg-28-jours/\">VOIR MON PROGRAMME</a></div>";}
   else if ($kap<9) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">6  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-l-6-a-9-kg-42-jours/\">VOIR MON PROGRAMME</a></div>";}
   else if ($kap<12) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">10  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xl-9-a-12-kg-56-jours/\">VOIR MON PROGRAMME</a></div>";}
    else if ($kap<15) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">10  semaines!</span>";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xxl-12-a-15-kg-70-jours/\">VOIR MON PROGRAMME</a></div>";}
   else {$texto1="En étant raisonnable vous pouvez vous fixer un objectif d'environ <span class=\"rosep\">15 kg</span> et l'atteindre au bout de <span class=\"rosep\">10 semaines!</span>";
     $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xxl-12-a-15-kg-70-jours/\">VOIR MON PROGRAMME</a></div>";} 
   
   $codehtml .= <<<EOT
<div class="ocm-noir"><img src="/wp-content/uploads/titre-analyse.png">
</div>
<div class="ocm-bl3">
<div class="ocm-blancg">Votre Indice de Masse Corporelle</div>
<p>IMC = <span class="rosegrasspan">$IMC</span><br />
Statut = <span class="rosegrasspan">$STATUT</span></p>
 <img class="aligncenter" src="/wp-content/uploads/$IMAGE"> 
<div class="ocm-blancg">Vos indicateurs de poids</div>
 <p>
  Votre poids actuel = <span class="rosegrasspan">$poids</span> kg<br />
 Poids idéal (formule de Lorentz) = <span class="rosegrasspan">$PIL</span> kg<br />
Objectif personnel = <span class="rosegrasspan">$obj</span> kg
</p>
<div class="float50">
  <div class="ocm-bl4">Poids moyen à atteindre</div>
  <div class="ocm-circle"><br><span class="ocm-res14r">$pmaa</span><br><span class="result14p">Kg</span></div>
</div>
<div class="float50">
    <div class="ocm-bl4">$textp</div>
	<div class="ocm-circle"><br><span class="ocm-res14r">$vakap</span><br><span class="result14p">Kg</span></div>
</div>
<div class="clear-zero">&nbsp;</div>
</div>
<div class="ocm-noir">
<img src="/wp-content/uploads/titre-solution.png">
</div>
<div class="ocm-bl1">
<div class="clear">
<div class="centrage"><span class="rosep">Quel objectif et comment le concrétiser?</span></div>
</div>
$texto1
<div class="clear-zero">&nbsp;</div>
$lienb
<img src="/wp-content/uploads/ligne-objectif-final.png">
</div>
EOT;
}

   $codehtml .= <<<EOT
<div class="clear-zero">&nbsp;</div>
EOT;


return $codehtml;
}
add_shortcode( 'calculettebpjca', 'calculette_besoin_par_jour_analyse' );



//Calculette du besoin par jour avec répartition par repas
//repas 0: tous les repas
//repas 1: petit dejeuner
//repas 2: dejeuner
//repas 3: gouter de 16h
//repas 4: diner
function calculette_besoin_par_jour_repas($atts) {
extract( shortcode_atts( array(
      'url'     => '',
	  'repas'     => '',
   ), $atts, 'calculettepjrepas' ) );
   $sexe=$_POST['sexe'];   
   $age=$_POST['age'];
   $taille=$_POST['taille'];
	$taille = preg_replace('*,*','.',$taille);
   $poids=$_POST['poids'];
	$poids = preg_replace('*,*','.',$poids);
   $act=$_POST['act'];
if ($sexe==1) {$hek1="checked ";}
else {$hek2="checked ";}
if ($act==2) {$check2="checked ";}
else if ($act==3) {$check3="checked ";}
else {$check1="checked ";}
$obj=$_POST['obj'];
	$obj = preg_replace('*,*','.',$obj);

if ($repas=="0") {$fintitre = "par repas";}
else if ($repas=="1") {$fintitre = "pour le petit-déjeuner";}
else if ($repas=="2") {$fintitre = "pour le déjeuner";}
else if ($repas=="3") {$fintitre = "pour le goûter de 16h";}
else if ($repas=="4") {$fintitre = "pour le dîner";}


   $codehtml = <<<EOT
<div id="resultat1"> </div>
			<div class="ocm-titre1">Calculette du besoin par jour $fintitre</div>   
			<div class="ocm-bl1">
<form name="imcform" class="ocm-form" method="post" action="#besoin">
<span class="rosep">Vous êtes</span>
<ul class="ul_calc"> 
<li><input id="femme" name="sexe" value="2" type="radio" $hek2/><label for="femme">Une femme</label></li> 
<li><input id="homme" name="sexe" value="1" type="radio" $hek1/><label for="homme">Un homme</label></li></ul>
<span class="rosep">Votre niveau d’activité</span>
<ul class="ul_calc"> 
<li><input id="sedentaire" name="act" value="1" type="radio" $check1/><label for="sedentaire">Sédentaire</label></li>
<li><input id="actif" name="act" value="2" type="radio" $check2/><label for="actif">Actif</label></li>
<li><input id="sportif" name="act" value="3" type="radio" $check3/><label for="sportif">Sportif</label></li>
</ul>
<div class="clear">
<div class="ocm-col3"><span class="rosep">Votre âge</span><br><input name="age" class="ocm-input1" value="$age" type="text"></div>
<div class="ocm-col3"><span class="rosep">Votre taille (cm)</span><br><input name="taille" class="ocm-input1" value="$taille" type="text"></div>
<div class="ocm-col3"><span class="rosep">Votre poids (KG)</span><br><input name="poids" class="ocm-input1" value="$poids" type="text"></div>
</div><div id="besoin" class="centrage">
<input name="valider" value="CALCULER" type="submit">
</div>  
</form>
<div class="clear-zero">&nbsp;</div>
</div>
EOT;
if (isset($_POST['valider'])) {
   if ($sexe=="2") {$MB=(230*pow($poids,(0.48))*pow(($taille/100),(0.5))*pow($age,(-0.13)));}
   else if ($sexe=="1") {$MB=(259*pow($poids,(0.48))*pow(($taille/100),(0.5))*pow($age,(-0.13)));}
$MB=round($MB,0);
if ($act=="1") {$BC=$MB*1.37;}
else if ($act=="2") {$BC=$MB*1.55;}
else if ($act=="3") {$BC=$MB*1.8;}
$BC=round($BC,0);

$Kr1 = $BC*0.25;
$Kr1=round($Kr1,0);
$Kr2 = $BC*0.4;
$Kr2=round($Kr2,0);
$Kr3 = $BC*0.05;
$Kr3=round($Kr3,0);
$Kr4 = $BC*0.3;
$Kr4=round($Kr4,0);

if ($repas=="0") {
   $vmodele2 = <<<EOT
 <div class="ocm-titre1">Répartition calorique au cours de la journée</div>
</div>
<div class="clear-zero">&nbsp;</div>  
 <div class="float50">
  <div class="ocm-bl4">Petit déjeuner<br /><span>25 %</span></div>
  <div class="ocm-circle"><br><span class="ocm-result14">$Kr1</span><br><span class="ocm-result14p">Kcal</span></div>
</div>  
 <div class="float50">
  <div class="ocm-bl4">Déjeuner<br /><span>40 %</span></div>
  <div class="ocm-circle"><br><span class="ocm-result14">$Kr2</span><br><span class="ocm-result14p">Kcal</span></div>
</div> 
<div class="clear-zero">&nbsp;</div>
 <div class="float50">
  <div class="ocm-bl4">Goûter de 16h<br /><span>5 %</span></div>
  <div class="ocm-circle"><br><span class="ocm-result14">$Kr3</span><br><span class="ocm-result14p">Kcal</span></div>
</div> 
 <div class="float50">
  <div class="ocm-bl4">Dîner<br /><span>30 %</span></div>
  <div class="ocm-circle"><br><span class="ocm-result14">$Kr4</span><br><span class="ocm-result14p">Kcal</span></div>
</div>    
EOT;
}
else if ($repas=="1") {
   $vmodele2 = <<<EOT
<div class="ocm-titre1">Répartition calorique entre le petit-déjeuner et les autres repas</div>
</div>
<div class="clear-zero">&nbsp;</div>
 <div class="float50">
  <div class="ocm-bl4">Petit déjeuner<br /><span>25 %</span></div>
  <div class="ocm-circle"><br><span class="ocm-res14r">$Kr1</span><br><span class="ocm-result14p">Kcal</span></div>
</div>  
 <div class="float50">
  <div class="ocm-bl4fonce">Déjeuner<br /><span>40 %</span></div>
  <div class="ocm-circle"><br><span class="ocm-result14">$Kr2</span><br><span class="ocm-result14p">Kcal</span></div>
</div> 
<div class="clear-zero">&nbsp;</div>
 <div class="float50">
  <div class="ocm-bl4fonce">Goûter de 16h<br /><span>5 %</span></div>
  <div class="ocm-circle"><br><span class="ocm-result14">$Kr3</span><br><span class="ocm-result14p">Kcal</span></div>
</div> 
 <div class="float50">
  <div class="ocm-bl4fonce">Dîner<br /><span>30 %</span></div>
  <div class="ocm-circle"><br><span class="ocm-result14">$Kr4</span><br><span class="ocm-result14p">Kcal</span></div>
</div>    
EOT;
}
else if ($repas=="2") {
   $vmodele2 = <<<EOT
<div class="ocm-titre1">Répartition calorique entre le déjeuner et les autres repas</div>
</div>
<div class="clear-zero">&nbsp;</div>
 <div class="float50">
  <div class="ocm-bl4fonce">Petit déjeuner<br /><span>25 %</span></div>
  <div class="ocm-circle"><br><span class="ocm-result14">$Kr1</span><br><span class="ocm-result14p">Kcal</span></div>
</div>  
 <div class="float50">
  <div class="ocm-bl4">Déjeuner<br /><span>40 %</span></div>
  <div class="ocm-circle"><br><span class="ocm-res14r">$Kr2</span><br><span class="ocm-result14p">Kcal</span></div>
</div> 
<div class="clear-zero">&nbsp;</div>
 <div class="float50">
  <div class="ocm-bl4fonce">Goûter de 16h<br /><span>5 %</span></div>
  <div class="ocm-circle"><br><span class="ocm-result14">$Kr3</span><br><span class="ocm-result14p">Kcal</span></div>
</div> 
 <div class="float50">
  <div class="ocm-bl4fonce">Dîner<br /><span>30 %</span></div>
  <div class="ocm-circle"><br><span class="ocm-result14">$Kr4</span><br><span class="ocm-result14p">Kcal</span></div>
</div>   
EOT;
}
else if ($repas=="3") {
   $vmodele2 = <<<EOT
<div class="ocm-titre1">Répartition calorique entre le goûter et les autres repas</div>
</div>
<div class="clear-zero">&nbsp;</div>
 <div class="float50">
  <div class="ocm-bl4fonce">Petit déjeuner<br /><span>25 %</span></div>
  <div class="ocm-circle"><br><span class="ocm-result14">$Kr1</span><br><span class="ocm-result14p">Kcal</span></div>
</div>  
 <div class="float50">
  <div class="ocm-bl4fonce">Déjeuner<br /><span>40 %</span></div>
  <div class="ocm-circle"><br><span class="ocm-result14">$Kr2</span><br><span class="ocm-result14p">Kcal</span></div>
</div> 
<div class="clear-zero">&nbsp;</div>
 <div class="float50">
  <div class="ocm-bl4">Goûter de 16h<br /><span>5 %</span></div>
  <div class="ocm-circle"><br><span class="ocm-res14r">$Kr3</span><br><span class="ocm-result14p">Kcal</span></div>
</div> 
 <div class="float50">
  <div class="ocm-bl4fonce">Dîner<br /><span>30 %</span></div>
  <div class="ocm-circle"><br><span class="ocm-result14">$Kr4</span><br><span class="ocm-result14p">Kcal</span></div>
</div>    
EOT;
}
else if ($repas=="4") {
   $vmodele2 = <<<EOT
<div class="ocm-titre1">Répartition calorique entre le dîner et les autres repas</div>
</div>
<div class="clear-zero">&nbsp;</div>
 <div class="float50">
  <div class="ocm-bl4fonce">Petit déjeuner<br /><span>25 %</span></div>
  <div class="ocm-circle"><br><span class="ocm-result14">$Kr1</span><br><span class="ocm-result14p">Kcal</span></div>
</div>  
 <div class="float50">
  <div class="ocm-bl4fonce">Déjeuner<br /><span>40 %</span></div>
  <div class="ocm-circle"><br><span class="ocm-result14">$Kr2</span><br><span class="ocm-result14p">Kcal</span></div>
</div> 
<div class="clear-zero">&nbsp;</div>
 <div class="float50">
  <div class="ocm-bl4fonce">Goûter de 16h<br /><span>5 %</span></div>
  <div class="ocm-circle"><br><span class="ocm-result14">$Kr3</span><br><span class="ocm-result14p">Kcal</span></div>
</div> 
 <div class="float50">
  <div class="ocm-bl4">Dîner<br /><span>30 %</span></div>
  <div class="ocm-circle"><br><span class="ocm-res14r">$Kr4</span><br><span class="ocm-result14p">Kcal</span></div>
</div>    
EOT;
}

   $codehtml .= <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/titre-besoin.png">
</div>
<div class="ocm-bl2">
<div class="clear-zero">&nbsp;</div>
<div class="float50">
  <div class="ocm-bl4">Métabolisme de base<br /><span>Dépense au repos</span></div>
  <div class="ocm-circle"><br><span class="ocm-result14">$MB</span><br><span class="ocm-result14p">Kcal</span></div>
</div>
<div class="float50">
    <div class="ocm-bl4">Besoin en calories<br /><span>Dépense énergétique totale</span></div>
	<div class="ocm-circle"><br><span class="ocm-result14">$BC</span><br><span class="ocm-result14p">Kcal</span></div>
</div>
<div class="clear-zero">&nbsp;</div>
<div class="ocm-noir">
$vmodele2
<div class="clear-zero">&nbsp;</div> 
</div>
<div class="ocm-bl1">
Vous souhaitez perdre quelques kilos? Votre objectif de poids est-il réaliste? Poursuivez l'analyse en calculant votre poids idéal et en découvrant nos solutions:
<form name="anaform" class="ocm-form" method="post" action="#analyse">
<div id="analyse" class="clear">
<div class="centrage"><span class="rosep">Quel est votre objectif de poids (en KG)</span><br><input name="obj" class="ocm-input1" value="$obj" type="text"></div></div>
<div class="clear">
<input type="hidden" name="sexe" value="$sexe" />
<input type="hidden" name="act" value="$act" />
<input type="hidden" name="age" value="$age" />
<input type="hidden" name="taille" value="$taille" />
<input type="hidden" name="poids" value="$poids" />
<input type="hidden" name="valider" value="CALCULER" />
<div class="centrage">&nbsp;<br><input name="valider2" value="ANALYSER" type="submit"></div>
</form>
<div class="clear-zero">&nbsp;</div>
</div></div>
EOT;
}

if (isset($_POST['valider2'])) {
 $IMC=($poids/(($taille/100)*($taille/100)));
   $IMC=round($IMC,1);
      if ($IMC<18.5) {
   $STATUT= "maigreur";
   $IMAGE="imc-statut-maigreur.png";
   }
   else if ($IMC<25) {
   $STATUT= "corpulence normale";
   $IMAGE="imc-statut-normal.png";
   }
   else if ($IMC<30) {
   $STATUT= "surpoids";
   $IMAGE="imc-statut-suroids.png";
   } 
   else {
   $STATUT= "obèsité";
   $IMAGE="imc-statut-obesite.png";
   }
   
      if ($sexe=="2") {$PIL=($taille-100-(($taille-150)/2.5));}
   else if ($sexe=="1") {$PIL=($taille-100-(($taille-150)/4));}
$PIL=round($PIL,1);
   
   $pmaa = (($obj+$PIL)/2);
   $kap = ($poids-$pmaa);
   $vakap = abs($kap);
   
   if ($kap>0) {$textp="Poids moyen à perdre";}
   else if ($kap<0) {$textp="Poids moyen à gagner";}
   else {$textp="Vous êtes à l'équilibre";} 
   
       if ($kap<0.1) {$texto1="Vous n'avez pas de poids à perdre. Félicitations.";
   $lienb="<div class=\"ocm-liena\"><a href=\"/categorie-produit/coffret-minceur-box-de-regime/\">VOIR TOUS NOS PROGRAMMES</a></div>";	   
	   }
   else if ($kap<1) {$texto1="Vous êtes presque à votre poids d'équilibre. Vous pouvez perdre ce léger superflus en découvrant notre programme.";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-s-a-3-kg-14-jours/\">VOIR MON PROGRAMME</a></div>";
   }	   
   else if ($kap<3) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">2  semaines!</span>";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-s-a-3-kg-14-jours/\">VOIR MON PROGRAMME</a></div>";
   }
   else if ($kap<6) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">4  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-m-3-a-6-kg-28-jours/\">VOIR MON PROGRAMME</a></div>";}
   else if ($kap<9) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">6  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-l-6-a-9-kg-42-jours/\">VOIR MON PROGRAMME</a></div>";}
   else if ($kap<12) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">10  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xl-9-a-12-kg-56-jours/\">VOIR MON PROGRAMME</a></div>";}
    else if ($kap<15) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">10  semaines!</span>";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xxl-12-a-15-kg-70-jours/\">VOIR MON PROGRAMME</a></div>";}
   else {$texto1="En étant raisonnable vous pouvez vous fixer un objectif d'environ <span class=\"rosep\">15 kg</span> et l'atteindre au bout de <span class=\"rosep\">10 semaines!</span>";
     $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xxl-12-a-15-kg-70-jours/\">VOIR MON PROGRAMME</a></div>";} 
   
   $codehtml .= <<<EOT
<div class="ocm-noir"><img src="/wp-content/uploads/titre-analyse.png">
</div>
<div class="ocm-bl3">
<div class="ocm-blancg">Votre Indice de Masse Corporelle</div>
<p>IMC = <span class="rosegrasspan">$IMC</span><br />
Statut = <span class="rosegrasspan">$STATUT</span></p>
 <img class="aligncenter" src="/wp-content/uploads/$IMAGE"> 
<div class="ocm-blancg">Vos indicateurs de poids</div>
 <p>
  Votre poids actuel = <span class="rosegrasspan">$poids</span> kg<br />
 Poids idéal (formule de Lorentz) = <span class="rosegrasspan">$PIL</span> kg<br />
Objectif personnel = <span class="rosegrasspan">$obj</span> kg
</p>
<div class="float50">
  <div class="ocm-bl4">Poids moyen à atteindre</div>
  <div class="ocm-circle"><br><span class="ocm-res14r">$pmaa</span><br><span class="result14p">Kg</span></div>
</div>
<div class="float50">
    <div class="ocm-bl4">$textp</div>
	<div class="ocm-circle"><br><span class="ocm-res14r">$vakap</span><br><span class="result14p">Kg</span></div>
</div>
<div class="clear-zero">&nbsp;</div>
</div>
<div class="ocm-noir">
<img src="/wp-content/uploads/titre-solution.png">
</div>
<div class="ocm-bl1">
<div class="clear">
<div class="centrage"><span class="rosep">Quel objectif et comment le concrétiser?</span></div>
</div>
$texto1
<div class="clear-zero">&nbsp;</div>
$lienb
<img src="/wp-content/uploads/ligne-objectif-final.png">
</div>
EOT;
}

   $codehtml .= <<<EOT
<div class="clear-zero">&nbsp;</div>
EOT;


return $codehtml;
}
add_shortcode( 'calculettebpjrepas', 'calculette_besoin_par_jour_repas' );




//Calculette outil bilan

function calculette_outil_bilan($atts) {
extract( shortcode_atts( array(
      'url'     => '',
   ), $atts, 'calculetteoutbil' ) );
   $sexe=$_POST['sexe'];   
   $age=$_POST['age'];
   $taille=$_POST['taille'];
	$taille = preg_replace('*,*','.',$taille);
   $poids=$_POST['poids'];
	$poids = preg_replace('*,*','.',$poids);
	$obj=$_POST['obj'];
	$obj = preg_replace('*,*','.',$obj);
   $act=$_POST['act'];
if ($sexe==1) {$hek1="checked ";}
else {$hek2="checked ";}
$obj=$_POST['obj'];
	$obj = preg_replace('*,*','.',$obj);
   $codehtml = <<<EOT
<div id="resultat1"> </div>
			<div class="ocm-titre1">Mon bilan et ma solution!</div>   
			<div class="ocm-bl1">
<form name="imcform" class="ocm-form" method="post" action="#besoin">
<span class="rosep">Vous êtes</span>
<ul class="ul_calc"> 
<li><input id="femme" name="sexe" value="2" type="radio" $hek2/><label for="femme">Une femme</label></li> 
<li><input id="homme" name="sexe" value="1" type="radio" $hek1/><label for="homme">Un homme</label></li></ul>
<div class="clear">
<div class="ocm-col3"><span class="rosep">Votre âge</span><br><input name="age" class="ocm-input1" value="$age" type="text"></div>
<div class="ocm-col3"><span class="rosep">Votre taille (cm)</span><br><input name="taille" class="ocm-input1" value="$taille" type="text"></div>
<div class="ocm-col3"><span class="rosep">Votre poids (KG)</span><br><input name="poids" class="ocm-input1" value="$poids" type="text"></div>
</div>
<div class="clear">
<div class="centrage"><span class="rosep">Quel est votre objectif de poids? (en KG)</span><br><input name="obj" class="ocm-input1" value="$obj" type="text"></div></div>
<div class="clear"><div id="besoin" class="centrage"><br />&nbsp;
<input name="valider" value="CALCULER" type="submit">
</div> </div>
</form>
<div class="clear-zero">&nbsp;</div>
</div>
EOT;



if (isset($_POST['valider'])) {
 $IMC=($poids/(($taille/100)*($taille/100)));
   $IMC=round($IMC,1);
      if ($IMC<18.5) {
   $STATUT= "maigreur";
   $IMAGE="imc-statut-maigreur.png";
   }
   else if ($IMC<25) {
   $STATUT= "corpulence normale";
   $IMAGE="imc-statut-normal.png";
   }
   else if ($IMC<30) {
   $STATUT= "surpoids";
   $IMAGE="imc-statut-suroids.png";
   } 
   else {
   $STATUT= "obèsité";
   $IMAGE="imc-statut-obesite.png";
   }
   
      if ($sexe=="2") {$PIL=($taille-100-(($taille-150)/2.5));}
   else if ($sexe=="1") {$PIL=($taille-100-(($taille-150)/4));}
$PIL=round($PIL,1);
   
   $pmaa = (($obj+$PIL)/2);
   $kap = ($poids-$pmaa);
   $vakap = abs($kap);
   
       if ($kap>0) {$textp="Poids moyen à perdre";}
   else if ($kap<0) {$textp="Poids moyen à gagner";}
   else {$textp="Vous êtes à l'équilibre";} 
   
       if ($kap<0.1) {$texto1="Vous n'avez pas de poids à perdre. Félicitations.";
   $lienb="<div class=\"ocm-liena\"><a href=\"/categorie-produit/coffret-minceur-box-de-regime/\">VOIR TOUS NOS PROGRAMMES</a></div>";	   
	   }
   else if ($kap<1) {$texto1="Vous êtes presque à votre poids d'équilibre. Vous pouvez perdre ce léger superflus en découvrant notre programme.";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-s-a-3-kg-14-jours/\">VOIR MON PROGRAMME</a></div>";
   }	   
   else if ($kap<3) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">2  semaines!</span>";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-s-a-3-kg-14-jours/\">VOIR MON PROGRAMME</a></div>";
   }
   else if ($kap<6) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">4  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-m-3-a-6-kg-28-jours/\">VOIR MON PROGRAMME</a></div>";}
   else if ($kap<9) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">6  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-l-6-a-9-kg-42-jours/\">VOIR MON PROGRAMME</a></div>";}
   else if ($kap<12) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">10  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xl-9-a-12-kg-56-jours/\">VOIR MON PROGRAMME</a></div>";}
    else if ($kap<15) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">10  semaines!</span>";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xxl-12-a-15-kg-70-jours/\">VOIR MON PROGRAMME</a></div>";}
   else {$texto1="En étant raisonnable vous pouvez vous fixer un objectif d'environ <span class=\"rosep\">15 kg</span> et l'atteindre au bout de <span class=\"rosep\">10 semaines!</span>";
     $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xxl-12-a-15-kg-70-jours/\">VOIR MON PROGRAMME</a></div>";} 
   
   $codehtml .= <<<EOT
<div class="ocm-noir"><img src="/wp-content/uploads/outil-bilan-t1.png">
</div>
<div class="ocm-bl3">
<div class="ocm-blancg">Votre Indice de Masse Corporelle</div>
<p>IMC = <span class="rosegrasspan">$IMC</span><br />
Statut = <span class="rosegrasspan">$STATUT</span></p>
 <img class="aligncenter" src="/wp-content/uploads/$IMAGE"> 
<div class="ocm-blancg">Vos indicateurs de poids</div>
 <p>
  Votre poids actuel = <span class="rosegrasspan">$poids</span> kg<br />
 Poids idéal (formule de Lorentz) = <span class="rosegrasspan">$PIL</span> kg<br />
Objectif personnel = <span class="rosegrasspan">$obj</span> kg
</p>
<div class="float50">
  <div class="ocm-bl4">Poids moyen à atteindre</div>
  <div class="ocm-circle"><br><span class="ocm-res14r">$pmaa</span><br><span class="result14p">Kg</span></div>
</div>
<div class="float50">
    <div class="ocm-bl4">$textp</div>
	<div class="ocm-circle"><br><span class="ocm-res14r">$vakap</span><br><span class="result14p">Kg</span></div>
</div>
<div class="clear-zero">&nbsp;</div>
</div>
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-bilan-t2.png">
</div>
<div class="ocm-bl1">
<div class="clear">
<div class="centrage"><span class="rosep">Quel objectif et comment le concrétiser?</span></div>
</div>
$texto1
<div class="clear-zero">&nbsp;</div>
$lienb
<img src="/wp-content/uploads/ligne-objectif-final.png">
</div>
EOT;
}

   $codehtml .= <<<EOT
<div class="clear-zero">&nbsp;</div>
EOT;


return $codehtml;
}
add_shortcode( 'calculetteoutbil', 'calculette_outil_bilan' );




//Calculette outil bilan sans coffret

function calculette_outil_bilan2($atts) {
extract( shortcode_atts( array(
      'url'     => '',
   ), $atts, 'calculetteoutbilsans' ) );
   $sexe=$_POST['sexe'];   
   $age=$_POST['age'];
   $taille=$_POST['taille'];
	$taille = preg_replace('*,*','.',$taille);
   $poids=$_POST['poids'];
	$poids = preg_replace('*,*','.',$poids);
	$obj=$_POST['obj'];
	$obj = preg_replace('*,*','.',$obj);
   $act=$_POST['act'];
if ($sexe==1) {$hek1="checked ";}
else {$hek2="checked ";}
$obj=$_POST['obj'];
	$obj = preg_replace('*,*','.',$obj);
   $codehtml = <<<EOT
<div id="resultat1"> </div>
			<div class="ocm-titre1">Mon bilan et ma solution!</div>   
			<div class="ocm-bl1">
<form name="imcform" class="ocm-form" method="post" action="#besoin">
<span class="rosep">Vous êtes</span>
<ul class="ul_calc"> 
<li><input id="femme" name="sexe" value="2" type="radio" $hek2/><label for="femme">Une femme</label></li> 
<li><input id="homme" name="sexe" value="1" type="radio" $hek1/><label for="homme">Un homme</label></li></ul>
<div class="clear">
<div class="ocm-col3"><span class="rosep">Votre âge</span><br><input name="age" class="ocm-input1" value="$age" type="text"></div>
<div class="ocm-col3"><span class="rosep">Votre taille (cm)</span><br><input name="taille" class="ocm-input1" value="$taille" type="text"></div>
<div class="ocm-col3"><span class="rosep">Votre poids (KG)</span><br><input name="poids" class="ocm-input1" value="$poids" type="text"></div>
</div>
<div class="clear">
<div class="centrage"><span class="rosep">Quel est votre objectif de poids? (en KG)</span><br><input name="obj" class="ocm-input1" value="$obj" type="text"></div></div>
<div class="clear"><div id="besoin" class="centrage"><br />&nbsp;
<input name="valider" value="CALCULER" type="submit">
</div> </div>
</form>
<div class="clear-zero">&nbsp;</div>
</div>
EOT;



if (isset($_POST['valider'])) {
 $IMC=($poids/(($taille/100)*($taille/100)));
   $IMC=round($IMC,1);
      if ($IMC<18.5) {
   $STATUT= "maigreur";
   $IMAGE="imc-statut-maigreur.png";
   }
   else if ($IMC<25) {
   $STATUT= "corpulence normale";
   $IMAGE="imc-statut-normal.png";
   }
   else if ($IMC<30) {
   $STATUT= "surpoids";
   $IMAGE="imc-statut-suroids.png";
   } 
   else {
   $STATUT= "obèsité";
   $IMAGE="imc-statut-obesite.png";
   }
   
      if ($sexe=="2") {$PIL=($taille-100-(($taille-150)/2.5));}
   else if ($sexe=="1") {$PIL=($taille-100-(($taille-150)/4));}
$PIL=round($PIL,1);
   
   $pmaa = (($obj+$PIL)/2);
   $kap = ($poids-$pmaa);
   $vakap = abs($kap);
   
       if ($kap>0) {$textp="Poids moyen à perdre";}
   else if ($kap<0) {$textp="Poids moyen à gagner";}
   else {$textp="Vous êtes à l'équilibre";} 
   
       if ($kap<0.1) {$texto1="Vous n'avez pas de poids à perdre. Félicitations.";
   $lienb="<div class=\"ocm-liena\"><a href=\"/categorie-produit/coffret-minceur-box-de-regime/\">VOIR TOUS NOS PROGRAMMES</a></div>";	   
	   }
   else if ($kap<1) {$texto1="Vous êtes presque à votre poids d'équilibre. Vous pouvez perdre ce léger superflus en découvrant notre programme.";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-s-a-3-kg-14-jours/\">VOIR MON PROGRAMME</a></div>";
   }	   
   else if ($kap<3) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">2  semaines!</span>";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-s-a-3-kg-14-jours/\">VOIR MON PROGRAMME</a></div>";
   }
   else if ($kap<6) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">4  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-m-3-a-6-kg-28-jours/\">VOIR MON PROGRAMME</a></div>";}
   else if ($kap<9) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">6  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-l-6-a-9-kg-42-jours/\">VOIR MON PROGRAMME</a></div>";}
   else if ($kap<12) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">10  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xl-9-a-12-kg-56-jours/\">VOIR MON PROGRAMME</a></div>";}
    else if ($kap<15) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">10  semaines!</span>";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xxl-12-a-15-kg-70-jours/\">VOIR MON PROGRAMME</a></div>";}
   else {$texto1="En étant raisonnable vous pouvez vous fixer un objectif d'environ <span class=\"rosep\">15 kg</span> et l'atteindre au bout de <span class=\"rosep\">10 semaines!</span>";
     $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xxl-12-a-15-kg-70-jours/\">VOIR MON PROGRAMME</a></div>";} 
   
   $codehtml .= <<<EOT
<div class="ocm-noir"><img src="/wp-content/uploads/outil-bilan-t1.png">
</div>
<div class="ocm-bl3">
<div class="ocm-blancg">Votre Indice de Masse Corporelle</div>
<p>IMC = <span class="rosegrasspan">$IMC</span><br />
Statut = <span class="rosegrasspan">$STATUT</span></p>
 <img class="aligncenter" src="/wp-content/uploads/$IMAGE"> 
<div class="ocm-blancg">Vos indicateurs de poids</div>
 <p>
  Votre poids actuel = <span class="rosegrasspan">$poids</span> kg<br />
 Poids idéal (formule de Lorentz) = <span class="rosegrasspan">$PIL</span> kg<br />
Objectif personnel = <span class="rosegrasspan">$obj</span> kg
</p>
<div class="float50">
  <div class="ocm-bl4">Poids moyen à atteindre</div>
  <div class="ocm-circle"><br><span class="ocm-res14r">$pmaa</span><br><span class="result14p">Kg</span></div>
</div>
<div class="float50">
    <div class="ocm-bl4">$textp</div>
	<div class="ocm-circle"><br><span class="ocm-res14r">$vakap</span><br><span class="result14p">Kg</span></div>
</div>
<div class="clear-zero">&nbsp;</div>
</div>
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-bilan-t2.png">
</div>
<div class="ocm-bl1">
<div class="clear">
<div class="centrage"><span class="rosep">Quel objectif et comment le concrétiser?</span></div>
</div>
$texto1
<div class="clear-zero">&nbsp;</div>
$lienb
<img src="/wp-content/uploads/ligne-objectif-final.png">
</div>
EOT;
}

   $codehtml .= <<<EOT
<div class="clear-zero">&nbsp;</div>
EOT;


return $codehtml;
}
add_shortcode( 'calculetteoutbilsans', 'calculette_outil_bilan2' );


//Calculette des depenses par sport avec analyse
function calculette_sport_depense($atts) {
extract( shortcode_atts( array(
      'url'     => '',
	  'sport'     => '',
   ), $atts, 'calculettesportdep' ) );
   
  
   $sexe=$_POST['sexe'];   
   $age=$_POST['age'];
   $taille=$_POST['taille'];
	$taille = preg_replace('*,*','.',$taille);
   $poids=$_POST['poids'];
	$poids = preg_replace('*,*','.',$poids);
   $act=$_POST['act'];
if ($sexe==1) {$hek1="checked ";}
else {$hek2="checked ";}

$obj=$_POST['obj'];
	$obj = preg_replace('*,*','.',$obj);
	
	if (isset($_POST['sport'])) {$sport=$_POST['sport'];}
	else {$sport=$sport;} 
		
	$temps=$_POST['temps'];	
	
   $codehtml = <<<EOT
<div id="resultat1"> </div>
			<div class="ocm-titre1">Calculette des dépenses en calories par sport</div>   
			<div class="ocm-bl1">

<form name="imcform" class="ocm-form" method="post" action="#besoin">

<div class="clear">
<em>En sélectionnant une activité sportive de votre choix, cette calculette RegiVia des dépenses énergétiques vous permettra de connaître pour chaque sport et selon votre poids, le nombre de calories que vous allez dépenser sur un temps donné.</em><br />&nbsp;<br />
<div class="ocm-col2"><span class="rosep">Votre sport</span><br>
<select name="sport">
<option value="$sport">$sport</option>
<option value="Aérobic intensité normale">Aérobic intensité normale</option>
<option value="Aérobic haute intensité">Aérobic haute intensité</option>
<option value="Aïkido">Aïkido</option>
<option value="Aquabiking">Aquabiking</option> 
<option value="Aquagym">Aquagym</option>
<option value="Arts martiaux">Art martiaux (en général)</option>
<option value="Aviron modéré">Aviron modéré</option>
<option value="Aviron intense">Aviron intense</option>
<option value="Badminton calme">Badminton calme</option>
<option value="Badminton intermédiare">Badminton intermédiare</option>
<option value="Badminton intense">Badminton intense</option>
<option value="Ballet danse">Ballet danse</option>
<option value="Basket récréatif">Basket récréatif</option>
<option value="Basket compétition">Basket compétition</option>
<option value="Bicyclette Vélo Effort léger">Bicyclette Vélo Effort léger</option>
<option value="Vélo Effort moyen">Vélo Effort moyen</option>
<option value="Vélo intense 22-30km/h">Vélo intense 22-30km/h</option>
<option value="Vélo très intense sup à 30km/h">Vélo très intense sup à 30km/h</option>
<option value="Vélo elliptique faible">Vélo elliptique faible</option>
<option value="Vélo elliptique moyen">Vélo elliptique moyen</option>
<option value="Vélo elliptique intense">Vélo elliptique intense</option>
<option value="Vélo stationnaire faible">Vélo stationnaire faible</option>
<option value="Vélo stationnaire moyen">Vélo stationnaire moyen</option>
<option value="Vélo stationnaire intense">Vélo stationnaire intense</option>
<option value="Vélo stationnaire très intense">Vélo stationnaire très intense</option>
<option value="Boxe intensité faible">Boxe intensité faible</option>
<option value="Boxe intensité modérée">Boxe intensité modérée</option>
<option value="Boxe intensité forte">Boxe intensité forte</option>
<option value="Corde à sauter modérée">Corde à sauter modérée</option>
<option value="Corde à sauter intense">Corde à sauter intense</option>
<option value="Course à pied faible avec marche">Course à pied faible avec marche</option>
<option value="Course à pied faible">Course à pied faible</option>
<option value="Course à pied 8km h">Course à pied 8km h</option>
<option value="Course à pied 9,5km/h">Course à pied 9,5km/h</option>
<option value="Course à pied 13km/h">Course à pied 13km/h</option>
<option value="Course à pied cross-country">Course à pied cross-country</option>
<option value="Course à pied sur place">Course à pied sur place</option>
<option value="Course sur tapis 8km h">Course sur tapis 8km h</option>
<option value="Course sur tapis 9,5km/h">Course sur tapis 9,5km/h</option>
<option value="Course sur tapis 13km/h">Course sur tapis 13km/h</option>
<option value="Danse calme">Danse calme</option>
<option value="Danse modérée">Danse modérée</option>
<option value="Danse intense">Danse intense</option>
<option value="Equitation au pas">Equitation au pas</option>
<option value="Equitation trot et galop">Equitation trot et galop</option>
<option value="Escalade">Escalade</option>
<option value="Escrime récréatif">Escrime récréatif</option>
<option value="Escrime intense">Escrime intense</option>
<option value="Fitness intensité faible">Fitness intensité faible</option>
<option value="Fitness intensité moyenne">Fitness intensité moyenne</option>
<option value="Fitness intensité forte">Fitness intensité forte</option>
<option value="Football modéré">Football modéré</option>
<option value="Football intense">Football intense</option>
<option value="Golf à pied">Golf à pied</option>
<option value="Golf en voiturette">Golf en voiturette</option>
<option value="Gymnastique">Gymnastique</option>
<option value="Halterophilie">Halterophilie</option>
<option value="Hand-ball">Hand-ball</option>
<option value="Hockey sur gazon">Hockey sur gazon</option>
<option value="Hockey sur glace">Hockey sur glace</option>
<option value="Judo">Judo</option>
<option value="Karaté">Karaté</option>
<option value="Kayak eaux calmes">Kayak eaux calmes</option>
<option value="Kayak eaux vives">Kayak eaux vives</option>
<option value="Kick Boxing">Kick Boxing</option>
<option value="Luge skeleton bobsleigh">Luge skeleton bobsleigh</option>
<option value="Marche ordinaire 5km h">Marche ordinaire 5km h</option>
<option value="Marche rapide">Marche rapide</option>
<option value="Marche nordique">Marche nordique</option>
<option value="Marche olympique">Marche olympique</option>
<option value="Musculation">Musculation</option>
<option value="Natation récréatif">Natation récréatif</option>
<option value="Natation style libre modéré">Natation style libre modéré</option>
<option value="Natation style libre intense">Natation style libre intense</option>
<option value="Natation brasse">Natation brasse</option>
<option value="Natation crawl">Natation crawl</option>
<option value="Natation dos">Natation dos</option>
<option value="Natation papillon">Natation papillon</option>
<option value="Natation nage synchronisée">Natation nage synchronisée</option>
<option value="Patinage récréatif">Patinage récréatif</option>
<option value="Patinage intense">Patinage intense</option>
<option value="Patinage vitesse compétition">Patinage vitesse compétition</option>
<option value="Patinage roller récréatif">Patinage roller récréatif</option>
<option value="Patinage roller intense">Patinage roller intense</option>
<option value="Plongée sous-marine">Plongée sous-marine</option>
<option value="Polo">Polo</option>
<option value="Rafting">Rafting</option>
<option value="Rameur d appartement">Rameur d appartement</option>
<option value="Randonnée">Randonnée</option>
<option value="Randonnée avec sac">Randonnée avec sac</option>
<option value="Raquette à neige">Raquette à neige</option>
<option value="Rugby">Rugby</option>
<option value="Skate">Skate</option>
<option value="Ski alpin léger">Ski alpin léger</option>
<option value="Ski alpin modéré">Ski alpin modéré</option>
<option value="Ski alpin intense">Ski alpin intense</option>
<option value="Ski nautique">Ski nautique</option>
<option value="Ski randonnée modéré 7k/h">Ski randonnée modéré 7k/h</option>
<option value="Ski randonnée intense 10.5k/h">Ski randonnée intense 10.5k/h</option>
<option value="Squash récréatif">Squash récréatif</option>
<option value="Squash intense">Squash intense</option>
<option value="Step modéré">Step modéré</option>
<option value="Step intense">Step intense</option>
<option value="Surf">Surf</option>
<option value="Taï-chi">Taï-chi</option>
<option value="Tennis de table">Tennis de table</option>
<option value="Tennis en simple">Tennis en simple</option>
<option value="Tennis en double">Tennis en double</option>
<option value="Volley-ball récréatif">Volley-ball récréatif</option>
<option value="Volley-ball compétition">Volley-ball compétition</option>
<option value="VTT Vélo Tout Terrain">VTT Vélo Tout Terrain</option>
<option value="Water Polo">Water Polo</option>
<option value="Yoga">Yoga</option>
<option value="Zumba">Zumba</option>
</select>
</div>
<div class="ocm-col2"><span class="rosep">Temps en minutes</span><br><input name="temps" class="ocm-input1" value="$temps" type="text"></div>
</div>
<span class="rosep">Vous êtes</span>
<ul class="ul_calc"> 
<li><input id="femme" name="sexe" value="2" type="radio" $hek2/><label for="femme">Une femme</label></li> 
<li><input id="homme" name="sexe" value="1" type="radio" $hek1/><label for="homme">Un homme</label></li></ul>
<div class="clear">
<div class="ocm-col3"><span class="rosep">Votre âge</span><br><input name="age" class="ocm-input1" value="$age" type="text"></div>
<div class="ocm-col3"><span class="rosep">Votre taille (cm)</span><br><input name="taille" class="ocm-input1" value="$taille" type="text"></div>
<div class="ocm-col3"><span class="rosep">Votre poids (KG)</span><br><input name="poids" class="ocm-input1" value="$poids" type="text"></div>
</div><div id="besoin" class="centrage">
<input name="valider" value="CALCULER" type="submit">
</div>  
</form>
<div class="clear-zero">&nbsp;</div>
</div>
EOT;
if (isset($_POST['valider'])) {


if ($sport=="Aérobic intensité normale") {$MET=5.5;$lien="depenses-caloriques-consommees-pour-l-aerobic/";}
	else if ($sport=="Aérobic haute intensité") {$MET=7.5;$lien="depenses-caloriques-consommees-pour-l-aerobic/";}
	else if ($sport=="Aïkido") {$MET=9;$lien="depenses-caloriques-consommees-pour-l-aikido/";}
	else if ($sport=="Aquabiking") {$MET=8;$lien="aquabike-depenses-caloriques-consommees-pour-l-aquabiking/";}
	else if ($sport=="Aquagym") {$MET=4;$lien="depenses-caloriques-consommees-pour-l-aquagym/";}
	else if ($sport=="Arts martiaux") {$MET=4;$lien="depenses-caloriques-consommees-pour-les-arts-martiaux/";}
	else if ($sport=="Aviron modéré") {$MET=7;$lien="depenses-caloriques-consommees-pour-l-aviron/";}
	else if ($sport=="Aviron intense") {$MET=11;$lien="depenses-caloriques-consommees-pour-l-aviron/";}
	else if ($sport=="Badminton calme") {$MET=4.5;$lien="depenses-caloriques-consommees-pour-le-badminton/";}
	else if ($sport=="Badminton intermédiare") {$MET=7;$lien="depenses-caloriques-consommees-pour-le-badminton/";}
	else if ($sport=="Badminton intense") {$MET=10;$lien="depenses-caloriques-consommees-pour-le-badminton/";}
	else if ($sport=="Ballet danse") {$MET=6;$lien="depenses-caloriques-consommees-pour-le-ballet-danse/";}
	else if ($sport=="Basket récréatif") {$MET=6;$lien="depenses-caloriques-consommees-pour-le-basket-ball/";}
	else if ($sport=="Basket compétition") {$MET=8;$lien="depenses-caloriques-consommees-pour-le-basket-ball/";}
	else if ($sport=="Bicyclette Vélo Effort léger") {$MET=4;$lien="depenses-caloriques-consommees-pour-le-velo-bicyclette-et-cyclisme/";}
	else if ($sport=="Vélo Effort moyen") {$MET=7;$lien="depenses-caloriques-consommees-pour-le-velo-bicyclette-et-cyclisme/";}
	else if ($sport=="Vélo intense 22-30km/h") {$MET=10;$lien="depenses-caloriques-consommees-pour-le-velo-bicyclette-et-cyclisme/";}
	else if ($sport=="Vélo très intense sup à 30km/h") {$MET=14;$lien="depenses-caloriques-consommees-pour-le-velo-bicyclette-et-cyclisme/";}
	else if ($sport=="Vélo elliptique faible") {$MET=6;$lien="depenses-caloriques-consommees-pour-le-velo-elliptique/";}
	else if ($sport=="Vélo elliptique moyen") {$MET=8;$lien="depenses-caloriques-consommees-pour-le-velo-elliptique/";}
	else if ($sport=="Vélo elliptique intense") {$MET=10;$lien="depenses-caloriques-consommees-pour-le-velo-elliptique/";}
	else if ($sport=="Vélo stationnaire faible") {$MET=3;$lien="depenses-caloriques-consommees-pour-le-velo-d-appartement-stationnaire/";}
	else if ($sport=="Vélo stationnaire moyen") {$MET=5.5;$lien="depenses-caloriques-consommees-pour-le-velo-d-appartement-stationnaire/";}
	else if ($sport=="Vélo stationnaire intense") {$MET=7;$lien="depenses-caloriques-consommees-pour-le-velo-d-appartement-stationnaire/";}
	else if ($sport=="Vélo stationnaire très intense") {$MET=11;$lien="depenses-caloriques-consommees-pour-le-velo-d-appartement-stationnaire/";}
	else if ($sport=="Boxe intensité faible") {$MET=6;$lien="depenses-caloriques-consommees-pour-la-boxe/";}
	else if ($sport=="Boxe intensité modérée") {$MET=9;$lien="depenses-caloriques-consommees-pour-la-boxe/";}
	else if ($sport=="Boxe intensité forte") {$MET=12;$lien="depenses-caloriques-consommees-pour-la-boxe/";}
	else if ($sport=="Corde à sauter modérée") {$MET=8.5;$lien="depenses-caloriques-consommees-pour-la-corde-a-sauter/";}
	else if ($sport=="Corde à sauter intense") {$MET=11.5;$lien="depenses-caloriques-consommees-pour-la-corde-a-sauter/";}
	else if ($sport=="Course à pied faible avec marche") {$MET=6;$lien="depenses-caloriques-consommees-pour-la-course-a-pied-le-running-footing-ou-jogging/";}
	else if ($sport=="Course à pied faible") {$MET=7;$lien="depenses-caloriques-consommees-pour-la-course-a-pied-le-running-footing-ou-jogging/";}
	else if ($sport=="Course à pied 8km h") {$MET=8;$lien="depenses-caloriques-consommees-pour-la-course-a-pied-le-running-footing-ou-jogging/";}
	else if ($sport=="Course à pied 9,5km/h") {$MET=10;$lien="depenses-caloriques-consommees-pour-la-course-a-pied-le-running-footing-ou-jogging/";}
	else if ($sport=="Course à pied 13km/h") {$MET=13;$lien="depenses-caloriques-consommees-pour-la-course-a-pied-le-running-footing-ou-jogging/";}
	else if ($sport=="Course à pied cross-country") {$MET=9;$lien="depenses-caloriques-consommees-pour-la-course-a-pied-le-running-footing-ou-jogging/";}
	else if ($sport=="Course à pied sur place") {$MET=8;$lien="depenses-caloriques-consommees-pour-la-course-a-pied-le-running-footing-ou-jogging/";}
	else if ($sport=="Course sur tapis 8km h") {$MET=8;$lien="depenses-caloriques-consommees-pour-le-tapis-de-course/";}
	else if ($sport=="Course sur tapis 9,5km/h") {$MET=10;$lien="depenses-caloriques-consommees-pour-le-tapis-de-course/";}
	else if ($sport=="Course sur tapis 13km/h") {$MET=13;$lien="depenses-caloriques-consommees-pour-le-tapis-de-course/";}
	else if ($sport=="Danse calme") {$MET=3;$lien="depenses-caloriques-consommees-pour-la-danse/";}
	else if ($sport=="Danse modérée") {$MET=4;$lien="depenses-caloriques-consommees-pour-la-danse/";}
	else if ($sport=="Danse intense") {$MET=5;$lien="depenses-caloriques-consommees-pour-la-danse/";}
	else if ($sport=="Escalade") {$MET=11;$lien="depenses-caloriques-consommees-pour-l-escalade-et-la-varappe/";}
	else if ($sport=="Escrime récréatif") {$MET=6;$lien="depenses-caloriques-consommees-pour-l-escrime-epee-et-fleuret/";}
	else if ($sport=="Escrime intense") {$MET=8;$lien="depenses-caloriques-consommees-pour-l-escrime-epee-et-fleuret/";}
	else if ($sport=="Equitation au pas") {$MET=4;$lien="depenses-caloriques-consommees-pour-l-equitation-monter-a-cheval/";}
	else if ($sport=="Equitation trot et galop") {$MET=6;$lien="depenses-caloriques-consommees-pour-l-equitation-monter-a-cheval/";}
	else if ($sport=="Fitness intensité faible") {$MET=4;$lien="depenses-caloriques-consommees-pour-le-fitness/";}
	else if ($sport=="Fitness intensité moyenne") {$MET=6;$lien="depenses-caloriques-consommees-pour-le-fitness/";}
	else if ($sport=="Fitness intensité forte") {$MET=9;$lien="depenses-caloriques-consommees-pour-le-fitness/";}
	else if ($sport=="Football modéré") {$MET=8;$lien="depenses-caloriques-consommees-pour-le-football/";}
	else if ($sport=="Football intense") {$MET=9;$lien="depenses-caloriques-consommees-pour-le-football/";}
	else if ($sport=="Golf à pied") {$MET=5.5;$lien="depenses-caloriques-consommees-pour-le-golf/";}
	else if ($sport=="Golf en voiturette") {$MET=4.5;$lien="depenses-caloriques-consommees-pour-le-golf/";}
	else if ($sport=="Gymnastique") {$MET=4;$lien="depenses-caloriques-consommees-pour-la-gymnastique/";}
	else if ($sport=="Halterophilie") {$MET=3;$lien="depenses-caloriques-consommees-pour-l-halterophilie/";}
	else if ($sport=="Hand-ball") {$MET=8;$lien="depenses-caloriques-consommees-pour-le-hand-ball/";}
	else if ($sport=="Hockey sur gazon") {$MET=9;$lien="depenses-caloriques-consommees-pour-le-hockey-sur-gazon/";}
	else if ($sport=="Hockey sur glace") {$MET=9;$lien="depenses-caloriques-consommees-pour-le-hockey-sur-glace/";}
	else if ($sport=="Judo") {$MET=10;$lien="depenses-caloriques-consommees-pour-le-judo/";}
	else if ($sport=="Karaté") {$MET=10;$lien="depenses-caloriques-consommees-pour-le-karate/";}
	else if ($sport=="Kayak eaux vives") {$MET=8.5;$lien="depenses-caloriques-consommees-pour-le-kayak-en-riviere-ou-en-mer/";}
	else if ($sport=="Kayak eaux calmes") {$MET=5;$lien="depenses-caloriques-consommees-pour-le-kayak-en-riviere-ou-en-mer/";}
	else if ($sport=="Kick Boxing") {$MET=10;$lien="depenses-caloriques-consommees-pour-le-kick-boxing/";}
	else if ($sport=="Luge skeleton bobsleigh") {$MET=7;$lien="depenses-caloriques-consommees-pour-la-luge-le-skeleton-et-le-bobsleigh/";}
	else if ($sport=="Marche ordinaire 5km h") {$MET=3;$lien="depenses-caloriques-consommees-pour-la-marche-a-pied/";}
	else if ($sport=="Marche rapide") {$MET=4.5;$lien="depenses-caloriques-consommees-pour-la-marche-rapide-ou-sportive/";}
	else if ($sport=="Marche nordique") {$MET=5;$lien="depenses-caloriques-consommees-pour-la-marche-nordique-nordic-walking/";}
	else if ($sport=="Marche olympique") {$MET=6.5;$lien="depenses-caloriques-consommees-pour-la-marche-rapide-ou-sportive/";}
	else if ($sport=="Musculation") {$MET=3;$lien="depenses-caloriques-consommees-pour-la-musculation/";}
	else if ($sport=="Natation récréatif") {$MET=6;$lien="depenses-caloriques-en-calories-consommees-pour-la-natation/";}
	else if ($sport=="Natation style libre modéré") {$MET=8;$lien="depenses-caloriques-en-calories-consommees-pour-la-natation/";}
	else if ($sport=="Natation style libre intense") {$MET=10;$lien="depenses-caloriques-en-calories-consommees-pour-la-natation/";}
	else if ($sport=="Natation brasse") {$MET=10;$lien="depenses-caloriques-en-calories-consommees-pour-la-natation/brasse/";}
	else if ($sport=="Natation crawl") {$MET=8;$lien="depenses-caloriques-en-calories-consommees-pour-la-natation/crawl/";}
	else if ($sport=="Natation dos") {$MET=8;$lien="depenses-caloriques-en-calories-consommees-pour-la-natation/dos-crawle/";}
	else if ($sport=="Natation papillon") {$MET=11;$lien="depenses-caloriques-en-calories-consommees-pour-la-natation/papillon/";}
	else if ($sport=="Natation nage synchronisée") {$MET=8;$lien="depenses-caloriques-en-calories-consommees-pour-la-natation/nage-synchronisee/";}
	else if ($sport=="Patinage récréatif") {$MET=5.5;$lien="depenses-caloriques-consommees-pour-le-patinage-sur-glace/";}
	else if ($sport=="Patinage intense") {$MET=9;$lien="depenses-caloriques-consommees-pour-le-patinage-sur-glace/";}
	else if ($sport=="Patinage vitesse compétition") {$MET=15;$lien="depenses-caloriques-consommees-pour-le-patinage-de-vitesse-sur-glace/";}
	else if ($sport=="Patinage roller récréatif") {$MET=7;$lien="depenses-caloriques-consommees-pour-le-roller-patin-en-ligne/";}
	else if ($sport=="Patinage roller intense") {$MET=10;$lien="depenses-caloriques-consommees-pour-le-roller-patin-en-ligne/";}
	else if ($sport=="Plongée sous-marine") {$MET=7;$lien="depenses-caloriques-consommees-pour-la-plongee-sous-marine/";}
	else if ($sport=="Polo") {$MET=8;$lien="depenses-caloriques-consommees-pour-le-polo/";}
	else if ($sport=="Rafting") {$MET=5;$lien="depenses-caloriques-consommees-pour-le-rafting/";}
	else if ($sport=="Rameur d appartement") {$MET=7;$lien="depenses-caloriques-consommees-pour-le-rameur-d-appartement/";}
	else if ($sport=="Randonnée") {$MET=6;$lien="depenses-caloriques-consommees-pour-la-randonnee-avec-ou-sans-sac/";}
	else if ($sport=="Randonnée avec sac") {$MET=7;$lien="depenses-caloriques-consommees-pour-la-randonnee-avec-ou-sans-sac/";}
	else if ($sport=="Raquette à neige") {$MET=8;$lien="depenses-caloriques-consommees-pour-la-randonnee-en-raquette-a-neige/";}
	else if ($sport=="Rugby") {$MET=10;$lien="depenses-caloriques-consommees-pour-le-rugby";}
	else if ($sport=="Skate") {$MET=5;$lien="depenses-caloriques-consommees-pour-le-skate-board-planche-a-roulette/";}
	else if ($sport=="Ski alpin léger") {$MET=5;$lien="depenses-caloriques-consommees-pour-le-ski-alpin/";}
	else if ($sport=="Ski alpin modéré") {$MET=6;$lien="depenses-caloriques-consommees-pour-le-ski-alpin/";}
	else if ($sport=="Ski alpin intense") {$MET=8;$lien="depenses-caloriques-consommees-pour-le-ski-alpin/";}
	else if ($sport=="Ski nautique") {$MET=7;$lien="depenses-caloriques-consommees-pour-le-ski-nautique/";}
	else if ($sport=="Ski randonnée modéré 7k/h") {$MET=7;$lien="depenses-caloriques-consommees-pour-le-ski-de-randonnee-ou-ski-de-fond/";}
	else if ($sport=="Ski randonnée intense 10.5k/h") {$MET=8;$lien="depenses-caloriques-consommees-pour-le-ski-de-randonnee-ou-ski-de-fond/";}
	else if ($sport=="Squash récréatif") {$MET=7;$lien="depenses-caloriques-consommees-pour-le-squash/";}
	else if ($sport=="Squash compétition") {$MET=11;$lien="depenses-caloriques-consommees-pour-le-squash/";}
	else if ($sport=="Step modéré") {$MET=7;$lien="depenses-caloriques-consommees-pour-le-step/";}
	else if ($sport=="Step intense") {$MET=11;$lien="depenses-caloriques-consommees-pour-le-step/";}
	else if ($sport=="Surf") {$MET=3;$lien="depenses-caloriques-consommees-pour-le-surf/";}
	else if ($sport=="Taï-chi") {$MET=4;$lien="depenses-caloriques-consommees-pour-le-tai-chi-chuan/";}
	else if ($sport=="Tennis de table") {$MET=7;$lien="depenses-caloriques-consommees-pour-le-tennis-de-table-ping-pong/";}
	else if ($sport=="Tennis en simple") {$MET=7.5;$lien="depenses-caloriques-consommees-pour-le-tennis/";}
	else if ($sport=="Tennis en double") {$MET=6;$lien="depenses-caloriques-consommees-pour-le-tennis/";}
	else if ($sport=="Volley-ball récréatif") {$MET=3;$lien="depenses-caloriques-consommees-pour-le-volley-ball/";}
	else if ($sport=="Volley-ball compétition") {$MET=4.5;$lien="depenses-caloriques-consommees-pour-le-volley-ball/";}
	else if ($sport=="VTT Vélo Tout Terrain") {$MET=9;$lien="depenses-caloriques-consommees-pour-le-vtt-velo-tout-terrain/";}
	else if ($sport=="Water Polo") {$MET=10;$lien="depenses-caloriques-consommees-pour-le-water-polo/";}
	else if ($sport=="Yoga") {$MET=3;$lien="depenses-caloriques-consommees-pour-le-yoga/";}
	else if ($sport=="Zumba") {$MET=8;$lien="depenses-caloriques-consommees-pour-la-zumba/";}
	

	$CE =($temps*$MET*3.5*$poids/200);
	$CE = round($CE,0);
	$lien = "/comment-maigrir-conseils-solutions-trucs-et-astuces/calcul-des-depenses-energetiques-en-calories-par-sports-et-activites/".$lien;



   $codehtml .= <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/titre-besoin.png">
</div>
<div class="ocm-bl5">
<div class="clear-zero">&nbsp;</div>
<div class="clear">
  <div class="ocm-bl4">Résultat de vos dépenses<br /><br /><span>Une séance de $temps mn d'une personne de $poids kg pour l'activité "<a href="$lien">$sport</a>" brûle:<span><br />&nbsp;</div>
  <div class="ocm-circle"><br><span class="ocm-result14">$CE</span><br><span class="ocm-result14p">Kcal</span></div>
</div>
<div class="clear-zero">&nbsp;</div>
</div>
<div class="ocm-bl1">
Vous souhaitez maigrir en faisant du sport?<br />Poursuivez l'analyse!
<form name="anaform" class="ocm-form" method="post" action="#analyse">
<div id="analyse" class="clear">
<div class="centrage"><span class="rosep">Quel est votre objectif de poids (en KG)</span><br><input name="obj" class="ocm-input1" value="$obj" type="text"></div></div>
<div class="clear">
<input type="hidden" name="sexe" value="$sexe" />
<input type="hidden" name="age" value="$age" />
<input type="hidden" name="taille" value="$taille" />
<input type="hidden" name="poids" value="$poids" />
<input type="hidden" name="sport" value="$sport" />
<input type="hidden" name="temps" value="$temps" />
<input type="hidden" name="valider" value="CALCULER" />
<div class="centrage">&nbsp;<br><input name="valider2" value="ANALYSER" type="submit"></div>
</form>
<div class="clear-zero">&nbsp;</div>
</div></div>
EOT;
}

if (isset($_POST['valider2'])) {
 $IMC=($poids/(($taille/100)*($taille/100)));
   $IMC=round($IMC,1);
      if ($IMC<18.5) {
   $STATUT= "maigreur";
   $IMAGE="imc-statut-maigreur.png";
   }
   else if ($IMC<25) {
   $STATUT= "corpulence normale";
   $IMAGE="imc-statut-normal.png";
   }
   else if ($IMC<30) {
   $STATUT= "surpoids";
   $IMAGE="imc-statut-suroids.png";
   } 
   else {
   $STATUT= "obèsité";
   $IMAGE="imc-statut-obesite.png";
   }
   
      if ($sexe=="2") {$PIL=($taille-100-(($taille-150)/2.5));}
   else if ($sexe=="1") {$PIL=($taille-100-(($taille-150)/4));}
$PIL=round($PIL,1);
   
   $pmaa = (($obj+$PIL)/2);
   $kap = ($poids-$pmaa);
   $vakap = abs($kap);
   
       if ($kap>0) {$textp="Poids moyen à perdre";}
   else if ($kap<0) {$textp="Poids moyen à gagner";}
   else {$textp="Vous êtes à l'équilibre";} 
   
       if ($kap<0.1) {$texto1="Vous n'avez pas de poids à perdre. Félicitations.";
   $lienb="<div class=\"ocm-liena\"><a href=\"/categorie-produit/coffret-minceur-box-de-regime/\">VOIR TOUS NOS PROGRAMMES</a></div>";	   
	   }
   else if ($kap<1) {$texto1="Vous êtes presque à votre poids d'équilibre. Vous pouvez perdre ce léger superflus en découvrant notre programme.";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-s-a-3-kg-14-jours/\">VOIR MON PROGRAMME</a></div>";
   }	   
   else if ($kap<3) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">2  semaines!</span>";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-s-a-3-kg-14-jours/\">VOIR MON PROGRAMME</a></div>";
   }
   else if ($kap<6) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">4  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-m-3-a-6-kg-28-jours/\">VOIR MON PROGRAMME</a></div>";}
   else if ($kap<9) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">6  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-l-6-a-9-kg-42-jours/\">VOIR MON PROGRAMME</a></div>";}
   else if ($kap<12) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">10  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xl-9-a-12-kg-56-jours/\">VOIR MON PROGRAMME</a></div>";}
    else if ($kap<15) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">10  semaines!</span>";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xxl-12-a-15-kg-70-jours/\">VOIR MON PROGRAMME</a></div>";}
   else {$texto1="En étant raisonnable vous pouvez vous fixer un objectif d'environ <span class=\"rosep\">15 kg</span> et l'atteindre au bout de <span class=\"rosep\">10 semaines!</span>";
     $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xxl-12-a-15-kg-70-jours/\">VOIR MON PROGRAMME</a></div>";} 
   
   $codehtml .= <<<EOT
<div class="ocm-noir"><img src="/wp-content/uploads/titre-analyse.png">
</div>
<div class="ocm-bl3">
<div class="ocm-blancg">Votre Indice de Masse Corporelle</div>
<p>IMC = <span class="rosegrasspan">$IMC</span><br />
Statut = <span class="rosegrasspan">$STATUT</span></p>
 <img class="aligncenter" src="/wp-content/uploads/$IMAGE"> 
<div class="ocm-blancg">Vos indicateurs de poids</div>
 <p>
  Votre poids actuel = <span class="rosegrasspan">$poids</span> kg<br />
 Poids idéal (formule de Lorentz) = <span class="rosegrasspan">$PIL</span> kg<br />
Objectif personnel = <span class="rosegrasspan">$obj</span> kg
</p>
<div class="float50">
  <div class="ocm-bl4">Poids moyen à atteindre</div>
  <div class="ocm-circle"><br><span class="ocm-res14r">$pmaa</span><br><span class="result14p">Kg</span></div>
</div>
<div class="float50">
    <div class="ocm-bl4">$textp</div>
	<div class="ocm-circle"><br><span class="ocm-res14r">$vakap</span><br><span class="result14p">Kg</span></div>
</div>
<div class="clear-zero">&nbsp;</div>
</div>
<div class="ocm-noir">
<img src="/wp-content/uploads/titre-solution.png">
</div>
<div class="ocm-bl1">
<div class="clear">
<div class="centrage"><span class="rosep">Quel objectif et comment le concrétiser?</span></div>
</div>
$texto1
<div class="clear-zero">&nbsp;</div>
$lienb
<img src="/wp-content/uploads/ligne-objectif-final.png">
</div>
EOT;
}

   $codehtml .= <<<EOT
<div class="clear-zero">&nbsp;</div>
EOT;


return $codehtml;
}
add_shortcode( 'calculettesportdep', 'calculette_sport_depense' );




//Calculette Indice de Masse Grasse avec analyse
function calculette_indice_masse_grasse_analyse($atts) {
extract( shortcode_atts( array(
      'url'     => '',
   ), $atts, 'calculetteimga' ) );
   $sexe=$_POST['sexe'];   
   $age=$_POST['age'];
   $taille=$_POST['taille'];
	$taille = preg_replace('*,*','.',$taille);
   $poids=$_POST['poids'];
	$poids = preg_replace('*,*','.',$poids);
if ($sexe==1) {$hek1="checked ";}
else {$hek2="checked ";}

$obj=$_POST['obj'];
	$obj = preg_replace('*,*','.',$obj);
	
   $codehtml = <<<EOT
<div id="resultat1"> </div>
			<div class="ocm-titre1">Calculette de l'Indice de Masse Grasse (IMG)</div>   
			<div class="ocm-bl1">
<form name="imgform" class="ocm-form" method="post" action="#besoin">
<span class="rosep">Vous êtes</span>
<ul class="ul_calc"> 
<li><input id="femme" name="sexe" value="0" type="radio" $hek2/><label for="femme">Une femme</label></li> 
<li><input id="homme" name="sexe" value="1" type="radio" $hek1/><label for="homme">Un homme</label></li></ul>
<div class="clear">
<div class="ocm-col3"><span class="rosep">Votre âge</span><br><input name="age" class="ocm-input1" value="$age" type="text"></div>
<div class="ocm-col3"><span class="rosep">Votre taille (cm)</span><br><input name="taille" class="ocm-input1" value="$taille" type="text"></div>
<div class="ocm-col3"><span class="rosep">Votre poids (KG)</span><br><input name="poids" class="ocm-input1" value="$poids" type="text"></div>
</div><div id="besoin" class="centrage">
<input name="valider" value="CALCULER" type="submit">
</div>  
</form>
<div class="clear-zero">&nbsp;</div>
</div>
EOT;

if (isset($_POST['valider'])) {
   $IMG=(1.2*$poids/(($taille/100)*($taille/100)))+(0.23*$age)-(10.8*$sexe)-5.4;
   $IMG=round($IMG,1);
   
if($sexe=="0" AND $IMG<25)   {
   $STATUTIMG= "Votre Indice de Masse Grasse est en statut: trop maigre";
   }
else if($sexe=="0" AND $IMG<=30)  {
   $STATUTIMG= "Votre Indice de Masse Grasse est en statut: normal";
   }
else if($sexe=="0" AND $IMG>30) {
   $STATUTIMG= "Votre Indice de Masse Grasse est en statut: excès de graisse";
   }
if($sexe=="1" AND $IMG<15)  {
   $STATUTIMG= "Votre Indice de Masse Grasse est en statut: trop maigre";
   } 
else if($sexe=="1" AND $IMG<=20)  {
   $STATUTIMG= "Votre Indice de Masse Grasse est en statut: normal";
   }
else if($sexe=="1" AND $IMG>20)  {
   $STATUTIMG= "Votre Indice de Masse Grasse est en statut: excès de graisse";
   }

   $codehtml .= <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/titre-img-1.png">
</div>
<div class="ocm-bl6">
<div class="clear-zero">&nbsp;</div>
<div class="clear">
  <div class="ocm-bl4">Résultat de votre IMG<br /><br /><span>$STATUTIMG</span><br />&nbsp;</div>
  <div class="ocm-circle"><br><span class="ocm-result14">$IMG</span><br><span class="ocm-result14p">%</span></div>
</div>
<div class="clear-zero">&nbsp;</div>
</div>
<div class="ocm-bl1">
Vous souhaitez perdre quelques kilos? Votre objectif de poids est-il réaliste? Poursuivez l'analyse en calculant votre poids idéal et en découvrant nos solutions:
<form name="anaform" class="ocm-form" method="post" action="#analyse">
<div id="analyse" class="clear">
<div class="centrage"><span class="rosep">Quel est votre objectif de poids (en KG)</span><br><input name="obj" class="ocm-input1" value="$obj" type="text"></div></div>
<div class="clear">
<input type="hidden" name="sexe" value="$sexe" />
<input type="hidden" name="act" value="$act" />
<input type="hidden" name="age" value="$age" />
<input type="hidden" name="taille" value="$taille" />
<input type="hidden" name="poids" value="$poids" />
<input type="hidden" name="valider" value="CALCULER" />
<div class="centrage">&nbsp;<br><input name="valider2" value="ANALYSER" type="submit"></div>
</form>
<div class="clear-zero">&nbsp;</div>
</div></div>
EOT;
}

if (isset($_POST['valider2'])) {
 $IMC=($poids/(($taille/100)*($taille/100)));
   $IMC=round($IMC,1);
      if ($IMC<18.5) {
   $STATUT= "maigreur";
   $IMAGE="imc-statut-maigreur.png";
   }
   else if ($IMC<25) {
   $STATUT= "corpulence normale";
   $IMAGE="imc-statut-normal.png";
   }
   else if ($IMC<30) {
   $STATUT= "surpoids";
   $IMAGE="imc-statut-suroids.png";
   } 
   else {
   $STATUT= "obèsité";
   $IMAGE="imc-statut-obesite.png";
   }
   
      if ($sexe=="0") {$PIL=($taille-100-(($taille-150)/2.5));}
   else if ($sexe=="1") {$PIL=($taille-100-(($taille-150)/4));}
$PIL=round($PIL,1);
   
   $pmaa = (($obj+$PIL)/2);
   $kap = ($poids-$pmaa);
   $vakap = abs($kap);
   
       if ($kap>0) {$textp="Poids moyen à perdre";}
   else if ($kap<0) {$textp="Poids moyen à gagner";}
   else {$textp="Vous êtes à l'équilibre";} 
   
       if ($kap<0.1) {$texto1="Vous n'avez pas de poids à perdre. Félicitations.";
   $lienb="<div class=\"ocm-liena\"><a href=\"/categorie-produit/coffret-minceur-box-de-regime/\">VOIR TOUS NOS PROGRAMMES</a></div>";	   
	   }
   else if ($kap<1) {$texto1="Vous êtes presque à votre poids d'équilibre. Vous pouvez perdre ce léger superflus en découvrant notre programme.";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-s-a-3-kg-14-jours/\">VOIR MON PROGRAMME</a></div>";
   }	   
   else if ($kap<3) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">2  semaines!</span>";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-s-a-3-kg-14-jours/\">VOIR MON PROGRAMME</a></div>";
   }
   else if ($kap<6) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">4  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-m-3-a-6-kg-28-jours/\">VOIR MON PROGRAMME</a></div>";}
   else if ($kap<9) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">6  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-l-6-a-9-kg-42-jours/\">VOIR MON PROGRAMME</a></div>";}
   else if ($kap<12) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">10  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xl-9-a-12-kg-56-jours/\">VOIR MON PROGRAMME</a></div>";}
    else if ($kap<15) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">10  semaines!</span>";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xxl-12-a-15-kg-70-jours/\">VOIR MON PROGRAMME</a></div>";}
   else {$texto1="En étant raisonnable vous pouvez vous fixer un objectif d'environ <span class=\"rosep\">15 kg</span> et l'atteindre au bout de <span class=\"rosep\">10 semaines!</span>";
     $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xxl-12-a-15-kg-70-jours/\">VOIR MON PROGRAMME</a></div>";} 
   
   $codehtml .= <<<EOT
<div class="ocm-noir"><img src="/wp-content/uploads/titre-img-2.png">
</div>
<div class="ocm-bl3">
<div class="ocm-blancg">Votre Indice de Masse Corporelle</div>
<p>IMC = <span class="rosegrasspan">$IMC</span><br />
Statut = <span class="rosegrasspan">$STATUT</span></p>
 <img class="aligncenter" src="/wp-content/uploads/$IMAGE"> 
<div class="ocm-blancg">Vos indicateurs de poids</div>
 <p>
  Votre poids actuel = <span class="rosegrasspan">$poids</span> kg<br />
 Poids idéal (formule de Lorentz) = <span class="rosegrasspan">$PIL</span> kg<br />
Objectif personnel = <span class="rosegrasspan">$obj</span> kg
</p>
<div class="float50">
  <div class="ocm-bl4">Poids moyen à atteindre</div>
  <div class="ocm-circle"><br><span class="ocm-res14r">$pmaa</span><br><span class="result14p">Kg</span></div>
</div>
<div class="float50">
    <div class="ocm-bl4">$textp</div>
	<div class="ocm-circle"><br><span class="ocm-res14r">$vakap</span><br><span class="result14p">Kg</span></div>
</div>
<div class="clear-zero">&nbsp;</div>
</div>
<div class="ocm-noir">
<img src="/wp-content/uploads/titre-img-3.png">
</div>
<div class="ocm-bl1">
<div class="clear">
<div class="centrage"><span class="rosep">Quel objectif et comment le concrétiser?</span></div>
</div>
$texto1
<div class="clear-zero">&nbsp;</div>
$lienb
<img src="/wp-content/uploads/ligne-objectif-final.png">
</div>
EOT;
}

   $codehtml .= <<<EOT
<div class="clear-zero">&nbsp;</div>
EOT;


return $codehtml;
}
add_shortcode( 'calculetteimga', 'calculette_indice_masse_grasse_analyse' );




//Calculette Indice de Masse Corporelle avec analyse
function calculette_indice_masse_corporelle_analyse($atts) {
extract( shortcode_atts( array(
      'url'     => '',
   ), $atts, 'calculetteimca' ) );
   $sexe=$_POST['sexe'];   
   $age=$_POST['age'];
   $taille=$_POST['taille'];
	$taille = preg_replace('*,*','.',$taille);
   $poids=$_POST['poids'];
	$poids = preg_replace('*,*','.',$poids);
if ($sexe==1) {$hek1="checked ";}
else {$hek2="checked ";}

$obj=$_POST['obj'];
	$obj = preg_replace('*,*','.',$obj);
	
   $codehtml = <<<EOT
<div id="resultat1"> </div>
			<div class="ocm-titre1">Calculette de l'Indice de Masse Corporelle (IMC)</div>   
			<div class="ocm-bl1">
<form name="imgform" class="ocm-form" method="post" action="#besoin">
<span class="rosep">Vous êtes</span>
<ul class="ul_calc"> 
<li><input id="femme" name="sexe" value="2" type="radio" $hek2/><label for="femme">Une femme</label></li> 
<li><input id="homme" name="sexe" value="1" type="radio" $hek1/><label for="homme">Un homme</label></li></ul>
<div class="clear">
<div class="ocm-col3"><span class="rosep">Votre âge</span><br><input name="age" class="ocm-input1" value="$age" type="text"></div>
<div class="ocm-col3"><span class="rosep">Votre taille (cm)</span><br><input name="taille" class="ocm-input1" value="$taille" type="text"></div>
<div class="ocm-col3"><span class="rosep">Votre poids (KG)</span><br><input name="poids" class="ocm-input1" value="$poids" type="text"></div>
</div><div id="besoin" class="centrage">
<input name="valider" value="CALCULER" type="submit">
</div>  
</form>
<div class="clear-zero">&nbsp;</div>
</div>
EOT;

if (isset($_POST['valider'])) {
$IMC=($poids/(($taille/100)*($taille/100)));
   $IMC=round($IMC,1);
      if ($IMC<18.5) {
   $STATUT= "maigreur";
   $IMAGE="imc-statut-maigreur.png";
   }
   else if ($IMC<25) {
   $STATUT= "corpulence normale";
   $IMAGE="imc-statut-normal.png";
   }
   else if ($IMC<30) {
   $STATUT= "surpoids";
   $IMAGE="imc-statut-suroids.png";
   } 
   else {
   $STATUT= "obèsité";
   $IMAGE="imc-statut-obesite.png";
   }

   $codehtml .= <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/titre-imc-1.png">
</div>
<div class="ocm-bl6">
<div class="clear-zero">&nbsp;</div>
<div class="clear">
  <div class="ocm-bl4">Résultat de votre IMC<br /><br /><span>STATUT: $STATUT</span><br />&nbsp;</div>
  <div class="ocm-circle"><br><span class="ocm-result14">$IMC</span></div>
</div>
<div class="clear-zero">&nbsp;</div>
</div>
<div class="ocm-bl1">
<span class="conseil-calorie-lettre-rose">A</span><span class="outil-action-noir">nalysez le résultat de votre IMC et découvrez votre poids idéal !</span>
<form name="anaform" class="ocm-form" method="post" action="#analyse">
<div id="analyse" class="clear">
<div class="centrage"><span class="rosep">Quel est votre objectif de poids (en KG) ?</span><br><input name="obj" class="ocm-input1" value="$obj" type="text"></div></div>
<div class="clear">
<input type="hidden" name="sexe" value="$sexe" />
<input type="hidden" name="act" value="$act" />
<input type="hidden" name="age" value="$age" />
<input type="hidden" name="taille" value="$taille" />
<input type="hidden" name="poids" value="$poids" />
<input type="hidden" name="valider" value="CALCULER" />
<div class="centrage">&nbsp;<br><input name="valider2" value="ANALYSER" type="submit"></div>
</form>
<div class="clear-zero">&nbsp;</div>
</div></div>
EOT;
}

if (isset($_POST['valider2'])) {
 $IMC=($poids/(($taille/100)*($taille/100)));
   $IMC=round($IMC,1);
      if ($IMC<18.5) {
   $STATUT= "maigreur";
   $IMAGE="imc-statut-maigreur.png";
   }
   else if ($IMC<25) {
   $STATUT= "corpulence normale";
   $IMAGE="imc-statut-normal.png";
   }
   else if ($IMC<30) {
   $STATUT= "surpoids";
   $IMAGE="imc-statut-suroids.png";
   } 
   else {
   $STATUT= "obèsité";
   $IMAGE="imc-statut-obesite.png";
   }
   
      if ($sexe=="2") {$PIL=($taille-100-(($taille-150)/2.5));}
   else if ($sexe=="1") {$PIL=($taille-100-(($taille-150)/4));}
$PIL=round($PIL,1);
   
   $pmaa = (($obj+$PIL)/2);
   $kap = ($poids-$pmaa);
   $vakap = abs($kap);
   
       if ($kap>0) {$textp="Poids moyen à perdre";}
   else if ($kap<0) {$textp="Poids moyen à gagner";}
   else {$textp="Vous êtes à l'équilibre";} 
   
       if ($kap<0.1) {$texto1="Vous n'avez pas de poids à perdre. Félicitations.";
   $lienb="<div class=\"ocm-liena\"><a href=\"/categorie-produit/coffret-minceur-box-de-regime/\">VOIR TOUS NOS PROGRAMMES</a></div>";	   
	   }
   else if ($kap<1) {$texto1="Vous êtes presque à votre poids d'équilibre. Vous pouvez perdre ce léger superflus en découvrant notre programme.";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-s-a-3-kg-14-jours/\">VOIR MON PROGRAMME</a></div>";
   }	   
   else if ($kap<3) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">2  semaines!</span>";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-s-a-3-kg-14-jours/\">VOIR MON PROGRAMME</a></div>";
   }
   else if ($kap<6) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">4  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-m-3-a-6-kg-28-jours/\">VOIR MON PROGRAMME</a></div>";}
   else if ($kap<9) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">6  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-l-6-a-9-kg-42-jours/\">VOIR MON PROGRAMME</a></div>";}
   else if ($kap<12) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">10  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xl-9-a-12-kg-56-jours/\">VOIR MON PROGRAMME</a></div>";}
    else if ($kap<15) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">10  semaines!</span>";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xxl-12-a-15-kg-70-jours/\">VOIR MON PROGRAMME</a></div>";}
   else {$texto1="En étant raisonnable vous pouvez vous fixer un objectif d'environ <span class=\"rosep\">15 kg</span> et l'atteindre au bout de <span class=\"rosep\">10 semaines!</span>";
     $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xxl-12-a-15-kg-70-jours/\">VOIR MON PROGRAMME</a></div>";} 
   
   $codehtml .= <<<EOT
<div class="ocm-noir"><img src="/wp-content/uploads/titre-imc-2.png">
</div>
<div class="ocm-bl3">
<div class="ocm-blancg">Votre Indice de Masse Corporelle</div>
<p>IMC = <span class="rosegrasspan">$IMC</span><br />
Statut = <span class="rosegrasspan">$STATUT</span></p>
 <img class="aligncenter" src="/wp-content/uploads/$IMAGE"> 
<div class="ocm-blancg">Vos indicateurs de poids</div>
 <p>
  Votre poids actuel = <span class="rosegrasspan">$poids</span> kg<br />
 Poids idéal (formule de Lorentz) = <span class="rosegrasspan">$PIL</span> kg<br />
Objectif personnel = <span class="rosegrasspan">$obj</span> kg
</p>
<div class="float50">
  <div class="ocm-bl4">Poids moyen à atteindre</div>
  <div class="ocm-circle"><br><span class="ocm-res14r">$pmaa</span><br><span class="result14p">Kg</span></div>
</div>
<div class="float50">
    <div class="ocm-bl4">$textp</div>
	<div class="ocm-circle"><br><span class="ocm-res14r">$vakap</span><br><span class="result14p">Kg</span></div>
</div>
<div class="clear-zero">&nbsp;</div>
</div>
<div class="ocm-noir">
<img src="/wp-content/uploads/titre-imc-3.png">
</div>
<div class="ocm-bl1">
<div class="clear">
<div class="centrage"><span class="rosep">Quel objectif et comment le concrétiser?</span></div>
</div>
$texto1
<div class="clear-zero">&nbsp;</div>
$lienb
<img src="/wp-content/uploads/ligne-objectif-final.png">
</div>
EOT;
}

   $codehtml .= <<<EOT
<div class="clear-zero">&nbsp;</div>
EOT;


return $codehtml;
}
add_shortcode( 'calculetteimca', 'calculette_indice_masse_corporelle_analyse' );


//Calculette poids idéal selon différentes formules
//modele 1: formule de Perrault
//modele 2: formule de Bornhardt
//modele 3: formule de Creff
//modele 4: formule de Devine
//modele 5: formule de Lorentz
//modele 6: formule de Monnerot-Dumaine
//modele 7: formule de Broca

function calculette_pidf($atts) {
extract( shortcode_atts( array(
      'url'     => '',
	  'modele'     => '',
   ), $atts, 'calculettepidf' ) );

   $age=$_POST['age'];
   $taille=$_POST['taille'];
	$taille = preg_replace('*,*','.',$taille);
   $poids=$_POST['poids'];
	$poids = preg_replace('*,*','.',$poids);

   $sexe=$_POST['sexe'];
   if ($sexe==1) {$hek1="checked ";}
	else {$hek2="checked ";}
	
	$poitrine=$_POST['poitrine'];
	$poitrine = preg_replace('*,*','.',$poitrine);

	$morph=$_POST['morph'];
	if ($morph==2) {$moheck2="checked ";}
	else if ($morph==3) {$moheck3="checked ";}
	else {$moheck1="checked ";}

	$poignet=$_POST['poignet'];
	$poignet = preg_replace('*,*','.',$poignet);
		

	$obj=$_POST['obj'];
	$obj = preg_replace('*,*','.',$obj);
	
	
	if ($modele=="1") {
$titrec = "Calculette du poids idéal par la formule de Perrault";
}
	if ($modele=="2") {
$titrec = "Calculette du poids idéal par la formule de Bornhardt";
$ajoutform = <<<EOT
<div class="clear"><div class="centrage"><span class="rosep">Votre tour de poitrine (en cm)</span><br><input name="poitrine" class="ocm-input1" value="$poitrine" type="text"></div>&nbsp;</div>
EOT;
}
	if ($modele=="3") {
$titrec = "Calculette du poids idéal par la formule de Creff";
$ajoutform = <<<EOT
<div class="clear">
<span class="rosep">Votre morphologie</span>
<ul class="ul_calc"> 
<li><input id="normale" name="morph" value="1" type="radio" $moheck1/><label for="normale">Normale</label></li>
<li><input id="large" name="morph" value="2" type="radio" $moheck2/><label for="large">Large</label></li>
<li><input id="mince" name="morph" value="3" type="radio" $moheck3/><label for="mince">Mince</label></li>
</ul>&nbsp;
</div>
EOT;
}
	if ($modele=="4") {
$titrec = "Calculette du poids idéal par la formule de Devine";
}
	if ($modele=="5") {
$titrec = "Calculette du poids idéal par la formule de Lorentz";
}
	if ($modele=="6") {
$titrec = "Calcul du poids idéal - formule de Monnerot-Dumaine";
$ajoutform = <<<EOT
<div class="clear"><div class="centrage"><span class="rosep">Circonférence du poignet (en cm)</span><br><input name="poignet" class="ocm-input1" value="$poignet" type="text"></div>&nbsp;</div>
EOT;
}
	if ($modele=="7") {
$titrec = "Calculette du poids idéal par la formule de Broca";
}
	
   $codehtml = <<<EOT
<div id="resultat1"> </div>
			<div class="ocm-titre1">$titrec</div>   
			<div class="ocm-bl1">
<form name="imcform" class="ocm-form" method="post" action="#besoin">
<span class="rosep">Vous êtes</span>
<ul class="ul_calc"> 
<li><input id="femme" name="sexe" value="2" type="radio" $hek2/><label for="femme">Une femme</label></li> 
<li><input id="homme" name="sexe" value="1" type="radio" $hek1/><label for="homme">Un homme</label></li></ul>
<div class="clear">
<div class="ocm-col3"><span class="rosep">Votre âge</span><br><input name="age" class="ocm-input1" value="$age" type="text"></div>
<div class="ocm-col3"><span class="rosep">Votre taille (cm)</span><br><input name="taille" class="ocm-input1" value="$taille" type="text"></div>
<div class="ocm-col3"><span class="rosep">Votre poids (KG)</span><br><input name="poids" class="ocm-input1" value="$poids" type="text"></div>
</div>
$ajoutform
<div id="besoin" class="centrage">
<input name="valider" value="CALCULER" type="submit">
</div>  
</form>
<div class="clear-zero">&nbsp;</div>
</div>
EOT;
if (isset($_POST['valider'])) {
   
   
	if ($modele=="1") {
		$formulec = "par la formule de Perrault";
		$PIDF=($taille-100+(0.09*$age));
		$PIDF=round($PIDF,1);
}
	if ($modele=="2") {
		$formulec = "par la formule de Bornhardt";
		$PIDF=($taille*$poitrine/240);
		$PIDF=round($PIDF,1);
}
	if ($modele=="3") {
		$formulec = "par la formule de Creff";
		   if ($morph==1) {$PIDF=($taille-100+(0.09*$age));}
			else if ($morph==2) {$PIDF=($taille-100+(0.09*1.1*$age));}
			else {$PIDF=($taille-100+(0.09*0.9*$age));}
		$PIDF=round($PIDF,1);
}
	if ($modele=="4") {
		$formulec = "par la formule de Devine";
		   if ($sexe=="2") {$PIDF=(45.5+2.3*(($taille/2.54)-60));}
			else if ($sexe=="1") {$PIDF=(50.5+2.3*(($taille/2.54)-60));}
		$PIDF=round($PIDF,1);
}
	if ($modele=="5") {
		$formulec = "par la formule de Lorentz";
			if ($sexe=="2") {$PIDF=($taille-100-(($taille-150)/2.5));}
			else if ($sexe=="1") {$PIDF=($taille-100-(($taille-150)/4));}
		$PIDF=round($PIDF,1);
}
	if ($modele=="6") {
		$formulec = "par la formule de Monnerot-Dumaine";
		$PIDF=(($taille-100+(4*$poignet))/2);
		$PIDF=round($PIDF,1);
}
	if ($modele=="7") {
		$formulec = "par la formule de Broca";
		$PIDF=($taille-100);
		$PIDF=round($PIDF,1);
}  
   
    $codehtml .= <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/titre-poids-ideal-1.png">
</div>
<div class="ocm-bl6">
<div class="clear-zero">&nbsp;</div>
<div class="clear">
  <div class="ocm-bl4">Votre poids idéal<br /><br /><span>$formulec</span></div>
  <div class="ocm-circle"><br><span class="ocm-result14">$PIDF</span><br><span class="result14p">Kg</span></div>
</div>
<div class="clear-zero">&nbsp;</div>
</div>
<div class="ocm-bl1">
Vous souhaitez perdre du poids ? Poursuivez l'analyse !
<form name="anaform" class="ocm-form" method="post" action="#analyse">
<div id="analyse" class="clear">
<div class="centrage"><span class="rosep">Quel est votre objectif de poids (en KG)</span><br><input name="obj" class="ocm-input1" value="$obj" type="text"></div></div>
<div class="clear">
<input type="hidden" name="sexe" value="$sexe" />
<input type="hidden" name="age" value="$age" />
<input type="hidden" name="taille" value="$taille" />
<input type="hidden" name="poids" value="$poids" />
<input type="hidden" name="valider" value="CALCULER" />
<div class="centrage">&nbsp;<br><input name="valider2" value="ANALYSER" type="submit"></div>
</form>
<div class="clear-zero">&nbsp;</div>
</div></div>
EOT;
}

if (isset($_POST['valider2'])) {
 $IMC=($poids/(($taille/100)*($taille/100)));
   $IMC=round($IMC,1);
      if ($IMC<18.5) {
   $STATUT= "maigreur";
   $IMAGE="imc-statut-maigreur.png";
   }
   else if ($IMC<25) {
   $STATUT= "corpulence normale";
   $IMAGE="imc-statut-normal.png";
   }
   else if ($IMC<30) {
   $STATUT= "surpoids";
   $IMAGE="imc-statut-suroids.png";
   } 
   else {
   $STATUT= "obèsité";
   $IMAGE="imc-statut-obesite.png";
   }
   
      if ($sexe=="2") {$PIL=($taille-100-(($taille-150)/2.5));}
   else if ($sexe=="1") {$PIL=($taille-100-(($taille-150)/4));}
$PIL=round($PIL,1);
   
   $pmaa = (($obj+$PIL)/2);
   $kap = ($poids-$pmaa);
   $vakap = abs($kap);
   
       if ($kap>0) {$textp="Poids moyen à perdre";}
   else if ($kap<0) {$textp="Poids moyen à gagner";}
   else {$textp="Vous êtes à l'équilibre";} 
   
       if ($kap<0.1) {$texto1="Vous n'avez pas de poids à perdre. Félicitations.";
   $lienb="<div class=\"ocm-liena\"><a href=\"/categorie-produit/coffret-minceur-box-de-regime/\">VOIR TOUS NOS PROGRAMMES</a></div>";	   
	   }
   else if ($kap<1) {$texto1="Vous êtes presque à votre poids d'équilibre. Vous pouvez perdre ce léger superflus en découvrant notre programme.";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-s-a-3-kg-14-jours/\">VOIR MON PROGRAMME</a></div>";
   }	   
   else if ($kap<3) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">2  semaines!</span>";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-s-a-3-kg-14-jours/\">VOIR MON PROGRAMME</a></div>";
   }
   else if ($kap<6) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">4  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-m-3-a-6-kg-28-jours/\">VOIR MON PROGRAMME</a></div>";}
   else if ($kap<9) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">6  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-l-6-a-9-kg-42-jours/\">VOIR MON PROGRAMME</a></div>";}
   else if ($kap<12) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">10  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xl-9-a-12-kg-56-jours/\">VOIR MON PROGRAMME</a></div>";}
    else if ($kap<15) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">10  semaines!</span>";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xxl-12-a-15-kg-70-jours/\">VOIR MON PROGRAMME</a></div>";}
   else {$texto1="En étant raisonnable vous pouvez vous fixer un objectif d'environ <span class=\"rosep\">15 kg</span> et l'atteindre au bout de <span class=\"rosep\">10 semaines!</span>";
     $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xxl-12-a-15-kg-70-jours/\">VOIR MON PROGRAMME</a></div>";} 
   
   $codehtml .= <<<EOT
<div class="ocm-noir"><img src="/wp-content/uploads/titre-poids-ideal-2.png">
</div>
<div class="ocm-bl3">
<div class="ocm-blancg">Votre Indice de Masse Corporelle</div>
<p>IMC = <span class="rosegrasspan">$IMC</span><br />
Statut = <span class="rosegrasspan">$STATUT</span></p>
 <img class="aligncenter" src="/wp-content/uploads/$IMAGE"> 
<div class="ocm-blancg">Vos indicateurs de poids</div>
 <p>
  Votre poids actuel = <span class="rosegrasspan">$poids</span> kg<br />
 Poids idéal (formule de Lorentz) = <span class="rosegrasspan">$PIL</span> kg<br />
Objectif personnel = <span class="rosegrasspan">$obj</span> kg
</p>
<div class="float50">
  <div class="ocm-bl4">Poids moyen à atteindre</div>
  <div class="ocm-circle"><br><span class="ocm-res14r">$pmaa</span><br><span class="result14p">Kg</span></div>
</div>
<div class="float50">
    <div class="ocm-bl4">$textp</div>
	<div class="ocm-circle"><br><span class="ocm-res14r">$vakap</span><br><span class="result14p">Kg</span></div>
</div>
<div class="clear-zero">&nbsp;</div>
</div>
<div class="ocm-noir">
<img src="/wp-content/uploads/titre-poids-ideal-3.png">
</div>
<div class="ocm-bl1">
<div class="clear">
<div class="centrage"><span class="rosep">Quel objectif et comment le concrétiser?</span></div>
</div>
$texto1
<div class="clear-zero">&nbsp;</div>
$lienb
<img src="/wp-content/uploads/ligne-objectif-final.png">
</div>
EOT;
}

   $codehtml .= <<<EOT
<div class="clear-zero">&nbsp;</div>
EOT;


return $codehtml;
}
add_shortcode( 'calculettepidf', 'calculette_pidf' );



//Calculette du besoin par jour pour menu
function plus70j($url) {
$resultat = strtotime("+70 day");
$resultat = date('d/m/y', $resultat);
   $codehtml .= <<<EOT
$resultat
EOT;
return $codehtml;
}
add_shortcode( 'plus70j', 'plus70j' );

add_shortcode('wpv-post-modified', 'wpv_post_modified_shortcode');
function wpv_post_modified_shortcode($atts) {
if (empty($atts['format'])) {
$atts['format'] = get_option('date_format');
}
return get_the_modified_date($atts['format']);
}

//Outils muscles par sport
function calculette_sport_muscle($atts) {
extract( shortcode_atts( array(
      'url'     => '',
	  'sport'     => '',
   ), $atts, 'calculettesportmuscle' ) );
   
  
   $sexe=$_POST['sexe'];   
   $age=$_POST['age'];
   $taille=$_POST['taille'];
	$taille = preg_replace('*,*','.',$taille);
   $poids=$_POST['poids'];
	$poids = preg_replace('*,*','.',$poids);
   $act=$_POST['act'];
if ($sexe==1) {$hek1="checked ";}
else {$hek2="checked ";}

$obj=$_POST['obj'];
	$obj = preg_replace('*,*','.',$obj);
	
	if (isset($_POST['sport'])) {$sport=$_POST['sport'];}
	else {$sport=$sport;} 	
	
   $codehtml = <<<EOT
<div id="resultat1"> </div>
			   
			<div class="ocm-bienfaitsl1">


<form name="imcform" class="ocm-form" method="post" action="#besoin">

<div class="clear">
<div id="besoin"><span class="rosep">Sélectionnez votre activité et cliquez pour voir les zones solicitées ! &nbsp;</span> &nbsp;</div>
<select name="sport">
<option value="$sport">$sport</option>
<option value="Aérobic">Aérobic</option>
<option value="Aïkido">Aïkido</option>
<option value="Aquabiking">Aquabiking</option> 
<option value="Aquagym">Aquagym</option>
<option value="Arts martiaux">Art martiaux (en général)</option>
<option value="Aviron">Aviron</option>
<option value="Aviron">Aviron</option>
<option value="Badminton">Badminton</option>
<option value="Ballet danse">Ballet danse</option>
<option value="Basket-Ball">Basket-Ball</option>
<option value="Vélo-bicyclette">Vélo-bicyclette-cyclisme</option>
<option value="Boxe">Boxe</option>
<option value="Corde à sauter">Corde à sauter</option>
<option value="Course à pied">Course à pied</option>
<option value="Danse">Danse</option>
<option value="Equitation">Equitation</option>
<option value="Escalade">Escalade</option>
<option value="Escrime">Escrime</option>
<option value="Fitness">Fitness</option>
<option value="Football">Football</option>
<option value="Golf à pied">Golf à pied</option>
<option value="Gymnastique">Gymnastique</option>
<option value="Halterophilie">Halterophilie</option>
<option value="Hand-ball">Hand-ball</option>
<option value="Hockey sur gazon">Hockey sur gazon</option>
<option value="Hockey sur glace">Hockey sur glace</option>
<option value="Judo">Judo</option>
<option value="Karaté">Karaté</option>
<option value="Kayak">Kayak</option>
<option value="Kick Boxing">Kick Boxing</option>
<option value="Luge skeleton bobsleigh">Luge skeleton bobsleigh</option>
<option value="Marche ordinaire 5km h">Marche ordinaire 5km h</option>
<option value="Marche rapide 6km h">Marche rapide 6km h</option>
<option value="Marche nordique">Marche nordique</option>
<option value="Musculation">Musculation</option>
<option value="Natation libre">Natation libre</option>
<option value="Natation brasse">Natation brasse</option>
<option value="Natation crawl">Natation crawl</option>
<option value="Natation dos">Natation dos</option>
<option value="Natation papillon">Natation papillon</option>
<option value="Natation nage synchronisée">Natation nage synchronisée</option>
<option value="Patinage sur glace">Patinage sur glace</option>
<option value="Roller">Roller</option>
<option value="Plongée sous-marine">Plongée sous-marine</option>
<option value="Polo">Polo</option>
<option value="Rafting">Rafting</option>
<option value="Rameur d appartement">Rameur d appartement</option>
<option value="Randonnée">Randonnée</option>
<option value="Raquette à neige">Raquette à neige</option>
<option value="Rugby">Rugby</option>
<option value="Skate">Skate</option>
<option value="Ski alpin">Ski alpin</option>
<option value="Ski de fond">Ski de fond</option>
<option value="Ski nautique">Ski nautique</option>
<option value="Squash">Squash</option>
<option value="Step">Step</option>
<option value="Surf">Surf</option>
<option value="Taï-chi">Taï-chi</option>
<option value="Tapis de course">Tapis de course</option>
<option value="Tennis de table">Tennis de table</option>
<option value="Tennis">Tennis</option>
<option value="Volley-ball">Volley-ball</option>
<option value="VTT Vélo Tout Terrain">VTT Vélo Tout Terrain</option>
<option value="Vélo elliptique">Vélo elliptique</option>
<option value="Water Polo">Water Polo</option>
<option value="Yoga">Yoga</option>
<option value="Zumba">Zumba</option>
</select>&nbsp;<br>&nbsp;<br>
</div>

<div class="centrage">
<input name="valider" value="VOIR LES ZONES !" type="submit">
</div>  
</form>
<div class="clear-zero">&nbsp;</div>
</div>
EOT;
if (isset($_POST['valider'])) {


if ($sport=="Aérobic") {$PICTOS="R-R-B-B-R-R-R";$imgmuscle="muscles-sollicites-en-faisant-l-aerobic.png";}
	else if ($sport=="Aïkido") {$PICTOS="R-R-B-R-B-R-R";$imgmuscle="muscles-sollicites-en-faisant-l-aikido.png";}
	else if ($sport=="Aquabiking") {$PICTOS="B-B-B-R-R-R-R";$imgmuscle="muscles-sollicites-en-faisant-l-aquabiking.png";}
	else if ($sport=="Aquagym") {$PICTOS="R-R-B-R-B-R-R";$imgmuscle="muscles-sollicites-en-faisant-l-aquagym.png";}
	else if ($sport=="Arts martiaux") {$PICTOS="R-R-B-R-B-B-R";$imgmuscle="muscles-sollicites-en-faisant-les-arts-martiaux.png";}
	else if ($sport=="Aviron") {$PICTOS="R-B-B-R-R-R-R";$imgmuscle="muscles-sollicites-en-faisant-l-aviron.png";}
	else if ($sport=="Badminton") {$PICTOS="R-B-B-R-B-R-R";$imgmuscle="muscles-sollicites-en-faisant-le-badminton.png";}
	else if ($sport=="Ballet danse") {$PICTOS="R-R-B-R-B-R-R";$imgmuscle="muscles-sollicites-en-faisant-le-ballet-danse.png";}
	else if ($sport=="Basket") {$PICTOS="R-R-R-R-B-R-R";$imgmuscle="muscles-sollicites-en-faisant-le-basket-ball.png";}
	else if ($sport=="Vélo-bicyclette") {$PICTOS="R-R-B-R-B-R-R";$imgmuscle="muscles-sollicites-en-faisant-le-velo-bicyclette-et-cyclisme.png";}
	else if ($sport=="Vélo stationnaire") {$PICTOS="B-B-B-R-B-R-R";$imgmuscle="muscles-sollicites-en-faisant-le-velo-d-appartement-stationnaire.png";}
	else if ($sport=="Vélo elliptique") {$PICTOS="R-R-B-R-R-R-R";$imgmuscle="muscles-sollicites-en-faisant-du-velo-elliptique.png";}
	else if ($sport=="Boxe") {$PICTOS="R-R-R-R-B-R-R";$imgmuscle="muscles-sollicites-en-faisant-la-boxe.png";}
	else if ($sport=="Corde à sauter") {$PICTOS="R-R-B-R-R-R-R";$imgmuscle="muscles-sollicites-en-faisant-de-la-corde-a-sauter.png";}
	else if ($sport=="Course à pied") {$PICTOS="B-B-B-R-R-R-R";$imgmuscle="muscles-sollicites-en-faisant-la-course-a-pied-le-running-footing-ou-jogging.png";}
	else if ($sport=="Danse") {$PICTOS="B-B-B-R-B-R-R";$imgmuscle="muscles-sollicites-en-faisant-la-danse.png";}
	else if ($sport=="Escalade") {$PICTOS="R-R-B-R-B-B-R";$imgmuscle="muscles-sollicites-en-faisant-l-escalade-et-la-varappe.png";}
	else if ($sport=="Escrime") {$PICTOS="R-R-B-R-B-R-R";$imgmuscle="muscles-sollicites-en-faisant-l-escrime-epee-et-fleuret.png";}
	else if ($sport=="Equitation") {$PICTOS="B-B-B-R-R-R-R";$imgmuscle="muscles-sollicites-en-faisant-l-equitation-monter-a-cheval.png";}
	else if ($sport=="Fitness") {$PICTOS="R-R-B-R-R-R-R";$imgmuscle="muscles-sollicites-en-faisant-le-fitness.png";}
	else if ($sport=="Football") {$PICTOS="B-B-B-R-B-R-R";$imgmuscle="muscles-sollicites-en-faisant-le-football.png";}
	else if ($sport=="Golf à pied") {$PICTOS="R-R-B-R-B-R-R";$imgmuscle="muscles-sollicites-en-faisant-le-golf.png";}
	else if ($sport=="Gymnastique") {$PICTOS="R-B-B-R-R-R-R";$imgmuscle="muscles-sollicites-en-faisant-la-gymnastique.png";}
	else if ($sport=="Halterophilie") {$PICTOS="R-R-B-R-R-B-R";$imgmuscle="muscles-sollicites-en-faisant-l-halterophilie.png";}
	else if ($sport=="Hand-ball") {$PICTOS="R-R-B-R-B-R-R";$imgmuscle="muscles-sollicites-en-faisant-le-hand-ball.png";}
	else if ($sport=="Hockey sur gazon") {$PICTOS="R-R-B-R-R-R-R";$imgmuscle="muscles-sollicites-en-faisant-le-hockey-sur-gazon.png";}
	else if ($sport=="Hockey sur glace") {$PICTOS="R-R-B-R-R-R-R";$imgmuscle="muscles-sollicites-en-faisant-le-hockey-sur-glace.png";}
	else if ($sport=="Judo") {$PICTOS="R-R-B-R-R-B-R";$imgmuscle="muscles-sollicites-en-faisant-le-judo.png";}
	else if ($sport=="Karaté") {$PICTOS="R-B-B-R-B-R-R";$imgmuscle="muscles-sollicites-en-faisant-le-karate.png";}
	else if ($sport=="Kayak") {$PICTOS="R-R-R-R-R-B-B";$imgmuscle="muscles-sollicites-en-faisant-le-kayak-en-riviere-ou-en-mer.png";}
	else if ($sport=="Kick Boxing") {$PICTOS="R-R-B-R-B-R-R";$imgmuscle="muscles-sollicites-en-faisant-le-kick-boxing.png";}
	else if ($sport=="Luge skeleton bobsleigh") {$PICTOS="B-B-B-R-R-B-R";$imgmuscle="muscles-sollicites-en-faisant-la-luge-le-skeleton-et-le-bobsleigh.png";}
	else if ($sport=="Marche ordinaire 5km h") {$PICTOS="B-B-B-R-R-R-R";$imgmuscle="muscles-sollicites-en-faisant-la-marche-a-pied-marche-ordinaire.png";}
	else if ($sport=="Marche rapide 6km h") {$PICTOS="B-B-B-R-R-R-R";$imgmuscle="muscles-sollicites-en-faisant-la-marche-rapide-ou-sportive.png";}
	else if ($sport=="Marche nordique") {$PICTOS="R-R-B-R-R-R-R";$imgmuscle="muscles-sollicites-en-faisant-la-marche-nordique-nordic-walking.png";}
	else if ($sport=="Musculation") {$PICTOS="R-R-R-R-R-R-R";$imgmuscle="muscles-sollicites-en-faisant-la-musculation.png";}
	else if ($sport=="Natation libre") {$PICTOS="R-R-B-R-B-R-R";$imgmuscle="muscles-sollicites-en-faisant-la-natation-libre.png";}
	else if ($sport=="Natation brasse") {$PICTOS="R-R-B-B-B-R-R";$imgmuscle="muscles-sollicites-en-faisant-la-natation-brasse.png";}
	else if ($sport=="Natation crawl") {$PICTOS="R-R-R-B-B-R-R";$imgmuscle="muscles-sollicites-en-faisant-la-natation-crawl.png";}
	else if ($sport=="Natation dos crawlé") {$PICTOS="R-R-B-R-B-R-R";$imgmuscle="muscles-sollicites-en-faisant-la-natation-dos-crawle.png";}
	else if ($sport=="Natation papillon") {$PICTOS="R-R-R-R-R-B-B";$imgmuscle="muscles-sollicites-en-faisant-la-natation-papillon.png";}
	else if ($sport=="Natation nage synchronisée") {$PICTOS="R-B-B-R-B-R-R";$imgmuscle="muscles-sollicites-en-faisant-la-natation-nage-synchronisee.png";}
	else if ($sport=="Patinage") {$PICTOS="B-B-B-R-R-R-R";$imgmuscle="muscles-sollicites-en-faisant-le-patinage-sur-glace.png";}
	else if ($sport=="Roller") {$PICTOS="B-R-B-R-B-R-R";$imgmuscle="muscles-sollicites-en-faisant-le-roller-patin-en-ligne.png";}
	else if ($sport=="Plongée sous-marine") {$PICTOS="R-B-B-R-B-R-R";$imgmuscle="muscles-sollicites-en-faisant-la-plongee-sous-marine.png";}
	else if ($sport=="Polo") {$PICTOS="R-R-R-R-R-R-R";$imgmuscle="muscles-sollicites-en-faisant-le-polo.png";}
	else if ($sport=="Rafting") {$PICTOS="R-R-R-R-R-B-B";$imgmuscle="muscles-sollicites-en-faisant-le-rafting.png";}
	else if ($sport=="Rameur d appartement") {$PICTOS="R-R-B-R-B-R-R";$imgmuscle="muscles-sollicites-en-faisant-le-rameur-d-appartement.png";}
	else if ($sport=="Randonnée") {$PICTOS="R-R-B-R-R-R-R";$imgmuscle="muscles-sollicites-en-faisant-la-randonnee-avec-ou-sans-sac.png";}
	else if ($sport=="Raquette à neige") {$PICTOS="R-R-B-B-R-R-R";$imgmuscle="muscles-sollicites-en-faisant-la-randonnee-en-raquette-a-neige.png";}
	else if ($sport=="Rugby") {$PICTOS="R-R-B-R-R-R-R";$imgmuscle="muscles-sollicites-en-faisant-le-rugby.png";}
	else if ($sport=="Skate") {$PICTOS="R-B-B-R-R-R-R";$imgmuscle="muscles-sollicites-en-faisant-le-skate-board-planche-a-roulette.png";}
	else if ($sport=="Ski alpin") {$PICTOS="B-B-B-R-B-R-R";$imgmuscle="muscles-sollicites-en-faisant-le-ski-alpin.png";}
	else if ($sport=="Ski de fond") {$PICTOS="R-R-B-R-R-R-R";$imgmuscle="muscles-sollicites-en-faisant-le-ski-de-randonnee-ou-ski-de-fond.png";}
	else if ($sport=="Ski nautique") {$PICTOS="R-R-B-R-R-R-R";$imgmuscle="muscles-sollicites-en-faisant-le-ski-nautique.png";}
	else if ($sport=="Squash") {$PICTOS="R-R-B-R-B-R-R";$imgmuscle="muscles-sollicites-en-faisant-le-squash.png";}
	else if ($sport=="Step") {$PICTOS="R-B-B-B-B-R-R";$imgmuscle="muscles-sollicites-en-faisant-le-step.png";}
	else if ($sport=="Surf") {$PICTOS="R-B-B-R-R-R-R";$imgmuscle="muscles-sollicites-en-faisant-le-surf.png";}
	else if ($sport=="Taï-chi") {$PICTOS="R-R-B-R-R-R-R";$imgmuscle="muscles-sollicites-en-faisant-le-tai-chi.png";}
	else if ($sport=="Tapis de course") {$PICTOS="B-B-B-R-R-R-R";$imgmuscle="muscles-sollicites-en-faisant-le-tapis-de-course.png";}
	else if ($sport=="Tennis") {$PICTOS="R-R-B-R-R-R-R";$imgmuscle="muscles-sollicites-en-faisant-le-tennis.png";}
	else if ($sport=="Tennis de table") {$PICTOS="R-R-B-R-B-R-R";$imgmuscle="muscles-sollicites-en-faisant-le-tennis-de-table-ping-pong.png";}
	else if ($sport=="Volley-ball") {$PICTOS="R-R-R-R-B-R-R";$imgmuscle="muscles-sollicites-en-faisant-le-volley-ball.png";}
	else if ($sport=="VTT Vélo Tout Terrain") {$PICTOS="R-R-B-R-B-R-R";$imgmuscle="muscles-sollicites-en-faisant-le-vtt-velo-tout-terrain.png";}
	else if ($sport=="Water Polo") {$PICTOS="R-R-B-R-R-B-R";$imgmuscle="muscles-sollicites-en-faisant-le-water-polo.png";}
	else if ($sport=="Yoga") {$PICTOS="B-B-B-R-R-B-R";$imgmuscle="muscles-sollicites-en-faisant-le-yoga.png";}
	else if ($sport=="Zumba") {$PICTOS="R-B-B-R-B-R-R";$imgmuscle="muscles-sollicites-en-faisant-la-zumba.png";}
	
	$imgmuscle = "/wp-content/uploads/muscles/".$imgmuscle;
	$lipictos = explode("-", $PICTOS);
	$libras = "liocmb17".$lipictos[0];
	$liepaule = "liocmb17".$lipictos[1];
	$lipoitrine = "liocmb17".$lipictos[2];
	$liabdos = "liocmb17".$lipictos[3];
	$lidos = "liocmb17".$lipictos[4];
	$lifessiers = "liocmb17".$lipictos[5];
	$lijambes = "liocmb17".$lipictos[6];
	

   $codehtml .= <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outils-zones-muscles-1.png">
</div>
<div class="ocm-b17">
<div class="clear-zero">&nbsp;</div>
&nbsp;
<div style="text-align: center;"> 
<h3 style="text-align: center;"><b><span style="color: #ffffff;"> $sport : Les zones du corps sollicitées ! </span></b></h3>
<p style="text-align: center;"><span style="color: #ffffff;""><em>"Les zones en rose représentent les principales régions du corps travaillées"</em></span></p>
<img style="text-align: center;" src="/wp-content/uploads/ligne-outil.png"/>
</div> 
<div class="demiocm-b17"><img src="$imgmuscle" alt="muscles sollicités pour $sport"></div>
<div class="demiocm-b17">
&nbsp;
&nbsp;
<ul class="$libras"><li>Bras</li></ul>
<ul class="$liepaule"><li>Epaule</li></ul>
<ul class="$lipoitrine"><li>Poitrine</li></ul>
<ul class="$liabdos"><li>Abdos</li></ul>
<ul class="$lidos"><li>Dos</li></ul>
<ul class="$lifessiers"><li>Fessiers</li></ul>
<ul class="$lijambes"><li>Jambes</li></ul>

</div>
<div class="clear-zero">&nbsp;</div>
</div>


<div class="ocm-bl1">
<span class="outil-action-rose">V</span><span class="outil-action-noir">ous souhaitez maigrir en faisant du sport ? Poursuivez l'analyse !</span>
<form name="anaform" class="ocm-form" method="post" action="#analyse">
<span class="rosep">Vous êtes</span>
<ul class="ul_calc"> 
<li><input id="femme" name="sexe" value="2" type="radio" $hek2/><label for="femme">Une femme</label></li> 
<li><input id="homme" name="sexe" value="1" type="radio" $hek1/><label for="homme">Un homme</label></li></ul>
<div class="clear">
<div class="ocm-col3"><span class="rosep">Votre âge</span><br><input name="age" class="ocm-input1" value="$age" type="text"></div>
<div class="ocm-col3"><span class="rosep">Votre taille (cm)</span><br><input name="taille" class="ocm-input1" value="$taille" type="text"></div>
<div class="ocm-col3"><span class="rosep">Votre poids (KG)</span><br><input name="poids" class="ocm-input1" value="$poids" type="text"></div>
</div>
<div class="clear">
<div class="centrage"><span class="rosep">Quel est votre objectif de poids? (en KG)</span><br><input name="obj" class="ocm-input1" value="$obj" type="text"></div></div>
<div class="clear">
<input type="hidden" name="sport" value="$sport" />
<input type="hidden" name="valider" value="CALCULER" />
<div id="analyse" class="centrage"><br />&nbsp;
<input name="valider2" value="CALCULER" type="submit">
</div> </div>


</form>
<div class="clear-zero">&nbsp;</div>
</div>
EOT;
}

if (isset($_POST['valider2'])) {
 $IMC=($poids/(($taille/100)*($taille/100)));
   $IMC=round($IMC,1);
      if ($IMC<18.5) {
   $STATUT= "maigreur";
   $IMAGE="imc-statut-maigreur.png";
   }
   else if ($IMC<25) {
   $STATUT= "corpulence normale";
   $IMAGE="imc-statut-normal.png";
   }
   else if ($IMC<30) {
   $STATUT= "surpoids";
   $IMAGE="imc-statut-suroids.png";
   } 
   else {
   $STATUT= "obèsité";
   $IMAGE="imc-statut-obesite.png";
   }
   
      if ($sexe=="2") {$PIL=($taille-100-(($taille-150)/2.5));}
   else if ($sexe=="1") {$PIL=($taille-100-(($taille-150)/4));}
$PIL=round($PIL,1);
   
   $pmaa = (($obj+$PIL)/2);
   $kap = ($poids-$pmaa);
   $vakap = abs($kap);
   
       if ($kap>0) {$textp="Poids moyen à perdre";}
   else if ($kap<0) {$textp="Poids moyen à gagner";}
   else {$textp="Vous êtes à l'équilibre";} 
   
       if ($kap<0.1) {$texto1="Vous n'avez pas de poids à perdre. Félicitations.";
   $lienb="<div class=\"ocm-liena\"><a href=\"/categorie-produit/coffret-minceur-box-de-regime/\">VOIR TOUS NOS PROGRAMMES</a></div>";	   
	   }
   else if ($kap<1) {$texto1="Vous êtes presque à votre poids d'équilibre. Vous pouvez perdre ce léger superflus en découvrant notre programme.";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-s-a-3-kg-14-jours/\">VOIR MON PROGRAMME</a></div>";
   }	   
   else if ($kap<3) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">2  semaines!</span>";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-s-a-3-kg-14-jours/\">VOIR MON PROGRAMME</a></div>";
   }
   else if ($kap<6) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">4  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-m-3-a-6-kg-28-jours/\">VOIR MON PROGRAMME</a></div>";}
   else if ($kap<9) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">6  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-l-6-a-9-kg-42-jours/\">VOIR MON PROGRAMME</a></div>";}
   else if ($kap<12) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">10  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xl-9-a-12-kg-56-jours/\">VOIR MON PROGRAMME</a></div>";}
    else if ($kap<15) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">10  semaines!</span>";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xxl-12-a-15-kg-70-jours/\">VOIR MON PROGRAMME</a></div>";}
   else {$texto1="En étant raisonnable vous pouvez vous fixer un objectif d'environ <span class=\"rosep\">15 kg</span> et l'atteindre au bout de <span class=\"rosep\">10 semaines!</span>";
     $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xxl-12-a-15-kg-70-jours/\">VOIR MON PROGRAMME</a></div>";} 
   
   $codehtml .= <<<EOT
<div class="ocm-noir"><img src="/wp-content/uploads/outils-zones-muscles-2.png">
</div>
<div class="ocm-bl3">
<div class="ocm-blancg">Votre Indice de Masse Corporelle</div>
<p>IMC = <span class="rosegrasspan">$IMC</span><br />
Statut = <span class="rosegrasspan">$STATUT</span></p>
 <img class="aligncenter" src="/wp-content/uploads/$IMAGE"> 
<div class="ocm-blancg">Vos indicateurs de poids</div>
 <p>
  Votre poids actuel = <span class="rosegrasspan">$poids</span> kg<br />
 Poids idéal (formule de Lorentz) = <span class="rosegrasspan">$PIL</span> kg<br />
Objectif personnel = <span class="rosegrasspan">$obj</span> kg
</p>
<div class="float50">
  <div class="ocm-bl4">Poids moyen à atteindre</div>
  <div class="ocm-circle"><br><span class="ocm-res14r">$pmaa</span><br><span class="result14p">Kg</span></div>
</div>
<div class="float50">
    <div class="ocm-bl4">$textp</div>
	<div class="ocm-circle"><br><span class="ocm-res14r">$vakap</span><br><span class="result14p">Kg</span></div>
</div>
<div class="clear-zero">&nbsp;</div>
</div>
<div class="ocm-noir">
<img src="/wp-content/uploads/outils-zones-muscles-3.png">
</div>
<div class="ocm-bl1">
<div class="clear">
<div class="centrage"><span class="rosep">Quel objectif et comment le concrétiser?</span></div>
</div>
$texto1
<div class="clear-zero">&nbsp;</div>
$lienb
<img src="/wp-content/uploads/ligne-objectif-final.png">
</div>
EOT;
}

   $codehtml .= <<<EOT
<div class="clear-zero">&nbsp;</div>
EOT;


return $codehtml;
}
add_shortcode( 'calculettesportmuscle', 'calculette_sport_muscle' );


//Outils bienfaits et bénéfices par sport
function calculette_sport_bienfaits($atts) {
extract( shortcode_atts( array(
      'url'     => '',
	  'sport'     => '',
   ), $atts, 'calculettesportbienfaits' ) );
   
  
   $sexe=$_POST['sexe'];   
   $age=$_POST['age'];
   $taille=$_POST['taille'];
	$taille = preg_replace('*,*','.',$taille);
   $poids=$_POST['poids'];
	$poids = preg_replace('*,*','.',$poids);
   $act=$_POST['act'];
if ($sexe==1) {$hek1="checked ";}
else {$hek2="checked ";}

$obj=$_POST['obj'];
	$obj = preg_replace('*,*','.',$obj);
	
	if (isset($_POST['sport'])) {$sport=$_POST['sport'];}
	else {$sport=$sport;} 	
	
   $codehtml = <<<EOT
<div id="resultat1"> </div>
			   
			<div class="ocm-bienfaitsl1">

<form name="imcform" class="ocm-form" method="post" action="#besoin">

<div class="clear">
<div id="besoin"><span class="rosep">Sélectionnez votre activité et cliquez pour voir les bienfaits !</span>&nbsp;
</div>
<select name="sport">
<option value="$sport">$sport</option>
<option value="Aérobic">Aérobic</option>
<option value="Aïkido">Aïkido</option>
<option value="Aquabiking">Aquabiking</option> 
<option value="Aquagym">Aquagym</option>
<option value="Arts martiaux">Art martiaux (en général)</option>
<option value="Aviron">Aviron</option>
<option value="Aviron">Aviron</option>
<option value="Badminton">Badminton</option>
<option value="Ballet danse">Ballet danse</option>
<option value="Basket-Ball">Basket-Ball</option>
<option value="Vélo-bicyclette">Vélo-bicyclette</option>
<option value="Vélo stationnaire">Vélo stationnaire</option>
<option value="Boxe">Boxe</option>
<option value="Corde à sauter">Corde à sauter</option>
<option value="Course à pied">Course à pied</option>
<option value="Danse">Danse</option>
<option value="Equitation">Equitation</option>
<option value="Escalade">Escalade</option>
<option value="Escrime">Escrime</option>
<option value="Fitness">Fitness</option>
<option value="Football">Football</option>
<option value="Golf à pied">Golf à pied</option>
<option value="Gymnastique">Gymnastique</option>
<option value="Halterophilie">Halterophilie</option>
<option value="Hand-ball">Hand-ball</option>
<option value="Hockey sur gazon">Hockey sur gazon</option>
<option value="Hockey sur glace">Hockey sur glace</option>
<option value="Judo">Judo</option>
<option value="Karaté">Karaté</option>
<option value="Kayak">Kayak</option>
<option value="Kick Boxing">Kick Boxing</option>
<option value="Luge skeleton bobsleigh">Luge skeleton bobsleigh</option>
<option value="Marche ordinaire 5km h">Marche ordinaire 5km h</option>
<option value="Marche rapide 6km h">Marche rapide 6km h</option>
<option value="Marche nordique">Marche nordique</option>
<option value="Musculation">Musculation</option>
<option value="Natation libre">Natation libre</option>
<option value="Natation brasse">Natation brasse</option>
<option value="Natation crawl">Natation crawl</option>
<option value="Natation dos">Natation dos</option>
<option value="Natation papillon">Natation papillon</option>
<option value="Natation nage synchronisée">Natation nage synchronisée</option>
<option value="Patinage sur glace">Patinage sur glace</option>
<option value="Roller">Roller</option>
<option value="Plongée sous-marine">Plongée sous-marine</option>
<option value="Polo">Polo</option>
<option value="Rafting">Rafting</option>
<option value="Rameur d appartement">Rameur d appartement</option>
<option value="Randonnée">Randonnée</option>
<option value="Raquette à neige">Raquette à neige</option>
<option value="Rugby">Rugby</option>
<option value="Skate">Skate</option>
<option value="Ski alpin">Ski alpin</option>
<option value="Ski de fond">Ski de fond</option>
<option value="Ski nautique">Ski nautique</option>
<option value="Squash">Squash</option>
<option value="Step">Step</option>
<option value="Surf">Surf</option>
<option value="Taï-chi">Taï-chi</option>
<option value="Tapis de course">Tapis de course</option>
<option value="Tennis de table">Tennis de table</option>
<option value="Tennis">Tennis</option>
<option value="Volley-ball">Volley-ball</option>
<option value="VTT Vélo Tout Terrain">VTT Vélo Tout Terrain</option>
<option value="Vélo elliptique">Vélo elliptique</option>
<option value="Water Polo">Water Polo</option>
<option value="Yoga">Yoga</option>
<option value="Zumba">Zumba</option>
</select>&nbsp;<br>&nbsp;<br>
</div>

<div class="centrage">
<input name="valider" value="VOIR LES BIENFAITS !" type="submit">
&nbsp;&nbsp;<hr size="2" width="5%"></div>  
</form>
<div class="clear-zero">&nbsp;</div>
</div>
EOT;
if (isset($_POST['valider'])) {


if ($sport=="Aérobic") {$PICTOS="A1-B2-C1-D2-E1-F1-G2-H2";}
	else if ($sport=="Aïkido") {$PICTOS="A2-B1-C2-D2-E1-F1-G2-H1";}
	else if ($sport=="Aquabiking") {$PICTOS="A1-B2-C1-D1-E1-F2-G2-H2";}
	else if ($sport=="Aquagym") {$PICTOS="A1-B2-C1-D1-E1-F2-G2-H2";}
	else if ($sport=="Arts martiaux") {$PICTOS="A1-B1-C2-D2-E1-F1-G2-H1";}
	else if ($sport=="Aviron") {$PICTOS="A1-B1-C1-D2-E1-F2-G1-H1";}
	else if ($sport=="Badminton") {$PICTOS="A1-B2-C1-D2-E1-F1-G1-H1";}
	else if ($sport=="Ballet danse") {$PICTOS="A1-B1-C2-D2-E2-F1-G2-H1";}
	else if ($sport=="Basket") {$PICTOS="A1-B2-C1-D2-E1-F2-G2-H1";}
	else if ($sport=="Vélo-bicyclette") {$PICTOS="A1-B2-C2-D1-E1-F2-G1-H1";}
	else if ($sport=="Vélo stationnaire") {$PICTOS="A1-B2-C2-D1-E1-F2-G2-H2";}
	else if ($sport=="Vélo elliptique") {$PICTOS="A1-B1-C2-D1-E1-F2-G2-H2";}
	else if ($sport=="Boxe") {$PICTOS="A1-B1-C2-D2-E2-F1-G2-H1";}
	else if ($sport=="Corde à sauter") {$PICTOS="A1-B2-C2-D2-E1-F1-G2-H2";}
	else if ($sport=="Course à pied") {$PICTOS="A1-B1-C2-D2-E1-F2-G1-H2";}
	else if ($sport=="Danse") {$PICTOS="A1-B1-C1-D2-E1-F1-G2-H2";}
	else if ($sport=="Escalade") {$PICTOS="A1-B2-C2-D2-E1-F1-G1-H1";}
	else if ($sport=="Escrime") {$PICTOS="A1-B1-C2-D2-E1-F1-G2-H1";}
	else if ($sport=="Equitation") {$PICTOS="A2-B1-C2-D1-E2-F1-G1-H1";}
	else if ($sport=="Fitness") {$PICTOS="A1-B2-C1-D2-E1-F1-G2-H2";}
	else if ($sport=="Football") {$PICTOS="A1-B2-C1-D2-E1-F2-G2-H1";}
	else if ($sport=="Golf à pied") {$PICTOS="A2-B2-C1-D1-E1-F1-G1-H1";}
	else if ($sport=="Gymnastique") {$PICTOS="A1-B2-C2-D2-E2-F1-G2-H1";}
	else if ($sport=="Halterophilie") {$PICTOS="A2-B2-C2-D2-E1-F1-G2-H2";}
	else if ($sport=="Hand-ball") {$PICTOS="A1-B2-C1-D2-E1-F2-G2-H1";}
	else if ($sport=="Hockey sur gazon") {$PICTOS="A1-B2-C1-D2-E1-F2-G2-H1";}
	else if ($sport=="Hockey sur glace") {$PICTOS="A1-B2-C1-D2-E1-F2-G2-H1";}
	else if ($sport=="Judo") {$PICTOS="A2-B1-C2-D2-E2-F1-G2-H1";}
	else if ($sport=="Karaté") {$PICTOS="A2-B1-C2-D2-E2-F1-G2-H1";}
	else if ($sport=="Kayak") {$PICTOS="A1-B1-C2-D1-E1-F2-G1-H1";}
	else if ($sport=="Kick Boxing") {$PICTOS="A1-B1-C2-D2-E1-F2-G2-H1";}
	else if ($sport=="Luge skeleton bobsleigh") {$PICTOS="A2-B1-C2-D1-E2-F2-G2-H1";}
	else if ($sport=="Marche ordinaire 5km h") {$PICTOS="A2-B1-C2-D1-E1-F2-G1-H2";}
	else if ($sport=="Marche rapide 6km h") {$PICTOS="A2-B1-C2-D2-E1-F1-G1-H2";}
	else if ($sport=="Marche nordique") {$PICTOS="A1-B2-C2-D2-E1-F1-G1-H2";}
	else if ($sport=="Musculation") {$PICTOS="A2-B1-C2-D2-E1-F2-G2-H1";}
	else if ($sport=="Natation libre") {$PICTOS="A2-B1-C2-D1-E1-F1-G2-H2";}
	else if ($sport=="Natation brasse") {$PICTOS="A1-B1-C2-D1-E1-F1-G2-H2";}
	else if ($sport=="Natation crawl") {$PICTOS="A1-B1-C2-D1-E1-F1-G2-H2";}
	else if ($sport=="Natation dos crawlé") {$PICTOS="A1-B1-C2-D1-E1-F1-G2-H2";}
	else if ($sport=="Natation papillon") {$PICTOS="A1-B1-C2-D1-E1-F1-G2-H2";}
	else if ($sport=="Natation nage synchronisée") {$PICTOS="A1-B1-C1-D2-E2-F1-G2-H1";}
	else if ($sport=="Patinage") {$PICTOS="A2-B1-C2-D2-E1-F1-G2-H1";}
	else if ($sport=="Roller") {$PICTOS="A2-B1-C2-D2-E1-F1-G1-H1";}
	else if ($sport=="Plongée sous-marine") {$PICTOS="A1-B1-C2-D1-E2-F1-G1-H2";}
	else if ($sport=="Polo") {$PICTOS="A1-B1-C1-D2-E1-F2-G1-H1";}
	else if ($sport=="Rafting") {$PICTOS="A2-B1-C1-D2-E1-F2-G1-H1";}
	else if ($sport=="Rameur d appartement") {$PICTOS="A1-B2-C2-D1-E1-F2-G2-H2";}
	else if ($sport=="Randonnée") {$PICTOS="A2-B1-C2-D2-E1-F2-G1-H1";}
	else if ($sport=="Raquette à neige") {$PICTOS="A1-B1-C2-D2-E1-F2-G1-H2";}
	else if ($sport=="Rugby") {$PICTOS="A1-B1-C1-D2-E1-F2-G2-H1";}
	else if ($sport=="Skate") {$PICTOS="A2-B1-C2-D2-E1-F1-G2-H1";}
	else if ($sport=="Ski alpin") {$PICTOS="A1-B1-C2-D2-E1-F1-G1-H1";}
	else if ($sport=="Ski de fond") {$PICTOS="A2-B1-C2-D2-E1-F1-G1-H1";}
	else if ($sport=="Ski nautique") {$PICTOS="A1-B1-C2-D2-E1-F1-G1-H1";}
	else if ($sport=="Squash") {$PICTOS="A1-B2-C2-D2-E1-F1-G2-H1";}
	else if ($sport=="Step") {$PICTOS="A1-B2-C1-D2-E1-F1-G2-H1";}
	else if ($sport=="Surf") {$PICTOS="A1-B1-C2-D2-E1-F1-G1-H1";}
	else if ($sport=="Taï-chi") {$PICTOS="A2-B1-C1-D1-E2-F1-G1-H1";}
	else if ($sport=="Tapis de course") {$PICTOS="A1-B1-C2-D2-E1-F2-G2-H2";}
	else if ($sport=="Tennis") {$PICTOS="A1-B1-C2-D2-E1-F1-G2-H1";}
	else if ($sport=="Tennis de table") {$PICTOS="A2-B1-C2-D2-E1-F1-G2-H1";}
	else if ($sport=="Volley-ball") {$PICTOS="A2-B1-C1-D2-E1-F1-G2-H1";}
	else if ($sport=="VTT Vélo Tout Terrain") {$PICTOS="A2-B1-C2-D2-E1-F1-G1-H1";}
	else if ($sport=="Water Polo") {$PICTOS="A1-B2-C1-D1-E1-F1-G2-H1";}
	else if ($sport=="Yoga") {$PICTOS="A2-B1-C2-D1-E2-F1-G2-H2";}
	else if ($sport=="Zumba") {$PICTOS="A1-B2-C1-D2-E1-F1-G2-H1";}
	
	$imgmuscle = "/wp-content/uploads/bienfaits_sport/".$imgmuscle;
	$lipictos = explode("-", $PICTOS);
	$licardio = "libs".$lipictos[0];
	$licontrole = "libs".$lipictos[1];
	$lisocialibilisation = "libs".$lipictos[2];
	$liarticulations = "libs".$lipictos[3];
	$limuscles = "libs".$lipictos[4];
	$lisouplesse = "libs".$lipictos[5];
	$lisportplaisir = "libs".$lipictos[6];
	$lireflexes = "libs".$lipictos[7];

	

   $codehtml .= <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/etape-outil11.png">
</div>
<div class="ocm-b17">
<div class="clear-zero">&nbsp;</div>&nbsp;
<div style="text-align: center;"> 
<h3 style="text-align: center;"><b><span style="color: #ffffff;"> $sport : Les bienfaits ! </span></b></h3>
<p style="text-align: center;"><span style="color: #ffffff;"><em>"En surgras, les principaux bénéfices"</em> </span></p>
<img style="text-align: center;" src="/wp-content/uploads/ligne-outil.png"/>&nbsp;</div> 


<div class="demiocm-bienfaits-test">
<div class="clear"><div style="text-align: center;" class="leftlic"><img src="/wp-content/uploads/bienfaits_sport/$lipictos[0].png"/></div><div style="text-align: center;" class="$licardio">Endurance cardio-respiratoire</div></div>
<div class="clear"><div style="text-align: center;" class="leftlic"><img src="/wp-content/uploads/bienfaits_sport/$lipictos[1].png"></div><div style="text-align: center;" class="$licontrole">Stress & Confiance en soi</div></div>
<div class="clear"><div style="text-align: center;" class="leftlic"><img src="/wp-content/uploads/bienfaits_sport/$lipictos[2].png"></div><div style="text-align: center;" class="$lisocialibilisation">Sociabilité & Esprit d'équipe</div></div>
<div class="clear"><div style="text-align: center;" class="leftlic"><img src="/wp-content/uploads/bienfaits_sport/$lipictos[3].png"></div><div style="text-align: center;" class="$liarticulations">Doux pour les articulations</div></div>

</div> 

<div class="demiocm-bienfaits-test">
<div class="clear"><div style="text-align: center;" class="leftlic"><img src="/wp-content/uploads/bienfaits_sport/$lipictos[4].png"></div><div style="text-align: center;" class="$limuscles">Renforcement musculaire</div></div>
<div class="clear"><div style="text-align: center;" class="leftlic"><img src="/wp-content/uploads/bienfaits_sport/$lipictos[5].png"></div><div style="text-align: center;" class="$lisouplesse">Gain en souplesse</div></div>
<div class="clear"><div style="text-align: center;" class="leftlic"><img src="/wp-content/uploads/bienfaits_sport/$lipictos[6].png"></div><div style="text-align: center;" class="$lisportplaisir">Nature & Plein air </div></div>
<div class="clear"><div style="text-align: center;" class="leftlic"><img src="/wp-content/uploads/bienfaits_sport/$lipictos[7].png"></div><div style="text-align: center;" class="$lireflexes">Reflexes & Agilité</div></div>

</div> 




<div class="clear-zero">&nbsp;</div>
</div>


<div class="ocm-bl1">
<span class="outil-action-rose">V</span><span class="outil-action-noir">ous souhaitez maigrir en faisant du sport ? Poursuivez l'analyse !</span>
<form name="anaform" class="ocm-form" method="post" action="#analyse">
<span class="rosep">Vous êtes</span>
<ul class="ul_calc"> 
<li><input id="femme" name="sexe" value="2" type="radio" $hek2/><label for="femme">Une femme</label></li> 
<li><input id="homme" name="sexe" value="1" type="radio" $hek1/><label for="homme">Un homme</label></li></ul>
<div class="clear">
<div class="ocm-col3"><span class="rosep">Votre âge</span><br><input name="age" class="ocm-input1" value="$age" type="text"></div>
<div class="ocm-col3"><span class="rosep">Votre taille (cm)</span><br><input name="taille" class="ocm-input1" value="$taille" type="text"></div>
<div class="ocm-col3"><span class="rosep">Votre poids (KG)</span><br><input name="poids" class="ocm-input1" value="$poids" type="text"></div>
</div>
<div class="clear">
<div class="centrage"><span class="rosep">Quel est votre objectif de poids? (en KG)</span><br><input name="obj" class="ocm-input1" value="$obj" type="text"></div></div>
<div class="clear">
<input type="hidden" name="sport" value="$sport" />
<input type="hidden" name="valider" value="CALCULER" />
<div id="analyse" class="centrage"><br />&nbsp;
<input name="valider2" value="CALCULER" type="submit">
</div> </div>


</form>
<div class="clear-zero">&nbsp;</div>
</div>
EOT;
}

if (isset($_POST['valider2'])) {
 $IMC=($poids/(($taille/100)*($taille/100)));
   $IMC=round($IMC,1);
      if ($IMC<18.5) {
   $STATUT= "maigreur";
   $IMAGE="imc-statut-maigreur.png";
   }
   else if ($IMC<25) {
   $STATUT= "corpulence normale";
   $IMAGE="imc-statut-normal.png";
   }
   else if ($IMC<30) {
   $STATUT= "surpoids";
   $IMAGE="imc-statut-suroids.png";
   } 
   else {
   $STATUT= "obèsité";
   $IMAGE="imc-statut-obesite.png";
   }
   
      if ($sexe=="2") {$PIL=($taille-100-(($taille-150)/2.5));}
   else if ($sexe=="1") {$PIL=($taille-100-(($taille-150)/4));}
$PIL=round($PIL,1);
   
   $pmaa = (($obj+$PIL)/2);
   $kap = ($poids-$pmaa);
   $vakap = abs($kap);
   
       if ($kap>0) {$textp="Poids moyen à perdre";}
   else if ($kap<0) {$textp="Poids moyen à gagner";}
   else {$textp="Vous êtes à l'équilibre";} 
   
       if ($kap<0.1) {$texto1="Vous n'avez pas de poids à perdre. Félicitations.";
   $lienb="<div class=\"ocm-liena\"><a href=\"/categorie-produit/coffret-minceur-box-de-regime/\">VOIR TOUS NOS PROGRAMMES</a></div>";	   
	   }
   else if ($kap<1) {$texto1="Vous êtes presque à votre poids d'équilibre. Vous pouvez perdre ce léger superflus en découvrant notre programme.";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-s-a-3-kg-14-jours/\">VOIR MON PROGRAMME</a></div>";
   }	   
   else if ($kap<3) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">2  semaines!</span>";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-s-a-3-kg-14-jours/\">VOIR MON PROGRAMME</a></div>";
   }
   else if ($kap<6) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">4  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-m-3-a-6-kg-28-jours/\">VOIR MON PROGRAMME</a></div>";}
   else if ($kap<9) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">6  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-l-6-a-9-kg-42-jours/\">VOIR MON PROGRAMME</a></div>";}
   else if ($kap<12) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">10  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xl-9-a-12-kg-56-jours/\">VOIR MON PROGRAMME</a></div>";}
    else if ($kap<15) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">10  semaines!</span>";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xxl-12-a-15-kg-70-jours/\">VOIR MON PROGRAMME</a></div>";}
   else {$texto1="En étant raisonnable vous pouvez vous fixer un objectif d'environ <span class=\"rosep\">15 kg</span> et l'atteindre au bout de <span class=\"rosep\">10 semaines!</span>";
     $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xxl-12-a-15-kg-70-jours/\">VOIR MON PROGRAMME</a></div>";} 
   
   $codehtml .= <<<EOT
<div class="ocm-noir"><img src="/wp-content/uploads/etape-outil2.png">
</div>
<div class="ocm-bl3">
<div class="ocm-blancg">Votre Indice de Masse Corporelle</div>
<p>IMC = <span class="rosegrasspan">$IMC</span><br />
Statut = <span class="rosegrasspan">$STATUT</span></p>
 <img class="aligncenter" src="/wp-content/uploads/$IMAGE"> 
<div class="ocm-blancg">Vos indicateurs de poids</div>
 <p>
  Votre poids actuel = <span class="rosegrasspan">$poids</span> kg<br />
 Poids idéal (formule de Lorentz) = <span class="rosegrasspan">$PIL</span> kg<br />
Objectif personnel = <span class="rosegrasspan">$obj</span> kg
</p>
<div class="float50">
  <div class="ocm-bl4">Poids moyen à atteindre</div>
  <div class="ocm-circle"><br><span class="ocm-res14r">$pmaa</span><br><span class="result14p">Kg</span></div>
</div>
<div class="float50">
    <div class="ocm-bl4">$textp</div>
	<div class="ocm-circle"><br><span class="ocm-res14r">$vakap</span><br><span class="result14p">Kg</span></div>
</div>
<div class="clear-zero">&nbsp;</div>
</div>
<div class="ocm-noir">
<img src="/wp-content/uploads/etape-outil-3.png">
</div>
<div class="ocm-bl1">
<div class="clear">
<div class="centrage"><span class="rosep">Quel objectif et comment le concrétiser?</span></div>
</div>
$texto1
<div class="clear-zero">&nbsp;</div>
$lienb
<img src="/wp-content/uploads/ligne-objectif-final.png">
</div>
EOT;
}

   $codehtml .= <<<EOT
<div class="clear-zero">&nbsp;</div>
EOT;


return $codehtml;
}
add_shortcode( 'calculettesportbienfaits', 'calculette_sport_bienfaits' );




//Calculette maigrir selon le sport


function calculette_sport_maigrir($atts) {
extract( shortcode_atts( array(
      'url'     => '',
	  'sport'     => '',
   ), $atts, 'calculettesportmaigrir' ) );
   
  
   $sexe=$_POST['sexe'];   
   $age=$_POST['age'];
   $taille=$_POST['taille'];
	$taille = preg_replace('*,*','.',$taille);
   $poids=$_POST['poids'];
	$poids = preg_replace('*,*','.',$poids);
   $act=$_POST['act'];
if ($sexe==1) {$hek1="checked ";}
else {$hek2="checked ";}

$obj=$_POST['obj'];
	$obj = preg_replace('*,*','.',$obj);
	
	if (isset($_POST['sport'])) {$sport=$_POST['sport'];}
	else {$sport=$sport;} 
		
	$temps=$_POST['temps'];	
	
   $codehtml = <<<EOT
<div id="resultat1"> </div>
			<div class="ocm-titre1"><h3 class="police-blanche">Calculette des dépenses en calories : $sport</h3>
			<h4 class="police-blanche">" Estimation mensuelle de perte de poids en kilos selon le nombre de séances par semaine ! "</h4></div>   
			<div class="ocm-bl1">

<form name="imcform" class="ocm-form" method="post" action="#besoin">

<div class="clear">
<em>En sélectionnant une activité sportive de votre choix et la durée d’une séance, cette calculette RegiVia vous permettra d’estimer votre perte de poids mensuelle "en kilos" selon le nombre d’entrainements par semaine.</em><br />&nbsp;<br />
<div class="ocm-col2"><span class="rosep">Votre sport</span><br>
<select name="sport">
<option value="$sport">$sport</option>
<option value="Aérobic intensité normale">Aérobic intensité normale</option>
<option value="Aérobic haute intensité">Aérobic haute intensité</option>
<option value="Aïkido">Aïkido</option>
<option value="Aquabiking">Aquabiking</option> 
<option value="Aquagym">Aquagym</option>
<option value="Arts martiaux">Art martiaux (en général)</option>
<option value="Aviron modéré">Aviron modéré</option>
<option value="Aviron intense">Aviron intense</option>
<option value="Badminton calme">Badminton calme</option>
<option value="Badminton intermédiaire">Badminton intermédiaire</option>
<option value="Badminton intense">Badminton intense</option>
<option value="Ballet danse">Ballet danse</option>
<option value="Basket récréatif">Basket récréatif</option>
<option value="Basket compétition">Basket compétition</option>
<option value="Bicyclette Vélo Effort léger">Bicyclette Vélo Effort léger</option>
<option value="Vélo Effort moyen">Vélo Effort moyen</option>
<option value="Vélo intense 22-30km/h">Vélo intense 22-30km/h</option>
<option value="Vélo très intense sup à 30km/h">Vélo très intense sup à 30km/h</option>
<option value="Vélo elliptique faible">Vélo elliptique faible</option>
<option value="Vélo elliptique moyen">Vélo elliptique moyen</option>
<option value="Vélo elliptique intense">Vélo elliptique intense</option>
<option value="Vélo stationnaire faible">Vélo stationnaire faible</option>
<option value="Vélo stationnaire moyen">Vélo stationnaire moyen</option>
<option value="Vélo stationnaire intense">Vélo stationnaire intense</option>
<option value="Vélo stationnaire très intense">Vélo stationnaire très intense</option>
<option value="Boxe intensité faible">Boxe intensité faible</option>
<option value="Boxe intensité modérée">Boxe intensité modérée</option>
<option value="Boxe intensité forte">Boxe intensité forte</option>
<option value="Corde à sauter modérée">Corde à sauter modérée</option>
<option value="Corde à sauter intense">Corde à sauter intense</option>
<option value="Course à pied faible avec marche">Course à pied faible avec marche</option>
<option value="Course à pied faible">Course à pied faible</option>
<option value="Course à pied 8km h">Course à pied 8km h</option>
<option value="Course à pied 9,5km/h">Course à pied 9,5km/h</option>
<option value="Course à pied 13km/h">Course à pied 13km/h</option>
<option value="Course à pied cross-country">Course à pied cross-country</option>
<option value="Course à pied sur place">Course à pied sur place</option>
<option value="Course sur tapis 8km h">Course sur tapis 8km h</option>
<option value="Course sur tapis 9,5km/h">Course sur tapis 9,5km/h</option>
<option value="Course sur tapis 13km/h">Course sur tapis 13km/h</option>
<option value="Danse calme">Danse calme</option>
<option value="Danse modérée">Danse modérée</option>
<option value="Danse intense">Danse intense</option>
<option value="Equitation au pas">Equitation au pas</option>
<option value="Equitation trot et galop">Equitation trot et galop</option>
<option value="Escalade">Escalade</option>
<option value="Escrime récréatif">Escrime récréatif</option>
<option value="Escrime intense">Escrime intense</option>
<option value="Fitness intensité faible">Fitness intensité faible</option>
<option value="Fitness intensité moyenne">Fitness intensité moyenne</option>
<option value="Fitness intensité forte">Fitness intensité forte</option>
<option value="Football modéré">Football modéré</option>
<option value="Football intense">Football intense</option>
<option value="Golf à pied">Golf à pied</option>
<option value="Golf en voiturette">Golf en voiturette</option>
<option value="Gymnastique">Gymnastique</option>
<option value="Halterophilie">Halterophilie</option>
<option value="Hand-ball">Hand-ball</option>
<option value="Hockey sur gazon">Hockey sur gazon</option>
<option value="Hockey sur glace">Hockey sur glace</option>
<option value="Judo">Judo</option>
<option value="Karaté">Karaté</option>
<option value="Kayak eaux calmes">Kayak eaux calmes</option>
<option value="Kayak eaux vives">Kayak eaux vives</option>
<option value="Kick Boxing">Kick Boxing</option>
<option value="Luge skeleton bobsleigh">Luge skeleton bobsleigh</option>
<option value="Marche ordinaire 5km h">Marche ordinaire 5km h</option>
<option value="Marche rapide">Marche rapide</option>
<option value="Marche nordique">Marche nordique</option>
<option value="Marche olympique">Marche olympique</option>
<option value="Musculation">Musculation</option>
<option value="Natation récréatif">Natation récréatif</option>
<option value="Natation style libre modéré">Natation style libre modéré</option>
<option value="Natation style libre intense">Natation style libre intense</option>
<option value="Natation brasse">Natation brasse</option>
<option value="Natation crawl">Natation crawl</option>
<option value="Natation dos">Natation dos</option>
<option value="Natation papillon">Natation papillon</option>
<option value="Natation nage synchronisée">Natation nage synchronisée</option>
<option value="Patinage récréatif">Patinage récréatif</option>
<option value="Patinage intense">Patinage intense</option>
<option value="Patinage vitesse compétition">Patinage vitesse compétition</option>
<option value="Patinage roller récréatif">Patinage roller récréatif</option>
<option value="Patinage roller intense">Patinage roller intense</option>
<option value="Plongée sous-marine">Plongée sous-marine</option>
<option value="Polo">Polo</option>
<option value="Rafting">Rafting</option>
<option value="Rameur d appartement">Rameur d appartement</option>
<option value="Randonnée">Randonnée</option>
<option value="Randonnée avec sac">Randonnée avec sac</option>
<option value="Raquette à neige">Raquette à neige</option>
<option value="Rugby">Rugby</option>
<option value="Skate">Skate</option>
<option value="Ski alpin léger">Ski alpin léger</option>
<option value="Ski alpin modéré">Ski alpin modéré</option>
<option value="Ski alpin intense">Ski alpin intense</option>
<option value="Ski nautique">Ski nautique</option>
<option value="Ski randonnée modéré 7k/h">Ski randonnée modéré 7k/h</option>
<option value="Ski randonnée intense 10.5k/h">Ski randonnée intense 10.5k/h</option>
<option value="Squash récréatif">Squash récréatif</option>
<option value="Squash intense">Squash intense</option>
<option value="Step modéré">Step modéré</option>
<option value="Step intense">Step intense</option>
<option value="Surf">Surf</option>
<option value="Taï-chi">Taï-chi</option>
<option value="Tennis de table">Tennis de table</option>
<option value="Tennis en simple">Tennis en simple</option>
<option value="Tennis en double">Tennis en double</option>
<option value="Volley-ball récréatif">Volley-ball récréatif</option>
<option value="Volley-ball compétition">Volley-ball compétition</option>
<option value="VTT Vélo Tout Terrain">VTT Vélo Tout Terrain</option>
<option value="Water Polo">Water Polo</option>
<option value="Yoga">Yoga</option>
<option value="Zumba">Zumba</option>
</select>
</div>
<div class="ocm-col2"><span class="rosep">Temps en mn / séance</span><br><input name="temps" class="ocm-input1" value="$temps" type="text"></div>
</div>
<span class="rosep">Vous êtes</span>
<ul class="ul_calc"> 
<li><input id="femme" name="sexe" value="2" type="radio" $hek2/><label for="femme">Une femme</label></li> 
<li><input id="homme" name="sexe" value="1" type="radio" $hek1/><label for="homme">Un homme</label></li></ul>
<div class="clear">
<div class="ocm-col3"><span class="rosep">Votre âge</span><br><input name="age" class="ocm-input1" value="$age" type="text"></div>
<div class="ocm-col3"><span class="rosep">Votre taille (cm)</span><br><input name="taille" class="ocm-input1" value="$taille" type="text"></div>
<div class="ocm-col3"><span class="rosep">Votre poids (KG)</span><br><input name="poids" class="ocm-input1" value="$poids" type="text"></div>
</div><div id="besoin" class="centrage">
<input name="valider" value="CALCULER" type="submit">
</div>  
</form>
<div class="clear-zero">&nbsp;</div>
</div>
EOT;
if (isset($_POST['valider'])) {


if ($sport=="Aérobic intensité normale") {$MET=5.5;$lien="depenses-caloriques-consommees-pour-l-aerobic/";}
	else if ($sport=="Aérobic haute intensité") {$MET=7.5;$lien="depenses-caloriques-consommees-pour-l-aerobic/";}
	else if ($sport=="Aïkido") {$MET=9;$lien="depenses-caloriques-consommees-pour-l-aikido/";}
	else if ($sport=="Aquabiking") {$MET=8;$lien="aquabike-depenses-caloriques-consommees-pour-l-aquabiking/";}
	else if ($sport=="Aquagym") {$MET=4;$lien="depenses-caloriques-consommees-pour-l-aquagym/";}
	else if ($sport=="Arts martiaux") {$MET=4;$lien="depenses-caloriques-consommees-pour-les-arts-martiaux/";}
	else if ($sport=="Aviron modéré") {$MET=7;$lien="depenses-caloriques-consommees-pour-l-aviron/";}
	else if ($sport=="Aviron intense") {$MET=11;$lien="depenses-caloriques-consommees-pour-l-aviron/";}
	else if ($sport=="Badminton calme") {$MET=4.5;$lien="depenses-caloriques-consommees-pour-le-badminton/";}
	else if ($sport=="Badminton intermédiaire") {$MET=7;$lien="depenses-caloriques-consommees-pour-le-badminton/";}
	else if ($sport=="Badminton intense") {$MET=10;$lien="depenses-caloriques-consommees-pour-le-badminton/";}
	else if ($sport=="Ballet danse") {$MET=6;$lien="depenses-caloriques-consommees-pour-le-ballet-danse/";}
	else if ($sport=="Basket récréatif") {$MET=6;$lien="depenses-caloriques-consommees-pour-le-basket-ball/";}
	else if ($sport=="Basket compétition") {$MET=8;$lien="depenses-caloriques-consommees-pour-le-basket-ball/";}
	else if ($sport=="Bicyclette Vélo Effort léger") {$MET=4;$lien="depenses-caloriques-consommees-pour-le-velo-bicyclette-et-cyclisme/";}
	else if ($sport=="Vélo Effort moyen") {$MET=7;$lien="depenses-caloriques-consommees-pour-le-velo-bicyclette-et-cyclisme/";}
	else if ($sport=="Vélo intense 22-30km/h") {$MET=10;$lien="depenses-caloriques-consommees-pour-le-velo-bicyclette-et-cyclisme/";}
	else if ($sport=="Vélo très intense sup à 30km/h") {$MET=14;$lien="depenses-caloriques-consommees-pour-le-velo-bicyclette-et-cyclisme/";}
	else if ($sport=="Vélo elliptique faible") {$MET=8;$lien="depenses-caloriques-consommees-pour-le-velo-elliptique/";}
	else if ($sport=="Vélo elliptique moyen") {$MET=10;$lien="depenses-caloriques-consommees-pour-le-velo-elliptique/";}
	else if ($sport=="Vélo elliptique intense") {$MET=12;$lien="depenses-caloriques-consommees-pour-le-velo-elliptique/";}
	else if ($sport=="Vélo stationnaire faible") {$MET=3;$lien="depenses-caloriques-consommees-pour-le-velo-d-appartement-stationnaire/";}
	else if ($sport=="Vélo stationnaire moyen") {$MET=5.5;$lien="depenses-caloriques-consommees-pour-le-velo-d-appartement-stationnaire/";}
	else if ($sport=="Vélo stationnaire intense") {$MET=7;$lien="depenses-caloriques-consommees-pour-le-velo-d-appartement-stationnaire/";}
	else if ($sport=="Vélo stationnaire très intense") {$MET=11;$lien="depenses-caloriques-consommees-pour-le-velo-d-appartement-stationnaire/";}
	else if ($sport=="Boxe intensité faible") {$MET=6;$lien="depenses-caloriques-consommees-pour-la-boxe/";}
	else if ($sport=="Boxe intensité modérée") {$MET=9;$lien="depenses-caloriques-consommees-pour-la-boxe/";}
	else if ($sport=="Boxe intensité forte") {$MET=12;$lien="depenses-caloriques-consommees-pour-la-boxe/";}
	else if ($sport=="Corde à sauter modérée") {$MET=8.5;$lien="depenses-caloriques-consommees-pour-la-corde-a-sauter/";}
	else if ($sport=="Corde à sauter intense") {$MET=11.5;$lien="depenses-caloriques-consommees-pour-la-corde-a-sauter/";}
	else if ($sport=="Course à pied faible avec marche") {$MET=6;$lien="depenses-caloriques-consommees-pour-la-course-a-pied-le-running-footing-ou-jogging/";}
	else if ($sport=="Course à pied faible") {$MET=7;$lien="depenses-caloriques-consommees-pour-la-course-a-pied-le-running-footing-ou-jogging/";}
	else if ($sport=="Course à pied 8km h") {$MET=8;$lien="depenses-caloriques-consommees-pour-la-course-a-pied-le-running-footing-ou-jogging/";}
	else if ($sport=="Course à pied 9,5km/h") {$MET=10;$lien="depenses-caloriques-consommees-pour-la-course-a-pied-le-running-footing-ou-jogging/";}
	else if ($sport=="Course à pied 13km/h") {$MET=13;$lien="depenses-caloriques-consommees-pour-la-course-a-pied-le-running-footing-ou-jogging/";}
	else if ($sport=="Course à pied cross-country") {$MET=9;$lien="depenses-caloriques-consommees-pour-la-course-a-pied-le-running-footing-ou-jogging/";}
	else if ($sport=="Course à pied sur place") {$MET=8;$lien="depenses-caloriques-consommees-pour-la-course-a-pied-le-running-footing-ou-jogging/";}
	else if ($sport=="Course sur tapis 8km h") {$MET=8;$lien="depenses-caloriques-consommees-pour-le-tapis-de-course/";}
	else if ($sport=="Course sur tapis 9,5km/h") {$MET=10;$lien="depenses-caloriques-consommees-pour-le-tapis-de-course/";}
	else if ($sport=="Course sur tapis 13km/h") {$MET=13;$lien="depenses-caloriques-consommees-pour-le-tapis-de-course/";}
	else if ($sport=="Danse calme") {$MET=3;$lien="depenses-caloriques-consommees-pour-la-danse/";}
	else if ($sport=="Danse modérée") {$MET=4;$lien="depenses-caloriques-consommees-pour-la-danse/";}
	else if ($sport=="Danse intense") {$MET=5;$lien="depenses-caloriques-consommees-pour-la-danse/";}
	else if ($sport=="Escalade") {$MET=11;$lien="depenses-caloriques-consommees-pour-l-escalade-et-la-varappe/";}
	else if ($sport=="Escrime récréatif") {$MET=6;$lien="depenses-caloriques-consommees-pour-l-escrime-epee-et-fleuret/";}
	else if ($sport=="Escrime intense") {$MET=8;$lien="depenses-caloriques-consommees-pour-l-escrime-epee-et-fleuret/";}
	else if ($sport=="Equitation au pas") {$MET=4;$lien="depenses-caloriques-consommees-pour-l-equitation-monter-a-cheval/";}
	else if ($sport=="Equitation trot et galop") {$MET=6;$lien="depenses-caloriques-consommees-pour-l-equitation-monter-a-cheval/";}
	else if ($sport=="Fitness intensité faible") {$MET=4;$lien="depenses-caloriques-consommees-pour-le-fitness/";}
	else if ($sport=="Fitness intensité moyenne") {$MET=6;$lien="depenses-caloriques-consommees-pour-le-fitness/";}
	else if ($sport=="Fitness intensité forte") {$MET=9;$lien="depenses-caloriques-consommees-pour-le-fitness/";}
	else if ($sport=="Football modéré") {$MET=8;$lien="depenses-caloriques-consommees-pour-le-football/";}
	else if ($sport=="Football intense") {$MET=9;$lien="depenses-caloriques-consommees-pour-le-football/";}
	else if ($sport=="Golf à pied") {$MET=5.5;$lien="depenses-caloriques-consommees-pour-le-golf/";}
	else if ($sport=="Golf en voiturette") {$MET=4.5;$lien="depenses-caloriques-consommees-pour-le-golf/";}
	else if ($sport=="Gymnastique") {$MET=4;$lien="depenses-caloriques-consommees-pour-la-gymnastique/";}
	else if ($sport=="Halterophilie") {$MET=3;$lien="depenses-caloriques-consommees-pour-l-halterophilie/";}
	else if ($sport=="Hand-ball") {$MET=8;$lien="depenses-caloriques-consommees-pour-le-hand-ball/";}
	else if ($sport=="Hockey sur gazon") {$MET=9;$lien="depenses-caloriques-consommees-pour-le-hockey-sur-gazon/";}
	else if ($sport=="Hockey sur glace") {$MET=9;$lien="depenses-caloriques-consommees-pour-le-hockey-sur-glace/";}
	else if ($sport=="Judo") {$MET=10;$lien="depenses-caloriques-consommees-pour-le-judo/";}
	else if ($sport=="Karaté") {$MET=10;$lien="depenses-caloriques-consommees-pour-le-karate/";}
	else if ($sport=="Kayak eaux vives") {$MET=8.5;$lien="depenses-caloriques-consommees-pour-le-kayak-en-riviere-ou-en-mer/";}
	else if ($sport=="Kayak eaux calmes") {$MET=5;$lien="depenses-caloriques-consommees-pour-le-kayak-en-riviere-ou-en-mer/";}
	else if ($sport=="Kick Boxing") {$MET=10;$lien="depenses-caloriques-consommees-pour-le-kick-boxing/";}
	else if ($sport=="Luge skeleton bobsleigh") {$MET=7;$lien="depenses-caloriques-consommees-pour-la-luge-le-skeleton-et-le-bobsleigh/";}
	else if ($sport=="Marche ordinaire 5km h") {$MET=3;$lien="depenses-caloriques-consommees-pour-la-marche-a-pied/";}
	else if ($sport=="Marche rapide") {$MET=4.5;$lien="depenses-caloriques-consommees-pour-la-marche-rapide-ou-sportive/";}
	else if ($sport=="Marche nordique") {$MET=5;$lien="depenses-caloriques-consommees-pour-la-marche-nordique-nordic-walking/";}
	else if ($sport=="Marche olympique") {$MET=6.5;$lien="depenses-caloriques-consommees-pour-la-marche-rapide-ou-sportive/";}
	else if ($sport=="Musculation") {$MET=3;$lien="depenses-caloriques-consommees-pour-la-musculation/";}
	else if ($sport=="Natation récréatif") {$MET=6;$lien="depenses-caloriques-en-calories-consommees-pour-la-natation/";}
	else if ($sport=="Natation style libre modéré") {$MET=8;$lien="depenses-caloriques-en-calories-consommees-pour-la-natation/";}
	else if ($sport=="Natation style libre intense") {$MET=10;$lien="depenses-caloriques-en-calories-consommees-pour-la-natation/";}
	else if ($sport=="Natation brasse") {$MET=10;$lien="depenses-caloriques-en-calories-consommees-pour-la-natation/brasse/";}
	else if ($sport=="Natation crawl") {$MET=8;$lien="depenses-caloriques-en-calories-consommees-pour-la-natation/crawl/";}
	else if ($sport=="Natation dos") {$MET=8;$lien="depenses-caloriques-en-calories-consommees-pour-la-natation/dos-crawle/";}
	else if ($sport=="Natation papillon") {$MET=11;$lien="depenses-caloriques-en-calories-consommees-pour-la-natation/papillon/";}
	else if ($sport=="Natation nage synchronisée") {$MET=8;$lien="depenses-caloriques-en-calories-consommees-pour-la-natation/nage-synchronisee/";}
	else if ($sport=="Patinage récréatif") {$MET=5.5;$lien="depenses-caloriques-consommees-pour-le-patinage-sur-glace/";}
	else if ($sport=="Patinage intense") {$MET=9;$lien="depenses-caloriques-consommees-pour-le-patinage-sur-glace/";}
	else if ($sport=="Patinage vitesse compétition") {$MET=15;$lien="depenses-caloriques-consommees-pour-le-patinage-de-vitesse-sur-glace/";}
	else if ($sport=="Patinage roller récréatif") {$MET=7;$lien="depenses-caloriques-consommees-pour-le-roller-patin-en-ligne/";}
	else if ($sport=="Patinage roller intense") {$MET=10;$lien="depenses-caloriques-consommees-pour-le-roller-patin-en-ligne/";}
	else if ($sport=="Plongée sous-marine") {$MET=7;$lien="depenses-caloriques-consommees-pour-la-plongee-sous-marine/";}
	else if ($sport=="Polo") {$MET=8;$lien="depenses-caloriques-consommees-pour-le-polo/";}
	else if ($sport=="Rafting") {$MET=5;$lien="depenses-caloriques-consommees-pour-le-rafting/";}
	else if ($sport=="Rameur d appartement") {$MET=7;$lien="depenses-caloriques-consommees-pour-le-rameur-d-appartement/";}
	else if ($sport=="Randonnée") {$MET=6;$lien="depenses-caloriques-consommees-pour-la-randonnee-avec-ou-sans-sac/";}
	else if ($sport=="Randonnée avec sac") {$MET=7;$lien="depenses-caloriques-consommees-pour-la-randonnee-avec-ou-sans-sac/";}
	else if ($sport=="Raquette à neige") {$MET=8;$lien="depenses-caloriques-consommees-pour-la-randonnee-en-raquette-a-neige/";}
	else if ($sport=="Rugby") {$MET=10;$lien="depenses-caloriques-consommees-pour-le-rugby";}
	else if ($sport=="Skate") {$MET=5;$lien="depenses-caloriques-consommees-pour-le-skate-board-planche-a-roulette/";}
	else if ($sport=="Ski alpin léger") {$MET=5;$lien="depenses-caloriques-consommees-pour-le-ski-alpin/";}
	else if ($sport=="Ski alpin modéré") {$MET=6;$lien="depenses-caloriques-consommees-pour-le-ski-alpin/";}
	else if ($sport=="Ski alpin intense") {$MET=8;$lien="depenses-caloriques-consommees-pour-le-ski-alpin/";}
	else if ($sport=="Ski nautique") {$MET=7;$lien="depenses-caloriques-consommees-pour-le-ski-nautique/";}
	else if ($sport=="Ski randonnée modéré 7k/h") {$MET=7;$lien="depenses-caloriques-consommees-pour-le-ski-de-randonnee-ou-ski-de-fond/";}
	else if ($sport=="Ski randonnée intense 10.5k/h") {$MET=8;$lien="depenses-caloriques-consommees-pour-le-ski-de-randonnee-ou-ski-de-fond/";}
	else if ($sport=="Squash récréatif") {$MET=7;$lien="depenses-caloriques-consommees-pour-le-squash/";}
	else if ($sport=="Squash compétition") {$MET=11;$lien="depenses-caloriques-consommees-pour-le-squash/";}
	else if ($sport=="Step modéré") {$MET=7;$lien="depenses-caloriques-consommees-pour-le-step/";}
	else if ($sport=="Step intense") {$MET=11;$lien="depenses-caloriques-consommees-pour-le-step/";}
	else if ($sport=="Surf") {$MET=3;$lien="depenses-caloriques-consommees-pour-le-surf/";}
	else if ($sport=="Taï-chi") {$MET=4;$lien="depenses-caloriques-consommees-pour-le-tai-chi-chuan/";}
	else if ($sport=="Tennis de table") {$MET=7;$lien="depenses-caloriques-consommees-pour-le-tennis-de-table-ping-pong/";}
	else if ($sport=="Tennis en simple") {$MET=7.5;$lien="depenses-caloriques-consommees-pour-le-tennis/";}
	else if ($sport=="Tennis en double") {$MET=6;$lien="depenses-caloriques-consommees-pour-le-tennis/";}
	else if ($sport=="Volley-ball récréatif") {$MET=3;$lien="depenses-caloriques-consommees-pour-le-volley-ball/";}
	else if ($sport=="Volley-ball compétition") {$MET=4.5;$lien="depenses-caloriques-consommees-pour-le-volley-ball/";}
	else if ($sport=="VTT Vélo Tout Terrain") {$MET=9;$lien="depenses-caloriques-consommees-pour-le-vtt-velo-tout-terrain/";}
	else if ($sport=="Water Polo") {$MET=10;$lien="depenses-caloriques-consommees-pour-le-water-polo/";}
	else if ($sport=="Yoga") {$MET=3;$lien="depenses-caloriques-consommees-pour-le-yoga/";}
	else if ($sport=="Zumba") {$MET=8;$lien="depenses-caloriques-consommees-pour-la-zumba/";}
	

	$CE =($temps*$MET*3.5*$poids/200);
	$CE = round($CE,0);
	$lien = "/comment-maigrir-conseils-solutions-trucs-et-astuces/calcul-des-depenses-energetiques-en-calories-par-sports-et-activites/".$lien;
    $DE1 =($temps*$MET*3.5*$poids/200/7700*4);
	$DE1 = round($DE1,2);
	$DE2 =($temps*$MET*3.5*$poids/200/7700*8);
	$DE2 = round($DE2,2);
	$DE3 =($temps*$MET*3.5*$poids/200/7700*12);
	$DE3 = round($DE3,2);
	$DE4 =($temps*$MET*3.5*$poids/200/7700*16);
	$DE4 = round($DE4,2);

   $codehtml .= <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/titre-sport-calcul.png">
</div>
<div class="fond-outil-sport-maigrir">
<div class="clear-zero">&nbsp;</div>
<div class="clear">
 <img class="aligncenter" src="/wp-content/uploads/ligne-outil.png"/>
  <div class="ocm-noir"><h3 class="police-blanche">Résultat de vos dépenses</h3></div>
  <img class="aligncenter" src="/wp-content/uploads/ligne-outil.png"/>
  <span class="police-blanche">Une séance de $temps mn d'une personne de $poids kg pour l'activité "<a href="$lien">$sport</a>" brûle :<br><span><span class="ocm-result14">$CE</span><span class="ocm-result14p"> Kcal</span><br />&nbsp;
 
   
    <div class="ocm-noir"><h3 class="police-blanche">Estimation mensuelle de perte de poids selon le nombre de séances !</h3></div>
  <img class="aligncenter" src="/wp-content/uploads/ligne-outil.png"/>
   <div class="clear"></div>
  <div class="landing-home-4"><img class="aligncenter size-full wp-image-27061"  src="https://www.regivia.com/wp-content/uploads/etape-11.png"  width="22" height="22"><span class="sport-maigrir-resultat-blanc">1 par semaine<br /></span><span class="sport-maigrir-resultat-gros">≈<br />-$DE1</span><span class="sport-maigrir-resultat-blanc"> kg<br />par mois</span></div>
  <div class="landing-separation-home"><img class="alignnone size-full wp-image-27378" src="https://www.regivia.com/wp-content/uploads/separation3.png" alt="separation3" width="216" height="30"></div>
  <div class="landing-home-4"><img class="aligncenter size-full wp-image-27061"  src="https://www.regivia.com/wp-content/uploads/etape-11.png"  width="22" height="22"><span class="sport-maigrir-resultat-blanc">2 par semaine<br /></span><span class="sport-maigrir-resultat-gros">≈<br />-$DE2</span><span class="sport-maigrir-resultat-blanc"> kg<br />par mois</span></div>
  <div class="landing-separation-home"><img class="alignnone size-full wp-image-27378" src="https://www.regivia.com/wp-content/uploads/separation3.png" alt="separation3" width="216" height="30"></div>
  <div class="landing-home-4"><img class="aligncenter size-full wp-image-27061"  src="https://www.regivia.com/wp-content/uploads/etape-11.png"  width="22" height="22"><span class="sport-maigrir-resultat-blanc">3 par semaine<br /></span><span class="sport-maigrir-resultat-gros">≈<br />-$DE3</span><span class="sport-maigrir-resultat-blanc"> kg<br />par mois</span></div>
  <div class="landing-separation-home"><img class="alignnone size-full wp-image-27378" src="https://www.regivia.com/wp-content/uploads/separation3.png" alt="separation3" width="216" height="30"></div>
  <div class="landing-home-4"><img class="aligncenter size-full wp-image-27061"  src="https://www.regivia.com/wp-content/uploads/etape-11.png"  width="22" height="22"><span class="sport-maigrir-resultat-blanc">4 par semaine<br /></span><span class="sport-maigrir-resultat-gros">≈<br />-$DE4</span><span class="sport-maigrir-resultat-blanc"> kg<br />par mois</span></div>
  <div class="clear"></div>
  
  
  <br />&nbsp;</div>
 
  
</div>
<div class="clear-zero">&nbsp;</div>
</div>
<div class="ocm-bl1">
<span class="outil-action-rose">A</span><span class="outil-action-noir">ttention, le sport ne suffit pas à perdre du poids !</span><br /><br />
Faire du sport permet de brûler des calories, de sculpter votre silhouette en prenant de la masse musculaire et en augmentant le métabolisme de base (calories brûlées au repos). Le sport a donc un impact capital à long terme pour le contrôle du poids et pour une meilleure santé. Cependant, pour perdre 1 kg de graisse il vous faut brûler 7700 kcal, ce qui représente des heures de course à pied.
<br /><br />
<span class="outil-action-rose">Q</span><span class="outil-action-noir">uelle est donc la bonne équation ?</span><br /><br />

Le sport et l’activité quotidienne sont des garanties au contrôle et au maintien du poids à long terme mais comme vous le dira tout sportif, 30% se joue en bougeant et 70% se joue dans l’assiette. La perte de poids doit donc être un mixte entre les dépenses (indispensables) et une alimentation n’excédant pas vos besoins.
<br /><br />

<span class="outil-action-rose">V</span><span class="outil-action-noir">ous souhaitez maigrir ? Poursuivez l'analyse !</span><br /><br />
<form name="anaform" class="ocm-form" method="post" action="#analyse">
<div id="analyse" class="clear">
<div class="centrage"><span class="rosep">Quel est votre objectif de poids (en KG)</span><br><input name="obj" class="ocm-input1" value="$obj" type="text"></div></div>
<div class="clear">
<input type="hidden" name="sexe" value="$sexe" />
<input type="hidden" name="age" value="$age" />
<input type="hidden" name="taille" value="$taille" />
<input type="hidden" name="poids" value="$poids" />
<input type="hidden" name="sport" value="$sport" />
<input type="hidden" name="temps" value="$temps" />
<input type="hidden" name="valider" value="CALCULER" />
<div class="centrage">&nbsp;<br><input name="valider2" value="ANALYSER" type="submit"></div>
</form>
<div class="clear-zero">&nbsp;</div>
</div></div>
EOT;
}

if (isset($_POST['valider2'])) {
 $IMC=($poids/(($taille/100)*($taille/100)));
   $IMC=round($IMC,1);
      if ($IMC<18.5) {
   $STATUT= "maigreur";
   $IMAGE="imc-statut-maigreur.png";
   }
   else if ($IMC<25) {
   $STATUT= "corpulence normale";
   $IMAGE="imc-statut-normal.png";
   }
   else if ($IMC<30) {
   $STATUT= "surpoids";
   $IMAGE="imc-statut-suroids.png";
   } 
   else {
   $STATUT= "obèsité";
   $IMAGE="imc-statut-obesite.png";
   }
   
      if ($sexe=="2") {$PIL=($taille-100-(($taille-150)/2.5));}
   else if ($sexe=="1") {$PIL=($taille-100-(($taille-150)/4));}
$PIL=round($PIL,1);
   
   $pmaa = (($obj+$PIL)/2);
   $kap = ($poids-$pmaa);
   $vakap = abs($kap);
   
       if ($kap>0) {$textp="Poids moyen à perdre";}
   else if ($kap<0) {$textp="Poids moyen à gagner";}
   else {$textp="Vous êtes à l'équilibre";} 
   
       if ($kap<0.1) {$texto1="Vous n'avez pas de poids à perdre. Félicitations.";
   $lienb="<div class=\"ocm-liena\"><a href=\"/categorie-produit/coffret-minceur-box-de-regime/\">VOIR TOUS NOS PROGRAMMES</a></div>";	   
	   }
   else if ($kap<1) {$texto1="Vous êtes presque à votre poids d'équilibre. Vous pouvez perdre ce léger superflus en découvrant notre programme.";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-s-a-3-kg-14-jours/\">VOIR MON PROGRAMME</a></div>";
   }	   
   else if ($kap<3) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">2  semaines!</span>";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-s-a-3-kg-14-jours/\">VOIR MON PROGRAMME</a></div>";
   }
   else if ($kap<6) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">4  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-m-3-a-6-kg-28-jours/\">VOIR MON PROGRAMME</a></div>";}
   else if ($kap<9) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">6  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-l-6-a-9-kg-42-jours/\">VOIR MON PROGRAMME</a></div>";}
   else if ($kap<12) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">10  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xl-9-a-12-kg-56-jours/\">VOIR MON PROGRAMME</a></div>";}
    else if ($kap<15) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">10  semaines!</span>";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xxl-12-a-15-kg-70-jours/\">VOIR MON PROGRAMME</a></div>";}
   else {$texto1="En étant raisonnable vous pouvez vous fixer un objectif d'environ <span class=\"rosep\">15 kg</span> et l'atteindre au bout de <span class=\"rosep\">10 semaines!</span>";
     $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xxl-12-a-15-kg-70-jours/\">VOIR MON PROGRAMME</a></div>";} 
   
   $codehtml .= <<<EOT
<div class="ocm-noir"><img src="/wp-content/uploads/titre-sport-analyse.png">
</div>
<div class="ocm-bl3">
<div class="ocm-blancg">Votre Indice de Masse Corporelle</div>
<p>IMC = <span class="rosegrasspan">$IMC</span><br />
Statut = <span class="rosegrasspan">$STATUT</span></p>
 <img class="aligncenter" src="/wp-content/uploads/$IMAGE"> 
<div class="ocm-blancg">Vos indicateurs de poids</div>
 <p>
  Votre poids actuel = <span class="rosegrasspan">$poids</span> kg<br />
 Poids idéal (formule de Lorentz) = <span class="rosegrasspan">$PIL</span> kg<br />
Objectif personnel = <span class="rosegrasspan">$obj</span> kg
</p>
<div class="float50">
  <div class="ocm-bl4">Poids moyen à atteindre</div>
  <div class="ocm-circle"><br><span class="ocm-res14r">$pmaa</span><br><span class="result14p">Kg</span></div>
</div>
<div class="float50">
    <div class="ocm-bl4">$textp</div>
	<div class="ocm-circle"><br><span class="ocm-res14r">$vakap</span><br><span class="result14p">Kg</span></div>
</div>
<div class="clear-zero">&nbsp;</div>
</div>
<div class="ocm-noir">
<img src="/wp-content/uploads/titre-sport-solution.png">
</div>
<div class="ocm-bl1">
<div class="clear">
<div class="centrage"><span class="rosep">Quel objectif et comment le concrétiser?</span></div>
</div>
$texto1
<div class="clear-zero">&nbsp;</div>
$lienb
<img src="/wp-content/uploads/ligne-objectif-final.png">
</div>
EOT;
}

   $codehtml .= <<<EOT
<div class="clear-zero">&nbsp;</div>
EOT;


return $codehtml;
}
add_shortcode( 'calculettesportmaigrir', 'calculette_sport_maigrir' );




//Calculette visage
function outils_visagea($url) {
extract( shortcode_atts( array(
      'url'     => '',
   ), $url, 'outilsvisagea' ) );
   
   
    $sexe=$_POST['sexe'];   
   $age=$_POST['age'];
   $taille=$_POST['taille'];
	$taille = preg_replace('*,*','.',$taille);
   $poids=$_POST['poids'];
	$poids = preg_replace('*,*','.',$poids);
   $act=$_POST['act'];
if ($sexe==1) {$hek1="checked ";}
else {$hek2="checked ";}  

$obj=$_POST['obj'];
	$obj = preg_replace('*,*','.',$obj);   
   
   
   
				$nature = $_POST['nature'];
   				$poit = $_POST['poit'];		
if ($nature==1) {$check1="checked ";}
				else if ($nature==2) {$check2="checked ";}
				else if ($nature==3) {$check3="checked ";}
				else if ($nature==4) {$check4="checked ";}
				else if ($nature==5) {$check5="checked ";}
				else if ($nature==6) {$check6="checked ";}
if ($poit==10) {$check10="checked ";}
				else if ($poit==11) {$check11="checked ";}
				else if ($poit==12) {$check12="checked ";}

if (($nature==1)AND($poit==10))
 {$morpho="rond";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE ROND !</b></h3>
<p style="text-align: center;">Le visage rond est aussi long que large. L'absence de creux vous permet d'avoir un joli visage poupon, doux et digne de confiance !</span></p>
<img src="https://www.regivia.com/wp-content/uploads/visage-rond-femme-sans-lunettes.png" alt="Morpho : visage rond femme" title="Morpho : visage rond femme" width="100" height="100" class="aligncenter size-full wp-image-42571" />
&nbsp;

&nbsp;
<h3 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS POUR LE VISAGE ROND !</span> </h3>
 <div class="clear"></div>
 <div style="text-align: center;">
<a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/coiffure-femme-choisir-sa-coupe-de-cheveux/quand-on-a-un-visage-rond/">Les coupes</span></a> -
<a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-vue/quand-on-a-un-visage-rond/">Les lunettes de vue</span></a> -
<a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-soleil/quand-on-a-un-visage-rond/">Les lunettes de soleil</span></a>

</div>
<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==1)AND($poit==11))
 {$morpho="ovale";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN OVALE !</b></h3>
<p style="text-align: center;">Vous possédez un visage harmonieux ! Le visage ovale est d’ailleurs considéré comme le visage parfait !</span></p>
<img src="https://www.regivia.com/wp-content/uploads/visage-ovale-femme-sans-lunettes.png" alt="Morpho : visage ovale femme" title="Morpho : visage ovale femme" width="100" height="100" class="aligncenter size-full wp-image-42571" />


&nbsp;
<h3 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS POUR LE VISAGE OVALE !</span> </h3>
 <div class="clear"></div>
 <div style="text-align: center;">
<a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/coiffure-femme-choisir-sa-coupe-de-cheveux/quand-on-a-un-visage-ovale/">Les coupes</span></a> -
<a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-vue/quand-on-a-un-visage-ovale/">Les lunettes de vue</span></a> -
<a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-soleil/quand-on-a-un-visage-ovale/">Les lunettes de soleil</span></a>

</div>

<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==1)AND($poit==12))
  {$morpho="oblong";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN OBLONG !</b></h3>
<p style="text-align: center;">La forme de votre visage s’apparente au visage ovale mais en moins large et en plus allongé. L’ovale étant la forme de visage parfaite, votre visage allongé est donc proche de la perfection ! </span></p>
<img src="https://www.regivia.com/wp-content/uploads/visage-oblong-femme-sans-lunettes.png" alt="Morpho : visage oblong femme" title="Morpho : visage oblong femme" width="100" height="100" class="aligncenter size-full wp-image-42571" />
&nbsp;

&nbsp;
<h3 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS POUR LE VISAGE OBLONG !</span> </h3>
 <div class="clear"></div>
 <div style="text-align: center;">
<a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/coiffure-femme-choisir-sa-coupe-de-cheveux/quand-on-a-un-visage-oblong-ou-allonge/">Les coupes</span></a> -
<a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-vue/quand-on-a-un-visage-oblong-ou-allonge/">Les lunettes de vue</span></a> -
<a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-soleil/quand-on-a-un-visage-oblong-ou-allonge/">Les lunettes de soleil</span></a>

</div>

<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==2)AND($poit==10))
  {$morpho="carre";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN CARRÉ !</b></h3>
<p style="text-align: center;">Vous l’aurez compris, votre visage est plutôt anguleux. Vous êtes une femme au caractère affirmé bien dans vos baskets ! Votre défi sera d’adoucir vos traits en choisissant une coiffure adaptée à votre visage carré ! </span></p>
<img src="https://www.regivia.com/wp-content/uploads/visage-carre-femme-sans-lunettes.png" alt="Morpho : visage carré femme" title="Morpho : visage carré femme" width="100" height="100" class="aligncenter size-full wp-image-42571" />
&nbsp;

&nbsp;
<h3 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS POUR LE VISAGE CARRÉ !</span> </h3>
 <div class="clear"></div>
 <div style="text-align: center;">
<a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/coiffure-femme-choisir-sa-coupe-de-cheveux/quand-on-a-un-visage-carre/">Les coupes</span></a> -
<a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-vue/quand-on-a-un-visage-carre/">Les lunettes de vue</span></a> -
<a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-soleil/quand-on-a-un-visage-carre/">Les lunettes de soleil</span></a>

</div>


<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==2)AND($poit==11))
{$morpho="rectangle";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN RECTANGLE !</b></h3>
<p style="text-align: center;">Le visage rectangle ressemble au visage carré mais en plus long. Les contours de votre visage sont plutôt bien définis. Votre visage est anguleux. Votre objectif sera alors d’apporter de la douceur à votre visage ! </span></p>
<img src="https://www.regivia.com/wp-content/uploads/visage-rectangle-femme-sans-lunettes.png" alt="Morpho : visage rectangle femme" title="Morpho : visage rectangle femme" width="100" height="100" class="aligncenter size-full wp-image-42571" />
&nbsp;

&nbsp;
<h3 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS POUR LE VISAGE RECTANGLE !</span> </h3>
 <div class="clear"></div>
 <div style="text-align: center;">
<a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/coiffure-femme-choisir-sa-coupe-de-cheveux/quand-on-a-un-visage-rectangulaire/">Les coupes</span></a> -
<a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-vue/quand-on-a-un-visage-rectangulaire/">Les lunettes de vue</span></a> -
<a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-soleil/quand-on-a-un-visage-rectangulaire/">Les lunettes de soleil</span></a>

</div>

<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==2)AND($poit==12))
{$morpho="rectangle";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN RECTANGLE !</b></h3>
<p style="text-align: center;">Le visage rectangle ressemble au visage carré mais en plus long. Les contours de votre visage sont plutôt bien définis. Votre visage est anguleux. Votre objectif sera alors d’apporter de la douceur à votre visage ! </span></p>
<img src="https://www.regivia.com/wp-content/uploads/visage-rectangle-femme-sans-lunettes.png" alt="Morpho : visage rectangle femme" title="Morpho : visage rectangle femme"width="100" height="100" class="aligncenter size-full wp-image-42571" />
&nbsp;

&nbsp;
<h3 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS POUR LE VISAGE RECTANGLE !</span> </h3>
 <div class="clear"></div>
 <div style="text-align: center;">
<a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/coiffure-femme-choisir-sa-coupe-de-cheveux/quand-on-a-un-visage-rectangulaire/">Les coupes</span></a> -
<a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-vue/quand-on-a-un-visage-rectangulaire/">Les lunettes de vue</span></a> -
<a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-soleil/quand-on-a-un-visage-rectangulaire/">Les lunettes de soleil</span></a>

</div>

<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==3)AND($poit==10))
 {$morpho="triangle";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN TRIANGLE !</b></h3>
<p style="text-align: center;">Avec une mâchoire large et un front étroit, vous avez un visage plutôt rare ! C’est une chance de ne pas ressembler à toutes les femmes ! </span></p>
<img src="https://www.regivia.com/wp-content/uploads/visage-triangle-femme-sans-lunettes.png" alt="Morpho : visage triangle femme" title="Morpho : visage triangle femme"width="100" height="100" class="aligncenter size-full wp-image-42571" />
&nbsp;

&nbsp;
<h3 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS POUR LE VISAGE TRIANGLE !</span> </h3>
 <div class="clear"></div>
 <div style="text-align: center;">
<a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/coiffure-femme-choisir-sa-coupe-de-cheveux/quand-on-a-un-visage-en-triangle-haut-poire-ou-trapeze/">Les coupes</span></a> -
<a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-vue/quand-on-a-un-visage-en-triangle-haut-poire-ou-trapeze/">Les lunettes de vue</span></a> -
<a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-soleil/quand-on-a-un-visage-en-triangle-haut-poire-ou-trapeze/">Les lunettes de soleil</span></a>

</div>

<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==3)AND($poit==11))
{$morpho="triangle";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN TRIANGLE !</b></h3>
<p style="text-align: center;">Avec une mâchoire large et un front étroit, vous avez un visage plutôt rare ! C’est une chance de ne pas ressembler à toutes les femmes ! </span></p>
<img src="https://www.regivia.com/wp-content/uploads/visage-triangle-femme-sans-lunettes.png" alt="Morpho : visage triangle femme" title="Morpho : visage triangle femme"width="100" height="100" class="aligncenter size-full wp-image-42571" />
&nbsp;

&nbsp;
<h3 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS POUR LE VISAGE TRIANGULAIRE !</span> </h3>
 <div class="clear"></div>
 <div style="text-align: center;">
<a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/coiffure-femme-choisir-sa-coupe-de-cheveux/quand-on-a-un-visage-en-triangle-haut-poire-ou-trapeze/">Les coupes</span></a> -
<a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-vue/quand-on-a-un-visage-en-triangle-haut-poire-ou-trapeze/">Les lunettes de vue</span></a> -
<a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-soleil/quand-on-a-un-visage-en-triangle-haut-poire-ou-trapeze/">Les lunettes de soleil</span></a>

</div>

<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==3)AND($poit==12))
{$morpho="triangle";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN TRIANGLE !</b></h3>
<p style="text-align: center;">Avec une mâchoire large et un front étroit, vous avez un visage plutôt rare ! C’est une chance de ne pas ressembler à toutes les femmes ! </span></p>
<img src="https://www.regivia.com/wp-content/uploads/visage-triangle-femme-sans-lunettes.png" alt="Morpho : visage triangle femme" title="Morpho : visage triangle femme"width="100" height="100" class="aligncenter size-full wp-image-42571" />
&nbsp;

&nbsp;
<h3 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS POUR LE VISAGE TRIANGULAIRE !</span> </h3>
 <div class="clear"></div>
 <div style="text-align: center;">
<a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/coiffure-femme-choisir-sa-coupe-de-cheveux/quand-on-a-un-visage-en-triangle-haut-poire-ou-trapeze/">Les coupes</span></a> -
<a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-vue/quand-on-a-un-visage-en-triangle-haut-poire-ou-trapeze/">Les lunettes de vue</span></a> -
<a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-soleil/quand-on-a-un-visage-en-triangle-haut-poire-ou-trapeze/">Les lunettes de soleil</span></a>

</div>

<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==4)AND($poit==10))
{$morpho="triangle inversé";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN TRIANGLE INVERSÉ !</b></h3>
<p style="text-align: center;">Avec une mâchoire large et un front étroit, vous avez un visage plutôt rare ! C’est une chance de ne pas ressembler à toutes les femmes ! </span></p>
<img src="https://www.regivia.com/wp-content/uploads/visage-triangle-inverse-femme-sans-lunettes.png" alt="Morpho : visage triangle inversé femme" title="Morpho : visage triangle inversé femme" width="100" height="100" class="aligncenter size-full wp-image-42571" />
&nbsp;

&nbsp;
<h3 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS POUR LE VISAGE TRIANGLE INVERSÉ!</span> </h3>
 <div class="clear"></div>
 <div style="text-align: center;">
<a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/coiffure-femme-choisir-sa-coupe-de-cheveux/quand-on-a-un-visage-en-triangle-bas-inverse-v-ou-coeur/">Les coupes</span></a> -
<a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-vue/quand-on-a-un-visage-en-triangle-bas-inverse-v-ou-coeur/">Les lunettes de vue</span></a> -
<a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-soleil/quand-on-a-un-visage-en-triangle-bas-inverse-v-ou-coeur/">Les lunettes de soleil</span></a>

</div>

<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==4)AND($poit==11))
{$morpho="triangle inversé";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN TRIANGLE INVERSÉ !</b></h3>
<p style="text-align: center;">Avec une mâchoire large et un front étroit, vous avez un visage plutôt rare ! C’est une chance de ne pas ressembler à toutes les femmes ! </span></p>
<img src="https://www.regivia.com/wp-content/uploads/visage-triangle-inverse-femme-sans-lunettes.png" alt="Morpho : visage triangle inversé femme" title="Morpho : visage triangle inversé femme" width="100" height="100" class="aligncenter size-full wp-image-42571" />
&nbsp;

&nbsp;
<h3 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS POUR LE VISAGE TRIANGLE INVERSÉ!</span> </h3>
 <div class="clear"></div>
 <div style="text-align: center;">
<a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/coiffure-femme-choisir-sa-coupe-de-cheveux/quand-on-a-un-visage-en-triangle-bas-inverse-v-ou-coeur/">Les coupes</span></a> -
<a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-vue/quand-on-a-un-visage-en-triangle-bas-inverse-v-ou-coeur/">Les lunettes de vue</span></a> -
<a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-soleil/quand-on-a-un-visage-en-triangle-bas-inverse-v-ou-coeur/">Les lunettes de soleil</span></a>

</div>

<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==4)AND($poit==12))
 {$morpho="triangle inversé";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN TRIANGLE INVERSÉ !</b></h3>
<p style="text-align: center;">Avec une mâchoire large et un front étroit, vous avez un visage plutôt rare ! C’est une chance de ne pas ressembler à toutes les femmes ! </span></p>
<img src="https://www.regivia.com/wp-content/uploads/visage-triangle-inverse-femme-sans-lunettes.png" alt="Morpho : visage triangle inversé femme" title="Morpho : visage triangle inversé femme" width="100" height="100" class="aligncenter size-full wp-image-42571" />
&nbsp;

&nbsp;
<h3 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS POUR LE VISAGE TRIANGLE INVERSÉ!</span> </h3>
 <div class="clear"></div>
 <div style="text-align: center;">
<a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/coiffure-femme-choisir-sa-coupe-de-cheveux/quand-on-a-un-visage-en-triangle-bas-inverse-v-ou-coeur/">Les coupes</span></a> -
<a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-vue/quand-on-a-un-visage-en-triangle-bas-inverse-v-ou-coeur/">Les lunettes de vue</span></a> -
<a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-soleil/quand-on-a-un-visage-en-triangle-bas-inverse-v-ou-coeur/">Les lunettes de soleil</span></a>

</div>

<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==5)AND($poit==10))
 {$morpho="rond";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE ROND !</b></h3>
<p style="text-align: center;">Le visage rond est aussi long que large. L'absence de creux vous permet d'avoir un joli visage poupon, doux et digne de confiance !</span></p>
<img src="https://www.regivia.com/wp-content/uploads/visage-rond-femme-sans-lunettes.png" alt="Morpho : visage rond femme" title="Morpho : visage rond femme" width="100" height="100" class="aligncenter size-full wp-image-42571" />
&nbsp;

&nbsp;
<h3 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS POUR LE VISAGE ROND !</span> </h3>
 <div class="clear"></div>
 <div style="text-align: center;">
<a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/coiffure-femme-choisir-sa-coupe-de-cheveux/quand-on-a-un-visage-rond/">Les coupes</span></a> -
<a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-vue/quand-on-a-un-visage-rond/">Les lunettes de vue</span></a> -
<a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-soleil/quand-on-a-un-visage-rond/">Les lunettes de soleil</span></a>

</div>

<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==5)AND($poit==11))
 {$morpho="ovale";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN OVALE !</b></h3>
<p style="text-align: center;">Vous possédez un visage harmonieux ! Le visage ovale est d’ailleurs considéré comme le visage parfait !</span></p>
<img src="https://www.regivia.com/wp-content/uploads/visage-ovale-femme-sans-lunettes.png" alt="Morpho : visage ovale femme" title="Morpho : visage ovale femme" width="100" height="100" class="aligncenter size-full wp-image-42571" />
&nbsp;

&nbsp;
<h3 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS POUR LE VISAGE OVALE !</span> </h3>
 <div class="clear"></div>
 <div style="text-align: center;">
<a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/coiffure-femme-choisir-sa-coupe-de-cheveux/quand-on-a-un-visage-ovale/">Les coupes</span></a> -
<a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-vue/quand-on-a-un-visage-ovale/">Les lunettes de vue</span></a> -
<a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-soleil/quand-on-a-un-visage-ovale/">Les lunettes de soleil</span></a>

</div>

<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==5)AND($poit==12))
 {$morpho="oblong";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN OBLONG !</b></h3>
<p style="text-align: center;">La forme de votre visage s’apparente au visage ovale mais en moins large et en plus allongé. L’ovale étant la forme de visage parfaite, votre visage allongé est donc proche de la perfection ! </span></p>
<img src="https://www.regivia.com/wp-content/uploads/visage-oblong-femme-sans-lunettes.png" alt="Morpho : visage oblong femme" title="Morpho : visage oblong femme" width="100" height="100" class="aligncenter size-full wp-image-42571" />
&nbsp;

&nbsp;
<h3 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS POUR LE VISAGE OBLONG !</span> </h3>
 <div class="clear"></div>
 <div style="text-align: center;">
<a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/coiffure-femme-choisir-sa-coupe-de-cheveux/quand-on-a-un-visage-oblong-ou-allonge/">Les coupes</span></a> -
<a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-vue/quand-on-a-un-visage-oblong-ou-allonge/">Les lunettes de vue</span></a> -
<a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-soleil/quand-on-a-un-visage-oblong-ou-allonge/">Les lunettes de soleil</span></a>

</div>

<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==6)AND($poit==10))
{$morpho="losange";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN LOSANGE !</b></h3>
<p style="text-align: center;">Vous avez un visage très féminin. Avec vos pommettes hautes et larges, vous êtes tout en beauté ! </span></p>
<img src="https://www.regivia.com/wp-content/uploads/visage-losange-femme-sans-lunettes.png" alt="Morpho : visage losange femme" title="Morpho : visage losange femme" width="100" height="100" class="aligncenter size-full wp-image-42571" />
&nbsp;

&nbsp;
<h3 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS POUR LE VISAGE LOSANGE !</span> </h3>
 <div class="clear"></div>
 <div style="text-align: center;">
<a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/coiffure-femme-choisir-sa-coupe-de-cheveux/quand-on-a-un-visage-en-losange-hexagonal-ou-diamant/">Les coupes</span></a> -
<a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-vue/quand-on-a-un-visage-en-losange-hexagonal-ou-diamant/">Les lunettes de vue</span></a> -
<a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-soleil/quand-on-a-un-visage-losange-hexagonal-ou-diamant/">Les lunettes de soleil</span></a>

</div>

<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==6)AND($poit==11))
{$morpho="losange";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN LOSANGE !</b></h3>
<p style="text-align: center;">Vous avez un visage très féminin. Avec vos pommettes hautes et larges, vous êtes tout en beauté ! </span></p>
<img src="https://www.regivia.com/wp-content/uploads/visage-losange-femme-sans-lunettes.png" alt="Morpho : visage losange femme" title="Morpho : visage losange femme" width="100" height="100" class="aligncenter size-full wp-image-42571" />
&nbsp;

&nbsp;
<h3 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS POUR LE VISAGE LOSANGE !</span> </h3>
 <div class="clear"></div>
 <div style="text-align: center;">
<a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/coiffure-femme-choisir-sa-coupe-de-cheveux/quand-on-a-un-visage-en-losange-hexagonal-ou-diamant/">Les coupes</span></a> -
<a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-vue/quand-on-a-un-visage-en-losange-hexagonal-ou-diamant/">Les lunettes de vue</span></a> -
<a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-soleil/quand-on-a-un-visage-losange-hexagonal-ou-diamant/">Les lunettes de soleil</span></a>

</div>

<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==6)AND($poit==12))
 {$morpho="losange";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN LOSANGE !</b></h3>
<p style="text-align: center;">Vous avez un visage très féminin. Avec vos pommettes hautes et larges, vous êtes tout en beauté ! </span></p>
<img src="https://www.regivia.com/wp-content/uploads/visage-losange-femme-sans-lunettes.png" alt="Morpho : visage losange femme" title="Morpho : visage losange femme" width="100" height="100" class="aligncenter size-full wp-image-42571" />
&nbsp;

&nbsp;
<h3 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS POUR LE VISAGE LOSANGE !</span> </h3>
 <div class="clear"></div>
 <div style="text-align: center;">
<a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/coiffure-femme-choisir-sa-coupe-de-cheveux/quand-on-a-un-visage-en-losange-hexagonal-ou-diamant/">Les coupes</span></a> -
<a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-vue/quand-on-a-un-visage-en-losange-hexagonal-ou-diamant/">Les lunettes de vue</span></a> -
<a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-soleil/quand-on-a-un-visage-losange-hexagonal-ou-diamant/">Les lunettes de soleil</span></a>

</div>


<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}






	$codehtml .= <<<EOT
<div class="bloc-morpho-gl">
<form name="morphoaform" class="form-type1" method="post" action="$url">
<img src="/wp-content/uploads/Outil-et-test-morphologie-et-de-forme-de-visage-femme-avec-proportions.webp" alt="Test de morphologie et forme de visage" title="Test de morphologie et forme de visage" class="aligncenter size-full wp-image-16781" height="200" width="600">

<div class="bloc-morpho-blanc">
<h3>QUESTION<span class="rosespan"> 1</span>/2 <span class="rosespan"> </span></h3>
<div id="ancrevis">&nbsp;</div>

<em>Devant un miroir, les cheveux en arrière et à l’aide de l’image ci-dessus représentant des formes et les 3 lignes du visage "front (1), pommettes (2) et mâchoire (3)" ...</em>
<br><br><h4><span class="rosespan">Êtes-vous plutôt ?</span></h4>
</div>
<input id="ex1" type="radio" name="nature" value="1" $check1/><label for="ex1">(ex 1) Front et mâchoire arrondis et de la même largeur </label><br>
<input id="ex2" type="radio" name="nature" value="2" $check2/><label for="ex2">(ex 2) Front, pommettes et mâchoire de la même largeur </label><br />
<input id="ex3" type="radio" name="nature" value="3" $check3/><label for="ex3">(ex 3) Front et pommettes plus étroits que la mâchoire  </label><br />
<input id="ex4" type="radio" name="nature" value="4" $check4/><label for="ex4">(ex 4) Front et pommettes plus larges que la mâchoire </label><br>
<input id="ex5" type="radio" name="nature" value="5" $check5/><label for="ex5">(ex 5) Front et mâchoire arrondis avec pommettes rebondies  </label><br>
<input id="ex6" type="radio" name="nature" value="6" $check6/><label for="ex6">(ex 6) Front et mâchoire étroits avec pommettes hautes et larges  </label><br>
<div class="bloc-morpho-blanc">
<h3>QUESTION<span class="rosespan"> 2</span>/2 <span class="rosespan"> </span></h3>
<h4><span class="rosespan">Votre visage est-il plus long que large ?</span></h4></div>
<input id="ex10" type="radio" name="poit" value="10" $check10/><label for="ex10">Pas du tout : Longueur = largeur</label><br>
<input id="ex11" type="radio" name="poit" value="11" $check11/><label for="ex11">Un peu allongé : Longueur = 1 fois ½ la largeur</label><br>
<input id="ex12" type="radio" name="poit" value="12" $check12/><label for="ex12">Très allongé : Longueur = plus d'1 fois ½ la largeur </label><br><br>
<p class="centrage"><input name="valider" value="VALIDER" type="submit"></p><br>
</div>	
</form>
EOT;
if (isset($_POST['valider'])) {
	   $codehtml .= <<<EOT
$texte

<div class="ocm-bl1">
<span class="outil-action-rose">V</span><span class="outil-action-noir">ous souhaitez maigrir ? Poursuivez l'analyse !</span>
<form name="anaform" class="ocm-form" method="post" action="#analyse">
<span class="rosep">Vous êtes</span>
<ul class="ul_calc"> 
<li><input id="femme" name="sexe" value="2" type="radio" $hek2/><label for="femme">Une femme</label></li> 
<li><input id="homme" name="sexe" value="1" type="radio" $hek1/><label for="homme">Un homme</label></li></ul>
<div class="clear">
<div class="ocm-col3"><span class="rosep">Votre âge</span><br><input name="age" class="ocm-input1" value="$age" type="text"></div>
<div class="ocm-col3"><span class="rosep">Votre taille (cm)</span><br><input name="taille" class="ocm-input1" value="$taille" type="text"></div>
<div class="ocm-col3"><span class="rosep">Votre poids (KG)</span><br><input name="poids" class="ocm-input1" value="$poids" type="text"></div>
</div>
<div class="clear">
<div class="centrage"><span class="rosep">Quel est votre objectif de poids? (en KG)</span><br><input name="obj" class="ocm-input1" value="$obj" type="text"></div></div>
<div class="clear">
<input type="hidden" name="poit" value="$poit" />
<input type="hidden" name="nature" value="$nature" />
<input type="hidden" name="valider" value="CALCULER" />
<div id="analyse" class="centrage"><br />&nbsp;
<input name="valider2" value="CALCULER" type="submit">
</div> </div>


</form>
<div class="clear-zero">&nbsp;</div>
</div>

EOT;
}



if (isset($_POST['valider2'])) {
 $IMC=($poids/(($taille/100)*($taille/100)));
   $IMC=round($IMC,1);
      if ($IMC<18.5) {
   $STATUT= "maigreur";
   $IMAGE="imc-statut-maigreur.png";
   }
   else if ($IMC<25) {
   $STATUT= "corpulence normale";
   $IMAGE="imc-statut-normal.png";
   }
   else if ($IMC<30) {
   $STATUT= "surpoids";
   $IMAGE="imc-statut-suroids.png";
   } 
   else {
   $STATUT= "obèsité";
   $IMAGE="imc-statut-obesite.png";
   }
   
      if ($sexe=="2") {$PIL=($taille-100-(($taille-150)/2.5));}
   else if ($sexe=="1") {$PIL=($taille-100-(($taille-150)/4));}
$PIL=round($PIL,1);
   
   $pmaa = (($obj+$PIL)/2);
   $kap = ($poids-$pmaa);
   $vakap = abs($kap);
   
       if ($kap>0) {$textp="Poids moyen à perdre";}
   else if ($kap<0) {$textp="Poids moyen à gagner";}
   else {$textp="Vous êtes à l'équilibre";} 
   
       if ($kap<0.1) {$texto1="Vous n'avez pas de poids à perdre. Félicitations.";
   $lienb="<div class=\"ocm-liena\"><a href=\"/categorie-produit/coffret-minceur-box-de-regime/\">VOIR TOUS NOS PROGRAMMES</a></div>";	   
	   }
   else if ($kap<1) {$texto1="Vous êtes presque à votre poids d'équilibre. Vous pouvez perdre ce léger superflus en découvrant notre programme.";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-s-a-3-kg-14-jours/\">VOIR MON PROGRAMME</a></div>";
   }	   
   else if ($kap<3) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">2  semaines!</span>";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-s-a-3-kg-14-jours/\">VOIR MON PROGRAMME</a></div>";
   }
   else if ($kap<6) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">4  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-m-3-a-6-kg-28-jours/\">VOIR MON PROGRAMME</a></div>";}
   else if ($kap<9) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">6  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-l-6-a-9-kg-42-jours/\">VOIR MON PROGRAMME</a></div>";}
   else if ($kap<12) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">10  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xl-9-a-12-kg-56-jours/\">VOIR MON PROGRAMME</a></div>";}
    else if ($kap<15) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">10  semaines!</span>";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xxl-12-a-15-kg-70-jours/\">VOIR MON PROGRAMME</a></div>";}
   else {$texto1="En étant raisonnable vous pouvez vous fixer un objectif d'environ <span class=\"rosep\">15 kg</span> et l'atteindre au bout de <span class=\"rosep\">10 semaines!</span>";
     $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xxl-12-a-15-kg-70-jours/\">VOIR MON PROGRAMME</a></div>";} 
   
   $codehtml .= <<<EOT
<div class="ocm-noir"><img src="/wp-content/uploads/outils-zones-muscles-2.png">
</div>
<div class="ocm-bl3">
<div class="ocm-blancg">Votre Indice de Masse Corporelle</div>
<p>IMC = <span class="rosegrasspan">$IMC</span><br />
Statut = <span class="rosegrasspan">$STATUT</span></p>
 <img class="aligncenter" src="/wp-content/uploads/$IMAGE"> 
<div class="ocm-blancg">Vos indicateurs de poids</div>
 <p>
  Votre poids actuel = <span class="rosegrasspan">$poids</span> kg<br />
 Poids idéal (formule de Lorentz) = <span class="rosegrasspan">$PIL</span> kg<br />
Objectif personnel = <span class="rosegrasspan">$obj</span> kg
</p>
<div class="float50">
  <div class="ocm-bl4">Poids moyen à atteindre</div>
  <div class="ocm-circle"><br><span class="ocm-res14r">$pmaa</span><br><span class="result14p">Kg</span></div>
</div>
<div class="float50">
    <div class="ocm-bl4">$textp</div>
	<div class="ocm-circle"><br><span class="ocm-res14r">$vakap</span><br><span class="result14p">Kg</span></div>
</div>
<div class="clear-zero">&nbsp;</div>
</div>
<div class="ocm-noir">
<img src="/wp-content/uploads/outils-zones-muscles-3.png">
</div>
<div class="ocm-bl1">
<div class="clear">
<div class="centrage"><span class="rosep">Quel objectif et comment le concrétiser?</span></div>
</div>
$texto1
<div class="clear-zero">&nbsp;</div>
$lienb
<img src="/wp-content/uploads/ligne-objectif-final.png">
</div>
EOT;
}



	   $codehtml .= <<<EOT
<div class="clear-zero">&nbsp;</div>
EOT;



return $codehtml;
}
add_shortcode( 'outilsvisagea', 'outils_visagea' );


//Calculette visage lunette de vue femme
function outils_femmevue($url) {
extract( shortcode_atts( array(
      'url'     => '',
   ), $url, 'outilsfemmevue' ) );
   
   
    $sexe=$_POST['sexe'];   
   $age=$_POST['age'];
   $taille=$_POST['taille'];
	$taille = preg_replace('*,*','.',$taille);
   $poids=$_POST['poids'];
	$poids = preg_replace('*,*','.',$poids);
   $act=$_POST['act'];
if ($sexe==1) {$hek1="checked ";}
else {$hek2="checked ";}  

$obj=$_POST['obj'];
	$obj = preg_replace('*,*','.',$obj);   
   
   
   
				$nature = $_POST['nature'];
   				$poit = $_POST['poit'];		
if ($nature==1) {$check1="checked ";}
				else if ($nature==2) {$check2="checked ";}
				else if ($nature==3) {$check3="checked ";}
				else if ($nature==4) {$check4="checked ";}
				else if ($nature==5) {$check5="checked ";}
				else if ($nature==6) {$check6="checked ";}
if ($poit==10) {$check10="checked ";}
				else if ($poit==11) {$check11="checked ";}
				else if ($poit==12) {$check12="checked ";}

if (($nature==1)AND($poit==10))
 {$morpho="rond";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE ROND !</b></h3>
<p style="text-align: center;">Le visage rond est aussi long que large. L'absence de creux vous permet d'avoir un joli visage poupon, doux et digne de confiance !</span></p>
&nbsp;
<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE ROND !</span> </h4>
<div class="menuimage">
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-vue/quand-on-a-un-visage-rond/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-rond-femme-lunettes-de-vue.png" alt="Les lunettes de vue femme pour le visage en rond" title="Les lunettes de vue femme pour le visage en rond" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-soleil/quand-on-a-un-visage-rond/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-rond-femme-lunettes-de-soleil.png" alt="Les lunettes de soleil femme pour le visage en rond" title="Les lunettes de soleil femme pour le visage en rond" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
</div>
<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==1)AND($poit==11))
 {$morpho="ovale";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN OVALE !</b></h3>
<p style="text-align: center;">Vous possédez un visage harmonieux ! Le visage ovale est d’ailleurs considéré comme le visage parfait !</span></p>
&nbsp;
<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE OVALE !</span> </h4>
<div class="menuimage">
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-vue/quand-on-a-un-visage-ovale/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-ovale-femme-lunettes-de-vue.png" alt="Les lunettes de vue femme pour le visage en ovale" title="Les lunettes de vue femme pour le visage en ovale" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-soleil/quand-on-a-un-visage-ovale/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-ovale-femme-lunettes-de-soleil.png" alt="Les lunettes de soleil femme pour le visage en ovale" title="Les lunettes de soleil femme pour le visage en ovale" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
</div>

<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==1)AND($poit==12))
  {$morpho="oblong";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN OBLONG !</b></h3>
<p style="text-align: center;">La forme de votre visage s’apparente au visage ovale mais en moins large et en plus allongé. L’ovale étant la forme de visage parfaite, votre visage allongé est donc proche de la perfection ! </span></p>
&nbsp;
<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE OBLONG !</span> </h4>
<div class="menuimage">
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-vue/quand-on-a-un-visage-oblong-ou-allonge/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-oblong-femme-lunettes-de-vue.png" alt="Les lunettes de vue femme pour le visage en oblong" title="Les lunettes de vue femme pour le visage en oblong" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-soleil/quand-on-a-un-visage-oblong-ou-allonge/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-oblong-femme-lunettes-de-soleil.png" alt="Les lunettes de soleil femme pour le visage en oblong" title="Les lunettes de soleil femme pour le visage en oblong" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
</div>

<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==2)AND($poit==10))
  {$morpho="carre";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN CARRÉ !</b></h3>
<p style="text-align: center;">Vous l’aurez compris, votre visage est plutôt anguleux. Vous êtes une femme au caractère affirmé bien dans vos baskets ! Votre défi sera d’adoucir vos traits en choisissant une coiffure adaptée à votre visage carré ! </span></p>
&nbsp;
<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE CARRE !</span> </h4>
<div class="menuimage">
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-vue/quand-on-a-un-visage-carre/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-carre-femme-lunettes-de-vue.png" alt="Les lunettes de vue femme pour le visage en carré" title="Les lunettes de vue femme pour le visage en carré" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-soleil/quand-on-a-un-visage-carre/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-carre-femme-lunettes-de-soleil.png" alt="Les lunettes de soleil femme pour le visage en carré" title="Les lunettes de soleil femme pour le visage en carré" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
</div>


<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==2)AND($poit==11))
{$morpho="rectangle";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN RECTANGLE !</b></h3>
<p style="text-align: center;">Le visage rectangle ressemble au visage carré mais en plus long. Les contours de votre visage sont plutôt bien définis. Votre visage est anguleux. Votre objectif sera alors d’apporter de la douceur à votre visage ! </span></p>
&nbsp;
<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE RECTANGLE !</span> </h4>
<div class="menuimage">
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-vue/quand-on-a-un-visage-rectangulaire/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-rectangle-femme-lunettes-de-vue.png" alt="Les lunettes de vue femme pour le visage en rectangle" title="Les lunettes de vue femme pour le visage en rectangle" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-soleil/quand-on-a-un-visage-rectangulaire/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-rectangle-femme-lunettes-de-soleil.png" alt="Les lunettes de soleil femme pour le visage en rectangle" title="Les lunettes de soleil femme pour le visage en rectangle" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
</div>

<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==2)AND($poit==12))
{$morpho="rectangle";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN RECTANGLE !</b></h3>
<p style="text-align: center;">Le visage rectangle ressemble au visage carré mais en plus long. Les contours de votre visage sont plutôt bien définis. Votre visage est anguleux. Votre objectif sera alors d’apporter de la douceur à votre visage ! </span></p>
&nbsp;
<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE RECTANGLE !</span> </h4>
<div class="menuimage">
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-vue/quand-on-a-un-visage-rectangulaire/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-rectangle-femme-lunettes-de-vue.png" alt="Les lunettes de vue femme pour le visage en rectangle" title="Les lunettes de vue femme pour le visage en rectangle" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-soleil/quand-on-a-un-visage-rectangulaire/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-rectangle-femme-lunettes-de-soleil.png" alt="Les lunettes de soleil femme pour le visage en rectangle" title="Les lunettes de soleil femme pour le visage en rectangle" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
</div>

<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==3)AND($poit==10))
 {$morpho="triangle";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN TRIANGLE !</b></h3>
<p style="text-align: center;">Avec une mâchoire large et un front étroit, vous avez un visage plutôt rare ! C’est une chance de ne pas ressembler à toutes les femmes ! </span></p>
&nbsp;
<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE TRIANGLE !</span> </h4>
<div class="menuimage">
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-vue/quand-on-a-un-visage-en-triangle-haut-poire-ou-trapeze/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-triangle-femme-lunettes-de-vue.png" alt="Les lunettes de vue femme pour le visage en triangle" title="Les lunettes de vue femme pour le visage en triangle" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-soleil/quand-on-a-un-visage-en-triangle-haut-poire-ou-trapeze/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-triangle-femme-lunettes-de-soleil.png" alt="Les lunettes de soleil femme pour le visage en triangle" title="Les lunettes de soleil femme pour le visage en triangle" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
</div>

<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==3)AND($poit==11))
{$morpho="triangle";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN TRIANGLE !</b></h3>
<p style="text-align: center;">Avec une mâchoire large et un front étroit, vous avez un visage plutôt rare ! C’est une chance de ne pas ressembler à toutes les femmes ! </span></p>
&nbsp;
<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE TRIANGLE !</span> </h4>
<div class="menuimage">
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-vue/quand-on-a-un-visage-en-triangle-haut-poire-ou-trapeze/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-triangle-femme-lunettes-de-vue.png" alt="Les lunettes de vue femme pour le visage en triangle" title="Les lunettes de vue femme pour le visage en triangle" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-soleil/quand-on-a-un-visage-en-triangle-haut-poire-ou-trapeze/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-triangle-femme-lunettes-de-soleil.png" alt="Les lunettes de soleil femme pour le visage en triangle" title="Les lunettes de soleil femme pour le visage en triangle" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
</div>

<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==3)AND($poit==12))
{$morpho="triangle";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN TRIANGLE !</b></h3>
<p style="text-align: center;">Avec une mâchoire large et un front étroit, vous avez un visage plutôt rare ! C’est une chance de ne pas ressembler à toutes les femmes ! </span></p>
&nbsp;
<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE TRIANGLE !</span> </h4>
<div class="menuimage">
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-vue/quand-on-a-un-visage-en-triangle-haut-poire-ou-trapeze/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-triangle-femme-lunettes-de-vue.png" alt="Les lunettes de vue femme pour le visage en triangle" title="Les lunettes de vue femme pour le visage en triangle" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-soleil/quand-on-a-un-visage-en-triangle-haut-poire-ou-trapeze/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-triangle-femme-lunettes-de-soleil.png" alt="Les lunettes de soleil femme pour le visage en triangle" title="Les lunettes de soleil femme pour le visage en triangle" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
</div>

<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==4)AND($poit==10))
{$morpho="triangle inversé";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN TRIANGLE INVERSÉ !</b></h3>
<p style="text-align: center;">Avec une mâchoire large et un front étroit, vous avez un visage plutôt rare ! C’est une chance de ne pas ressembler à toutes les femmes ! </span></p>
&nbsp;
<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE TRIANGLE INVERSÉ !</span> </h4>
<div class="menuimage">
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-vue/quand-on-a-un-visage-en-triangle-bas-inverse-v-ou-coeur/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-triangle-inverse-femme-lunettes-de-vue.png" alt="Les lunettes de vue femme pour le visage en triangle inversé" title="Les lunettes de vue femme pour le visage en triangle inversé" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-soleil/quand-on-a-un-visage-en-triangle-bas-inverse-v-ou-coeur/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-triangle-inverse-femme-lunettes-de-soleil.png" alt="Les lunettes de soleil femme pour le visage en triangle inversé" title="Les lunettes de soleil femme pour le visage en triangle inversé" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
</div>

<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==4)AND($poit==11))
{$morpho="triangle inversé";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN TRIANGLE INVERSÉ !</b></h3>
<p style="text-align: center;">Avec une mâchoire large et un front étroit, vous avez un visage plutôt rare ! C’est une chance de ne pas ressembler à toutes les femmes ! </span></p>
&nbsp;
<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE TRIANGLE INVERSÉ !</span> </h4>
<div class="menuimage">
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-vue/quand-on-a-un-visage-en-triangle-bas-inverse-v-ou-coeur/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-triangle-inverse-femme-lunettes-de-vue.png" alt="Les lunettes de vue femme pour le visage en triangle inversé" title="Les lunettes de vue femme pour le visage en triangle inversé" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-soleil/quand-on-a-un-visage-en-triangle-bas-inverse-v-ou-coeur/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-triangle-inverse-femme-lunettes-de-soleil.png" alt="Les lunettes de soleil femme pour le visage en triangle inversé" title="Les lunettes de soleil femme pour le visage en triangle inversé" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
</div>

<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==4)AND($poit==12))
 {$morpho="triangle inversé";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN TRIANGLE INVERSÉ !</b></h3>
<p style="text-align: center;">Avec une mâchoire large et un front étroit, vous avez un visage plutôt rare ! C’est une chance de ne pas ressembler à toutes les femmes ! </span></p>
&nbsp;
<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE TRIANGLE INVERSÉ !</span> </h4>
<div class="menuimage">
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-vue/quand-on-a-un-visage-en-triangle-bas-inverse-v-ou-coeur/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-triangle-inverse-femme-lunettes-de-vue.png" alt="Les lunettes de vue femme pour le visage en triangle inversé" title="Les lunettes de vue femme pour le visage en triangle inversé" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-soleil/quand-on-a-un-visage-en-triangle-bas-inverse-v-ou-coeur/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-triangle-inverse-femme-lunettes-de-soleil.png" alt="Les lunettes de soleil femme pour le visage en triangle inversé" title="Les lunettes de soleil femme pour le visage en triangle inversé" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
</div>

<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==5)AND($poit==10))
 {$morpho="rond";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE ROND !</b></h3>
<p style="text-align: center;">Le visage rond est aussi long que large. L'absence de creux vous permet d'avoir un joli visage poupon, doux et digne de confiance !</span></p>
&nbsp;
<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE ROND !</span> </h4>
<div class="menuimage">
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-vue/quand-on-a-un-visage-rond/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-rond-femme-lunettes-de-vue.png" alt="Les lunettes de vue femme pour le visage en rond" title="Les lunettes de vue femme pour le visage en rond" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-soleil/quand-on-a-un-visage-rond/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-rond-femme-lunettes-de-soleil.png" alt="Les lunettes de soleil femme pour le visage en rond" title="Les lunettes de soleil femme pour le visage en rond" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
</div>

<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==5)AND($poit==11))
 {$morpho="ovale";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN OVALE !</b></h3>
<p style="text-align: center;">Vous possédez un visage harmonieux ! Le visage ovale est d’ailleurs considéré comme le visage parfait !</span></p>
&nbsp;
<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE OVALE !</span> </h4>
<div class="menuimage">
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-vue/quand-on-a-un-visage-ovale/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-ovale-femme-lunettes-de-vue.png" alt="Les lunettes de vue femme pour le visage en ovale" title="Les lunettes de vue femme pour le visage en ovale" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-soleil/quand-on-a-un-visage-ovale/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-ovale-femme-lunettes-de-soleil.png" alt="Les lunettes de soleil femme pour le visage en ovale" title="Les lunettes de soleil femme pour le visage en ovale" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
</div>

<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==5)AND($poit==12))
 {$morpho="oblong";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN OBLONG !</b></h3>
<p style="text-align: center;">La forme de votre visage s’apparente au visage ovale mais en moins large et en plus allongé. L’ovale étant la forme de visage parfaite, votre visage allongé est donc proche de la perfection ! </span></p>
&nbsp;
<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE OBLONG !</span> </h4>
<div class="menuimage">
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-vue/quand-on-a-un-visage-oblong-ou-allonge/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-oblong-femme-lunettes-de-vue.png" alt="Les lunettes de vue femme pour le visage en oblong" title="Les lunettes de vue femme pour le visage en oblong" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-soleil/quand-on-a-un-visage-oblong-ou-allonge/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-oblong-femme-lunettes-de-soleil.png" alt="Les lunettes de soleil femme pour le visage en oblong" title="Les lunettes de soleil femme pour le visage en oblong" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
</div>

<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==6)AND($poit==10))
{$morpho="losange";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN LOSANGE !</b></h3>
<p style="text-align: center;">Vous avez un visage très féminin. Avec vos pommettes hautes et larges, vous êtes tout en beauté ! </span></p>
&nbsp;
<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE LOSANGE !</span> </h4>
<div class="menuimage">
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-vue/quand-on-a-un-visage-en-losange-hexagonal-ou-diamant/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-losange-femme-lunettes-de-vue.png" alt="Les lunettes de vue femme pour le visage en losange" title="Les lunettes de vue femme pour le visage en losange" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-soleil/quand-on-a-un-visage-losange-hexagonal-ou-diamant/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-losange-femme-lunettes-de-soleil.png" alt="Les lunettes de soleil femme pour le visage en losange" title="Les lunettes de soleil femme pour le visage en losange" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
</div>

<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==6)AND($poit==11))
{$morpho="losange";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN LOSANGE !</b></h3>
<p style="text-align: center;">Vous avez un visage très féminin. Avec vos pommettes hautes et larges, vous êtes tout en beauté ! </span></p>
&nbsp;
<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE LOSANGE !</span> </h4>
<div class="menuimage">
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-vue/quand-on-a-un-visage-en-losange-hexagonal-ou-diamant/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-losange-femme-lunettes-de-vue.png" alt="Les lunettes de vue femme pour le visage en losange" title="Les lunettes de vue femme pour le visage en losange" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-soleil/quand-on-a-un-visage-losange-hexagonal-ou-diamant/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-losange-femme-lunettes-de-soleil.png" alt="Les lunettes de soleil femme pour le visage en losange" title="Les lunettes de soleil femme pour le visage en losange" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
</div>

<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==6)AND($poit==12))
 {$morpho="losange";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>

<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN LOSANGE !</b></h3>
<p style="text-align: center;">Vous avez un visage très féminin. Avec vos pommettes hautes et larges, vous êtes tout en beauté ! </span></p>
&nbsp;

<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE LOSANGE !</span> </h4>
<div class="menuimage">
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-vue/quand-on-a-un-visage-en-losange-hexagonal-ou-diamant/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-losange-femme-lunettes-de-vue.png" alt="Les lunettes de vue femme pour le visage en losange" title="Les lunettes de vue femme pour le visage en losange" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-soleil/quand-on-a-un-visage-losange-hexagonal-ou-diamant/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-losange-femme-lunettes-de-soleil.png" alt="Les lunettes de soleil femme pour le visage en losange" title="Les lunettes de soleil femme pour le visage en losange" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
</div>



<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}






	$codehtml .= <<<EOT
<div class="bloc-morpho-gl">
<form name="morphoaform" class="form-type1" method="post" action="#visage">
<div id="visage"></div>
<div class="mpr-sousmenu">
<ul>
<li>Femme vue</li>
<li><a title="Lunettes de soleil pour femme" href="https://www.regivia.com/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-soleil/">Femme soleil</a></li>
<li><a title="Lunettes de vue pour homme" href="https://www.regivia.com/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-vue/">Homme vue</a></li>
<li><a title="Lunettes de soleil pour homme" href="https://www.regivia.com/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-soleil/">Homme soleil</a></li>
</ul>
</div>
<img src="https://www.regivia.com/wp-content/uploads/Test-morphologie-et-de-forme-de-visage-lunettes-de-vue-femme-avec-proportions.webp" alt="Test de morphologie et forme de visage" title="Test de morphologie et forme de visage" class="aligncenter size-full wp-image-16781" height="200" width="600">

<div class="bloc-morpho-blanc">
<h3>QUESTION<span class="rosespan"> 1</span>/2 <span class="rosespan"> </span></h3>
<em>Devant un miroir, les cheveux en arrière et à l’aide de l’image ci-dessus représentant des formes et les 3 lignes du visage "front (1), pommettes (2) et mâchoire (3)" ...</em>
<br><br><h4><span class="rosespan">Êtes-vous plutôt ?</span></h4>
</div>
<input id="ex1" type="radio" name="nature" value="1" $check1/><label for="ex1">(ex 1) Front et mâchoire arrondis et de la même largeur </label><br>
<input id="ex2" type="radio" name="nature" value="2" $check2/><label for="ex2">(ex 2) Front, pommettes et mâchoire de la même largeur </label><br />
<input id="ex3" type="radio" name="nature" value="3" $check3/><label for="ex3">(ex 3) Front et pommettes plus étroits que la mâchoire  </label><br />
<input id="ex4" type="radio" name="nature" value="4" $check4/><label for="ex4">(ex 4) Front et pommettes plus larges que la mâchoire </label><br>
<input id="ex5" type="radio" name="nature" value="5" $check5/><label for="ex5">(ex 5) Front et mâchoire arrondis avec pommettes rebondies  </label><br>
<input id="ex6" type="radio" name="nature" value="6" $check6/><label for="ex6">(ex 6) Front et mâchoire étroits avec pommettes hautes et larges  </label><br>
<div class="bloc-morpho-blanc">
<h3>QUESTION<span class="rosespan"> 2</span>/2 <span class="rosespan"> </span></h3>
<h4><span class="rosespan">Votre visage est-il plus long que large ?</span></h4></div>
<input id="ex10" type="radio" name="poit" value="10" $check10/><label for="ex10">Pas du tout : Longueur = largeur</label><br>
<input id="ex11" type="radio" name="poit" value="11" $check11/><label for="ex11">Un peu allongé : Longueur = 1 fois ½ la largeur</label><br>
<input id="ex12" type="radio" name="poit" value="12" $check12/><label for="ex12">Très allongé : Longueur = plus d'1 fois ½ la largeur </label><br><br>
<p class="centrage"><input name="valider" value="VALIDER" type="submit"></p><br>
</div>	
</form>
EOT;
if (isset($_POST['valider'])) {
	   $codehtml .= <<<EOT
$texte

<div class="ocm-bl1">
<span class="outil-action-rose">V</span><span class="outil-action-noir">ous souhaitez maigrir ? Poursuivez l'analyse !</span>
<form name="anaform" class="ocm-form" method="post" action="#analyse">
<span class="rosep">Vous êtes</span>
<ul class="ul_calc"> 
<li><input id="femme" name="sexe" value="2" type="radio" $hek2/><label for="femme">Une femme</label></li> 
<li><input id="homme" name="sexe" value="1" type="radio" $hek1/><label for="homme">Un homme</label></li></ul>
<div class="clear">
<div class="ocm-col3"><span class="rosep">Votre âge</span><br><input name="age" class="ocm-input1" value="$age" type="text"></div>
<div class="ocm-col3"><span class="rosep">Votre taille (cm)</span><br><input name="taille" class="ocm-input1" value="$taille" type="text"></div>
<div class="ocm-col3"><span class="rosep">Votre poids (KG)</span><br><input name="poids" class="ocm-input1" value="$poids" type="text"></div>
</div>
<div class="clear">
<div class="centrage"><span class="rosep">Quel est votre objectif de poids? (en KG)</span><br><input name="obj" class="ocm-input1" value="$obj" type="text"></div></div>
<div class="clear">
<input type="hidden" name="poit" value="$poit" />
<input type="hidden" name="nature" value="$nature" />
<input type="hidden" name="valider" value="CALCULER" />
<div id="analyse" class="centrage"><br />&nbsp;
<input name="valider2" value="CALCULER" type="submit">
</div> </div>


</form>
<div class="clear-zero">&nbsp;</div>
</div>

EOT;
}



if (isset($_POST['valider2'])) {
 $IMC=($poids/(($taille/100)*($taille/100)));
   $IMC=round($IMC,1);
      if ($IMC<18.5) {
   $STATUT= "maigreur";
   $IMAGE="imc-statut-maigreur.png";
   }
   else if ($IMC<25) {
   $STATUT= "corpulence normale";
   $IMAGE="imc-statut-normal.png";
   }
   else if ($IMC<30) {
   $STATUT= "surpoids";
   $IMAGE="imc-statut-suroids.png";
   } 
   else {
   $STATUT= "obèsité";
   $IMAGE="imc-statut-obesite.png";
   }
   
      if ($sexe=="2") {$PIL=($taille-100-(($taille-150)/2.5));}
   else if ($sexe=="1") {$PIL=($taille-100-(($taille-150)/4));}
$PIL=round($PIL,1);
   
   $pmaa = (($obj+$PIL)/2);
   $kap = ($poids-$pmaa);
   $vakap = abs($kap);
   
       if ($kap>0) {$textp="Poids moyen à perdre";}
   else if ($kap<0) {$textp="Poids moyen à gagner";}
   else {$textp="Vous êtes à l'équilibre";} 
   
       if ($kap<0.1) {$texto1="Vous n'avez pas de poids à perdre. Félicitations.";
   $lienb="<div class=\"ocm-liena\"><a href=\"/categorie-produit/coffret-minceur-box-de-regime/\">VOIR TOUS NOS PROGRAMMES</a></div>";	   
	   }
   else if ($kap<1) {$texto1="Vous êtes presque à votre poids d'équilibre. Vous pouvez perdre ce léger superflus en découvrant notre programme.";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-s-a-3-kg-14-jours/\">VOIR MON PROGRAMME</a></div>";
   }	   
   else if ($kap<3) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">2  semaines!</span>";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-s-a-3-kg-14-jours/\">VOIR MON PROGRAMME</a></div>";
   }
   else if ($kap<6) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">4  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-m-3-a-6-kg-28-jours/\">VOIR MON PROGRAMME</a></div>";}
   else if ($kap<9) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">6  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-l-6-a-9-kg-42-jours/\">VOIR MON PROGRAMME</a></div>";}
   else if ($kap<12) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">10  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xl-9-a-12-kg-56-jours/\">VOIR MON PROGRAMME</a></div>";}
    else if ($kap<15) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">10  semaines!</span>";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xxl-12-a-15-kg-70-jours/\">VOIR MON PROGRAMME</a></div>";}
   else {$texto1="En étant raisonnable vous pouvez vous fixer un objectif d'environ <span class=\"rosep\">15 kg</span> et l'atteindre au bout de <span class=\"rosep\">10 semaines!</span>";
     $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xxl-12-a-15-kg-70-jours/\">VOIR MON PROGRAMME</a></div>";} 
   
   $codehtml .= <<<EOT
<div class="ocm-noir"><img src="/wp-content/uploads/outils-zones-muscles-2.png">
</div>
<div class="ocm-bl3">
<div class="ocm-blancg">Votre Indice de Masse Corporelle</div>
<p>IMC = <span class="rosegrasspan">$IMC</span><br />
Statut = <span class="rosegrasspan">$STATUT</span></p>
 <img class="aligncenter" src="/wp-content/uploads/$IMAGE"> 
<div class="ocm-blancg">Vos indicateurs de poids</div>
 <p>
  Votre poids actuel = <span class="rosegrasspan">$poids</span> kg<br />
 Poids idéal (formule de Lorentz) = <span class="rosegrasspan">$PIL</span> kg<br />
Objectif personnel = <span class="rosegrasspan">$obj</span> kg
</p>
<div class="float50">
  <div class="ocm-bl4">Poids moyen à atteindre</div>
  <div class="ocm-circle"><br><span class="ocm-res14r">$pmaa</span><br><span class="result14p">Kg</span></div>
</div>
<div class="float50">
    <div class="ocm-bl4">$textp</div>
	<div class="ocm-circle"><br><span class="ocm-res14r">$vakap</span><br><span class="result14p">Kg</span></div>
</div>
<div class="clear-zero">&nbsp;</div>
</div>
<div class="ocm-noir">
<img src="/wp-content/uploads/outils-zones-muscles-3.png">
</div>
<div class="ocm-bl1">
<div class="clear">
<div class="centrage"><span class="rosep">Quel objectif et comment le concrétiser?</span></div>
</div>
$texto1
<div class="clear-zero">&nbsp;</div>
$lienb
<img src="/wp-content/uploads/ligne-objectif-final.png">
</div>
EOT;
}



	   $codehtml .= <<<EOT
<div class="clear-zero">&nbsp;</div>
EOT;



return $codehtml;
}
add_shortcode( 'outilsfemmevue', 'outils_femmevue' );

//Calculette visage lunette de soleil femme
function outils_femmesoleil($url) {
extract( shortcode_atts( array(
      'url'     => '',
   ), $url, 'outilsfemmesoleil' ) );
   
   
    $sexe=$_POST['sexe'];   
   $age=$_POST['age'];
   $taille=$_POST['taille'];
	$taille = preg_replace('*,*','.',$taille);
   $poids=$_POST['poids'];
	$poids = preg_replace('*,*','.',$poids);
   $act=$_POST['act'];
if ($sexe==1) {$hek1="checked ";}
else {$hek2="checked ";}  

$obj=$_POST['obj'];
	$obj = preg_replace('*,*','.',$obj);   
   
   
   
				$nature = $_POST['nature'];
   				$poit = $_POST['poit'];		
if ($nature==1) {$check1="checked ";}
				else if ($nature==2) {$check2="checked ";}
				else if ($nature==3) {$check3="checked ";}
				else if ($nature==4) {$check4="checked ";}
				else if ($nature==5) {$check5="checked ";}
				else if ($nature==6) {$check6="checked ";}
if ($poit==10) {$check10="checked ";}
				else if ($poit==11) {$check11="checked ";}
				else if ($poit==12) {$check12="checked ";}

if (($nature==1)AND($poit==10))
 {$morpho="rond";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE ROND !</b></h3>
<p style="text-align: center;">Le visage rond est aussi long que large. L'absence de creux vous permet d'avoir un joli visage poupon, doux et digne de confiance !</span></p>
&nbsp;
<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE ROND !</span> </h4>
<div class="menuimage">

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-soleil/quand-on-a-un-visage-rond/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-rond-femme-lunettes-de-soleil.png" alt="Les lunettes de soleil femme pour le visage en rond" title="Les lunettes de soleil femme pour le visage en rond" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-vue/quand-on-a-un-visage-rond/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-rond-femme-lunettes-de-vue.png" alt="Les lunettes de vue femme pour le visage en rond" title="Les lunettes de vue femme pour le visage en rond" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
</div>

<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==1)AND($poit==11))
 {$morpho="ovale";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN OVALE !</b></h3>
<p style="text-align: center;">Vous possédez un visage harmonieux ! Le visage ovale est d’ailleurs considéré comme le visage parfait !</span></p>
&nbsp;
<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS POUR LE VISAGE OVALE !</span> </h4>
<div class="menuimage">
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-soleil/quand-on-a-un-visage-ovale/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-ovale-femme-lunettes-de-soleil.png" alt="Les lunettes de soleil femme pour le visage en ovale" title="Les lunettes de soleil femme pour le visage en ovale" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-vue/quand-on-a-un-visage-ovale/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-ovale-femme-lunettes-de-vue.png" alt="Les lunettes de vue femme pour le visage en ovale" title="Les lunettes de vue femme pour le visage en ovale" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
</div>


<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==1)AND($poit==12))
  {$morpho="oblong";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN OBLONG !</b></h3>
<p style="text-align: center;">La forme de votre visage s’apparente au visage ovale mais en moins large et en plus allongé. L’ovale étant la forme de visage parfaite, votre visage allongé est donc proche de la perfection ! </span></p>
&nbsp;
<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE OBLONG !</span> </h4>
<div class="menuimage">
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-soleil/quand-on-a-un-visage-oblong-ou-allonge/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-oblong-femme-lunettes-de-soleil.png" alt="Les lunettes de soleil femme pour le visage en oblong" title="Les lunettes de soleil femme pour le visage en oblong" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-vue/quand-on-a-un-visage-oblong-ou-allonge/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-oblong-femme-lunettes-de-vue.png" alt="Les lunettes de vue femme pour le visage en oblong" title="Les lunettes de vue femme pour le visage en oblong" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
</div>


<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==2)AND($poit==10))
  {$morpho="carre";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN CARRÉ !</b></h3>
<p style="text-align: center;">Vous l’aurez compris, votre visage est plutôt anguleux. Vous êtes une femme au caractère affirmé bien dans vos baskets ! Votre défi sera d’adoucir vos traits en choisissant une coiffure adaptée à votre visage carré ! </span></p>
&nbsp;
<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE CARRE !</span> </h4>
<div class="menuimage">

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-soleil/quand-on-a-un-visage-carre/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-carre-femme-lunettes-de-soleil.png" alt="Les lunettes de soleil femme pour le visage carré" title="Les lunettes de soleil femme pour le visage carré" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-vue/quand-on-a-un-visage-carre/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-carre-femme-lunettes-de-vue.png" alt="Les lunettes de vue femme pour le visage carré" title="Les lunettes de vue femme pour le visage carré" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
</div>



<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==2)AND($poit==11))
{$morpho="rectangle";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN RECTANGLE !</b></h3>
<p style="text-align: center;">Le visage rectangle ressemble au visage carré mais en plus long. Les contours de votre visage sont plutôt bien définis. Votre visage est anguleux. Votre objectif sera alors d’apporter de la douceur à votre visage ! </span></p>
&nbsp;
<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE RECTANGLE !</span> </h4>
<div class="menuimage">
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-soleil/quand-on-a-un-visage-rectangulaire/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-rectangle-femme-lunettes-de-soleil.png" alt="Les lunettes de soleil femme pour le visage rectangle" title="Les lunettes de soleil femme pour le visage rectangle" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-vue/quand-on-a-un-visage-rectangulaire/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-rectangle-femme-lunettes-de-vue.png" alt="Les lunettes de vue femme pour le visage rectangle" title="Les lunettes de vue femme pour le visage rectangle" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
</div>


<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==2)AND($poit==12))
{$morpho="rectangle";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN RECTANGLE !</b></h3>
<p style="text-align: center;">Le visage rectangle ressemble au visage carré mais en plus long. Les contours de votre visage sont plutôt bien définis. Votre visage est anguleux. Votre objectif sera alors d’apporter de la douceur à votre visage ! </span></p>
&nbsp;
<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE RECTANGLE !</span> </h4>
<div class="menuimage">
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-soleil/quand-on-a-un-visage-rectangulaire/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-rectangle-femme-lunettes-de-soleil.png" alt="Les lunettes de soleil femme pour le visage rectangle" title="Les lunettes de soleil femme pour le visage rectangle" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-vue/quand-on-a-un-visage-rectangulaire/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-rectangle-femme-lunettes-de-vue.png" alt="Les lunettes de vue femme pour le visage rectangle" title="Les lunettes de vue femme pour le visage rectangle" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
</div>


<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==3)AND($poit==10))
 {$morpho="triangle";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN TRIANGLE !</b></h3>
<p style="text-align: center;">Avec une mâchoire large et un front étroit, vous avez un visage plutôt rare ! C’est une chance de ne pas ressembler à toutes les femmes ! </span></p>
&nbsp;
<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE TRIANGLE !</span> </h4>
<div class="menuimage">
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-soleil/quand-on-a-un-visage-en-triangle-haut-poire-ou-trapeze/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-triangle-femme-lunettes-de-soleil.png" alt="Les lunettes de soleil femme pour le visage en triangle" title="Les lunettes de soleil femme pour le visage en triangle" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-vue/quand-on-a-un-visage-en-triangle-haut-poire-ou-trapeze/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-triangle-femme-lunettes-de-vue.png" alt="Les lunettes de vue femme pour le visage en triangle" title="Les lunettes de vue femme pour le visage en triangle" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
</div>


<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==3)AND($poit==11))
{$morpho="triangle";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN TRIANGLE !</b></h3>
<p style="text-align: center;">Avec une mâchoire large et un front étroit, vous avez un visage plutôt rare ! C’est une chance de ne pas ressembler à toutes les femmes ! </span></p>
&nbsp;
<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE TRIANGLE !</span> </h4>
<div class="menuimage">
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-soleil/quand-on-a-un-visage-en-triangle-haut-poire-ou-trapeze/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-triangle-femme-lunettes-de-soleil.png" alt="Les lunettes de soleil femme pour le visage en triangle" title="Les lunettes de soleil femme pour le visage en triangle" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-vue/quand-on-a-un-visage-en-triangle-haut-poire-ou-trapeze/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-triangle-femme-lunettes-de-vue.png" alt="Les lunettes de vue femme pour le visage en triangle" title="Les lunettes de vue femme pour le visage en triangle" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
</div>


<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==3)AND($poit==12))
{$morpho="triangle";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN TRIANGLE !</b></h3>
<p style="text-align: center;">Avec une mâchoire large et un front étroit, vous avez un visage plutôt rare ! C’est une chance de ne pas ressembler à toutes les femmes ! </span></p>
&nbsp;
<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE TRIANGLE !</span> </h4>
<div class="menuimage">

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-soleil/quand-on-a-un-visage-en-triangle-haut-poire-ou-trapeze/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-triangle-femme-lunettes-de-soleil.png" alt="Les lunettes de soleil femme pour le visage en triangle" title="Les lunettes de soleil femme pour le visage en triangle" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-vue/quand-on-a-un-visage-en-triangle-haut-poire-ou-trapeze/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-triangle-femme-lunettes-de-vue.png" alt="Les lunettes de vue femme pour le visage en triangle" title="Les lunettes de vue femme pour le visage en triangle" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
</div>

<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==4)AND($poit==10))
{$morpho="triangle inversé";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN TRIANGLE INVERSÉ !</b></h3>
<p style="text-align: center;">Avec une mâchoire large et un front étroit, vous avez un visage plutôt rare ! C’est une chance de ne pas ressembler à toutes les femmes ! </span></p>
&nbsp;
<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE TRIANGLE INVERSÉ !</span> </h4>
<div class="menuimage">
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-soleil/quand-on-a-un-visage-en-triangle-bas-inverse-v-ou-coeur/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-triangle-inverse-femme-lunettes-de-soleil.png" alt="Les lunettes de soleil femme pour le visage en triangle inversé" title="Les lunettes de soleil femme pour le visage en triangle inversé" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-vue/quand-on-a-un-visage-en-triangle-bas-inverse-v-ou-coeur/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-triangle-inverse-femme-lunettes-de-vue.png" alt="Les lunettes de vue femme pour le visage en triangle inversé" title="Les lunettes de vue femme pour le visage en triangle inversé" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
</div>


<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==4)AND($poit==11))
{$morpho="triangle inversé";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN TRIANGLE INVERSÉ !</b></h3>
<p style="text-align: center;">Avec une mâchoire large et un front étroit, vous avez un visage plutôt rare ! C’est une chance de ne pas ressembler à toutes les femmes ! </span></p>
&nbsp;
<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE TRIANGLE INVERSÉ !</span> </h4>
<div class="menuimage">
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-soleil/quand-on-a-un-visage-en-triangle-bas-inverse-v-ou-coeur/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-triangle-inverse-femme-lunettes-de-soleil.png" alt="Les lunettes de soleil femme pour le visage en triangle inversé" title="Les lunettes de soleil femme pour le visage en triangle inversé" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-vue/quand-on-a-un-visage-en-triangle-bas-inverse-v-ou-coeur/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-triangle-inverse-femme-lunettes-de-vue.png" alt="Les lunettes de vue femme pour le visage en triangle inversé" title="Les lunettes de vue femme pour le visage en triangle inversé" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
</div>


<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==4)AND($poit==12))
 {$morpho="triangle inversé";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN TRIANGLE INVERSÉ !</b></h3>
<p style="text-align: center;">Avec une mâchoire large et un front étroit, vous avez un visage plutôt rare ! C’est une chance de ne pas ressembler à toutes les femmes ! </span></p>
&nbsp;
<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE TRIANGLE INVERSÉ !</span> </h4>
<div class="menuimage">
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-soleil/quand-on-a-un-visage-en-triangle-bas-inverse-v-ou-coeur/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-triangle-inverse-femme-lunettes-de-soleil.png" alt="Les lunettes de soleil femme pour le visage en triangle inversé" title="Les lunettes de soleil femme pour le visage en triangle inversé" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-vue/quand-on-a-un-visage-en-triangle-bas-inverse-v-ou-coeur/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-triangle-inverse-femme-lunettes-de-vue.png" alt="Les lunettes de vue femme pour le visage en triangle inversé" title="Les lunettes de vue femme pour le visage en triangle inversé" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
</div>


<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==5)AND($poit==10))
 {$morpho="rond";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE ROND !</b></h3>
<p style="text-align: center;">Le visage rond est aussi long que large. L'absence de creux vous permet d'avoir un joli visage poupon, doux et digne de confiance !</span></p>
&nbsp;
<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE ROND !</span> </h4>
<div class="menuimage">
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-soleil/quand-on-a-un-visage-rond/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-rond-femme-lunettes-de-soleil.png" alt="Les lunettes de soleil femme pour le visage en rond" title="Les lunettes de soleil femme pour le visage en rond" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-vue/quand-on-a-un-visage-rond/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-rond-femme-lunettes-de-vue.png" alt="Les lunettes de vue femme pour le visage en rond" title="Les lunettes de vue femme pour le visage en rond" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
</div>


<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==5)AND($poit==11))
 {$morpho="ovale";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN OVALE !</b></h3>
<p style="text-align: center;">Vous possédez un visage harmonieux ! Le visage ovale est d’ailleurs considéré comme le visage parfait !</span></p>
&nbsp;
<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE OVALE !</span> </h4>
<div class="menuimage">
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-soleil/quand-on-a-un-visage-ovale/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-ovale-femme-lunettes-de-soleil.png" alt="Les lunettes de soleil femme pour le visage en ovale" title="Les lunettes de soleil femme pour le visage en ovale" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-vue/quand-on-a-un-visage-ovale/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-ovale-femme-lunettes-de-vue.png" alt="Les lunettes de vue femme pour le visage en ovale" title="Les lunettes de vue femme pour le visage en ovale" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
</div>


<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==5)AND($poit==12))
 {$morpho="oblong";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN OBLONG !</b></h3>
<p style="text-align: center;">La forme de votre visage s’apparente au visage ovale mais en moins large et en plus allongé. L’ovale étant la forme de visage parfaite, votre visage allongé est donc proche de la perfection ! </span></p>
&nbsp;
<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE OBLONG !</span> </h4>
<div class="menuimage">
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-soleil/quand-on-a-un-visage-oblong-ou-allonge/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-oblong-femme-lunettes-de-soleil.png" alt="Les lunettes de soleil femme pour le visage en oblong" title="Les lunettes de soleil femme pour le visage en oblong" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-vue/quand-on-a-un-visage-oblong-ou-allonge/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-oblong-femme-lunettes-de-vue.png" alt="Les lunettes de vue femme pour le visage en oblong" title="Les lunettes de vue femme pour le visage en oblong" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
</div>


<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==6)AND($poit==10))
{$morpho="losange";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN LOSANGE !</b></h3>
<p style="text-align: center;">Vous avez un visage très féminin. Avec vos pommettes hautes et larges, vous êtes tout en beauté ! </span></p>
&nbsp;
<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE LOSANGE !</span> </h4>
<div class="menuimage">
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-soleil/quand-on-a-un-visage-losange-hexagonal-ou-diamant/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-losange-femme-lunettes-de-soleil.png" alt="Les lunettes de soleil femme pour le visage en losange" title="Les lunettes de soleil femme pour le visage en losange" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-vue/quand-on-a-un-visage-en-losange-hexagonal-ou-diamant/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-losange-femme-lunettes-de-vue.png" alt="Les lunettes de vue femme pour le visage en losange" title="Les lunettes de vue femme pour le visage en losange" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
</div>


<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==6)AND($poit==11))
{$morpho="losange";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN LOSANGE !</b></h3>
<p style="text-align: center;">Vous avez un visage très féminin. Avec vos pommettes hautes et larges, vous êtes tout en beauté ! </span></p>
&nbsp;
<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE LOSANGE !</span> </h4>
<div class="menuimage">
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-soleil/quand-on-a-un-visage-losange-hexagonal-ou-diamant/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-losange-femme-lunettes-de-soleil.png" alt="Les lunettes de soleil femme pour le visage en losange" title="Les lunettes de soleil femme pour le visage en losange" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-vue/quand-on-a-un-visage-en-losange-hexagonal-ou-diamant/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-losange-femme-lunettes-de-vue.png" alt="Les lunettes de vue femme pour le visage en losange" title="Les lunettes de vue femme pour le visage en losange" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
</div>


<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==6)AND($poit==12))
 {$morpho="losange";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>

<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN LOSANGE !</b></h3>
<p style="text-align: center;">Vous avez un visage très féminin. Avec vos pommettes hautes et larges, vous êtes tout en beauté ! </span></p>
&nbsp;

<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE LOSANGE !</span> </h4>
<div class="menuimage">
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-soleil/quand-on-a-un-visage-losange-hexagonal-ou-diamant/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-losange-femme-lunettes-de-soleil.png" alt="Les lunettes de soleil femme pour le visage en losange" title="Les lunettes de soleil femme pour le visage en losange" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-vue/quand-on-a-un-visage-en-losange-hexagonal-ou-diamant/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-losange-femme-lunettes-de-vue.png" alt="Les lunettes de vue femme pour le visage en losange" title="Les lunettes de vue femme pour le visage en losange" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
</div>




<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}






	$codehtml .= <<<EOT
<div class="bloc-morpho-gl">
<form name="morphoaform" class="form-type1" method="post" action="#visage">
<div id="visage"></div>
<div class="mpr-sousmenu">
<ul>

<li><a title="Lunettes de vue pour femme" href="https://www.regivia.com/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-vue/">Femme vue</a></li>
<li>Femme soleil</li>
<li><a title="Lunettes de vue pour homme" href="https://www.regivia.com/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-vue/">Homme vue</a></li>
<li><a title="Lunettes de soleil pour homme" href="https://www.regivia.com/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-soleil/">Homme soleil</a></li>
</ul>
</div>
<img src="https://www.regivia.com/wp-content/uploads/Test-morphologie-et-de-forme-de-visage-lunettes-de-soleil-femme-avec-proportions.webp" alt="Test de morphologie et forme de visage" title="Test de morphologie et forme de visage" class="aligncenter size-full wp-image-16781" height="200" width="600">

<div class="bloc-morpho-blanc">
<h3>QUESTION<span class="rosespan"> 1</span>/2 <span class="rosespan"> </span></h3>
<em>Devant un miroir, les cheveux en arrière et à l’aide de l’image ci-dessus représentant des formes et les 3 lignes du visage "front (1), pommettes (2) et mâchoire (3)" ...</em>
<br><br><h4><span class="rosespan">Êtes-vous plutôt ?</span></h4>
</div>
<input id="ex1" type="radio" name="nature" value="1" $check1/><label for="ex1">(ex 1) Front et mâchoire arrondis et de la même largeur </label><br>
<input id="ex2" type="radio" name="nature" value="2" $check2/><label for="ex2">(ex 2) Front, pommettes et mâchoire de la même largeur </label><br />
<input id="ex3" type="radio" name="nature" value="3" $check3/><label for="ex3">(ex 3) Front et pommettes plus étroits que la mâchoire  </label><br />
<input id="ex4" type="radio" name="nature" value="4" $check4/><label for="ex4">(ex 4) Front et pommettes plus larges que la mâchoire </label><br>
<input id="ex5" type="radio" name="nature" value="5" $check5/><label for="ex5">(ex 5) Front et mâchoire arrondis avec pommettes rebondies  </label><br>
<input id="ex6" type="radio" name="nature" value="6" $check6/><label for="ex6">(ex 6) Front et mâchoire étroits avec pommettes hautes et larges  </label><br>
<div class="bloc-morpho-blanc">
<h3>QUESTION<span class="rosespan"> 2</span>/2 <span class="rosespan"> </span></h3>
<h4><span class="rosespan">Votre visage est-il plus long que large ?</span></h4></div>
<input id="ex10" type="radio" name="poit" value="10" $check10/><label for="ex10">Pas du tout : Longueur = largeur</label><br>
<input id="ex11" type="radio" name="poit" value="11" $check11/><label for="ex11">Un peu allongé : Longueur = 1 fois ½ la largeur</label><br>
<input id="ex12" type="radio" name="poit" value="12" $check12/><label for="ex12">Très allongé : Longueur = plus d'1 fois ½ la largeur </label><br><br>
<p class="centrage"><input name="valider" value="VALIDER" type="submit"></p><br>
</div>	
</form>
EOT;
if (isset($_POST['valider'])) {
	   $codehtml .= <<<EOT
$texte

<div class="ocm-bl1">
<span class="outil-action-rose">V</span><span class="outil-action-noir">ous souhaitez maigrir ? Poursuivez l'analyse !</span>
<form name="anaform" class="ocm-form" method="post" action="#analyse">
<span class="rosep">Vous êtes</span>
<ul class="ul_calc"> 
<li><input id="femme" name="sexe" value="2" type="radio" $hek2/><label for="femme">Une femme</label></li> 
<li><input id="homme" name="sexe" value="1" type="radio" $hek1/><label for="homme">Un homme</label></li></ul>
<div class="clear">
<div class="ocm-col3"><span class="rosep">Votre âge</span><br><input name="age" class="ocm-input1" value="$age" type="text"></div>
<div class="ocm-col3"><span class="rosep">Votre taille (cm)</span><br><input name="taille" class="ocm-input1" value="$taille" type="text"></div>
<div class="ocm-col3"><span class="rosep">Votre poids (KG)</span><br><input name="poids" class="ocm-input1" value="$poids" type="text"></div>
</div>
<div class="clear">
<div class="centrage"><span class="rosep">Quel est votre objectif de poids? (en KG)</span><br><input name="obj" class="ocm-input1" value="$obj" type="text"></div></div>
<div class="clear">
<input type="hidden" name="poit" value="$poit" />
<input type="hidden" name="nature" value="$nature" />
<input type="hidden" name="valider" value="CALCULER" />
<div id="analyse" class="centrage"><br />&nbsp;
<input name="valider2" value="CALCULER" type="submit">
</div> </div>


</form>
<div class="clear-zero">&nbsp;</div>
</div>

EOT;
}



if (isset($_POST['valider2'])) {
 $IMC=($poids/(($taille/100)*($taille/100)));
   $IMC=round($IMC,1);
      if ($IMC<18.5) {
   $STATUT= "maigreur";
   $IMAGE="imc-statut-maigreur.png";
   }
   else if ($IMC<25) {
   $STATUT= "corpulence normale";
   $IMAGE="imc-statut-normal.png";
   }
   else if ($IMC<30) {
   $STATUT= "surpoids";
   $IMAGE="imc-statut-suroids.png";
   } 
   else {
   $STATUT= "obèsité";
   $IMAGE="imc-statut-obesite.png";
   }
   
      if ($sexe=="2") {$PIL=($taille-100-(($taille-150)/2.5));}
   else if ($sexe=="1") {$PIL=($taille-100-(($taille-150)/4));}
$PIL=round($PIL,1);
   
   $pmaa = (($obj+$PIL)/2);
   $kap = ($poids-$pmaa);
   $vakap = abs($kap);
   
       if ($kap>0) {$textp="Poids moyen à perdre";}
   else if ($kap<0) {$textp="Poids moyen à gagner";}
   else {$textp="Vous êtes à l'équilibre";} 
   
       if ($kap<0.1) {$texto1="Vous n'avez pas de poids à perdre. Félicitations.";
   $lienb="<div class=\"ocm-liena\"><a href=\"/categorie-produit/coffret-minceur-box-de-regime/\">VOIR TOUS NOS PROGRAMMES</a></div>";	   
	   }
   else if ($kap<1) {$texto1="Vous êtes presque à votre poids d'équilibre. Vous pouvez perdre ce léger superflus en découvrant notre programme.";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-s-a-3-kg-14-jours/\">VOIR MON PROGRAMME</a></div>";
   }	   
   else if ($kap<3) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">2  semaines!</span>";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-s-a-3-kg-14-jours/\">VOIR MON PROGRAMME</a></div>";
   }
   else if ($kap<6) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">4  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-m-3-a-6-kg-28-jours/\">VOIR MON PROGRAMME</a></div>";}
   else if ($kap<9) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">6  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-l-6-a-9-kg-42-jours/\">VOIR MON PROGRAMME</a></div>";}
   else if ($kap<12) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">10  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xl-9-a-12-kg-56-jours/\">VOIR MON PROGRAMME</a></div>";}
    else if ($kap<15) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">10  semaines!</span>";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xxl-12-a-15-kg-70-jours/\">VOIR MON PROGRAMME</a></div>";}
   else {$texto1="En étant raisonnable vous pouvez vous fixer un objectif d'environ <span class=\"rosep\">15 kg</span> et l'atteindre au bout de <span class=\"rosep\">10 semaines!</span>";
     $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xxl-12-a-15-kg-70-jours/\">VOIR MON PROGRAMME</a></div>";} 
   
   $codehtml .= <<<EOT
<div class="ocm-noir"><img src="/wp-content/uploads/outils-zones-muscles-2.png">
</div>
<div class="ocm-bl3">
<div class="ocm-blancg">Votre Indice de Masse Corporelle</div>
<p>IMC = <span class="rosegrasspan">$IMC</span><br />
Statut = <span class="rosegrasspan">$STATUT</span></p>
 <img class="aligncenter" src="/wp-content/uploads/$IMAGE"> 
<div class="ocm-blancg">Vos indicateurs de poids</div>
 <p>
  Votre poids actuel = <span class="rosegrasspan">$poids</span> kg<br />
 Poids idéal (formule de Lorentz) = <span class="rosegrasspan">$PIL</span> kg<br />
Objectif personnel = <span class="rosegrasspan">$obj</span> kg
</p>
<div class="float50">
  <div class="ocm-bl4">Poids moyen à atteindre</div>
  <div class="ocm-circle"><br><span class="ocm-res14r">$pmaa</span><br><span class="result14p">Kg</span></div>
</div>
<div class="float50">
    <div class="ocm-bl4">$textp</div>
	<div class="ocm-circle"><br><span class="ocm-res14r">$vakap</span><br><span class="result14p">Kg</span></div>
</div>
<div class="clear-zero">&nbsp;</div>
</div>
<div class="ocm-noir">
<img src="/wp-content/uploads/outils-zones-muscles-3.png">
</div>
<div class="ocm-bl1">
<div class="clear">
<div class="centrage"><span class="rosep">Quel objectif et comment le concrétiser?</span></div>
</div>
$texto1
<div class="clear-zero">&nbsp;</div>
$lienb
<img src="/wp-content/uploads/ligne-objectif-final.png">
</div>
EOT;
}



	   $codehtml .= <<<EOT
<div class="clear-zero">&nbsp;</div>
EOT;



return $codehtml;
}
add_shortcode( 'outilsfemmesoleil', 'outils_femmesoleil' );


//Calculette visage lunette de vue homme
function outils_hommevue($url) {
extract( shortcode_atts( array(
      'url'     => '',
   ), $url, 'outilshommevue' ) );
   
   
    $sexe=$_POST['sexe'];   
   $age=$_POST['age'];
   $taille=$_POST['taille'];
	$taille = preg_replace('*,*','.',$taille);
   $poids=$_POST['poids'];
	$poids = preg_replace('*,*','.',$poids);
   $act=$_POST['act'];
if ($sexe==1) {$hek1="checked ";}
else {$hek2="checked ";}  

$obj=$_POST['obj'];
	$obj = preg_replace('*,*','.',$obj);   
   
   
   
				$nature = $_POST['nature'];
   				$poit = $_POST['poit'];		
if ($nature==1) {$check1="checked ";}
				else if ($nature==2) {$check2="checked ";}
				else if ($nature==3) {$check3="checked ";}
				else if ($nature==4) {$check4="checked ";}
				else if ($nature==5) {$check5="checked ";}
				else if ($nature==6) {$check6="checked ";}
if ($poit==10) {$check10="checked ";}
				else if ($poit==11) {$check11="checked ";}
				else if ($poit==12) {$check12="checked ";}

if (($nature==1)AND($poit==10))
 {$morpho="rond";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE ROND !</b></h3>

&nbsp;

<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE ROND !</span> </h4>
<div class="menuimage">
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-vue/quand-on-a-un-visage-rond/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-rond-homme-lunettes-de-vue.png" alt="Les lunettes de vue homme pour le visage en rond" title="Les lunettes de vue homme pour le visage en rond" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-soleil/quand-on-a-un-visage-rond/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-rond-homme-lunettes-de-soleil.png" alt="Les lunettes de soleil homme pour le visage en rond" title="Les lunettes de soleil homme pour le visage en rond" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
</div>
<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==1)AND($poit==11))
 {$morpho="ovale";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN OVALE !</b></h3>

&nbsp;
<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE OVALE !</span> </h4>
<div class="menuimage">
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-vue/quand-on-a-un-visage-ovale/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-ovale-homme-lunettes-de-vue.png" alt="Les lunettes de vue homme pour le visage en ovale" title="Les lunettes de vue homme pour le visage en ovale" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-soleil/quand-on-a-un-visage-ovale/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-ovale-homme-lunettes-de-soleil.png" alt="Les lunettes de soleil homme pour le visage en ovale" title="Les lunettes de soleil homme pour le visage en ovale" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
</div>

<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==1)AND($poit==12))
  {$morpho="oblong";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN OBLONG !</b></h3>

&nbsp;

<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE OBLONG !</span> </h4>
<div class="menuimage">
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-vue/quand-on-a-un-visage-oblong-ou-allonge/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-oblong-homme-lunettes-de-vue.png" alt="Les lunettes de vue homme pour le visage en oblong" title="Les lunettes de vue homme pour le visage en oblong" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-soleil/quand-on-a-un-visage-oblong-ou-allonge/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-oblong-homme-lunettes-de-soleil.png" alt="Les lunettes de soleil homme pour le visage en oblong" title="Les lunettes de soleil homme pour le visage en oblong" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
</div>

<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==2)AND($poit==10))
  {$morpho="carre";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN CARRÉ !</b></h3>

&nbsp;

<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE CARRÉ !</span> </h4>
<div class="menuimage">
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-vue/quand-on-a-un-visage-carre/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-carre-homme-lunettes-de-vue.png" alt="Les lunettes de vue homme pour le visage en carré" title="Les lunettes de vue homme pour le visage en carré" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-soleil/quand-on-a-un-visage-carre/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-carre-homme-lunettes-de-soleil.png" alt="Les lunettes de soleil homme pour le visage en carré" title="Les lunettes de soleil homme pour le visage en carré" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
</div>


<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==2)AND($poit==11))
{$morpho="rectangle";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN RECTANGLE !</b></h3>

&nbsp;

<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE RECTANGLE !</span> </h4>
<div class="menuimage">
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-vue/quand-on-a-un-visage-rectangulaire/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-rectangle-homme-lunettes-de-vue.png" alt="Les lunettes de vue homme pour le visage en rectangle" title="Les lunettes de vue homme pour le visage en rectangle" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-soleil/quand-on-a-un-visage-rectangulaire/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-rectangle-homme-lunettes-de-soleil.png" alt="Les lunettes de soleil homme pour le visage en rectangle" title="Les lunettes de soleil homme pour le visage en rectangle" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
</div>

<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==2)AND($poit==12))
{$morpho="rectangle";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN RECTANGLE !</b></h3>

&nbsp;

<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE RECTANGLE !</span> </h4>
<div class="menuimage">
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-vue/quand-on-a-un-visage-rectangulaire/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-rectangle-homme-lunettes-de-vue.png" alt="Les lunettes de vue homme pour le visage en rectangle" title="Les lunettes de vue homme pour le visage en rectangle" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-soleil/quand-on-a-un-visage-rectangulaire/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-rectangle-homme-lunettes-de-soleil.png" alt="Les lunettes de soleil homme pour le visage en rectangle" title="Les lunettes de soleil homme pour le visage en rectangle" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
</div>

<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==3)AND($poit==10))
 {$morpho="triangle";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN TRIANGLE !</b></h3>

&nbsp;

<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE TRIANGLE !</span> </h4>
<div class="menuimage">
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-vue/quand-on-a-un-visage-en-triangle-haut-poire-ou-trapeze/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-triangle-homme-lunettes-de-vue.png" alt="Les lunettes de vue homme pour le visage en triangle" title="Les lunettes de vue homme pour le visage en triangle" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-soleil/quand-on-a-un-visage-en-triangle-haut-poire-ou-trapeze/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-triangle-homme-lunettes-de-soleil.png" alt="Les lunettes de soleil homme pour le visage en triangle" title="Les lunettes de soleil homme pour le visage en triangle" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
</div>

<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==3)AND($poit==11))
{$morpho="triangle";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN TRIANGLE !</b></h3>

&nbsp;

<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE TRIANGLE !</span> </h4>
<div class="menuimage">
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-vue/quand-on-a-un-visage-en-triangle-haut-poire-ou-trapeze/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-triangle-homme-lunettes-de-vue.png" alt="Les lunettes de vue homme pour le visage en triangle" title="Les lunettes de vue homme pour le visage en triangle" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-soleil/quand-on-a-un-visage-en-triangle-haut-poire-ou-trapeze/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-triangle-homme-lunettes-de-soleil.png" alt="Les lunettes de soleil homme pour le visage en triangle" title="Les lunettes de soleil homme pour le visage en triangle" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
</div>

<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==3)AND($poit==12))
{$morpho="triangle";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN TRIANGLE !</b></h3>

&nbsp;

<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE TRIANGLE !</span> </h4>
<div class="menuimage">
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-vue/quand-on-a-un-visage-en-triangle-haut-poire-ou-trapeze/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-triangle-homme-lunettes-de-vue.png" alt="Les lunettes de vue homme pour le visage en triangle" title="Les lunettes de vue homme pour le visage en triangle" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-soleil/quand-on-a-un-visage-en-triangle-haut-poire-ou-trapeze/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-triangle-homme-lunettes-de-soleil.png" alt="Les lunettes de soleil homme pour le visage en triangle" title="Les lunettes de soleil homme pour le visage en triangle" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
</div>

<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==4)AND($poit==10))
{$morpho="triangle inversé";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN TRIANGLE INVERSÉ !</b></h3>

&nbsp;

<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE TRIANGLE INVERSÉ !</span> </h4>
<div class="menuimage">
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-vue/quand-on-a-un-visage-en-triangle-bas-inverse-v-ou-coeur/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-traingle-inverse-homme-lunettes-de-vue.png" alt="Les lunettes de vue homme pour le visage en triangle inversé" title="Les lunettes de vue homme pour le visage en triangle inversé" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-soleil/quand-on-a-un-visage-en-triangle-bas-inverse-v-ou-coeur/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-triangle-inverse-homme-lunettes-de-soleil.png" alt="Les lunettes de soleil homme pour le visage en triangle inversé" title="Les lunettes de soleil homme pour le visage en triangle inversé" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
</div>

<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==4)AND($poit==11))
{$morpho="triangle inversé";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN TRIANGLE INVERSÉ !</b></h3>

&nbsp;

<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE TRIANGLE INVERSÉ !</span> </h4>
<div class="menuimage">
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-vue/quand-on-a-un-visage-en-triangle-bas-inverse-v-ou-coeur/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-traingle-inverse-homme-lunettes-de-vue.png" alt="Les lunettes de vue homme pour le visage en triangle inversé" title="Les lunettes de vue homme pour le visage en triangle inversé" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-soleil/quand-on-a-un-visage-en-triangle-bas-inverse-v-ou-coeur/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-triangle-inverse-homme-lunettes-de-soleil.png" alt="Les lunettes de soleil homme pour le visage en triangle inversé" title="Les lunettes de soleil homme pour le visage en triangle inversé" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
</div>

<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==4)AND($poit==12))
 {$morpho="triangle inversé";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN TRIANGLE INVERSÉ !</b></h3>

&nbsp;

<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE TRIANGLE INVERSÉ !</span> </h4>
<div class="menuimage">
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-vue/quand-on-a-un-visage-en-triangle-bas-inverse-v-ou-coeur/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-traingle-inverse-homme-lunettes-de-vue.png" alt="Les lunettes de vue homme pour le visage en triangle inversé" title="Les lunettes de vue homme pour le visage en triangle inversé" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-soleil/quand-on-a-un-visage-en-triangle-bas-inverse-v-ou-coeur/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-triangle-inverse-homme-lunettes-de-soleil.png" alt="Les lunettes de soleil homme pour le visage en triangle inversé" title="Les lunettes de soleil homme pour le visage en triangle inversé" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
</div>

<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==5)AND($poit==10))
 {$morpho="rond";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE ROND !</b></h3>

&nbsp;

<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE ROND !</span> </h4>
<div class="menuimage">
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-vue/quand-on-a-un-visage-rond/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-rond-homme-lunettes-de-vue.png" alt="Les lunettes de vue homme pour le visage en rond" title="Les lunettes de vue homme pour le visage en rond" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-soleil/quand-on-a-un-visage-rond/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-rond-homme-lunettes-de-soleil.png" alt="Les lunettes de soleil homme pour le visage en rond" title="Les lunettes de soleil homme pour le visage en rond" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
</div>

<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==5)AND($poit==11))
 {$morpho="ovale";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN OVALE !</b></h3>

&nbsp;

<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE OVALE !</span> </h4>
<div class="menuimage">
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-vue/quand-on-a-un-visage-ovale/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-ovale-homme-lunettes-de-vue.png" alt="Les lunettes de vue homme pour le visage en ovale" title="Les lunettes de vue homme pour le visage en ovale" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-soleil/quand-on-a-un-visage-ovale/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-ovale-homme-lunettes-de-soleil.png" alt="Les lunettes de soleil homme pour le visage en ovale" title="Les lunettes de soleil homme pour le visage en ovale" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
</div>

<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==5)AND($poit==12))
 {$morpho="oblong";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN OBLONG !</b></h3>

&nbsp;

<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE OBLONG !</span> </h4>
<div class="menuimage">
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-vue/quand-on-a-un-visage-oblong-ou-allonge/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-oblong-homme-lunettes-de-vue.png" alt="Les lunettes de vue homme pour le visage en oblong" title="Les lunettes de vue homme pour le visage en oblong" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-soleil/quand-on-a-un-visage-oblong-ou-allonge/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-oblong-homme-lunettes-de-soleil.png" alt="Les lunettes de soleil homme pour le visage en oblong" title="Les lunettes de soleil homme pour le visage en oblong" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
</div>

<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==6)AND($poit==10))
{$morpho="losange";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN LOSANGE !</b></h3>

&nbsp;

<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE LOSANGE !</span> </h4>
<div class="menuimage">
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-vue/quand-on-a-un-visage-losange-hexagonal-ou-diamant/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-losange-homme-lunettes-de-vue.png" alt="Les lunettes de vue homme pour le visage en losange" title="Les lunettes de vue homme pour le visage en losange" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-soleil/quand-on-a-un-visage-losange-hexagonal-ou-diamant/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-losange-homme-lunettes-de-soleil.png" alt="Les lunettes de soleil homme pour le visage en losange" title="Les lunettes de soleil homme pour le visage en losange" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
</div>

<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==6)AND($poit==11))
{$morpho="losange";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN LOSANGE !</b></h3>

&nbsp;

<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE LOSANGE !</span> </h4>
<div class="menuimage">
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-vue/quand-on-a-un-visage-losange-hexagonal-ou-diamant/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-losange-homme-lunettes-de-vue.png" alt="Les lunettes de vue homme pour le visage en losange" title="Les lunettes de vue homme pour le visage en losange" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-soleil/quand-on-a-un-visage-losange-hexagonal-ou-diamant/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-losange-homme-lunettes-de-soleil.png" alt="Les lunettes de soleil homme pour le visage en losange" title="Les lunettes de soleil homme pour le visage en losange" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
</div>

<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==6)AND($poit==12))
{$morpho="losange";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>

<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN LOSANGE !</b></h3>
&nbsp;

<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE LOSANGE !</span> </h4>
<div class="menuimage">
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-vue/quand-on-a-un-visage-losange-hexagonal-ou-diamant/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-losange-homme-lunettes-de-vue.png" alt="Les lunettes de vue homme pour le visage en losange" title="Les lunettes de vue homme pour le visage en losange" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-soleil/quand-on-a-un-visage-losange-hexagonal-ou-diamant/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-losange-homme-lunettes-de-soleil.png" alt="Les lunettes de soleil homme pour le visage en losange" title="Les lunettes de soleil homme pour le visage en losange" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
</div>



<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}






	$codehtml .= <<<EOT
<div class="bloc-morpho-gl">
<form name="morphoaform" class="form-type1" method="post" action="#visage">
<div id="visage"></div>
<div class="mpr-sousmenu">
<ul>
<li><a title="Lunettes de vue pour femme" href="https://www.regivia.com/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-vue/">Femme vue</a></li>
<li><a title="Lunettes de soleil pour femme" href="https://www.regivia.com/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-soleil/">Femme soleil</a></li>
<li>Homme vue</li>
<li><a title="Lunettes de soleil pour homme" href="https://www.regivia.com/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-soleil/">Homme soleil</a></li>


</ul>
</div>

<img src="https://www.regivia.com/wp-content/uploads/Test-morphologie-et-de-forme-de-visage-lunettes-de-vue-homme-avec-proportions.webp" alt="Test de morphologie et forme de visage" title="Test de morphologie et forme de visage" class="aligncenter size-full wp-image-16781" height="200" width="600">

<div class="bloc-morpho-blanc">
<h3>QUESTION<span class="rosespan"> 1</span>/2 <span class="rosespan"> </span></h3>
<em>Devant un miroir, les cheveux en arrière et à l’aide de l’image ci-dessus représentant des formes et les 3 lignes du visage "front (1), pommettes (2) et mâchoire (3)" ...</em>
<br><br><h4><span class="rosespan">Êtes-vous plutôt ?</span></h4>
</div>
<input id="ex1" type="radio" name="nature" value="1" $check1/><label for="ex1">(ex 1) Front et mâchoire arrondis et de la même largeur </label><br>
<input id="ex2" type="radio" name="nature" value="2" $check2/><label for="ex2">(ex 2) Front, pommettes et mâchoire de la même largeur </label><br />
<input id="ex3" type="radio" name="nature" value="3" $check3/><label for="ex3">(ex 3) Front et pommettes plus étroits que la mâchoire  </label><br />
<input id="ex4" type="radio" name="nature" value="4" $check4/><label for="ex4">(ex 4) Front et pommettes plus larges que la mâchoire </label><br>
<input id="ex5" type="radio" name="nature" value="5" $check5/><label for="ex5">(ex 5) Front et mâchoire arrondis avec pommettes rebondies  </label><br>
<input id="ex6" type="radio" name="nature" value="6" $check6/><label for="ex6">(ex 6) Front et mâchoire étroits avec pommettes hautes et larges  </label><br>
<div class="bloc-morpho-blanc">
<h3>QUESTION<span class="rosespan"> 2</span>/2 <span class="rosespan"> </span></h3>
<h4><span class="rosespan">Votre visage est-il plus long que large ?</span></h4></div>
<input id="ex10" type="radio" name="poit" value="10" $check10/><label for="ex10">Pas du tout : Longueur = largeur</label><br>
<input id="ex11" type="radio" name="poit" value="11" $check11/><label for="ex11">Un peu allongé : Longueur = 1 fois ½ la largeur</label><br>
<input id="ex12" type="radio" name="poit" value="12" $check12/><label for="ex12">Très allongé : Longueur = plus d'1 fois ½ la largeur </label><br><br>
<p class="centrage"><input name="valider" value="VALIDER" type="submit"></p><br>
</div>	
</form>
EOT;
if (isset($_POST['valider'])) {
	   $codehtml .= <<<EOT
$texte

<div class="ocm-bl1">
<span class="outil-action-rose">V</span><span class="outil-action-noir">ous souhaitez maigrir ? Poursuivez l'analyse !</span>
<form name="anaform" class="ocm-form" method="post" action="#analyse">
<span class="rosep">Vous êtes</span>
<ul class="ul_calc"> 
<li><input id="femme" name="sexe" value="2" type="radio" $hek2/><label for="femme">Une femme</label></li> 
<li><input id="homme" name="sexe" value="1" type="radio" $hek1/><label for="homme">Un homme</label></li></ul>
<div class="clear">
<div class="ocm-col3"><span class="rosep">Votre âge</span><br><input name="age" class="ocm-input1" value="$age" type="text"></div>
<div class="ocm-col3"><span class="rosep">Votre taille (cm)</span><br><input name="taille" class="ocm-input1" value="$taille" type="text"></div>
<div class="ocm-col3"><span class="rosep">Votre poids (KG)</span><br><input name="poids" class="ocm-input1" value="$poids" type="text"></div>
</div>
<div class="clear">
<div class="centrage"><span class="rosep">Quel est votre objectif de poids? (en KG)</span><br><input name="obj" class="ocm-input1" value="$obj" type="text"></div></div>
<div class="clear">
<input type="hidden" name="poit" value="$poit" />
<input type="hidden" name="nature" value="$nature" />
<input type="hidden" name="valider" value="CALCULER" />
<div id="analyse" class="centrage"><br />&nbsp;
<input name="valider2" value="CALCULER" type="submit">
</div> </div>


</form>
<div class="clear-zero">&nbsp;</div>
</div>

EOT;
}



if (isset($_POST['valider2'])) {
 $IMC=($poids/(($taille/100)*($taille/100)));
   $IMC=round($IMC,1);
      if ($IMC<18.5) {
   $STATUT= "maigreur";
   $IMAGE="imc-statut-maigreur.png";
   }
   else if ($IMC<25) {
   $STATUT= "corpulence normale";
   $IMAGE="imc-statut-normal.png";
   }
   else if ($IMC<30) {
   $STATUT= "surpoids";
   $IMAGE="imc-statut-suroids.png";
   } 
   else {
   $STATUT= "obèsité";
   $IMAGE="imc-statut-obesite.png";
   }
   
      if ($sexe=="2") {$PIL=($taille-100-(($taille-150)/2.5));}
   else if ($sexe=="1") {$PIL=($taille-100-(($taille-150)/4));}
$PIL=round($PIL,1);
   
   $pmaa = (($obj+$PIL)/2);
   $kap = ($poids-$pmaa);
   $vakap = abs($kap);
   
       if ($kap>0) {$textp="Poids moyen à perdre";}
   else if ($kap<0) {$textp="Poids moyen à gagner";}
   else {$textp="Vous êtes à l'équilibre";} 
   
       if ($kap<0.1) {$texto1="Vous n'avez pas de poids à perdre. Félicitations.";
   $lienb="<div class=\"ocm-liena\"><a href=\"/categorie-produit/coffret-minceur-box-de-regime/\">VOIR TOUS NOS PROGRAMMES</a></div>";	   
	   }
   else if ($kap<1) {$texto1="Vous êtes presque à votre poids d'équilibre. Vous pouvez perdre ce léger superflus en découvrant notre programme.";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-s-a-3-kg-14-jours/\">VOIR MON PROGRAMME</a></div>";
   }	   
   else if ($kap<3) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">2  semaines!</span>";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-s-a-3-kg-14-jours/\">VOIR MON PROGRAMME</a></div>";
   }
   else if ($kap<6) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">4  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-m-3-a-6-kg-28-jours/\">VOIR MON PROGRAMME</a></div>";}
   else if ($kap<9) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">6  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-l-6-a-9-kg-42-jours/\">VOIR MON PROGRAMME</a></div>";}
   else if ($kap<12) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">10  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xl-9-a-12-kg-56-jours/\">VOIR MON PROGRAMME</a></div>";}
    else if ($kap<15) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">10  semaines!</span>";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xxl-12-a-15-kg-70-jours/\">VOIR MON PROGRAMME</a></div>";}
   else {$texto1="En étant raisonnable vous pouvez vous fixer un objectif d'environ <span class=\"rosep\">15 kg</span> et l'atteindre au bout de <span class=\"rosep\">10 semaines!</span>";
     $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xxl-12-a-15-kg-70-jours/\">VOIR MON PROGRAMME</a></div>";} 
   
   $codehtml .= <<<EOT
<div class="ocm-noir"><img src="/wp-content/uploads/outils-zones-muscles-2.png">
</div>
<div class="ocm-bl3">
<div class="ocm-blancg">Votre Indice de Masse Corporelle</div>
<p>IMC = <span class="rosegrasspan">$IMC</span><br />
Statut = <span class="rosegrasspan">$STATUT</span></p>
 <img class="aligncenter" src="/wp-content/uploads/$IMAGE"> 
<div class="ocm-blancg">Vos indicateurs de poids</div>
 <p>
  Votre poids actuel = <span class="rosegrasspan">$poids</span> kg<br />
 Poids idéal (formule de Lorentz) = <span class="rosegrasspan">$PIL</span> kg<br />
Objectif personnel = <span class="rosegrasspan">$obj</span> kg
</p>
<div class="float50">
  <div class="ocm-bl4">Poids moyen à atteindre</div>
  <div class="ocm-circle"><br><span class="ocm-res14r">$pmaa</span><br><span class="result14p">Kg</span></div>
</div>
<div class="float50">
    <div class="ocm-bl4">$textp</div>
	<div class="ocm-circle"><br><span class="ocm-res14r">$vakap</span><br><span class="result14p">Kg</span></div>
</div>
<div class="clear-zero">&nbsp;</div>
</div>
<div class="ocm-noir">
<img src="/wp-content/uploads/outils-zones-muscles-3.png">
</div>
<div class="ocm-bl1">
<div class="clear">
<div class="centrage"><span class="rosep">Quel objectif et comment le concrétiser?</span></div>
</div>
$texto1
<div class="clear-zero">&nbsp;</div>
$lienb
<img src="/wp-content/uploads/ligne-objectif-final.png">
</div>
EOT;
}



	   $codehtml .= <<<EOT
<div class="clear-zero">&nbsp;</div>
EOT;



return $codehtml;
}
add_shortcode( 'outilshommevue', 'outils_hommevue' );

//Calculette visage lunette de soleil homme
function outils_hommesoleil($url) {
extract( shortcode_atts( array(
      'url'     => '',
   ), $url, 'outilshommesoleil' ) );
   
   
    $sexe=$_POST['sexe'];   
   $age=$_POST['age'];
   $taille=$_POST['taille'];
	$taille = preg_replace('*,*','.',$taille);
   $poids=$_POST['poids'];
	$poids = preg_replace('*,*','.',$poids);
   $act=$_POST['act'];
if ($sexe==1) {$hek1="checked ";}
else {$hek2="checked ";}  

$obj=$_POST['obj'];
	$obj = preg_replace('*,*','.',$obj);   
   
   
   
				$nature = $_POST['nature'];
   				$poit = $_POST['poit'];		
if ($nature==1) {$check1="checked ";}
				else if ($nature==2) {$check2="checked ";}
				else if ($nature==3) {$check3="checked ";}
				else if ($nature==4) {$check4="checked ";}
				else if ($nature==5) {$check5="checked ";}
				else if ($nature==6) {$check6="checked ";}
if ($poit==10) {$check10="checked ";}
				else if ($poit==11) {$check11="checked ";}
				else if ($poit==12) {$check12="checked ";}

if (($nature==1)AND($poit==10))
 {$morpho="rond";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE ROND !</b></h3>

&nbsp;

<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE ROND !</span> </h4>
<div class="menuimage">

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-soleil/quand-on-a-un-visage-rond/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-rond-homme-lunettes-de-soleil.webp" alt="Les lunettes de soleil homme pour le visage en rond" title="Les lunettes de soleil homme pour le visage en rond" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-vue/quand-on-a-un-visage-rond/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-rond-homme-lunettes-de-vue.webp" alt="Les lunettes de vue homme pour le visage en rond" title="Les lunettes de vue homme pour le visage en rond" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
</div>
<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==1)AND($poit==11))
 {$morpho="ovale";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN OVALE !</b></h3>

&nbsp;
<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE OVALE !</span> </h4>
<div class="menuimage">

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-soleil/quand-on-a-un-visage-ovale/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-ovale-homme-lunettes-de-soleil.webp" alt="Les lunettes de soleil homme pour le visage en ovale" title="Les lunettes de soleil homme pour le visage en ovale" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-vue/quand-on-a-un-visage-ovale/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-ovale-homme-lunettes-de-vue.webp" alt="Les lunettes de vue homme pour le visage en ovale" title="Les lunettes de vue homme pour le visage en ovale" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
</div>

<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==1)AND($poit==12))
  {$morpho="oblong";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN OBLONG !</b></h3>

&nbsp;

<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE OBLONG !</span> </h4>
<div class="menuimage">

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-soleil/quand-on-a-un-visage-oblong-ou-allonge/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-oblong-homme-lunettes-de-soleil.webp" alt="Les lunettes de soleil homme pour le visage en oblong" title="Les lunettes de soleil homme pour le visage en oblong" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-vue/quand-on-a-un-visage-oblong-ou-allonge/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-oblong-homme-lunettes-de-vue.webp" alt="Les lunettes de vue homme pour le visage en oblong" title="Les lunettes de vue homme pour le visage en oblong" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
</div>

<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==2)AND($poit==10))
  {$morpho="carre";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN CARRÉ !</b></h3>

&nbsp;

<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE CARRÉ !</span> </h4>
<div class="menuimage">

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-soleil/quand-on-a-un-visage-carre/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-carre-homme-lunettes-de-soleil.webp" alt="Les lunettes de soleil homme pour le visage carré" title="Les lunettes de soleil homme pour le visage carré" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-vue/quand-on-a-un-visage-carre/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-carre-homme-lunettes-de-vue.webp" alt="Les lunettes de soleil homme pour le visage carré" title="Les lunettes de soleil homme pour le visage carré" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
</div>


<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==2)AND($poit==11))
{$morpho="rectangle";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN RECTANGLE !</b></h3>

&nbsp;

<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE RECTANGLE !</span> </h4>
<div class="menuimage">

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-soleil/quand-on-a-un-visage-rectangulaire/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-rectangle-homme-lunettes-de-soleil.webp" alt="Les lunettes de soleil homme pour le visage en rectangle" title="Les lunettes de soleil homme pour le visage en rectangle" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-vue/quand-on-a-un-visage-rectangulaire/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-rectangle-homme-lunettes-de-vue.webp" alt="Les lunettes de vue homme pour le visage en rectangle" title="Les lunettes de vue homme pour le visage en rectangle" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>

</div>

<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==2)AND($poit==12))
{$morpho="rectangle";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN RECTANGLE !</b></h3>

&nbsp;

<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE RECTANGLE !</span> </h4>
<div class="menuimage">

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-soleil/quand-on-a-un-visage-rectangulaire/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-rectangle-homme-lunettes-de-soleil.webp" alt="Les lunettes de soleil homme pour le visage en rectangle" title="Les lunettes de soleil homme pour le visage en rectangle" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-vue/quand-on-a-un-visage-rectangulaire/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-rectangle-homme-lunettes-de-vue.webp" alt="Les lunettes de soleil homme pour le visage en rectangle" title="Les lunettes de soleil homme pour le visage en rectangle" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>

</div>

<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==3)AND($poit==10))
 {$morpho="triangle";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN TRIANGLE !</b></h3>

&nbsp;

<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE TRIANGLE !</span> </h4>
<div class="menuimage">

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-soleil/quand-on-a-un-visage-en-triangle-haut-poire-ou-trapeze/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-triangle-homme-lunettes-de-soleil.webp" alt="Les lunettes de soleil homme pour le visage en triangle" title="Les lunettes de soleil homme pour le visage en triangle" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-vue/quand-on-a-un-visage-en-triangle-haut-poire-ou-trapeze/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-triangle-homme-lunettes-de-vue.webp" alt="Les lunettes de vue homme pour le visage en triangle" title="Les lunettes de vue homme pour le visage en triangle" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>

</div>

<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==3)AND($poit==11))
{$morpho="triangle";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN TRIANGLE !</b></h3>

&nbsp;

<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE TRIANGLE !</span> </h4>
<div class="menuimage">

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-soleil/quand-on-a-un-visage-en-triangle-haut-poire-ou-trapeze/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-triangle-homme-lunettes-de-soleil.webp" alt="Les lunettes de soleil homme pour le visage en triangle" title="Les lunettes de soleil homme pour le visage en triangle" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-vue/quand-on-a-un-visage-en-triangle-haut-poire-ou-trapeze/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-triangle-homme-lunettes-de-vue.webp" alt="Les lunettes de vue homme pour le visage en triangle" title="Les lunettes de vue homme pour le visage en triangle" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>

</div>

<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==3)AND($poit==12))
{$morpho="triangle";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN TRIANGLE !</b></h3>

&nbsp;

<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE TRIANGLE !</span> </h4>
<div class="menuimage">

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-soleil/quand-on-a-un-visage-en-triangle-haut-poire-ou-trapeze/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-triangle-homme-lunettes-de-soleil.webp" alt="Les lunettes de soleil homme pour le visage en triangle" title="Les lunettes de soleil homme pour le visage en triangle" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-vue/quand-on-a-un-visage-en-triangle-haut-poire-ou-trapeze/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-triangle-homme-lunettes-de-vue.webp" alt="Les lunettes de vue homme pour le visage en triangle" title="Les lunettes de vue homme pour le visage en triangle" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>

</div>

<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==4)AND($poit==10))
{$morpho="triangle inversé";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN TRIANGLE INVERSÉ !</b></h3>

&nbsp;

<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE TRIANGLE INVERSÉ !</span> </h4>
<div class="menuimage">

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-soleil/quand-on-a-un-visage-en-triangle-bas-inverse-v-ou-coeur/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-triangle-inverse-homme-lunettes-de-soleil.webp" alt="Les lunettes de soleil homme pour le visage en triangle inversé" title="Les lunettes de soleil homme pour le visage en triangle inversé" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-vue/quand-on-a-un-visage-en-triangle-bas-inverse-v-ou-coeur/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-traingle-inverse-homme-lunettes-de-vue.webp" alt="Les lunettes de vue homme pour le visage en triangle inversé" title="Les lunettes de vue homme pour le visage en triangle inversé" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>

</div>

<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==4)AND($poit==11))
{$morpho="triangle inversé";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN TRIANGLE INVERSÉ !</b></h3>

&nbsp;

<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE TRIANGLE INVERSÉ !</span> </h4>
<div class="menuimage">

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-soleil/quand-on-a-un-visage-en-triangle-bas-inverse-v-ou-coeur/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-triangle-inverse-homme-lunettes-de-soleil.webp" alt="Les lunettes de soleil homme pour le visage en triangle inversé" title="Les lunettes de soleil homme pour le visage en triangle inversé" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-vue/quand-on-a-un-visage-en-triangle-bas-inverse-v-ou-coeur/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-traingle-inverse-homme-lunettes-de-vue.webp" alt="Les lunettes de vue homme pour le visage en triangle inversé" title="Les lunettes de vue homme pour le visage en triangle inversé" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>

</div>

<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==4)AND($poit==12))
 {$morpho="triangle inversé";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN TRIANGLE INVERSÉ !</b></h3>

&nbsp;

<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE TRIANGLE INVERSÉ !</span> </h4>
<div class="menuimage">

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-soleil/quand-on-a-un-visage-en-triangle-bas-inverse-v-ou-coeur/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-triangle-inverse-homme-lunettes-de-soleil.webp" alt="Les lunettes de soleil homme pour le visage en triangle inversé" title="Les lunettes de soleil homme pour le visage en triangle inversé" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-vue/quand-on-a-un-visage-en-triangle-bas-inverse-v-ou-coeur/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-traingle-inverse-homme-lunettes-de-vue.webp" alt="Les lunettes de vue homme pour le visage en triangle inversé" title="Les lunettes de vue homme pour le visage en triangle inversé" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>

</div>

<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==5)AND($poit==10))
 {$morpho="rond";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE ROND !</b></h3>

&nbsp;

<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE ROND !</span> </h4>
<div class="menuimage">

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-soleil/quand-on-a-un-visage-rond/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-rond-homme-lunettes-de-soleil.webp" alt="Les lunettes de soleil homme pour le visage en rond" title="Les lunettes de soleil homme pour le visage en rond" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-vue/quand-on-a-un-visage-rond/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-rond-homme-lunettes-de-vue.webp" alt="Les lunettes de vue homme pour le visage en rond" title="Les lunettes de vue homme pour le visage en rond" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>

</div>

<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==5)AND($poit==11))
 {$morpho="ovale";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN OVALE !</b></h3>

&nbsp;

<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE OVALE !</span> </h4>
<div class="menuimage">

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-soleil/quand-on-a-un-visage-ovale/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-ovale-homme-lunettes-de-soleil.webp" alt="Les lunettes de soleil homme pour le visage en ovale" title="Les lunettes de soleil homme pour le visage en ovale" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-vue/quand-on-a-un-visage-ovale/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-ovale-homme-lunettes-de-vue.webp" alt="Les lunettes de vue homme pour le visage en ovale" title="Les lunettes de vue homme pour le visage en ovale" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>

</div>

<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==5)AND($poit==12))
 {$morpho="oblong";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN OBLONG !</b></h3>

&nbsp;

<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE OBLONG !</span> </h4>
<div class="menuimage">

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-soleil/quand-on-a-un-visage-oblong-ou-allonge/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-oblong-homme-lunettes-de-soleil.webp" alt="Les lunettes de soleil homme pour le visage en oblong" title="Les lunettes de soleil homme pour le visage en oblong" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-vue/quand-on-a-un-visage-oblong-ou-allonge/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-oblong-homme-lunettes-de-vue.webp" alt="Les lunettes de vue homme pour le visage en oblong" title="Les lunettes de vue homme pour le visage en oblong" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
</div>

<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==6)AND($poit==10))
{$morpho="losange";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN LOSANGE !</b></h3>

&nbsp;

<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE LOSANGE !</span> </h4>
<div class="menuimage">

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-soleil/quand-on-a-un-visage-losange-hexagonal-ou-diamant/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-losange-homme-lunettes-de-soleil.webp" alt="Les lunettes de soleil homme pour le visage en losange" title="Les lunettes de soleil homme pour le visage en losange" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-vue/quand-on-a-un-visage-losange-hexagonal-ou-diamant/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-losange-homme-lunettes-de-vue.webp" alt="Les lunettes de vue homme pour le visage en losange" title="Les lunettes de vue homme pour le visage en losange" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>

</div>

<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==6)AND($poit==11))
{$morpho="losange";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN LOSANGE !</b></h3>

&nbsp;

<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE LOSANGE !</span> </h4>
<div class="menuimage">

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-soleil/quand-on-a-un-visage-losange-hexagonal-ou-diamant/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-losange-homme-lunettes-de-soleil.webp" alt="Les lunettes de soleil homme pour le visage en losange" title="Les lunettes de soleil homme pour le visage en losange" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-vue/quand-on-a-un-visage-losange-hexagonal-ou-diamant/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-losange-homme-lunettes-de-vue.webp" alt="Les lunettes de vue homme pour le visage en losange" title="Les lunettes de vue homme pour le visage en losange" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>

</div>

<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}
else if (($nature==6)AND($poit==12))
{$morpho="losange";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>

<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOUS AVEZ UN VISAGE EN LOSANGE !</b></h3>
&nbsp;

<h4 style="text-align: center;"><span style="color: #000000;">NOS CONSEILS LUNETTES POUR LE VISAGE LOSANGE !</span> </h4>
<div class="menuimage">

<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-soleil/quand-on-a-un-visage-losange-hexagonal-ou-diamant/">Lunettes de soleil</span><img src="https://www.regivia.com/wp-content/uploads/visage-losange-homme-lunettes-de-soleil.webp" alt="Les lunettes de soleil homme pour le visage en losange" title="Les lunettes de soleil homme pour le visage en losange" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>
<div style="text-align: center;" class="demiocm-b17"><a href="/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-vue/quand-on-a-un-visage-losange-hexagonal-ou-diamant/">Lunettes de vue<img src="https://www.regivia.com/wp-content/uploads/visage-losange-homme-lunettes-de-vue.webp" alt="Les lunettes de vue homme pour le visage en losange" title="Les lunettes de vue homme pour le visage en losange" width="100" height="100" class="aligncenter size-full wp-image-42571" /></a></div>

</div>



<div class="clear-zero">&nbsp;</div>
&nbsp;
</div>
EOT;
}






	$codehtml .= <<<EOT
<div class="bloc-morpho-gl">
<form name="morphoaform" class="form-type1" method="post" action="#visage">
<div id="visage"></div>
<div class="mpr-sousmenu">
<ul>
<li><a title="Lunettes de vue pour femme" href="https://www.regivia.com/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-vue/">Femme vue</a></li>
<li><a title="Lunettes de soleil pour femme" href="https://www.regivia.com/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/femme/lunettes-de-soleil/">Femme soleil</a></li>
<li><a title="Lunettes de soleil pour homme" href="https://www.regivia.com/comment-relooker-son-visage/morphologie-et-forme-de-visage/choisir-ses-lunettes/homme/lunettes-de-vue/">Homme vue</a></li>
<li>Homme soleil</li>
</ul>
</div>
<img src="https://www.regivia.com/wp-content/uploads/Test-morphologie-et-de-forme-de-visage-lunettes-de-soleil-homme-avec-proportions.webp" alt="Test de morphologie et forme de visage" title="Test de morphologie et forme de visage" class="aligncenter size-full wp-image-16781" height="200" width="600">

<div class="bloc-morpho-blanc">
<h3>QUESTION<span class="rosespan"> 1</span>/2 <span class="rosespan"> </span></h3>
<em>Devant un miroir, les cheveux en arrière et à l’aide de l’image ci-dessus représentant des formes et les 3 lignes du visage "front (1), pommettes (2) et mâchoire (3)" ...</em>
<br><br><h4><span class="rosespan">Êtes-vous plutôt ?</span></h4>
</div>
<input id="ex1" type="radio" name="nature" value="1" $check1/><label for="ex1">(ex 1) Front et mâchoire arrondis et de la même largeur </label><br>
<input id="ex2" type="radio" name="nature" value="2" $check2/><label for="ex2">(ex 2) Front, pommettes et mâchoire de la même largeur </label><br />
<input id="ex3" type="radio" name="nature" value="3" $check3/><label for="ex3">(ex 3) Front et pommettes plus étroits que la mâchoire  </label><br />
<input id="ex4" type="radio" name="nature" value="4" $check4/><label for="ex4">(ex 4) Front et pommettes plus larges que la mâchoire </label><br>
<input id="ex5" type="radio" name="nature" value="5" $check5/><label for="ex5">(ex 5) Front et mâchoire arrondis avec pommettes rebondies  </label><br>
<input id="ex6" type="radio" name="nature" value="6" $check6/><label for="ex6">(ex 6) Front et mâchoire étroits avec pommettes hautes et larges  </label><br>
<div class="bloc-morpho-blanc">
<h3>QUESTION<span class="rosespan"> 2</span>/2 <span class="rosespan"> </span></h3>
<h4><span class="rosespan">Votre visage est-il plus long que large ?</span></h4></div>
<input id="ex10" type="radio" name="poit" value="10" $check10/><label for="ex10">Pas du tout : Longueur = largeur</label><br>
<input id="ex11" type="radio" name="poit" value="11" $check11/><label for="ex11">Un peu allongé : Longueur = 1 fois ½ la largeur</label><br>
<input id="ex12" type="radio" name="poit" value="12" $check12/><label for="ex12">Très allongé : Longueur = plus d'1 fois ½ la largeur </label><br><br>
<p class="centrage"><input name="valider" value="VALIDER" type="submit"></p><br>
</div>	
</form>
EOT;
if (isset($_POST['valider'])) {
	   $codehtml .= <<<EOT
$texte

<div class="ocm-bl1">
<span class="outil-action-rose">V</span><span class="outil-action-noir">ous souhaitez maigrir ? Poursuivez l'analyse !</span>
<form name="anaform" class="ocm-form" method="post" action="#analyse">
<span class="rosep">Vous êtes</span>
<ul class="ul_calc"> 
<li><input id="femme" name="sexe" value="2" type="radio" $hek2/><label for="femme">Une femme</label></li> 
<li><input id="homme" name="sexe" value="1" type="radio" $hek1/><label for="homme">Un homme</label></li></ul>
<div class="clear">
<div class="ocm-col3"><span class="rosep">Votre âge</span><br><input name="age" class="ocm-input1" value="$age" type="text"></div>
<div class="ocm-col3"><span class="rosep">Votre taille (cm)</span><br><input name="taille" class="ocm-input1" value="$taille" type="text"></div>
<div class="ocm-col3"><span class="rosep">Votre poids (KG)</span><br><input name="poids" class="ocm-input1" value="$poids" type="text"></div>
</div>
<div class="clear">
<div class="centrage"><span class="rosep">Quel est votre objectif de poids? (en KG)</span><br><input name="obj" class="ocm-input1" value="$obj" type="text"></div></div>
<div class="clear">
<input type="hidden" name="poit" value="$poit" />
<input type="hidden" name="nature" value="$nature" />
<input type="hidden" name="valider" value="CALCULER" />
<div id="analyse" class="centrage"><br />&nbsp;
<input name="valider2" value="CALCULER" type="submit">
</div> </div>


</form>
<div class="clear-zero">&nbsp;</div>
</div>

EOT;
}



if (isset($_POST['valider2'])) {
 $IMC=($poids/(($taille/100)*($taille/100)));
   $IMC=round($IMC,1);
      if ($IMC<18.5) {
   $STATUT= "maigreur";
   $IMAGE="imc-statut-maigreur.png";
   }
   else if ($IMC<25) {
   $STATUT= "corpulence normale";
   $IMAGE="imc-statut-normal.png";
   }
   else if ($IMC<30) {
   $STATUT= "surpoids";
   $IMAGE="imc-statut-suroids.png";
   } 
   else {
   $STATUT= "obèsité";
   $IMAGE="imc-statut-obesite.png";
   }
   
      if ($sexe=="2") {$PIL=($taille-100-(($taille-150)/2.5));}
   else if ($sexe=="1") {$PIL=($taille-100-(($taille-150)/4));}
$PIL=round($PIL,1);
   
   $pmaa = (($obj+$PIL)/2);
   $kap = ($poids-$pmaa);
   $vakap = abs($kap);
   
       if ($kap>0) {$textp="Poids moyen à perdre";}
   else if ($kap<0) {$textp="Poids moyen à gagner";}
   else {$textp="Vous êtes à l'équilibre";} 
   
       if ($kap<0.1) {$texto1="Vous n'avez pas de poids à perdre. Félicitations.";
   $lienb="<div class=\"ocm-liena\"><a href=\"/categorie-produit/coffret-minceur-box-de-regime/\">VOIR TOUS NOS PROGRAMMES</a></div>";	   
	   }
   else if ($kap<1) {$texto1="Vous êtes presque à votre poids d'équilibre. Vous pouvez perdre ce léger superflus en découvrant notre programme.";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-s-a-3-kg-14-jours/\">VOIR MON PROGRAMME</a></div>";
   }	   
   else if ($kap<3) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">2  semaines!</span>";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-s-a-3-kg-14-jours/\">VOIR MON PROGRAMME</a></div>";
   }
   else if ($kap<6) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">4  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-m-3-a-6-kg-28-jours/\">VOIR MON PROGRAMME</a></div>";}
   else if ($kap<9) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">6  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-l-6-a-9-kg-42-jours/\">VOIR MON PROGRAMME</a></div>";}
   else if ($kap<12) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">10  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xl-9-a-12-kg-56-jours/\">VOIR MON PROGRAMME</a></div>";}
    else if ($kap<15) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">10  semaines!</span>";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xxl-12-a-15-kg-70-jours/\">VOIR MON PROGRAMME</a></div>";}
   else {$texto1="En étant raisonnable vous pouvez vous fixer un objectif d'environ <span class=\"rosep\">15 kg</span> et l'atteindre au bout de <span class=\"rosep\">10 semaines!</span>";
     $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xxl-12-a-15-kg-70-jours/\">VOIR MON PROGRAMME</a></div>";} 
   
   $codehtml .= <<<EOT
<div class="ocm-noir"><img src="/wp-content/uploads/outils-zones-muscles-2.png">
</div>
<div class="ocm-bl3">
<div class="ocm-blancg">Votre Indice de Masse Corporelle</div>
<p>IMC = <span class="rosegrasspan">$IMC</span><br />
Statut = <span class="rosegrasspan">$STATUT</span></p>
 <img class="aligncenter" src="/wp-content/uploads/$IMAGE"> 
<div class="ocm-blancg">Vos indicateurs de poids</div>
 <p>
  Votre poids actuel = <span class="rosegrasspan">$poids</span> kg<br />
 Poids idéal (formule de Lorentz) = <span class="rosegrasspan">$PIL</span> kg<br />
Objectif personnel = <span class="rosegrasspan">$obj</span> kg
</p>
<div class="float50">
  <div class="ocm-bl4">Poids moyen à atteindre</div>
  <div class="ocm-circle"><br><span class="ocm-res14r">$pmaa</span><br><span class="result14p">Kg</span></div>
</div>
<div class="float50">
    <div class="ocm-bl4">$textp</div>
	<div class="ocm-circle"><br><span class="ocm-res14r">$vakap</span><br><span class="result14p">Kg</span></div>
</div>
<div class="clear-zero">&nbsp;</div>
</div>
<div class="ocm-noir">
<img src="/wp-content/uploads/outils-zones-muscles-3.png">
</div>
<div class="ocm-bl1">
<div class="clear">
<div class="centrage"><span class="rosep">Quel objectif et comment le concrétiser?</span></div>
</div>
$texto1
<div class="clear-zero">&nbsp;</div>
$lienb
<img src="/wp-content/uploads/ligne-objectif-final.png">
</div>
EOT;
}



	   $codehtml .= <<<EOT
<div class="clear-zero">&nbsp;</div>
EOT;



return $codehtml;
}
add_shortcode( 'outilshommesoleil', 'outils_hommesoleil' );





//Calculette morpho new
function outils_newmorpho($url) {
extract( shortcode_atts( array(
      'url'     => '',
   ), $url, 'outilsnewmorpho' ) );
   
   
    $sexe=$_POST['sexe'];   
   $age=$_POST['age'];
   $taille=$_POST['taille'];
	$taille = preg_replace('*,*','.',$taille);
   $poids=$_POST['poids'];
	$poids = preg_replace('*,*','.',$poids);
   $act=$_POST['act'];
if ($sexe==1) {$hek1="checked ";}
else {$hek2="checked ";}  

$obj=$_POST['obj'];
	$obj = preg_replace('*,*','.',$obj);   
   
   
   
				$nature = $_POST['nature'];
   				$poit = $_POST['poit'];		
if ($nature==1) {$check1="checked ";}
				else if ($nature==2) {$check2="checked ";}
				else if ($nature==3) {$check3="checked ";}
				else if ($nature==4) {$check4="checked ";}
				else if ($nature==5) {$check5="checked ";}
if ($poit==8) {$check8="checked ";}
				else if ($poit==9) {$check9="checked ";}

if ($nature==1)
 {$morpho="A";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOTRE MORPHOLOGIE EST EN A </b></h3>
<div class="menuimage">
<a href="/morphologie-et-silhouette-type-femme/en-a-pyramide-triangle-ou-poire/"><img src="/wp-content/uploads/conseils-morphologie-silhouette-en-a-ou-triangle-pyramide.gif" alt="Conseils silhouette et morphologie en A pyramide, triangle ou poire"  title="Conseils silhouette et morphologie en A pyramide, triangle ou poire" class="aligncenter size-full wp-image-16575" height="140" width="50"></a>
&nbsp;
<h3 style="text-align: center;"><span style="color: #000000;">"Nos conseils relooking pour la morpho en A !"</span></h3> 
  <p style="text-align: center;"><span style="color: #000000;"><em>"Si vous pensez avoir du poids à perdre, poursuivez l'analyse ci-dessous !"</em> </span></p>
 <img class="aligncenter" src="/wp-content/uploads/ligne-outil.png"/>

 <div class="clear"></div>
 <div class="d-morpho4"><a href="/morphologie-et-silhouette-type-femme/comment-s-habiller/quels-vetements-choisir-et-porter-quand-on-est-en-a-pyramide-triangle-ou-poire/"><span class="police-resultat-bilan">Vêtements</span><br><img src="/wp-content/uploads/morpho-vetement-resultat2.png" alt="Comment s'habiller et quels vêtements porter ?" title="Comment s'habiller et quels vêtements porter ?" height="60" width="60">
</a></div>
<div class="d-morpho4"><a href="/morphologie-et-silhouette-type-femme/comment-s-habiller/quels-vetements-choisir-et-porter-quand-on-est-en-a-pyramide-triangle-ou-poire/"><span class="police-resultat-bilan">Exercices</span><br><img src="/wp-content/uploads/morpho-exercice-resultat2.png" alt="Quels exercices et quels sports ?" title="Quels exercices et quels sports ?" height="60" width="60">
</a></div>
<div class="d-morpho4"><a href="/morphologie-et-silhouette-type-femme/comment-s-habiller/quels-vetements-choisir-et-porter-quand-on-est-en-a-pyramide-triangle-ou-poire/"><span class="police-resultat-bilan">Minceur</span><br><img src="/wp-content/uploads/morpho-conseil-minceur-resultat2.png" alt="Conseils minceur : Comment maigrir ?" title="Conseils minceur : Comment maigrir ?" height="60" width="60">
</a></div></div>
<div class="clear">&nbsp;</div></div>
EOT;
}
else if ($nature==3)
 {$morpho="O";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOTRE MORPHOLOGIE EST EN O </b></h3>
<div class="menuimage">
<a href="/morphologie-et-silhouette-type-femme/en-rond-o-ou-pomme/"><img src="/wp-content/uploads/conseils-morphologie-silhouette-en-o-ronde.gif" alt="Conseils silhouette et morphologie en O ronde ou pomme"  title="Conseils silhouette et morphologie en O ronde ou pomme" class="aligncenter size-full wp-image-16575" height="140" width="50"></a>
&nbsp;
<h3 style="text-align: center;"><span style="color: #000000;">"Nos conseils relooking pour la morpho en O !"</span></h3> 
  <p style="text-align: center;"><span style="color: #000000;"><em>"Si vous pensez avoir du poids à perdre, poursuivez l'analyse ci-dessous !"</em> </span></p>
 <img class="aligncenter" src="/wp-content/uploads/ligne-outil.png"/>

 <div class="clear"></div>
 <div class="d-morpho4"><a href="/morphologie-et-silhouette-type-femme/comment-s-habiller/quels-vetements-choisir-et-porter-quand-on-est-en-o-ronde-ou-pomme/"><span class="police-resultat-bilan">Vêtements</span><br><img src="/wp-content/uploads/morpho-vetement-resultat2.png" alt="Comment s'habiller et quels vêtements porter ?" title="Comment s'habiller et quels vêtements porter ?" height="60" width="60">
</a></div>
<div class="d-morpho4"><a href="/morphologie-et-silhouette-type-femme/quels-exercices-et-quels-sports-selon-sa-morphologie/quand-on-est-en-o-ronde-ou-pomme/"><span class="police-resultat-bilan">Exercices</span><br><img src="/wp-content/uploads/morpho-exercice-resultat2.png" alt="Quels exercices et quels sports ?" title="Quels exercices et quels sports ?" height="60" width="60">
</a></div>
<div class="d-morpho4"><a href="/morphologie-et-silhouette-type-femme/conseils-minceur-comment-maigrir-selon-sa-morphologie/quand-on-est-en-o-ronde-ou-pomme/"><span class="police-resultat-bilan">Minceur</span><br><img src="/wp-content/uploads/morpho-conseil-minceur-resultat2.png" alt="Conseils minceur : Comment maigrir ?" title="Conseils minceur : Comment maigrir ?" height="60" width="60">
</a></div></div>
<div class="clear">&nbsp;</div></div>	
EOT;
}
else if ($nature==4)
 {$morpho="V";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOTRE MORPHOLOGIE EST EN V </b></h3>
<div class="menuimage">
<a href="/morphologie-et-silhouette-type-femme/en-v-pyramide-inversee-ou-triangle-inverse/"><img src="/wp-content/uploads/conseils-morphologie-silhouette-en-v-ou-triangle-pyramide-inverse.gif" alt="Conseils silhouette et morphologie en V, pyramide inversée ou triangle inversé"  title="Conseils silhouette et morphologie en V, pyramide inversée ou triangle inversé" class="aligncenter size-full wp-image-16575" height="140" width="50"></a>
&nbsp;
<h3 style="text-align: center;"><span style="color: #000000;">"Nos conseils relooking pour la morpho en V !"</span></h3> 
  <p style="text-align: center;"><span style="color: #000000;"><em>"Si vous pensez avoir du poids à perdre, poursuivez l'analyse ci-dessous !"</em> </span></p>
 <img class="aligncenter" src="/wp-content/uploads/ligne-outil.png"/>

 <div class="clear"></div>
 <div class="d-morpho4"><a href="/morphologie-et-silhouette-type-femme/comment-s-habiller/quels-vetements-choisir-et-porter-quand-on-est-en-v-pyramide-inversee-ou-triangle-inverse/"><span class="police-resultat-bilan">Vêtements</span><br><img src="/wp-content/uploads/morpho-vetement-resultat2.png" alt="Comment s'habiller et quels vêtements porter ?" title="Comment s'habiller et quels vêtements porter ?" height="60" width="60">
</a></div>
<div class="d-morpho4"><a href="/morphologie-et-silhouette-type-femme/quels-exercices-et-quels-sports-selon-sa-morphologie/quand-on-est-en-v-pyramide-inversee-ou-triangle-inverse/"><span class="police-resultat-bilan">Exercices</span><br><img src="/wp-content/uploads/morpho-exercice-resultat2.png" alt="Quels exercices et quels sports ?" title="Quels exercices et quels sports ?" height="60" width="60">
</a></div>
<div class="d-morpho4"><a href="/morphologie-et-silhouette-type-femme/conseils-minceur-comment-maigrir-selon-sa-morphologie/quand-on-est-en-v-pyramide-inversee-ou-triangle-inverse/"><span class="police-resultat-bilan">Minceur</span><br><img src="/wp-content/uploads/morpho-conseil-minceur-resultat2.png" alt="Conseils minceur : Comment maigrir ?" title="Conseils minceur : Comment maigrir ?" height="60" width="60">
</a></div></div>
<div class="clear">&nbsp;</div></div>	
EOT;
}
else if ($nature==5)
 {$morpho="H";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOTRE MORPHOLOGIE EST EN H </b></h3>
<div class="menuimage">
<a href="/morphologie-et-silhouette-type-femme/en-h-ou-rectangle/"><img src="/wp-content/uploads/conseils-morphologie-silhouette-en-h-ou-rectangle.gif" alt="Conseils silhouette et morphologie en h ou rectangle"  title="Conseils silhouette et morphologie en h ou rectangle" class="aligncenter size-full wp-image-16575" height="140" width="50"></a>
&nbsp;
<h3 style="text-align: center;"><span style="color: #000000;">"Nos conseils relooking pour la morpho en H !"</span></h3> 
  <p style="text-align: center;"><span style="color: #000000;"><em>"Si vous pensez avoir du poids à perdre, poursuivez l'analyse ci-dessous !"</em> </span></p>
 <img class="aligncenter" src="/wp-content/uploads/ligne-outil.png"/>

 <div class="clear"></div>
 <div class="d-morpho4"><a href="/morphologie-et-silhouette-type-femme/comment-s-habiller/quels-vetements-choisir-et-porter-quand-on-est-en-h-ou-rectangle/"><span class="police-resultat-bilan">Vêtements</span><br><img src="/wp-content/uploads/morpho-vetement-resultat2.png" alt="Comment s'habiller et quels vêtements porter ?" title="Comment s'habiller et quels vêtements porter ?" height="60" width="60">
</a></div>
<div class="d-morpho4"><a href="/morphologie-et-silhouette-type-femme/quels-exercices-et-quels-sports-selon-sa-morphologie/quand-on-est-en-h-ou-rectangle/"><span class="police-resultat-bilan">Exercices</span><br><img src="/wp-content/uploads/morpho-exercice-resultat2.png" alt="Quels exercices et quels sports ?" title="Quels exercices et quels sports ?" height="60" width="60">
</a></div>
<div class="d-morpho4"><a href="/morphologie-et-silhouette-type-femme/conseils-minceur-comment-maigrir-selon-sa-morphologie/quand-on-est-en-h-ou-rectangle/"><span class="police-resultat-bilan">Minceur</span><br><img src="/wp-content/uploads/morpho-conseil-minceur-resultat2.png" alt="Conseils minceur : Comment maigrir ?" title="Conseils minceur : Comment maigrir ?" height="60" width="60">
</a></div></div>
<div class="clear">&nbsp;</div></div>	
EOT;
}
else if (($nature==2)AND($poit==8))
 {$morpho="8";
 	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOTRE MORPHOLOGIE EST EN 8 </b></h3>
<div class="menuimage">
<a href="/morphologie-et-silhouette-type-femme/en-8-ou-huit/"><img src="/wp-content/uploads/conseils-morphologie-silhouette-en-8.gif" alt="Conseils silhouette et morphologie en huit"  title="Conseils silhouette et morphologie en huit" class="aligncenter size-full wp-image-16575" height="140" width="50"></a>
&nbsp;
<h3 style="text-align: center;"><span style="color: #000000;">"Nos conseils relooking pour la morpho en 8 !"</span></h3> 
  <p style="text-align: center;"><span style="color: #000000;"><em>"Si vous pensez avoir du poids à perdre, poursuivez l'analyse ci-dessous !"</em> </span></p>
 <img class="aligncenter" src="/wp-content/uploads/ligne-outil.png"/>

 <div class="clear"></div>
 <div class="d-morpho4"><a href="/morphologie-et-silhouette-type-femme/comment-s-habiller/quels-vetements-choisir-et-porter-quand-on-est-en-8-ou-huit/"><span class="police-resultat-bilan">Vêtements</span><br><img src="/wp-content/uploads/morpho-vetement-resultat2.png" alt="Comment s'habiller et quels vêtements porter ?" title="Comment s'habiller et quels vêtements porter ?" height="60" width="60">
</a></div>
<div class="d-morpho4"><a href="/morphologie-et-silhouette-type-femme/quels-exercices-et-quels-sports-selon-sa-morphologie/quand-on-est-en-8-ou-huit/"><span class="police-resultat-bilan">Exercices</span><br><img src="/wp-content/uploads/morpho-exercice-resultat2.png" alt="Quels exercices et quels sports ?" title="Quels exercices et quels sports ?" height="60" width="60">
</a></div>
<div class="d-morpho4"><a href="/morphologie-et-silhouette-type-femme/conseils-minceur-comment-maigrir-selon-sa-morphologie/quand-on-est-en-8-ou-huit/"><span class="police-resultat-bilan">Minceur</span><br><img src="/wp-content/uploads/morpho-conseil-minceur-resultat2.png" alt="Conseils minceur : Comment maigrir ?" title="Conseils minceur : Comment maigrir ?" height="60" width="60">
</a></div></div>
<div class="clear">&nbsp;</div></div>		
EOT;
 }
else if (($nature==2)AND($poit==9))
 {$morpho="X";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOTRE MORPHOLOGIE EST EN X </b></h3>
<div class="menuimage">
<a href="/morphologie-et-silhouette-type-femme/en-x-ou-sablier/"><img src="/wp-content/uploads/conseils-morphologie-silhouette-en-X.gif" alt="Conseils morphologie et silhouette en x ou sablier"  title="Conseils morphologie et silhouette en x ou sablier" class="aligncenter size-full wp-image-16575" height="140" width="50"></a>
&nbsp;
<h3 style="text-align: center;"><span style="color: #000000;">"Nos conseils relooking pour la morpho en X !"</span></h3> 
  <p style="text-align: center;"><span style="color: #000000;"><em>"Si vous pensez avoir du poids à perdre, poursuivez l'analyse ci-dessous !"</em> </span></p>
 <img class="aligncenter" src="/wp-content/uploads/ligne-outil.png"/>

 <div class="clear"></div>
 <div class="d-morpho4"><a href="/morphologie-et-silhouette-type-femme/comment-s-habiller/quels-vetements-choisir-et-porter-quand-on-est-en-x-ou-sablier/"><span class="police-resultat-bilan">Vêtements</span><br><img src="/wp-content/uploads/morpho-vetement-resultat2.png" alt="Comment s'habiller et quels vêtements porter ?" title="Comment s'habiller et quels vêtements porter ?" height="60" width="60">
</a></div>
<div class="d-morpho4"><a href="/morphologie-et-silhouette-type-femme/quels-exercices-et-quels-sports-selon-sa-morphologie/quand-on-est-en-x-ou-sablier/"><span class="police-resultat-bilan">Exercices</span><br><img src="/wp-content/uploads/morpho-exercice-resultat2.png" alt="Quels exercices et quels sports ?" title="Quels exercices et quels sports ?" height="60" width="60">
</a></div>
<div class="d-morpho4"><a href="/morphologie-et-silhouette-type-femme/conseils-minceur-comment-maigrir-selon-sa-morphologie/quand-on-est-en-x-ou-sablier/"><span class="police-resultat-bilan">Minceur</span><br><img src="/wp-content/uploads/morpho-conseil-minceur-resultat2.png" alt="Conseils minceur : Comment maigrir ?" title="Conseils minceur : Comment maigrir ?" height="60" width="60">
</a></div></div>
<div class="clear">&nbsp;</div></div>		
EOT;
}





	$codehtml .= <<<EOT
<div class="bloc-morpho-gl">
<form name="morphoaform" class="form-type1" method="post" action="$url">
<img src="/wp-content/uploads/les-proportions-du-corps-avec-les-lignes-morphologiques-des-epaules-de-la-taille-et-des-hanches-2.webp" alt="Test morpho femme" title="Test morpho femme" class="aligncenter size-full wp-image-16781" height="200" width="600">
<div class="bloc-morpho-blanc">
<h3>QUESTION<span class="rosespan"> 1</span>/2 <span class="rosespan"> </span></h3>
<div id="ancrenewmorpho">&nbsp;</div>
<em>A l’aide de l’image ci-dessus représentant des formes sur  les 3 lignes noires de silhouette que sont les épaules (1), la taille (2) et les hanches (3) ...</em>
<h4><span class="rosespan">Êtes-vous plutôt ?</span></h4>
</div>
<input id="ex1" type="radio" name="nature" value="1" $check1/><label for="ex1">(ex 1) Hanches plus larges que les épaules</label><br>
<input id="ex2" type="radio" name="nature" value="2" $check2/><label for="ex2">(ex 2) Hanches égales aux épaules + taille marquée</label><br />
<input id="ex3" type="radio" name="nature" value="3" $check3/><label for="ex3">(ex 3) Taille ronde</label><br />
<input id="ex4" type="radio" name="nature" value="4" $check4/><label for="ex4">(ex 4) Épaules plus larges que les hanches</label><br>
<input id="ex5" type="radio" name="nature" value="5" $check5/><label for="ex5">(ex 5) Épaules, taille et hanches égales</label><br>
<div class="bloc-morpho-blanc">
<h3>QUESTION<span class="rosespan"> 2</span>/2 <span class="rosespan"> </span></h3>
<h4><span class="rosespan">Avez-vous une poitrine et des hanches généreuses ?</span></h4></div>
<p class="centrage"><input id="oui1" type="radio" name="poit" value="8" $check8/><label for="oui1"> OUI</label>&nbsp; &nbsp;
<input id="non1" type="radio" name="poit" value="9" $check9/><label for="non1"> NON</label></p>
<p class="centrage"><input name="valider" value="VALIDER" type="submit"></p><br>
</div>	
</form>
EOT;
if (isset($_POST['valider'])) {
	   $codehtml .= <<<EOT
$texte

<div class="ocm-bl1">
<span class="outil-action-rose">V</span><span class="outil-action-noir">ous souhaitez maigrir ? Poursuivez l'analyse !</span>
<form name="anaform" class="ocm-form" method="post" action="#analyse">
<span class="rosep">Vous êtes</span>
<ul class="ul_calc"> 
<li><input id="femme" name="sexe" value="2" type="radio" $hek2/><label for="femme">Une femme</label></li> 
<li><input id="homme" name="sexe" value="1" type="radio" $hek1/><label for="homme">Un homme</label></li></ul>
<div class="clear">
<div class="ocm-col3"><span class="rosep">Votre âge</span><br><input name="age" class="ocm-input1" value="$age" type="text"></div>
<div class="ocm-col3"><span class="rosep">Votre taille (cm)</span><br><input name="taille" class="ocm-input1" value="$taille" type="text"></div>
<div class="ocm-col3"><span class="rosep">Votre poids (KG)</span><br><input name="poids" class="ocm-input1" value="$poids" type="text"></div>
</div>
<div class="clear">
<div class="centrage"><span class="rosep">Quel est votre objectif de poids? (en KG)</span><br><input name="obj" class="ocm-input1" value="$obj" type="text"></div></div>
<div class="clear">
<input type="hidden" name="poit" value="$poit" />
<input type="hidden" name="nature" value="$nature" />
<input type="hidden" name="valider" value="CALCULER" />
<div id="analyse" class="centrage"><br />&nbsp;
<input name="valider2" value="CALCULER" type="submit">
</div> </div>


</form>
<div class="clear-zero">&nbsp;</div>
</div>

EOT;
}



if (isset($_POST['valider2'])) {
 $IMC=($poids/(($taille/100)*($taille/100)));
   $IMC=round($IMC,1);
      if ($IMC<18.5) {
   $STATUT= "maigreur";
   $IMAGE="imc-statut-maigreur.png";
   }
   else if ($IMC<25) {
   $STATUT= "corpulence normale";
   $IMAGE="imc-statut-normal.png";
   }
   else if ($IMC<30) {
   $STATUT= "surpoids";
   $IMAGE="imc-statut-suroids.png";
   } 
   else {
   $STATUT= "obèsité";
   $IMAGE="imc-statut-obesite.png";
   }
   
      if ($sexe=="2") {$PIL=($taille-100-(($taille-150)/2.5));}
   else if ($sexe=="1") {$PIL=($taille-100-(($taille-150)/4));}
$PIL=round($PIL,1);
   
   $pmaa = (($obj+$PIL)/2);
   $kap = ($poids-$pmaa);
   $vakap = abs($kap);
   
       if ($kap>0) {$textp="Poids moyen à perdre";}
   else if ($kap<0) {$textp="Poids moyen à gagner";}
   else {$textp="Vous êtes à l'équilibre";} 
   
       if ($kap<0.1) {$texto1="Vous n'avez pas de poids à perdre. Félicitations.";
   $lienb="<div class=\"ocm-liena\"><a href=\"/categorie-produit/coffret-minceur-box-de-regime/\">VOIR TOUS NOS PROGRAMMES</a></div>";	   
	   }
   else if ($kap<1) {$texto1="Vous êtes presque à votre poids d'équilibre. Vous pouvez perdre ce léger superflus en découvrant notre programme.";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-s-a-3-kg-14-jours/\">VOIR MON PROGRAMME</a></div>";
   }	   
   else if ($kap<3) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">2  semaines!</span>";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-s-a-3-kg-14-jours/\">VOIR MON PROGRAMME</a></div>";
   }
   else if ($kap<6) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">4  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-m-3-a-6-kg-28-jours/\">VOIR MON PROGRAMME</a></div>";}
   else if ($kap<9) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">6  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-l-6-a-9-kg-42-jours/\">VOIR MON PROGRAMME</a></div>";}
   else if ($kap<12) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">10  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xl-9-a-12-kg-56-jours/\">VOIR MON PROGRAMME</a></div>";}
    else if ($kap<15) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">10  semaines!</span>";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xxl-12-a-15-kg-70-jours/\">VOIR MON PROGRAMME</a></div>";}
   else {$texto1="En étant raisonnable vous pouvez vous fixer un objectif d'environ <span class=\"rosep\">15 kg</span> et l'atteindre au bout de <span class=\"rosep\">10 semaines!</span>";
     $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xxl-12-a-15-kg-70-jours/\">VOIR MON PROGRAMME</a></div>";} 
   
   $codehtml .= <<<EOT
<div class="ocm-noir"><img src="/wp-content/uploads/outil-morpho-2.png">
</div>
<div class="ocm-bl3">
<div class="ocm-blancg">Votre Indice de Masse Corporelle</div>
<p>IMC = <span class="rosegrasspan">$IMC</span><br />
Statut = <span class="rosegrasspan">$STATUT</span></p>
 <img class="aligncenter" src="/wp-content/uploads/$IMAGE"> 
<div class="ocm-blancg">Vos indicateurs de poids</div>
 <p>
  Votre poids actuel = <span class="rosegrasspan">$poids</span> kg<br />
 Poids idéal (formule de Lorentz) = <span class="rosegrasspan">$PIL</span> kg<br />
Objectif personnel = <span class="rosegrasspan">$obj</span> kg
</p>
<div class="float50">
  <div class="ocm-bl4">Poids moyen à atteindre</div>
  <div class="ocm-circle"><br><span class="ocm-res14r">$pmaa</span><br><span class="result14p">Kg</span></div>
</div>
<div class="float50">
    <div class="ocm-bl4">$textp</div>
	<div class="ocm-circle"><br><span class="ocm-res14r">$vakap</span><br><span class="result14p">Kg</span></div>
</div>
<div class="clear-zero">&nbsp;</div>
</div>
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-3.png">
</div>
<div class="ocm-bl1">
<div class="clear">
<div class="centrage"><span class="rosep">Quel objectif et comment le concrétiser?</span></div>
</div>
$texto1
<div class="clear-zero">&nbsp;</div>
$lienb
<img src="/wp-content/uploads/ligne-objectif-final.png">
</div>
EOT;
}



	   $codehtml .= <<<EOT
<div class="clear-zero">&nbsp;</div>
EOT;



return $codehtml;
}
add_shortcode( 'outilsnewmorpho', 'outils_newmorpho' );





//Calculette mariage new
function outils_newmariage($url) {
extract( shortcode_atts( array(
      'url'     => '',
   ), $url, 'outilsnewmariage' ) );
   
   
    $sexe=$_POST['sexe'];   
   $age=$_POST['age'];
   $taille=$_POST['taille'];
	$taille = preg_replace('*,*','.',$taille);
   $poids=$_POST['poids'];
	$poids = preg_replace('*,*','.',$poids);
   $act=$_POST['act'];
if ($sexe==1) {$hek1="checked ";}
else {$hek2="checked ";}  

$obj=$_POST['obj'];
	$obj = preg_replace('*,*','.',$obj);   
   
   
   
				$nature = $_POST['nature'];
   				$poit = $_POST['poit'];		
if ($nature==1) {$check1="checked ";}
				else if ($nature==2) {$check2="checked ";}
				else if ($nature==3) {$check3="checked ";}
				else if ($nature==4) {$check4="checked ";}
				else if ($nature==5) {$check5="checked ";}
if ($poit==8) {$check8="checked ";}
				else if ($poit==9) {$check9="checked ";}

if ($nature==1)
 {$morpho="A";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho"><h3 style="text-align: center;"><b>VOTRE MORPHOLOGIE EST EN A </b></h3>

&nbsp;
<h3 style="text-align: center;"><span style="color: #000000;">"Nos conseils mariage pour la morpho en A !"</span></h3> 
  <p style="text-align: center;"><em><span style="color: #000000;">"Si vous pensez avoir du poids à perdre, poursuivez l'analyse ci-dessous !"</span></em></p>
 <img class="aligncenter" src="/wp-content/uploads/ligne-outil.png"/>

 <div class="menuimage">
 <p style="text-align: center;"><a href="/morphologie-et-silhouette-type-femme/comment-s-habiller/quelle-robe-de-mariee-porter-et-choisir-pour-son-mariage/quand-on-est-en-a-pyramide-triangle-ou-poire/">Voir les robes de mariée pour les A !<img src="/wp-content/uploads/robe-de-mariage-morphologie-en-a.png" alt="Conseils mariage et robes de mariée pour silhouette et morphologie en A pyramide, triangle ou poire"  title="Conseils mariage et robes de mariée pour silhouette et morphologie en A pyramide, triangle ou poire" class="aligncenter size-full wp-image-16575" height="140" width="140">
</a></p>
</div><div class="clear">&nbsp;</div></div>
EOT;
}
else if ($nature==3)
 {$morpho="O";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho"><h3 style="text-align: center;"><b>VOTRE MORPHOLOGIE EST EN O </b></h3>
<div class="menuimage">

<h3 style="text-align: center;" class="police-blanche"><span style="color: #000000;">"Nos conseils mariage pour la morpho en O !"</span> </h3> 
  <p style="text-align: center;"><span style="color: #000000;"><em>"Si vous pensez avoir du poids à perdre, poursuivez l'analyse ci-dessous !"</em> </span></p>

 <p style="text-align: center;"><a href="/morphologie-et-silhouette-type-femme/comment-s-habiller/quelle-robe-de-mariee-porter-et-choisir-pour-son-mariage/quand-on-est-en-o-ronde-ou-pomme/">Voir les robes de mariée pour les O !<img src="/wp-content/uploads/robe-de-mariage-morphologie-o.png" alt="Robes de mariage en O"  title="Robes de mariage en O" class="aligncenter size-full wp-image-16575" height="140" width="140">
</a></p>
</div>
<div class="clear">&nbsp;</div></div>	
EOT;
}
else if ($nature==4)
 {$morpho="V";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho"><h3 style="text-align: center;"><b>VOTRE MORPHOLOGIE EST EN V </b></h3>
<div class="menuimage">

<h3 style="text-align: center;" class="police-blanche"><span style="color: #000000;">"Nos conseils mariage pour la morpho en V !"</span> </h3> 
  <p style="text-align: center;"><span style="color: #000000;"><em>"Si vous pensez avoir du poids à perdre, poursuivez l'analyse ci-dessous !"</em> </span></p>

 <p style="text-align: center;"><a href="/morphologie-et-silhouette-type-femme/comment-s-habiller/quels-vetements-choisir-et-porter-quand-on-est-en-v-pyramide-inversee-ou-triangle-inverse/">Voir les robes de mariée pour les V !<img src="/wp-content/uploads/robe-de-mariage-morphologie-v.png" alt="Robes de mariage en V"  title="Robes de mariage en V" class="aligncenter size-full wp-image-16575" height="140" width="140">
</a></p>
</div>
<div class="clear">&nbsp;</div></div>
EOT;
}
else if ($nature==5)
 {$morpho="H";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho"><h3 style="text-align: center;"><b>VOTRE MORPHOLOGIE EST EN H </b></h3>
<div class="menuimage">

<h3 style="text-align: center;" class="police-blanche"><span style="color: #000000;">"Nos conseils mariage pour la morpho en H !"</span> </h3> 
  <p style="text-align: center;"><span style="color: #000000;"><em>"Si vous pensez avoir du poids à perdre, poursuivez l'analyse ci-dessous !"</em> </span></p>

 <p style="text-align: center;"><a href="/morphologie-et-silhouette-type-femme/comment-s-habiller/quelle-robe-de-mariee-porter-et-choisir-pour-son-mariage/quand-on-est-en-h-ou-rectangle/">Voir les robes de mariée pour les H !<img src="/wp-content/uploads/robe-de-mariage-morphologie-h.png" alt="Robes de mariage en H"  title="Robes de mariage en H" class="aligncenter size-full wp-image-16575" height="140" width="140">
</a></p>
</div>
<div class="clear">&nbsp;</div></div>
EOT;
}
else if (($nature==2)AND($poit==8))
 {$morpho="8";
 	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho"><h3 style="text-align: center;"><b>VOTRE MORPHOLOGIE EST EN 8 </b></h3>
<div class="menuimage">

<h3 style="text-align: center;" class="police-blanche"><span style="color: #000000;">"Nos conseils mariage pour la morpho en 8 !"</span> </h3> 
  <p style="text-align: center;"><span style="color: #000000;"><em>"Si vous pensez avoir du poids à perdre, poursuivez l'analyse ci-dessous !"</em> </span></p>

 <p style="text-align: center;"><a href="/morphologie-et-silhouette-type-femme/comment-s-habiller/quelle-robe-de-mariee-porter-et-choisir-pour-son-mariage/quand-on-est-en-8-ou-huit/">Voir les robes de mariée pour les 8 !<img src="/wp-content/uploads/robe-de-mariage-morphologie-8.png" alt="Robes de mariage en 8"  title="Robes de mariage en 8" class="aligncenter size-full wp-image-16575" height="140" width="140">
</a></p>
</div>
<div class="clear">&nbsp;</div></div>		
EOT;
 }
else if (($nature==2)AND($poit==9))
 {$morpho="X";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho"><h3 style="text-align: center;"><b>VOTRE MORPHOLOGIE EST EN X </b></h3>
<div class="menuimage">

<h3 style="text-align: center;" class="police-blanche"><span style="color: #000000;">"Nos conseils mariage pour la morpho en X !"</span> </h3> 
  <p style="text-align: center;"><span style="color: #000000;"><em>"Si vous pensez avoir du poids à perdre, poursuivez l'analyse ci-dessous !"</em> </span></p>

 <p style="text-align: center;"><a href="/morphologie-et-silhouette-type-femme/comment-s-habiller/quelle-robe-de-mariee-porter-et-choisir-pour-son-mariage/quand-on-est-en-x-ou-sablier/">Voir les robes de mariée pour les X !<img src="/wp-content/uploads/robe-de-mariage-morphologie-x.png" alt="Robes de mariage en X"  title="Robes de mariage en X" class="aligncenter size-full wp-image-16575" height="140" width="140">
</a></p>
</div>
<div class="clear">&nbsp;</div></div>		
EOT;
}





	$codehtml .= <<<EOT
<div class="bloc-morpho-gl">
<form name="morphoaform" class="form-type1" method="post" action="$url">
<img src="/wp-content/uploads/morphologie-test-mariage-comment-faire-pour-bien-choisir-sa-robe-de-mariee.webp" alt="er" class="aligncenter size-full wp-image-16781" height="200" width="600">
<div class="bloc-morpho-blanc">
<h3>QUESTION<span class="rosespan"> 1</span>/2 <span class="rosespan"> </span></h3>
<div id="ancrenewmariage">&nbsp;</div>
<em>A l’aide de l’image ci-dessus représentant des formes sur  les 3 lignes noires de silhouette que sont les épaules (1), la taille (2) et les hanches (3) ...</em>
<h4><span class="rosespan">Êtes-vous plutôt ?</span></h4>
</div>
<input id="ex1" type="radio" name="nature" value="1" $check1/><label for="ex1">(ex 1) Hanches plus larges que les épaules</label><br>
<input id="ex2" type="radio" name="nature" value="2" $check2/><label for="ex2">(ex 2) Hanches égales aux épaules + taille marquée</label><br />
<input id="ex3" type="radio" name="nature" value="3" $check3/><label for="ex3">(ex 3) Taille ronde</label><br />
<input id="ex4" type="radio" name="nature" value="4" $check4/><label for="ex4">(ex 4) Épaules plus larges que les hanches</label><br>
<input id="ex5" type="radio" name="nature" value="5" $check5/><label for="ex5">(ex 5) Épaules, taille et hanches égales</label><br>
<div class="bloc-morpho-blanc">
<h3>QUESTION<span class="rosespan"> 2</span>/2 <span class="rosespan"> </span></h3>
<h4><span class="rosespan">Avez-vous une poitrine et des hanches généreuses ?</span></h4></div>
<p class="centrage"><input id="oui1" type="radio" name="poit" value="8" $check8/><label for="oui1"> OUI</label>&nbsp; &nbsp;
<input id="non1" type="radio" name="poit" value="9" $check9/><label for="non1"> NON</label></p>
<p class="centrage"><input name="valider" value="VALIDER" type="submit"></p><br>
</div>	
</form>
EOT;
if (isset($_POST['valider'])) {
	   $codehtml .= <<<EOT
$texte

<div class="ocm-bl1">
<span class="outil-action-rose">V</span><span class="outil-action-noir">ous souhaitez maigrir ? Poursuivez l'analyse !</span>
<form name="anaform" class="ocm-form" method="post" action="#analyse">
<span class="rosep">Vous êtes</span>
<ul class="ul_calc"> 
<li><input id="femme" name="sexe" value="2" type="radio" $hek2/><label for="femme">Une femme</label></li> 
<li><input id="homme" name="sexe" value="1" type="radio" $hek1/><label for="homme">Un homme</label></li></ul>
<div class="clear">
<div class="ocm-col3"><span class="rosep">Votre âge</span><br><input name="age" class="ocm-input1" value="$age" type="text"></div>
<div class="ocm-col3"><span class="rosep">Votre taille (cm)</span><br><input name="taille" class="ocm-input1" value="$taille" type="text"></div>
<div class="ocm-col3"><span class="rosep">Votre poids (KG)</span><br><input name="poids" class="ocm-input1" value="$poids" type="text"></div>
</div>
<div class="clear">
<div class="centrage"><span class="rosep">Quel est votre objectif de poids? (en KG)</span><br><input name="obj" class="ocm-input1" value="$obj" type="text"></div></div>
<div class="clear">
<input type="hidden" name="poit" value="$poit" />
<input type="hidden" name="nature" value="$nature" />
<input type="hidden" name="valider" value="CALCULER" />
<div id="analyse" class="centrage"><br />&nbsp;
<input name="valider2" value="CALCULER" type="submit">
</div> </div>


</form>
<div class="clear-zero">&nbsp;</div>
</div>

EOT;
}



if (isset($_POST['valider2'])) {
 $IMC=($poids/(($taille/100)*($taille/100)));
   $IMC=round($IMC,1);
      if ($IMC<18.5) {
   $STATUT= "maigreur";
   $IMAGE="imc-statut-maigreur.png";
   }
   else if ($IMC<25) {
   $STATUT= "corpulence normale";
   $IMAGE="imc-statut-normal.png";
   }
   else if ($IMC<30) {
   $STATUT= "surpoids";
   $IMAGE="imc-statut-suroids.png";
   } 
   else {
   $STATUT= "obèsité";
   $IMAGE="imc-statut-obesite.png";
   }
   
      if ($sexe=="2") {$PIL=($taille-100-(($taille-150)/2.5));}
   else if ($sexe=="1") {$PIL=($taille-100-(($taille-150)/4));}
$PIL=round($PIL,1);
   
   $pmaa = (($obj+$PIL)/2);
   $kap = ($poids-$pmaa);
   $vakap = abs($kap);
   
       if ($kap>0) {$textp="Poids moyen à perdre";}
   else if ($kap<0) {$textp="Poids moyen à gagner";}
   else {$textp="Vous êtes à l'équilibre";} 
   
       if ($kap<0.1) {$texto1="Vous n'avez pas de poids à perdre. Félicitations.";
   $lienb="<div class=\"ocm-liena\"><a href=\"/categorie-produit/coffret-minceur-box-de-regime/\">VOIR TOUS NOS PROGRAMMES</a></div>";	   
	   }
   else if ($kap<1) {$texto1="Vous êtes presque à votre poids d'équilibre. Vous pouvez perdre ce léger superflus en découvrant notre programme.";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-s-a-3-kg-14-jours/\">VOIR MON PROGRAMME</a></div>";
   }	   
   else if ($kap<3) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">2  semaines!</span>";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-s-a-3-kg-14-jours/\">VOIR MON PROGRAMME</a></div>";
   }
   else if ($kap<6) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">4  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-m-3-a-6-kg-28-jours/\">VOIR MON PROGRAMME</a></div>";}
   else if ($kap<9) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">6  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-l-6-a-9-kg-42-jours/\">VOIR MON PROGRAMME</a></div>";}
   else if ($kap<12) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">10  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xl-9-a-12-kg-56-jours/\">VOIR MON PROGRAMME</a></div>";}
    else if ($kap<15) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">10  semaines!</span>";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xxl-12-a-15-kg-70-jours/\">VOIR MON PROGRAMME</a></div>";}
   else {$texto1="En étant raisonnable vous pouvez vous fixer un objectif d'environ <span class=\"rosep\">15 kg</span> et l'atteindre au bout de <span class=\"rosep\">10 semaines!</span>";
     $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xxl-12-a-15-kg-70-jours/\">VOIR MON PROGRAMME</a></div>";} 
   
   $codehtml .= <<<EOT
<div class="ocm-noir"><img src="/wp-content/uploads/outil-morpho-2.png">
</div>
<div class="ocm-bl3">
<div class="ocm-blancg">Votre Indice de Masse Corporelle</div>
<p>IMC = <span class="rosegrasspan">$IMC</span><br />
Statut = <span class="rosegrasspan">$STATUT</span></p>
 <img class="aligncenter" src="/wp-content/uploads/$IMAGE"> 
<div class="ocm-blancg">Vos indicateurs de poids</div>
 <p>
  Votre poids actuel = <span class="rosegrasspan">$poids</span> kg<br />
 Poids idéal (formule de Lorentz) = <span class="rosegrasspan">$PIL</span> kg<br />
Objectif personnel = <span class="rosegrasspan">$obj</span> kg
</p>
<div class="float50">
  <div class="ocm-bl4">Poids moyen à atteindre</div>
  <div class="ocm-circle"><br><span class="ocm-res14r">$pmaa</span><br><span class="result14p">Kg</span></div>
</div>
<div class="float50">
    <div class="ocm-bl4">$textp</div>
	<div class="ocm-circle"><br><span class="ocm-res14r">$vakap</span><br><span class="result14p">Kg</span></div>
</div>
<div class="clear-zero">&nbsp;</div>
</div>
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-3.png">
</div>
<div class="ocm-bl1">
<div class="clear">
<div class="centrage"><span class="rosep">Quel objectif et comment le concrétiser?</span></div>
</div>
$texto1
<div class="clear-zero">&nbsp;</div>
$lienb
<img src="/wp-content/uploads/ligne-objectif-final.png">
</div>
EOT;
}



	   $codehtml .= <<<EOT
<div class="clear-zero">&nbsp;</div>
EOT;



return $codehtml;
}
add_shortcode( 'outilsnewmariage', 'outils_newmariage' );


//Outils comment bien faire par exercices
function calculette_comment_bien_faire($atts) {
extract( shortcode_atts( array(
      'url'     => '',
	  'exercice'     => '',
   ), $atts, 'calculettetechniquesexercice' ) );
   
  
   $sexe=$_POST['sexe'];   
   $age=$_POST['age'];
   $taille=$_POST['taille'];
	$taille = preg_replace('*,*','.',$taille);
   $poids=$_POST['poids'];
	$poids = preg_replace('*,*','.',$poids);
   $act=$_POST['act'];
if ($sexe==1) {$hek1="checked ";}
else {$hek2="checked ";}

$obj=$_POST['obj'];
	$obj = preg_replace('*,*','.',$obj);
	
	if (isset($_POST['exercice'])) {$sport=$_POST['exercice'];}
	else {$exercice=$exercice;} 	
	
   $codehtml = <<<EOT
<div id="resultat1"> </div>
			<div class="ocm-titre1">Outil : Quelle posture pour quel exercice !</div>   
			<div class="ocm-bl1">

<form name="imcform" class="ocm-form" method="post" action="#besoin">

<div class="clear">
<em>En sélectionnant un exercice de votre choix, cet outil RegiVia vous permettra de visionner comment bien faire l'exercice en question ainsi que les postures à éviter. </em><br />&nbsp;<br />
<div id="besoin"><span class="rosep">Votre exercice</span>&nbsp;</div>
<select name="exercice">
<option value="$exercice">$exercice</option>
<option value="Gainage">gainage</option>
<option value="Dips">Dips</option>
<option value="Crunches">Crunches</option> 


</select>&nbsp;<br>&nbsp;<br>
</div>

<div class="centrage">
<input name="valider" value="VOIR LES EXERCICES !" type="submit">
</div>  
</form>
<div class="clear-zero">&nbsp;</div>
</div>
EOT;
if (isset($_POST['valider'])) {

if ($sport=="Gainage") {$imgmuscle="fcd236098d2a2eaa152239bf9a9f68b5.jpg";}
	else if ($exercice=="Dips") {$PICTOS="http://www.regivia.com/wp-content/uploads/gestes1.png"; $imgmuscle="FotoliaComp_108416257_wtaPJ51bzqV6Kv6zxJMTmGgJNZGF6AFs_NW40.jpg";}
	else if ($exercicet=="Crunches") {$PICTOS="http://www.regivia.com/wp-content/uploads/gestes1.png"; $imgmuscle="FotoliaComp_108416257_wtaPJ51bzqV6Kv6zxJMTmGgJNZGF6AFs_NW40.jpg";}
	
	
	$imgmuscle = "/wp-content/uploads/".$imgmuscle;
	
	
	
	
   $codehtml .= <<<EOT

<div class="ocm-b17">
<div class="clear-zero">&nbsp;</div>
&nbsp;
<div style="text-align: center;"> 
<h3 style="text-align: center;"><b><span style="color: #ffffff;"> $exercice : Gestes à faire et postures à éviter ! </span></b></h3>
<img style="text-align: center;" src="/wp-content/uploads/ligne-outil.png"/>
</div> 

<img src="$imgmuscle" alt="postures par $exercice">
<div class="clear-zero">&nbsp;</div>
</div>


<div class="ocm-bl1">
<span class="outil-action-rose">V</span><span class="outil-action-noir">ous souhaitez maigrir en faisant du sport ? Poursuivez l'analyse !</span>
<form name="anaform" class="ocm-form" method="post" action="#analyse">
<span class="rosep">Vous êtes</span>
<ul class="ul_calc"> 
<li><input id="femme" name="sexe" value="2" type="radio" $hek2/><label for="femme">Une femme</label></li> 
<li><input id="homme" name="sexe" value="1" type="radio" $hek1/><label for="homme">Un homme</label></li></ul>
<div class="clear">
<div class="ocm-col3"><span class="rosep">Votre âge</span><br><input name="age" class="ocm-input1" value="$age" type="text"></div>
<div class="ocm-col3"><span class="rosep">Votre taille (cm)</span><br><input name="taille" class="ocm-input1" value="$taille" type="text"></div>
<div class="ocm-col3"><span class="rosep">Votre poids (KG)</span><br><input name="poids" class="ocm-input1" value="$poids" type="text"></div>
</div>
<div class="clear">
<div class="centrage"><span class="rosep">Quel est votre objectif de poids? (en KG)</span><br><input name="obj" class="ocm-input1" value="$obj" type="text"></div></div>
<div class="clear">
<input type="hidden" name="sport" value="$sport" />
<input type="hidden" name="valider" value="CALCULER" />
<div id="analyse" class="centrage"><br />&nbsp;
<input name="valider2" value="CALCULER" type="submit">
</div> </div>


</form>
<div class="clear-zero">&nbsp;</div>
</div>
EOT;
}

if (isset($_POST['valider2'])) {
 $IMC=($poids/(($taille/100)*($taille/100)));
   $IMC=round($IMC,1);
      if ($IMC<18.5) {
   $STATUT= "maigreur";
   $IMAGE="imc-statut-maigreur.png";
   }
   else if ($IMC<25) {
   $STATUT= "corpulence normale";
   $IMAGE="imc-statut-normal.png";
   }
   else if ($IMC<30) {
   $STATUT= "surpoids";
   $IMAGE="imc-statut-suroids.png";
   } 
   else {
   $STATUT= "obèsité";
   $IMAGE="imc-statut-obesite.png";
   }
   
      if ($sexe=="2") {$PIL=($taille-100-(($taille-150)/2.5));}
   else if ($sexe=="1") {$PIL=($taille-100-(($taille-150)/4));}
$PIL=round($PIL,1);
   
   $pmaa = (($obj+$PIL)/2);
   $kap = ($poids-$pmaa);
   $vakap = abs($kap);
   
       if ($kap>0) {$textp="Poids moyen à perdre";}
   else if ($kap<0) {$textp="Poids moyen à gagner";}
   else {$textp="Vous êtes à l'équilibre";} 
   
       if ($kap<0.1) {$texto1="Vous n'avez pas de poids à perdre. Félicitations.";
   $lienb="<div class=\"ocm-liena\"><a href=\"/categorie-produit/coffret-minceur-box-de-regime/\">VOIR TOUS NOS PROGRAMMES</a></div>";	   
	   }
   else if ($kap<1) {$texto1="Vous êtes presque à votre poids d'équilibre. Vous pouvez perdre ce léger superflus en découvrant notre programme.";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-s-a-3-kg-14-jours/\">VOIR MON PROGRAMME</a></div>";
   }	   
   else if ($kap<3) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">2  semaines!</span>";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-s-a-3-kg-14-jours/\">VOIR MON PROGRAMME</a></div>";
   }
   else if ($kap<6) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">4  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-m-3-a-6-kg-28-jours/\">VOIR MON PROGRAMME</a></div>";}
   else if ($kap<9) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">6  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-l-6-a-9-kg-42-jours/\">VOIR MON PROGRAMME</a></div>";}
   else if ($kap<12) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">10  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xl-9-a-12-kg-56-jours/\">VOIR MON PROGRAMME</a></div>";}
    else if ($kap<15) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">10  semaines!</span>";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xxl-12-a-15-kg-70-jours/\">VOIR MON PROGRAMME</a></div>";}
   else {$texto1="En étant raisonnable vous pouvez vous fixer un objectif d'environ <span class=\"rosep\">15 kg</span> et l'atteindre au bout de <span class=\"rosep\">10 semaines!</span>";
     $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xxl-12-a-15-kg-70-jours/\">VOIR MON PROGRAMME</a></div>";} 
   
   $codehtml .= <<<EOT
<div class="ocm-noir"><img src="/wp-content/uploads/outils-zones-muscles-2.png">
</div>
<div class="ocm-bl3">
<div class="ocm-blancg">Votre Indice de Masse Corporelle</div>
<p>IMC = <span class="rosegrasspan">$IMC</span><br />
Statut = <span class="rosegrasspan">$STATUT</span></p>
 <img class="aligncenter" src="/wp-content/uploads/$IMAGE"> 
<div class="ocm-blancg">Vos indicateurs de poids</div>
 <p>
  Votre poids actuel = <span class="rosegrasspan">$poids</span> kg<br />
 Poids idéal (formule de Lorentz) = <span class="rosegrasspan">$PIL</span> kg<br />
Objectif personnel = <span class="rosegrasspan">$obj</span> kg
</p>
<div class="float50">
  <div class="ocm-bl4">Poids moyen à atteindre</div>
  <div class="ocm-circle"><br><span class="ocm-res14r">$pmaa</span><br><span class="result14p">Kg</span></div>
</div>
<div class="float50">
    <div class="ocm-bl4">$textp</div>
	<div class="ocm-circle"><br><span class="ocm-res14r">$vakap</span><br><span class="result14p">Kg</span></div>
</div>
<div class="clear-zero">&nbsp;</div>
</div>
<div class="ocm-noir">
<img src="/wp-content/uploads/outils-zones-muscles-3.png">
</div>
<div class="ocm-bl1">
<div class="clear">
<div class="centrage"><span class="rosep">Quel objectif et comment le concrétiser?</span></div>
</div>
$texto1
<div class="clear-zero">&nbsp;</div>
$lienb
<img src="/wp-content/uploads/ligne-objectif-final.png">
</div>
EOT;
}

   $codehtml .= <<<EOT
<div class="clear-zero">&nbsp;</div>
EOT;


return $codehtml;
}
add_shortcode( 'calculettetechniquesexercice', 'calculette_comment_bien_faire' );


//Outils -bilan muscles par exercices


function calculette_outil_bilan_exos($atts) {
extract( shortcode_atts( array(
      'url'     => '',
   ), $atts, 'calculetteoutbilmuscleexo' ) );
   $sexe=$_POST['sexe'];   
   $age=$_POST['age'];
   $taille=$_POST['taille'];
	$taille = preg_replace('*,*','.',$taille);
   $poids=$_POST['poids'];
	$poids = preg_replace('*,*','.',$poids);
	$obj=$_POST['obj'];
	$obj = preg_replace('*,*','.',$obj);
   $act=$_POST['act'];
if ($sexe==1) {$hek1="checked ";}
else {$hek2="checked ";}
$obj=$_POST['obj'];
	$obj = preg_replace('*,*','.',$obj);
   $codehtml = <<<EOT
<div id="resultat1"> </div>
		
<div>

<form name="imcform" class="ocm-form" method="post" action="#besoin">
<div style="text-align: center;">
<span class="rosep">Vous êtes</span>
<ul class="ul_calc"> 
<li><input id="femme" name="sexe" value="2" type="radio" $hek2/><label for="femme">Une femme</label></li> 
<li><input id="homme" name="sexe" value="1" type="radio" $hek1/><label for="homme">Un homme</label></li></ul></div>
<div class="clear">
<div class="ocm-col3"><span class="rosep">Votre âge</span><br><input name="age" class="ocm-input1" value="$age" type="text"></div>
<div class="ocm-col3"><span class="rosep">Votre taille (cm)</span><br><input name="taille" class="ocm-input1" value="$taille" type="text"></div>
<div class="ocm-col3"><span class="rosep">Votre poids (KG)</span><br><input name="poids" class="ocm-input1" value="$poids" type="text"></div>
</div>
<div class="clear">
<div class="centrage"><span class="rosep">Quel est votre objectif de poids? (en KG)</span><br><input name="obj" class="ocm-input1" value="$obj" type="text"></div></div>
<div class="clear"><div id="besoin" class="centrage"><br />&nbsp;
<input name="valider" value="CALCULER" type="submit">

</div> </div>
</form>
<div class="clear-zero">&nbsp;</div>
</div>
EOT;



if (isset($_POST['valider'])) {
 $IMC=($poids/(($taille/100)*($taille/100)));
   $IMC=round($IMC,1);
      if ($IMC<18.5) {
   $STATUT= "maigreur";
   $IMAGE="imc-statut-maigreur.png";
   }
   else if ($IMC<25) {
   $STATUT= "corpulence normale";
   $IMAGE="imc-statut-normal.png";
   }
   else if ($IMC<30) {
   $STATUT= "surpoids";
   $IMAGE="imc-statut-suroids.png";
   } 
   else {
   $STATUT= "obèsité";
   $IMAGE="imc-statut-obesite.png";
   }
   
      if ($sexe=="2") {$PIL=($taille-100-(($taille-150)/2.5));}
   else if ($sexe=="1") {$PIL=($taille-100-(($taille-150)/4));}
$PIL=round($PIL,1);
   
   $pmaa = (($obj+$PIL)/2);
   $kap = ($poids-$pmaa);
   $vakap = abs($kap);
   
       if ($kap>0) {$textp="Poids moyen à perdre";}
   else if ($kap<0) {$textp="Poids moyen à gagner";}
   else {$textp="Vous êtes à l'équilibre";} 
   
       if ($kap<0.1) {$texto1="Vous n'avez pas de poids à perdre. Félicitations.";
   $lienb="<div class=\"ocm-liena\"><a href=\"/categorie-produit/coffret-minceur-box-de-regime/\">VOIR TOUS NOS PROGRAMMES</a></div>";	   
	   }
   else if ($kap<1) {$texto1="Vous êtes presque à votre poids d'équilibre. Vous pouvez perdre ce léger superflus en découvrant notre programme.";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-s-a-3-kg-14-jours/\">VOIR MON PROGRAMME</a></div>";
   }	   
   else if ($kap<3) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">2  semaines!</span>";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-s-a-3-kg-14-jours/\">VOIR MON PROGRAMME</a></div>";
   }
   else if ($kap<6) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">4  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-m-3-a-6-kg-28-jours/\">VOIR MON PROGRAMME</a></div>";}
   else if ($kap<9) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">6  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-l-6-a-9-kg-42-jours/\">VOIR MON PROGRAMME</a></div>";}
   else if ($kap<12) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">10  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xl-9-a-12-kg-56-jours/\">VOIR MON PROGRAMME</a></div>";}
    else if ($kap<15) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">10  semaines!</span>";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xxl-12-a-15-kg-70-jours/\">VOIR MON PROGRAMME</a></div>";}
   else {$texto1="En étant raisonnable vous pouvez vous fixer un objectif d'environ <span class=\"rosep\">15 kg</span> et l'atteindre au bout de <span class=\"rosep\">10 semaines!</span>";
     $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xxl-12-a-15-kg-70-jours/\">VOIR MON PROGRAMME</a></div>";} 
   
   $codehtml .= <<<EOT
<div class="ocm-noir"><img src="/wp-content/uploads/outil-bilan-t1.png">
</div>
<div class="ocm-bl3">
<div class="ocm-blancg">Votre Indice de Masse Corporelle</div>
<p>IMC = <span class="rosegrasspan">$IMC</span><br />
Statut = <span class="rosegrasspan">$STATUT</span></p>
 <img class="aligncenter" src="/wp-content/uploads/$IMAGE"> 
<div class="ocm-blancg">Vos indicateurs de poids</div>
 <p>
  Votre poids actuel = <span class="rosegrasspan">$poids</span> kg<br />
 Poids idéal (formule de Lorentz) = <span class="rosegrasspan">$PIL</span> kg<br />
Objectif personnel = <span class="rosegrasspan">$obj</span> kg
</p>
<div class="float50">
  <div class="ocm-bl4">Poids moyen à atteindre</div>
  <div class="ocm-circle"><br><span class="ocm-res14r">$pmaa</span><br><span class="result14p">Kg</span></div>
</div>
<div class="float50">
    <div class="ocm-bl4">$textp</div>
	<div class="ocm-circle"><br><span class="ocm-res14r">$vakap</span><br><span class="result14p">Kg</span></div>
</div>
<div class="clear-zero">&nbsp;</div>
</div>
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-bilan-t2.png">
</div>
<div class="ocm-bl1">
<div class="clear">
<div class="centrage"><span class="rosep">Quel objectif et comment le concrétiser?</span></div>
</div>
$texto1
<div class="clear-zero">&nbsp;</div>
$lienb
<img src="/wp-content/uploads/ligne-objectif-final.png">
</div>
EOT;
}

   $codehtml .= <<<EOT
<div class="clear-zero">&nbsp;</div>
EOT;


return $codehtml;
}
add_shortcode( 'calculetteoutbilmuscleexo', 'calculette_outil_bilan_exos' );

//Calculette programme exercices
function outils_progexos($url) {
extract( shortcode_atts( array(
      'url'     => '',
   ), $url, 'outilsprogrammeexercices' ) );
   
   
    $sexe=$_POST['sexe'];   
   $age=$_POST['age'];
   $taille=$_POST['taille'];
	$taille = preg_replace('*,*','.',$taille);
   $poids=$_POST['poids'];
	$poids = preg_replace('*,*','.',$poids);
   $act=$_POST['act'];
if ($sexe==1) {$hek1="checked ";}
else {$hek2="checked ";}  

$obj=$_POST['obj'];
	$obj = preg_replace('*,*','.',$obj);   
   
   
   
				$nature = $_POST['nature'];
   				$poit = $_POST['poit'];		
if ($nature==1) {$check1="checked ";}
				else if ($nature==2) {$check2="checked ";}
				else if ($nature==3) {$check3="checked ";}
				else if ($nature==4) {$check4="checked ";}
				else if ($nature==5) {$check5="checked ";}
if ($poit==8) {$check8="checked ";}
				else if ($poit==9) {$check9="checked ";}

if ($nature==1)
 {$morpho="A";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
&nbsp;<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOTRE MORPHOLOGIE EST EN A </b></h3>
<div class="menuimage">
<a href="/morphologie-et-silhouette-type-femme/en-a-pyramide-triangle-ou-poire/"><img src="/wp-content/uploads/conseils-morphologie-silhouette-en-a-ou-triangle-pyramide.gif" alt="Conseils silhouette et morphologie en A pyramide, triangle ou poire"  title="Conseils silhouette et morphologie en A pyramide, triangle ou poire" class="aligncenter size-full wp-image-16575" height="140" width="50"></a>
&nbsp;
<h3 style="text-align: center;"><span style="color: #000000;">"Nos conseils relooking pour la morpho en A !"</span></h3> 
  <p style="text-align: center;"><span style="color: #000000;"><em>"Si vous pensez avoir du poids à perdre, poursuivez l'analyse ci-dessous !"</em> </span></p>
 <img class="aligncenter" src="/wp-content/uploads/ligne-outil.png"/>

 <div class="clear"></div>
 <div class="d-morpho4"><a href="/morphologie-et-silhouette-type-femme/comment-s-habiller/quels-vetements-choisir-et-porter-quand-on-est-en-a-pyramide-triangle-ou-poire/"><span class="police-resultat-bilan">Vêtements</span><br><img src="/wp-content/uploads/morpho-vetement-resultat2.png" alt="Comment s'habiller et quels vêtements porter ?" title="Comment s'habiller et quels vêtements porter ?" height="60" width="60">
</a></div>
<div class="d-morpho4"><a href="/morphologie-et-silhouette-type-femme/comment-s-habiller/quels-vetements-choisir-et-porter-quand-on-est-en-a-pyramide-triangle-ou-poire/"><span class="police-resultat-bilan">Exercices</span><br><img src="/wp-content/uploads/morpho-exercice-resultat2.png" alt="Quels exercices et quels sports ?" title="Quels exercices et quels sports ?" height="60" width="60">
</a></div>
<div class="d-morpho4"><a href="/morphologie-et-silhouette-type-femme/comment-s-habiller/quels-vetements-choisir-et-porter-quand-on-est-en-a-pyramide-triangle-ou-poire/"><span class="police-resultat-bilan">Minceur</span><br><img src="/wp-content/uploads/morpho-conseil-minceur-resultat2.png" alt="Conseils minceur : Comment maigrir ?" title="Conseils minceur : Comment maigrir ?" height="60" width="60">
</a></div></div>
<div class="clear">&nbsp;</div></div>
EOT;
}
else if ($nature==3)
 {$morpho="O";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOTRE MORPHOLOGIE EST EN O </b></h3>
<div class="menuimage">
<a href="/morphologie-et-silhouette-type-femme/en-rond-o-ou-pomme/"><img src="/wp-content/uploads/conseils-morphologie-silhouette-en-o-ronde.gif" alt="Conseils silhouette et morphologie en O ronde ou pomme"  title="Conseils silhouette et morphologie en O ronde ou pomme" class="aligncenter size-full wp-image-16575" height="140" width="50"></a>
&nbsp;
<h3 style="text-align: center;"><span style="color: #000000;">"Nos conseils relooking pour la morpho en O !"</span></h3> 
  <p style="text-align: center;"><span style="color: #000000;"><em>"Si vous pensez avoir du poids à perdre, poursuivez l'analyse ci-dessous !"</em> </span></p>
 <img class="aligncenter" src="/wp-content/uploads/ligne-outil.png"/>

 <div class="clear"></div>
 <div class="d-morpho4"><a href="/morphologie-et-silhouette-type-femme/comment-s-habiller/quels-vetements-choisir-et-porter-quand-on-est-en-o-ronde-ou-pomme/"><span class="police-resultat-bilan">Vêtements</span><br><img src="/wp-content/uploads/morpho-vetement-resultat2.png" alt="Comment s'habiller et quels vêtements porter ?" title="Comment s'habiller et quels vêtements porter ?" height="60" width="60">
</a></div>
<div class="d-morpho4"><a href="/morphologie-et-silhouette-type-femme/quels-exercices-et-quels-sports-selon-sa-morphologie/quand-on-est-en-o-ronde-ou-pomme/"><span class="police-resultat-bilan">Exercices</span><br><img src="/wp-content/uploads/morpho-exercice-resultat2.png" alt="Quels exercices et quels sports ?" title="Quels exercices et quels sports ?" height="60" width="60">
</a></div>
<div class="d-morpho4"><a href="/morphologie-et-silhouette-type-femme/conseils-minceur-comment-maigrir-selon-sa-morphologie/quand-on-est-en-o-ronde-ou-pomme/"><span class="police-resultat-bilan">Minceur</span><br><img src="/wp-content/uploads/morpho-conseil-minceur-resultat2.png" alt="Conseils minceur : Comment maigrir ?" title="Conseils minceur : Comment maigrir ?" height="60" width="60">
</a></div></div>
<div class="clear">&nbsp;</div></div>	
EOT;
}
else if ($nature==4)
 {$morpho="V";
  	$texte = <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-1.png">
</div>
<div class="ocm-morpho2"><h3 style="text-align: center;"><b>VOTRE MORPHOLOGIE EST EN V </b></h3>
<div class="menuimage">
<a href="/morphologie-et-silhouette-type-femme/en-v-pyramide-inversee-ou-triangle-inverse/"><img src="/wp-content/uploads/conseils-morphologie-silhouette-en-v-ou-triangle-pyramide-inverse.gif" alt="Conseils silhouette et morphologie en V, pyramide inversée ou triangle inversé"  title="Conseils silhouette et morphologie en V, pyramide inversée ou triangle inversé" class="aligncenter size-full wp-image-16575" height="140" width="50"></a>
&nbsp;
<h3 style="text-align: center;"><span style="color: #000000;">"Nos conseils relooking pour la morpho en V !"</span></h3> 
  <p style="text-align: center;"><span style="color: #000000;"><em>"Si vous pensez avoir du poids à perdre, poursuivez l'analyse ci-dessous !"</em> </span></p>
 <img class="aligncenter" src="/wp-content/uploads/ligne-outil.png"/>

 <div class="clear"></div>
 <div class="d-morpho4"><a href="/morphologie-et-silhouette-type-femme/comment-s-habiller/quels-vetements-choisir-et-porter-quand-on-est-en-v-pyramide-inversee-ou-triangle-inverse/"><span class="police-resultat-bilan">Vêtements</span><br><img src="/wp-content/uploads/morpho-vetement-resultat2.png" alt="Comment s'habiller et quels vêtements porter ?" title="Comment s'habiller et quels vêtements porter ?" height="60" width="60">
</a></div>
<div class="d-morpho4"><a href="/morphologie-et-silhouette-type-femme/quels-exercices-et-quels-sports-selon-sa-morphologie/quand-on-est-en-v-pyramide-inversee-ou-triangle-inverse/"><span class="police-resultat-bilan">Exercices</span><br><img src="/wp-content/uploads/morpho-exercice-resultat2.png" alt="Quels exercices et quels sports ?" title="Quels exercices et quels sports ?" height="60" width="60">
</a></div>
<div class="d-morpho4"><a href="/morphologie-et-silhouette-type-femme/conseils-minceur-comment-maigrir-selon-sa-morphologie/quand-on-est-en-v-pyramide-inversee-ou-triangle-inverse/"><span class="police-resultat-bilan">Minceur</span><br><img src="/wp-content/uploads/morpho-conseil-minceur-resultat2.png" alt="Conseils minceur : Comment maigrir ?" title="Conseils minceur : Comment maigrir ?" height="60" width="60">
</a></div></div>
<div class="clear">&nbsp;</div></div>	
EOT;
}






	$codehtml .= <<<EOT
<div class="bloc-morpho-gl">
<form name="morphoaform" class="form-type1" method="post" action="$url">
<img src="/wp-content/uploads/outil-programme-exos.png" alt="Test morpho femme" title="Test morpho femme" class="aligncenter size-full wp-image-16781" height="200" width="600">

<div class="bloc-morpho-blanc">
<h3>QUESTION<span class="rosespan"> 1</span>/1 <span class="rosespan"> </span></h3>
<div id="ancrenewmorpho">&nbsp;</div>

<h4><span class="rosespan">Quel est votre niveau ? </span></h4>
</div>
<p class="centrage"><input id="oui1" type="radio" name="poit" value="8" $check8/><label for="oui1"> Débutant</label>&nbsp; &nbsp;
<input id="non1" type="radio" name="poit" value="9" $check9/><label for="non1"> Intermédiare</label>&nbsp; &nbsp;
<input id="non1" type="radio" name="poit" value="9" $check9/><label for="non1"> Avancé</label>
</p>

<p class="centrage"><input name="valider" value="VALIDER" type="submit"></p><br>
</div>	
</form>
EOT;
if (isset($_POST['valider'])) {
	   $codehtml .= <<<EOT
$texte

<div class="ocm-bl1">
<span class="outil-action-rose">V</span><span class="outil-action-noir">ous souhaitez maigrir ? Poursuivez l'analyse !</span>
<form name="anaform" class="ocm-form" method="post" action="#analyse">
<span class="rosep">Vous êtes</span>
<ul class="ul_calc"> 
<li><input id="femme" name="sexe" value="2" type="radio" $hek2/><label for="femme">Une femme</label></li> 
<li><input id="homme" name="sexe" value="1" type="radio" $hek1/><label for="homme">Un homme</label></li></ul>
<div class="clear">
<div class="ocm-col3"><span class="rosep">Votre âge</span><br><input name="age" class="ocm-input1" value="$age" type="text"></div>
<div class="ocm-col3"><span class="rosep">Votre taille (cm)</span><br><input name="taille" class="ocm-input1" value="$taille" type="text"></div>
<div class="ocm-col3"><span class="rosep">Votre poids (KG)</span><br><input name="poids" class="ocm-input1" value="$poids" type="text"></div>
</div>
<div class="clear">
<div class="centrage"><span class="rosep">Quel est votre objectif de poids? (en KG)</span><br><input name="obj" class="ocm-input1" value="$obj" type="text"></div></div>
<div class="clear">
<input type="hidden" name="poit" value="$poit" />
<input type="hidden" name="nature" value="$nature" />
<input type="hidden" name="valider" value="CALCULER" />
<div id="analyse" class="centrage"><br />&nbsp;
<input name="valider2" value="CALCULER" type="submit">
</div> </div>


</form>
<div class="clear-zero">&nbsp;</div>
</div>

EOT;
}



if (isset($_POST['valider2'])) {
 $IMC=($poids/(($taille/100)*($taille/100)));
   $IMC=round($IMC,1);
      if ($IMC<18.5) {
   $STATUT= "maigreur";
   $IMAGE="imc-statut-maigreur.png";
   }
   else if ($IMC<25) {
   $STATUT= "corpulence normale";
   $IMAGE="imc-statut-normal.png";
   }
   else if ($IMC<30) {
   $STATUT= "surpoids";
   $IMAGE="imc-statut-suroids.png";
   } 
   else {
   $STATUT= "obèsité";
   $IMAGE="imc-statut-obesite.png";
   }
   
      if ($sexe=="2") {$PIL=($taille-100-(($taille-150)/2.5));}
   else if ($sexe=="1") {$PIL=($taille-100-(($taille-150)/4));}
$PIL=round($PIL,1);
   
   $pmaa = (($obj+$PIL)/2);
   $kap = ($poids-$pmaa);
   $vakap = abs($kap);
   
       if ($kap>0) {$textp="Poids moyen à perdre";}
   else if ($kap<0) {$textp="Poids moyen à gagner";}
   else {$textp="Vous êtes à l'équilibre";} 
   
       if ($kap<0.1) {$texto1="Vous n'avez pas de poids à perdre. Félicitations.";
   $lienb="<div class=\"ocm-liena\"><a href=\"/categorie-produit/coffret-minceur-box-de-regime/\">VOIR TOUS NOS PROGRAMMES</a></div>";	   
	   }
   else if ($kap<1) {$texto1="Vous êtes presque à votre poids d'équilibre. Vous pouvez perdre ce léger superflus en découvrant notre programme.";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-s-a-3-kg-14-jours/\">VOIR MON PROGRAMME</a></div>";
   }	   
   else if ($kap<3) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">2  semaines!</span>";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-s-a-3-kg-14-jours/\">VOIR MON PROGRAMME</a></div>";
   }
   else if ($kap<6) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">4  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-m-3-a-6-kg-28-jours/\">VOIR MON PROGRAMME</a></div>";}
   else if ($kap<9) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">6  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-l-6-a-9-kg-42-jours/\">VOIR MON PROGRAMME</a></div>";}
   else if ($kap<12) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">10  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xl-9-a-12-kg-56-jours/\">VOIR MON PROGRAMME</a></div>";}
    else if ($kap<15) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">10  semaines!</span>";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xxl-12-a-15-kg-70-jours/\">VOIR MON PROGRAMME</a></div>";}
   else {$texto1="En étant raisonnable vous pouvez vous fixer un objectif d'environ <span class=\"rosep\">15 kg</span> et l'atteindre au bout de <span class=\"rosep\">10 semaines!</span>";
     $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xxl-12-a-15-kg-70-jours/\">VOIR MON PROGRAMME</a></div>";} 
   
   $codehtml .= <<<EOT
<div class="ocm-noir"><img src="/wp-content/uploads/outil-morpho-2.png">
</div>
<div class="ocm-bl3">
<div class="ocm-blancg">Votre Indice de Masse Corporelle</div>
<p>IMC = <span class="rosegrasspan">$IMC</span><br />
Statut = <span class="rosegrasspan">$STATUT</span></p>
 <img class="aligncenter" src="/wp-content/uploads/$IMAGE"> 
<div class="ocm-blancg">Vos indicateurs de poids</div>
 <p>
  Votre poids actuel = <span class="rosegrasspan">$poids</span> kg<br />
 Poids idéal (formule de Lorentz) = <span class="rosegrasspan">$PIL</span> kg<br />
Objectif personnel = <span class="rosegrasspan">$obj</span> kg
</p>
<div class="float50">
  <div class="ocm-bl4">Poids moyen à atteindre</div>
  <div class="ocm-circle"><br><span class="ocm-res14r">$pmaa</span><br><span class="result14p">Kg</span></div>
</div>
<div class="float50">
    <div class="ocm-bl4">$textp</div>
	<div class="ocm-circle"><br><span class="ocm-res14r">$vakap</span><br><span class="result14p">Kg</span></div>
</div>
<div class="clear-zero">&nbsp;</div>
</div>
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-morpho-3.png">
</div>
<div class="ocm-bl1">
<div class="clear">
<div class="centrage"><span class="rosep">Quel objectif et comment le concrétiser?</span></div>
</div>
$texto1
<div class="clear-zero">&nbsp;</div>
$lienb
<img src="/wp-content/uploads/ligne-objectif-final.png">
</div>
EOT;
}



	   $codehtml .= <<<EOT
<div class="clear-zero">&nbsp;</div>
EOT;



return $codehtml;
}
add_shortcode( 'programmeexercices', 'outils_progexos' );


//Outils muscles par exercices

function calculette_exercice_muscle($atts) {
extract( shortcode_atts( array(
      'url'     => '',
	  'exercice'     => '',
   ), $atts, 'calculettexercicemuscle' ) );
   
  
   $sexe=$_POST['sexe'];   
   $age=$_POST['age'];
   $taille=$_POST['taille'];
	$taille = preg_replace('*,*','.',$taille);
   $poids=$_POST['poids'];
	$poids = preg_replace('*,*','.',$poids);
   $act=$_POST['act'];
if ($sexe==1) {$hek1="checked ";}
else {$hek2="checked ";}

$obj=$_POST['obj'];
	$obj = preg_replace('*,*','.',$obj);
	
	if (isset($_POST['exercice'])) {$exercice=$_POST['exercice'];}
	else {$exercice=$exercice;} 	
	
   $codehtml = <<<EOT
<div id="resultat1"> </div>
			<div class="ocm-titre1">Outil : Quelle exercice pour quelle zone du corps ?</div>   
			<div class="ocm-bl1">

<form name="imcform" class="ocm-form" method="post" action="#besoin">

<div class="clear">
<em>En sélectionnant une activité sportive de votre choix, cet outil RegiVia vous permettra de visionner les différentes parties et zones du corps travaillées et musclées pendant vos entrainements.</em><br />&nbsp;<br />
<div id="besoin"><span class="rosep">Votre exercice</span>&nbsp;</div>
<select name="exercice">
<option value="$exercice">$exercice</option>
<option value="Gainage">Gainage</option>
<option value="Dips">Dips</option>
<option value="Crunches">Crunches</option> 


</select>&nbsp;<br>&nbsp;<br>
</div>

<div class="centrage">
<input name="valider" value="VOIR LES ZONES !" type="submit">
</div>  
</form>
<div class="clear-zero">&nbsp;</div>
</div>
EOT;
if (isset($_POST['valider'])) {


if ($exercice=="Gainage") {$PICTOS="R-R-B-B-R-R-R";$imgmuscle="muscles-sollicites-en-faisant-l-aerobic.png";}
	else if ($exercice=="Dips") {$PICTOS="R-R-B-R-B-R-R";$imgmuscle="muscles-sollicites-en-faisant-l-aikido.png";}
	else if ($exercice=="Crunches") {$PICTOS="B-B-B-R-R-R-R";$imgmuscle="muscles-sollicites-en-faisant-l-aquabiking.png";}
	

	
	$imgmuscle = "/wp-content/uploads/muscles/".$imgmuscle;
	$lipictos = explode("-", $PICTOS);
	$libras = "liocmb17".$lipictos[0];
	$liepaule = "liocmb17".$lipictos[1];
	$lipoitrine = "liocmb17".$lipictos[2];
	$liabdos = "liocmb17".$lipictos[3];
	$lidos = "liocmb17".$lipictos[4];
	$lifessiers = "liocmb17".$lipictos[5];
	$lijambes = "liocmb17".$lipictos[6];
	

   $codehtml .= <<<EOT
<div class="ocm-noir">
<img src="/wp-content/uploads/outils-zones-muscles-1.png">
</div>
<div class="ocm-b17">
<div class="clear-zero">&nbsp;</div>
&nbsp;
<div style="text-align: center;"> 
<h3 style="text-align: center;"><b><span style="color: #ffffff;"> $exercice : Les zones du corps sollicitées ! </span></b></h3>
<p style="text-align: center;"><span style="color: #ffffff;""><em>"Les zones en rose représentent les principales régions du corps travaillées"</em></span></p>
<img style="text-align: center;" src="/wp-content/uploads/ligne-outil.png"/>
</div> 
<div class="demiocm-b17"><img src="$imgmuscle" alt="muscles sollicités pour $exercice"></div>
<div class="demiocm-b17">
&nbsp;
&nbsp;
<ul class="$libras"><li>Bras</li></ul>
<ul class="$liepaule"><li>Epaule</li></ul>
<ul class="$lipoitrine"><li>Poitrine</li></ul>
<ul class="$liabdos"><li>Abdos</li></ul>
<ul class="$lidos"><li>Dos</li></ul>
<ul class="$lifessiers"><li>Fessiers</li></ul>
<ul class="$lijambes"><li>Jambes</li></ul>

</div>
<div class="clear-zero">&nbsp;</div>
</div>


<div class="ocm-bl1">
<span class="outil-action-rose">V</span><span class="outil-action-noir">ous souhaitez maigrir en faisant des exercices ? Poursuivez l'analyse !</span>
<form name="anaform" class="ocm-form" method="post" action="#analyse">
<span class="rosep">Vous êtes</span>
<ul class="ul_calc"> 
<li><input id="femme" name="sexe" value="2" type="radio" $hek2/><label for="femme">Une femme</label></li> 
<li><input id="homme" name="sexe" value="1" type="radio" $hek1/><label for="homme">Un homme</label></li></ul>
<div class="clear">
<div class="ocm-col3"><span class="rosep">Votre âge</span><br><input name="age" class="ocm-input1" value="$age" type="text"></div>
<div class="ocm-col3"><span class="rosep">Votre taille (cm)</span><br><input name="taille" class="ocm-input1" value="$taille" type="text"></div>
<div class="ocm-col3"><span class="rosep">Votre poids (KG)</span><br><input name="poids" class="ocm-input1" value="$poids" type="text"></div>
</div>
<div class="clear">
<div class="centrage"><span class="rosep">Quel est votre objectif de poids? (en KG)</span><br><input name="obj" class="ocm-input1" value="$obj" type="text"></div></div>
<div class="clear">
<input type="hidden" name="exercice" value="$exercice" />
<input type="hidden" name="valider" value="CALCULER" />
<div id="analyse" class="centrage"><br />&nbsp;
<input name="valider2" value="CALCULER" type="submit">
</div> </div>


</form>
<div class="clear-zero">&nbsp;</div>
</div>
EOT;
}

if (isset($_POST['valider2'])) {
 $IMC=($poids/(($taille/100)*($taille/100)));
   $IMC=round($IMC,1);
      if ($IMC<18.5) {
   $STATUT= "maigreur";
   $IMAGE="imc-statut-maigreur.png";
   }
   else if ($IMC<25) {
   $STATUT= "corpulence normale";
   $IMAGE="imc-statut-normal.png";
   }
   else if ($IMC<30) {
   $STATUT= "surpoids";
   $IMAGE="imc-statut-suroids.png";
   } 
   else {
   $STATUT= "obèsité";
   $IMAGE="imc-statut-obesite.png";
   }
   
      if ($sexe=="2") {$PIL=($taille-100-(($taille-150)/2.5));}
   else if ($sexe=="1") {$PIL=($taille-100-(($taille-150)/4));}
$PIL=round($PIL,1);
   
   $pmaa = (($obj+$PIL)/2);
   $kap = ($poids-$pmaa);
   $vakap = abs($kap);
   
       if ($kap>0) {$textp="Poids moyen à perdre";}
   else if ($kap<0) {$textp="Poids moyen à gagner";}
   else {$textp="Vous êtes à l'équilibre";} 
   
       if ($kap<0.1) {$texto1="Vous n'avez pas de poids à perdre. Félicitations.";
   $lienb="<div class=\"ocm-liena\"><a href=\"/categorie-produit/coffret-minceur-box-de-regime/\">VOIR TOUS NOS PROGRAMMES</a></div>";	   
	   }
   else if ($kap<1) {$texto1="Vous êtes presque à votre poids d'équilibre. Vous pouvez perdre ce léger superflus en découvrant notre programme.";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-s-a-3-kg-14-jours/\">VOIR MON PROGRAMME</a></div>";
   }	   
   else if ($kap<3) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">2  semaines!</span>";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-s-a-3-kg-14-jours/\">VOIR MON PROGRAMME</a></div>";
   }
   else if ($kap<6) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">4  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-m-3-a-6-kg-28-jours/\">VOIR MON PROGRAMME</a></div>";}
   else if ($kap<9) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">6  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-l-6-a-9-kg-42-jours/\">VOIR MON PROGRAMME</a></div>";}
   else if ($kap<12) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">10  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xl-9-a-12-kg-56-jours/\">VOIR MON PROGRAMME</a></div>";}
    else if ($kap<15) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">10  semaines!</span>";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xxl-12-a-15-kg-70-jours/\">VOIR MON PROGRAMME</a></div>";}
   else {$texto1="En étant raisonnable vous pouvez vous fixer un objectif d'environ <span class=\"rosep\">15 kg</span> et l'atteindre au bout de <span class=\"rosep\">10 semaines!</span>";
     $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xxl-12-a-15-kg-70-jours/\">VOIR MON PROGRAMME</a></div>";} 
   
   $codehtml .= <<<EOT
<div class="ocm-noir"><img src="/wp-content/uploads/outils-zones-muscles-2.png">
</div>
<div class="ocm-bl3">
<div class="ocm-blancg">Votre Indice de Masse Corporelle</div>
<p>IMC = <span class="rosegrasspan">$IMC</span><br />
Statut = <span class="rosegrasspan">$STATUT</span></p>
 <img class="aligncenter" src="/wp-content/uploads/$IMAGE"> 
<div class="ocm-blancg">Vos indicateurs de poids</div>
 <p>
  Votre poids actuel = <span class="rosegrasspan">$poids</span> kg<br />
 Poids idéal (formule de Lorentz) = <span class="rosegrasspan">$PIL</span> kg<br />
Objectif personnel = <span class="rosegrasspan">$obj</span> kg
</p>
<div class="float50">
  <div class="ocm-bl4">Poids moyen à atteindre</div>
  <div class="ocm-circle"><br><span class="ocm-res14r">$pmaa</span><br><span class="result14p">Kg</span></div>
</div>
<div class="float50">
    <div class="ocm-bl4">$textp</div>
	<div class="ocm-circle"><br><span class="ocm-res14r">$vakap</span><br><span class="result14p">Kg</span></div>
</div>
<div class="clear-zero">&nbsp;</div>
</div>
<div class="ocm-noir">
<img src="/wp-content/uploads/outils-zones-muscles-3.png">
</div>
<div class="ocm-bl1">
<div class="clear">
<div class="centrage"><span class="rosep">Quel objectif et comment le concrétiser?</span></div>
</div>
$texto1
<div class="clear-zero">&nbsp;</div>
$lienb
<img src="/wp-content/uploads/ligne-objectif-final.png">
</div>
EOT;
}

   $codehtml .= <<<EOT
<div class="clear-zero">&nbsp;</div>
EOT;


return $codehtml;
}
add_shortcode( 'calculettexercicemuscle', 'calculette_exercice_muscle' );



//Calculette outil bilan refonte

function calculette_outil_bilanrefmona($atts) {
extract( shortcode_atts( array(
      'url'     => '',
   ), $atts, 'calculetteoutbilrefmona' ) );
   $sexe=$_POST['sexe'];   
   $age=$_POST['age'];
   $taille=$_POST['taille'];
	$taille = preg_replace('*,*','.',$taille);
   $poids=$_POST['poids'];
	$poids = preg_replace('*,*','.',$poids);
	$obj=$_POST['obj'];
	$obj = preg_replace('*,*','.',$obj);
   $act=$_POST['act'];
if ($sexe==1) {$hek1="checked ";}
else {$hek2="checked ";}
$obj=$_POST['obj'];
	$obj = preg_replace('*,*','.',$obj);
   $codehtml = <<<EOT
<div id="resultat1"> </div>
			 
			<div class="ocm-testbilanmoni">
			&nbsp;
			<h2 style="text-align: center;"><b>Faites votre bilan </b></h2>  
			
<form name="imcform" class="ocm-form" method="post" action="#besoin">
	&nbsp;
	<div style="text-align: center;">
<span class="rosep">Vous êtes</span>
&nbsp;
<ul class="ul_calc"> 
<li style="text-align: center;"><input id="femme" name="sexe" value="2" type="radio" $hek2/><label for="femme">Une femme</label></li> 

<li style="text-align: center;"><input id="homme" name="sexe" value="1" type="radio" $hek1/><label for="homme">Un homme</label></li></ul></div>

&nbsp;
<div class="clear">

<div class="ocm-col3">Votre âge<br><input name="age" class="ocm-input1" value="$age" type="text"></div>
<div class="ocm-col3">Votre taille (cm)<br><input name="taille" class="ocm-input1" value="$taille" type="text"></div>
<div class="ocm-col3">Votre poids (KG)<br><input name="poids" class="ocm-input1" value="$poids" type="text"></div>
</div>
<div class="clear">
&nbsp;
&nbsp;
<div class="centrage"><span class="rosep">Quel est votre objectif de poids? (en KG)</span><br>&nbsp;
<input name="obj" class="ocm-input1" value="$obj" type="text"></div></div>

<div class="clear"><div id="besoin" class="centrage"><br/>
&nbsp;	
<input name="valider" value="CALCULER" type="submit">

</div> </div>
	&nbsp;&nbsp;
</form>
<div class="clear-zero">&nbsp;</div>
</div>
EOT;



if (isset($_POST['valider'])) {
 $IMC=($poids/(($taille/100)*($taille/100)));
   $IMC=round($IMC,1);
      if ($IMC<18.5) {
   $STATUT= "maigreur";
   $IMAGE="imc-statut-maigreur.png";
   }
   else if ($IMC<25) {
   $STATUT= "corpulence normale";
   $IMAGE="imc-statut-normal.png";
   }
   else if ($IMC<30) {
   $STATUT= "surpoids";
   $IMAGE="imc-statut-suroids.png";
   } 
   else {
   $STATUT= "obèsité";
   $IMAGE="imc-statut-obesite.png";
   }
   
      if ($sexe=="2") {$PIL=($taille-100-(($taille-150)/2.5));}
   else if ($sexe=="1") {$PIL=($taille-100-(($taille-150)/4));}
$PIL=round($PIL,1);
   
   $pmaa = (($obj+$PIL)/2);
   $kap = ($poids-$pmaa);
   $vakap = abs($kap);
   
       if ($kap>0) {$textp="Poids moyen à perdre";}
   else if ($kap<0) {$textp="Poids moyen à gagner";}
   else {$textp="Vous êtes à l'équilibre";} 
   
       if ($kap<0.1) {$texto1="Vous n'avez pas de poids à perdre. Félicitations.";
   $lienb="<div class=\"ocm-liena\"><a href=\"/categorie-produit/coffret-minceur-box-de-regime/\">VOIR TOUS NOS PROGRAMMES</a></div>";	   
	   }
   else if ($kap<1) {$texto1="Vous êtes presque à votre poids d'équilibre. Vous pouvez perdre ce léger superflus en découvrant notre programme.";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-s-a-3-kg-14-jours/\">VOIR MON PROGRAMME</a></div>";
   }	   
   else if ($kap<3) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">2  semaines!</span>";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-s-a-3-kg-14-jours/\">VOIR MON PROGRAMME</a></div>";
   }
   else if ($kap<6) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">4  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-m-3-a-6-kg-28-jours/\">VOIR MON PROGRAMME</a></div>";}
   else if ($kap<9) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">6  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-l-6-a-9-kg-42-jours/\">VOIR MON PROGRAMME</a></div>";}
   else if ($kap<12) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">10  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xl-9-a-12-kg-56-jours/\">VOIR MON PROGRAMME</a></div>";}
    else if ($kap<15) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">10  semaines!</span>";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xxl-12-a-15-kg-70-jours/\">VOIR MON PROGRAMME</a></div>";}
   else {$texto1="En étant raisonnable vous pouvez vous fixer un objectif d'environ <span class=\"rosep\">15 kg</span> et l'atteindre au bout de <span class=\"rosep\">10 semaines!</span>";
     $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xxl-12-a-15-kg-70-jours/\">VOIR MON PROGRAMME</a></div>";} 
   
   $codehtml .= <<<EOT
<div class="ocm-noir"><img src="/wp-content/uploads/outil-bilan-t1.png">
</div>
<div class="ocm-bl3">
<div class="ocm-blancg">Votre Indice de Masse Corporelle</div>
<p>IMC = <span class="rosegrasspan">$IMC</span><br />
Statut = <span class="rosegrasspan">$STATUT</span></p>
 <img class="aligncenter" src="/wp-content/uploads/$IMAGE"> 
<div class="ocm-blancg">Vos indicateurs de poids</div>
 <p>
  Votre poids actuel = <span class="rosegrasspan">$poids</span> kg<br />
 Poids idéal (formule de Lorentz) = <span class="rosegrasspan">$PIL</span> kg<br />
Objectif personnel = <span class="rosegrasspan">$obj</span> kg
</p>
<div class="float50">
  <div class="ocm-bl4">Poids moyen à atteindre</div>
  <div class="ocm-circle"><br><span class="ocm-res14r">$pmaa</span><br><span class="result14p">Kg</span></div>
</div>
<div class="float50">
    <div class="ocm-bl4">$textp</div>
	<div class="ocm-circle"><br><span class="ocm-res14r">$vakap</span><br><span class="result14p">Kg</span></div>
</div>
<div class="clear-zero">&nbsp;</div>
</div>
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-bilan-t2.png">
</div>
<div class="ocm-bl1">
<div class="clear">
<div class="centrage"><span class="rosep">Quel objectif et comment le concrétiser?</span></div>
</div>
$texto1
<div class="clear-zero">&nbsp;</div>
$lienb
<img src="/wp-content/uploads/ligne-objectif-final.png">
</div>
EOT;
}

   $codehtml .= <<<EOT
<div class="clear-zero">&nbsp;</div>
EOT;


return $codehtml;
}
add_shortcode( 'calculetteoutbilrefmona', 'calculette_outil_bilanrefmona' );






//Calculette outil bilan2 xavier

function calculette_outil_bilanxav($atts) {
extract( shortcode_atts( array(
      'url'     => '',
   ), $atts, 'calculetteoutbilxav' ) );
   $sexe=$_POST['sexe'];   
   $age=$_POST['age'];
   $taille=$_POST['taille'];
	$taille = preg_replace('*,*','.',$taille);
   $poids=$_POST['poids'];
	$poids = preg_replace('*,*','.',$poids);
	$obj=$_POST['obj'];
	$obj = preg_replace('*,*','.',$obj);
   $act=$_POST['act'];
if ($sexe==1) {$hek1="checked ";}
else {$hek2="checked ";}
$obj=$_POST['obj'];
	$obj = preg_replace('*,*','.',$obj);
   $codehtml = <<<EOT
<div id="resultat1"> </div>
  
			<div class="ocm-entourage">
			
<form name="imcform" class="ocm-form" method="post" action="#besoin">
<span class="rosep">Vous êtes</span>
<ul class="ul_calc"> 
<li><input id="femme" name="sexe" value="2" type="radio" $hek2/><label for="femme">Une femme</label></li> 
<li><input id="homme" name="sexe" value="1" type="radio" $hek1/><label for="homme">Un homme</label></li></ul>
<div class="clear">
<div class="ocm-col3"><span class="rosep">&Acirc;ge</span><br><input name="age" class="ocm-inputmens" value="$age" type="text"></div>
<div class="ocm-col3"><span class="rosep">Taille (cm)</span><br><input name="taille" class="ocm-inputmens" value="$taille" type="text"></div>
<div class="ocm-col3"><span class="rosep">Poids (KG)</span><br><input name="poids" class="ocm-inputmens" value="$poids" type="text"></div>
</div>
<div class="clear">
<div class="centrage"><span class="rosep">Quel est votre objectif de poids? (en KG)</span><br><input name="obj" class="ocm-input1" value="$obj" type="text"></div></div>
<div class="clear"><div id="besoin" class="centrage"><br />&nbsp;
<input name="valider" value="CALCULER" type="submit">
</div> </div>
</form>
<div class="clear-zero">&nbsp;</div>
</div>
EOT;



if (isset($_POST['valider'])) {
 $IMC=($poids/(($taille/100)*($taille/100)));
   $IMC=round($IMC,1);
      if ($IMC<18.5) {
   $STATUT= "maigreur";
   $IMAGE="imc-statut-maigreur.png";
   }
   else if ($IMC<25) {
   $STATUT= "corpulence normale";
   $IMAGE="imc-statut-normal.png";
   }
   else if ($IMC<30) {
   $STATUT= "surpoids";
   $IMAGE="imc-statut-suroids.png";
   } 
   else {
   $STATUT= "obèsité";
   $IMAGE="imc-statut-obesite.png";
   }
   
      if ($sexe=="2") {$PIL=($taille-100-(($taille-150)/2.5));}
   else if ($sexe=="1") {$PIL=($taille-100-(($taille-150)/4));}
$PIL=round($PIL,1);
   
   $pmaa = (($obj+$PIL)/2);
   $kap = ($poids-$pmaa);
   $vakap = abs($kap);
   
       if ($kap>0) {$textp="Poids moyen à perdre";}
   else if ($kap<0) {$textp="Poids moyen à gagner";}
   else {$textp="Vous êtes à l'équilibre";} 
   
       if ($kap<0.1) {$texto1="Vous n'avez pas de poids à perdre. Félicitations.";
   $lienb="<div class=\"ocm-liena\"><a href=\"/categorie-produit/coffret-minceur-box-de-regime/\">VOIR TOUS NOS PROGRAMMES</a></div>";	   
	   }
   else if ($kap<1) {$texto1="Vous êtes presque à votre poids d'équilibre. Vous pouvez perdre ce léger superflus en découvrant notre programme.";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-s-a-3-kg-14-jours/\">VOIR MON PROGRAMME</a></div>";
   }	   
   else if ($kap<3) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">2  semaines!</span>";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-s-a-3-kg-14-jours/\">VOIR MON PROGRAMME</a></div>";
   }
   else if ($kap<6) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">4  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-m-3-a-6-kg-28-jours/\">VOIR MON PROGRAMME</a></div>";}
   else if ($kap<9) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">6  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-l-6-a-9-kg-42-jours/\">VOIR MON PROGRAMME</a></div>";}
   else if ($kap<12) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">10  semaines!</span>";
    $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xl-9-a-12-kg-56-jours/\">VOIR MON PROGRAMME</a></div>";}
    else if ($kap<15) {$texto1="En étant raisonnable vous pouvez vous fixer un objectif de <span class=\"rosep\">$kap kg</span> et l'atteindre au bout de <span class=\"rosep\">10  semaines!</span>";
   $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xxl-12-a-15-kg-70-jours/\">VOIR MON PROGRAMME</a></div>";}
   else {$texto1="En étant raisonnable vous pouvez vous fixer un objectif d'environ <span class=\"rosep\">15 kg</span> et l'atteindre au bout de <span class=\"rosep\">10 semaines!</span>";
     $lienb="<div class=\"ocm-liena\"><a href=\"/regivia-regime-proteine/programme-de-regime-proteine-regivia/programme-de-regime-xxl-12-a-15-kg-70-jours/\">VOIR MON PROGRAMME</a></div>";} 
   
   $codehtml .= <<<EOT
<div class="ocm-noir"><img src="/wp-content/uploads/outil-bilan-t1.png">
</div>
<div class="ocm-bl3">
<div class="ocm-blancg">Votre Indice de Masse Corporelle</div>
<p>IMC = <span class="rosegrasspan">$IMC</span><br />
Statut = <span class="rosegrasspan">$STATUT</span></p>
 <img class="aligncenter" src="/wp-content/uploads/$IMAGE"> 
<div class="ocm-blancg">Vos indicateurs de poids</div>
 <p>
  Votre poids actuel = <span class="rosegrasspan">$poids</span> kg<br />
 Poids idéal (formule de Lorentz) = <span class="rosegrasspan">$PIL</span> kg<br />
Objectif personnel = <span class="rosegrasspan">$obj</span> kg
</p>
<div class="float50">
  <div class="ocm-bl4">Poids moyen à atteindre</div>
  <div class="ocm-circle"><br><span class="ocm-res14r">$pmaa</span><br><span class="result14p">Kg</span></div>
</div>
<div class="float50">
    <div class="ocm-bl4">$textp</div>
	<div class="ocm-circle"><br><span class="ocm-res14r">$vakap</span><br><span class="result14p">Kg</span></div>
</div>
<div class="clear-zero">&nbsp;</div>
</div>
<div class="ocm-noir">
<img src="/wp-content/uploads/outil-bilan-t2.png">
</div>
<div class="ocm-bl1">
<div class="clear">
<div class="centrage"><span class="rosep">Quel objectif et comment le concrétiser?</span></div>
</div>
$texto1
<div class="clear-zero">&nbsp;</div>
$lienb
<img src="/wp-content/uploads/ligne-objectif-final.png">
</div>
EOT;
}

   $codehtml .= <<<EOT
<div class="clear-zero">&nbsp;</div>
EOT;


return $codehtml;
}
add_shortcode( 'calculetteoutbilxav', 'calculette_outil_bilanxav' );






// Override ICODIA

function ico_et_modify_shop_page_columns_num( $columns_num ){ return(3);}
add_filter( 'loop_shop_columns', 'ico_et_modify_shop_page_columns_num' );

// Display 24 products per page. Goes in functions.php
add_filter( 'loop_shop_per_page', create_function( '$cols', 'return 30;' ), 20 );

// Supression des noindex du sitemap
add_filter( 'wpseo_exclude_from_sitemap_by_post_ids', function () { return array( 311, 322 ); } );


// FIN Override ICODIA
function et_header_top_function($a){
  if ( is_customize_preview() || ( 'slide' !== et_get_option( 'header_style', 'left' ) && 'fullscreen' !== et_get_option( 'header_style', 'left' ) ) ) {
    printf(
      '<div id="et_mobile_nav_menu">
         <div class="mobile_nav closed">
           <span class="select_page">%1$s</span>
           <span class="mobile_menu_bar mobile_menu_bar_toggle"></span>
         </div>
         <span class="menu_button_mobile only_mobile">Menu</span>
      </div>',
      esc_html__( 'Select Page', 'Divi' )
    );
  }

}
add_action('et_header_top', 'et_header_top_function');
function child_remove_parent_function() {
 remove_action( 'et_header_top', 'et_add_mobile_navigation' );
}
add_action( 'wp_loaded', 'child_remove_parent_function' );

?>
