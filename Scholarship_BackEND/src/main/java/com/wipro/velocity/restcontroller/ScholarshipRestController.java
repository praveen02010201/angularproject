package com.wipro.velocity.restcontroller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wipro.velocity.exception.ResourceNotFoundException;
import com.wipro.velocity.model.Scholarship;
import com.wipro.velocity.repository.ScholarshipRepository;

@RestController
@RequestMapping("/Scholar")
@CrossOrigin(origins="http://localhost:4200")
public class ScholarshipRestController {

	@Autowired
	private ScholarshipRepository srepo;

	@PostMapping("/scholarship")
	public Scholarship createScholarship(@Validated @RequestBody Scholarship scholarship)
	{

		Scholarship s = new Scholarship();
		s.setCountry(scholarship.getCountry());
		s.setState(scholarship.getState());
		s.setAppstart(scholarship.getAppstart());
		s.setAppend(scholarship.getAppend());
		s.setDate(scholarship.getDate());
		s.setTime(scholarship.getTime());
		s.setStudents(scholarship.getStudents());
		s.setCapacity(scholarship.getCapacity());
		s.setAmount(scholarship.getAmount());
		s.setEamount(scholarship.getEamount());

		Scholarship generated = srepo.save(s);
		return generated;
	}


	@GetMapping("/scholarship/{sNumber}")
	public ResponseEntity<Scholarship> getScholarshipById(@PathVariable(value = "sNumber") String sNumber)
			throws ResourceNotFoundException {
		Scholarship scholarship = srepo.findById(sNumber)
				.orElseThrow(() -> new ResourceNotFoundException("Scholarship not found for this id :: " + sNumber));

		return ResponseEntity.ok().body(scholarship);
	}

	@DeleteMapping("/scholarship/{id}")
	public Map<String, Boolean> deleteProduct(@PathVariable(value = "id") String id) throws ResourceNotFoundException{

		Scholarship scholarship = srepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Scholarship not found for this id :: " + id));
		srepo.delete(scholarship);

		Map<String, Boolean> response = new HashMap<>();
		response.put("Deleted", Boolean.TRUE);
		return response;
	}

	
	@PutMapping("/scholarship/{sNumber}")
	public ResponseEntity<Scholarship> updateProduct(@PathVariable(value = "sNumber") String sNumber,
			@Validated @RequestBody Scholarship s) throws ResourceNotFoundException {

		Scholarship scholarship = srepo.findById(sNumber)
				.orElseThrow(() -> new ResourceNotFoundException("Product not found for this id :: " + sNumber));


		scholarship.setCountry(s.getCountry());
		scholarship.setState(s.getState());
		scholarship.setAppstart(s.getAppstart());
		scholarship.setAppend(s.getAppend());
		scholarship.setDate(s.getDate());
		scholarship.setTime(s.getTime());
		scholarship.setStudents(s.getStudents());
		scholarship.setAmount(s.getAmount());
		scholarship.setEamount(s.getEamount());

		final Scholarship updatedProduct = srepo.save(scholarship);
		return ResponseEntity.ok(updatedProduct);
	}

	
	@GetMapping("/scholarship/{country}/{state}")
	public List<Scholarship> getAllProducts(@PathVariable(value = "country") String country, @PathVariable(value = "state") String state) {
		return srepo.findByCountryAndState(country,state);
	}

}
