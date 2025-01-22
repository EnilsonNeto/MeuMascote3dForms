import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/shared/services/alert.service';
import { ApiService } from 'src/shared/services/api.service';

export interface FormAirtable {
  name: string;
  email: string;
  companyName: string;
  mainFeatures: string;
  characterType: string;
  mascotAge: string;
  mascotGender: string;
  whatsapp: string;
}

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  clientForm!: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService, private alertService: AlertService) { }

  ngOnInit(): void {
    this.clientForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      companyName: ['', Validators.required],
      mainFeatures: ['', Validators.required],
      characterType: ['', Validators.required],
      mascotAge: ['', Validators.required],
      mascotGender: ['', Validators.required],
      whatsapp: ['', [Validators.required]],
    });
  }

  applyPhoneMask(event: any): void {
    let value = event.target.value.replace(/\D/g, '');

    if (value.length > 10) {
      value = value.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    } else if (value.length > 5) {
      value = value.replace(/^(\d{2})(\d{5})$/, '($1) $2');
    } else if (value.length > 2) {
      value = value.replace(/^(\d{2})/, '($1)');
    }

    event.target.value = value;
  }


  testCreateRecord(client: FormAirtable) {
    const tableName = 'Clientes';

    this.apiService.createRecord(tableName, client).subscribe(
      () => {
        this.alertService.showAlert({
          title: 'O formulário foi enviado com sucesso.',
          text: 'Aguarde um momento que em breve, entraremos em contato!',
          icon: 'success',
          confirmButtonText: 'OK'
        });
        this.clientForm.reset();
      },
      () => {
        this.alertService.showAlert({
          title: 'Erro!',
          text: 'Houve um erro ao enviar o formulário.',
          icon: 'error',
          confirmButtonText: 'Tentar novamente'
        });
      }
    );
  }

  onSubmit(): void {
    if (this.clientForm.valid) {
      const formData = { ...this.clientForm.value, mascotAge: String(this.clientForm.value.mascotAge) };  // Convertendo para string
      this.testCreateRecord(formData);
    } else {
      this.alertService.showAlert({
        title: 'Campos inválidos!',
        text: 'Por favor, preencha todos os campos corretamente.',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
    }
  }

}
