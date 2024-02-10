package com.mycompany.itemsservice.controller;

import com.mycompany.itemsservice.dto.ItemDTO;
import com.mycompany.itemsservice.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class ItemController {

    @Autowired
    private ItemService itemService;

    @PostMapping("/items")
    public ResponseEntity<ItemDTO> addItem(@RequestBody ItemDTO itemDTO){
        itemDTO = itemService.addItem(itemDTO);
        ResponseEntity<ItemDTO> re = ResponseEntity.status(201).body(itemDTO);
        return re;
    }

    @GetMapping("/items")
    public ResponseEntity<List<ItemDTO>> allItems(){
        List<ItemDTO> items = itemService.allItems();
        return ResponseEntity.status(200).body(items);
    }

    @GetMapping("/search-items-by-title")
    public ResponseEntity<List<ItemDTO>> searchByTitle(@RequestParam String title){
        List<ItemDTO> items = itemService.searchItemByTitle(title);
        return ResponseEntity.status(200).body(items);
    }

    @GetMapping("/items/{id}")
    public ResponseEntity<ItemDTO> getDetail(@PathVariable Long id){
        ItemDTO item = itemService.getDetail(id);
        return ResponseEntity.status(200).body(item);
    }

    @PutMapping("/items/{id}")// /api/items/1
    public ResponseEntity<ItemDTO> updateItem(@PathVariable Long id, @RequestBody ItemDTO itemDTO){
        ItemDTO item = itemService.updateItem(id, itemDTO);
        return ResponseEntity.status(200).body(item);
    }
// id to find item, then update title
    @PatchMapping("/items/title/{id}")// Partial update of 1 field of the DTO
    public ResponseEntity<ItemDTO> updateItemTitle(@PathVariable Long id, @RequestBody ItemDTO itemDTO){
        itemDTO = itemService.updateItemTitle(id, itemDTO.getTitle());
        return ResponseEntity.status(200).body(itemDTO);
    }

    @DeleteMapping("/items")// /api/items?id=1    &title=...
    public ResponseEntity<Void> deleteItem(@RequestParam Long id){
        itemService.deleteItem(id);
        ResponseEntity<Void> re = new ResponseEntity<>(HttpStatus.NO_CONTENT); //204
        return re;
    }
}
