import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-messages.dto';

@Controller('messages')
export class MessagesController {
    @Get('')
    listMessages(){
        console.log('Hello from Nest GET');
    }

    @Post('')
    createMessages(@Body() body: CreateMessageDto){
        console.log(body);
    }

    @Get('/:id')
    getMessages(@Param('id') id: string){

    }
}
