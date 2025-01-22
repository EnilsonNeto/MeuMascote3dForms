import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  showAlert(config: SwalOptions): void {
    Swal.fire({
      title: config.title || 'Alerta',         
      text: config.text || '',                 
      icon: config.icon || 'info',             
      confirmButtonText: config.confirmButtonText || 'OK',  
      showCancelButton: config.showCancelButton || false,
      cancelButtonText: config.cancelButtonText || 'Cancelar',  
      timer: config.timer || undefined,        
      timerProgressBar: config.timerProgressBar || false,
      position: config.position || 'center',   
      allowOutsideClick: config.allowOutsideClick || false, 
      backdrop: config.backdrop || 'rgba(0,0,0,0.4)', 
    });
  }
}

export interface SwalOptions {
  title?: string;
  text?: string;
  icon?: 'success' | 'error' | 'warning' | 'info' | 'question';
  confirmButtonText?: string;
  showCancelButton?: boolean;
  cancelButtonText?: string;
  timer?: number;
  timerProgressBar?: boolean;
  position?: 'top' | 'top-end' | 'top-start' | 'center' | 'center-end' | 'center-start' | 'bottom' | 'bottom-end' | 'bottom-start';
  allowOutsideClick?: boolean;
  backdrop?: string;
}
