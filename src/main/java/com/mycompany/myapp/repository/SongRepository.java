package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Song;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;

import java.util.List;


/**
 * Spring Data JPA repository for the Song entity.
 */
@SuppressWarnings("unused")
@Repository
public interface SongRepository extends JpaRepository<Song, Long> {

    List<Song> findBySongNameContains(String nombre);
}
