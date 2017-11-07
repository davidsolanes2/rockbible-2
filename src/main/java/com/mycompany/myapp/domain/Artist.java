package com.mycompany.myapp.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

import com.mycompany.myapp.domain.enumeration.Sex;

import com.mycompany.myapp.domain.enumeration.Status;

/**
 * A Artist.
 */
@Entity
@Table(name = "artist")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Artist implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name_artist")
    private String nameArtist;

    @Enumerated(EnumType.STRING)
    @Column(name = "sexo")
    private Sex sexo;

    @Column(name = "born")
    private LocalDate born;

    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    private Status status;

    @ManyToOne
    private Band band;

    @ManyToOne
    private Country country;

    @ManyToOne
    private Label label;

    @ManyToMany
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    @JoinTable(name = "artist_review",
               joinColumns = @JoinColumn(name="artists_id", referencedColumnName="id"),
               inverseJoinColumns = @JoinColumn(name="reviews_id", referencedColumnName="id"))
    private Set<Review> reviews = new HashSet<>();

    @ManyToMany(mappedBy = "artists")
    @JsonIgnore
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Instrument> instruments = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNameArtist() {
        return nameArtist;
    }

    public Artist nameArtist(String nameArtist) {
        this.nameArtist = nameArtist;
        return this;
    }

    public void setNameArtist(String nameArtist) {
        this.nameArtist = nameArtist;
    }

    public Sex getSexo() {
        return sexo;
    }

    public Artist sexo(Sex sexo) {
        this.sexo = sexo;
        return this;
    }

    public void setSexo(Sex sexo) {
        this.sexo = sexo;
    }

    public LocalDate getBorn() {
        return born;
    }

    public Artist born(LocalDate born) {
        this.born = born;
        return this;
    }

    public void setBorn(LocalDate born) {
        this.born = born;
    }

    public Status getStatus() {
        return status;
    }

    public Artist status(Status status) {
        this.status = status;
        return this;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public Band getBand() {
        return band;
    }

    public Artist band(Band band) {
        this.band = band;
        return this;
    }

    public void setBand(Band band) {
        this.band = band;
    }

    public Country getCountry() {
        return country;
    }

    public Artist country(Country country) {
        this.country = country;
        return this;
    }

    public void setCountry(Country country) {
        this.country = country;
    }

    public Label getLabel() {
        return label;
    }

    public Artist label(Label label) {
        this.label = label;
        return this;
    }

    public void setLabel(Label label) {
        this.label = label;
    }

    public Set<Review> getReviews() {
        return reviews;
    }

    public Artist reviews(Set<Review> reviews) {
        this.reviews = reviews;
        return this;
    }

    public Artist addReview(Review review) {
        this.reviews.add(review);
        review.getArtists().add(this);
        return this;
    }

    public Artist removeReview(Review review) {
        this.reviews.remove(review);
        review.getArtists().remove(this);
        return this;
    }

    public void setReviews(Set<Review> reviews) {
        this.reviews = reviews;
    }

    public Set<Instrument> getInstruments() {
        return instruments;
    }

    public Artist instruments(Set<Instrument> instruments) {
        this.instruments = instruments;
        return this;
    }

    public Artist addInstrument(Instrument instrument) {
        this.instruments.add(instrument);
        instrument.getArtists().add(this);
        return this;
    }

    public Artist removeInstrument(Instrument instrument) {
        this.instruments.remove(instrument);
        instrument.getArtists().remove(this);
        return this;
    }

    public void setInstruments(Set<Instrument> instruments) {
        this.instruments = instruments;
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
        Artist artist = (Artist) o;
        if (artist.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), artist.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Artist{" +
            "id=" + getId() +
            ", nameArtist='" + getNameArtist() + "'" +
            ", sexo='" + getSexo() + "'" +
            ", born='" + getBorn() + "'" +
            ", status='" + getStatus() + "'" +
            "}";
    }
}
