package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Band;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.*;
import java.util.List;
/**
 * Spring Data JPA repository for the Band entity.
 */
@SuppressWarnings("unused")
@Repository
public interface BandRepository extends JpaRepository<Band, Long> {
    List<Band> findOneByNameBandContaining(String nombre);
}
