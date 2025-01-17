import { EventHandler } from '../data/types';
import { MessageUpdateData, LowercaseEventName } from '../data/gatewayTypes';
import Bot from '../structures/bot';
import { basename } from 'path';

export default class MessageUpdateHandler extends EventHandler<MessageUpdateData> {
    constructor(bot: Bot) {
        super(basename(__filename, '.js') as LowercaseEventName, bot);
    }

    cacheHandler = (eventData: MessageUpdateData) => {
        if (eventData.guild_id) {
            this.bot.cache.messages.update(eventData);
        } else {
            this.bot.cache.dmMessages.update(eventData);
        }
    }

    handler = (/*eventData: MessageUpdateData*/) => {
        // TODO: if content changed and edit logging is enabled, post to log channel
    }
}