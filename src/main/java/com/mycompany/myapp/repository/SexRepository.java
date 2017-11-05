package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Sex;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


/**
 * Spring Data JPA repository for the Sex entity.
 */
@SuppressWarnings("unused")
@Repository
public interface SexRepository extends JpaRepository<Sex, Long> {

}
