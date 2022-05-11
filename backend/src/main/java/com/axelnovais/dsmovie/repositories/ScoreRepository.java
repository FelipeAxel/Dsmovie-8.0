package com.axelnovais.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.axelnovais.dsmovie.entities.Score;
import com.axelnovais.dsmovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK>{

}
