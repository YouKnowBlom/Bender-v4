import { EventHandler } from "../data/types";
import { MessageDeleteBulkData, LowercaseEventName } from "../data/gatewayTypes";
import Bot from "../structures/bot";

export default class MessageDeleteBulkHandler extends EventHandler {
    constructor(bot: Bot) {
        super(__filename as LowercaseEventName, bot);
    }

    cacheHandler = (eventData: MessageDeleteBulkData) => {

    }

    handler = (eventData: MessageDeleteBulkData) => {

    }
}