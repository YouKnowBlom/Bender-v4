import { EventHandler } from '../data/types';
import { ThreadSyncData, LowercaseEventName } from '../data/gatewayTypes';
import Bot from '../structures/bot';
import { basename } from 'path';

export default class ThreadListSyncHandler extends EventHandler<ThreadSyncData> {
    constructor(bot: Bot) {
        super(basename(__filename, '.js') as LowercaseEventName, bot);
    }

    cacheHandler = (eventData: ThreadSyncData) => {
        this.bot.cache.threads.sync(eventData);
    }

    handler = (/*eventData: ThreadSyncData*/) => {
        // event unused for now
    }
}