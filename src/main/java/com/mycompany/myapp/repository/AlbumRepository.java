package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Album;
import com.mycompany.myapp.domain.Band;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;

import java.util.List;


/**
 * Spring Data JPA repository for the Album entity.
 */
@SuppressWarnings("unused")
@Repository
public interface AlbumRepository extends JpaRepository<Album, Long> {


    List<Album> findByBand_NameBand(String bandaNombre);

    List<Album> findByBand_NameBandContaining(String bandaNombre);

}
