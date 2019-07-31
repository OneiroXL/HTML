import ElementUI from 'element-ui';

const Notify = {}
 
Notify.Notification = function(type,title,message){
    ElementUI.Notification({
        title: title,
        message: message,
        type: type
    });
}

Notify.SuccessNotification = function(message){
    ElementUI.Notification({
        title: "成功",
        message: message,
        type: "success"
    });
}

Notify.WarningNotification = function(message){
    ElementUI.Notification({
        title: "警告",
        message: message,
        type: "warning"
    });
}

Notify.ErrorNotification = function(message){
    ElementUI.Notification({
        title: "错误",
        message: message,
        type: "error"
    });
}

export default Notify