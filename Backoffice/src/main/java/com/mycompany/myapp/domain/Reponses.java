package com.mycompany.myapp.domain;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;

/**
 * A Reponses.
 */
@Entity
@Table(name = "reponses")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Reponses implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "idreponse", nullable = false)
    private Integer idreponse;

    @Column(name = "reponse")
    private String reponse;

    @ManyToOne
    @JsonIgnoreProperties("reponses")
    private Questions questions;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getIdreponse() {
        return idreponse;
    }

    public Reponses idreponse(Integer idreponse) {
        this.idreponse = idreponse;
        return this;
    }

    public void setIdreponse(Integer idreponse) {
        this.idreponse = idreponse;
    }

    public String getReponse() {
        return reponse;
    }

    public Reponses reponse(String reponse) {
        this.reponse = reponse;
        return this;
    }

    public void setReponse(String reponse) {
        this.reponse = reponse;
    }

    public Questions getQuestions() {
        return questions;
    }

    public Reponses questions(Questions questions) {
        this.questions = questions;
        return this;
    }

    public void setQuestions(Questions questions) {
        this.questions = questions;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Reponses)) {
            return false;
        }
        return id != null && id.equals(((Reponses) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "Reponses{" +
            "id=" + getId() +
            ", idreponse=" + getIdreponse() +
            ", reponse='" + getReponse() + "'" +
            "}";
    }
}