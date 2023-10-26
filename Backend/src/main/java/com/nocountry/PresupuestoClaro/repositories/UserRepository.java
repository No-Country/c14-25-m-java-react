package com.nocountry.PresupuestoClaro.repositories;

import com.nocountry.PresupuestoClaro.entities.User;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends BaseRepository<User, Long>{

    Optional<User> findByEmail(String email);
    Optional<User> findByUsername(String username);


}
