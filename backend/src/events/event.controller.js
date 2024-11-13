const { Controller, Get, Post, Body, Param, Put, Delete } = require('@nestjs/common');
const EventService = require('./event.service');
const EventDto = require('./dto/event.dto');

@Controller('events')
class EventController {
  constructor() {
    this.eventService = new EventService();
  }

  // Get all events
  @Get()
  async findAll() {
    return await this.eventService.findAll();
  }

  // Get event by ID
  @Get(':id')
  async findOne(@Param('id') id) {
    return await this.eventService.findOne(id);
  }

  // Create a new event
  @Post()
  async create(@Body() eventDto) {
    return await this.eventService.create(eventDto);
  }

  // Update event by ID
  @Put(':id')
  async update(@Param('id') id, @Body() eventDto) {
    return await this.eventService.update(id, eventDto);
  }

  // Delete event by ID
  @Delete(':id')
  async remove(@Param('id') id) {
    return await this.eventService.remove(id);
  }
}

module.exports = EventController;
