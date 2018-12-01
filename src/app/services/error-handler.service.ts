import { Injectable } from '@angular/core';
import { HttpErrorResponse } from "@angular/common/http";
import { MensagensService } from './mensagens.service';

@Injectable()
export class ErrorHandlerService {

  constructor(private mensagemService: MensagensService) { }

  handleResponseError(httpErrorResponse: HttpErrorResponse) {
    for( let error of httpErrorResponse.error ){
      this.mensagemService.addError("Erro", error);
    }
  }
}