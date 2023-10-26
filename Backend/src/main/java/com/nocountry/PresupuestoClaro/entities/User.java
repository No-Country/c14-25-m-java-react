package com.nocountry.PresupuestoClaro.entities;

import jakarta.persistence.*;
import lombok.*;
//import org.hibernate.envers.Audited;

import java.util.Collection;
import java.util.Date;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

@Data
@Builder
@Entity
@Table(name= "user", uniqueConstraints = {@UniqueConstraint(columnNames = {"email"})})
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
/*No funcionan estas anotaciones para update
@DynamicInsert
@DynamicUpdate
*/
public class User extends Base implements  UserDetails{

    /*Generar Clases para auditar las entidades - Ver videos de JPA --> No hacer auditoria, a menos se pida*/
    @Column(name="email", nullable = false)
    private String email;

    @Column(name="password")
    private String password;

    @Column(name="nombre")
    private String nombre;

    @Column(name="apellido")
    private String apellido;

    @Basic
    @Column(name="username", nullable = false)
    private String username;

    @Column(name="creationDate")
    private Date creationDate;

    @Column(name="disableDate")
    private Date disableDate;

    @Enumerated(EnumType.STRING)
    Role role;




    //Seguridad para login y register

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority((role.name())));
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

}
