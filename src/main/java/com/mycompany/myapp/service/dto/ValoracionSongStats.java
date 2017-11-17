package com.mycompany.myapp.service.dto;

import com.mycompany.myapp.domain.Song;

import lombok.Data;

@Data
public class ValoracionSongStats extends ValoracionStats{


private Song song;

    public ValoracionSongStats(Song song,Double avg, Integer max, Integer min) {
        super(avg, max, min);
        this.song = song;
    }
}
