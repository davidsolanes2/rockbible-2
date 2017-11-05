package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Collection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


/**
 * Spring Data JPA repository for the Collection entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CollectionRepository extends JpaRepository<Collection, Long> {

}
