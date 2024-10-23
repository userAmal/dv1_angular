import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationService } from '../services/reservation.service';
import { reservation } from '../model/reservation.model';
import { Type } from '../model/type.model';
@Component({
  selector: 'app-update-reservation',
  templateUrl: './update-reservation.component.html',
  styles: [
  ]
})
export class UpdateReservationComponent  {

  currentreservation = new reservation();
  types! : Type[];
  updatedtyid! : number;
  
  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.reservationService.listetypes().
    subscribe(ty => {this.types = ty;
    console.log(ty);
    });


    this.reservationService.consulterReservation(this.activatedRoute.snapshot.params['id']).
    subscribe( res =>{ this.currentreservation = res; 
      this.updatedtyid =   this.currentreservation.type!.idty;
    
    } ) ;
    }
    

  

    updatereservation() {
    this.currentreservation.type = this.types.find(ty => ty.idty == this.updatedtyid)!;
         this.reservationService.updatereservation(this.currentreservation).subscribe(res => {
      this.router.navigate(['reservations']); }
      );
  }

}

/*import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationService } from '../reservation.service';
import { reservation } from '../model/reservation.model';
import { Type } from '../model/type.model';

@Component({
  selector: 'app-update-reservation',
  templateUrl: './update-reservation.component.html',

})
export class UpdateReservationComponent {
  currentreservation = new reservation();
  types! : Type[];
  updatedtyid! : number;
  constructor(private activatedRoute: ActivatedRoute,private router :Router,

  private reservationService: ReservationService) { }
  ngOnInit() {
    this.types = this.reservationService.listetypes();
  // console.log(this.route.snapshot.params.id);
  this.currentreservation = 
  this.reservationService.consulterReservation(this.activatedRoute.snapshot.params['id']);
  this.updatedtyid=this.currentreservation.type.idty;

  }
  updatereservation() {
    this.currentreservation.type=this.reservationService.consultertypes(this.updatedtyid);

    this.reservationService.updatereservation(this.currentreservation);
    this.router.navigate(['reservations']);
    }
}*/
