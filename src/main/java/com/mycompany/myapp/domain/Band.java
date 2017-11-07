package com.mycompany.myapp.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

import com.mycompany.myapp.domain.enumeration.Status;

/**
 * A Band.
 */
@Entity
@Table(name = "band")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Band implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name_band")
    private String nameBand;

    @Column(name = "location_google_maps")
    private String locationGoogleMaps;

    @Column(name = "latitude")
    private Double latitude;

    @Column(name = "logitude")
    private Double logitude;

    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    private Status status;

    @ManyToOne
    private Country country;

    @ManyToOne
    private Label label;

    @OneToMany(mappedBy = "band")
    @JsonIgnore
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Album> nameAlbums = new HashSet<>();

    @OneToMany(mappedBy = "band")
    @JsonIgnore
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Artist> artists = new HashSet<>();

    @ManyToMany(mappedBy = "genreNames")
    @JsonIgnore
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Genre> nameBands = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNameBand() {
        return nameBand;
    }

    public Band nameBand(String nameBand) {
        this.nameBand = nameBand;
        return this;
    }

    public void setNameBand(String nameBand) {
        this.nameBand = nameBand;
    }

    public String getLocationGoogleMaps() {
        return locationGoogleMaps;
    }

    public Band locationGoogleMaps(String locationGoogleMaps) {
        this.locationGoogleMaps = locationGoogleMaps;
        return this;
    }

    public void setLocationGoogleMaps(String locationGoogleMaps) {
        this.locationGoogleMaps = locationGoogleMaps;
    }

    public Double getLatitude() {
        return latitude;
    }

    public Band latitude(Double latitude) {
        this.latitude = latitude;
        return this;
    }

    public void setLatitude(Double latitude) {
        this.latitude = latitude;
    }

    public Double getLogitude() {
        return logitude;
    }

    public Band logitude(Double logitude) {
        this.logitude = logitude;
        return this;
    }

    public void setLogitude(Double logitude) {
        this.logitude = logitude;
    }

    public Status getStatus() {
        return status;
    }

    public Band status(Status status) {
        this.status = status;
        return this;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public Country getCountry() {
        return country;
    }

    public Band country(Country country) {
        this.country = country;
        return this;
    }

    public void setCountry(Country country) {
        this.country = country;
    }

    public Label getLabel() {
        return label;
    }

    public Band label(Label label) {
        this.label = label;
        return this;
    }

    public void setLabel(Label label) {
        this.label = label;
    }

    public Set<Album> getNameAlbums() {
        return nameAlbums;
    }

    public Band nameAlbums(Set<Album> albums) {
        this.nameAlbums = albums;
        return this;
    }

    public Band addNameAlbum(Album album) {
        this.nameAlbums.add(album);
        album.setBand(this);
        return this;
    }

    public Band removeNameAlbum(Album album) {
        this.nameAlbums.remove(album);
        album.setBand(null);
        return this;
    }

    public void setNameAlbums(Set<Album> albums) {
        this.nameAlbums = albums;
    }

    public Set<Artist> getArtists() {
        return artists;
    }

    public Band artists(Set<Artist> artists) {
        this.artists = artists;
        return this;
    }

    public Band addArtist(Artist artist) {
        this.artists.add(artist);
        artist.setBand(this);
        return this;
    }

    public Band removeArtist(Artist artist) {
        this.artists.remove(artist);
        artist.setBand(null);
        return this;
    }

    public void setArtists(Set<Artist> artists) {
        this.artists = artists;
    }

    public Set<Genre> getNameBands() {
        return nameBands;
    }

    public Band nameBands(Set<Genre> genres) {
        this.nameBands = genres;
        return this;
    }

    public Band addNameBand(Genre genre) {
        this.nameBands.add(genre);
        genre.getGenreNames().add(this);
        return this;
    }

    public Band removeNameBand(Genre genre) {
        this.nameBands.remove(genre);
        genre.getGenreNames().remove(this);
        return this;
    }

    public void setNameBands(Set<Genre> genres) {
        this.nameBands = genres;
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
        Band band = (Band) o;
        if (band.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), band.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Band{" +
            "id=" + getId() +
            ", nameBand='" + getNameBand() + "'" +
            ", locationGoogleMaps='" + getLocationGoogleMaps() + "'" +
            ", latitude='" + getLatitude() + "'" +
            ", logitude='" + getLogitude() + "'" +
            ", status='" + getStatus() + "'" +
            "}";
    }
}
