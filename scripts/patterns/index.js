export const messagePatterns = {
    whatsapp: {
        version: {
            ios: /\[\d{1,2}\/\d{1,2}\/\d{1,2}, \d{1,2}:\d{1,2}:\d{1,2} (?:in the (morning|afternoon|evening))?].*/,
            android: /^\d{1,2}\/\d{1,2}\/\d{2}, \d{1,2}:\d{2}\s[APap][Mm]\s-.*/,
        },
        date: {
            ios: /(?<=\[).*?(?=\])/,
            android: /^\d{1,2}\/\d{1,2}\/\d{2}, \d{1,2}:\d{2}\s[APap][Mm]/,
        },
        message: {
            ios: /(?<=\] (.{1,32}?): )(.+)/,
            android: /^[^:]+:[^:]+:(.*)$/,
        },
        sender: {
            ios: /(?<=\] )\s*.(.*?)(?=:\s)/,
            android: /(?<= - )[^:]+(?=:)/,
        },
    },
};
