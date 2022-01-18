import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService } from 'src/app/services/account/register.service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css'],
})
export class VerificationComponent implements OnInit {
  verificando: boolean = false;
  rutaValida: boolean = true;
  rutaValidada: boolean = false;

  constructor(
    private registerService: RegisterService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.verificando = true;
      this.verifyUuid(params.uuid);
    });
  }

  async verifyUuid(uuid: string) {
    this.verificando = true;
    const response = await this.registerService.verifyUser(uuid);
    if (response.error) {
      this.rutaValida = false;
    }
    this.verificando = false;
  }
}
