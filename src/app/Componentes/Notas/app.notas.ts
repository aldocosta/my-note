import { Component,ViewChild,OnInit } from '@angular/core'
import { NotaClass } from './NotaClass'
import { LocalStorageService } from '../../Servicos/LocalStorageService'

@Component({
  selector: 'app-notas',
  templateUrl: './app.notas.html',
  styleUrls: ['./app.notas.component.css']
}) 
export class NotasComponent implements OnInit { 
    nota:NotaClass;
    notas:NotaClass[];
    database: LocalStorageService;
    filterValue:string;
    filtertitleValue:string;
    editing:boolean;
    fitrotodos:boolean;
    fitrofim:boolean;
    fitronotfim:boolean;

    @ViewChild('datepicker') datepicker;
    
    constructor() {
        this.filterValue = "";
        this.filtertitleValue = "";
        this.fitrotodos = true;
        this.init();
    }

    ngOnInit(){        
    }

    private init():void{
        this.nota = new NotaClass('','',new Date() ,false,null);
        this.database = new LocalStorageService();
        this.editing = false;

        var ret = this.database.getItemFromStorage("notas",true);
        if(!(ret ==undefined || ret ==null)){
            this.notas = ret;
        }else{
            this.notas =[];
        }
    }

    addNota(nota:NotaClass){
        var some = this.datepicker.nativeElement.value;		
        nota.creationDate = new Date(some);		
        this.notas.push(nota);   
        this.saveAll();
    }

    saveAll(){
        this.database.addItemToStorage('notas',JSON.stringify(this.notas));        
        this.editing = false;
    }

    removeNota(nota:NotaClass){
        var ret =this.notas.indexOf(nota);
        this.notas.splice(ret,1);
        this.database.addItemToStorage('notas',JSON.stringify(this.notas));
    }

    setNote(nota:NotaClass){
        this.nota = nota;
    }

    removeSelectedNota(){
        if(this.nota!=null){
            this.removeNota(this.nota);
        }
    }

    showNote(nota:NotaClass){
        this.nota = nota;
        this.editing = true;
    }

    clearNote(){
        this.nota = new NotaClass('','',new Date() ,false,null);
        this.editing = false;
    }
}