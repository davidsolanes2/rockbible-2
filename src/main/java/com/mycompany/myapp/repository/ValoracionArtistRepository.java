package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.ValoracionArtist;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;
import java.util.List;

/**
 * Spring Data JPA repository for the ValoracionArtist entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ValoracionArtistRepository extends JpaRepository<ValoracionArtist, Long> {

    @Query("select valoracion_artist from ValoracionArtist valoracion_artist where valoracion_artist.user.login = ?#{principal.username}")
    List<ValoracionArtist> findByUserIsCurrentUser();

}
