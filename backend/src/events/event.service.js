const { Injectable } = require('@nestjs/common');
const { InjectRepository } = require('@nestjs/typeorm');
const { Repository } = require('typeorm');
const Event = require('./entities/event.entity');
const EventDto = require('./dto/event.dto');

@Injectable()
class EventService {
  constructor(@InjectRepository(Event) eventRepository) {
    this.eventRepository = eventRepository;
  }

  // Create a new event
  async create(eventDto) {
    const event = this.eventRepository.create(eventDto);
    return await this.eventRepository.save(event);
  }

  // Get all events
  async findAll() {
    return await this.eventRepository.find();
  }

  // Get event by ID
  async findOne(id) {
    return await this.eventRepository.findOne(id);
  }

  // Update an event by ID
  async update(id, eventDto) {
    await this.eventRepository.update(id, eventDto);
    return this.findOne(id);
  }

  // Delete an event by ID
  async remove(id) {
    await this.eventRepository.delete(id);
  }
}

module.exports = EventService;
