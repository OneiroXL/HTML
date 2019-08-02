import ElementUI from 'element-ui';
import { Notification } from 'element-ui';

const Notify = {}
 
Notify.Notification = function(type,title,message){
    Notification({
        title: title,
        message: message,
        type: type
    });
}

Notify.SuccessNotification = function(message){
    Notification({
        title: "成功",
        message: message,
        type: "success"
    });
}

Notify.WarningNotification = function(message){
    Notification({
        dangerouslyUseHTMLString: true,
        title: "警告",
        message: message,
        type: "warning"
    });
}

Notify.ErrorNotification = function(message){
    Notification({
        title: "错误",
        message: message,
        type: "error"
    });
}

Notify.AutoNotification = function(message,status){
    switch(status){
        case 10000:{
            Notify.SuccessNotification("成功")
        }break
        case 10001:{
            Notify.WarningNotification(message)
        }break
        case 10002:{
            Notify.WarningNotification(HandleValidMessage(message))
        }break
        case 10003:{
            Notify.WarningNotification(message)
        }break
        case 10004:{
            Notify.ErrorNotification(message)
        }break
    }
}

function HandleValidMessage(message){
    if(message.length > 0){
        var messArr = []
        for (var v of message){
            var mes = v.Field + ":" + v.Message
            messArr.push(mes)
        }
        return messArr.join("</br>")
    }
    return ""
}

export default Notify