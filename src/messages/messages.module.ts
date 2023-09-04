import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
/**
 * DI container Step 2:
 */

//import all injectable classes
import { MessagesService } from './messages.service';
import { MessagesRepository } from './messages.repository';

@Module({
  controllers: [MessagesController],
  // things that can be used as Dependency for other classes
  providers:[MessagesService, MessagesRepository]
})
export class MessagesModule {}
