package com.mycompany.itemsservice.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

//
@Entity
@Table(name = "Items")
//getter setter lombok
@Data
//constructor lombok
@NoArgsConstructor
public class ItemEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    //So we'll say strategy generation type dot auto which means whichever is the default sequence generation
    //  //type for this particular database.
    //    //Use that to create the values for this particular primary key column.
    //    //And in this case we are using H2 database.
    //    //So whatever the default sequence type strategy that will be used here, if we will change the database
    //    //to MySQL automatically, the strategy will be automatically added here for creating the values.
    private Long id;

    //@Column(nullable = false, length = 255, name = "item_title")
    private String title;
    private String description;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

}
