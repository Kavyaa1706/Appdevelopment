package com.example.demo.Controller;

import java.util.List;

import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Service.EventService;
import com.example.demo.model.Event;
import com.fasterxml.jackson.core.JsonProcessingException;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

@CrossOrigin
@RestController
@RequestMapping("/api/events")
public class EventController {
	@Autowired
	private EventService eventService;
	
	@Operation(summary = "Creates a new Event")
    @ApiResponses(value = {@ApiResponse(responseCode = "201",
                                 description = "Event created successfully"),
                           @ApiResponse(responseCode = "400",
                                 description = "Event is invalid")})
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(produces = "application/json", consumes = "application/json")
    public ResponseEntity<Event> create(final @RequestBody Event event){
        Event createdEvent = eventService.create(event);
        return ResponseEntity.ok(createdEvent);
    }
	
//	
//	@Operation(summary = "Get an event with given id") 
//    @ApiResponses(value = {@ApiResponse(responseCode = "200",
//                                description = "getting event successfully"),
//    		              @ApiResponse(responseCode = "404",
//    		                    description = "event not found")})
//    @GetMapping(value = "/get/{id}", produces = "application/json")
//    public ResponseEntity<Optional<Event>> read(final @PathVariable Integer id){
//    	Optional<Event> createdEvent = eventService.read(id);
//    	return ResponseEntity.ok(createdEvent);
//    }
	@Operation(summary = "Get all events ")
	@GetMapping(value = "/get", produces = "application/json")
	public ResponseEntity<List<Event>> get() {
		
		List<Event> result = eventService.getAllRecords();
		return ResponseEntity.ok(result);
	}
	
	@Operation(summary = "Retrieve events by given id")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "Event was retrieved successfully!"),
			@ApiResponse(responseCode = "500", description = "Could not retrieve Event")
	})
	@ResponseStatus(HttpStatus.FOUND)
	@GetMapping(value = "/get/{id}", produces = "application/json")
	public ResponseEntity<Optional<Event>> getById(@PathVariable("id") Integer id) {
		
		Optional<Event> result =eventService.getById(id);
		return ResponseEntity.ok(result);
	}
	
	
	@Operation(summary = " Updates the event by given_id")
    @ApiResponses(value = {@ApiResponse(responseCode ="200", 
                                 description ="event updated successfully"),
    		              @ApiResponse (responseCode ="400",
    		                     description ="event is invalid"),
    		              @ApiResponse (responseCode ="401",
    		                     description ="invalid credentials"),
    		              @ApiResponse (responseCode ="404",
    		                     description ="event not found")})
    @PutMapping(value = "/{id}",produces = "application/json",consumes = "application/json")
    public ResponseEntity<Event> update(final @RequestBody Event event) throws JsonProcessingException{
    	final Event updatedEvent = eventService.update(event);
    	return ResponseEntity.ok(updatedEvent);
    }

	
	@Operation(summary = "Deletes the event by given id")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", 
                               description = "event deleted succesfully"),
    		               @ApiResponse(responseCode = "401",
    		                   description = "invalid credentials"),
    		               @ApiResponse(responseCode = "404",
    		                   description = "event not found")})
    @DeleteMapping("/{id}")
    public void delete(final @PathVariable("id") Integer id)
    {
    	eventService.delete(id);
    }
}
