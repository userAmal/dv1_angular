import { Component } from '@angular/core';
import { reservation } from '../model/reservation.model';
import { ReservationService } from '../services/reservation.service';
import { Router } from '@angular/router';
import { Type } from '../model/type.model';
@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent {
  newReservation = new reservation();
  types! : Type[];
  newidty! : number;
  newtype! : Type;
  type! : Type;
  
  constructor(private reservationService: ReservationService,
              private router : Router) { }

  ngOnInit(): void {

    this.reservationService.listetypes().
          subscribe(ty => {
            this.types = ty;
            console.log(ty);
        });
 
  }

 
  addreservation(){
    //console.log(this.newidty);
    //this.newtype = this.reservationService.consultertype(this.newidty);
    //this.newReservation.type = this.newtype;
    this.newReservation.type = this.types.find((typ) => typ.idty == this.newidty)!;
    console.log(this.newReservation.type)
    this.reservationService.ajouterReservation(this.newReservation).subscribe((ty) => {
      console.log(ty);
      this.router.navigate(['reservations']);
    });
  }
    /*if (!this.types || this.types.length === 0) {
      console.error("Types are not yet loaded. Please wait.");
      return;
    }

    this.newReservation.type = this.types.find((typ) => typ.idty == this.newidty)!;
    this.reservationService
      .ajouterReservation(this.newReservation)
      .subscribe((res) => {
        console.log(res);
        this.router.navigate(['Reservations']);
      });
  }
    this.newReservation.type = this.types.find(ty => ty.idty == this.newidty)!;
    this.reservationService.ajouterReservation(this.newReservation)
                      .subscribe(res => {
                      console.log(res);
                      this.router.navigate(['reservations']);
                      }); 
    }
  newReservation = new reservation();
  types! : Type[];
  newidty! : number;
  newtype! : Type;


  constructor(private reservationService: ReservationService, private router:Router) { }
  ngOnInit() {
    this.types = this.reservationService.listetypes();
    }
    addreservation() {
      console.log(this.newidty);
        this.newtype = 
        this.reservationService.consultertypes(this.newidty);
        this.newReservation.type = this.newtype;
        
    this.reservationService.ajouterreservation(this.newReservation);
    this.router.navigate(['reservations']);
    }*/
    
}
