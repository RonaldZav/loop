export class Loop {
    constructor(times: number, sleepDuration: number, callback: (i: number) => void);
    execute(): Promise<void>;
    sleep(ms: number): this;
}

export function loop(timesToRepet: number, sleepTime: number, callback: (i: number) => void): Loop;
