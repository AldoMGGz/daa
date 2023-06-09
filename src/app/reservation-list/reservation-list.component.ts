import { Component } from '@angular/core';
import { Reservation } from '../_models/reservation.model';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent {
  reservations: Reservation[]= [
    { name:'Aldo Guajardo', email: 'aldo.guajardo@u-erre.mx', phone: '8117903415', people: 2, reservationDate:new Date('2023-03-30T06:00:00.000Z'), reservationSchedule: 7},
    { name:'Aldo Guajardo', email: 'aldo.guajardo@u-erre.mx', phone: '8117903415', people: 2, reservationDate:new Date('2023-03-30T06:00:00.000Z'), reservationSchedule: 7},
    { name:'Aldo Guajardo', email: 'aldo.guajardo@u-erre.mx', phone: '8117903415', people: 2, reservationDate:new Date('2023-03-30T06:00:00.000Z'), reservationSchedule: 7},
    { name:'Aldo Guajardo', email: 'aldo.guajardo@u-erre.mx', phone: '8117903415', people: 2, reservationDate:new Date('2023-03-30T06:00:00.000Z'), reservationSchedule: 7},
    { name:'Aldo Guajardo', email: 'aldo.guajardo@u-erre.mx', phone: '8117903415', people: 2, reservationDate:new Date('2023-03-30T06:00:00.000Z'), reservationSchedule: 7},
    { name:'Aldo Guajardo', email: 'aldo.guajardo@u-erre.mx', phone: '8117903415', people: 2, reservationDate:new Date('2023-03-30T06:00:00.000Z'), reservationSchedule: 7},
    { name:'Aldo Guajardo', email: 'aldo.guajardo@u-erre.mx', phone: '8117903415', people: 2, reservationDate:new Date('2023-03-30T06:00:00.000Z'), reservationSchedule: 7},
  ]

  displayedColumns: string[] = [
    'reservationDate', 
    'reservationSchedule',
    'people',
    'name',
    'email',
    'phone',
    'actions'
  ]
  editButtonClicked(){
    alert('Boton de adicion activado');
  }
  deleteButtonClicked(){
    alert('Boton de edicion activado');
  }
}
