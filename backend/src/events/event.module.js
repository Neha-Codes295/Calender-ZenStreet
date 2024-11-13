const { Module } = require('@nestjs/common');
const { TypeOrmModule } = require('@nestjs/typeorm');
const EventController = require('./event.controller');
const EventService = require('./event.service');
const Event = require('./entities/event.entity');

@Module({
  imports: [TypeOrmModule.forFeature([Event])],
  controllers: [EventController],
  providers: [EventService],
})
class EventModule {}

module.exports = EventModule;
