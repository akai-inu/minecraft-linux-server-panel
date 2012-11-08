#!/bin/sh
RAM_MIN=64  # Minimum use of Memory
RAM_MAX=512 # Maximum use of Memory
SCREEN_NAME=minecraft_server_web
cd "${0%/*}"

check_server()
{
	a=`screen -ls | grep "${SCREEN_NAME}"`
	if [ ${#a} -gt 0 ]
	then
		echo "0"
	else
		echo "1"
	fi
}
IS_SERVER_RUNNING=`check_server`

# Starting Server Function
start_server()
{
	echo "Starting server..."
	screen -AmdS ${SCREEN_NAME} java -Xms${RAM_MIN}M -Xmx${RAM_MAX}M -jar minecraft_server.jar nogui
	echo "Server started."
}

# Stopping Server Function
stop_server()
{
	echo "Stopping server..."
	i=15
	
	while [ ${i} -ne 0 ]
	do
		if test `expr ${i} % 15` -eq 0 -o ${i} -le 10
		then
			screen -S ${SCREEN_NAME} -p 0 -X eval "stuff say\040Server\040will\040stop\040in\040${i}\040seconds.\015"
			echo "Server will stop in ${i} seconds."
		fi
		i=`expr ${i} - 1`
		sleep 1
	done
	screen -S ${SCREEN_NAME} -p 0 -X eval 'stuff stop\015'

	echo "Wait Saving..."
	sleep 10
	echo "Server stopped."
}

case $1 in
start)
	if [ ${IS_SERVER_RUNNING} -eq 0 ]
	then
		echo "Maybe server is running. Exit shell."
	else
		start_server
	fi
	;;
restart)
	if [ ${IS_SERVER_RUNNING} -eq 0 ]
	then
		echo "Restarting server..."
		stop_server
		start_server
	else
		echo "Maybe server is not running. Exit shell."
	fi
	;;
stop)
	if [ ${IS_SERVER_RUNNING} -eq 0 ]
	then
		stop_server
	else
		echo "Maybe server is not running. Exit shell."
	fi
	;;
terminate)
	echo "Terminating Server..."
	screen -S ${SCREEN_NAME} -X quit
	echo "Terminated server."
	;;
status)
	if [ ${IS_SERVER_RUNNING} -eq 0 ]
	then
		echo "Minecraft server is running."
	else
		echo "Minecraft server is not running."
	fi
	;;
*)
	echo "usage... $0 (start|restart|stop|status)"
	;;
esac

