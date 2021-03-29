import { Resolver, Query, Arg, FieldResolver, Root } from 'type-graphql';
import axios from 'axios';

import { Media } from '../models';
import { MediaFilterInput } from '../inputs';
import { Medias as medias, Planets as planets, Rovers as rovers, MediaState } from '../state';

@Resolver(Media)
export class MediaResolver {
  @Query(() => Media, { nullable: true })
  async getMedia(@Arg("planetName") planetName: String, @Arg("roverName") roverName: string, @Arg("filterBy", {nullable: true}) filters: MediaFilterInput){
    const media = medias.find((media) => media.planetName === planetName && media.roverName === roverName);

    if (!media) return null;
    if (planetName === 'Mars' && ['Spirit', 'Opportunity', 'Curiosity', 'Perseverance'].includes(roverName)) {
      const keyPairs = Object.entries(filters).map(([key,value]) => `${key}=${value}`).join('&')
      const dataResponse = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?${keyPairs}&api_key=DEMO_KEY`);
      const cleanPhotos = dataResponse.data.photos.map((photo: any) => {
        return {id: photo.id.toString(), url: photo.img_src, dateTaken: photo.earth_date, cameraName: photo.camera.name};
      });
      return {...media, photos: cleanPhotos}
    }
    const filteredPhotos = media.photos.filter(photo => true && (filters.camera? photo.cameraName === filters.camera: true) && (filters.earth_date? photo.dateTaken === filters.earth_date: true));
    return {...media, photos: filteredPhotos};
  }

  @FieldResolver()
  async planet(@Root() media: MediaState){
    return planets.find(planet => planet.name === media.planetName);
  }
  @FieldResolver()
  async rover(@Root() media: MediaState){
    return rovers.find(rover => rover.name === media.roverName);
  }
}