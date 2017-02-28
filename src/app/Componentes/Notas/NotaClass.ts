export class NotaClass { 	
	title:string;
	description:string;
	creationDate:Date;
	clear: Boolean;
	tags:string[];
	
	constructor(_title: string,_description:string, _creationDate: Date, _clear: Boolean,_tags: string[]){
		this.title =_title;		
		this.description =_description;
		this.creationDate =_creationDate;
		this.clear  =_clear;
		this.tags  =_tags;
	}		
}