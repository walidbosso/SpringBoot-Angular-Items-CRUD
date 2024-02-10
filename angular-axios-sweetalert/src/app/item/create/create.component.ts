import { Component } from '@angular/core';
import { ItemService } from '../item.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  title: string ='';
  description: string='';
  isSubmitting:boolean=false; //track button clicked or no, when user clicking multiple times

  constructor(public itemService:ItemService){}
    createItem(){
      this.isSubmitting=true;
      this.itemService.createItem({title:this.title, description:this.description})
      .then(response=>{
        this.isSubmitting=false;
        Swal.fire({
          icon:'success',
          title:'Item created successfully',
          showConfirmButton:false,
          timer:1500
        })

        this.title='';
        this.description='';

        return response;
      })//response
      .catch(error=>{
        this.isSubmitting=false;
        Swal.fire({
          icon:'error',
          title:'Some error occured',
          showConfirmButton:false,
          timer:1500
        })
      })
      
      ;


    }
  }



