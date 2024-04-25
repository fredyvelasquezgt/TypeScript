"use strict";
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currrentAudio = AudioLevel.medium;
    console.log(currrentAudio);
    console.log(AudioLevel);
})();
//# sourceMappingURL=enum.js.map