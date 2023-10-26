package com.nocountry.PresupuestoClaro.security.Auth;

import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
public class RegisterRequest {
    String email;
    String password;
    String nombre;
    String apellido;
    String username;
 /*   String name;
    String apellido; */
}
