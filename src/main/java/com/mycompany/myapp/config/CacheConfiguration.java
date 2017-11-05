package com.mycompany.myapp.config;

import io.github.jhipster.config.JHipsterProperties;
import org.ehcache.config.builders.CacheConfigurationBuilder;
import org.ehcache.config.builders.ResourcePoolsBuilder;
import org.ehcache.expiry.Duration;
import org.ehcache.expiry.Expirations;
import org.ehcache.jsr107.Eh107Configuration;
import org.springframework.boot.autoconfigure.AutoConfigureAfter;
import org.springframework.boot.autoconfigure.AutoConfigureBefore;
import org.springframework.boot.autoconfigure.cache.JCacheManagerCustomizer;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.concurrent.TimeUnit;

@Configuration
@EnableCaching
@AutoConfigureAfter(value = { MetricsConfiguration.class })
@AutoConfigureBefore(value = { WebConfigurer.class, DatabaseConfiguration.class })
public class CacheConfiguration {

    private final javax.cache.configuration.Configuration<Object, Object> jcacheConfiguration;

    public CacheConfiguration(JHipsterProperties jHipsterProperties) {
        JHipsterProperties.Cache.Ehcache ehcache =
            jHipsterProperties.getCache().getEhcache();

        jcacheConfiguration = Eh107Configuration.fromEhcacheCacheConfiguration(
            CacheConfigurationBuilder.newCacheConfigurationBuilder(Object.class, Object.class,
                ResourcePoolsBuilder.heap(ehcache.getMaxEntries()))
                .withExpiry(Expirations.timeToLiveExpiration(Duration.of(ehcache.getTimeToLiveSeconds(), TimeUnit.SECONDS)))
                .build());
    }

    @Bean
    public JCacheManagerCustomizer cacheManagerCustomizer() {
        return cm -> {
            cm.createCache("users", jcacheConfiguration);
            cm.createCache(com.mycompany.myapp.domain.User.class.getName(), jcacheConfiguration);
            cm.createCache(com.mycompany.myapp.domain.Authority.class.getName(), jcacheConfiguration);
            cm.createCache(com.mycompany.myapp.domain.User.class.getName() + ".authorities", jcacheConfiguration);
            cm.createCache(com.mycompany.myapp.domain.SocialUserConnection.class.getName(), jcacheConfiguration);
            cm.createCache(com.mycompany.myapp.domain.Country.class.getName(), jcacheConfiguration);
            cm.createCache(com.mycompany.myapp.domain.Genre.class.getName(), jcacheConfiguration);
            cm.createCache(com.mycompany.myapp.domain.Sex.class.getName(), jcacheConfiguration);
            cm.createCache(com.mycompany.myapp.domain.Status.class.getName(), jcacheConfiguration);
            cm.createCache(com.mycompany.myapp.domain.Album.class.getName(), jcacheConfiguration);
            cm.createCache(com.mycompany.myapp.domain.Song.class.getName(), jcacheConfiguration);
            cm.createCache(com.mycompany.myapp.domain.Review.class.getName(), jcacheConfiguration);
            cm.createCache(com.mycompany.myapp.domain.Artist.class.getName(), jcacheConfiguration);
            cm.createCache(com.mycompany.myapp.domain.Band.class.getName(), jcacheConfiguration);
            cm.createCache(com.mycompany.myapp.domain.Collection.class.getName(), jcacheConfiguration);
            cm.createCache(com.mycompany.myapp.domain.Social.class.getName(), jcacheConfiguration);
            cm.createCache(com.mycompany.myapp.domain.Instrument.class.getName(), jcacheConfiguration);
            cm.createCache(com.mycompany.myapp.domain.Label.class.getName(), jcacheConfiguration);
            cm.createCache(com.mycompany.myapp.domain.UserExt.class.getName(), jcacheConfiguration);
            cm.createCache(com.mycompany.myapp.domain.ValoracionAlbum.class.getName(), jcacheConfiguration);
            cm.createCache(com.mycompany.myapp.domain.ValoracionSong.class.getName(), jcacheConfiguration);
            cm.createCache(com.mycompany.myapp.domain.Album.class.getName() + ".songs", jcacheConfiguration);
            cm.createCache(com.mycompany.myapp.domain.Band.class.getName() + ".albums", jcacheConfiguration);
            cm.createCache(com.mycompany.myapp.domain.Band.class.getName() + ".bands", jcacheConfiguration);
            cm.createCache(com.mycompany.myapp.domain.Album.class.getName() + ".bands", jcacheConfiguration);
            cm.createCache(com.mycompany.myapp.domain.Band.class.getName() + ".nameAlbums", jcacheConfiguration);
            cm.createCache(com.mycompany.myapp.domain.Album.class.getName() + ".songNames", jcacheConfiguration);
            cm.createCache(com.mycompany.myapp.domain.Band.class.getName() + ".nameArtists", jcacheConfiguration);
            // jhipster-needle-ehcache-add-entry
        };
    }
}
