import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit {
    item: Item = { _id: 0, title: '', description: '' };

    constructor(public itemService: ItemService, private route: ActivatedRoute){
      this.item = {
        _id: this.route.snapshot.params['id'],
        title: '',
        description: ''
      }
    }
    ngOnInit(): void{
      this.itemService.getItemDetail(this.route.snapshot.params['id'])
      .then((response)=>{
        //console.log(response);
        //WE FILL VARIABLE WITH ITEM EXTRACTED USING ID PROVIDED IN URL
        this.item = response.data;
        console.log(this.item);
      })
      .catch(error=>{return error});
    }
}
