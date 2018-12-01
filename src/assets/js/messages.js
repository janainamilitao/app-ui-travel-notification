function addMessage(title, text, class_name){
    $.gritter.add({
      title: title,
      text: text,
      class_name: class_name
    });
    return false;
  }