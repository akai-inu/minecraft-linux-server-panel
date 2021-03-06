<h1>Minecraft Linux Server Panel</h1>
<h2>概要</h2>
　Linux上でゲーム"<a href="http://minecraft.net/" target="_blank">Minecraft</a>"のサーバであるminecraft-server.jarを運用する際、SSH接続による操作ではなく、Web(PHP)上の機能を利用して操作を行うことが出来るシステムです。

<h2>特徴</h2>
<ul>
	<li>WindowsのMinecraftサーバのような視覚的に分かりやすいインターフェイス</li>
	<li>SSH接続なしでサーバの起動/停止/再起動/設定が可能</li>
	<li>設定はserver.properties, ops.txt, white-list.txtなど全てをカバー</li>
	<li>Minecraftサーバのログを自動で取得、またコンソールコマンドも入力可能</li>
</ul>

<h2>利用方法</h2>

<h3>1. サーバの用意</h3>
PHP5の動作が確認されたapacheサーバを用意してください。

<h3>2. ファイルの取得</h3>

<h4>2-1. git cloneで</h4>
<pre>$ cd /path/to/web/
$ git init
$ git clone --depth 1 git://github.com/akai-inu/minecraft-linux-server-panel.git</pre>

<h4>2-2. zipファイルで</h4>
--- 現在製作中 ---

<h3>3. 設定</h3>
--- 現在製作中 ---

<hr />
in English

<h1>Minecraft Linux Server Panel</h1>
<h2>Description</h2>
　This system allows the game <a href="http://minecraft.net/" target="_blank">Minecraft</a>'s server on Linux(File: minecraft-server.jar) can operate on the WEB(PHP), without SSH connection.

<h2>Feature</h2>
<ul>
	<li>Comprehensible : interface like Minecraft Server for Windows</li>
	<li>Secure : Start/Stop/Restart/Settings without SSH connection</li>
	<li>Cover : It can do whole settings</li>
	<li>Interactive : Auto reloading server log, can use console commands.</li>
<h2>How to use</h2>

<h3>1. Prepare server</h3>
You should prepare the apache server working PHP5.

<h3>2. Get Files</h3>

<h4>2-1. by git clone</h4>
<pre>$ cd /path/to/web/
$ git init
$ git clone --depth 1 git://github.com/akai-inu/minecraft-linux-server-panel.git</pre>

<h4>2-2. by zip</h4>
--- Now working ---

<h3>3. Setting</h3>
--- Now working ---
