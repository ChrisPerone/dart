<?php

//NEW TABLE
$link = mysql_connect('particlecubenet.fatcowmysql.com', 'chrisperone', 'harley7'); 
if (!$link) { 
    die('Could not connect: ' . mysql_error()); 
} 
echo 'Connected successfully'; 
mysql_select_db(particlecube); 
//========

//Code for reading comments from the comment database
$url = $_SERVER['SERVER_NAME'].$_SERVER['PHP_SELF'];
$ids = mysql_query("SELECT * FROM id"); // WHERE URL='".$url."' ORDER BY Entry DESC");
if ($ids) {
	$numrows = mysql_num_rows($comments);
	//Check if the user is an admin
	if ((isset($_GET["admin"])) && $_GET["admin"] == "chrisperone") {
		echo '<div class="commenthead">You are logged in as admin ' . $_GET["admin"] . '</div>';
	}
	//Check for error text
	if ((isset($error)) && $error != "none") {
		echo '<div class="commenthead">Error adding comment: ' . $error . '</div>';
	}
	if ($numrows > 0) {
		echo '<table>';
		if ($numrows==1) {
			echo '<th colspan="2">1 Comment - <a class="commenthead" href="#addcomment">Add Comment</a></th>';
		} else {
			echo '<th colspan="2">'.$numrows.' Comments - <a class="commenthead" href="#addcomment">Add Comment</a></th>';
		}
		while ($commentrow = mysql_fetch_array($comments))
		{
			if (strtolower(stripslashes($commentrow['User'])) == "chrisperone") {
				print '<tr><td valign="top"><div class="commentadminhead">'.stripslashes($commentrow['User']).' - '.stripslashes($commentrow['Date']).'</div><div class="comment">'.stripslashes($commentrow['Comment']).'</div><br/></td></tr>';
			} else {
				print '<tr><td valign="top"><div class="commenthead">'.stripslashes($commentrow['User']).' - '.stripslashes($commentrow['Date']).'</div><div class="comment">'.stripslashes($commentrow['Comment']).'</div><br/></td></tr>';
			}
		}
		echo '</div></table>';
	} else {
		echo '<b>No Comment yet, be the first!</b><br/>';
	}
}	
mysql_close($commentdb);
echo '<a name="addcomment"></a>';
echo '<form method="POST" action="">';
	echo '<input type="text" name="User" value="Name" onfocus="if (!this._haschanged) { this.value=\'\'; } this._haschanged=true;"><br/>';
	echo '<textarea name="Comment" cols="40" rows="4" onfocus="if (!this._haschanged) { this.value=\'\'; } this._haschanged=true;">Type comment here.</textarea><br/>';
	if (isset($_GET["admin"])) {
		echo '<input type="hidden" name="admin" value=' . $_GET["admin"] . '>';
	}
	echo '<button type="Submit" id="submit">Submit</button><br/>';
echo '</form>';
?>