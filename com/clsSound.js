class clsSound {
    constructor(file, loop = false, volume = 1) {
        this.Audio = new Audio(file);
        this.Audio.volume = volume;
        this.loop = loop;
        this.configAudio();

        this.Audio.muted = true;
    }



    configAudio(){
        if(this.loop == true){
            this.Audio.loop = true;
        }

    }

    /////////////////////////////////////////////////////////////////
    Play() {
        this.Audio.muted = false;
        this.Audio.play();
    }
}