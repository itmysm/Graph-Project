// This script takes a list of messages as input, extracts the time, date, sender's name, and message content from each message,
// organizes this information into an object, and then returns the object.
import { messagePatterns } from "../patterns/index.js";
const now = moment(); // Creates a moment object representing the current date and time
const defaultDate = "1/1/11, 3:42:06 in the afternoon";
export const whatsappConverter = (chats, dataStructure = "android") => {
    const messages = [];
    const defaultDate = "1/24/23, 3:42:06 in the afternoon";
    chats.forEach((message, index) => {
        var _a, _b, _c;
        const msg = {};
        const date = ((_a = message.match(messagePatterns.whatsapp.date[dataStructure])) === null || _a === void 0 ? void 0 : _a[0]) || defaultDate;
        msg.unixTime = moment(date, "M/D/YY, h:mm:ss A").unix();
        msg.sender = ((_b = message.match(messagePatterns.whatsapp.sender[dataStructure])) === null || _b === void 0 ? void 0 : _b[0]) || "unauthorized";
        msg.message = (_c = message.match(messagePatterns.whatsapp.message[dataStructure])) === null || _c === void 0 ? void 0 : _c[0];
        messages.push(msg);
    });
    return messages;
};
