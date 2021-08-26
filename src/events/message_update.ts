import { EventHandler } from "../data/types";
import { MessageUpdateData, LowercaseEventName } from "../data/gatewayTypes";
import Bot from "../structures/bot";

export default class MessageUpdateHandler extends EventHandler {
    constructor(bot: Bot) {
        super(__filename as LowercaseEventName, bot);
    }

    cacheHandler = (eventData: MessageUpdateData) => {

    }

    handler = (eventData: MessageUpdateData) => {

    }
}