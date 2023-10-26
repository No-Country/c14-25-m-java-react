package com.nocountry.PresupuestoClaro.services;

import com.nocountry.PresupuestoClaro.entities.User;
import com.nocountry.PresupuestoClaro.repositories.BaseRepository;
import com.nocountry.PresupuestoClaro.repositories.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl extends BaseServiceImpl<User, Long> implements UserService {

    //cumple la misma funcion que el constructor
    @Autowired
    private UserRepository userRepository;

    public UserServiceImpl(BaseRepository<User, Long> baseRepository){
        super(baseRepository);
    }

    @Transactional
    public User update(Long  id, User user) throws Exception {
        try {
            Optional<User> entityOptional = baseRepository.findById(id);
            user.setId(id);
            baseRepository.save(user);
            return user;
        }catch(Exception e){
            throw new Exception(e.getMessage());
        }
    }


/*
    @Override
    @Transactional
    // transactional los metodos hacen transacciones con la base de datos, begin, commit, rollback
    // evitamos tener que iniciar la conexion con la bd y demas
    public List<User> findAll() throws Exception {
        try {
            List<User> entities = userRepository.findAll();
            return entities;
        }catch(Exception e){
            throw new Exception(e.getMessage());
        }
    }

    @Override
    @Transactional
    public User findById(Long id) throws Exception {
        try {
            // no sabemos si en la bd se encontrara un objeto con el id requerido
            Optional<User> entityOptional = userRepository.findById(id);
            return entityOptional.get();
        }catch(Exception e){
            throw new Exception(e.getMessage());
        }
    }

    @Override
    @Transactional
    public User save(User entity) throws Exception {
        try {
            entity = userRepository.save(entity);
            return entity;
        }catch(Exception e){
            throw new Exception(e.getMessage());
        }
    }

    @Override
    @Transactional
    public User update(Long id, User entity) throws Exception {
        try {
            Optional<User> entityOptional = userRepository.findById(id);
            User userId = entityOptional.get();
            userId = userRepository.save(entity);
            return userId;
        }catch(Exception e){
            throw new Exception(e.getMessage());
        }
    }

    @Override
    @Transactional
    public boolean delete(Long id) throws Exception {
        try {
            if(userRepository.existsById(id)){
                userRepository.deleteById(id);
                return true;
            }else{
                throw  new Exception();
            }
        }catch(Exception e){
            throw  new Exception(e.getMessage());
        }
    }
    */
}
