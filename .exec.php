<?php
$filepath = './.mcsv.sh ';
exec($filepath.$_POST["command"], $arr);
foreach($arr as $a) {
	echo "$a\n";
}

// status以外は追加でstatusを取得
if($_POST["command"] != "status") {
	exec($filepath."status", $arrstat);
	foreach($arrstat as $a) {
		echo "$a\n";
	}
}
?>
