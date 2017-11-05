package com.mycompany.myapp.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

/**
 * A Album.
 */
@Entity
@Table(name = "album")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Album implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "album_name")
    private String albumName;

    @Column(name = "num_songs")
    private Integer numSongs;

    @ManyToOne
    private Band band;

    @OneToMany(mappedBy = "album")
    @JsonIgnore
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Song> songNames = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAlbumName() {
        return albumName;
    }

    public Album albumName(String albumName) {
        this.albumName = albumName;
        return this;
    }

    public void setAlbumName(String albumName) {
        this.albumName = albumName;
    }

    public Integer getNumSongs() {
        return numSongs;
    }

    public Album numSongs(Integer numSongs) {
        this.numSongs = numSongs;
        return this;
    }

    public void setNumSongs(Integer numSongs) {
        this.numSongs = numSongs;
    }

    public Band getBand() {
        return band;
    }

    public Album band(Band band) {
        this.band = band;
        return this;
    }

    public void setBand(Band band) {
        this.band = band;
    }

    public Set<Song> getSongNames() {
        return songNames;
    }

    public Album songNames(Set<Song> songs) {
        this.songNames = songs;
        return this;
    }

    public Album addSongName(Song song) {
        this.songNames.add(song);
        song.setAlbum(this);
        return this;
    }

    public Album removeSongName(Song song) {
        this.songNames.remove(song);
        song.setAlbum(null);
        return this;
    }

    public void setSongNames(Set<Song> songs) {
        this.songNames = songs;
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
        Album album = (Album) o;
        if (album.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), album.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Album{" +
            "id=" + getId() +
            ", albumName='" + getAlbumName() + "'" +
            ", numSongs='" + getNumSongs() + "'" +
            "}";
    }
}
