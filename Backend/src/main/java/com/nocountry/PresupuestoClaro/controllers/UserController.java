package com.nocountry.PresupuestoClaro.controllers;

import com.nocountry.PresupuestoClaro.entities.User;
import com.nocountry.PresupuestoClaro.services.UserServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/*Declaramos que va a controlar los endpoint rest*/
@RestController
/*usamos corsorigin para que permita usar la api desde un mismo servicor*/
@CrossOrigin(origins = "*")
/*Declaramos la uri que accedera a este endpoint*/
@RequestMapping(path= "/userId")
public class UserController extends BaseControllerImpl<User, UserServiceImpl>{

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable Long id, @RequestBody User user){
        try{
            System.out.println(user);
            return ResponseEntity.status(HttpStatus.OK).body(servicio.update(id, user));
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("{\"error\":\"Error: Por favor intente mas tarde.\"");
        }
    }


  /* reemplazamos este codigo por autowired usado en base controller implementation
    private UserServiceImpl userIdService;

    public UserController(UserServiceImpl userIdService){
        this.userIdService= userIdService;
    }
*/

}
