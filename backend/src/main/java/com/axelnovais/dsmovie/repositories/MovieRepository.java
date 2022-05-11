package com.axelnovais.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.axelnovais.dsmovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long>{
	
}
