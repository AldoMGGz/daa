import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users= [
    { username:'aldo.guajardo', name: 'Aldo Guajardo'},
    { username:'aldo.guajardo', name: 'Aldo Guajardo'},
    { username:'aldo.guajardo', name: 'Aldo Guajardo'},
  ];

  displayedColumns: string[] = [
    'username', 
    'actions'
  ];
  addButtonClicked(){
    alert('Boton de adicion activado');
  }
  deleteButtonClicked(){
    alert('Boton de Borrado activado');
  }
}
