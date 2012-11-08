	var execpath = "./.exec.php";

	function setButtonAndStatus(res) {
		var arr = res.split("\n");
		// 最後は空行なので-2
		var s = arr[arr.length - 2].search('not') == -1;
		if(s) {
			$("#button_start").attr('disabled', 'true');
			$("#button_stop").removeAttr('disabled');
			$("#button_restart").removeAttr('disabled');
			$("#status").text("サーバは起動しています");
		} else {
			$("#button_start").removeAttr('disabled');
			$("#button_stop").attr('disabled', 'true');
			$("#button_restart").attr('disabled', 'true');
			$("#status").text("サーバは起動していません");
		}
	}
	function GetServerStatus() {
		$.post(execpath, { command: "status" }, function(res) {
			$("#statustime").text(new Date($.now()).toLocaleString());
			setButtonAndStatus(res);
		}, "text");
		
		window.setTimeout("GetServerStatus()", 5000);
	}
	$(function(){
		// Start to get ServerStatus
		GetServerStatus();

		var ajaxWaiting = false;
		$(window).bind("beforeunload", function() {
			console.log(ajaxWaiting);
			if(ajaxWaiting)
				return "現在サーバの操作中です。ページから離れる場合サーバエラーが発生する場合があります。";
		});

		$("#button_start").click(function(e) {
			$("#button_start").attr('disabled', 'true');
			$("#warning").text("現在サーバを起動しています...");
			ajaxWaiting = true;
			$.post(execpath, { command: "start" }, function(res) {
				$("#response").append(res);
				setButtonAndStatus(res);
				$("#warning").text("");
				ajaxWaiting = false;
			});
		});
		$("#button_stop").click(function(e) {
			$("#button_stop").attr('disabled', 'true');
			$("#button_restart").attr('disabled', 'true');
			$("#warning").text("現在サーバを終了しています...");
			ajaxWaiting = true;
			$.post(execpath, { command: "stop" }, function(res) {
				$("#response").append(res);
				setButtonAndStatus(res);
				$("#warning").text("");
				ajaxWaiting = false;
			});
		});
		$("#button_restart").click(function(e) {
			$("#button_stop").attr('disabled', 'true');
			$("#button_restart").attr('disabled', 'true');
			$("#warning").text("現在サーバを終了しています...");
			ajaxWaiting = true;
			$.post(execpath, { command: "stop" }, function(res) {
				$("#response").append(res);
				$("#warning").text("現在サーバを起動しています...");
				$.post(execpath, { command: "start" }, function(res) {
					$("#response").append(res);
					setButtonAndStatus(res);
					$("#warning").text("");
					ajaxWaiting = false;
				});
			});
		});
		$("#button_terminate").click(function(e) {
			$.post(execpath, { command: "terminate" }, function(res) {
				$("#response").append(res);
				setButtonAndStatus(res);
			});
		});
	});
