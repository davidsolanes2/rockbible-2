package com.mycompany.myapp.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
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

    @OneToMany(mappedBy = "genre")
    @JsonIgnore
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Song> songNames = new HashSet<>();

    @OneToMany(mappedBy = "genre")
    @JsonIgnore
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Band> nameBands = new HashSet<>();

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

    public Set<Song> getSongNames() {
        return songNames;
    }

    public Genre songNames(Set<Song> songs) {
        this.songNames = songs;
        return this;
    }

    public Genre addSongName(Song song) {
        this.songNames.add(song);
        song.setGenre(this);
        return this;
    }

    public Genre removeSongName(Song song) {
        this.songNames.remove(song);
        song.setGenre(null);
        return this;
    }

    public void setSongNames(Set<Song> songs) {
        this.songNames = songs;
    }

    public Set<Band> getNameBands() {
        return nameBands;
    }

    public Genre nameBands(Set<Band> bands) {
        this.nameBands = bands;
        return this;
    }

    public Genre addNameBand(Band band) {
        this.nameBands.add(band);
        band.setGenre(this);
        return this;
    }

    public Genre removeNameBand(Band band) {
        this.nameBands.remove(band);
        band.setGenre(null);
        return this;
    }

    public void setNameBands(Set<Band> bands) {
        this.nameBands = bands;
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
