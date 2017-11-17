package com.mycompany.myapp.service.dto;

import com.mycompany.myapp.domain.Album;
import lombok.Data;

@Data
public class ValoracionAlbumStats extends ValoracionStats{

    private Album album;

    public ValoracionAlbumStats(Album album, Double avg, Integer max, Integer min) {
        super(avg, max, min);
        this.album = album;
    }
}
