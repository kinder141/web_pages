<?php
include('vendor/autoload.php');
include('Bot.php');
//getMessage
$updates=null;
$telegramApi = new TelegramBot();
$updates = $telegramApi->getUpdates();
print_r($updates);

while(true){
sleep(2);
$updates = $telegramApi->getUpdates();
print_r($updates);
foreach($updates as $update)
{
    //$telegramApi->sendMessage($update->message->chat->id,'Alloha');
    if($update->message->from->first_name=="Olga")
    {$telegramApi->sendMessage($update->message->chat->id,'Люблю тебя♥');}
    else{
        $telegramApi->sendMessage($update->message->chat->id,'Ты тупень');
    }
}
}
?>