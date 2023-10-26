package com.nocountry.PresupuestoClaro.controllers;

import com.nocountry.PresupuestoClaro.entities.Base;
import com.nocountry.PresupuestoClaro.services.BaseServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

public abstract class BaseControllerImpl<E extends Base, S extends BaseServiceImpl<E, Long>> implements BaseController<E, Long> {

    @Autowired
    protected S servicio;

    @GetMapping("")
    public ResponseEntity<?> getAll(){
        try{
            /*si se encuentrar usuariosId, se devuelven ene el body de la respuesta*/
            return ResponseEntity.status(HttpStatus.OK).body(servicio.findAll());
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("{\"error\":\"Error: Por favor intente mas tarde.\"");
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getOne( @PathVariable Long id){
        try{
            /*si se encuentra usuarioId, se devuelve en el body de la respuesta*/
            return ResponseEntity.status(HttpStatus.OK).body(servicio.findById(id));
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("{\"error\":\"Error: Por favor intente mas tarde.\"");
        }
    }

    @PostMapping("")
    public ResponseEntity<?> save(@RequestBody E entity){
        try{
            return ResponseEntity.status(HttpStatus.OK).body(servicio.save(entity));
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("{\"error\":\"Error: Por favor intente mas tarde.\"");
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable Long id, @RequestBody E entity){
        try{
            System.out.println(entity);
            return ResponseEntity.status(HttpStatus.OK).body(servicio.update(id, entity));
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("{\"error\":\"Error: Por favor intente mas tarde.\"");
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(Long id){
        try{
            /*si se encuentra usuarioId, se devuelve en el body de la respuesta*/
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body(servicio.delete(id));
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("{\"error\":\"Error: Por favor intente mas tarde.\"");
        }
    }

}
