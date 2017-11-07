package com.mycompany.myapp.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A Genre.
 */
@Entity
@Table(name = "genre")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Genre implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "genre_name")
    private String genreName;

    @ManyToMany
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    @JoinTable(name = "genre_genre_name",
               joinColumns = @JoinColumn(name="genres_id", referencedColumnName="id"),
               inverseJoinColumns = @JoinColumn(name="genre_names_id", referencedColumnName="id"))
    private Set<Band> genreNames = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getGenreName() {
        return genreName;
    }

    public Genre genreName(String genreName) {
        this.genreName = genreName;
        return this;
    }

    public void setGenreName(String genreName) {
        this.genreName = genreName;
    }

    public Set<Band> getGenreNames() {
        return genreNames;
    }

    public Genre genreNames(Set<Band> bands) {
        this.genreNames = bands;
        return this;
    }

    public Genre addGenreName(Band band) {
        this.genreNames.add(band);
        band.getNameBands().add(this);
        return this;
    }

    public Genre removeGenreName(Band band) {
        this.genreNames.remove(band);
        band.getNameBands().remove(this);
        return this;
    }

    public void setGenreNames(Set<Band> bands) {
        this.genreNames = bands;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Genre genre = (Genre) o;
        if (genre.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), genre.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Genre{" +
            "id=" + getId() +
            ", genreName='" + getGenreName() + "'" +
            "}";
    }
}
