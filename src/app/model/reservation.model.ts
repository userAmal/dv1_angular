import { Type } from "./type.model";
export class reservation {
    idReservation!: number;
    nomclient?: string;
    prixsejour?: number;
    datedebut?: Date;
    datefin?: Date;
    type !: Type;
}
