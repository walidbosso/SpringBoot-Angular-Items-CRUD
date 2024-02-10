package com.mycompany.itemsservice.repository;

import com.mycompany.itemsservice.entity.ItemEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ItemRepository  extends JpaRepository<ItemEntity, Long> {
    List<ItemEntity> findAllByTitleContains(String title);
}
