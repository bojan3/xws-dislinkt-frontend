import { Gender } from "./Gender";

export class Account {
    id: string;
    username: string;
    password: string;
    email: string;
    phoneNumber: string;
    gender: Gender;
    biography: string;
    isPublic: boolean;
    job: string;
    education: string;

    constructor(id: string, username: string, password: string, email: string, phoneNumber: string,
        gender: Gender, biography: string, isPublic: boolean, job: string, education: string) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.gender = gender;
        this.biography = biography;
        this.isPublic = isPublic;
        this.job = job;
        this.education = education;
    }
}
