import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Type } from '../model/type.model';

@Component({
  selector: 'app-update-type',
  templateUrl: './update-type.component.html',
  styleUrls: ['./update-type.component.css']
})
export class UpdateTypeComponent implements OnInit{
  @Input() 
  type! : Type; 
  @Output()  
  typeUpdated = new EventEmitter<Type>(); 
  @Input() 
ajout!:boolean; 
  ngOnInit(): void { 
    console.log("ngOnInit du composant UpdateType ",this.type); 
    }
    saveType(){ 
      this.typeUpdated.emit(this.type); 
      }  
}
