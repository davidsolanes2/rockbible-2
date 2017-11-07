package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Label;
import org.springframework.stereotype.Repository;


/**
 * Spring Data JPA repository for the Label entity.
 */
@SuppressWarnings("unused")
@Repository
public interface LabelRepository extends JpaRepository<Label, Long> {

}
