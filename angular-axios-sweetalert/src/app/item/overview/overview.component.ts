import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';
import Swal from 'sweetalert2'; //delete

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent implements OnInit {
items: Item[]=[] ; // Interface we created

constructor(public itemService: ItemService){}

ngOnInit(): void {
    this.getAllItems(); // on loand we call the function below
}

getAllItems(){
  this.itemService.getAllItens()
  .then((response)=>{
    // console.log(response);
    //we fill the items variablw with data from back end
    this.items=response.data;
    // debugger;
    // console.log(this.items);
  })
  .catch((error)=>{
    return error;
  }); //we already injected // we can use async awai
}

deleteItem(id: number){
  //give user a chance of option, using notification sweetalert
  Swal.fire({
    title:'Are you sure you want to delete?',
    text:'Item deleted cannot be recovered',
    icon:'warning',
    showCancelButton:true,
    confirmButtonColor:'#3085d5',
    cancelButtonColor:'#d33',
    confirmButtonText:'Go Ahead with deletion'
  })
  .then(result=>{
    if(result.isConfirmed){
      this.itemService.deleteItem(id) //after deletion then
      .then(response=>{
        Swal.fire({
          icon:'success',
          title:'Item deleted successfully',
          showConfirmButton:false,
          timer:1500
        })
        this.getAllItems();//REFRESHED AFTER DELETION //we fill the items variablw with data from back end

        return response;
      })
      .catch(error=>{
        Swal.fire({
          icon:'error',
          title:'Some error occured',
          showConfirmButton:false,
          timer:1500
        })

        return error;
      });
    }
  })  ;
}
}
