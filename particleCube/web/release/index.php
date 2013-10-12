<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<!-- HEADER -->
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	<META NAME="keywords" CONTENT="chrisperonegames, free flash games, flash, games, online games, theplant, euphoberia, the plant, pandemic, free games, browser games">
	<META NAME="description" CONTENT="Completly free flash games to play in your browser">
	<link rel = "stylesheet" type = "text/css" href = "style.css" />
	<script src="/javascript/AC_RunActiveContent.js" type="text/javascript"></script>
	<script src="/javascript/functions.js" type="text/javascript"></script>
	<TITLE>Particle Cube</TITLE>
</head>
<body>
<!--TABLE OF CONTENTS-->
<!--MAIN PAGE-->
<?php
echo '<table border="3" width="100%" RULES=NONE FRAME=BOX>';
echo '<tr><td bgcolor="#000000"><h1>';
echo 'NEWS';
echo '</h1></td></tr>';
//Initialize the XML parser
$parser=xml_parser_create();
//Function to use at the start of an element
function start($parser,$element_name,$element_attrs)
{
  switch($element_name)
  {
    case "ARTICLE":
//	echo '<tr><td><table border="2" width="100%" RULES=GROUPS FRAME=BOX>';
	echo '<tr><td valign="middle"><table border="0" width="100%">';
	echo '<thead><td><h2>';
    break; 
    case "DATE":
    break; 
    case "HEADLINE":
    break; 
    case "BODY":
	break;
  }
}
//Function to use at the end of an element
function stop($parser,$element_name)
{
  switch($element_name)
  {
    case "ARTICLE":
    break; 
    case "DATE":
	echo ' - ';	
    break; 
    case "HEADLINE":
	echo '</h2></td></thead>';
	echo '<tbody><td>';
    break; 
    case "BODY":
	echo '</td></tbody>';
	echo '</table></tr></td>';
	break;
  }
}
//Function to use when finding character data
function char($parser,$data)
{
  echo $data;
}
//Specify element handler
xml_set_element_handler($parser,"start","stop");
//Specify data handler
xml_set_character_data_handler($parser,"char");
//Open XML file
$fp=fopen("news.xml","r");
//Read data
while ($data=fread($fp,4096))
  {
  xml_parse($parser,$data,feof($fp)) or 
  die (sprintf("XML Error: %s at line %d", 
  xml_error_string(xml_get_error_code($parser)),
  xml_get_current_line_number($parser)));
  }
//Free the XML parser
xml_parser_free($parser);
echo '</table>';
?>
<!--END OF MAIN PAGE-->
</td></tr>
<!--END OF TABLE FOR MAIN PAGE CONTENTS-->
</table>
</td>
<!--END OF TABLE FOR BODY OF PAGE-->
</table>
<script type="text/javascript">
var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
</script>
<script type="text/javascript">
var pageTracker = _gat._getTracker("UA-4225300-0");
pageTracker._initData();
pageTracker._trackPageview();
</script>
</body>