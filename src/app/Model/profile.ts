import { User } from './user';
import { Instrument } from './instrument';
import { Genre } from './genre';

export class Profile {
    id: string; 
    user: User;
    city: string; 
    state: string; 
    country: string; 
    zipcode: string; 
    instruments: Instrument[]; 
    genre: Genre[]; 
}
