package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Instrument;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import java.util.List;

/**
 * Spring Data JPA repository for the Instrument entity.
 */
@SuppressWarnings("unused")
@Repository
public interface InstrumentRepository extends JpaRepository<Instrument, Long> {
    @Query("select distinct instrument from Instrument instrument left join fetch instrument.artists")
    List<Instrument> findAllWithEagerRelationships();

    @Query("select instrument from Instrument instrument left join fetch instrument.artists where instrument.id =:id")
    Instrument findOneWithEagerRelationships(@Param("id") Long id);

}
