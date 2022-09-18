import { environment } from "src/environments/environment";

export class MainService{
    public static apiURL = environment.apiConfig.apiURL; 
}