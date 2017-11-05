package com.mycompany.myapp.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

/**
 * A Social.
 */
@Entity
@Table(name = "social")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Social implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name_social")
    private String nameSocial;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNameSocial() {
        return nameSocial;
    }

    public Social nameSocial(String nameSocial) {
        this.nameSocial = nameSocial;
        return this;
    }

    public void setNameSocial(String nameSocial) {
        this.nameSocial = nameSocial;
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
        Social social = (Social) o;
        if (social.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), social.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Social{" +
            "id=" + getId() +
            ", nameSocial='" + getNameSocial() + "'" +
            "}";
    }
}
