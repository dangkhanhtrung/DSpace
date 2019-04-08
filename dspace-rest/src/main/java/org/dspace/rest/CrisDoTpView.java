/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.dspace.rest;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author binhthgc
 */
@Entity
@Table(name = "cris_do_tp_view")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "CrisDoTpView.findAll", query = "SELECT c FROM CrisDoTpView c"),
    @NamedQuery(name = "CrisDoTpView.findById", query = "SELECT c FROM CrisDoTpView c WHERE c.id = :id"),
    @NamedQuery(name = "CrisDoTpView.findByLabel", query = "SELECT c FROM CrisDoTpView c WHERE c.label = :label"),
    @NamedQuery(name = "CrisDoTpView.findByShortname", query = "SELECT c FROM CrisDoTpView c WHERE c.shortname = :shortname")})
public class CrisDoTpView implements Serializable {
    private static final long serialVersionUID = 1L;
    @Column(name = "id")
    @Id
    private Integer id;
    @Size(max = 255)
    @Column(name = "label")
    private String label;
    @Size(max = 255)
    @Column(name = "shortname")
    private String shortname;

    public CrisDoTpView() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public String getShortname() {
        return shortname;
    }

    public void setShortname(String shortname) {
        this.shortname = shortname;
    }
    
}
