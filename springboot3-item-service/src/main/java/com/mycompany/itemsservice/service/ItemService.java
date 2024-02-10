package com.mycompany.itemsservice.service;

import com.mycompany.itemsservice.dto.ItemDTO;

import java.util.List;

public interface ItemService {
    ItemDTO addItem(ItemDTO itemDTO);
    List<ItemDTO> allItems();
    List<ItemDTO> searchItemByTitle(String title);
    ItemDTO getDetail(Long id);
    ItemDTO updateItem(Long id, ItemDTO itemDTO);
    ItemDTO updateItemTitle(Long id, String title);
    void deleteItem(Long id);
}
