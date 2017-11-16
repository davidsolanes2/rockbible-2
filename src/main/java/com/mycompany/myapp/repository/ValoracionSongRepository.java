package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.ValoracionSong;
import com.mycompany.myapp.service.dto.ValoracionAlbumStats;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;
import java.util.List;

/**
 * Spring Data JPA repository for the ValoracionSong entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ValoracionSongRepository extends JpaRepository<ValoracionSong, Long> {

    @Query("select valoracion_song from ValoracionSong valoracion_song where valoracion_song.user.login = ?#{principal.username}")
    List<ValoracionSong> findByUserIsCurrentUser();

    @Query("select new com.mycompany.myapp.service.dto.ValoracionAlbumStats(valoracionAlbum.album , " +
        "avg(valoracionAlbum.puntuacion), max(valoracionAlbum.puntuacion), min(valoracionAlbum.puntuacion)) " +
        "from ValoracionAlbum valoracionAlbum where valoracionAlbum.album.id = :albumId")
    ValoracionAlbumStats findAlbumsStats(@Param("albumId") Long Id);

}
