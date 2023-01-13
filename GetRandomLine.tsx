
export default function GetRandomLine() {
    let lines = ["After all, tomorrow is another day!",
        "I'm going to make him an offer he can't refuse.",
        "I'll be back",
        "Houston, we have a problem.",
        "Yo, Adrian!",
        "I am your father.",
        "Well, nobody's perfect.",
        "It’s what it is.",
        "A million dollars isn’t cool. You know what’s cool? A billion dollars.",
        "I have to return some videotapes.",
        "I don’t want to survive. I want to live.",
        "Get busy living, or get busy dying.",
        "Calling it your job don’t make it right, boss.",
        "Go ahead, make my day.",
        "If we didn't do what we loved, we wouldn't exist.",
        "Every man dies, not every man really lives.",
        "Ideals are peaceful. History is violent.",
        "What we do in life echoes in eternity.",
        "We Shall Never Surrender.",
        "The only failure is not to try.",
        "Hope is not a strategy."];
    return lines[Math.floor(Math.random() * lines.length)];
}