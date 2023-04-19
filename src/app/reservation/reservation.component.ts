import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void{
    this.form = this.fb.group({
      name:
      [null, 
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20),
        ]
      ],
      email:
      [null, 
        [
          Validators.required, 
          Validators.pattern('^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$')
        ]
      ],
      phone:[null],
      people:
      [null, 
        [
          Validators.required, 
          Validators.minLength(1),
          Validators.maxLength(9),
        ]
      ],
      reservationDate:
      [null, 
        [
          Validators.required
        ]
      ],
      reservationSchedule:
      [null, 
        [
          Validators.required
        ]
      ],
    });
  }

  formSubmit(form:any){
    alert('Gracias por reservar con nosotros \n' + JSON.stringify(form.value, null, 4));
  }
  formCancel(){
    alert('Reservacion Cancelada');
  }
}
