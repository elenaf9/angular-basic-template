

export enum ContactType {
    GROUP = 'group',
    PERSON = 'person'
}

// hier könnte man auch mal einen Kommentar reinschreiben

export type Uuid = string;

export class Contact {

    constructor(
        private _id: Uuid,
        private _name: string,
        private _type: ContactType
    ) { }

    get id(): Uuid {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get type(): ContactType {
        return this._type;
    }

    set type(type: ContactType) {
        this._type = type;
    }

}
