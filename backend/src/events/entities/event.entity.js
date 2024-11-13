const { Entity, PrimaryGeneratedColumn, Column } = require('typeorm');

@Entity()
class Event {
  @PrimaryGeneratedColumn()
  id;

  @Column()
  title;

  @Column()
  date;

  @Column({ nullable: true })
  description;

  @Column({ nullable: true })
  media; // URL for media files (image, video)
}

module.exports = Event;
