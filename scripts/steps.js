function c(header, text, footer, options) {
    return { "header": header, "body": text, "footer": footer, "options": options };
}

export default const Steps = [
    c(
        "Terms of Service & Waiver of Common Sense",
        "By proceeding, you acknowledge and agree that you are entirely responsible for all actions taken thereafter. This includes, but is not limited to, any frustration, confusion, emotional distress, questionable life decisions, technical difficulties, spontaneous existential crises, property damage, or other unfortunate consequences arising from your participation.\n\nUnder no circumstances shall the creators, operators, affiliates, or anyone remotely associated with this service be held responsible for any consequences, including (but not limited to) acts of nature, acts of negligence, unexpected explosions of your patience, or incidents involving Chinese cruise missiles inexplicably being dispatched to your residence.\n\nBy clicking 'I Agree', you confirm that you understand the risks, accept all responsibility, and waive your right to complain to us about literally anything that happens afterward.\n\nYou have been warned. Probably.",
        "We are not responsible. Especially not for the missiles.",
        [
            { "text": "I Agree (I have questionable judgment)", "action": "proceed()" },
            { "text": "I Disagree (I fear consequences)", "action": "Window.close()" }
        ]
    ),
    c(
        "Confirm Installation",
        "Are you sure you want to install this application?",
        "",
        [
            { "text": "Yes", "action": "proceed()" },
            { "text": "No", "action": "Window.close" }
        ]
    )
];
