/**
 * IMPLEMENT DEPENDENCY INJECTION(DI)
 * Add class into Dependency container(DI) container
 * 
 * FIRST service class(below/same file code)
 * SECOND repository class(repository file)
 */

//1. import Injectable 
import { Injectable } from '@nestjs/common';
import { MessagesRepository } from "./messages.repository";

/**
 * This marking this class inside DI container
 */
//2. apply injectable decorator
@Injectable()
export class MessagesService {
    constructor(public messagesRepo: MessagesRepository){}

    findOne(id: string) {
        return this.messagesRepo.findOne(id);
    }

    findAll() {
        return this.messagesRepo.findAll();
    }

    //FIXME
    create(content: string) {
        //temp: card-coded return
        return {12: content}
        // return this.messagesRepo.create(content);
    }
}