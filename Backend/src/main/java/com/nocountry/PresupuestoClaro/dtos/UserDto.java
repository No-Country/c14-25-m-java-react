package com.nocountry.PresupuestoClaro.dtos;

import com.nocountry.PresupuestoClaro.entities.User;

import java.util.Date;

public class UserDto {
    private Long id;
    private String email;
    private String password;
    private Date creationDate;
    private Date disableDate;

    private String nombre;

    private String apellido;


    private String username;

    public UserDto(Long id, String email, String password, Date creationDate, Date disableDate) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.creationDate = creationDate;
        this.disableDate = disableDate;
    }

    public UserDto(Long id, String email, String password, Date creationDate, Date disableDate, String nombre, String apellido, String username) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.creationDate = creationDate;
        this.disableDate = disableDate;
        this.nombre = nombre;
        this.apellido = apellido;
        this.username = username;
    }

    public UserDto(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public User convertToEntity() {
        User c = new User();
        c.setEmail(email);
        c.setPassword(password);
        return c;
    }
}
