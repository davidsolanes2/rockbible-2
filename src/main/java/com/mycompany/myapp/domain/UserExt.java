package com.mycompany.myapp.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

/**
 * A UserExt.
 */
@Entity
@Table(name = "user_ext")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class UserExt implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Lob
    @Column(name = "image")
    private byte[] image;

    @Column(name = "image_content_type")
    private String imageContentType;

    @Column(name = "latitude")
    private Double latitude;

    @Column(name = "logitude")
    private Double logitude;

    @Column(name = "location_google_maps")
    private String locationGoogleMaps;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public byte[] getImage() {
        return image;
    }

    public UserExt image(byte[] image) {
        this.image = image;
        return this;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }

    public String getImageContentType() {
        return imageContentType;
    }

    public UserExt imageContentType(String imageContentType) {
        this.imageContentType = imageContentType;
        return this;
    }

    public void setImageContentType(String imageContentType) {
        this.imageContentType = imageContentType;
    }

    public Double getLatitude() {
        return latitude;
    }

    public UserExt latitude(Double latitude) {
        this.latitude = latitude;
        return this;
    }

    public void setLatitude(Double latitude) {
        this.latitude = latitude;
    }

    public Double getLogitude() {
        return logitude;
    }

    public UserExt logitude(Double logitude) {
        this.logitude = logitude;
        return this;
    }

    public void setLogitude(Double logitude) {
        this.logitude = logitude;
    }

    public String getLocationGoogleMaps() {
        return locationGoogleMaps;
    }

    public UserExt locationGoogleMaps(String locationGoogleMaps) {
        this.locationGoogleMaps = locationGoogleMaps;
        return this;
    }

    public void setLocationGoogleMaps(String locationGoogleMaps) {
        this.locationGoogleMaps = locationGoogleMaps;
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
        UserExt userExt = (UserExt) o;
        if (userExt.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), userExt.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "UserExt{" +
            "id=" + getId() +
            ", image='" + getImage() + "'" +
            ", imageContentType='" + imageContentType + "'" +
            ", latitude='" + getLatitude() + "'" +
            ", logitude='" + getLogitude() + "'" +
            ", locationGoogleMaps='" + getLocationGoogleMaps() + "'" +
            "}";
    }
}
