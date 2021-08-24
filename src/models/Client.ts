class Client {

	private _id: number | undefined;

	private _name: string;

	private _mail: string;

	public constructor(name: string, mail: string, id: number | undefined = undefined) {
		this._name = name;
		this._mail = mail;
		this._id = id;
	}

	public get Id(): number | undefined {
		return this._id;
	}

	public set Id(id: number | undefined) {
		this._id = id;
	}

	public get Name(): string {
		return this._name;
	}

	public set Name(name: string) {
		this._name = name;
	}

	public get Mail(): string {
		return this._mail;
	}

	public set Mail(mail: string) {
		this._mail = mail;
	}
}

export default Client;