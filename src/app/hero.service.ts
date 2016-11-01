/**
 * Created by aaronbrecher on 11/1/16.
 */
import {Injectable} from '@angular/core';
import { HEROES} from "./mockHeroes";
@Injectable()

export class HeroService{
    getHeroes(): void{
        return HEROES;
    }
}