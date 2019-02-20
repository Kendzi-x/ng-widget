export interface Weather {
  title: string;
  icon: string;
  water: number;
  temperature: number;
}

export interface Social {
  title: string;
  img: string;
  followers: number;
  following: number;
}

export interface IData {
  name: string;
  img: string;
  address: string;
  phone: number;

  weather: Weather;
  social: Social;

  type: string;
}

export const attractions: IData[] = [
  {
      name: 'Hotel 1',
      img: 'assets/images/1.JPG',
      address: 'Lorem ipsum',
      phone:  810358968999666,
      weather: {
          title: 'Hotel 1 weather',
          icon: '',
          water: 15,
          temperature: 30
      },
      social: {
          title: 'Hotel 1 social',
          img: 'assets/images/1_1.JPG',
          followers: 456,
          following: 876
      },
      type: 'hotel'
  },
  {
      name: 'Hotel 2',
      img: 'assets/images/2.JPG',
      address: 'lorem ipsum',
      phone:  8106676340106,
      weather: {
          title: 'Hotel 2 weather',
          icon: '',
          water: 26,
          temperature: 33
      },
      social: {
          title: 'Hotel 2 social',
          img: 'assets/images/2_2.JPG',
          followers: 1899,
          following: 3434
      },
      type: 'hotel'
  },
  {
      name: 'Fishing 1',
      img: 'assets/images/3.JPG',
      address: 'lorem ipsum',
      phone:  74012307207,
      weather: {
          title: 'Fishing 1 weather',
          icon: '',
          water: 15,
          temperature: 10
      },
      social: {
          title: 'Fishing 1 social',
          img: 'assets/images/3_2.JPG',
          followers: 344,
          following: 4343
      },
      type: 'fishing'
  },
  {
      name: 'Fishing 2',
      img: 'assets/images/4.JPG',
      address: 'lorem ipsum',
      phone:  79140226851,
      weather: {
          title: 'Fishing 2 weather',
          icon: '',
          water: 10,
          temperature: 12
      },
      social: {
          title: 'Fishing 2 social',
          img: 'assets/images/4_2.JPG',
          followers: 154,
          following: 687
      },
      type: 'fishing'
  },
  {
      name: 'Tour 1',
      img: 'assets/images/5.JPG',
      address: 'lorem ipsum',
      phone:  493051050030,
      weather: {
          title: 'Tour 1 weather',
          icon: '',
          water: 19,
          temperature: 25
      },
      social: {
          title: 'Tour 1 social',
          img: 'assets/images/5_2.JPG',
          followers: 38383,
          following: 39838
      },
      type: 'tours'
  },
  {
      name: 'Tour 2',
      img: 'assets/images/6.JPG',
      address: 'lorem ipsum',
      phone:  34622940471,
      weather: {
          title: 'Tour 2 weather',
          icon: '',
          water: 18,
          temperature: 22
      },
      social: {
          title: 'Tour 2 social',
          img: 'assets/images/6_2.JPG',
          followers: 3434,
          following: 8484
      },
      type: 'tours'
  }
];
