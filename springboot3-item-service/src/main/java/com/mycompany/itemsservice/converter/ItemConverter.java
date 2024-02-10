package com.mycompany.itemsservice.converter;

import com.mycompany.itemsservice.dto.ItemDTO;
import com.mycompany.itemsservice.entity.ItemEntity;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Component;

//Let's make this as a component so that it creates a singleton bean,
// and we can inject it wherever we want. with Autowired
@Component
public class ItemConverter {

    public ItemDTO convertEntity2Dto(ItemEntity ie){
        ItemDTO itemDTO = new ItemDTO();
        BeanUtils.copyProperties(ie, itemDTO);
        itemDTO.set_id(ie.getId());
        return itemDTO;
    }
}
