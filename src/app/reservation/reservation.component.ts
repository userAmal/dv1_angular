import { reservation } from './../model/reservation.model';
import { Component } from '@angular/core';

import { ReservationService } from '../services/reservation.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
})
export default class ReservationComponent   {

    reservations? : reservation[]; //un tableau de produits

  constructor(private ReservationService: ReservationService,
              public authService: AuthService) {
   //this.produits=[];
     }
     ngOnInit(): void {

      this.chargerReservations();
    }

  chargerReservations(){
    this.ReservationService.listeReservation().subscribe(res => {
      console.log(res);
      this.reservations = res;
      });
  }

  supprimerReservation(r: reservation)
{
let conf = confirm("Etes-vous sûr ?");
if (conf)
  this.ReservationService.supprimerReservation(r.idReservation).subscribe(() => {
        console.log("Reservation  supprimé");
        this.chargerReservations();

});
}
}
/*  reservations: reservation[];
  constructor(private reservationservice: ReservationService ,public authService: AuthService ) {
    this.reservations = reservationservice.listereservations();
    }
    supprimerreservation(r: reservation)
  {
  //console.log(r);
   let conf = confirm("Etes-vous sûr ?");
   if (conf)
    this.reservationservice.supprimerreservation(r);
  }


}*/
