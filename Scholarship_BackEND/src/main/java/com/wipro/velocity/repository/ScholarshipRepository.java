package com.wipro.velocity.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.wipro.velocity.model.Scholarship;
@Repository
public interface ScholarshipRepository extends MongoRepository<Scholarship, String>{


	@Query("{ 'country' : ?0,  'state': ?1 }")
	List<Scholarship> findByCountryAndState(@Param("country") String country, @Param("state")String state);

}
