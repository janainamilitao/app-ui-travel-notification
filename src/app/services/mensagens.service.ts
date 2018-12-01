import { Injectable } from "@angular/core";

declare function addMessage(title, message, class_name): any;

@Injectable()
export class MensagensService{

  addError(title: String, message: String){
    addMessage(title, message, "gritter-danger")
  }

  addSuccess(title: String, message: String){
    addMessage(title, message, "gritter-success")
  }

  addWarning(title: String, message: String){
    addMessage(title, message, "gritter-warning")
  }

  addInfo(title: String, message: String){
    addMessage(title, message, "gritter-info")
  }

}