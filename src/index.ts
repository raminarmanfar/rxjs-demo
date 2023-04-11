import { of, map, filter, Observable } from "rxjs";

function demo(values: number[]): Observable<number> {
    return of(...values).pipe(
        filter(x => x % 2 === 0),
        map(x => x * x)
    );
}

demo([1, 2, 3, 4, 5, 6]).subscribe(res => console.log(res));
