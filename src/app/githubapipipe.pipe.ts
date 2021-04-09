import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'today'
})
export class GithubapipipePipe implements PipeTransform {

  private _today = Date();
public get today() {
  return this._today;
}
public set today(value) {
  this._today = value;
}
myDate() {
  console.log(Date.now())
} 

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
