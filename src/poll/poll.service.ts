import { Component } from '@nestjs/common';

@Injectable()
export class PollService {

    private poll: string;

    create(poll) {
        const Ably = require('ably');
        // replace with your API Key 
        let ably = new Ably.Realtime('NfN0Qg.EByhdA:56_1TKdxN_mvlHbq');
        let channel = ably.channels.get('ably-nest');

        const data = {
            points: 1,
            movie: poll.movie
        };

        channel.publish('vote', data);
    }
}