package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Genre;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import java.util.List;

/**
 * Spring Data JPA repository for the Genre entity.
 */
@SuppressWarnings("unused")
@Repository
public interface GenreRepository extends JpaRepository<Genre, Long> {
    @Query("select distinct genre from Genre genre left join fetch genre.genreNames")
    List<Genre> findAllWithEagerRelationships();

    @Query("select genre from Genre genre left join fetch genre.genreNames where genre.id =:id")
    Genre findOneWithEagerRelationships(@Param("id") Long id);

}
