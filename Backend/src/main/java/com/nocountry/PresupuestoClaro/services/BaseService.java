package com.nocountry.PresupuestoClaro.services;

import com.nocountry.PresupuestoClaro.entities.Base;
import jakarta.transaction.Transactional;

import java.io.Serializable;
import java.util.List;

//La interface es de tipo generica, le podemos pasar cualq entidad
public interface BaseService<E extends Base, ID extends Serializable>{

    public List<E> findAll() throws Exception;
    public E findById(ID id) throws  Exception;
    public E save(E entity) throws  Exception;
    public E update(ID id, E entity) throws  Exception;

    @Transactional
    E update(Long id, E entity) throws Exception;

    public boolean delete(ID id) throws  Exception;

}
