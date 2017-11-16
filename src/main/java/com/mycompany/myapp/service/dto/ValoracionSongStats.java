package com.mycompany.myapp.service.dto;

import com.mycompany.myapp.domain.Song;

public class ValoracionSongStats {


private Song song;
private Double avg;
private Integer max;
private Integer min;


    public ValoracionSongStats(Song song, Double avg, Integer max, Integer min) {
        this.song = song;
        this.avg = avg;
        this.max = max;
        this.min = min;
    }

    public Song getSong() { return song; }

    public void setSong(Song song) { this.song = song; }

    public Double getAvg() { return avg; }

    public void setAvg(Double avg) { this.avg = avg; }

    public Integer getMax() { return max; }

    public void setMax(Integer max) { this.max = max; }

    public Integer getMin() { return min; }

    public void setMin(Integer min) { this.min = min; }
}
