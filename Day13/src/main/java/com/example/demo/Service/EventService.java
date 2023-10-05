package com.example.demo.Service;

import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Repository.EventRepository;
import com.example.demo.model.Event;

@Service
public class EventService {

	@Autowired
    EventRepository eventRepository;

    public Event create(Event event){
        return eventRepository.save(event);
    }
public List<Event> getAllRecords() {
		
		return eventRepository.findAll();
	}

	public Optional<Event> getById(Integer id) {
		
		return eventRepository.findById(id);
	}
    public Optional<Event> read(Integer id){
        return eventRepository.findById(id);
    }
    
    public Event update(Event event)
    {
    	return eventRepository.save(event);
    }
    public void delete(Integer id)
    {
    	eventRepository.deleteById(id);
    }
}
