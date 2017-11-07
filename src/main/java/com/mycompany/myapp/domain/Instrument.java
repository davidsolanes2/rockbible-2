package com.mycompany.myapp.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A Instrument.
 */
@Entity
@Table(name = "instrument")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Instrument implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name_instrument")
    private String nameInstrument;

    @ManyToMany
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    @JoinTable(name = "instrument_artist",
               joinColumns = @JoinColumn(name="instruments_id", referencedColumnName="id"),
               inverseJoinColumns = @JoinColumn(name="artists_id", referencedColumnName="id"))
    private Set<Artist> artists = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNameInstrument() {
        return nameInstrument;
    }

    public Instrument nameInstrument(String nameInstrument) {
        this.nameInstrument = nameInstrument;
        return this;
    }

    public void setNameInstrument(String nameInstrument) {
        this.nameInstrument = nameInstrument;
    }

    public Set<Artist> getArtists() {
        return artists;
    }

    public Instrument artists(Set<Artist> artists) {
        this.artists = artists;
        return this;
    }

    public Instrument addArtist(Artist artist) {
        this.artists.add(artist);
        artist.getInstruments().add(this);
        return this;
    }

    public Instrument removeArtist(Artist artist) {
        this.artists.remove(artist);
        artist.getInstruments().remove(this);
        return this;
    }

    public void setArtists(Set<Artist> artists) {
        this.artists = artists;
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
        Instrument instrument = (Instrument) o;
        if (instrument.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), instrument.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Instrument{" +
            "id=" + getId() +
            ", nameInstrument='" + getNameInstrument() + "'" +
            "}";
    }
}
