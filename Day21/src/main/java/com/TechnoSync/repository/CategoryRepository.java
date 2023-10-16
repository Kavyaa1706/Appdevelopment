package com.TechnoSync.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.TechnoSync.model.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {

    Category findByCid(Long cid);

}
