import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import ReservationComponent from './reservation/reservation.component';
import { UpdateReservationComponent } from './update-reservation/update-reservation.component';
import { AddReservationComponent } from './add-reservation/add-reservation.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ReservationGuard } from './reservation.guard';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import {RechercheParTypeComponent} from "./recherche-par-type/recherche-par-type.component";

const routes: Routes = [
  {path: "rechercheParNom", component : RechercheParNomComponent},
  {path: "rechercheParType", component : RechercheParTypeComponent},
  {path : "add-reservation", component : AddReservationComponent, canActivate:[ReservationGuard]},
  {path: 'app-forbidden', component: ForbiddenComponent},
  {path: 'login', component: LoginComponent},
  {path: "updatereservation/:id", component: UpdateReservationComponent},
{path: "reservations", component : ReservationComponent},
{path: "reservation", component :  ReservationComponent},
{path: "add-reservation", component :  AddReservationComponent},
{path: "", redirectTo: "reservation", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
