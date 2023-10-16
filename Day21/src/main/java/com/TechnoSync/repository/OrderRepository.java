package com.TechnoSync.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.TechnoSync.model.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

    void deleteByUserUid(Long uid);

    List<Order> findAllByUserUid(Long uid);

}
