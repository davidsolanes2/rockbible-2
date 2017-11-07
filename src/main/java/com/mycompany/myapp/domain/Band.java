package com.mycompany.myapp.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

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

    @Column(name = "status")
    private Boolean status;

    @ManyToOne
    private Country country;

    @ManyToOne
    private Label label;

    @OneToMany(mappedBy = "band")
    @JsonIgnore
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Album> nameAlbums = new HashSet<>();

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

    public Boolean isStatus() {
        return status;
    }

    public Band status(Boolean status) {
        this.status = status;
        return this;
    }

    public void setStatus(Boolean status) {
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
            ", status='" + isStatus() + "'" +
            "}";
    }
}
